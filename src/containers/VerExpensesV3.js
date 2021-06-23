import React, { useState } from "react";
import NewExpense from "../components/Expenses/NewExpense/NewExpense";
import Expenses from "../components/Expenses/Expenses";
import "../components/Expenses/NewExpense/ExpenseForm.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Lego Simpsons",
    amount: 100.5,
    date: new Date(2021, 1, 15),
  },
  {
    id: "e2",
    title: "Lego Mindstorms",
    amount: 200.5,
    date: new Date(2021, 2, 15),
  },
  {
    id: "e3",
    title: "Lego Batman",
    amount: 300.5,
    date: new Date(2021, 3, 15),
  },
  {
    id: "e4",
    title: "Lego Star Wars",
    amount: 400.5,
    date: new Date(2021, 4, 15),
  },
];

const VerExpensesV3 = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h1>My expenses</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="new-expense__actions"></div>
      <Expenses records={expenses} />
    </div>
  );
};

export default VerExpensesV3;
