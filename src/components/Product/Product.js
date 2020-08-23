import React from 'react';
import "./Product.css"

const Product = (props) => {
    const {name, img, seller, price, stock } = props.product
    return (
        <div className="product">
            <div >
                <img src={img} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
                <br/>
                <p><small>By {seller}</small></p>
                <br/>
                <p>${price}</p>
                 <p><small>Only {stock} left in stock</small></p>
            </div>
            
           
        </div>
    );
};

export default Product;