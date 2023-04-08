import React, { useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import { toast } from 'react-hot-toast';

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    const exits = cart.find(ts => ts._id === tshirt._id)
    if (exits) {
      toast('You have already added this product');
    }
    else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  }

    const handleRemoveFromCart = id => {
      console.log(id);
      const remaining = cart.filter(ts => ts._id !== id);
      console.log(remaining);
      setCart(remaining);
    }

    return (
      <div className='home-container'>
        <div className='tshirts-container'>
          {
            tshirts.map(tshirt => <TShirt
              key={tshirt._id}
              tshirt={tshirt}
              handleAddToCart={handleAddToCart}
            ></TShirt>)
          }
        </div>
        <div className="cart-container">
          <Cart
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
          ></Cart>
        </div>
      </div>
    );
  };

  export default Home;