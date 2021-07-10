import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [val, setVal] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const clickHandler = () => {
    setVal(true);
    setButtonVisible(false);
  };
  const clickHandlerAgain = () => {
    setVal(false);
    setButtonVisible(true);
  };

  return (
    <div className="new-expense">
      {buttonVisible && (
        <button className="" onClick={clickHandler}>
          Add Expense
        </button>
      )}
      {val && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          changeValue={clickHandlerAgain}
        />
      )}
    </div>
  );
};

export default NewExpense;
