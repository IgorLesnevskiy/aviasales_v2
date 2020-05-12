import React from "react";

import "./FormattedPrice.scss";
import { convertToLocalPrice } from "../../tools/utils";

const LOCALE_MAP = {
    RUB: "ru",
    USD: "us",
    EUR: "eu",
};

const FormattedPrice = (props) => {
    const { currency = "RUB", amount = 0 } = props;

    return (
        <div className={"formatted-price"} data-type={currency}>
            {convertToLocalPrice(amount, LOCALE_MAP[currency])}
        </div>
    );
};

export default FormattedPrice;
