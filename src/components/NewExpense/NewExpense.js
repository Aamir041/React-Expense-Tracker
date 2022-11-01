import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
     const addExpense = (expenseToAdd) => {
          props.addExpense(expenseToAdd);
     }
     return(
          <div className="new-expense">
               <ExpenseForm addExpense= {addExpense}/>
          </div>
     )
}

export default NewExpense;