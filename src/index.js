import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { BrowserRouter } from 'react-router-dom';
import CartProvider from './providers/cart/cart.provider.jsx';

ReactDOM.render(
    <CartProvider>
        <BrowserRouter> 
            <App /> 
        </BrowserRouter>     
    </CartProvider>,
document.getElementById('root'));
