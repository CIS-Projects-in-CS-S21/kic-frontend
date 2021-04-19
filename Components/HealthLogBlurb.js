/**
 * @fileoverview HealthLogBlurb page - blurb with previous mental health log entry
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
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ClientManager from "../Managers/ClientManager";
import { Date as CommonDate } from "../gen/proto/common_pb";
import {
    DeleteHealthDataForUserRequest,
    GetHealthDataByDateRequest,
    GetHealthDataForUserRequest, MentalHealthLog as HealthLog,
    UpdateHealthDataForDateRequest
} from "../gen/proto/health_pb";
import UserManager from "../Managers/UserManager";
import Ionicons from "react-native-vector-icons/Ionicons";



/**
 * @class Contains function for rendering the health log blurb
 * TO USE THIS COMPONENT, YOU NEED TO PASS IN AN AUTHSTRING AND A USERID FOR THE USER WHOSE LOG BEING DISPLAYED.
 */
class HealthLogBlurb extends React.Component {

    /*
     * Class constructor
     */
    constructor(props) {
        super();

        // Define the initial state
        this.state = {
            authString: props.authString,

            // myUserid is the id of the current active user
            myUserid: props.myUserid,
            logDate: props.logDate,
            entry: props.entry,
            score: props.score,
            wasRemoved: false,
        };

        this.initLog = this.initLog.bind(this)
    }

    /**
     * Runs when component first loads
     *
     * @function componentDidMount()
     */
    componentDidMount(){
        this.initLog();
    }

    initLog() {
        // Populate blurb with given user info
        console.log("Date: "+this.props.logDate)
        console.log("init log");
        // this.callGetHealthByDate().then(response => {
        //     console.log("Fetched info for mental health log for date " + this.state.logDate + " successfully");
        // }).catch(error => {
        //     console.log("Error mounting mental health log for date" + this.state.logDate + ": " + error);
        // });

    }

    // /**
    //  * Handles making the GetHealthDataForUserRequest request
    //  *
    //  * @function callGetHealthByDate
    //  * @param {String} authString the auth string to be used as part of the authorization header for requests
    //  * @returns {GetHealthDataByDateResponse} res then calls the next function, callGetFriendsForUser
    //  */
    // callGetHealthByDate(){
    //     let cm = new ClientManager();
    //     let client = cm.createHealthClient();
    //     let req = new GetHealthDataByDateRequest();
    //
    //
    //     console.log("Started making healthdatabydate request");
    //     req.setUserid(this.state.myUserid);
    //     req.setLogdate(new CommonDate(this.props.logDate));
    //     return client.getHealthDataByDate(req, {'Authorization': this.state.authString}).then(res => {this.setLogInfo(res)})
    // }
    //
    // /**
    //  * Parses user information from a GetHealthDataByDateRequest, checks if there is health data for a log date, and updates the state
    //  *
    //  * @function setLogInfo
    //  * @param {GetHealthDataByDateResponse} res The response object from a GetHealthDataByDateRequest
    //  */
    // setLogInfo(res){
    //     {/* Store user information */}
    //
    //     let logList = res.getHealthdataList();
    //     let currentLog = logList[0];
    //     console.log("Current log:" + logList.toString());
    //     let myScore = currentLog.getScore();
    //     let myEntry = currentLog.getJournalname();
    //
    //     this.setState({
    //         logDate: myLogDate,
    //         score: myScore,
    //         entry: myEntry,
    //     })
    //
    //     console.log("Health Log is for  " + this.state.logDate)
    //
    //
    // }

    /**
     * Sets state.wasRemoved to true if the log for that date was just deleted
     *
     * @function handleRemovedEntry
     */
    handleRemovedEntry(){
        this.setState({
            wasRemoved: true,
        })
    }


    /**
     * Handles removing a log from user's Mood History
     *
     * @function handleRemoveEntry
     */
    handleRemoveEntry = () => {

        let cm = new ClientManager();
        let client = cm.createHealthClient();

        //only delete one entry, from date specified
        let req = new DeleteHealthDataForUserRequest();
        req.setUserid(this.state.myUserid);
        req.setAll(false);
        req.setDatetoremove(new CommonDate(this.state.logDate));



        return client.deleteHealthDataForUser(req, {'Authorization': this.props.authString}).then(res => {
            console.log("Delete health data response" + res)
            this.handleRemovedEntry();
        }).catch(error => {
            console.log("Error deleting mental health log for date" + this.state.logDate + ": " + error);
        });
    }

    /**
     * Renders the Mental Health Log Entry
     * @returns a {HealthLogBlurb}
     */
    render() {
        return (
            <View style={styles.container}>
                {/* File icon */}
                <Ionicons name="calendar-outline" color='#ffff' size={25} />

                {/* Log Entry */}
                <View style ={styles.userInfo}>
                    {/* Log's display date and score */}
                    <View style ={styles.userID}>
                        {/* Display name */}
                        <Text style ={styles.textUsername}> {this.state.logDate}</Text>
                    </View>
                    {/* Score */}
                    <Text style ={styles.textBio}> Score: {this.state.score}</Text>
                    <Text style ={styles.textBio}> Entry: {this.state.entry}</Text>
                </View>

                {/* Display delete entry button */}
                   <View>
                        <TouchableOpacity
                            style={styles.choiceButton}
                            onPress = {this.handleRemoveEntry}>
                            <Ionicons name="trash-outline" color='#ffff' size={25} />
                        </TouchableOpacity>
                    </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

/**
 * @constant styles creates stylesheet for an individual UserBlurb's components.
 */
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#c3dee6',
        paddingVertical: 20,
        justifyContent: 'flex-start',
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 10,
        paddingLeft: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
    icon: {
        width: 70,
        height: 70,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
        marginRight: 15,
        marginLeft: 15,
    },
    userInfo: {
        flexDirection: 'column',
        width: '80%',
        paddingRight: 10,
        flex: 1,
    },
    userID: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    textUsername: {
        fontSize: 15,
        marginRight: 5,
        fontWeight: "bold",
    },
    textBio: {
        fontSize: 13,
    },
    disabledButton: {
        width: "80%",
        borderRadius: 25,
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: "#565657",
        marginTop: 7,
        padding: 10,
    },
});

export default HealthLogBlurb;


