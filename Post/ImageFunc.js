/**
 * @fileoverview Logic for functions related to selecting images from library and launching camera when adding a post
 */

import React from 'react';
import {createContext} from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import KIC_Style from "../Components/Style";
//Import libraries related to getting and setting up new media
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as Camera from "expo-camera/src/Camera";

//Create a content with initial null value
export const postContext = createContext(null);

/*
 * Set of functions related to using user camera
 */

//Function related to asking user for permission to use camera
export const loadCamera = async () => {
    const isCameraAllowed = await Permissions.getAsync(Permissions.CAMERA);
    if (isCameraAllowed.granted == false) {
        //if permission is not given yet, ask for permission
        const { granted } = await Permissions.askAsync(Permissions.CAMERA);
        if (granted == FALSE) {
            return false;
        }
        //if permission is still not granted, we can't load the camera
    }
    //uri is like image address
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
        quality: 0.9,
        allowsEditing: true,
        aspect: [4,5], //crops picture to fit grid
        mediaTypes: 'All',
        videoMaxDuration: 300, //max video length is 5 minutes

    })
    return {cancelled, uri};
}

/*
 * Set of functions related to getting pictures and videos from media library of user:
 */

//Function to get list of albums from media library of user
const getAlbums = async () => {
    //get get albums asynchronously from media library
    const getAlbum = await MediaLibrary.getAlbumsAsync();
    return getAlbum;
};


//Function to get all of the photos from a particular album from media library of user
const getAlbumPhotos = async (albumName) => {
    //get get album photos asynchronously from media library
    const getPhotos = await MediaLibrary.getAlbumsAsync(albumName);
    return getPhotos;
}

//function to get display of 20 most recent photos from a particular album
const photo = async(getAlbum) => {
    const getRecentPhotos = await MediaLibrary.getAssetsAsync(
        {
            album: getAlbum,
            sortBy: ['creationTime'], //can also do modification time so most recently modified
            mediaType: ['video', 'photo'], //want both video and photos included
            first: 20,
        }
    )
    return getRecentPhotos;
}

export default {getAlbums, getAlbumPhotos, photo};
