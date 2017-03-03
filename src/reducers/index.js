import { combineReducers } from 'redux';
import ShopReducer from './shop_reducer';

const rootReducer = combineReducers({
  shop: ShopReducer
});

export default rootReducer;
