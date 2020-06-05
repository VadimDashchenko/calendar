import {ADD_EVENT, RESIZE_AND_DRAG_EVENT, CHANGE_EVENT, DELETE_EVENT} from "../actions/event";

const initialState = {
    events: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            const hours = Number(action.payload.time.split(':')[0]);
            const minutes = Number(action.payload.time.split(':')[1]);
            action.payload.start = new Date(new Date(action.payload.start).setHours(hours));
            action.payload.start = new Date(new Date(action.payload.start).setMinutes(minutes));
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        case RESIZE_AND_DRAG_EVENT:
            return {
                ...state,
                events: action.payload
            }
        case CHANGE_EVENT:
            const modifierEvent = action.payload;
            const event = state.events.find(e => e.id === modifierEvent.id);
            if (event !== modifierEvent) {
                let array = state.events.filter(e => e.id !== modifierEvent.id);
                array.push(modifierEvent);
                return {
                    ...state,
                    events: array
                }
            }
            return state;
        case DELETE_EVENT:
            return {
                ...state,
                events: state.events.filter(event => event.id !== action.payload)
            }
        default:
            return state;
    }
}