import { ADD_CART } from '../actions/index';

const INITIAL_STATE = { items: [] };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_CART:
            return {...state, items: [action.payload, ...state.items] };
        default:
            return state;
    }
}