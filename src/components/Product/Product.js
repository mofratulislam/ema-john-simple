import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "./Product.css"

const Product = (props) => {
    const {name, img, seller, price, stock } = props.product
    return (
        <div className="product">
            <div >
                <img src={img} alt=""/>
            </div>
            <div>
                <h3>{name}</h3>
                <br/>
                <p  style={{color:'dimgrey'}}><small>By {seller}</small></p>
                <br/>
                <h2>${price}</h2>
                 <h5 style={{color:'red'}}><small>Only {stock} left in stock</small></h5>
                 <br/>
                 <button className="buy-btn" onClick={() => props.handleAddProducts(props.product)}> 
                        <FontAwesomeIcon icon={faShoppingCart} />  Add to cart
                 </button>
            </div>
            
           
        </div>
    );
};

export default Product;