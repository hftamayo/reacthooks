import React, { useState } from 'react';
import NewExpense from "../components/Expenses/NewExpense/NewExpense";
import Expenses from "../components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Lego Simpsons",
    amount: 100.50,
    date: new Date(2021, 1, 15),
  },
  {
    id: "e2",
    title: "Lego Mindstorms",
    amount: 200.50,
    date: new Date(2021, 2, 15),
  },
  {
    id: "e3",
    title: "Lego Batman",
    amount: 300.50,
    date: new Date(2021, 3, 15),
  },
  {
    id: "e4",
    title: "Lego Star Wars",
    amount: 400.50,
    date: new Date(2021, 4, 15),
  },
];

const VerExpensesV3 = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  /*
  la variable local expense se llena por medio del
  spread operator del arreglo expenses definido en el 
  useState, este ultimo sirve de puente para comunicarse
  con la data almacenada en Dummy_Expenses. DE manera que
  useState sirve para comunicarse entre variables y objetos
  que inclusive pueden pertenecer a distintos componentes.
  */
  const addExpenseHandler = (expense) => {
    /* esta es una forma tipo brute force para 
    gestionar los estados: setExpenses([expense, ...expenses]);
    se sugiere usar la siguiente
    */
   setExpenses((prevExpenses) => {
     return [expense, ...prevExpenses];
   });
  };

  //Ctrtl+Shift+I = autoformatting

  return (
    <div>
      <h1>My expenses</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses records={expenses} />
    </div>
  );
};

export default VerExpensesV3;
