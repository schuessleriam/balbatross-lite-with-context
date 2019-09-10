import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as Icon} from './../../assets/shopping-bag.svg'; 
import { toggleCartHidden } from "./../../redux/cart/cart.actions";

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <Icon className="shopping-icon"/>
        <span className="item-count"> 0 </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);