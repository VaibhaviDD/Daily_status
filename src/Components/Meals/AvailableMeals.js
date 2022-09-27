import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Fried Rice",
    price: 150,
  },
  {
    id: "m2",
    name: "Noodles",
    price: 160,
  },
  {
    id: "m3",
    name: "Pav Bhaji",
    price: 100,
  },
  {
    id: "m4",
    name: "Misal",
    price: 150,
  },
];
const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem id={meal.id} 
                      key={meal.id} 
                      name={meal.name} 
                      price={meal.price} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
