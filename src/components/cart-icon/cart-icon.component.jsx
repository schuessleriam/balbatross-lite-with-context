import React, { useContext } from 'react';
import { ReactComponent as Icon} from './../../assets/shopping-bag.svg'; 
import { cartContext } from './../../providers/cart/cart.provider';


import './cart-icon.styles.scss';

const CartIcon = () =>{
    const { toggleHidden, cartItemsCount } = useContext(cartContext);

    return(
        <div className="cart-icon" onClick={toggleHidden}>
            <Icon className="shopping-icon"/>
            <span className="item-count"> {cartItemsCount} </span>
        </div>
    );
}

export default CartIcon;