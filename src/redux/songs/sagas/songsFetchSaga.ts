import { call, put } from 'redux-saga/effects';
import { API } from 'src/api';
import { songsError, songsData } from '../actions';
import { songs } from 'src/mocks/songs/list';

export function* songsFetchSaga() {
    try {
        const list = yield call(API.get(), `/songs`);
        yield put(songsData(list));
    } catch (error) {
        yield put(songsError({ message: ['no response'], code: 505 }));
        yield put(songsData(songs));
    }
}
