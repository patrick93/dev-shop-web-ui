import React, { Component } from 'react';
import { debounce } from 'throttle-debounce';

class CartItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            hours: this.props.item.hours
        }
    }

    onInputChange(event){
        this.setState({hours: event.target.value});
        if(event.target.value){
            const hours = parseInt(event.target.value)
            this.props.updateAction({...this.props.item, hours });
        }
    }

    render() {
        return (
            <tr>
                <td>
                    <div>
                        <img src={this.props.item.avatar_url} height="100"></img>
                        <h4>{this.props.item.login}</h4>
                    </div>
                </td>
                <td>
                    ${this.props.item.price},00
                </td>
                <td>
                    <input type="number" value={this.state.hours} onChange={this.onInputChange.bind(this)} />
                </td>
                <td>
                    <button onClick={this.props.removeItem}>Remove</button>
                </td>
            </tr>
        );
    }
}

export default CartItem;