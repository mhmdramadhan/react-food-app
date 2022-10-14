import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  // call data when load first time
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-http-13702-default-rtdb.firebaseio.com/meals.json'
      );
      const responseData = await response.json();

      // convert obeject to array
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
        
      }

      setMeals(loadedMeals);
    };

    // execute fetch meals
    fetchMeals();
  }, []);

  // console.log(meals)

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
