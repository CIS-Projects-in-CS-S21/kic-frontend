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




/**
 * @class Contains function for rendering the Post Info page
 */
export default function PostInfo(props) {

    {/* Create UsersClientManager & create a UsersClient */}
    let cm = new ClientManager();
    let client = cm.createMediaClient();



    const uploadImage = async () => {
        return callGetAuthString();
    }

    //to get authorization string
    const callGetAuthString = async () => {
        let um = new UserManager();
        console.log("Obtained authorization string");
        return um.getAuthString().then(authString  => {getUserID(authString, um)});
    }

    //get user ID
    const getUserID = async(authString, um) => {
        return um.getMyUserID().then(userID  => {makeUploadFileRequest(userID, authString)});
    }

    //make request to upload file with uri
    const makeUploadFileRequest = async (userID, authString) => {
        const uri = props.route.params.image;
        const base64 = props.route.params.base64;

        let extension = "";
        let format = null;

        //isolates extension of image/video
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

        console.log("Started Upload File Request");
        let req = new UploadFileRequest();
        console.log("Auth: " + authString);

        let file = new File();
        file.setFilename(userID + "@" + randomizeFileName() + "." + extension);
        console.log("URI: " + uri);
        console.log("Ext: " + extension);
        console.log("File name: " + file.getFilename());

        let map = file.getMetadataMap();


        console.log("Metadata before set: ");
        file.getMetadataMap().forEach(function(v, k) {
            console.log(k, v);
        });
        let comments = []; //create empty array for comments
        map.set("userID", userID.toString()) ;
        map.set("caption", caption);
        map.set("trigger", triggers);
        map.set("comments", comments);
        map.set("tag", tags);
        map.set("ext", extension);
        map.set("format", format);
        map.set("uri", uri);

        // Fetch the current date and set in file
        let today = new Date();
        let date = new CommonDate();
        date.setDay(String(today.getDate()).padStart(2, '0'));
        date.setMonth(String(today.getMonth() + 1).padStart(2, '0'));
        date.setYear(String(today.getFullYear()).padStart(2, '0'));
        file.setDatestored(date);

        let your_bytes = Buffer.from(uri, "base64");
        req.setFile(Uint8Array.from(your_bytes));
        req.setFileinfo(file);

        console.log("Metadata after set: ");
        file.getMetadataMap().forEach(function(v, k) {
            console.log(k, v);
        });

        console.log("request: " + req);

        return client.uploadFile(req,{'Authorization': authString}).then(
            res => {
                logResult(res)
            })
            .catch(error =>{
               logResult(error)
            });
    }

    const logResult = async(res) => {
        console.log(res);
    }

    const randomizeFileName = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }


    const [caption, setCaption] = useState("")
    const [triggers, setTriggers] = useState("")
    const [tags, setTags] = useState("")

    const parseTriggers = (triggers) => {
        let triggersNoCommas = triggers.replace(",", " ");
        let triggersParsed = triggersNoCommas.split(/[' ',',',//]/);
        triggersParsed = triggersParsed.filter(e => e !== '');

        console.log("Parsed triggers: " + triggersParsed);

        setTriggers(triggersParsed);
    }
    const parseTags = (tags) => {
        let tagsNoCommas = tags.replace(",", " ");
        let tagsParsed = tagsNoCommas.split(/[' ',',',#]/);
        tagsParsed = tagsParsed.filter(e => e !== '');

        console.log("Parsed tags: " + tagsParsed);

        setTags(tagsParsed);
    }

    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: props.route.params.image }} style={{ flex: 1, flexDirection: 'row', padding: 10}}/>
            <TextInput style = {KIC_Style.input}
                placeholder="Write a Caption . . ."
                onChangeText={(caption) => setCaption(caption)}
            />
            <TextInput style = {KIC_Style.input}
                       placeholder="Write any tags in # format . . ."
                       onChangeText={(tags) => parseTags(tags)}
            />
            <TextInput style = {KIC_Style.input}
                placeholder="Write any triggers in //format . . ."
                onChangeText={(triggers) => parseTriggers(triggers)}
            />
            <TouchableOpacity
                style={KIC_Style.button_post}
                onPress={() => uploadImage()}>
                <Text style={KIC_Style.button_font}> Upload </Text>
            </TouchableOpacity>
        </View>
    )
}
