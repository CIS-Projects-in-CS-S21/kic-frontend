import React, { useState } from 'react'
import {Platform, View, TextInput, Image, Button, Text, TouchableOpacity} from 'react-native'
import KIC_Style from "../Components/Style";
import ClientManager from "../Managers/ClientManager";
import {DownloadFileRequest} from "../gen/proto/media_pb";
import {Buffer} from "buffer";
import {bytesToBase64} from "../util/BytesDecoder"


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
            // id of active user
            myUserid: props.myUserid,

            // id of poster
            userid: props.userid,
            username: props.username,

            navigation: props.navigation,
            authString: props.authString,
            fileInfo: props.fileInfo,
            imageSrc: "",
            imagefixed: false,
            metadata: [],
        };

        this.fetchImage = this.fetchImage.bind(this)
    }

    componentDidMount(){
        this.fetchImage();
    }


    fetchImage() {
        let cm = new ClientManager();
        let client = cm.createMediaClient();
        let req = new DownloadFileRequest();
        req.setFileinfo(this.props.fileInfo);

        let map = this.props.fileInfo.getMetadataMap();

        let byte64 = '';

        let stream = client.downloadFileByName(req, {'Authorization': this.props.authString});
        stream.on('data', function (response) {
            // This function receives the chunks of data and appends them to the byte64 string
            // Currently, only the first chunk matches the first part of the uri; the rest of the chunks don't match any part of the uri
            byte64 += response.getChunk();

        });

        stream.on('status', function(status) {
            // This function prints the status of the stream. This handles errors if they happen
            //console.log("Status code: " + status.code);
            //console.log("Status details: " + status.details);
            //console.log("Status metadata: " + status.metadata);
        })

        stream.on('end', function(end) {
            // This function runs when the stream ends

            // Just checking that the chunks have been combined at the end of the stream. The logged string should
            // be a combined string of all the chunks received per file, which are logged by line 64
            this.setState({
                imageSrc: byte64,
            })
            //console.log("IMAGESRC AFTER STREAM: " + this.state.imageSrc.toString('ascii'))

            let src1 = this.state.imageSrc;
            let ext = map.get("ext");
            let finalsrc = '';

            // Rebuilds the header with special characters for images taken from web app ("data:image/png;base64" format)
            if (!src1.toString().includes("mobile")) {
                console.log("This image was taken from web");

                finalsrc = byte64;
            } else { //Rebuild the header for images taken from mobile app
                console.log("This image was taken from mobile");
                finalsrc = byte64;
            }
            // Save the fixed uri to state
            this.setState({
                imageSrc: finalsrc,
                imagefixed: true,
                metadata: map,
            })
            //console.log("FIXED SRC: " + finalsrc);
        }.bind(this)); //binds stream.on function so we can access state

    }

    handleViewPost = () => {
        if (Platform.OS === 'web') {
            this.props.navigation.navigate('DetailedPostViewWeb', {
              myUserid: this.props.myUserid,
              authString: this.props.authString,
              navigation: this.props.navigation,
              userid: this.props.userid,
              username: this.props.username,
              imageSrc: this.state.imageSrc,
              fileinfo: this.props.fileInfo,
            })
        } else {
            this.props.navigation.navigate('DetailedPostView', {
              myUserid: this.props.myUserid,
              authString: this.props.authString,
              navigation: this.props.navigation,
              userid: this.props.userid,
              username: this.props.username,
              imageSrc: this.state.imageSrc,
              fileinfo: this.props.fileInfo,
            })
        }
    }

    render() {
        return(
           <View>
               {(this.state.imagefixed) ?
               <View>
                   <TouchableOpacity
                        onPress={this.handleViewPost}>
                       <Image
                           style={{width: 180, height: 180, alignSelf: 'center'}}
                           source={this.state.imageSrc}>
                       </Image>
                   </TouchableOpacity>
               </View> : <View></View>}
           </View>
        )
    }


}

export default KIC_Image;