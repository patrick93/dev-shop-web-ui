import axios from 'axios';

export const FETCH_DEVS = "FETCH_DEVS";
export const ADD_CART = "ADD_CART";
export const FETCH_CART = "FETCH_CART";
export const REMOVE_ITEM_CART = "REMOVE_ITEM_CART";
export const PLACE_ORDER = "PLACE_ORDER";

const ROOT_URL = "https://api.github.com";

export function fetchDevs() {
    const request = axios.get(`${ROOT_URL}/users?per_page=12`, { auth: {username: 'patrick93', password: 'F76r161an196a'}});

    return {
        type: FETCH_DEVS,
        payload: request
    };
}

export function addCart(dev) {
    var devModel = {
        id: dev.id,
        login: dev.login,
        avatar_url: dev.avatar_url,
        price: dev.price
    };
    const request = axios.post(`http://localhost:5000/api/cart`, devModel);

    return {
        type: ADD_CART,
        payload: request
    }
}

export function fetchCart() {
    const request = axios.get(`http://localhost:5000/api/cart`);

    return {
        type: FETCH_CART,
        payload: request
    }
}

export function removeItemCart(id) {
    const request = axios.delete(`http://localhost:5000/api/cart/${id}`);

    return {
        type: REMOVE_ITEM_CART,
        payload: request
    }
}

export function placeOrder() {
    const request = axios.post(`http://localhost:5000/api/order`, {});

    return {
        type: PLACE_ORDER,
        payload: request
    }
}