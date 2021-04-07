import React, { useState } from 'react'
import {View, TextInput, Image, Button, Text, TouchableOpacity} from 'react-native'
import KIC_Style from "../Components/Style";
import ClientManager from "../Managers/ClientManager";
import {DownloadFileRequest} from "../gen/proto/media_pb";
import {Buffer} from "buffer";


// { image, base64 }
/**
 * @class Contains function for image itself
 * pass in authString and fileInfo
 */
class KIC_Image extends React.Component {
    /*
      * Class constructor
      */
    constructor(props) {
        super();

        // Define the initial state; pro
        this.state = {
            authString: props.authString,
            fileInfo: props.fileInfo,
            imageSrc: ""
        };

        this.fetch = this.fetchImage.bind(this)
    }

    componentDidMount(){
        this.callGetUserByUserID().then(response => {
            console.log("Fetched info for image for userid " + this.props.userid + " successfully");
        }).catch(error => {
            console.log("Error mounting image for userid " + this.props.userid + ": " + error);
        });
    }


    fetchImage() {
        let cm = new ClientManager();
        let client = cm.createMediaClient();
        let req = new DownloadFileRequest();
        req.setFileinfo(this.props.fileInfo);
        return client.downloadFileByName(req, {'Authorization': this.props.authString}).then(res => {this.convertImage(res)})
    }

    convertImage(res) {
        let byte64 = res.getChunk_asB64();
        let imageSrc = this.props.fileInfo.uri;
        setState({imageSrc: imageSrc});

    }

    render() {
        return(
           <View>
               <Image
                   style={{width: 180, height: 180, resizeMode: 'contain', alignSelf: 'center'}}
                   source={this.state.imageSrc}>
               </Image>
           </View>
        )
    }


}