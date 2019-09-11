// import base react libraries 
import React from 'react';
import { Link } from 'react-router-dom';
// import firebase authorization library
import { auth } from './../../firebase/firebase.utils';
// import redux modules and project selectors
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from "./../../redux/cart/cart.selectors";
import { selectCurrentUser } from "./../../redux/user/user.selectors";
// import logo and styling
import { ReactComponent as Logo } from "./../../assets/balbatross-logo.svg";
import "./header.styles.scss";
// import project components
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


// -- Header functional component -- //
const Header = ({ currentUser, hidden }) => (
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);