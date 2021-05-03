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
        flexDirection: 'column',
        ...Platform.select({
            ios: {
              fontFamily: 'AppleSDGothicNeo-Regular'
      
            },
            android: {
              fontFamily: 'Roboto',
      
            },
            default: {
              fontFamily: 'AppleSDGothicNeo-Regular'
            }
          }),
    },
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7ab7dd',
        ...Platform.select({
            ios: {
              fontFamily: 'AppleSDGothicNeo-Regular'
      
            },
            android: {
              fontFamily: 'Roboto',
      
            },
            default: {
              fontFamily: 'AppleSDGothicNeo-Regular'
            }
          }),
    },
    innerContainer: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7ab7dd',
        ...Platform.select({
            ios: {
                fontFamily: 'AppleSDGothicNeo-Regular',
              top:30,
              marginBottom:30,
            },
            android: {
                fontFamily: 'Roboto',
              top:30,
              marginBottom:30,
            },
            default: {
                fontFamily: 'AppleSDGothicNeo-Regular',

              top:60,
              marginBottom: 60,
            }
          }),
    },

    title: {
        color: '#b3d2db',
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 5,
        textAlign: "center",
        marginTop:3,
        marginHorizontal:3,
        ...Platform.select({
            ios: {
              fontFamily: 'AppleSDGothicNeo-Bold'
      
            },
            android: {
              fontFamily: 'Roboto',
              fontWeight: 'bold',
      
            },
            default: {
              fontFamily: 'AppleSDGothicNeo-Bold'
            }
          }),
    },
    titlePost: {
        color: '#b3d2db',
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
        ...Platform.select({
            ios: {
              fontFamily: 'AppleSDGothicNeo-Regular'
      
            },
            android: {
              fontFamily: 'Roboto',
      
            },
            default: {
              fontFamily: 'AppleSDGothicNeo-Regular'
            }
          }),
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
        ...Platform.select({
            ios: {
              fontFamily: 'AppleSDGothicNeo-Regular'
      
            },
            android: {
              fontFamily: 'Roboto',
      
            },
            default: {
              fontFamily: 'AppleSDGothicNeo-Regular'
            }
          }),
    },
    button_font: {
        color: '#ffff',
        ...Platform.select({
            ios: {
              fontFamily: 'AppleSDGothicNeo-Regular'
      
            },
            android: {
              fontFamily: 'Roboto',
      
            },
            default: {
              fontFamily: 'AppleSDGothicNeo-Regular'
            }
          }),
    },
    input: {
        borderWidth: .2,
        borderColor: '#CDCDCD',
        padding: 1,
        ...Platform.select({
            ios: {
              fontFamily: 'AppleSDGothicNeo-Regular'
      
            },
            android: {
              fontFamily: 'Roboto',
      
            },
            default: {
              fontFamily: 'AppleSDGothicNeo-Regular'
            }
          }),
    },
    
    authInput: {
        borderWidth: 1,
        borderColor: '#CDCDCD',
        borderRadius: 5, 
        padding: 1,
        margin: 3,
        alignSelf: 'center',
        
        ...Platform.select({
            ios: {
                fontFamily: 'AppleSDGothicNeo-Regular',
                width: 200,
            },
            android: {
                width: 200,
                fontFamily: 'Roboto',

            },
            default: {
                fontFamily: 'AppleSDGothicNeo-Regular',
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
                height: 50,
                fontFamily: 'AppleSDGothicNeo-Regular',

            },
            android: {
                fontFamily: 'Roboto',
                width: 200,
                height: 50,
            },
            default: {
                width: '80%',
                fontFamily: 'AppleSDGothicNeo-Regular',

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
        margin: 10,
        ...Platform.select({
            ios: {
              fontFamily: 'AppleSDGothicNeo-Regular'
      
            },
            android: {
              fontFamily: 'Roboto',
      
            },
            default: {
              fontFamily: 'AppleSDGothicNeo-Regular'
            }
          }),
    },
    journalInput: {
        borderWidth: .2,
        borderColor: '#CDCDCD',
        padding: 1,
        minHeight: 50,
        width: "70%",
        marginBottom: 10,
        ...Platform.select({
            ios: {
              fontFamily: 'AppleSDGothicNeo-Regular'
      
            },
            android: {
              fontFamily: 'Roboto',
      
            },
            default: {
              fontFamily: 'AppleSDGothicNeo-Regular'
            }
          }),
    },
    commentInput: {
        alignSelf: 'center',
        backgroundColor: '#ffff',
        borderWidth: .2,
        borderColor: '#b3d2db',
        borderRadius: 20,
        padding:10,
        minHeight: 10,
        width: "90%",
        margin: 10,
        ...Platform.select({
            ios: {
              fontFamily: 'AppleSDGothicNeo-Regular'
      
            },
            android: {
              fontFamily: 'Roboto',
      
            },
            default: {
              fontFamily: 'AppleSDGothicNeo-Regular'
            }
          }),
    },
    searchInput: {
        alignSelf: 'center',
        backgroundColor: '#ffff',
        borderWidth: .2,
        borderColor: '#b3d2db',
        borderRadius: 20,
        padding: 10,
        minHeight: 10,
        width: "90%",
        margin: 10,
        ...Platform.select({
            ios: {
              fontFamily: 'AppleSDGothicNeo-Regular'
      
            },
            android: {
              fontFamily: 'Roboto',
      
            },
            default: {
              fontFamily: 'AppleSDGothicNeo-Regular'
            }
          }),
    },
    findHelpInput: {
        alignSelf: 'center',
        backgroundColor: '#ffff',
        marginTop: 30,
        borderWidth: .2,
        borderColor: '#b3d2db',
        borderRadius: 20,
        padding: 10,
        minHeight: 10,
        width: "90%",
        margin: 10,
        ...Platform.select({
            ios: {
              fontFamily: 'AppleSDGothicNeo-Regular'
      
            },
            android: {
              fontFamily: 'Roboto',
      
            },
            default: {
              fontFamily: 'AppleSDGothicNeo-Regular'
            }
          }),
    },
});

export default KIC_Style;


