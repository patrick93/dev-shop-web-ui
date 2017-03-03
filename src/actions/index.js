import axios from 'axios';

export const FETCH_DEVS = "FETCH_DEVS";

const ROOT_URL = "https://api.github.com";

export function fetchDevs() {
    const request = axios.get(`${ROOT_URL}/users`, { auth: {username: 'patrick93', password: 'F76r161an196a'}});

    return {
        type: FETCH_DEVS,
        payload: request
    };
}