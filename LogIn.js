import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Button} from "react-native-web";

class LogIn extends React.Component {
  render() {
      return (
        <View style={styles.container}>
          <Image
            style={{width: 180, height: 180, resizeMode: 'contain'}}
            source = {require('./assets/kic.png')}
          />
          <Text>Keeping It Casual Log In Page!</Text>
          <Button
            title = "Sign Up!"
            onPress = {() =>
                this.props.navigation.navigate('SignUp')
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

export default LogIn;
