import { combineReducers } from 'redux';
import ShopReducer from './shop_reducer';
import CartReducer from './cart_reducer';

const rootReducer = combineReducers({
  shop: ShopReducer,
  cart: CartReducer
});

export default rootReducer;
