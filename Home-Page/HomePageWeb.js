/**
 * @fileoverview Home page web - opens up when user first starts app on web
 */

 import React from 'react';
 import KIC_Style from '../Components/Style'; 
 import { SafeAreaView } from 'react-native-safe-area-context';
 import { TouchableOpacity, StyleSheet, Text, Platform } from 'react-native';

 /**
  * @class Contains function for rendering Home screen.
  */
  

 class HomePageWeb extends React.Component {
   /**
    * Renders HomePageMobile components.
    * @returns {HomePageWeb}
    */
    render() {
        return (
            <SafeAreaView style={KIC_Style.container}>
                <Text style={KIC_Style.title}>Keeping It Casual</Text>
                <Text style={styles.text}>Stay connected to friends and family while fostering a healthy mindset!</Text>
                <Text style={styles.text}>With a profile curated by you, feed of friends, with a mental health page dedicated to journaling your days and getting connected to professionals </Text>
                <Text style={styles.text}>Join the movement today!</Text>
                <TouchableOpacity 
                    style={KIC_Style.button} 
                    onPress={()=>this.props.navigation.navigate("SignUp")}>
                    <Text style={KIC_Style.button_font}> Sign up to start connecting! </Text>
                    </TouchableOpacity>
                <TouchableOpacity 
                    style={KIC_Style.button} 
                    onPress={()=>this.props.navigation.navigate("LogIn")}>
                    <Text style={KIC_Style.button_font}> Already have an account? Log in here! </Text>
                    </TouchableOpacity>
            </SafeAreaView>
        )
    }
  }

    

 
 /**
  * @constant styles creates stylesheet for HomePageWeb screen components
  */
 const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
   container: {
     flex:1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'blue'
   },
   text: {
     fontSize: 20,  
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
   }
 });
 
 export default HomePageWeb;
 