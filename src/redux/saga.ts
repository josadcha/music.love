import { fork, all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { rootAlbumsSaga } from './albums';
import { rootsongsSaga } from './songs';

export function* appSaga(): SagaIterator {
    yield all([fork(rootAlbumsSaga)]);
    yield all([fork(rootsongsSaga)]);
}
