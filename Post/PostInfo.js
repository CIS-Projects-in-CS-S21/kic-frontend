/**
 * @fileoverview The screen for user posting info, where user can choose to add captions + triggers to post + actually share their post
 */

import React, { useState } from 'react'
import {View, TextInput, Image, Button, Text, TouchableOpacity} from 'react-native'
import KIC_Style from "../Components/Style";
import ClientManager from '../Managers/ClientManager';
import UserManager from "../Managers/UserManager";
import {UploadFileRequest} from "../gen/proto/media_pb";


/**
 * @class Contains function for rendering the Post Info page
 */
export default function PostInfo(props) {

    {/* Create UsersClientManager & create a UsersClient */}
    let cm = new ClientManager();
    let client = cm.createMediaClient();

    const fetchUserInfo = async () => {
        return this.callGetAuthString();
    }

    //to get authorization string
    const callGetAuthString = async () => {
        let um = new UserManager();
        return um.getAuthString().then(authString => {this.makeUploadFileRequest(authString)});
    }

    //make request to upload file with uri
    const makeUploadFileRequest = async (authString) => {
        const uri = props.route.params.image;
        let req = new UploadFileRequest();
        const childPath = ' ';
        console.log(childPath);
        req.setFileinfo(uri);
        return null;
    }

    const [caption, setCaption] = useState("")



    const savePostData = (downloadURL) => {



    }
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
