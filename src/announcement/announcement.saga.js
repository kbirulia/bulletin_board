import { takeEvery, put, fork } from 'redux-saga/effects';
import {
    REQUEST_CREATE_ANNOUNCEMENT,
    createAnnouncementAction,
    deleteAnnouncementAction,
    REQUEST_DELETE_ANNOUNCEMENT,
    REQUEST_UPDATE_ANNOUNCEMENT,
    updateAnnouncementAction,
    receiveAnnouncementsAction,
} from './anouncement.actions';
import AnnouncementApi from './announcement.api';

function* createAnnouncementSaga(action) {
    const announcement = yield AnnouncementApi.createAnnouncement(action.payload);

    yield put(createAnnouncementAction(announcement));
}

function* deleteAnnouncementSaga(action) {
    yield AnnouncementApi.deleteAnnouncement(action.payload);

    yield put(deleteAnnouncementAction(action.payload.id));
}

function* updateAnnouncementSaga(action) {
    const { id, text, title } = action.payload;
    const data = {
        text,
        title
    };
    const announcement = yield AnnouncementApi.updateAnnouncement(id, data);

    yield put(updateAnnouncementAction(announcement));
}

export function* initializeSaga() {
    const announcements = yield AnnouncementApi.getAnnouncements();

    yield put(receiveAnnouncementsAction(announcements));
}

export function* announcementSaga() {
    yield fork(initializeSaga);
    yield takeEvery(REQUEST_CREATE_ANNOUNCEMENT, createAnnouncementSaga);
    yield takeEvery(REQUEST_DELETE_ANNOUNCEMENT, deleteAnnouncementSaga);
    yield takeEvery(REQUEST_UPDATE_ANNOUNCEMENT, updateAnnouncementSaga);
}
