import React, { useContext, useEffect, useState } from 'react'
import * as AiIcons from 'react-icons/ai';
import CartContext from '../../Store/CartContext';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnPop, setBtnPop] = useState(false);
const cartCtx=  useContext(CartContext);

const { items } = cartCtx; // destructure this. pull items from the array

const numberOfCartItems = items.reduce((curNumber,item)=>{
  return curNumber + item.amount;
},0); 
const btnClasses =`${classes.button} ${btnPop? classes.bump : ''}`
useEffect(()=>{
  if(items.length === 0){
    return;
  }
setBtnPop(true);;
const timer= setTimeout(()=>{
setBtnPop(false)
},300);

return ()=>{
clearTimeout(timer);
};
},[items])

return (
    <div >
    <button className={btnClasses} onClick={props.onClick}>
        <span>
<AiIcons.AiOutlineShoppingCart />
       </span>
        <span> Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
    </div>
  )
}

export default HeaderCartButton
