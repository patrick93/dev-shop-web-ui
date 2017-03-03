import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDevs } from '../actions/index';
import ShopItem from './shop_item';

class ShopList extends Component {

    componentWillMount() {
        this.props.fetchDevs();
    }

    render() {
        return (
            <div className="row shop-list">
                {this.props.devs.map((dev) => {
                    return (
                        <ShopItem avatar={dev.avatar_url} name={dev.login} key={dev.id} />
                    )
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { devs: state.shop.devs }
}

export default connect(mapStateToProps, { fetchDevs })(ShopList);