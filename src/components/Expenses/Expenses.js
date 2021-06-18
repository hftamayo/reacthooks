import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItemV3 from "./ExpenseItemV3";
import Card from "../UI/Card";
import ExpenseFilter from "./NewExpense/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("Expenses.js received this value: ");
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.records
          .filter((expense) => expense.date.getFullYear() === filteredYear)
          .map((filteredExpense) => (
            <ExpenseItemV3
              key={filteredExpense.id}
              title={filteredExpense.title}
              amount={filteredExpense.amount}
              date={filteredExpense.date}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
