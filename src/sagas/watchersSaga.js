import { all, fork } from 'redux-saga/effects';
import { initializeSaga } from './initializeSaga';
import { announcementSaga } from './announcementSaga';

export default function* root() {
  yield all([
    fork(initializeSaga),
    fork(announcementSaga),
  ]);
}
