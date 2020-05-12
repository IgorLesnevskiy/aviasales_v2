export const TICKETS_GET_TICKETS = "[tickets] TICKETS_GET_TICKETS";
export const TICKETS_FETCH_FAILURE = "[tickets] TICKETS_FETCH_FAILURE";
export const TICKETS_FETCH_SUCCESS = "[tickets] TICKETS_FETCH_SUCCESS";
export const TICKETS_SHOW_LOADER = "[tickets ui] TICKETS_SHOW_LOADER";
export const TICKETS_HIDE_LOADER = "[tickets ui] TICKETS_HIDE_LOADER";

export function getTickets() {
    return {
        type: TICKETS_GET_TICKETS,
        payload: {},
    };
}

export function ticketsFetchSuccess(params) {
    return {
        type: TICKETS_FETCH_SUCCESS,
        payload: params,
    };
}

export function ticketsFetchFailure(params) {
    return {
        type: TICKETS_FETCH_FAILURE,
        payload: params,
    };
}

export function ticketsShowLoader() {
    return {
        type: TICKETS_SHOW_LOADER,
        payload: {},
    };
}

export function ticketsHideLoader() {
    return {
        type: TICKETS_HIDE_LOADER,
        payload: {},
    };
}
