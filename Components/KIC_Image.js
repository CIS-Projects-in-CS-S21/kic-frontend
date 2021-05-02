/**
 * @fileoverview KIC_Image component downloads image for a particular user and is used to present images on personal page, detailed post view, and user feed.
 */
import React, { useState } from 'react'
import {Dimensions, Platform, View, TextInput, Image, Button, Text, TouchableOpacity} from 'react-native'
import KIC_Style from "../Components/Style";
import ClientManager from "../Managers/ClientManager";
import {DownloadFileRequest} from "../gen/proto/media_pb";
import {Buffer} from "buffer";
import {bytesToBase64} from "../util/BytesDecoder"
import {SafeAreaView} from "react-native-safe-area-context";
import { Video, AVPlaybackStatus } from 'expo-av';
import * as FileSystem from 'expo-file-system';

// { image, base64 }
/**
 * @class Contains function for image itself
 * pass in authString and fileInfo
 */
class KIC_Image extends React.Component {
    /** Class constructor
     * @param {String} myUserid The id of the current active user
     * @param {String} userid The id of the user who owns the image trying to be displayed
     * @param {String} username The username of user who owns the image trying to be displayed
     * @param {String} authString The authstring for making requests
     * @param {useNavigation} navigation The navigation prop used to navigate between pages
     * @param {String} imageSrc by default an empty string, will be set to downloaded image
     * @param {Array} metadata Array of metadata related to file being downloaded
     * @param {Boolean} imagefixed Boolean regrading image src being fixed correctly. Is set as false by default and turns true when image is fixed after downloading.
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
            imageSrc: null,
            imagefixed: false,
            metadata: [],
            isVideo: false, //by default, assumes that this is an image
        };

        this.fetchImage = this.fetchImage.bind(this)
    }

    async saveImage (base64String) {
        this.setState({ uploading: true });
    
        //Without this the FilySystem crashes with 'bad base-64'
        //const base64Data = base64String.replace("data:image/png;base64,","");
        const base64Data = base64String.split(",")[1];

        let map = this.props.fileInfo.getMetadataMap();
        let ext = map.get("ext");

        if (map.get("format") === "video" && ext !== "mp4"){
            ext = "mp4";
        }

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
     * mounts fetchImage upon starting of component
     * postcondition: fetchImage() function that downloads file by name
     */
    componentDidMount(){
        this.fetchImage();
    }

    /**
     *
     * @param prevProps takes in previous props of component
     * function that updates and fetches image
     * postcondition: fetchImage which downloads file by name
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
                imageFixed: false,
            })
            this.fetchImage();
        }
    }

    /**
     * function that downloadsFileByName and binds said file so it can be used
     * precondition: componentDidUpdate
     * postcondition: bind downloaded file to this
     */
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

        stream.on('status', function (status) {
            // This function prints the status of the stream. This handles errors if they happen
            //console.log("Status code: " + status.code);
            //console.log("Status details: " + status.details);
            //console.log("Status metadata: " + status.metadata);
        })

        stream.on('end', function (end) {
            // This function runs when the stream ends

            // Just checking that the chunks have been combined at the end of the stream. The logged string should
            // be a combined string of all the chunks received per file, which are logged by line 64
            this.setState({
                imageSrc: byte64,
            })
            //console.log("IMAGESRC AFTER STREAM: " + this.state.imageSrc.toString('ascii'))

            let src1 = this.state.imageSrc;
            let ext = map.get("ext");

            //determines if media is video or not
            if (map.get("format") === "video") {
                if (map.get("ext") !== "mp4"){
                    map.set("ext", "mp4");
                }
                this.setState({
                    isVideo: true
                })
            }

            if (Platform.OS !== 'web') {
                // Handle viewing on mobile
                let locationUri = '';

                if (map.get("origin") == "mobile"){
                    // Handle viewing mobile-uploaded media on mobile
                    let rebuiltb64 = 'data:' + map.get("format") + '/' + map.get('ext') + ';base64,' + byte64;
                    this.saveImage(rebuiltb64).then( (uri) => {locationUri = uri;}).then(() => {
                        this.setState({
                            imageSrc: locationUri,
                            imagefixed: true,
                            metadata: map
                        });
                        console.log("VIEWING MOBILE-UPLOADED ON MOBILE: " + this.state.imageSrc)
                    }).then(() => {/*console.log("imageSrc = " + this.state.imageSrc)*/});
                } else {
                    // Handle viewing web-uploaded media on mobile
                    this.saveImage(src1).then( (uri) => {locationUri = uri;}).then(() => {
                        this.setState({
                            imageSrc: locationUri,
                            imagefixed: true,
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
                        imagefixed: true,
                        metadata: map,
                    })
                    console.log("URI: " + rebuiltb64.slice(0, 50));

                } else {
                    // Handle web-uploaded media on web
                    this.setState({
                        imageSrc: byte64,
                        imagefixed: true,
                        metadata: map,
                    })
                }
            }

            //console.log("FILE URI: " + this.state.imageSrc)
            
            // --------


            // // Save the fixed uri to state

            //console.log("FIXED SRC: " + finalsrc);
        }.bind(this)); //binds stream.on function so we can access state

    }

    /**
     * handles view post navigation to either DetailedPostViewWeb or DetailedPostView based on platform of user
     * precondtion:none
     * postcondition: navigate to appropriate postview
     */
    handleViewPost = () => {
        if (Dimensions.get('window').width > 768){
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
        const video = null;
        return (
            <View>
                {(this.state.imagefixed) ?
                    <View>
                        <TouchableOpacity
                            onPress={this.handleViewPost}>
                            {(!this.state.isVideo && this.state.imagefixed) ? <Image
                                style={{width: 170, height: 170, alignSelf: 'center', marginLeft: 3, marginRight: 3, }}
                                source={{uri: this.state.imageSrc}}>
                            </Image> :
                            (this.state.isVideo && this.state.imagefixed) ? <Video
                                ref={video}
                                style={{width: 170, height: 170, alignSelf: 'center', marginLeft: 3, marginRight: 3, }}
                                source={{uri: this.state.imageSrc}}
                                resizeMode="cover"
                            /> : <View></View>}
                        </TouchableOpacity>
                    </View> : <View></View>}
            </View>
        )
    }
}

export default KIC_Image;