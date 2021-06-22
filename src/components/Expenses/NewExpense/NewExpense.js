import React from 'react';
import './NewExpense.css';
import ExpenseFormV2 from './ExpenseFormV2';


const NewExpense = (props) => {
    const statusForm = props.showForm;

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
                onSaveExpenseData={saveExpenseDataHandler} currentStatusForm={statusForm}/>
        </div>
    )
};

export default NewExpense;