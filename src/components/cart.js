import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCart, removeItemCart, placeOrder } from '../actions/index';

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
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        <div>
                                            <img src={item.avatar_url} height="100"></img>
                                            <h4>{item.login}</h4>
                                        </div>
                                    </td>
                                    <td>
                                        ${item.price},00
                                    </td>
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        <button onClick={this.removeItem.bind(this, item.id)}>Remove</button>
                                    </td>
                                </tr>
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

export default connect(mapStateToProps, { fetchCart, removeItemCart, placeOrder })(Cart);