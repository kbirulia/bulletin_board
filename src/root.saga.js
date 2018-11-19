import { fork } from 'redux-saga/effects';
import { announcementSaga } from './announcement/announcement.saga';

export default function* root() {
    yield fork(announcementSaga);
}
