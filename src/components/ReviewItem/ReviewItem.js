import React from 'react';

const ReviewItem = (props) => {
    const{name, quantity, key ,  img, seller, price} = props.product;
    return (
        <div className="product">
            <div > 
                <img src={img} alt=""/>
            </div>
            <div>
            <h3 style={{fontWeight: 'bold'}} className="product-name">{name}</h3>
             <p>Quantity: {quantity}</p>
             <p  style={{color:'dimgrey'}}><small>By {seller}</small></p>
             <br/>
             <h2>${`${price} X ${quantity} = $${parseFloat(price)*parseFloat(quantity)}`}</h2>
             
             <br/>
             <button onClick={() => props.removeProduct(key)} className="buy-btn">Remove</button>
             </div>
        </div>
    );
};

export default ReviewItem;