import React from 'react';
import './Product.css';

const Product = ({ product, addToCart }) => {
    const { img, name, price, ratings } = product
    return (
        <div className='product'>
            <img src={img}></img>
            <div className="product-info">
                <p>Name: {name}</p>
                <p>Name: {price}</p>
                <p>Name: {ratings}</p>
            </div>
            <button onClick={() => addToCart(product)}>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;