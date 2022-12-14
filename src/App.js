import { v4} from "uuid"
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expenses/Expense";
import { useState } from "react";

function App() {
  
  const [expenses,setExpenses] = useState([
    {
      id: v4(),
      title: 'Note Book',
      amount: 4.12,
      date: new Date(2020, 7, 14),
    },
    { id: v4(), title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: v4(),
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: v4(),
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: v4(),
      title: 'Vivo V5 (Plus)',
      amount: 300,
      date: new Date(2020, 6, 21),
    },
  ])
  
  const addExpense = (expenseToAdd) => {
    setExpenses(
      (expenses) => {
        return (
          [expenseToAdd,...expenses]
        )
      }
    )
  };

  return (
    <div>
      <NewExpense addExpense={addExpense}/>
      <Expense expenses={expenses} />
    </div>
  );

}

export default App;
