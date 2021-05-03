/**
 * @fileoverview The screen for user posting info, where user can choose to add captions + triggers to post + actually share their post
 */

import React, { useState, useEffect } from 'react'
import { Platform, KeyboardAvoidingView, TextInput, Dimensions, Animated, Keyboard, Text, TouchableOpacity } from 'react-native'
import KIC_Style from "../Components/Style";
import ClientManager from '../Managers/ClientManager';
import UserManager from "../Managers/UserManager";
import { UploadFileRequest } from "../gen/proto/media_pb";
import { File, Date as CommonDate } from "../gen/proto/common_pb";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video } from 'expo-av';
import FeedHeader from '../Components/FeedHeader';

/**
 * @class Contains function for rendering the Post Info page
 */
export default function PostInfo(props) {
    const IMAGE_HEIGHT = Dimensions.get('window').width / 1.12;
    const IMAGE_HEIGHT_SMALL = Dimensions.get('window').width / 2;
    const imageHeight = new Animated.Value(IMAGE_HEIGHT);
    const VIEW_SCALE = 1; 
    const VIEW_SCALE_SMALL = 0.5;
    const viewScale = new Animated.Value(VIEW_SCALE); 

    useEffect(() => {
        Keyboard.addListener('keyboardWillShow', keyboardWillShow);
        Keyboard.addListener('keyboardWillHide', keyboardWillHide);
        return () => {
            Keyboard.removeListener('keyboardWillShow');
            Keyboard.removeListener('keyboardWillHide');
        }
    }, [])

    const keyboardWillShow = (event) => {
        Animated.timing(imageHeight, {
            duration: event.duration,
            toValue: IMAGE_HEIGHT_SMALL,
        }).start();
        Animated.timing(viewScale, {
            duration: event.duration,
            toValue: VIEW_SCALE_SMALL,
        }).start();
    };

    const keyboardWillHide = (event) => {
        Animated.timing(imageHeight, {
            duration: event.duration,
            toValue: IMAGE_HEIGHT,
        }).start();
        Animated.timing(viewScale, {
            duration: event.duration,
            toValue: VIEW_SCALE,
        }).start();
    };
    {/* Create UsersClientManager & create a UsersClient */ }
    let cm = new ClientManager();
    let client = cm.createMediaClient();

    /**
     * @constant navigation used to pass between screens
     */
    const navigation = useNavigation();

    const video = React.useRef(null);

    /**
     * @constant uploadImage starts chain of functions to upload image
     */
    const uploadImage = async () => {
        if (caption.length >= 250) {
            alert("Sorry, your caption must be less than 250 characters long!");
        } else {
            return callGetAuthString();
        }
    }


    /**
     * @constant callGetAuthString obtains authorization string
     * @return getUserID to obtain userID
     * precondition: uploadImage
     * postcondition: getUserID
     */
    const callGetAuthString = async () => {
        let um = new UserManager();
        console.log("Obtained authorization string");
        return um.getAuthString().then(authString => { getUserID(authString, um) });
    }

    /**
     * @constant getUserID to obtain userID
     * @param  {String} authString authorization string
     * @param {UserManager} um User Manager
     * @return makeUploadFileRequest constant to upload file to database
     * precondition: callGetAuthString
     * postcondition: makeUploadFileRequest
     */
    const getUserID = async (authString, um) => {
        um.getMyUserID().then(userID => makeUploadFileRequest(userID, authString));
    }


    /**
     * @constant parseTags parse tags from text input (given in #tag format)
     * @param {String} tags string containing input from user of tags
     * @returns tagsParsed array of parsed tags
     */
    const parseTags = (tags) => {
        console.log("parsing tags");
        let tagsNoCommas = tags.replace(",", " ");
        let tagsParsed = tagsNoCommas.split(/[' ',',',#]/);
        tagsParsed = tagsParsed.filter(e => e !== '');
        return tagsParsed;
    }

    /**
     * @constant makeUploadFileRequest make request to upload file with uri
     *  @param {String} userID of user
     * @param  {String} authString authorization string
     * @return uploadFileResponse uploads file to database
     * precondition: getUserID
     */
    const makeUploadFileRequest = async (userID, authString) => {
        console.log("making upload request");
        //obtain uri and base64 from Post.js
        let uri = props.route.params.image;
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

            if (format === 'video') {
                extension = "mp4";
            }

        } else {
            //if uploading from mobile, the uri should just be base64

            // Get extension from uri
            const parsedURI = uri.split(/[.]/);
            extension = parsedURI[parsedURI.length - 1];
            console.log("mobile ext:" + extension);

            // Detect video
            if (extension == "mp4" || extension == "mov" || extension == "wmv") {
                uri = await convertToMP4(uri, extension);
                extension = 'mp4';
                format = "video";
                //console.log("video extension detected: " + uri);
            } else {
                format = "image"
            }
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
        file.getMetadataMap().forEach(function (v, k) {
            console.log(k, v);
        });
        let comments = []; //create empty array for comments

        //each image is associated with a userID, array of captions, triggers, comments, and tags, its uri, extension of the image, and the format of the image
        map.set("userID", userID.toString());
        map.set("filename", filename);
        map.set("caption", caption);
        map.set("trigger", triggerString);
        map.set("comments", comments);
        map.set("tag", tagString);
        map.set("ext", extension);
        map.set("format", format);

        // Fetch the current date and set in file
        let today = new Date();
        let date = new CommonDate();
        date.setDay(String(today.getDate()).padStart(2, '0'));
        date.setMonth(String(today.getMonth() + 1).padStart(2, '0'));
        date.setYear(String(today.getFullYear()).padStart(2, '0'));
        file.setDatestored(date);

        // Use uri for web uploads, use base64 for mobile uploads
        if (Platform.OS === 'web') {
            map.set("origin", "web")
            console.log("UPLOADING ON WEB: " + uri)
            req.setFileuri(uri);
        } else {
            //console.log("UPLOADING ON MOBILE: " + base64)
            map.set("origin", "mobile")
            req.setFileuri(base64);
        }

        //let your_bytes = Buffer.from(uri2, "base64");

        req.setFileinfo(file);


        //set metadata and check that it is set correctly
        console.log("Metadata after set: ");
        file.getMetadataMap().forEach(function (v, k) {
            console.log(k, v);
        });


        return client.uploadFile(req, { 'Authorization': authString }).then(
            res => {
                console.log("file id:" + res.getFileid());
                console.log("bytesRead:" + res.getBytesread());

                console.log(res);
                navigation.navigate('Profile')
            })
            .catch(error => {
                console.log("There is an error :(");
                console.log(error);
            });
    }

    /*
    * Converts video uri to mp4 using this method: https://github.com/taltultc/react-native-mov-to-mp4/issues/23
    */
    const convertToMP4 = async (videoURI, extension) => {
        // This is the original video uri
        console.log("MOBILE VIDEO ORIGINAL URI: " + videoURI)

        // Generate filename
        const filename = Date.now().toString(36) + Math.random().toString(36).substring(2);

        let toreplace = "." + extension;
        // Just returns the videoURI
        let vid = videoURI.replace(toreplace, ".mp4");

        // Convert video data to mp4 - MovToMp4 is not supported for expo projects
        /*
        console.log("Beginning conversion...");
        //let converted = await MovToMp4.convertMovToMp4(videoURI, filename).then(res => {console.log("Successful conversion")}).catch(error => {console.log("err: " + error)});

        // Rebuild prepending string -- use "mp4" because it will have ideally been converted to mp4
        vid = "data:video/" +  'mp4' + ";base64,"+ converted;
        */


        console.log("RESULTING MOBILE VIDEO URI: " + vid);
        return vid;
    };

    /**
     * @constant randomizeFileName For generating file name
     * @returns {String} v of random file name
     */
    const randomizeFileName = async () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    /**
     * @constant caption store caption from user input
     */

    const [caption, setCaption] = useState("")
    /**
     * @constant triggerString store triggers from user input
     */
    const [triggerString, setTriggerString] = useState("")
    /**
     * @constant tagString store tags from user input
     */
    const [tagString, setTagString] = useState("")


    /**
     * Renders the post info page
     * @returns {PostInfo}
     */

    return (
        <SafeAreaView style={KIC_Style.outContainer}>
            <FeedHeader navigation={navigation} />
            <KeyboardAvoidingView behavior="padding" style={{ justifyContent: 'flex-start', alignItems: 'center', flex: 1, }}>
            {!props.route.params.isVideo && <Animated.Image source={{ uri: props.route.params.image }} style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', width: imageHeight, height: imageHeight, padding: 10, margin: 10, aspectRatio: 1 }} />}
            {props.route.params.isVideo && 
            <Animated.View style={{height: imageHeight, transform: [{scaleX: viewScale}, {scaleY: viewScale}]}}>
                <Video
                ref={video}
                style={{
                    flex: 1,
                    alignSelf: 'center', width: '50%', padding: 10, margin: 10, aspectRatio: 1,
                }}
                source={{
                    uri: props.route.params.image,
                }}
                useNativeControls={true}
                resizeMode="contain"
            /></Animated.View>}
            <TextInput
                style={KIC_Style.postInput}
                textAlign={'center'}
                value={caption}
                onChange={(e) => setCaption(e.nativeEvent.text)}
                placeholder="Write a Caption . . ."
            />
            <TextInput
                style={KIC_Style.postInput}
                textAlign={'center'}
                onChange={(e) => setTagString(e.nativeEvent.text)}
                placeholder="Write any tags in # format . . ."
            />
            <TextInput
                style={KIC_Style.postInput}
                textAlign={'center'}
                onChange={(e) => setTriggerString(e.nativeEvent.text)}
                placeholder="Write any triggers in // format . . ."
            />
            <TouchableOpacity
                style={KIC_Style.button2}
                onPress={() => uploadImage()}>
                <Text style={KIC_Style.button_font}> Upload </Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
