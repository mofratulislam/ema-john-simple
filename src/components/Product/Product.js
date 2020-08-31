import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "./Product.css"
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, img, seller, price, stock , key  } = props.product
    return (
        <div className="product">
            <div > 
                <img src={img} alt=""/>
            </div>
            <div>
                <h3> <Link to={"/product/"+key}>{name}</Link> </h3> 
                <br/>
                <p  style={{color:'dimgrey'}}><small>By {seller}</small></p>
                <br/>
                <h2>${price}</h2>
                 <h5 style={{color:'red'}}><small>Only {stock} left in stock</small></h5>
                 <br/>
                 { props.showAddToCart && <button className="buy-btn" onClick={() => props.handleAddProducts(props.product)}> 
                        <FontAwesomeIcon icon={faShoppingCart} />  Add to cart
                 </button>}
            </div>
            
           
        </div>
    );
};

export default Product;