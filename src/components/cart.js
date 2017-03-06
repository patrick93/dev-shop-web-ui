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

    calculateTotal() {
        return this.props.cart.reduce((prev, item) => {
            return prev + item.price*item.hours;
        }, 0)
    }

    hourChange(item, event){
        const hours = parseInt(event.target.value)
        this.props.updateCartItem({...item, hours }).then(() => {
            this.props.fetchCart();
        });
    }

    render() {
        if (this.props.cart.length === 0) {
            return (
                <div className="container">
                    <h1>Shopping Cart is empty</h1>
                </div>
            )
        }

        return (
            <div className="container">
                <div className="table-responsive">
                    <div>
                        <h2 className="pull-left">Shopping Cart</h2>
                        <button className="btn btn-success buy-button pull-right" onClick={this.placeOrder.bind(this)}>Buy</button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Dev</th>
                                <th>Price/hr</th>
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
                                        hourChange={this.hourChange.bind(this, item)} />
                                );
                            })}
                        </tbody>
                    </table>
                    <hr />
                    <h3 className="pull-right">Total: ${this.calculateTotal().toFixed(2)}</h3>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { cart: state.cart.items }
}

export default connect(mapStateToProps, { fetchCart, removeItemCart, placeOrder, updateCartItem })(Cart);