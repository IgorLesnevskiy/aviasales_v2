import React from "react";

import "./FilterPanel.scss";
import Checkbox from "../Checkbox";

const FilterPanel = (props) => {
    const { children, title } = props;

    return (
        <div className={"filter-panel-wrapper"}>
            <div className={"filter-panel-wrapper__title"}>{title}</div>
            <div className={"filter-panel-wrapper__content"}>{children}</div>
        </div>
    );
};

const FilterPanelCheckboxesList = (props) => {
    return (
        <div className={"filter-panel-checkboxes-list"}>
            <div className={"filter-panel-checkboxes-list__row"}>
                <Checkbox />
            </div>
            <div className={"filter-panel-checkboxes-list__row"}>
                <Checkbox />
            </div>
            <div className={"filter-panel-checkboxes-list__row"}>
                <Checkbox />
            </div>
        </div>
    );
};

export default FilterPanel;

export { FilterPanelCheckboxesList };
