import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price*prd.quantity, 0)
    // let total = 0;
    // for(let i = 0; i< cart.length; i++){
    //     const product = cart[i] ;
    //     total = total + product.price * product.quantity ;
    // }
    return (
        <div>
            <h4>Order Summery</h4>
             <h5>Items Ordered: {cart.length}</h5>
             <h3>Total price: {total}</h3>
             <br/>
             { props.children}
             
        </div>
    );
};

export default Cart;