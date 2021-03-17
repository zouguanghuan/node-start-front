import axios from 'axios';

function getBaseUrl(): string {
    return 'http://localhost:9999';
}


function apiAxios(method: any, url: string, params: any) {
    axios.defaults.baseURL = getBaseUrl();

    return new Promise((resolve, reject) => {
        const axiosParams = {
            method,
            url,
            params,
        }

        axios(axiosParams)
            .then(res => {
                if (res.status === 200) {
                    resolve(res.data)
                } else {
                    reject(res.data.msg)
                }
            }, error => {
                reject(error)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export const HTTP = {
    get: (url: string, params?: any) => {
        return apiAxios('GET', url, params)
    },
    post: (url: string, params?: any) => {
        return apiAxios('POST', url, params)
    },
    delete: (url: string, params?: any) => {
        return apiAxios('DELETE', url, params)
    }

}