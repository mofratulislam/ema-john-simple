import React from 'react';
import './ProductDetail.css'
import FakeData from '../../fakeData';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
   const{productKey} = useParams() ;
    const product = FakeData.find(pd => pd.key === productKey )
    return (
        <div>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;