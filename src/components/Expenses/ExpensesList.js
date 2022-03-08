import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Expenses Not Found.</h2>;
  }

  if (props.expenses.length > 0) {
    return (
      <ul className="expenses-list">
        {props.expenses.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
}

export default ExpensesList;
