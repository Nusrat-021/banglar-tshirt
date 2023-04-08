import React from 'react';
import './Cart.css';
const Cart = ({cart,handleRemoveFromCart}) => {
  let message;
  if(cart.length === 0){ 
    message = <p>Please add some products</p>
  }
  else{
    message = <div>
      <h3>Boroloxxxxx</h3>
      <p><small>thanks for giving your money</small></p>
    </div>
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
      <p className={`bold border ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
      {cart.length > 2 ? <span className='purple'>Aro kino</span>: <span>Fokira</span>}
      {message}
      {
        cart.map(tshirt => <p
        key={tshirt._id}

        >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
      }
      {
        cart.length === 2 && <p>Double Bonanza!!</p>
      }
      {
        cart.length ===3 || <h3>Tinta to hoilo na!!!</h3>
      }
    </div>
  );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contain an element, component, div
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. logical &&: (if the condition is true then the next thing will be displayed)
 * 4. logical || (if the condition is false then the next thing will be displayed)
 * */ 

/**
 * CONDITIONAL CSS CLASS
 * 1. ternary
 * 2. ternary inside template string
 * */ 