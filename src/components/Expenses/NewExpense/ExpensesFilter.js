import React, { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [year, setYear] = useState('');

  const yearChangeHandler = (event) => {
    /* setYear actualiza, por medio de useState, 
    a year de manera asincrona, useState es un hooks
     */
    setYear(event.target.value);
    console.log("the user is filtering by year");
    console.log("year selected: "+year);
  }

    return (
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select onSelect={yearChangeHandler}>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
            </select>
          </div>
        </div>
      );
}

export default ExpensesFilter;