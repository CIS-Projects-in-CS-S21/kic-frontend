import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
      return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name= "LogIn"
                    component={LogIn}
                />
                <Stack.Screen
                    name= "SignUp"
                    component={SignUp}
                />
            </Stack.Navigator>
        </NavigationContainer>
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

export default App;
