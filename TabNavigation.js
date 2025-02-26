/**
 * @fileoverview Tab Navigation setup screen containing links to other screens on the app post log-in.
 */

import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import React from 'react';
import UserFeedNav from './User-Feed/UserFeedNav';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ExploreNav from "./Explore-Page/ExploreNav";
import PersonalPageNav from "./Personal-Page/PersonalPageNav";
import PostNav from "./Post/PostNav";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsPage from "./Settings-Page/SettingsPage";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Feed') {
                        iconName = 'home-outline';
                        color = '#ffff';
                    } else if (route.name === 'Profile') {
                        iconName =  'person-circle-outline' ;
                        color = '#ffff';
                    } else if (route.name === 'Post') {
                        iconName = 'add-circle-outline' ;
                        color = '#ffff';
                    } else if (route.name === 'Explore') {
                        iconName =  'search-outline';
                        color = '#ffff';
                    } else if (route.name === 'Settings') {
                        iconName = 'cog-outline';
                        color = '#ffff';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                showLabel: false,
                style: { backgroundColor: '#b3d2db', paddingBottom: 3 },

            }}
        >
            <Tab.Screen name="Feed" component={UserFeedNav}/>
            <Tab.Screen name="Profile" component={PersonalPageNav} />
            <Tab.Screen name="Post" component={PostNav} />
            <Tab.Screen name="Explore" component={ExploreNav} />
            <Tab.Screen name="Settings" component={SettingsPage} />
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