import React, { useContext } from 'react';
import './checkout.styles.scss';
import CheckoutItem from "./../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from './../../components/stripe-button/stripe-button.component';
import { cartContext } from './../../providers/cart/cart.provider';

const CheckoutPage = () => {
    
    const { cartItems, total} = useContext(cartContext);

    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} item={cartItem}/>
                )
            }

            <div className="explination">
                    As I am sure you know, this is not a real store. If you would like 
                    to test the payment Component, you can enter the following demo card 
                    provided by Stripe.
            </div>
            <div className="total">Total: ${total}</div>
            <div className="test-warning">
                *Please use following information for test payments* 
                <br/>
                N: 4242 4242 4242 4242 -- Exp: 12/20 -- CVV: 123
                <br/>
            </div>
            <StripeCheckoutButton price={total}/>
        </div>
    );    
}


export default CheckoutPage;
