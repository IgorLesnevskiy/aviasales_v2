import React, { useEffect } from "react";

import "./TicketsList.scss";
import TicketContainer from "../../redux/containers/TicketContainer";

const TicketsList = (props) => {
    const {
        getTickets = Function.prototype,
        tickets = [],
        loading = false,
        error = false,
    } = props;

    useEffect(() => {
        getTickets();
    }, [getTickets]);

    if (loading) {
        return <MockTicketsList ticketsAmount={3} />;
    }

    if (error) {
        return <p>Сервер временно недоступен. Попробуйте позже.</p>;
    }

    return (
        <div className={"tickets-list"}>
            {tickets.map((ticketId) => {
                return (
                    <div className={"tickets-list__item"} key={ticketId}>
                        <TicketContainer id={ticketId} />
                    </div>
                );
            })}
        </div>
    );
};

function MockTicketsList(props) {
    const { ticketsAmount = 3 } = props;

    return (
        <div className={"tickets-list"}>
            {Array(ticketsAmount)
                .fill()
                .map((_, key) => {
                    return (
                        <div className={"tickets-list__item"} key={key}>
                            <TicketContainer isMock={true} />
                        </div>
                    );
                })}
        </div>
    );
}

export default TicketsList;
