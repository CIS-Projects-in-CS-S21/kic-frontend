/**
 * @fileoverview Home page - opens up when user first starts up website or app
 */

 import React from 'react';
 import Icon from 'react-native-vector-icons/Ionicons';
 import KIC_Style from '../Components/Style'; 
 import AppIntroSlider from 'react-native-app-intro-slider';
 import { SafeAreaView } from 'react-native-safe-area-context';
 import { StyleSheet, Text, Image, Button } from 'react-native';
 
 /**
  * @class Contains function for rendering Home screen.
  */

  const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      backgroundColor: '#22bcb5',
    }
  ];

 class HomePage extends React.Component {
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
        <SafeAreaView style={KIC_Style.container}>
          <Image
        style={{ width: 180, height: 180, alignItems: "center", resizeMode: 'contain' }}
        source={require('../assets/kic.png')}
      />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </SafeAreaView>
      );
    }
    _onDone = () => {
      // User finished the introduction. Show real app through
      // navigation or simply by controlling state
      this.setState({ showRealApp: true });
    }
    render() {
      if (this.state.showRealApp) {
        return <App />;
      } else {
        return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
      }
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
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
 
 export default HomePage;
 