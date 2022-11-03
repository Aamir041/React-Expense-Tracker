import "./Expenses.css"
import ExpenseFilter from "./ExpenseFilter"
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expense = (props) => {
     const [filterYear, setFilterYear] = useState("2020");

     const applyFilterHandler = (appliedFilterYear) => {
          setFilterYear(appliedFilterYear);
          console.log(filterYear)
     }

     const filteredExpenses = props.expenses.filter(expense => {
          // ele is added in this array if its date matches with filter year
          return expense.date.getFullYear().toString() === filterYear;
        });

     return (
          <Card className="expenses">
               <ExpenseFilter
                    selected={filterYear}
                    applyFilterHandler={applyFilterHandler}
               />
               { 
               // ExpensesList returns contetn if filteredExpenses length is > 0 or show there is nothing in filtered array 
               <ExpensesList filteredExpenses={filteredExpenses}/>
               }
          </Card>
     )
}

export default Expense;