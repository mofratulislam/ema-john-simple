import React from 'react';

const ReviewItem = (props) => {
    const{name, quantity} = props.product;
    return (
        <div>
            <h4>{name}</h4>
             <p>Quantity: {quantity}</p>
             <button className="buy-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;