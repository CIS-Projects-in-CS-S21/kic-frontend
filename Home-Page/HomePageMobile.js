/**
 * @fileoverview Home page mobile - opens up when user first starts app on mobile
 */

 import React from 'react';
 import KIC_Style from '../Components/Style'; 
 import AppIntroSlider from 'react-native-app-intro-slider';
 import { SafeAreaView } from 'react-native-safe-area-context';
 import { StyleSheet, Text } from 'react-native';
 

 /**
    * Constant that holds the props given to the app intro slider. 
    * Used to style and create our mobile application home screen.
    */
  const slides = [
    {
      key: '1',
      title: 'Keeping It Casual',
      text: 'Stay connected to friends and family while fostering a healthy mindset!',
      backgroundColor: '#7bb4dc',
      image: '../assets/kic.png'
    },
    {
      key: '2',
      title: 'Features:',
      text: 'Profile curated by you, feed of friends, with a mental health page dedicated to journaling your days and getting connected to professionals',
      backgroundColor: '#cde1e5',
    },
    {
      key: '3',
      title: 'Join the movement today!',
      text: 'Sign up to start connecting.',
      backgroundColor: '#b3d3dc',
    }
  ];

   /**
  * @class Contains function for rendering Home screen on mobile.
  */
 class HomePageMobile extends React.Component {
   /**
    * Class constructor
    */
    constructor(props) {
      super();

      // Define the initial state
      this.state = {
        showRealApp: false
      }
    }

    /*
    * Renders the home page elements, including the title and description of each page.
    */
    _renderItem = ({ item }) => {
      return (
        <SafeAreaView style = {[styles.container, {backgroundColor: item.backgroundColor}]} >
          <Text style={[KIC_Style.title, {color: 'white'}]}>{item.title}</Text>
          <Text style={[KIC_Style.title, {color: 'white'}]} >{item.text}</Text>
        </SafeAreaView>
      );
    }

    /**
     * When user is done the introduction and clicks the 
     * last slider button, it navigates to the sign up page. 
     */
    _onDone = () => {
      this.props.navigation.navigate('SignUp');
    }

   /**
    * Renders HomePageMobile components.
    * @returns {HomePageMobile}
    */
    render() {
        return <AppIntroSlider 
          showPrevButton 
          showNextButton 
          doneLabel = {'Sign Up'} 
          renderItem={this._renderItem} 
          data={slides} 
          onDone={this._onDone}/>;
    }
  }

    

 
 /**
  * @constant styles creates stylesheet for HomePageMobile screen components
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
     backgroundColor: 'blue',
   },
 });
 
 export default HomePageMobile;
 