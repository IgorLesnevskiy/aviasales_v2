import React from "react";
import Skeleton from "react-loading-skeleton";
import { Grid } from "@material-ui/core";

import {
    convertDate,
    addToDate,
    convertTimeDuration,
    getNounEnding,
    getUniqueId,
} from "../../tools/utils";

import "./Ticket.scss";
import FormattedPrice from "../FormattedPrice";

const Ticket = (props) => {
    const {
        id,
        carrier,
        carrierLogoUrl,
        currency,
        price,
        segments = [],
        isMock = false,
    } = props;

    if (isMock) {
        return <MockTicket infoLinesAmount={2} />;
    }

    return (
        <div className={"ticket"}>
            <div className={"ticket__inner"}>
                <div className={"ticket__head"}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={8}>
                            <div className={"ticket__price"}>
                                <FormattedPrice
                                    amount={price}
                                    currency={currency}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            {carrierLogoUrl && (
                                <div className={"ticket__carrier-logo"}>
                                    <img
                                        src={carrierLogoUrl}
                                        alt={carrier}
                                        title={carrier}
                                    />
                                </div>
                            )}
                        </Grid>
                    </Grid>
                </div>
                <div className={"ticket__body"}>
                    {segments.map((segmentData, key) => {
                        return (
                            <div
                                className={"ticket__info-line"}
                                key={`${id}-${key}`}
                            >
                                <TripInfo {...segmentData} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Ticket;

function TripInfo(props) {
    const { date = null, destination, origin, duration, stops = [] } = props;

    const dateOfTheEnd = addToDate({
        date,
        amount: duration,
        typeOfAmount: "m",
    });

    const formattedTimeFrom = convertDate({
        date,
        formatString: "HH:mm",
    });

    const formattedTimeTo = convertDate({
        date: dateOfTheEnd,
        formatString: "HH:mm",
    });

    const formattedDuration = convertTimeDuration({
        duration,
        originTypeOfDuration: "m",
        formatString: "HHч mmм",
    });

    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <div className={"ticket-info-cell"}>
                    <div className={"ticket-info-cell__title"}>
                        {origin} – {destination}
                    </div>
                    <div className={"ticket-info-cell__value"}>
                        {formattedTimeFrom} – {formattedTimeTo}
                    </div>
                </div>
            </Grid>

            <Grid item xs={4}>
                <div className={"ticket-info-cell"}>
                    <div className={"ticket-info-cell__title"}>В пути</div>
                    <div className={"ticket-info-cell__value"}>
                        {formattedDuration}
                    </div>
                </div>
            </Grid>

            <Grid item xs={4}>
                <div className={"ticket-info-cell"}>
                    <div className={"ticket-info-cell__title"}>
                        {generateStopsLabel(stops)}
                    </div>
                    <div className={"ticket-info-cell__value"}>
                        {stops.join(", ") || "-"}
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

function MockTicket(props) {
    const { infoLinesAmount = 2 } = props;

    return (
        <div className={"ticket"}>
            <div className={"ticket__inner"}>
                <div className={"ticket__head"}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={8}>
                            <div className={"ticket__price"}>
                                <Skeleton />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={"ticket__carrier-logo"}>
                                <Skeleton height={"100%"} />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={"ticket__body"}>
                    {Array(infoLinesAmount)
                        .fill()
                        .map(() => {
                            return (
                                <div
                                    className={"ticket__info-line"}
                                    key={`mock-ticket-info-line-${getUniqueId()}`}
                                >
                                    <MockTicketInfoLine cellsAmount={3} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

function MockTicketInfoLine(props) {
    const { cellsAmount = 3 } = props;
    return (
        <Grid container spacing={3}>
            {Array(cellsAmount)
                .fill()
                .map(() => {
                    return (
                        <Grid
                            item
                            xs={4}
                            key={`mock-ticket-info-line-${getUniqueId()}`}
                        >
                            <MockTicketInfoCell />
                        </Grid>
                    );
                })}
        </Grid>
    );
}

function MockTicketInfoCell(props) {
    return (
        <div className={"ticket-info-cell"}>
            <div className={"ticket-info-cell__title"}>
                <Skeleton />
            </div>
            <div className={"ticket-info-cell__value"}>
                <Skeleton />
            </div>
        </div>
    );
}

function generateStopsLabel(stops = []) {
    if (!stops.length) {
        return "Без пересадок";
    }

    const ending = getNounEnding(stops.length, [
        "пересадка",
        "пересадки",
        "пересадок",
    ]);

    return `${stops.length} ${ending}`;
}
