import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Cards";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onFilterChangeValue = (filterValue) => {
    setFilteredYear(filterValue);
  };

  const newItems = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterChange={onFilterChangeValue}
          selectedYear={filteredYear}
        />
        <ExpensesChart expenses={newItems} />
        <ExpensesList newItems={newItems} />
      </Card>
    </div>
  );
}
export default Expenses;
