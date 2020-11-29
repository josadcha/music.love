import { CommonError } from '../types';
import {
    SET_CURRENT_SONG,
    SET_PLAY_CURRENT_SONG,
    SONGS_DATA,
    SONGS_ERROR,
    SONGS_FETCH,
} from './constants';
import { SongItem } from './types';

export interface SongsFetch {
    type: typeof SONGS_FETCH;
}

export interface SongsData {
    type: typeof SONGS_DATA;
    payload: SongItem[];
}

export interface SongsError {
    type: typeof SONGS_ERROR;
    error: CommonError;
}

export interface SetCurrentSong {
    type: typeof SET_CURRENT_SONG;
    payload?: SongItem;
}

export interface SetPlayCurrentSong {
    type: typeof SET_PLAY_CURRENT_SONG;
    payload: boolean;
}

export type SongsAction =
    SongsFetch
    | SongsData
    | SongsError
    | SetCurrentSong
    | SetPlayCurrentSong;

export const songsFetch = (): SongsFetch => ({
    type: SONGS_FETCH,
});

export const songsData = (payload: SongsData['payload']): SongsData => ({
    type: SONGS_DATA,
    payload,
});

export const songsError = (error: CommonError): SongsError => ({
    type: SONGS_ERROR,
    error,
});

export const setCurrentSong = (payload: SetCurrentSong['payload']): SetCurrentSong => ({
    type: SET_CURRENT_SONG,
    payload,
});

export const setPlayCurrentSong = (payload: SetPlayCurrentSong['payload']): SetPlayCurrentSong => ({
    type: SET_PLAY_CURRENT_SONG,
    payload,
});
