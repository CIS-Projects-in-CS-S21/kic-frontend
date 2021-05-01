/**
 * @fileoverview The profile picture component fetches and renders a user's profile picture
 */
import React, { useState } from 'react'
import {StyleSheet, Platform, View, TextInput, Image, Button, Text, TouchableOpacity} from 'react-native'
import KIC_Style from "../Components/Style";
import ClientManager from "../Managers/ClientManager";
import {Buffer} from "buffer";
import {bytesToBase64} from "../util/BytesDecoder"
import {GetFilesByMetadataRequest, DownloadFileRequest} from "../gen/proto/media_pb";
import * as FileSystem from 'expo-file-system';


/**
 * @class Contains function for fetching and rendering a user's profile picture
 */
class ProfilePicture extends React.Component {
    /**
    * Class constructor
    * @param {String} authString The authstring for making requests
    * @param {String} userid The id of the user whose profile picture is to be fetched
     * @param {String} imageSrc defaults to null and will be image uri of profile picture
     * @param {boolean} iconFetched default is set to false and is set to true when profile picture is fetched correctly
    */
    constructor(props) {
        super();

        // Define the initial state
        this.state = {
            // id of the user this icon belongs to
            userid: props.userid,

            authString: props.authString,
            imageSrc: "",
            iconFetched: true,
            uploading: true,
            metadata: null,
            map: null,
        };

        this.fetchImage = this.fetchImage.bind(this)
        this.saveImage = this.saveImage.bind(this)
    }

    /**
    * Runs when component first loads
    * postcondition: fetchImage()
    */
    componentDidMount(){
        this.fetchImage();
    }

    /**
    * Runs when the props change and updates the component accordingly.
    * postcondition: fetchImage()
    */
    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.userid !== prevProps.userid) {

          this.setState({
              myUserid: this.props.myUserid,
              userid: this.props.userid,
              username: this.props.username,
              navigation: this.props.navigation,
              authString: this.props.authString,
              image: null,
              metadata: null,
          })
          this.fetchImage();
      }
    }

   /**
   * Finds a user's a profile picture file by searching for files with the metadata containing the user's ID in the metadata map.
   * @returns {GetFilesByMetadataResponse}
    * post condition: downloadImage
   */
    fetchImage() {
        let cm = new ClientManager();
        let client = cm.createMediaClient();

        // Search for file by metadata, using userid and isProfilePicture metadata
        let req = new GetFilesByMetadataRequest();
        let map = req.getDesiredmetadataMap();
        map.set("pfpUserID", this.props.userid.toString());

        return client.getFilesWithMetadata(req, {'Authorization': this.state.authString}).then(res => {this.downloadImage(client, res)})
    }

   /**
   * Downloads profile image as a stream and saves to state.
    * @param client of user
    * @param res downloadImageResponse
    * pre condition:fetchImage
    * post condition:setState
   */
    downloadImage(client, res) {
        let imagefile = res.getFileinfosList();

        // If a file was found
        if (imagefile.length > 0){
            // Download the file we found
            let req = new DownloadFileRequest();
            req.setFileinfo(imagefile[0]);

            this.setState({
                image: imagefile[0],
                metadata: imagefile[0].getMetadataMap(),
            })

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
                let finalsrc = '';

                // Rebuilds the header with special characters for images taken from web app ("data:image/png;base64" format)
                if (!src1.toString().includes("mobile")) {
                    finalsrc = byte64;
                } else { //Rebuild the header for images taken from mobile app
                    finalsrc = byte64;
                }

                let map = this.state.metadata;
                // Saving image
                if (Platform.OS !== 'web') {
                    // Handle viewing on mobile
                    let locationUri = '';

                    if (map.get("origin") == "mobile"){
                        // Handle viewing mobile-uploaded media on mobile
                        let rebuiltb64 = 'data:' + map.get("format") + '/' + map.get('ext') + ';base64,' + byte64;
                        this.saveImage(rebuiltb64).then( (uri) => {locationUri = uri;}).then(() => {
                            this.setState({
                                imageSrc: locationUri,
                                iconFetched: true,
                                metadata: map
                            });
                            console.log("VIEWING MOBILE-UPLOADED ON MOBILE: " + this.state.imageSrc)
                        }).then(() => {/*console.log("imageSrc = " + this.state.imageSrc)*/});
                    } else {
                        // Handle viewing web-uploaded media on mobile
                        this.saveImage(src1).then( (uri) => {locationUri = uri;}).then(() => {
                            this.setState({
                                imageSrc: locationUri,
                                iconFetched: true,
                                metadata: map
                            });
                            console.log("VIEWING WEB-UPLOADED ON MOBILE: " + this.state.imageSrc)
                        }).then(() => {/*console.log("imageSrc = " + this.state.imageSrc)*/});
                    }
                } else {
                    // Handle viewing on web
                    if (map.get("origin") == "mobile"){
                        // Handle viewing mobile-uploaded media on web
                        console.log("VIEWING MOBILE IMAGE ON WEB");
                        let rebuiltb64 = 'data:' + map.get("format") + '/' + map.get('ext') + ';base64,' + byte64;
                        this.setState({
                            imageSrc: rebuiltb64,
                            iconFetched: true,
                            metadata: map,
                        })
                        //console.log("URI: " + rebuiltb64.slice(0, 50));

                    } else {
                        // Handle web-uploaded media on web
                        this.setState({
                            imageSrc: byte64,
                            iconFetched: true,
                            metadata: map,
                        })
                    }
                }

            }.bind(this)); //binds stream.on function so we can access state
        } else {
            this.setState({
                iconFetched: false,
            })
        }
    }

    async saveImage (base64String) {
        this.setState({ uploading: true });

        //Without this the FilySystem crashes with 'bad base-64'
        //const base64Data = base64String.replace("data:image/png;base64,","");
        const base64Data = base64String.split(",")[1];

        let map = this.state.metadata;
        let ext = map.get("ext");

        let uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);

        try {
          //This creates a temp uri file so there's no neeed to download an image_source to get a URI Path
            const uri = FileSystem.cacheDirectory + uniqueId + '.' + ext;
            this.state.imageCounter++;
            await FileSystem.writeAsStringAsync(
                uri,
                base64Data,
                {
                    'encoding': FileSystem.EncodingType.Base64
                }
            );
            return uri;
        } catch (e) {
            this.setState({ uploading: false });
            console.log('*Error*')
            console.log(e)
      }
    }

    /**
    * Renders the ProfilePicture component.
    * @returns a {ProfilePicture}
    */
    render() {
        return(
           <View>
               {(this.state.iconFetched) ?
               <View>
                   <Image
                       style={this.props.style}
                       source={{uri: this.state.imageSrc}}
                   />
               </View> :
               <View>
                   <Image
                       style={this.props.style}
                      source={require('../assets/default/default_icon_2.png')}
                   />
               </View>}
           </View>
        )
    }
}

/**
 * @constant styles creates stylesheet for a ProfilePicture.
 */
const styles = StyleSheet.create({
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
});

export default ProfilePicture;