import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useNavigate } from 'react-router-dom';
import Modal from '../UI/Modal';
import classes from './Checkout.module.css';

const Captcha = () => {

    const [isVerified, setIsVerified]=useState(false);
    const navigate = useNavigate()
    function reCaptcha (value){
        console.log('captcha value:' , value);
        setIsVerified(true);
    }
  return (
    <Modal>
      <ReCAPTCHA 
      sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
      onChange={reCaptcha} />
      <span className='d-flex'><button disabled={!isVerified} onClick={()=>navigate('/continue')} className={classes.button}>Submit</button></span>
    
    </Modal>
  )
}

export default Captcha
