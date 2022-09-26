import React from 'react'
import classes from './AvailableMeals.module.css'
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Fried Rice',
      price: 150,
    },
    {
      id: 'm2',
      name: 'Noodles',
      price: 160,
    },
    {
      id: 'm3',
      name: 'Pav Bhaji',
      price: 100,
    },
    {
      id: 'm4',
      name: 'Misal',
      price: 150,
    },
  ];
const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul>
        {
          DUMMY_MEALS.map(meal=> 
          <li>
            {meal.name}
          </li>
           )
        }
      </ul>
    </section>
  )
}

export default AvailableMeals
