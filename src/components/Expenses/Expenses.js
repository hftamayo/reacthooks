import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //solucion de Max al assignment 3
  const filteredExpense = props.records.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items = {filteredExpense}/>
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
