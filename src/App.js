
import { Fragment, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './Store/CartProvider';

function App() {
  const [cartShow,setCartShow]=useState(false);

  const showCartHandler =()=>{
    setCartShow(true);
  }
  const hideCartHandler =()=>{
    setCartShow(false);
  }
  return (
    <CartProvider>
{cartShow && <Cart onHideCart={hideCartHandler}/>}
      <div className='main-background'>
      
     <Header onShowCart={showCartHandler}/>
     <main>
      <Meals/>
     </main>
     </div>
    </CartProvider>
  );
}

export default App;
