import { FETCH_CART } from '../actions/index';

const INITIAL_STATE = { items: [] };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CART:
            return {...state, items: action.payload.data };
        default:
            return state;
    }
}