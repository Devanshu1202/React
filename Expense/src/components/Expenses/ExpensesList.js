import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>;

  if (props.newItems.length === 0) {
    return <h3 className="expenses-list__fallback">Found no expenses</h3>;
  }

  return (
    <ul className="expense-list">
      {props.newItems.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
