import axios from 'axios';

export const FETCH_DEVS = "FETCH_DEVS";
export const ADD_CART = "ADD_CART";

const ROOT_URL = "https://api.github.com";

export function fetchDevs() {
    const request = axios.get(`${ROOT_URL}/users?per_page=12`, { auth: {username: 'patrick93', password: 'F76r161an196a'}});

    return {
        type: FETCH_DEVS,
        payload: request
    };
}

export function addCart(dev) {
    return {
        type: ADD_CART,
        payload: dev
    }
}