import { takeLatest } from 'redux-saga/effects';
import { ALBUMS_FETCH, ALBUM_ITEM_FETCH } from '../constants';
import { albumItemFetchSaga } from './albumItemFetchSaga';
import { albumsFetchSaga } from './albumsFetchSaga';

export function* rootAlbumsSaga() {
    yield takeLatest(ALBUMS_FETCH, albumsFetchSaga);
    yield takeLatest(ALBUM_ITEM_FETCH, albumItemFetchSaga);
}
