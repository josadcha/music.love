import { call, put } from 'redux-saga/effects';
import { API } from 'src/api';
import { albumItemData, albumItemError, albumsError, AlbumsFetch } from '../actions';
import { item } from 'src/mocks/albums/item';

export function* albumItemFetchSaga(action: AlbumsFetch) {
    try {
        const item = yield call(API.get(), `/albums/${action.payload}`);
        yield put(albumItemData(item));
    } catch (error) {
        yield put(albumItemError({ message: ['no response'], code: 505 }));
        yield put(albumItemData(item));
    }
}
