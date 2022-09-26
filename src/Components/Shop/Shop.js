import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //product data store and set
    const [products, setProducts] = useState([]);
    //data set addToCart
    const [cart, setCart] = useState([])

    //fetch product data
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    //product clicked then added cart
    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Products Summary</h2>
                <p>Selected Items: {cart.length}</p>
                {console.log(cart)}
            </div>
        </div>
    );
};

export default Shop;