import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import {StatusBar} from "expo-status-bar";

const KIC_Style = StyleSheet.create({
    outContainer: {
        flex:1,
        flexDirection: 'column',
    },
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7ab7dd',
    },
    innerContainer: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7ab7dd',
        ...Platform.select({
            ios: {
              top:30,
              marginBottom:30,
            },
            android: {
              top:30,
              marginBottom:30,
            },
            default: {
              top:60,
              marginBottom: 60,
            }
          }),
    },

    title: {
        color: '#b3d2db',
        //fontFamily: 'sans-serif',
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 5
    },
    titlePost: {
        color: '#b3d2db',
        //fontFamily: 'sans-serif',
        fontSize: 30,
        alignSelf: 'center',
        flex: 1,
        fontWeight: "bold",
        paddingBottom: 5

    },

    button: {
        width: "80%",
        borderRadius: 25,
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: "#7ab7dd",
        marginTop: 7,
        padding: 10,
    },
    button2: {
        width: "80%",
        borderRadius: 25,
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: "#7ab7dd",
        marginTop: 7,
        marginBottom: 7,
        padding: 10,
    },
    button_post: {
        width: "100%",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#7ab7dd",
        marginTop: 1,
        padding: 10,
    },
    button_font: {
        color: '#ffff'
    },
    input: {
        borderWidth: .2,
        borderColor: '#CDCDCD',
        padding: 1
    },
    postInput: {
        alignSelf: 'center',
        backgroundColor: '#b3d2db',
        color: '#ffff',
        borderWidth: .2,
        borderColor: '#b3d2db',
        borderRadius: 20,
        padding: 10,
        minHeight: 10,
        width: "90%",
        margin: 10
    },
    journalInput: {
        borderWidth: .2,
        borderColor: '#CDCDCD',
        padding: 1,
        minHeight: 50,
        width: "70%",
    },
    commentInput: {
        alignSelf: 'center',
        backgroundColor: '#ffff',
        fontColor: '#0000',
        borderWidth: .2,
        borderColor: '#b3d2db',
        borderRadius: 20,
        padding: 10,
        minHeight: 10,
        width: "90%",
        margin: 10
    },
    searchInput: {
        alignSelf: 'center',
        backgroundColor: '#ffff',
        fontColor: '#0000',
        borderWidth: .2,
        borderColor: '#b3d2db',
        borderRadius: 20,
        padding: 10,
        minHeight: 10,
        width: "90%",
        margin: 10
    },
});

export default KIC_Style;


