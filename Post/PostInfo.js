/**
 * @fileoverview The screen for user posting info, where user can choose to add captions + triggers to post + actually share their post
 */

import React, { useState } from 'react'
import {Platform, View, TextInput, Image, Button, Text, TouchableOpacity} from 'react-native'
import KIC_Style from "../Components/Style";
import ClientManager from '../Managers/ClientManager';
import UserManager from "../Managers/UserManager";
import { UploadFileRequest, CheckForFileRequest } from "../gen/proto/media_pb";
import { Buffer } from "buffer";
import { File, Date as CommonDate } from "../gen/proto/common_pb";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video, AVPlaybackStatus } from 'expo-av';

/**
 * @class Contains function for rendering the Post Info page
 */
export default function PostInfo(props) {

    {/* Create UsersClientManager & create a UsersClient */}
    let cm = new ClientManager();
    let client = cm.createMediaClient();
    const navigation = useNavigation();
    const video = React.useRef(null);
    //to upload image, start chain of functions
    const uploadImage = async () => {
        return callGetAuthString();
    }

    //first, do this to get authorization string
    const callGetAuthString = async () => {
        let um = new UserManager();
        console.log("Obtained authorization string");
        return um.getAuthString().then(authString  => {getUserID(authString, um)});
    }

    //then, get user ID
    const getUserID = async(authString, um) => {
        um.getMyUserID().then(userID  => makeUploadFileRequest(userID, authString));
    }


    //parse triggers from text input (given in //trigger format)
    const parseTriggers = (triggerString) => {
        let triggersNoCommas = triggerString.replace(",", " ");
        let triggersParsed = triggersNoCommas.split(/[' ',',',//]/);
        triggersParsed = triggersParsed.filter(e => e !== '');
        return triggersParsed;
    }

    //parse tags from text input (given in #tag format)
    const parseTags = (tags) => {
        let tagsNoCommas = tags.replace(",", " ");
        let tagsParsed = tagsNoCommas.split(/[' ',',',#]/);
        tagsParsed = tagsParsed.filter(e => e !== '');
        return tagsParsed;
    }

    //then, make request to upload file with uri
    const makeUploadFileRequest = async (userID, authString) => {
       //obtain uri and base64 from Post.js
        const uri = props.route.params.image;
        const base64 = props.route.params.base64;

        //need to get extension (jpeg, png, etc) and format [if on web] (image or video) for metadata for file request
        let extension = "";
        let format = "";

        //isolates extension and format of image/video, different for web and mobile
        if (Platform.OS === 'web') {
            const regex = /\/.*?;base64/g;
            //isolate format of image/video
            const extractedFormat = uri.split(/[:, /]/);
            format = extractedFormat[1];
            console.log("Format: " + format);
            const extractedExt = uri.match(regex);
            let extensionNoBase = extractedExt.toString().replace(";base64", "");
            extension = extensionNoBase.replace("/", "");
        } else {
            const parsedURI = uri.split(/[.]/);
            extension = parsedURI[parsedURI.length-1];
            console.log("mobile ext:" + extension);

        }
        //start new file request
        console.log("Started Upload File Request");
        let req = new UploadFileRequest();
        console.log("Auth: " + authString);

        //create file and add to its metadata map
        let file = new File();
        let filename = userID + "@" + await randomizeFileName() + "." + extension;
        file.setFilename(filename);
        console.log("Ext: " + extension);
        console.log("File name: " + file.getFilename());

        let map = file.getMetadataMap();


        console.log("Metadata before set: ");
        file.getMetadataMap().forEach(function(v, k) {
            console.log(k, v);
        });
        let comments = []; //create empty array for comments

        //each image is associated with a userID, array of captions, triggers, comments, and tags, its uri, extension of the image, and the format of the image
        map.set("userID", userID.toString()) ;
        map.set("filename", filename);
        map.set("caption", caption);
        map.set("trigger", triggerString);
        map.set("comments", comments);
        map.set("tag", tagString);
        map.set("ext", extension);
        map.set("format", format);
        // map.set("uri", uri);
        // map.set("base64", base64);

        // Fetch the current date and set in file
        let today = new Date();
        let date = new CommonDate();
        date.setDay(String(today.getDate()).padStart(2, '0'));
        date.setMonth(String(today.getMonth() + 1).padStart(2, '0'));
        date.setYear(String(today.getFullYear()).padStart(2, '0'));
        file.setDatestored(date);

        //convert uri to int 8 Array which is needed for setting File
        let uri2 = uri + "xx";
        let your_bytes = Buffer.from(uri2, "base64");
        req.setFileuri(uri);
        req.setFileinfo(file);

        //console.log("URI FROM UPLOAD: " + uri);

        //set metadata and check that it is set correctly
        console.log("Metadata after set: ");
        file.getMetadataMap().forEach(function(v, k) {
            console.log(k, v);
        });

    //    console.log("request: " + req);

        return client.uploadFile(req,{'Authorization': authString}).then(
            res => {
               console.log("file id:" + res.getFileid());
               console.log("bytesRead:" + res.getBytesread());
               
               console.log(res);
               navigation.navigate('Profile')
            })
            .catch(error =>{
               console.log("There is an error :(");
               console.log(error);
            });
    }


    //For generating file name
    const randomizeFileName = async() => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    //declare constants for caption, triggers, and tags
    const [caption, setCaption] = useState("")
    const [triggerString, setTriggerString] = useState("")
    const [tagString, setTagString] = useState("")

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#ffff'
           }}>
             <Image source={{ uri: props.route.params.image }} style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', width: '50%',padding: 10, margin: 10, aspectRatio: 1}}/>
             <Video
                ref={video}
                style={{
                    alignSelf: 'center',
                    width: 320,
                    height: 200,
                }}
                source={{
                    uri: props.route.params.image,
                }}
                useNativeControls = {true}
                resizeMode="contain"
            />
            <TextInput
                style={KIC_Style.postInput}
                textAlign = {'center'}
                value={caption}
                onChange={(e) => setCaption(e.nativeEvent.text)}
                placeholder="Write a Caption . . ."
            />
            <TextInput
                style={KIC_Style.postInput}
                textAlign = {'center'}
                onChange={(e) => setTagString(e.nativeEvent.text)}
                placeholder="Write any tags in # format . . ."
            />
            <TextInput
                style={KIC_Style.postInput}
                textAlign = {'center'}
                onChange={(e) => setTriggerString(e.nativeEvent.text)}
                placeholder="Write any triggers in // format . . ."
            />
            <TouchableOpacity
                style={KIC_Style.button2}
                onPress={() => uploadImage()}>
                <Text style={KIC_Style.button_font}> Upload </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
