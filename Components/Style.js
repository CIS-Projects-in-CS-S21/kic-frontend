/**
 * @fileoverview This contains the KIC_style stylesheet, which is used for styling the entire application.
 */
import { StyleSheet, Platform } from 'react-native';

/**
 * @constant Contains stylesheet for general application views including containers and buttons
 */
const KIC_Style = StyleSheet.create({
    outContainer: {
        flex:1,
        fontFamily: 'AppleSDGothicNeo-Regular',
        flexDirection: 'column',
    },
    container: {
        flex: 1,
        fontFamily: 'AppleSDGothicNeo-Regular',
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7ab7dd',
    },
    innerContainer: {
        flex: 1,
        fontFamily: 'AppleSDGothicNeo-Regular',
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
        fontFamily: 'OpenSans-SemiBoldItalic',
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 5,
        textAlign: "center",
        marginTop:3,
        marginHorizontal:3
    },
    titlePost: {
        color: '#b3d2db',
        fontFamily: 'AppleSDGothicNeo-Regular',
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
    
    authInput: {
        borderWidth: 1,
        borderColor: '#CDCDCD',
        borderRadius: 10, 
        padding: 1,
        margin: 3,
        alignSelf: 'center',
        ...Platform.select({
            ios: {
                width: 200,
            },
            android: {
                width: 200,
            },
            default: {
                width: '80%'
            }
          }),
        
    },

    authButton: {
        borderRadius: 25,
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: "#7ab7dd",
        marginTop: 7,
        padding: 10,
        ...Platform.select({
            ios: {
                width: 200,
                height: 50
            },
            android: {
                width: 200,
                height: 50,
            },
            default: {
                width: '80%'
            }
          }),
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
        //fontColor: '#0000',
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
        //fontColor: '#0000',
        borderWidth: .2,
        borderColor: '#b3d2db',
        borderRadius: 20,
        padding: 10,
        minHeight: 10,
        width: "90%",
        margin: 10
    },
    findHelpInput: {
        alignSelf: 'center',
        backgroundColor: '#ffff',
        //fontColor: '#0000',
        marginTop: 30,
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


