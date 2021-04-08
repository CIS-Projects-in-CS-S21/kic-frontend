/**
 * @fileoverview The screen for the Detailed View of a post, which is accessed when clicking on a post.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import KIC_Style from "../Components/Style";
import { SafeAreaView } from 'react-native-safe-area-context';
import PostDetails from "../Components/PostDetails";
import ProfileHeader from "../Components/ProfileHeader";
import UserBlurb from "../Components/UserBlurb";
import FriendsList from "./FriendsList";
import RequestsList from "./RequestsList";
import FeedHeader from '../Components/FeedHeader';


/**
 * @class Contains function for rendering the detailed post view.
 */
class FriendsPage extends React.Component {

    /*
     * Class constructor
     */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
            userid: props.route.params.userid,
            username: props.route.params.username,
            bio: props.route.params.bio,
            yearPosted: 0,
            monthPosted: 0,
            dayPosted: 0,
            showPending: false,
        };
        this.setPosterInfo = this.setPosterInfo.bind(this)
    }

    componentDidMount() {
        this.setPosterInfo();
    }

    setPosterInfo() {
        this.setState({
            // do smth
        })
    }

    /**
     * Renders the DetailedPostView components.
     * @returns a {DetailedPostView}
     */
    render() {

        const renderItem = ({ item }) => (
            <Item title={item.title} />
        );
        return (
            <SafeAreaView style={KIC_Style.outContainer}>
                <FeedHeader navigation={this.props.navigation} />
                <SafeAreaView style={styles.container}>
                    {(!this.state.showPending) ? <FriendsList
                        userid={this.state.userid}
                        username={this.state.username}
                        bio={this.state.bio}
                    /> :
                        <RequestsList
                            userid={this.state.userid}
                            username={this.state.username}
                        />}
                    <View style={styles.content}>
                        {(!this.state.showPending) ? <TouchableOpacity
                            style={KIC_Style.button}
                            onPress={() =>
                                this.setState({ showPending: true })}>
                            <Text style={KIC_Style.button_font}>Pending Requests</Text>
                        </TouchableOpacity> :
                            <TouchableOpacity
                                style={KIC_Style.button}
                                onPress={() =>
                                    this.setState({ showPending: false })}>
                                <Text style={KIC_Style.button_font}>Friends</Text>
                            </TouchableOpacity>}

                        <StatusBar style="auto" />
                    </View>
                </SafeAreaView>
            </SafeAreaView>
        );
    }
}

/**
 * @constant styles creates stylesheet for an individual DetailedPostView's components.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        height: 'auto',
        marginLeft: '10%',
        marginRight: '10%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingVertical: 20,
        ...Platform.select({
            ios: {
              top:30,
              marginBottom:30,
            },
            android: {
              top:30,
              marginBottom:30,
            },
            default: {
              top:60,
              marginBottom: 60,
            }
          }),
    },
    content: {
        alignItems: 'center',
        paddingBottom: 5,
    },
    icon: {
        width: 100,
        height: 100,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        marginRight: 20,
        marginLeft: 20,
    },
    userInfo: {
        flexDirection: 'column',
        width: '80%',
        paddingRight: 10,
        flex: 1,
    },
    userID: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    textUsername: {
        fontSize: 18,
        marginRight: 5,
        fontWeight: "bold",
    },
});

export default FriendsPage;