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
            // id of the user this icon belongs to
            userid: props.userid,

            navigation: props.navigation,
            authString: props.authString,
            imageSrc: "",
            iconFetched: false,
        };

        this.fetchImage = this.fetchImage.bind(this)
    }

    componentDidMount(){
        this.fetchImage();
    }

    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.userid !== prevProps.userid) {

          this.setState({
              myUserid: this.props.myUserid,
              userid: this.props.userid,
              username: this.props.username,
              navigation: this.props.navigation,
              authString: this.props.authString,
          })
          this.fetchImage();
      }
    }

    fetchImage() {
        let cm = new ClientManager();
        let client = cm.createMediaClient();
        let req = new DownloadFileRequest();

        // Search for file by metadata, using userid and isProfilePicture metadata

        // Set fileinfo for file found
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
                iconFetched: true,
                metadata: map,
            })
            //console.log("FIXED SRC: " + finalsrc);
        }.bind(this)); //binds stream.on function so we can access state
    }

    render() {
        return(
           <View>
               {(this.state.iconFetched) ?
               <View>
                   <Image
                       style={styles.icon}
                       source={require('../assets/default/default_icon_2.png')}>
                   </Image>
               </View> : <View></View>}
           </View>
        )
    }
}

const styles = Stylesheet.create({
    icon: {
        width: 70,
        height: 70,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
        marginRight: 15,
        marginLeft: 15,
    },
})

export default ProfilePicture;