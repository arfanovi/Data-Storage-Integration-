import PropTypes from 'prop-types';
import React from 'react';

import './Cart.css'

const Cart = ({cart, handleRemoveCart}) => {
    return (
        <div>
            <h2>Cart: {cart.length}</h2>
            <div className='cart-container'>
                {cart.map(bottle =>  <div>
                    <img src={bottle.img}></img>
                    <button onClick={() => handleRemoveCart(bottle.id)}>Remove</button>
                </div> )}
            </div>
        </div>
    );
};

Cart.PropTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveCart: PropTypes.func.isRequired
}
export default Cart;