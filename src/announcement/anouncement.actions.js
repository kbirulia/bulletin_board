export const RECEIVE_ANNOUNCEMENTS = 'RECEIVE_ANNOUNCEMENTS';
export const receiveAnnouncementsAction = announcements => ({
    type: RECEIVE_ANNOUNCEMENTS,
    payload: announcements,
});

export const CREATE_ANNOUNCEMENT = 'CREATE_ANNOUNCEMENT';
export const createAnnouncementAction = data => ({
    type: CREATE_ANNOUNCEMENT,
    payload: data,
});

export const DELETE_ANNOUNCEMENT = 'DELETE_ANNOUNCEMENT';
export const deleteAnnouncementAction = id => ({
    type: DELETE_ANNOUNCEMENT,
    payload: id,
});

export const UPDATE_ANNOUNCEMENT = 'UPDATE_ANNOUNCEMENT';
export const updateAnnouncementAction = data => ({
    type: UPDATE_ANNOUNCEMENT,
    payload: data,
});

export const REQUEST_CREATE_ANNOUNCEMENT = 'REQUEST_CREATE_ANNOUNCEMENT';
export const requestCreateAnnouncementAction = data => ({
    type: REQUEST_CREATE_ANNOUNCEMENT,
    payload: data,
});

export const REQUEST_DELETE_ANNOUNCEMENT = 'REQUEST_DELETE_ANNOUNCEMENT';
export const requestDeleteAnnouncementAction = id => ({
    type: REQUEST_DELETE_ANNOUNCEMENT,
    payload: id,
});

export const REQUEST_UPDATE_ANNOUNCEMENT = 'REQUEST_UPDATE_ANNOUNCEMENT';
export const requestUpdateAnnouncementAction = data => ({
    type: REQUEST_UPDATE_ANNOUNCEMENT,
    payload: data,
});
