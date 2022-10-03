import React from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../UI/Modal';
import classes from './Checkout.module.css';
const ContinueShop = () => {
    const navigate = useNavigate('');
  return (
    <Modal>
       <div>Order is successfully ordered</div>
        <button className={classes.button}
        // onClick={refreshPage}
        onClick={()=> { 
          navigate('/');
        // refreshPage()
    }}
         >
          Continue Shopping </button>
    </Modal>
  )
}

export default ContinueShop
