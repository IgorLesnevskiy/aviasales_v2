import React from "react";

import FiltersBar from "../FiltersBar";

import "./FilteredList.scss";
import SortersBar from "../SortersBar";

import TicketsListContainer from "../../redux/containers/TicketsListContainer";

const FilteredList = () => {
    return (
        <React.Fragment>
            <div className={"filtered-list"}>
                <div className={"filtered-list__filters"}>
                    <FiltersBar />
                </div>
                <div className={"filtered-list__content"}>
                    <div className={"filtered-list__sorters"}>
                        <SortersBar />
                    </div>
                    <div className={"filtered-list__items"}>
                        <TicketsListContainer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FilteredList;
