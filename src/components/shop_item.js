import React from 'react';

const ShopItem = (props) => {
    return (
        <div className="col-sm-3 col-lg-3 col-md-3">
            <div className="thumbnail">
                <img src={props.avatar} alt=""></img>
                <div className="caption">
                    <h4>$24.99</h4>
                    <h4><a href="#">{props.name}</a></h4>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;