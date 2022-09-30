import React from 'react'
import { useState } from 'react';
import CartProvider from '../../Store/CartProvider';
import Cart from "../Cart/Cart"
import Header from '../Layout/Header';
import Meals from '../Meals/Meals';

const Home = () => {
    const [cartShow,setCartShow]=useState(false);

  const showCartHandler =()=>{
    setCartShow(true);
  }
  const hideCartHandler =()=>{
    setCartShow(false);
  }
  const checkoutHandler =() => {
    alert("HI.....");
  }
  return (
    <CartProvider>
    {cartShow && <Cart onHideCart={hideCartHandler} onCheckout={checkoutHandler}/>}
          <div className='main-background'>
          
         <Header onShowCart={showCartHandler}/>
         <main>
          <Meals/>
         </main>
         </div>
        </CartProvider>
  )
}

export default Home
