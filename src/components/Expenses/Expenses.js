import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import React, { useState } from "react";

function Expenses(props) {

  const [expenseFilterSelected, setExpenseFilter] = useState("2022");

  const selectedExpenseFilter = (expenseFilter) => {
    setExpenseFilter(expenseFilter);
  };

  return (
    <div>
      <Card>
        <ExpenseFilter selectedFilteredYear ={expenseFilterSelected} onSelectExpenseFilter={selectedExpenseFilter} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
