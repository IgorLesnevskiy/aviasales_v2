import { connect } from "react-redux";

import Ticket from "../../components/Ticket";

const mapState = (state, ownProps) => {
    const ticketId = ownProps.id;

    return {
        ...state.tickets.entities[ticketId],
    };
};

export default connect(mapState, null)(Ticket);
