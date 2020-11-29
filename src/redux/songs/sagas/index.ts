import { takeLatest } from 'redux-saga/effects';
import { SONGS_FETCH } from '../constants';
import { songsFetchSaga } from './songsFetchSaga';

export function* rootsongsSaga() {
    yield takeLatest(SONGS_FETCH, songsFetchSaga);
}
