// import base react libraries 
import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
// import firebase authorization library
import { auth } from './../../firebase/firebase.utils';
// import logo and styling
import { ReactComponent as Logo } from "./../../assets/balbatross-logo.svg";
import "./header.styles.scss";
// import project components
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CurrentUserContext from './../../contexts/users/current-user.context.js';
import { cartContext } from './../../providers/cart/cart.provider';


// -- Header functional component -- //
const Header = () => {

    const currentUser = useContext(CurrentUserContext);
    const { hidden } = useContext(cartContext);
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo/>
            </Link>
    
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
            {
               currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
                <CartIcon className="option"/>
            </div>
            {
                !hidden ? <CartDropdown /> : null
            }
        </div>
    );
}

export default Header;