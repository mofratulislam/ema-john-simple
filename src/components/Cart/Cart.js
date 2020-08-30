import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)
    // let totalPrice = 0;
    // for(let i = 0; i< cart.length; i++){
    //     totalPrice = totalPrice + cart[i].price;
    // }
    return (
        <div>
            <h4>Order Summery</h4>
             <h5>Items Orders: {cart.length}</h5>
             <h3>Total Price: {totalPrice}</h3>
             <br/>
             <Link to="/review">
                <button className="buy-btn"> Review order</button>
             </Link>
             
        </div>
    );
};

export default Cart;