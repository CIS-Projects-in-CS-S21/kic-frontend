
//Taken from https://forums.expo.io/t/hacky-way-to-add-modals-to-web/24487 to fix issue of Web not supporting Modal
import { Platform } from "react-native";

let Modal;

if (Platform.OS !== 'web') {
    Modal = require('react-native').Modal;
} else {
    Modal = require('./WebModal').default;
}

export default Modal;