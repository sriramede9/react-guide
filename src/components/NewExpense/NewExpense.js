import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import AddExpenseButton from "../Expenses/AddExpenseButton";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    // console.log(newExpenseData);
    props.addExpense(newExpenseData);
    // return newExpenseData;
  };

  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // const onClick = () => {
  //   console.log("add expense button clicked");
  //   setShowExpenseForm(true);
  //   setShowButton(!showButton);
  // };

  // const toggleExpenseForm = (expenseFormStatus) => {
  //   console.log("inside toggle expense form", expenseFormStatus);

  //   setShowExpenseForm(!showExpenseForm);
  //   setShowButton(!showButton);
  //   console.log(expenseFormStatus);
  // };
  const toggleExpenseForm = (expenseFormStatus) => {
    console.log("inside toggle expense form", expenseFormStatus);

    setShowExpenseForm(expenseFormStatus);
    setShowButton(!showButton);
    // console.log(expenseFormStatus);
  };

  let addExpenseButton = (
    // <input type="submit" value="Add Expense" onClick={onClick} />
    <AddExpenseButton
      // onClick={onClick}
      onToggleExpenseForm={toggleExpenseForm}
    ></AddExpenseButton>
  );

  let expenseFormHandler = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={addExpenseButton}
    ></ExpenseForm>
  );

  return (
    <div className="new-expense">
      {/* {showExpenseForm ? expenseFormHandler : null} */}

      {/* <button onClick={expenseFormHandler} >Show Expense Form</button> */}
      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm> */}
      {showExpenseForm && expenseFormHandler}
      {!showButton && addExpenseButton}
    </div>
  );
};

export default NewExpense;
