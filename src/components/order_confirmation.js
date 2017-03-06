import React from 'react';

const OrderConfirmation = () => {
    let orderNumber = "";
    for (var i = 0; i < 7; i++){
        orderNumber += Math.floor(Math.random()*9);
    }
    return (
        <div className="container">
            <h1>Thank You for your order</h1>
            <h3>Order number is: {orderNumber}</h3>    
        </div>
    );
};

export default OrderConfirmation;