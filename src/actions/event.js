export const ADD_EVENT = 'ADD_EVENT';

export const RESIZE_AND_DRAG_EVENT = 'RESIZE_AND_DRAG_EVENT';

export const CHANGE_EVENT = 'CHANGE_EVENT';

export const DELETE_EVENT = 'DELETE_EVENT'

export const addEvent = payload => ({
    type: ADD_EVENT,
    payload
});

export const resizeAndDragEvent = payload => ({
    type:RESIZE_AND_DRAG_EVENT,
    payload
});

export const changeEvent = payload => ({
    type: CHANGE_EVENT,
    payload
});

export const deleteEvent = payload => ({
    type: DELETE_EVENT,
    payload
});