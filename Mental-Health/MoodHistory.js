/**
 * @fileoverview MoodHistory page - allows users to view history of their mood entries (journal + mood #)
 */

import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View, FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Modal } from 'react-native';
import KIC_Style from "../Components/Style";
import FeedHeader from '../Components/FeedHeader';
import { Date as CommonDate } from "../gen/proto/common_pb";
import { useNavigation } from '@react-navigation/native';
import ClientManager from "../Managers/ClientManager";
import {GetHealthDataForUserRequest} from "../gen/proto/health_pb";
import UserManager from "../Managers/UserManager";
import HealthLogBlurb from "../Components/HealthLogBlurb";



/**
 * @class Contains function for rendering Mood History Tracker screen.
 */
export default function MoodHistory() {
    /**
     * Renders MentalHealth mood history screen components.
     * @returns {Component}
     */

    const [expanded, setExpanded] = React.useState(true);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [journalString, setString] = React.useState("");
    const navigation = useNavigation();
    const [healthData, setHealthData]= React.useState([]);
    const [authString, setAuthString] = React.useState("");
    const [userID, setUserID] = React.useState(null);

    let um = new UserManager();

    /**
     * Runs when component first loads
     *
     * @function useEffect
     */
    useEffect(() => {
        console.log("Health data:" + healthData);
        fetchLogs().then(response => {
            console.log("Fetched logs successfully");
        }).catch(error => {
            console.log("Error fetching logs: " + error)
        });
    },[])


    /**
     * The start of the process to fetch mood data;
     * Handles creating a UserManager to fetch the authstring
     *
     * @function fetchLogs
     * @returns {String} authString The string necessary for the authorization to send requests,
     * then calls the next function, callGetUserByUserID
     */
    const fetchLogs = () => {
        // Create a new UserManager, which will provide the authString
        return um.getAuthString().then((um,authString) => {callGetUserID(authString)});
    }


    /**
     * Handles making the GetUserByID request
     *
     * @function callGetUserByUserID
     * @param {String} authString the auth string to be used as part of the authorization header for requests
     * @returns {GetUserByIDResponse} res then calls the next function, callGetHealthForUser
     */
    const callGetUserID= (authString) => {
        setAuthString(authString);
        return um.getMyUserID().then(userID  => callGetHealthForUser(userID, authString));
    }


    /**
     * Handles making the GetHealthDataForUserRequest
     *
     * @function callGetHealthForUser
     * @param {Number} userID value
     * @param {String} authString The auth string to be used as part of the authorization header for requests
     * @returns {GetHealthDataForUserResponse} res then calls the next function, parseHealthData
     */
    const callGetHealthForUser = (userID, authString) => {
        setUserID(userID);
        let cm = new ClientManager();
        let client = cm.createHealthClient();
        //create health client


        // Create the request & set the active user's ID
        let req = new GetHealthDataForUserRequest();
        req.setUserid(userID);

        return client.getHealthDataForUser(req, {'Authorization': authString}).then(res => {updateState(authString, res)});
    }

    /**
     * Retrieves the health data list from the response object and saves it to the state
     *
     * @function updateState
     * @param {String} authString The auth string to be used as part of the authorization header for requests
     * @param {GetHealthDataForUserResponse} res Returned in response to GetHealthDataForUserRequest
     */
    const updateState= (authString, res) => {
        console.log("res" + res.getHealthdataList());
        setHealthData(res.getHealthdataList());
        // Save health data list to state


    }


    return (
        <SafeAreaView style={KIC_Style.outContainer}>
            <FeedHeader navigation={navigation}/>
            <SafeAreaView style={[KIC_Style.innerContainer, {marginTop: 30}]}>
                <ScrollView>
                    <Image
                        style={{width: 180, height: 180, resizeMode: 'contain', alignSelf: 'center'}}
                        source={require('../assets/kic.png')}
                    />
                    <Text style={KIC_Style.title}> Mood History Tracker </Text>
                    {/*FlatList that renders a mental health entry log per entry in health data list*/}
                    <FlatList
                        data={healthData}
                        renderItem={({item}) => (
                            <HealthLogBlurb
                                navigation = {navigation}
                                authString = {authString}
                                myUserid = {userID}
                                logDate = {String(item.getLogdate())}
                                score = {item.getScore()}
                                entry = {item.getJournalname()}

                             />

                        )}
                            keyExtractor={item=> String(item.getLogdate())}

                    />


                    <TouchableOpacity
                        style={KIC_Style.button}
                        onPress={() =>
                            navigation.navigate('MentalHealthLog')}>
                        <Text style={KIC_Style.button_font}>Log Mental Health!</Text>
                    </TouchableOpacity>
                    <StatusBar style="auto"/>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaView>
    );

}

/**
 * @constant styles creates stylesheet for FindHelp screen components
 */
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7ab7dd',
    },
    accordion: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',

    },
    button: {
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        elevation: 2
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    buttonClose: {
        backgroundColor: "#7ab7dd"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})



