import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItemV3 from "./ExpenseItemV3";
import Card from "../UI/Card";
import ExpenseFilter from "./NewExpense/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //solucion de Max al assignment 3
  const filteredExpense = props.records.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found</p>;

  if(filteredExpense.length > 0) {
    expensesContent = 
      filteredExpense.map((expense) => (
        <ExpenseItemV3
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
        {/* mi solucion al assignment 3
        {props.records
          .filter((expense) => expense.date.getFullYear().toString() === filteredYear)
          .map((filteredExpense) => (
            <ExpenseItemV3
              key={filteredExpense.id}
              title={filteredExpense.title}
              amount={filteredExpense.amount}
              date={filteredExpense.date}
            />
          ))}        
        */}
      </Card>
    </div>
  );
};

export default Expenses;
