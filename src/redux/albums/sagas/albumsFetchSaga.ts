import { call, put } from 'redux-saga/effects';
import { API } from 'src/api';
import { albumsError, albumsData, AlbumsFetch } from '../actions';
import { albums } from 'src/mocks/albums/list';

export function* albumsFetchSaga(action: AlbumsFetch) {
    try {
        const list = yield call(API.get(), `/albums?quantity=${action.payload}`);
        yield put(albumsData(list));
    } catch (error) {
        yield put(albumsError({ message: ['no response'], code: 505 }));
        yield put(albumsData(albums));
    }
}
