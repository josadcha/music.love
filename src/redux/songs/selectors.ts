import { RootState } from '../state';
import { SongItem } from './types';

export const selectSongsList = (state: RootState): SongItem[] =>
    state.songs.list;

export const selectSongsSuccess = (state: RootState): boolean =>
    state.songs.success;

export const selectCurrentSong = (state: RootState): SongItem | undefined =>
    state.songs.currentSong;

export const selectPlayCurrentSong = (state: RootState): boolean =>
    state.songs.isPlaying;
