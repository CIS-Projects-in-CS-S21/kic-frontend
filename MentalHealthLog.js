import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Button} from "react-native-web";

class MentalHealthLog extends React.Component {
  render() {
      return (
        <View style={styles.container}>
          <Image
            style={{width: 180, height: 180, resizeMode: 'contain'}}
            source = {require('./assets/kic.png')}
          />
          <Text>Keeping It Casual Mental Health Page!</Text>
          <Button
            title = "Find Help!"
            onPress = {() =>
                this.props.navigation.navigate('FindHelp')
            }
          />
            <Button
                title = "Return to Personal Page!"
                onPress = {() =>
                    this.props.navigation.navigate('PersonalPage')
                }
            />
          <StatusBar style="auto" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MentalHealthLog;
