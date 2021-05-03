/**
 * @fileoverview Settings page - allows users to change certain settings
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, Switch, View, Platform, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import KIC_Style from "../Components/Style";
import FeedHeader from "../Components/FeedHeader";
import UserManager from "../Managers/UserManager";
import ClientManager from "../Managers/ClientManager";
import { GetUserByIDRequest, UpdateUserInfoRequest } from "../gen/proto/users_pb";
import { DeleteFilesWithMetaDataRequest, UploadFileRequest } from "../gen/proto/media_pb";
import { File, Date as CommonDate } from "../gen/proto/common_pb";
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';



/**
 * @class Contains function for rendering SettingsPage screen.
 */
class SettingsPage extends React.Component {
    /**
     * Class constructor
     * @param {String} myUserid The id of the current active user
     * @param {User} myUser defaults to null, is current user
     */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            myUser: null,
            myUserid: '',
            authString: '',
            isPrivate: null,
            triggerString: '//',
            fetchedPriv: false,
            newBio: '',
            hasGalleryPermission: null,
            hasCameraPermission: null,
            image: null,
            base64: null,
            notWeb: null,
        };
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.setTriggers = this.setTriggers.bind(this);
        this.fetchUserInfo = this.fetchUserInfo.bind(this);
    }

    /**
     * Runs when component first loads
     *
     */
    async componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({
                fetchedPriv: false,
            })
            this.fetchUserInfo().then(response => {
                console.log("Mounted setting page success");
            }).catch(error => {
                console.log(error)
            });
        })
    }


    /**
     * Runs before the component is unmounted
     */
    componentWillUnmount() {
        this._unsubscribe();
    }

  
    
    /**
     * Calls callGetAuthString. Starts the process of fetching active user info.
     *
     */
    fetchUserInfo() {
        return this.callGetAuthString();
    }

    /**
     * Creates a UserManager to fetch the authString, then calls callGetUserID
     *
     * @returns {String} authString The authorization string to be used for requests
     */
    callGetAuthString() {
        let um = new UserManager();
        return um.getAuthString().then(authString => { this.callGetUserID(um, authString) });
    }

    /**
     * Saves authString to state then calls getUserByID
     *
     * @params {UserManager} um The UserManager to be reused
     * @params {String} authString The authorization string to be used for requests
     * @returns {String} userID A string of the active user's ID
     */
    callGetUserID(um, authString) {
        this.setState({
            authString: authString,
        })
        return um.getMyUserID().then(userID => { this.callGetUserByUserID(userID) });
    }

    /**
     * Gets a user by their user ID via a GetUserByIDRequest
     *
     * @params {String} userID A string of the active user's ID
     * @returns {GetUserByIDResponse} res The response object to a GetUserByIDRequest
     */
    callGetUserByUserID(userID) {
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new GetUserByIDRequest();
        req.setUserid(userID);
        return client.getUserByID(req, { 'Authorization': this.state.authString }).then(res => { this.setUserInfo(cm, res, userID) })
    }

    /**
     * Parses user's info from the GetUserByIDResponse and then determines if user is private
     *
     * @params {ClientManager} cm The ClientManager to reuse
     * @params {GetUserByIDResponse} res The response object to a GetUserByIDRequest
     * @params {String} userID A string of the active user's ID
     * @returns {GenerateFeedForUserResponse} res The response object to a GenerateFeedForUserRequest
     */
    setUserInfo(cm, res, userID) {
        let user = res.getUser();
        let isPrivate = res.getUser().getIsprivate();
        let boolPriv = false;
        if (isPrivate === "1") {
            console.log("User is PRIVATE");
            boolPriv = true;
        } else {
            console.log("User is PUBLIC");
        }
        console.log("User Info has been set!")
        let ogTriggers = res.getUser().getTriggers()
        //let myusername = user.getUsername();
        this.setState({
            myUserid: userID,
            myUser: user,
            isPrivate: boolPriv,
            triggerString: ogTriggers,
            fetchedPriv: true,
        })
    }
    /**
     * toggles switch such that if isPrivate are enabled, account is then not private or vice cera
     *
     */
    toggleSwitch() {
        this.setState(prevState => ({
            isPrivate: !prevState.isPrivate
        }));
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new UpdateUserInfoRequest();
        if (this.state.isPrivate == true) {
            req.setIsprivate("0");
        } else {
            req.setIsprivate("1");
        }
        req.setBio(this.state.myUser.getBio());
        req.setUserid(this.state.myUserid);
        req.setEmail(this.state.myUser.getEmail());
        req.setBirthday(this.state.myUser.getBirthday());
        req.setDesiredusername(this.state.myUser.getUsername());
        req.setCity(this.state.myUser.getCity());
        req.setTriggers(this.state.myUser.getTriggers());

        return client.updateUserInfo(req, { 'Authorization': this.state.authString }).then(res =>
            console.log(res)
        ).catch(error => {
            console.log("There was an error.");
            console.log(error)
        });

    }

    /**
     * set triggers based on input
     *@param {String} triggerString input in // format
     */
    setTriggers(triggerString) {
        if (triggerString == "") {
            triggerString = "//";
        }
        this.setState({
            triggerString: triggerString
        })
    }

    /**
     * store triggers and update user info
     * @return {Promise<T | void>}
     */
    storeTriggers() {
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        let req = new UpdateUserInfoRequest();
        req.setBio(this.state.myUser.getBio());
        req.setUserid(this.state.myUserid);
        req.setEmail(this.state.myUser.getEmail());
        req.setBirthday(this.state.myUser.getBirthday());
        req.setDesiredusername(this.state.myUser.getUsername());
        req.setCity(this.state.myUser.getCity());
        req.setTriggers(this.state.triggerString);

        return client.updateUserInfo(req, { 'Authorization': this.state.authString }).then(res =>
            console.log(res)
        ).catch(error => {
            console.log("There was an error.");
            console.log(error)
        });

    }


    /**
     * Set bio on change
     */

    setNewBio(bio) {
        this.setState({
            newBio: bio
        });
    }


    changeBio() {
        let cm = new ClientManager();
        let client = cm.createUsersClient();

        if (this.state.newBio.length >= 250) {
            alert("Sorry, your bio must be less than 250 characters long!");
        } else {
            let req = new UpdateUserInfoRequest();
            req.setBio(this.state.newBio);
            req.setUserid(this.state.myUserid);
            req.setEmail(this.state.myUser.getEmail());
            req.setBirthday(this.state.myUser.getBirthday());
            req.setDesiredusername(this.state.myUser.getUsername());
            req.setCity(this.state.myUser.getCity());
            req.setTriggers(this.state.myUser.getTriggers());

            return client.updateUserInfo(req, { 'Authorization': this.state.authString }).then(res => {
                //console.log(res);
                this.textInput.clear();
                alert("Bio updated!");
            }).catch(error => {
                console.log("There was an error.");
                console.log(error)
            });
        }
    }


    async checkForPermission() {
        let permission = (Permissions.usePermissions(Permissions.CAMERA));
        if (Platform.OS !== 'web') {
            //iOS or Android
            this.setState({
                notWeb: true,
            });
            const cameraStatus = await Camera.requestPermissionsAsync();
            this.setState({
                hasCameraPermission: (cameraStatus.status === 'granted'),
            });

        } else {
            this.setState({
                notWeb: false,
            });
            if (permission?.permissions?.camera?.granted) {
                this.setState({
                    hasCameraPermission: (permission?.permissions?.camera?.granted === 'granted'),
                });
            } else {
                await askPermission();
            }
        }

        //request permission for media library
        const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        this.setState({
            hasGalleryPermission: (galleryStatus.status === 'granted')
        });
        //start image pick
        return this.pickImage;
    }

    deletePreviousPics() {
        let cm = new ClientManager();
        let client = cm.createMediaClient();

        let req = new DeleteFilesWithMetaDataRequest();
        let map = req.getMetadataMap();
        map.set("pfpUserID", this.state.myUserid.toString());

        return client.deleteFilesWithMetaData(req, { 'Authorization': this.state.authString }).then(res => { this.pickImage(client) })
    }

    //Allow user to pick image for pfp
    pickImage = async (client) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,//allows access to images only
            allowsEditing: true,
            aspect: [1, 1],
            maxWidth: 450,
            maxHeight: 450,
            quality: .9,
            base64: true
        });
        console.log(result);
        if (!result.cancelled) {
            this.setState({
                image: result.uri
            });
            if (Platform.OS === "web") {
                // If web upload:
                const parsedURI = result.uri.split(/[,]/);
                this.setState({
                    base64: parsedURI[1]
                })
            } else {
                // If mobile upload:
                this.setState({
                    base64: result.base64,
                })
            }
            alert("Picture selected!");
        }

        //start upload
        return this.makeUploadFileRequest(this.state.myUserid, this.state.authString, client);
    };


    makeUploadFileRequest = async (userID, authString, client) => {

        console.log("making upload request");
        //obtain uri and base64 from Post.js
        let uri = this.state.image;
        const base64 = this.state.base64;

        //need to get extension (jpeg, png, etc) and format [if on web] (image or video) for metadata for file request
        let extension = "";
        let format = "";

        //isolates extension and format of image/video, different for web and mobile
        if (Platform.OS === 'web') {
            const regex = /\/.*?;base64/g;
            //isolate format of image/video
            const extractedFormat = uri.split(/[:, /]/);
            format = extractedFormat[1];
            //console.log("Format: " + format);
            const extractedExt = uri.match(regex);
            let extensionNoBase = extractedExt.toString().replace(";base64", "");
            extension = extensionNoBase.replace("/", "");

        } else {
            //if uploading from mobile, the uri should just be base64

            // Get extension from uri
            const parsedURI = uri.split(/[.]/);
            extension = parsedURI[parsedURI.length - 1];
            //console.log("mobile ext:" + extension);
            format = "image"
        }


        //start new file request
        //console.log("Started Upload File Request");
        let req = new UploadFileRequest();
        //console.log("Auth: " + authString);

        //create file and add to its metadata map
        let file = new File();
        let filename = userID + "@" + await this.randomizeFileName() + "." + extension;
        file.setFilename(filename);
        console.log("Ext: " + extension);
        console.log("File name: " + file.getFilename());

        let map = file.getMetadataMap();


        console.log("Metadata before set: ");
        file.getMetadataMap().forEach(function (v, k) {
            console.log(k, v);
        });

        //pfp image is associated with a userID, its uri, extension of the image, and the format of the image
        map.set("pfpUserID", userID.toString());
        map.set("filename", filename);
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
                alert("Uploaded profile picture!")
            })
            .catch(error => {
                console.log("There is an error :(");
                console.log(error);
            });
    }

    getBase64 = async (uri) => {
        try {
            let newb64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
            return newb64;
        } catch (e) {
            console.log('*Error*')
            console.log(e)
        }
    }

    randomizeFileName = async () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    /**
     * @constant randomizeFileName For generating file name
     * @returns {String} v of random file name
     */
    randomizeFileName = async () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }


    render() {
        /**
         * Renders setting screen components.
         * @returns {Component}
         */
        return (
            <SafeAreaView style={KIC_Style.outContainer}>
                <FeedHeader navigation={this.props.navigation} />
                <KeyboardAvoidingView style={KIC_Style.innerContainer} behavior="padding">
                <TouchableOpacity
                        style={KIC_Style.button2}
                        onPress={() => this.deletePreviousPics()}>
                        <Text style={KIC_Style.button_font}> Upload profile picture </Text>
                    </TouchableOpacity>
                    <Text style={{ margin: 10 }}>Set Account as Private</Text>
                    {this.state.fetchedPriv ? <Switch
                        style={{ marginTop: 30 }}
                        trackColor={{ false: "#b3d2db", true: "#7ab7dd" }}
                        thumbColor={!this.state.isPrivate ? "#ffff" : "#b3d2db"}
                        ios_backgroundColor="#ffff"
                        onValueChange={this.toggleSwitch}
                        value={this.state.isPrivate}
                    /> : <View></View>}
                    <Text style={{ marginTop: 30 }}> Current Triggers: {this.state.triggerString} </Text>
                    <TextInput
                        style={KIC_Style.postInput}
                        textAlign={'center'}
                        onChange={(e) => this.setTriggers(e.nativeEvent.text)}
                        onSubmitEditing={() => this.storeTriggers()}
                        placeholder="Write any triggers in // format . . ."
                    />
                    <TouchableOpacity
                        style={KIC_Style.button2}
                        onPress={() => this.storeTriggers()}>
                        <Text style={KIC_Style.button_font}> Store Triggers </Text>
                    </TouchableOpacity>
                    <TextInput
                        ref={input => { this.textInput = input }}
                        style={KIC_Style.postInput}
                        textAlign={'center'}
                        onChange={(e) => this.setNewBio(e.nativeEvent.text)}
                        onSubmitEditing={() => this.changeBio()}
                        placeholder="Change bio..."
                    />
                    <TouchableOpacity
                        style={KIC_Style.button2}
                        onPress={() => this.changeBio()}>
                        <Text style={KIC_Style.button_font}> Change Bio </Text>
                    </TouchableOpacity>
                    <StatusBar style="auto" />
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

/**
 * @constant styles creates stylesheet for Explore screen components
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SettingsPage;