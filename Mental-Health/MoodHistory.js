/**
 * @fileoverview MoodHistory page - allows users to view history of their mood entries (journal + mood #)
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Modal } from 'react-native';
import KIC_Style from "../Components/Style";
import FeedHeader from '../Components/FeedHeader';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



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
    const handlePress = () => setExpanded(!expanded);
    const [journalString, setString] = React.useState("");
    const navigation = useNavigation();
    return (
        <SafeAreaView style={KIC_Style.outContainer}>
            <FeedHeader navigation={navigation} />
            <SafeAreaView style={[KIC_Style.innerContainer, {marginTop:30}]}>
                <ScrollView>
                    <Image
                        style={{ width: 180, height: 180, resizeMode: 'contain', alignSelf: 'center' }}
                        source={require('../assets/kic.png')}
                    />
                    <Text style={KIC_Style.title}>  Mood History Tracker  </Text>
                    <List.AccordionGroup>
                        <List.Accordion
                            id="1"
                            style={style.accordion}
                            descriptionNumberOfLines={10}
                            title="January 1st, 2021"
                            left={props => <List.Icon {...props} color='#b3d2db' icon="calendar" />}>
                            <List.Item title="Mood: -5"
                                onPress={() => {
                                    setString("I feel very down today.")
                                    setModalVisible(true)
                                }}

                            />
                        </List.Accordion>
                        <List.Accordion
                            id="2"
                            style={style.accordion}
                            descriptionNumberOfLines={10}
                            title="January 5th, 2021"
                            left={props => <List.Icon {...props} color='#b3d2db' icon="calendar" />}
                            expanded={expanded}
                            onPress={handlePress}>
                            <List.Item title="Mood: 2"
                                onPress={() => {
                                    setString("I feel a little anxious, but I'm happy.")
                                    setModalVisible(true)
                                }}
                            />
                        </List.Accordion>
                    </List.AccordionGroup>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        onRequestClose={() => setModalVisible(false)}
                        visible={modalVisible}
                    >

                        <View style={style.centeredView}>
                            <View style={style.modalView}>
                                <Text style={style.modalText}>{journalString}</Text>
                                <TouchableOpacity
                                    style={[style.button, style.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={KIC_Style.button_font}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    <TouchableOpacity
                        style={KIC_Style.button}
                        onPress={() =>
                            navigation.navigate('MentalHealthLog')}>
                        <Text style={KIC_Style.button_font}>Log Mental Health!</Text>
                    </TouchableOpacity>
                    <StatusBar style="auto" />
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




