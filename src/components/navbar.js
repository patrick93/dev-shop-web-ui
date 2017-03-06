import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
                <div>
                    <Link to="/" className="navbar-brand">Dev Shop</Link>
                </div>
                <ul className="nav navbar-nav pull-right">
                    <li>
                        <Link to="/cart"><i className="fa fa-shopping-cart fa-2x"></i></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;