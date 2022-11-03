import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {
     if (props.filteredExpenses.length === 0) {
          return <div className="expenses-list__fallback"><h1>NO ITEMS HERE</h1></div>
     }
     return (
          <ul className="expenses-list">
               {
                    props.filteredExpenses.map((ele) => (
                         <ExpenseItem
                              key={ele.id}
                              title={ele.title}
                              amount={ele.amount}
                              date={ele.date}
                         /> // here ele is individual element in array of object named expenses and that object is passes ad prop in <ExpenseIten />
                    ))
               }
          </ul>
     )
}

export default ExpensesList;