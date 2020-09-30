import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();
    const handleProceedCheckout = () =>{
        history.push('/shipment');
    }
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    };


    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        fetch('https://polar-island-12130.herokuapp.com/productsByKeys', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => setCart(data))
    }, [])
    let thankYou;
     if(orderPlaced){
       thankYou =  <img src={happyImage} alt=""/>
     } 
    return (
        
        <div className="shop-container">
           <div className="product-container">
           
            { 
                cart.map(pd => <ReviewItem 
                    product={pd}
                    key={pd.key}
                    removeProduct={removeProduct}
                
                >

                </ReviewItem>)
            }
            {
                 thankYou
            }
           </div>
           <div className="cart-container">
               <Cart cart={cart}>
                   <button onClick={handleProceedCheckout} className="buy-btn"> Proceed to checkout</button>
               </Cart>
               
            </div>
        </div>
    );
};

export default Review;