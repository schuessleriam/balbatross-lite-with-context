import React from 'react';
import { cartContext } from './../../providers/cart/cart.provider';
import './checkout-item.styles.scss';


const CheckoutItem = ( { item } ) => {
    const { price, quantity, imageUrl, name } = item;
    const { clearItemsFromCart, addItem, removeItem } = React.useContext(cartContext);
    
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div  className="remove-button" onClick={() => clearItemsFromCart(item)}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;
