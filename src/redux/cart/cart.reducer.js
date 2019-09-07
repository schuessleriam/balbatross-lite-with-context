import cartActionTypes from './cart.action.types';

const INITIAL_STATE = {
    hidden: true
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.toggleCartHidden:
            return{
                ...state,
                hidden: !state.hidden 
            }
        default:
            return state;
    }
}