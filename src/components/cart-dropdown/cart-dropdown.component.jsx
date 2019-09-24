import React, {useContext} from 'react';
import { withRouter } from 'react-router-dom'
import CustomButton from './../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { cartContext } from './../../providers/cart/cart.provider';

const CartDropdown = ( { history } ) => {
    
    const { toggleHidden, cartItems } = useContext(cartContext);

    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {   cartItems.length ? 
                        cartItems.map(cartItem => 
                            <CartItem key={cartItem.id} item={cartItem}/>
                        )
                    : <span className="empty-cart">Your cart is currently empty</span>        
                }
            </div>
            <CustomButton onClick={() => 
                {
                    history.push('/checkout');
                    toggleHidden();
                }
            }>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
}



export default withRouter(CartDropdown);