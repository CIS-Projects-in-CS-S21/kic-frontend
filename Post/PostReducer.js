import Media from './ImageFunc';
import React from 'react';


export const initialState = {
    //contains all images of selected album
    media: {},
    //default album should be KiC, but can change with user
    albumName: 'KiC',
    //array of images that user selects
    Image: [],
    //list of albums
    albumList: [],
    //toggles modal, which has all the album names in device
    modalVis: false,
    //if true, user can select multiple images
    multImages: false,

};

//sets default image shown to be the first one in the album
const setDefaultImage = (state) => {
    const getPhotos = state;
    const defaultPhoto = [getPhotos[Object.keys(getPhotos)[0]]];
    return defaultPhoto;
};

//sets listOfMedia
//for each album in the album list, the uri of the photo is stored in an array and returned
const listOfMedia = (albumList) => {
    const setAlbumlist = {};
    albumList.forEach((photos) => {
        setAlbumlist[photos.id] = photos.uri;
    });
    return setAlbumlist;
};

const getAllAlbums = (albums) => {
    const albumList = albums.map((album) => album.title);
    return albumList;
};

const setImageFromAlbum = async (album) => {
    const getAlbumName = await Media.getAlbumPhotos(album);
    const ImageFromAlbum = await Media.photo(getAlbumName);
    return ImageFromAlbum.assets;
};

const addImageToArray = (payload, state) => {
    let updatedArray = [];
    if (!payload.multImages) {
        updatedArray = [payload.photoUri];
    } else {
        updatedArray = [...state.selectedImagesFromALbum, payload.photoUri];
    }
    return updatedArray;
};

const isMultImages = (state) => {
    if (state.multImages) {
        console.log('Multiple image mode');
        return [];
    }
    console.log('Single image mode');
    return state.selectedImagesFromALbum;
}

const removeImage = (photoUri, state) => {
    const getAllPhotos = state.selectedImagesFromAlbum;
    const updatedPhotos = getAllPhotos.filter((uri) => uri !== photoUri);
    return updatedPhotos;
};

//various actions can be performed based on the action given
export const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        //pass a list of album names returned from getAlbumsAsync() to payload
        case 'GET_ALBUM_LIST':
            return {...state, albumList: getAllAlbums(action.payload)};
        //pass list of all items in album returned from getAssetsAsync() and set it to media property
        case 'SET_MEDIA':
            return {...state, media: listOfMedia((action.payload))};
        //pass first image of album as default image to selectedImage array when we return list of items in an album
        case 'DEFAULT_IMAGE':
            return {
                ...state, selectedImage: setDefaultImage(state.media),
            };
        //toggles modal screen
        case 'MODAL':
            return {...state, modalVis: !state.modalVis};
        //empties all media after completion/cancelation of post
        case 'EMPTY':

            return initialState;
        //toggle option to have multiple images
        case 'SET_MULTIPLE_IMAGE':
            return {
                ...state, multImages: !state.multImages, selectedImagesFromAlbum: isMultImages(state)
            };
        case 'SET_ALBUM_NAME':
            return {
                ...state, albumName: action.payload,
                media: setImageFromAlbum(action.payload),
                selectedImage: setDefaultImage(state.media)
            };
        //if multImages is set to false, create an array with only one image passed as payload
        //if multtImages is set to true, push image to image array
        case 'ADD_IMAGE':
            return {
                ...state, multImages: action.payload.multImages, selectedImagesFromAlbum: addImage(action.payload, state)

            };
        //remove image by filtered through uri passed as payload
        case 'REMOVE_IMAGE' :
            return {...state, selectedImagesFromAlbum: removeImage(action.payload, state)};
        default:
            return state;

    }
};

