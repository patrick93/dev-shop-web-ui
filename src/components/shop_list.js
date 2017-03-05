import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDevs, addCart } from '../actions/index';
import ShopItem from './shop_item';

class ShopList extends Component {

    componentWillMount() {
        this.props.fetchDevs();
    }

    getPrice(dev) {
        return dev.login.length * 50;
    }

    render() {
        return (
            <div className="container">
                <div className="row shop-list">
                    {this.props.devs.map((dev) => {
                        dev.price = this.getPrice(dev);
                        return (
                            <ShopItem avatar={dev.avatar_url} 
                                name={dev.login}
                                key={dev.id}
                                price={dev.price} 
                                onClick={this.props.addCart.bind(this, dev) }  />
                        )
                    })}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { devs: state.shop.devs }
}

export default connect(mapStateToProps, { fetchDevs, addCart })(ShopList);