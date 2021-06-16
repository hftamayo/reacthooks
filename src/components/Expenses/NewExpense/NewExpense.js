import React from 'react';
import './NewExpense.css';
import ExpenseFormV2 from './ExpenseFormV2';


const NewExpense = (props) => {
    //less58: communication between parents-children
    /* expenseData es gestionado en
    onSubmitHandler del componente
    ExpenseFormV2 */
    const saveExpenseDataHandler =
        (enteredExpenseData) => {
            const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString()
            };
            //console.log(expenseData);
            props.onAddExpense(expenseData);
        };
    return (
        <div className="new-expense">
            <ExpenseFormV2
                onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
};

export default NewExpense;