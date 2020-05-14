import React from "react";

import "./Checkbox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Checkbox = () => {
    return (
        <label className={"checkbox"}>
            <input type={"checkbox"} className={"checkbox__input"} />

            <div className={"checkbox__box"}>
                <FontAwesomeIcon
                    icon={["fas", "check"]}
                    className={"checkbox__box-tick"}
                />
            </div>
            <div className={"checkbox__label"}>Без пересадок</div>
        </label>
    );
};

export default Checkbox;
