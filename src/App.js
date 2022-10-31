import "./App.css";
import "./Expenses.css"
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card"

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Vivo V5 (Plus)',
      amount: 300,
      date: new Date(2020, 6, 21),
    },
  ];

  return (
    <Card className="expenses">
      {
        expenses.map(
          (ele) => {
            return <ExpenseItem expense={ele} />
            // here ele is individual element in array of object named expenses and that object is passes ad prop in <ExpenseIten />
          }
        )
      }
    </Card>
  );

}

export default App;
