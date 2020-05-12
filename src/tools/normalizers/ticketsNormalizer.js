import { normalize, schema } from "normalizr";
import md5 from "md5";

// import userStorageController from "../userStorageController";

export default async function ticketsNormalizer(originalData) {
    return normalize(originalData, [
        new schema.Entity(
            "tickets",
            {},
            {
                idAttribute(value, parent, key) {
                    return generateKeyForTicket(value);
                },
                processStrategy(value, parent, key) {
                    return {
                        ...value,
                        carrierLogoUrl: getIATALogoUrl(value.carrier),
                        currency: "RUB",
                    };
                },
            }
        ),
    ]);
}

function generateKeyForTicket(ticket) {
    const data = [
        ticket.carrier,
        ticket?.segments.map((s) => s.destination + s.date),
    ];

    return md5(data.flat().join(""));
}

function getIATALogoUrl(code = "") {
    return code ? `//pics.avs.io/99/36/${code}.png` : "";
}
