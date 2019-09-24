import React, { useState, createContext, useEffect } from 'react';
import { addItemToCart, 
        removeItemFromCart, 
        clearItemFromCartArray,
        calculateCartTotal, 
        selectCartItemsCount
} from './cart.utils.js';

export const cartContext = createContext({
    hidden: true,
    cartItems: [],
    cartItemsCount: 0,
    total: 0,
    toggleHidden: () => {},
    addItem: () => {},
    removeItem: () => {},
    clearItemsFromCart: () => {},
});

const CartProvider = ({children}) => {

    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotals, setCartTotals] = useState({totalPrice: 0, totalItemCount: 0});


    useEffect(() => {
        setCartTotals({
            totalPrice: calculateCartTotal(cartItems),
            totalItemCount: selectCartItemsCount(cartItems)  
        })
    }, [cartItems]);


    const toggleHidden = () => {
        setHidden(!hidden);
    }
    const addItem = item => {
        setCartItems(addItemToCart(cartItems, item));
    }
    const removeItem = item => {
        setCartItems(removeItemFromCart(cartItems, item));
    }
    const clearItemsFromCart = (itemToClear) => {
        setCartItems(clearItemFromCartArray(cartItems, itemToClear));
    }

    return(
        <cartContext.Provider value={{
            hidden,
            cartItems,
            cartItemsCount: cartTotals.totalItemCount,
            total: cartTotals.totalPrice,
            toggleHidden,
            addItem,
            removeItem,
            clearItemsFromCart,
        }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;

