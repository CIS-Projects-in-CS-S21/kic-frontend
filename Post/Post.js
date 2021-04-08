/**
* @fileoverview The screen for user posting, where user can choose to post video or picture with caption
*/
import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, StatusBar} from 'react-native';
import { Camera } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import KIC_Style from '../Components/Style';
import {Platform} from 'react-native';
import * as Permissions from 'expo-permissions';
import exampleImage from '../assets/kic.png';
import FeedHeader from '../Components/FeedHeader';



export default function Post({ navigation }) {
    //allows for permission to use image library
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    //allows for permission to use mobile camera
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    //camera variable
    const [camera, setCamera] = useState(null);
    //image variable
    const [image, setImage] = useState(null);
    //type variable, default set to back camera
    const [type, setType] = useState(Camera.Constants.Type.front);
    //stores base64 of image
    const[base64, setBase64] = useState(null);

    //state for determining if on web
    const [notWeb, setNotWeb] = useState(null);

    //permissions for camera
    const [permission, askPermission] = Permissions.usePermissions(
        Permissions.CAMERA,
    );

    //if we are on web, use permissions to get camera permissions. otherwise, use requestPermissionsAsync() function
    useEffect(() => {
        (async () => {
           if (Platform.OS !== 'web') {
               //iOS or Android
               setNotWeb(true);
               const cameraStatus = await Camera.requestPermissionsAsync();
               setHasCameraPermission(cameraStatus.status === 'granted');
           } else {
               setNotWeb(false);
               if (permission?.permissions?.camera?.granted) {
                   setHasCameraPermission(permission?.permissions?.camera?.granted === 'granted')
               } else {
                   await askPermission();
               }
           }

            //request permission for media library
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');




        })();
    }, [permission?.permissions?.camera, askPermission]);

    //take picture if camera access is granted and set image and base64
    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync({
                base64: true,
               // quality: 0.5
                quality:0,
                ratio: "1:1",

            });
            setImage(data.uri);
            if (Platform.OS === "web") {
                //this is the base 64
                const parsedURI = data.uri.split(/[,]/);
                setBase64(parsedURI[1]);
            } else {
                setBase64(data.base64);
            }
            console.log(data.base64.slice(0,1000));
            alert("Picture taken!");
        }
    }

    //pick image from image library and set image and base64
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,//allows access to images and videos
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
            base64: true
        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
            if (Platform.OS === "web") {
                //this is the base 64
                const parsedURI = result.uri.split(/[,]/);
                setBase64(parsedURI[1]);
            } else {
                setBase64(result.base64);
            }

            alert("Picture selected!");
        }
    };

    //if no camera possible (web) or no gallery permission, say sorry! no access to gallery or camera
    if (hasCameraPermission === null && hasGalleryPermission === false) {
        return (<View style = {KIC_Style.container}>
            <Image
                style={{ width: 180, height: 180, alignItems: "center", resizeMode: 'contain', alignSelf:'center'}}
                source={require('../assets/kic.png')}
            />
            <Text>
                Sorry! No access to gallery or camera. This feature is only available on mobile!
            </Text>
            <TouchableOpacity
                style={KIC_Style.button}
                onPress={() => navigation.navigate('Profile')}>
                <Text style={KIC_Style.button_font}>Personal Page</Text>
            </TouchableOpacity>
        </View>

    )};

    return (
        <SafeAreaView style={KIC_Style.container}>
          <FeedHeader/>
            <View style={styles.cameraContainer}>
                 <Camera
                    ref={ref => setCamera(ref)}
                    style={styles.fixedRatio}
                    type={type}
                    ratio={'1:1'}
                    onMountError={({ message }) => console.log("onMountError: " + message)}
                    onCameraReady={console.log("Camera ready!")}
                />
                {!notWeb && <Text style = {KIC_Style.titlePost}> Take a picture or select an image! </Text>}
            </View>
            {notWeb && <TouchableOpacity
                style={KIC_Style.button_post}
                onPress={() => {
                    setType(
                        type === Camera.Constants.Type.front
                            ? Camera.Constants.Type.back
                            : Camera.Constants.Type.front
                    );
                }}>
                <Text style={KIC_Style.button_font}>Flip Image</Text>
           </TouchableOpacity>}
           <TouchableOpacity
                style={KIC_Style.button_post}
                onPress={() => takePicture()}>
                <Text style={KIC_Style.button_font}>Take Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={KIC_Style.button_post}
                onPress={() => pickImage()}>
                <Text style={KIC_Style.button_font}>Select Image from Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={KIC_Style.button_post}
                onPress={() => navigation.navigate('PostInfo', { image, base64 })}>
                <Text style={KIC_Style.button_font}>Save</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
    },
    fixedRatio: {
        flex: 6,
        aspectRatio: 1
    }

})

