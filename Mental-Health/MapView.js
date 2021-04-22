/**
 * @fileoverview A MapView page - loads search results from GoogleMaps through a WebView.
 * This standalone page is necessary because WebView doesn't display in nested Views.
 */

import React from 'react';
import { WebView } from 'react-native-webview';

class MapView extends React.Component {

  /*
   * Class constructor
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
            <WebView source={{ uri: this.state.url}} />
        );
    }

}

export default MapView;
