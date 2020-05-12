import {
    // TICKETS_GET_TICKETS,
    TICKETS_HIDE_LOADER,
    TICKETS_SHOW_LOADER,
    TICKETS_FETCH_SUCCESS,
    TICKETS_FETCH_FAILURE,
} from "../actions/tickets";

export default ticketsReducer;

const initialState = {
    entities: [],
    ids: [],
    loading: true,
    error: null,
};

function ticketsReducer(tickets = initialState, action) {
    if (action.type === TICKETS_SHOW_LOADER) {
        return {
            ...tickets,
            loading: true,
        };
    }

    if (action.type === TICKETS_HIDE_LOADER) {
        return {
            ...tickets,
            loading: false,
        };
    }

    if (action.type === TICKETS_FETCH_SUCCESS) {
        return {
            ...tickets,
            entities: action.payload.entities,
            ids: action.payload.ids,
        };
    }

    if (action.type === TICKETS_FETCH_FAILURE) {
        return {
            ...tickets,
            error: action.payload.error,
        };
    }

    return tickets;
}
