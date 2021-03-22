import React from 'react';
import { StyleSheet} from 'react-native';

const KIC_Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7ab7dd',
        fontFamily: 'sans-serif'
    },
    title: {
        color: '#b3d2db',
        fontFamily: 'sans-serif',
        fontSize: 30,
        fontWeight: "bold"
        
    },
    button: {
        width: "80%",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#7ab7dd",
        marginTop: 10,
        padding: 10,
    },
    button_font: {
        fontFamily: 'sans-serif',
        color: '#ffff'
    }
});

export default KIC_Style;


