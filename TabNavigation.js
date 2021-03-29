/**
 * @fileoverview Tab Navigation setup screen containing links to other screens on the app post log-in.
 */

import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import React from 'react';
import UserFeed from './User-Feed/UserFeed';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Explore from "./Explore-Page/Explore";
import PersonalPageNav from "./Personal-Page/PersonalPageNav";
import PostNav from "./Post/PostNav";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={UserFeed} />
            <Tab.Screen name="Profile" component={PersonalPageNav} />
            <Tab.Screen name="Post" component={PostNav} />
            <Tab.Screen name="Explore" component={Explore} />
        </Tab.Navigator>
    );
}

/**
 * @class Contains function for rendering main screen.
 */
class TabNavigation extends React.Component {
    /**
     * Renders main screen components.
     * @returns {Component}
     */
    render() {
        return (
                <MyTabs />
        );
    }
}

export default TabNavigation;