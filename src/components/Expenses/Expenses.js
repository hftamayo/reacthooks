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
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <div>
          <ExpenseItemV3
            title={props.records[0].title}
            amount={props.records[0].amount}
            date={props.records[0].date}
          ></ExpenseItemV3>
        </div>
        <div>
          <ExpenseItemV3
            title={props.records[1].title}
            amount={props.records[1].amount}
            date={props.records[1].date}
          ></ExpenseItemV3>
        </div>
        <div>
          <ExpenseItemV3
            title={props.records[2].title}
            amount={props.records[2].amount}
            date={props.records[2].date}
          ></ExpenseItemV3>
        </div>
        <div>
          <ExpenseItemV3
            title={props.records[3].title}
            amount={props.records[3].amount}
            date={props.records[3].date}
          ></ExpenseItemV3>
        </div>
      </Card>
    </div>
  );
};

export default Expenses;
