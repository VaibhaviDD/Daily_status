import React, { useState } from 'react'
import Modal from '../UI/Modal';
import classes from './Checkout.module.css';

const Checkout = (props) => {
    const [isConfirmed,setIsConfirmed] = useState(false);
 const confirmOrderHandler =()=>{
 setIsConfirmed(!isConfirmed);
 }
  return (
    <>
   {!isConfirmed &&
    <Modal onHideCart={props.onHideCart} >
      <div>
        Payment Method:
        <ul>
            <li onClick={()=>alert('Hello....')}>COD</li>
            <li onClick={()=>alert('Card Payment')}>Card Payment</li>
        </ul>
      </div>
      <button className={classes.button}  onClick={confirmOrderHandler}>Confirm Order</button>
    </Modal>
}
{
      isConfirmed && <Modal>
        <div>Order is successfully ordered</div>
        <button className={classes.button}>Continue Shopping</button></Modal>
    }
    </>
  )
}

export default Checkout
