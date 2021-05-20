import React, { Component } from 'react';
import './App.css';
import VerTodo from './VerTodo';
import VerExpenses from './VerExpenses';
import VerExpensesV2 from './VerExpensesV2';


function App(){
  return(
    <div>
      <h2>Primer proyecto con React JS</h2>
      <p>Menu Principal</p>
      <VerExpensesV2 />
    </div>

  );
}
export default App;
