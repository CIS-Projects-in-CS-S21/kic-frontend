/**
 * @fileoverview HealthLogBlurb component presents a blurb with previous mental health log entry with date and mood number, and clicking on this blurb presents the entry as a modal.
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
import { Date as CommonDate } from "../gen/proto/common_pb";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Modal } from 'react-native';
import KIC_Style from "../Components/Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import {DeleteHealthDataForUserRequest} from "../gen/proto/health_pb";
import ClientManager from "../Managers/ClientManager";



/**
 * @class Contains function for rendering the health log blurb
 * TO USE THIS COMPONENT, YOU NEED TO PASS IN AN AUTHSTRING AND A USERID FOR THE USER WHOSE LOG BEING DISPLAYED.
 */
class HealthLogBlurb extends React.Component {

    /** Class constructor
   * @param {String} authString The authstring for making requests
   * @param {useNavigation} navigation The navigation prop used to navigate between pages
   * @param {String} logDate String version of date of mental health entry (year,month,day)
   * @param {String} entry String containing journal entry associated with log.
   * @param {Number} score The number associated with mental health log (-5 poor to 5 good)
   * @param {Boolean} modalVisible Boolean regrading modal being present. Is set as false by default and turns true when user clicks on date.
   * @param {String} dateString The string representing the logDate as a string. Set initially as an empty string and logDate is parsed to display string as "month/date/year"
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
            modalVisible: false,
            dateString: "",
        };
        this.initLog = this.initLog.bind(this)
    }


    /**
     * Runs when component first loads
     *
     */
    componentDidMount(){
        this.initLog();
    }

    /**
     * Parses logDate into string with correct view.
     */
    initLog() {
        //console.log("Date: "+this.props.logDate)
        //console.log("init log");
        let stringDate = this.state.logDate;
        let dateParsed = stringDate.split(/[',']/);
        let date = new CommonDate();
        let year = dateParsed[0];
        let month = dateParsed[1];
        let day = dateParsed[2];
        date.setYear(year);
        date.setMonth(month);
        date.setDay(day);
        let dateView = month + "/" + day + "/" +  year;
        this.setState({
            dateString: dateView
        })

    }

    /**
     * Sets state.wasRemoved to true if the log for that date was just deleted
     *
     */
    handleRemovedEntry(){
        this.setState({
            wasRemoved: true,
        })
    }
    /**
     * Handles removing a log from user's Mood History
     * precondition: none
     * post condition: handleRemovedEntry
     * @exception error catches error if mental health entry is not able to be deleted
     * @returns deleteHealthDataForUserResponse Returns response when deleting health data
     */
    handleRemoveEntry = () => {
        let cm = new ClientManager();
        let client = cm.createHealthClient();
        //only delete one entry, from date specified
        let req = new DeleteHealthDataForUserRequest();
        req.setUserid(this.state.myUserid);
        req.setAll(false);
        let stringDate = this.state.logDate;
        let dateParsed = stringDate.split(/[',']/);
        let date = new CommonDate();
        let year = dateParsed[0];
        let month = dateParsed[1];
        let day = dateParsed[2];
        date.setYear(year);
        date.setMonth(month);
        date.setDay(day);
        req.setDatetoremove(date);
        let dateView = month + "/" + day + "/" +  year;
        this.setState({
            dateString: dateView
        })
        console.log("Sent request to delete health data");
        return client.deleteHealthDataForUser(req, {'Authorization': this.props.authString}).then(res => {
            //console.log("Delete health data response" + res)
            //console.log("Entries deleted:" + res.getEntriesdeleted())
            alert("Entry removed!")
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
        if (this.state.wasRemoved){
            return null;
        } else {
            return (
                 <View style={styles.container}>
                    {/* File icon */}
                    <Ionicons name="calendar-outline" color='#ffff' size={25} />

                    {/* Log Entry */}
                    <View style ={styles.userInfo}>
                        {/* Log's display date and score */}
                        <View style ={styles.userID}>
                            {/* Display name */}
                            <Text style ={styles.textUsername}
                                  onPress={() => {
                                      this.setState({
                                          modalVisible:true,
                                      })
                                  }}
                            > {this.state.dateString}
                            </Text>
                        </View>
                        {/* Score */}
                        <Text style ={styles.textBio}> Score: {this.state.score}</Text>


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
                     {/* Display modal */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        onRequestClose={() =>
                            this.setState({
                                modalVisible:false,
                            }) }
                        visible={this.state.modalVisible}
                    >

                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={{ marginBottom: 6, }}>
                                    <Text style={styles.modalTitle}>Date: {this.state.dateString} </Text>
                                    <Text style={styles.modalTitle}>Score: {this.state.score}</Text>
                                </View>
                                <Text style={styles.modalTitle}>Entry:</Text>
                                <Text style={styles.modalText}>{this.state.entry}</Text>
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() =>
                                        this.setState(prevState => ({
                                            modalVisible: !prevState.modalVisible
                                        }))}>
                                    <Text style={KIC_Style.button_font}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            );
        }
    }
}

/**
 * @constant styles creates stylesheet for an individual HealthLogBlurb's components.
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    buttonClose: {
        backgroundColor: "#7ab7dd",
        alignSelf: "center",
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 2,
        textAlign: "left"
    },
    modalText: {
        fontSize: 12,
        marginBottom: 15,
        textAlign: "left"
    },
    textBio: {
        fontSize: 13,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "left",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
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
    button: {
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        elevation: 2
    },
});

export default HealthLogBlurb;


