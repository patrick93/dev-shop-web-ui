import { FETCH_DEVS } from '../actions/index';

const INITIAL_STATE = { devs: [] };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_DEVS:
            return {...state, devs: action.payload.data };
        default:
            return state;
    }
}