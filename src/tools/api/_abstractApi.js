import axios from "axios";

export default class _abstractApi {
    constructor({ baseURL = "" } = {}) {
        this.baseURL = baseURL;
    }

    get(path, options = {}) {
        return this.request(this._buildUrl(path), {
            method: "GET",
            ...options,
        });
    }

    post(path, body, options = {}) {
        return this.request(this._buildUrl(path), {
            method: "POST",
            data: {
                ...body,
            },
            ...options,
        });
    }

    request(url, options = {}) {
        return axios({
            url,
            ...options,
        }).catch((e) => {
            throw Error(e);
        });
    }

    _buildUrl(path) {
        return `${this.baseURL}${path}`;
    }
}
