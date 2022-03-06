import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import React, { useState } from "react";

function Expenses(props) {
  const [expenseFilterSelected, setExpenseFilter] = useState("2022");

  const selectedExpenseFilter = (expenseFilter) => {
    setExpenseFilter(expenseFilter);
  };

  let expenseList = props.expenses.map((expense, index) => {
    console.log(expense);
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  return (
    <div>
      <Card>
        <ExpenseFilter
          selectedFilteredYear={expenseFilterSelected}
          onSelectExpenseFilter={selectedExpenseFilter}
        />
  
          {/* title={expense.title} amount={expense.amount} date={expense.date} */}
          {expenseList}
     
      </Card>
    </div>
  );
}

export default Expenses;
