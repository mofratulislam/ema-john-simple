import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)
    let totalPrice = 0;
    for(let i = 0; i< cart.length; i++){
        totalPrice = totalPrice + cart[i].price;
    }
    return (
        <div>
            <h4>Order Summery</h4>
             <p>Items Orders: {cart.length}</p>
             <p>Total Price: {totalPrice}</p>
        </div>
    );
};

export default Cart;