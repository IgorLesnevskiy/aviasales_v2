import React from "react";

import "./SortersBar.scss";
import SorterPanel from "../SorterPanel";

const SortersBar = () => {
    return (
        <div className={"sorters-bar"}>
            {Array(3)
                .fill()
                .map(() => {
                    return (
                        <div className={"sorters-bar__item"}>
                            <SorterPanel />
                        </div>
                    );
                })}
        </div>
    );
};

export default SortersBar;
