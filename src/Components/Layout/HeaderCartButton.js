import React, { useContext } from 'react'
import * as AiIcons from 'react-icons/ai';
import CartContext from '../../Store/CartContext';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
const cartCtx=  useContext(CartContext);
const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
  return curNumber + item.amount;
},0); 
return (
    <div >
    <button className={classes.button} onClick={props.onClick}>
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
