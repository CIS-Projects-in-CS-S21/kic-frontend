/**
 * @fileoverview Home page mobile - opens up when user first starts app on mobile
 */

 import React from 'react';
 import Icon from 'react-native-vector-icons/Ionicons';
 import KIC_Style from '../Components/Style'; 
 import { NavigationContainer, useNavigation } from '@react-navigation/native';
 import AppIntroSlider from 'react-native-app-intro-slider';
 import { SafeAreaView } from 'react-native-safe-area-context';
 import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';
 
 /**
  * @class Contains function for rendering Home screen.
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

 class HomePageMobile extends React.Component {
   /**
    * Renders Home screen components.
    * @returns {Component}
    */

    constructor(props) {
      super();
      this.state = {
        showRealApp: false
      }
    }

    _renderItem = ({ item }) => {
      return (
        <SafeAreaView style = {[styles.container, {backgroundColor: item.backgroundColor}]} >
          <Text style={[KIC_Style.title, {color: 'white'}]}>{item.title}</Text>
          <Text style={[KIC_Style.title, {color: 'white'}]} >{item.text}</Text>
        </SafeAreaView>
      );
    }
    _onDone = () => {
      // User finished the introduction. Show real app through
      // navigation or simply by controlling state
      this.props.navigation.navigate('SignUp');
    }
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
  * @constant styles creates stylesheet for FindHelp screen components
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
 });
 
 export default HomePageMobile;
 