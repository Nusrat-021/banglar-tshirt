import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const tshirts = useLoaderData();
  console.log(tshirts);
  return (
    <div>
    <h2>Total T-shirt: {tshirts.length}</h2>
    </div>
  );
};

export default Home;