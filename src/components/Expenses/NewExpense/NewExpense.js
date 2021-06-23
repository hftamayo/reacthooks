import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseFormV2 from "./ExpenseFormV2";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    //hiding form
    setShowForm(!showForm);
    setShowButton(!showButton);
  };

  //the form is shown, button is hidden
  const showFormHandler = () => {
    setShowForm(!showForm);
    setShowButton(!showButton);
  };

  return (
    <div className="new-expense">
      {showButton && 
      <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && 
      <ExpenseFormV2 onSaveExpenseData={saveExpenseDataHandler} 
      hideFormHandler={showFormHandler}
      />}
    </div>
  );
};

export default NewExpense;
