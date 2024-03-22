

const getStoredCart = () =>{
    const storeCartStarting = localStorage.getItem('cart');
    if(storeCartStarting){
        return JSON.parse(storeCartStarting)
    }
    return [];
};


const saveCartToLocalS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
};

const addToLocalS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLocalS(cart);
};

const removeFromLS = id => {
    const cart = getStoredCart();
    // removeing every id 
    // const remaining = cart.filter(idx => idx !==);
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLocalS(remaining)
}

export {  addToLocalS, getStoredCart, removeFromLS }