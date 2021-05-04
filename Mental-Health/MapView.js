/**
 * @fileoverview A MapView page - loads search results from GoogleMaps through a WebView.
 * This standalone page is necessary because WebView doesn't display in nested Views.
 */

import React from 'react';
import { WebView } from 'react-native-webview';
import { ScrollView, StatusBar, View } from 'react-native';
import FeedHeader from '../Components/FeedHeader';
import KIC_Style from '../Components/Style';

/**
 * @class Contains function for rendering MapView screen.
 */
class MapView extends React.Component {

    /**
     * Class constructor
     * @param {String} url The url of google maps website
     * @param {String} zipcode The zipcode that user inputted to search for mental health professionals
     *
     */
    constructor(props) {
        super();

        // Define the initial state:
        this.state = {
          url: '',
          zipcode: props.route.params.zipcode,
        };
    }

    /**
    * Runs when component first loads
    *
    */
    componentDidMount(){
      let url = 'https://www.google.com/maps/search/mental+health+professionals+near+' + this.state.zipcode + '/@39.979961,-75.2054723,13z/data=!3m1!4b1';
      this.setState({
        url: url,
      })
    }

    /**
    * Renders a WebView.
    * @returns {WebView}
    *
    */
    render() {
        return (
            <View style={KIC_Style.outContainer}>
            <FeedHeader navigation={this.props.navigation}/>
            <WebView style={[KIC_Style.innerContainer, {top:50, transform: [{scaleX:0.95}, {scaleY:0.95}]}]} source={{ uri: this.state.url}} />
            <StatusBar hidden={true}/>
            </View>
        );
    }

}

export default MapView;
