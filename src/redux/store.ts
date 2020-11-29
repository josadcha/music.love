import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { appSaga } from './saga';
import { RootState } from './state';
import { createRootReducer } from './reducer';

let composeEnhancers = compose;
if (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(createRootReducer(), {} as RootState, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(appSaga);

export { store };
