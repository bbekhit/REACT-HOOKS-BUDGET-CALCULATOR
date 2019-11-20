import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({
  expenses,
  handleDeleteItem,
  handleEditItem,
  clearItems
}) => {
  return (
    <div>
      <ul className="list">
        {expenses.map(item => (
          <ExpenseItem
            key={item.id}
            expense={item}
            handleDeleteItem={handleDeleteItem}
            handleEditItem={handleEditItem}
          />
        ))}
      </ul>
      <div className="btn-wrapper">
        {!!expenses.length && (
          <button className="btn" onClick={clearItems}>
            Clear Expenses <MdDelete className="btn-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
