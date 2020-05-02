import React from "react";

import "./Ticket.scss";

const Ticket = () => {
    return (
        <div className={"ticket"}>
            <div className={"ticket__inner"}>
                <div className={"ticket__price"}>13 400 руб</div>
            </div>
        </div>
    );
};

export default Ticket;
