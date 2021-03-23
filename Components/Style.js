import React from 'react';
import { StyleSheet} from 'react-native';

const KIC_Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7ab7dd',
    },
    title: {
        color: '#b3d2db',
        fontFamily: 'sans-serif',
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 5
        
    },
    button: {
        width: "80%",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#7ab7dd",
        marginTop: 7,
        padding: 10,
    },
    button_font: {
        color: '#ffff'
    },

    input: {
        borderWidth: .2,
        borderColor: '#CDCDCD',
        padding: 1
    }

});

export default KIC_Style;


