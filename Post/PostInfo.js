/**
 * @fileoverview The screen for user posting info, where user can choose to add captions + triggers to post + actually share their post
 */

import React, { useState } from 'react'
import {View, TextInput, Image, Button, Text, TouchableOpacity} from 'react-native'
import KIC_Style from "../Components/Style";
import ClientManager from '../Managers/ClientManager';
import UserManager from "../Managers/UserManager";
import { UploadFileRequest, CheckForFileRequest } from "../gen/proto/media_pb";
import { Buffer } from "buffer";
import {File, Date} from "../gen/proto/common_pb";




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
        console.log("Started Upload File Request");
        /*let req = new UploadFileRequest();
        console.log("Auth: " + authString);
        console.log("Did Upload File Request");
        let file = new File();
        file.setFilename("sjnglsia");
        console.log("1");
       // file.setDatestored(Date);
        let map = file.getMetadataMap();
        console.log("2");
      //  map["userID"] = userID.toString();
        let your_bytes = Buffer.from("my string", "base64");

        console.log("3");
        // let dataUriToBuffer = require('data-uri-to-buffer');
        // // base64-encoded data is supported
        // let decoded = dataUriToBuffer(uri);
        // console.log(decoded.toString());
        // 'Hello, World!'
        req.setFile(Uint8Array.from(your_bytes));
        console.log("Set File");
        req.setFileinfo(file);
        console.log("Set File Info");*/

        let file = new File();
        file.setFilename("sjnglsia");

        let req = new CheckForFileRequest();
        req.setFileinfo(file);

        return client.checkForFileByName(req,{'Authorization': authString}).then(res => {logResult(res)});
    }

    const logResult = async(res) => {
        console.log(res);
    }



    const [caption, setCaption] = useState("")



    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: props.route.params.image }} style={{ flex: 1, flexDirection: 'row', padding: 10}}/>
            <TextInput style = {KIC_Style.input}
                placeholder="Write a Caption . . ."
                onChangeText={(caption) => setCaption(caption)}
            />
            <TextInput style = {KIC_Style.input}
                placeholder="Write any triggers in #format . . ."
                onChangeText={(triggers) => setCaption(triggers)}
            />
            <TouchableOpacity
                style={KIC_Style.button_post}
                onPress={() => uploadImage()}>
                <Text style={KIC_Style.button_font}> Upload </Text>
            </TouchableOpacity>
        </View>
    )
}
