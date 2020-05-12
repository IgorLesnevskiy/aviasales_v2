import { connect } from "react-redux";
import { createSelector } from "reselect";

import { getTickets } from "../actions/tickets";

import TicketsList from "../../components/TicketsList";

const getTicketsQuery = (state) => state.tickets;

const ticketsSelector = createSelector([getTicketsQuery], (tickets) => {
    return tickets.ids;
});

const mapState = (state, ownProps) => {
    return {
        tickets: ticketsSelector(state),
        loading: state.tickets.loading,
        error: state.tickets.error,
    };
};

const mapDispatch = {
    getTickets,
};

export default connect(mapState, mapDispatch)(TicketsList);
