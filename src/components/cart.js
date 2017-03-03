import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
    render() {
        return (
            <div className="container">
                <ul className="list-group">
                    {this.props.cart.map((item) => {
                        return (
                            <li className="list-group-item" key={item.id}>
                                <div>
                                    <img src={item.avatar_url} height="100"></img>
                                    <h4>{item.login}</h4>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { cart: state.cart.items }
}

export default connect(mapStateToProps, null)(Cart);