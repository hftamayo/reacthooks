import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseFormV2 from './ExpenseFormV2';


const NewExpense = (props) => {

    const saveExpenseDataHandler =
        (enteredExpenseData) => {
            const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString()
            };
            props.onAddExpense(expenseData);
        };


    return (
        <div className="new-expense">
            <ExpenseFormV2
                onSaveExpenseData={saveExpenseDataHandler} 
            />
        </div>
    )
};

export default NewExpense;