import { initialState } from '../model/initialState';
import {
  CREATE_ANNOUNCEMENT,
  DELETE_ANNOUNCEMENT,
  RECEIVE_ANNOUNCEMENTS,
  UPDATE_ANNOUNCEMENT,
} from '../actions/anouncementActions';

export const announcements = (state = initialState, action) => {
  const newState = state.slice();
  switch (action.type) {
    case RECEIVE_ANNOUNCEMENTS: {
      return action.payload;
    }
    case CREATE_ANNOUNCEMENT: {
      newState.push(action.payload);
      return newState;
    }
    case DELETE_ANNOUNCEMENT: {
      const index = state.findIndex(announcement => announcement.id === action.payload);
      newState.splice(index, 1);
      return newState;
    }
    case UPDATE_ANNOUNCEMENT: {
      const index = state.findIndex(announcement => announcement.id === action.payload.id);
      newState[index] = action.payload;
      return newState;
    }
    default:
      return state;
  }
};
