import React from 'react'
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = (props) => {
  return (
    <div>
      <form className={classes.form}>
        <Input label="Amount" input={{
            id:'amount_' + props.id,
            type:'number',
            min:'1',
            max:'5',
            defaultValue:'1'
        }}/>
        <button>+ Add</button>
      </form>
    </div>
  )
}

export default MealItemForm
