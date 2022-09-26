import React from 'react'
import * as AiIcons from 'react-icons/ai';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
        <span>

<AiIcons.AiOutlineShoppingCart/>
       </span>
        <span> Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton
