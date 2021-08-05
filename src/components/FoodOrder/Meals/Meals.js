import React, { Fragment } from 'react';
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Cart from '../Cart/Cart';

const Meals = () => {
    return(
        <Fragment>
            <Cart />
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    );
}

export default Meals;