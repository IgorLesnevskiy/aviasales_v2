import React from "react";

import "./FiltersBar.scss";
import FilterPanel from "../FilterPanel";

const FiltersBar = () => {
    return (
        <div className={"filters-bar"}>
            {Array(3)
                .fill()
                .map(() => {
                    return (
                        <div className={"filters-bar__item"}>
                            <FilterPanel />
                        </div>
                    );
                })}
        </div>
    );
};

export default FiltersBar;
