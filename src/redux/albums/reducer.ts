import { AlbumsAction } from './actions';
import {
    ALBUMS_DATA,
    ALBUMS_ERROR,
    ALBUMS_FETCH,
    ALBUM_ITEM_DATA,
    ALBUM_ITEM_ERROR,
    ALBUM_ITEM_FETCH,
} from './constants';
import { AlbumItem, AlbumListItem } from './types';

const defaultAlbum = {
    title: '',
    author: '',
    imageSrc: '',
    date: '',
    songs: [],
}

export interface AlbumsState {
    success: boolean;
    list: AlbumListItem[];
    item: AlbumItem;
}

export const initialAlbumsState: AlbumsState = {
    success: false,
    list: [],
    item: defaultAlbum,
};

export const AlbumsReducer = (
    state: AlbumsState = initialAlbumsState,
    action: AlbumsAction,
): AlbumsState => {
    switch (action.type) {
        case ALBUMS_FETCH:
            return { ...state, success: false };
        case ALBUMS_DATA:
            return { ...state, success: true, list: action.payload };
        case ALBUMS_ERROR:
            return { ...state, success: false, list: [] };
        case ALBUM_ITEM_FETCH:
            return { ...state, success: false };
        case ALBUM_ITEM_DATA:
            return { ...state, success: true, item: action.payload };
        case ALBUM_ITEM_ERROR:
            return { ...state, success: false, item: defaultAlbum };
        default:
            return state;
    }
};
