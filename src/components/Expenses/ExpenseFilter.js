import "./ExpenseFilter.css"
const ExpenseFilter = (props) => {
     const filterYearHandler = (event) => {
          props.applyFilterHandler(event.target.value)
     }
     return (
     <div className="expenses-filter">
          <div className="expenses-filter__control">
               <label>Expense Filter</label>
               <select value={props.selected} onChange={filterYearHandler} name="year">
                    <option value="2019" >2019</option>
                    <option value="2020" >2020</option>
                    <option value="2021" >2021</option>
                    <option value="2022" >2022</option>
               </select>
          </div>
     </div>)
}

export default ExpenseFilter;