import React from "react";

import "./SortersBar.scss";

import CheckersBar from "../ChekersBar";

const SortersBar = () => {
    return (
        <div className={"sorters-bar"}>
            <div className={"sorters-bar__item"}>
                <CheckersBar />
            </div>
        </div>
    );
};

export default SortersBar;
