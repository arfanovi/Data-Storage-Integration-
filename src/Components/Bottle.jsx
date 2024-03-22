import React from 'react';
import PropTypes from 'prop-types'
import './bottle.css'
const Bottle = ({bottle, handleAddToCard}) => {
    // console.log(bottle)
    const {name , img, price} = bottle;
    return (
        <div className='bottle'>
            <h3>All Bottle</h3>
            <h2>Title : {name}</h2>
            <img src={img} alt="" />
            <h4>Price: ${price}</h4>
            <button onClick={() => handleAddToCard(bottle)}>Purchase</button>
        </div>
    );
};




Bottle.PropTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCard: PropTypes.func.isRequired
}
export default Bottle;