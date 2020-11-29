import { RootState } from '../state';
import { AlbumItem, AlbumListItem } from './types';

export const selectAlbumsList = (state: RootState): AlbumListItem[] =>
    state.albums.list;

export const selectAlbumsSuccess = (state: RootState): boolean =>
    state.albums.success;

export const selectAlbumItemList = (state: RootState): AlbumItem =>
    state.albums.item;
