import axios from "axios";

export class APIClient {
    baseUrl;

    constructor() {
        this.baseUrl = "http://localhost:8080/"
    }

     async request(method,  url  , data , headers ) {

        const authHeader = await APIClient.getAuthHeader();

        return axios.request({
            method: method,
            url: this.baseUrl + url,
            data: data,
            headers: {...headers, ...authHeader }
        });
    }

    static async getAuthHeader()
    {
        return { Authorization: 'Access-Control-Allow-Origin' };
    }
};


let apiClient = null;

export default function getAPIClient() {
    if (apiClient === null) {
        apiClient = new APIClient();
    }

    return apiClient;
};
