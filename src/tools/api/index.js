import buildUrl from "build-url";

import AbstractApi from "./_abstractApi";
import ticketsNormalizer from "../normalizers/ticketsNormalizer";

const API_URL = "https://front-test.beta.aviasales.ru";

class Api extends AbstractApi {
    constructor() {
        super({
            baseURL: API_URL,
        });

        this._searchToken = null;
    }

    /**
     * Get tickets from API
     * @param amount - how much tickets you would like to get (0 means all)
     * @returns
     */
    async getTickets(amount = 0) {
        const token = await this._getSearchToken();
        const url = buildUrl(null, {
            path: "tickets",
            queryParams: {
                searchId: token,
            },
        });

        return this.get(url).then((result) => {
            const tickets = result?.data?.tickets || [];

            return ticketsNormalizer(
                amount ? tickets.slice(0, amount) : tickets
            );
        });
    }

    async _getSearchToken() {
        if (this._searchToken) {
            return this._searchToken;
        }

        const newToken = await this.get("/search");
        this._searchToken = newToken.data.searchId;

        return this._searchToken;
    }
}

export default new Api();
