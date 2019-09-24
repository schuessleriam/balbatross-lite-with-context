export const addItemToCart = (cartItems, itemToAdd) => {
     const isDuplicate = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

     if (isDuplicate){
         return(
             cartItems.map(cartItem => 
                cartItem.id === itemToAdd.id ?
                    {...cartItem, quantity: cartItem.quantity+1} 
                :
                    cartItem     
            )
         )
     }

     else{
         return [...cartItems, {...itemToAdd, quantity: 1}]
     }
 }

 export const removeItemFromCart = (cartItems, itemToRemove) => {
    if (itemToRemove.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
        
    } else{
        return cartItems.map(cartItem => 
               cartItem.id === itemToRemove.id ?
                   {...cartItem, quantity: cartItem.quantity-1} 
               :
                   cartItem     
           )
        
    }
}

export const calculateCartTotal = (cartItems) => {
    return cartItems.reduce((accum, item) => accum+(item.price * item.quantity), 0);
}

export const clearItemFromCartArray = (cartItems, itemToClear) => {    
    return cartItems.filter(cartItem => cartItem.id !== itemToClear.id);
}

export const selectCartItemsCount = cartItems => ( 
    cartItems.reduce((accum, item) => accum+item.quantity, 0)
);

