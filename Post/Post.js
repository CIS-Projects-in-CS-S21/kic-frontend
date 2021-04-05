/**
* @fileoverview The screen for user posting, where user can choose to post video or picture with caption
*/
import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import KIC_Style from '../Components/Style';
import {Platform} from 'react-native';


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

    const [notWeb, setNotWeb] = useState(null);
    useEffect(() => {
        (async () => {
           if (Platform.OS !== 'web') {
               setNotWeb(true);

           } else {
               setNotWeb(false);
           }
            //request permission for camera
            const cameraStatus = await Camera.requestPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
            //request permission for media library
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');




        })();
    }, []);

    //take picture if camera access is granted and set image
    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync({
                base64: true


            });
            setImage(data.uri);
            setBase64(data.base64);
            alert("Picture taken!");
        }
    }

    //pick image from image library
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,//allows access to images and videos
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
            base64: true
        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
            setBase64(result.base64);
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

    // //if camera or gallery permission is not given:
    // if (hasCameraPermission === false || hasGalleryPermission === false) {
    //     return <Text>No access to camera </Text>;
    // }
    return (
        <View style={KIC_Style.container}>
            <View style={styles.cameraContainer}>
                <Camera
                    ref={ref => setCamera(ref)}
                    style={styles.fixedRatio}
                    type={type}
                    poster = {"../Assets/kic.png"}
                    ratio={'1:1'}
                />
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

        </View>
    );
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1
    }

})

