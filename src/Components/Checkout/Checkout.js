import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Home from '../Home/Home';
import Modal from '../UI/Modal';
import classes from './Checkout.module.css';

const Checkout = (props) => {
    function refreshPage() {
        window.location.reload(false);
      }
  const navigate=useNavigate();
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
        <button className={classes.button}
        onClick={refreshPage}
         >
          Continue Shopping </button></Modal>
    }
    </>
  )
}

export default Checkout
