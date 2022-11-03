import { useState } from "react";
import "./ExpenseForm.css"
import { v4 } from "uuid";

const ExpenseForm = (props) => {
     /*
     Approach 1 with three useStates*/
     const [enteredTitle, setEnteredTitle] = useState("");
     const [enteredAmount, setEnteredAmount] = useState("");
     const [enteredDate, setEnteredDate] = useState("");
     const [addNewExpense, setAddNewExpense] = useState(true);


     /*Approach 2 with only one useState 
     const [userInput, setUserInput] = useState({
          enteredTitle: "",
          enteredAmount: "",
          enteredDate:""   
     })*/

     const enteredTitleHandler = (event) => {
          setEnteredTitle(event.target.value); // used in approach 1
          /*
          setUserInput(
               {
                    ...userInput,
                    enteredTitle:event.target.value
               }
          ); // approach 2
          */
     }

     const enteredAmountHandler = (event) => {
          setEnteredAmount(event.target.value); // used in aproach 1
          /*
          setUserInput(
               {
                    ...userInput,
                    enteredAmount:event.target.value
               }
          ); // approach 2
          */
     }

     const enteredDateHandler = (event) => {
          setEnteredDate(event.target.value); // used in approach 1
          /*
          setUserInput(
               {
                    ...userInput,
                    enteredDate:event.target.value
               }
          ); // approach 2
          */
     }

     const submitHandler = (event) => {
          event.preventDefault(); // prevents form tag from reloading

          const newExpenseData = {
               title: enteredTitle,
               amount: enteredAmount,
               date: new Date(enteredDate),
               id: v4()
          };

          setEnteredAmount(''); // sets input element empty
          setEnteredTitle(''); // sets input element empty
          setEnteredDate(''); // sets input element empty

          props.addExpense(newExpenseData);

     }

     const changeAddExpenseHandler = () => {
          setEnteredAmount(''); // sets input element empty
          setEnteredTitle(''); // sets input element empty
          setEnteredDate(''); // sets input element empty
          setAddNewExpense(!addNewExpense);
     }

     const displayFormHandler = () => {
          if (addNewExpense) {
               return (
                    <div>
                         <button onClick={changeAddExpenseHandler}>Add New Expense</button>
                    </div>
               )
          }
          else {
               return (
                    <div>
                         <div className="new-expense__controls">

                              <div className="new-expense__control">
                                   <label>Title</label>
                                   <input
                                        value={enteredTitle}
                                        type="text"
                                        onChange={enteredTitleHandler}
                                   />
                              </div>

                              <div className="new-expense__control">
                                   <label>Amount</label>
                                   <input
                                        value={enteredAmount}
                                        type="number"
                                        onChange={enteredAmountHandler}
                                   />
                              </div>

                              <div className="new-expense__control">
                                   <label>Date</label>
                                   <input
                                        value={enteredDate}
                                        type="date"
                                        min="2019-01-01" max="2022-12-31"
                                        onChange={enteredDateHandler}
                                   />
                              </div>

                         </div>
                         <div className="new-expense__actions">
                              <button type="submit" onClick={changeAddExpenseHandler}>Cancel</button>
                              <button type="submit" onClick={submitHandler}>Add Expense</button>
                         </div>
                    </div>
               )
          }
     }

     return (
          <form onSubmit={submitHandler}>  {/* Here onSubmit is to prevent reloading cause of form tag */}
          {displayFormHandler()}
          </form>
     )
}

export default ExpenseForm;