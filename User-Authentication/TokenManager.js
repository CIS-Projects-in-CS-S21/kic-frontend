import AsyncStorage from '@react-native-async-storage/async-storage';

export default class TokenManager {
    // Store token using AsyncStorage
    storeToken = async (token) => {
        try {
            await AsyncStorage.setItem(
                'MyToken',
                token
            );
            console.log("Stored token: " + token);
        } catch (error) {
            console.log("Error storing token!");
            console.log(error);
        }
    }

    // Get token from AsyncStorage
    getToken = async () => {
        try {
            AsyncStorage.getItem('MyToken', (err, result) => {
                console.log("Retrieved token successfully: " + result);
                return result;
            });
        } catch (error) {
            console.log("Error fetching token!");
            console.log(error);
        }
    }
}