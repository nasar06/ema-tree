
const addToDb = (id) => {
    let shoppingCart = {};

    shoppingCart = getStoredCart()

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

// get get local storage data
const getStoredCart = () => {
    let shoppintCart = {}
    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        shoppintCart = JSON.parse(storedCart);
    }
    return shoppintCart;
}

export {
    addToDb,
    getStoredCart
}