import {
    TICKETS_GET_TICKETS,
    ticketsShowLoader,
    ticketsHideLoader,
    ticketsFetchSuccess,
    ticketsFetchFailure,
} from "../actions/tickets";
import api from "../../tools/api";

const getTickets = ({ dispatch }) => (next) => (action) => {
    next(action);

    if (action.type === TICKETS_GET_TICKETS) {
        dispatch(ticketsShowLoader());

        api.getTickets(5)
            .then((data) => {
                dispatch(
                    ticketsFetchSuccess({
                        entities: data.entities.tickets,
                        ids: data.result,
                    })
                );

                dispatch(ticketsHideLoader());
            })
            .catch((e) => {
                console.error(e);

                dispatch(
                    ticketsFetchFailure({
                        error: e.message,
                    })
                );

                dispatch(ticketsHideLoader());
            });
    }
};

export default [getTickets];
