import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCart, removeItemCart, placeOrder, updateCartItem } from '../actions/index';
import CartItem from './cart_item';

class Cart extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchCart();
    }

    placeOrder() {
        this.props.placeOrder().then(() => {
            this.context.router.push('/order');
        });
    }

    removeItem(id) {
        this.props.removeItemCart(id).then(() => {
            this.props.fetchCart();
        });
    }

    render() {
        return (
            <div className="container table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Dev</th>
                            <th>Price</th>
                            <th>Hours</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map((item) => {
                            return (
                                <CartItem key={item.id}
                                    item={item}
                                    removeItem={this.removeItem.bind(this, item.id)}
                                    updateAction={this.props.updateCartItem} />
                            );
                        })}
                    </tbody>
                </table>
                <button onClick={this.placeOrder.bind(this)}>Comprar</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { cart: state.cart.items }
}

export default connect(mapStateToProps, { fetchCart, removeItemCart, placeOrder, updateCartItem })(Cart);