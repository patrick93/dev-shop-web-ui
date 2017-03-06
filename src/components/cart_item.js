import React, { Component } from 'react';
import _ from 'lodash';

class CartItem extends Component {
    render() {
        const MAX_HOURS = 8;
        const hoursValues = _.range(1, MAX_HOURS+1);

        return (
            <tr>
                <td>
                    <div>
                        <img src={this.props.item.avatar_url} height="100"></img>
                        <h4>{this.props.item.login}</h4>
                    </div>
                </td>
                <td>
                    ${this.props.item.price.toFixed(2)}
                </td>
                <td>
                    <select className="form-control" value={this.props.item.hours} onChange={this.props.hourChange}>
                        {hoursValues.map((value) => {
                            return <option value={value}>{value}</option>
                        })}
                    </select>
                </td>
                <td className="delete-item-button">
                    <button className="btn btn-danger" onClick={this.props.removeItem}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;