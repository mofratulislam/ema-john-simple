import React, { useState, useEffect } from 'react';
import FakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
    

const Shop = () => {
        const first10 = FakeData.slice(0,10);
        const [products, setProducts] = useState(first10);
        const [cart, setCart] = useState([]);
        useEffect(()=>{
                const savedCart = getDatabaseCart();
                const productKeys = Object.keys(savedCart);
                const previousCart = productKeys.map( existingKey => {
                    const product = FakeData.find(pd => pd.key === existingKey);
                    product.quantity = savedCart[existingKey];
                    return product;
                })
                setCart(previousCart)
        }, [])
        const handleAddProducts = (product) => {
                const toBeAddedKey = product.key;
                const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
                let count = 1;
                let newCart;
                if(sameProduct){
                    count = sameProduct.quantity + 1;
                    sameProduct.quantity = count;
                    const others = cart.filter(pd => pd.key !== toBeAddedKey);
                    newCart = [...others, sameProduct];
                }
                else{
                    product.quantity = 1;
                    newCart = [...cart, product];
                }
                
                setCart(newCart);
                addToDatabaseCart(product.key, count);
            };

    return (
        <div className="shop-container">
            <div className="product-container">
                    
                {
                    products.map(product => 
                    <Product 
                        key={product.key}
                        showAddToCart={true}
                        product={product}
                        handleAddProducts={handleAddProducts}
                    >
                    </Product> )
                }
                
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
                <Link to="/review">
                    <button className="buy-btn"> Review order</button>
                </Link>
               </Cart>
            </div>
            
        </div>
    );
};



export default Shop;