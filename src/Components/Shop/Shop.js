import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../Db/db';
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

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];

        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart);

    }, [products])

    //product clicked then added cart
    const addToCart = selectedProduct => {
        const newCart = [...cart, selectedProduct];
        setCart(newCart);

        addToDb(selectedProduct.id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;