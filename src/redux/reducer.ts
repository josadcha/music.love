import { combineReducers, Reducer } from 'redux';
import { CommonReducer } from './common';
import { RootState } from './state';
import { AlbumsReducer } from './albums';
import { SongsReducer } from './songs';

export function createRootReducer(): Reducer<RootState> {
    return combineReducers({
        common: CommonReducer,
        albums: AlbumsReducer,
        songs: SongsReducer,
    }) as any;
}
