import React from 'react'
import classes from './CartItem.module.css';
import * as AiIcons from 'react-icons/ai';
const CartItem = (props) => {
    const price = `Rs.${props.price}`;
  return (
   <li className={classes['cart-item']}>
    <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}><AiIcons.AiOutlineClose/> {props.amount}</span>
        </div>
        
    </div>
    <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
    </div>
   </li>
  )
}

export default CartItem
