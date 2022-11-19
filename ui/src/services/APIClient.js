import axios, { Method} from "axios";

export class APIClient {
    baseUrl;

    constructor() {
        this.baseUrl = "localhost:8080/"
    }

     async request(method: Method, url  , data , headers ) {

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
        return {Authorization: 'Bearer ' + window.localStorage.getItem('token')};
    }

    parseViolations(data)
    {
        let violations = [];

        if (data.violations) {
            for(let violationData of data.violations) {
                violations.push(violationData);
            }
        }

        return violations;
    }
};


let apiClient = null;

export default function getAPIClient() {
    if (apiClient === null) {
        apiClient = new APIClient();
    }

    return apiClient;
};
