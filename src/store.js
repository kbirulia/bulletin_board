import {
  applyMiddleware, compose, createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { initialState } from './model/initialState';
import { announcements } from './reducers/announcements';
import root from './sagas/watchersSaga';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = process.env.NODE_ENV === 'development' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
/* eslint-disable no-underscore-dangle */

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

export const store = createStore(
  announcements,
  initialState,
  enhancer,
);

sagaMiddleware.run(root);
