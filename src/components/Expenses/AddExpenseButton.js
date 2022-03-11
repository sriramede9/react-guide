import "./AddExpenseButton.css";

function AddExpenseButton(props) {
  function onClick(event) {
    console.log("clicked");
    props.onToggleExpenseForm(true);
  }

  return <input type="submit" value="Add Expense" onClick={onClick} />;
}

export default AddExpenseButton;
