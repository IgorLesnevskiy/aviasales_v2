import React from "react";

import "./TicketsList.scss";
import Ticket from "../Ticket";

const TicketsList = () => {
    return (
        <div className={"tickets-list"}>
            {Array(3)
                .fill()
                .map(() => {
                    return (
                        <div className={"tickets-list__item"}>
                            <Ticket />
                        </div>
                    );
                })}
        </div>
    );
};

export default TicketsList;
