import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/** @namespace */
var exampleVar = {
    /**
     * Repeat <tt>str</tt> several times.
     * @param {string} str The string to repeat.
     * @param {number} [times=1] How many times to repeat the string.
     * @returns {string}
     */
    repeat: function(str, times) {
        if (times === undefined || times < 1) {
            times = 1;
        }
        return new Array(times+1).join(str);
    }
};

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 180, height: 180, resizeMode: 'contain'}}
        source = {require('./assets/kic.png')}
      />
      <Text>Keeping It Casual!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
