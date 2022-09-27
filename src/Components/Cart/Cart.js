import React from 'react'
import Modal from '../UI/Modal';

import classes from './Cart.module.css';
const Cart = (props) => {
    const cartItems =(<ul className={classes['cart-items']}> {
    [{id:'m1',name:'Fried Rice',amount:'2',price:300}].map((item)=>(
        <li>{item.name}</li>
    ))
}</ul>
    );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>300</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
        
      </div>
    </Modal>
  )
}

export default Cart
