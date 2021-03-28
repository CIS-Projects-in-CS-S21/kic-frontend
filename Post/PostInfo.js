/**
 * @fileoverview The screen for user posting info, where user can choose to add captions + triggers to post + actually share their post
 */

import React, { useState } from 'react'
import { View, TextInput, Image, Button } from 'react-native'



/**
 * @class Contains function for rendering the Post Info page
 */
export default function PostInfo(props) {
    const [caption, setCaption] = useState("")

    const uploadImage = async () => {
        const uri = props.route.params.image;
        const childPath = ' ';
        console.log(childPath)
        console.log("Uploading image!");

        const response = await fetch(uri);
        const blob = await response.blob();

    }



    const savePostData = (downloadURL) => {



    }
    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: props.route.params.image }} />
            <TextInput
                placeholder="Write a Caption . . ."
                onChangeText={(caption) => setCaption(caption)}
            />
            <TextInput
                placeholder="Write any triggers in #format . . ."
                onChangeText={(triggers) => setCaption(triggers)}
            />
            <Button title="Save" onPress={() => uploadImage()} />
        </View>
    )
}
