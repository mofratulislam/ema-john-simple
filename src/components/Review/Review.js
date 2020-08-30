import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import FakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map( key => {
            const product = FakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts)
    }, [])
    return (
        
        <div>
            <h1> Orderd Items : {cart.length}</h1>
            { 
                cart.map(pd => <ReviewItem product={pd} key={pd.key}></ReviewItem>)
            }
        </div>
    );
};

export default Review;