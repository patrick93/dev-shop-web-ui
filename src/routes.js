import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ShopList from './components/shop_list';
import Cart from './components/cart';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={ShopList} />
        <Route path="cart" component={Cart} />
    </Route>
)