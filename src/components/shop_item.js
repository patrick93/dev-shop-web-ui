import React from 'react';

const ShopItem = (props) => {
    return (
        <div className="col-sm-3 col-lg-3 col-md-3">
            <div className="thumbnail">
                <img src={props.avatar} alt=""></img>
                <div className="caption">
                    <div>
                        <h4>{props.name}</h4>
                    </div>
                    <div>
                        <span>${props.price},00</span>
                        <button className="pull-right btn btn-success" onClick={props.onClick}><i className="fa fa-cart-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;