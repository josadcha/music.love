import { CommonError } from '../types';
import {
    ALBUMS_DATA,
    ALBUMS_ERROR,
    ALBUMS_FETCH,
    ALBUM_ITEM_DATA,
    ALBUM_ITEM_ERROR,
    ALBUM_ITEM_FETCH,
} from './constants';
import { AlbumItem, AlbumListItem } from './types';

export interface AlbumsFetch {
    type: typeof ALBUMS_FETCH;
    payload: number;
}

export interface AlbumsData {
    type: typeof ALBUMS_DATA;
    payload: AlbumListItem[];
}

export interface AlbumsError {
    type: typeof ALBUMS_ERROR;
    error: CommonError;
}

export interface AlbumItemFetch {
    type: typeof ALBUM_ITEM_FETCH;
    payload: string;
}

export interface AlbumItemData {
    type: typeof ALBUM_ITEM_DATA;
    payload: AlbumItem;
}

export interface AlbumItemError {
    type: typeof ALBUM_ITEM_ERROR;
    error: CommonError;
}

export type AlbumsAction =
    AlbumsFetch
    | AlbumsData
    | AlbumsError
    | AlbumItemFetch
    | AlbumItemData
    | AlbumItemError;

export const albumsFetch = (payload: AlbumsFetch['payload']): AlbumsFetch => ({
    type: ALBUMS_FETCH,
    payload,
});

export const albumsData = (payload: AlbumsData['payload']): AlbumsData => ({
    type: ALBUMS_DATA,
    payload,
});

export const albumsError = (error: CommonError): AlbumsError => ({
    type: ALBUMS_ERROR,
    error,
});

export const albumItemFetch = (payload: AlbumItemFetch['payload']): AlbumItemFetch => ({
    type: ALBUM_ITEM_FETCH,
    payload,
});

export const albumItemData = (payload: AlbumItemData['payload']): AlbumItemData => ({
    type: ALBUM_ITEM_DATA,
    payload,
});

export const albumItemError = (error: CommonError): AlbumItemError => ({
    type: ALBUM_ITEM_ERROR,
    error,
});
