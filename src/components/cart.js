import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
    static contextTypes = {
        router: PropTypes.object
    };


    placeOrder() {
        this.context.router.push('/order');
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
                                        $24.99
                                    </td>
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        <button>Remove</button>
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

export default connect(mapStateToProps, null)(Cart);