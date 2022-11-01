import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expense = (props) => {
     return(
          <Card className="expenses">
                         {
               props.expenses.map(
                 (ele) => {
                   return <ExpenseItem expense={ele} />
                   // here ele is individual element in array of object named expenses and that object is passes ad prop in <ExpenseIten />
                 }
               )
          }
          </Card>
     )
}

export default Expense;