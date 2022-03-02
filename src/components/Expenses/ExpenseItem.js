import "./ExpenseItem.css";

// import React, {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

  // const [title,setTitle] = useState(props.title);

  // let title = props.title;
  // const clickHandler = () => {
  //   console.log("CLicked!!!");
  // };
  // function clickHandler2() {
  //   // title="updated!!!";
  //   setTitle('Updated!');
  //   // console.log("CLicked!!! "+title);
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler2}>{title}</button> */}
    </Card>
  );
}

export default ExpenseItem;
