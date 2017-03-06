import axios from 'axios';
import config from 'config';

export const FETCH_DEVS = "FETCH_DEVS";
export const ADD_CART = "ADD_CART";
export const FETCH_CART = "FETCH_CART";
export const REMOVE_ITEM_CART = "REMOVE_ITEM_CART";
export const PLACE_ORDER = "PLACE_ORDER";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";

export function fetchDevs() {
    const request = axios.get(`https://api.github.com/users?per_page=12`, { auth: {username: 'patrick93', password: 'F76r161an196a'}});

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
        price: dev.price,
        hours: 1
    };
    const request = axios.post(`${config.CART_API_URL}/api/cart`, devModel);

    return {
        type: ADD_CART,
        payload: request
    }
}

export function fetchCart() {
    const request = axios.get(`${config.CART_API_URL}/api/cart`);

    return {
        type: FETCH_CART,
        payload: request
    }
}

export function removeItemCart(id) {
    const request = axios.delete(`${config.CART_API_URL}/api/cart/${id}`);

    return {
        type: REMOVE_ITEM_CART,
        payload: request
    }
}

export function placeOrder() {
    const request = axios.post(`${config.CART_API_URL}/api/order`, {});

    return {
        type: PLACE_ORDER,
        payload: request
    }
}

export function updateCartItem(dev) {
    const request = axios.put(`${config.CART_API_URL}/api/cart/${dev.id}`, dev);

    return {
        type: UPDATE_CART_ITEM,
        payload: request
    }
}