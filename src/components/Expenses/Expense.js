import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter"
import Card from "../UI/Card";
import { useState } from "react";

const Expense = (props) => {
     const [filterYear, setFilterYear] = useState("2020")

     const applyFilterHandler = (appliedFilterYear) => {
          setFilterYear(appliedFilterYear);
     }
     console.log(filterYear);

     return(
          <Card className="expenses">
               <ExpenseFilter 
               selected = {filterYear}
               applyFilterHandler={applyFilterHandler} 
               />
                         {
               props.expenses.map(
                 (ele) => {
                   return <ExpenseItem
                        title = {ele.title}
                        amount = {ele.amount}
                        date = {ele.date}
                        />
                   // here ele is individual element in array of object named expenses and that object is passes ad prop in <ExpenseIten />
                 }
               )
          }
          </Card>
     )
}

export default Expense;