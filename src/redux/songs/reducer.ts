import { SongsAction } from './actions';
import {
    SET_CURRENT_SONG,
    SET_PLAY_CURRENT_SONG,
    SONGS_DATA,
    SONGS_ERROR,
    SONGS_FETCH,
} from './constants';
import { SongItem } from './types';

export interface SongsState {
    success: boolean;
    list: SongItem[];
    currentSong?: SongItem;
    isPlaying: boolean;
}

export const initialSongsState: SongsState = {
    success: false,
    list: [],
    isPlaying: false,
};

export const SongsReducer = (
    state: SongsState = initialSongsState,
    action: SongsAction,
): SongsState => {
    switch (action.type) {
        case SONGS_FETCH:
            return { ...state, success: false };
        case SONGS_DATA:
            return { ...state, success: true, list: action.payload };
        case SONGS_ERROR:
            return { ...state, success: false, list: [] };
        case SET_CURRENT_SONG:
            return { ...state, currentSong: action.payload };
        case SET_PLAY_CURRENT_SONG:
            return { ...state, isPlaying: action.payload };
        default:
            return state;
    }
};
