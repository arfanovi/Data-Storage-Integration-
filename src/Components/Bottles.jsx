import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';
import './Bottles.css'
import { addToLocalS, getStoredCart, removeFromLS } from './Utilities/localstorage';
import Cart from './Cart/Cart';



const Bottles = () => {

    const [bottles , setBottles] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[]);


 
    // load cart from loacal storage 
    useEffect(() => {
        if(bottles.length) {
           const storedCart = getStoredCart();
           console.log(storedCart, bottles);
           const saveCart = [];
           for(const id of storedCart){
               console.log(id);
               const bottle = bottles.find(bottle => bottle.id === id);
               if(bottle){
                   saveCart.push(bottle)
               }
           }
           setCart(saveCart);
        }
       },[bottles])



    // Purchase Button Handle and data access 
    const handleAddToCard = bottle =>{
        const newCart = [...cart, bottle]
        setCart(newCart);
        addToLocalS(bottle.id);
    }

    const handleRemoveCart = id =>{
        // visual cart 
        // remove from local storage 
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        removeFromLS(id)
    }
    return (
        <div>

            <h2>Bottles Avaiable Here: {bottles.length}</h2>
            {/* <h2>Cart: {cart.length}</h2> */}
            <Cart cart={cart } handleRemoveCart={handleRemoveCart}></Cart>
          <div className='bottle-container'>
          {
                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    bottle={bottle}
                    handleAddToCard={handleAddToCard}
                    >
                    </Bottle>)
            }
          </div>
        </div>
    );
};

export default Bottles;