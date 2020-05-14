import React from "react";

import "./CheckersBar.scss";
import { getUniqueId } from "../../tools/utils";

const id = getUniqueId();

const CheckersBar = () => {
    return (
        <div className={"checkers-bar"}>
            <div className={"checkers-bar__item"}>
                <label className={"checkers-bar-item"}>
                    <input
                        type={"radio"}
                        className={"checkers-bar-item__input"}
                        name={"checkers-bar-" + id}
                    />
                    <div className={"checkers-bar-item__content"}>
                        Самый быстрый
                    </div>
                </label>
            </div>
            <div className={"checkers-bar__item"}>
                <label className={"checkers-bar-item"}>
                    <input
                        type={"radio"}
                        className={"checkers-bar-item__input"}
                        name={"checkers-bar-" + id}
                    />
                    <div className={"checkers-bar-item__content"}>
                        Самый дешевый
                    </div>
                </label>
            </div>
        </div>
    );
};

export default CheckersBar;
