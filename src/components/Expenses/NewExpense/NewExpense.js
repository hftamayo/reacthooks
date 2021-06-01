import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import ExpenseFormV2 from './ExpenseFormV2';


const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseFormV2 />
        </div>
    )
};

export default NewExpense;