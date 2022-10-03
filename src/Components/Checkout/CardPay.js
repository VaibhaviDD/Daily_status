import React, { useState } from 'react'
import ReactCreditCard from 'react-credit-cards'
import { useNavigate } from 'react-router-dom';
import Modal from '../UI/Modal'
import classes from './Checkout.module.css';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css';
// import 'react-credit-cards/es/styles-compiles.css';
const CardPay = () => {
  const navigate = useNavigate("");
  const [number ,setNumber] = useState('');
  const [name,setName] = useState('');
  const [expiry,setExpiry] = useState('');
  const [cvc , setCvc] = useState('');
  const [focus,setFocus] = useState('');
  return (
   <Modal>
    <div>
    <ReactCreditCard 
    number={number}
    name={name}
    xpiry={expiry}
    cvc={cvc}
    focused={focus}
    />
    {/* <Cards
     number={number}
     name={name}
     xpiry={expiry}
     cvc={cvc}
     focused={focus} /> */}
    </div>
      <form>
        <div className='row'>
        <div>
          <label htmlFor='number'>Card Number</label>
          <span className='col-md-2'>
               <input
                type='tel'
                value={number} 
                placeholder='Card Number'
                onChange={e=>setNumber(e.target.value)} 
                onFocus={e=>setFocus(e.target.name)} 
                />
                </span>
        </div>
        <div >  
                <label htmlFor='name'>Card Holder's Name </label>  
                <span className='col-md-2'>
                <input
                type='text'
                value={name} 
                placeholder='Card Holder Name'
                onChange={e=>setName(e.target.value)} 
                onFocus={e=>setFocus(e.target.name)} 
                />
                </span>
        </div> 
        <div >
                 <label htmlFor='expiry'>Expiry Date </label>   
                 <span className='col-md-2'>
                 <input
                type='tel'
                value={expiry} 
                placeholder='MM/YY'
                onChange={e=>setExpiry(e.target.value)} 
                onFocus={e=>setFocus(e.target.name)} 
                />
                </span>
        </div> 
        <div >
          <label htmlFor='cvc' >CVC</label>    
          <span className='col-md-2'>
          <input
                type='tel'
                value={cvc} 
                placeholder='CVC/CCV'
                onChange={e=>setCvc(e.target.value)} 
                onFocus={e=>setFocus(e.target.name)} 
                />
          </span>
                
        </div>
        <div className='col-md-10 '>
        <button className={classes.button} onClick={()=>navigate('/continue')} >Submit</button>
        </div>        
</div>
      </form>
  
   </Modal>
  )
}

export default CardPay
