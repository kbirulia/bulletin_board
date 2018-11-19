import { takeEvery, put } from 'redux-saga/effects';
import {
  REQUEST_CREATE_ANNOUNCEMENT,
  createAnnouncementAction,
  deleteAnnouncementAction,
  REQUEST_DELETE_ANNOUNCEMENT, REQUEST_UPDATE_ANNOUNCEMENT, updateAnnouncementAction,
} from '../actions/anouncementActions';
import Api from '../services/Api';

function* createAnnouncementSaga(action) {
  const announcement = yield Api.createAnnouncement(action.payload);

  yield put(createAnnouncementAction(announcement));
}

function* deleteAnnouncementSaga(action) {
  const id = yield Api.deleteAnnouncement(action.payload);

  yield put(deleteAnnouncementAction(id));
}

function* updateAnnouncementSaga(action) {
  const announcement = yield Api.deleteAnnouncement(action.payload);

  yield put(updateAnnouncementAction(announcement));
}

export function* announcementSaga() {
  yield takeEvery(REQUEST_CREATE_ANNOUNCEMENT, createAnnouncementSaga);
  yield takeEvery(REQUEST_DELETE_ANNOUNCEMENT, deleteAnnouncementSaga);
  yield takeEvery(REQUEST_UPDATE_ANNOUNCEMENT, updateAnnouncementSaga);
}
