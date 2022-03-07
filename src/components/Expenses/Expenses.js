import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import React, { useState } from "react";

function Expenses(props) {
  const [expenseFilterSelected, setExpenseFilter] = useState("2022");

  const selectedExpenseFilter = (expenseFilter) => {
    setExpenseFilter(expenseFilter);
  };

  let filteredExpenseList = props.expenses.filter(
    (expense) =>
      new Date(expense.date).getFullYear().toString() === expenseFilterSelected
  );

  let expensesContent = <p>No expenses Found.</p>;

  if (filteredExpenseList.length > 0) {
    expensesContent = filteredExpenseList.map((expense, index) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card>
        <ExpenseFilter
          selectedFilteredYear={expenseFilterSelected}
          onSelectExpenseFilter={selectedExpenseFilter}
        />
        {/* {filteredExpenseList.length === 0 && <p>No expenses Found.</p>}
        {filteredExpenseList.length > 0 &&
          filteredExpenseList.map((expense, index) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
          {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
