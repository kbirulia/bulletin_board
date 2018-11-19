import { put } from 'redux-saga/effects';
import { receiveAnnouncementsAction } from '../actions/anouncementActions';
import Api from '../services/Api';

export function* initializeSaga() {
  const announcements = yield Api.getAnnouncements();

  yield put(receiveAnnouncementsAction(announcements));
}
