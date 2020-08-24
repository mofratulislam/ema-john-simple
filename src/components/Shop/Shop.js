import React, { useState } from 'react';
import FakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';

    

const Shop = () => {
        const first10 = FakeData.slice(0,10);
        const [products, setProducts] = useState(first10);
           
        const handleAddProducts = (product) => {
                    console.log(product)
            };
            
    return (
        <div className="shop-container">
            <div className="product-container">
                    
                {
                    products.map(product => 
                    <Product 
                        product={product}
                        handleAddProducts={handleAddProducts}
                    >
                    </Product> )
                }
                
            </div>
            <div className="cart-container">
                <h1>this is a cart</h1>
            </div>
            
        </div>
    );
};

export default Shop;