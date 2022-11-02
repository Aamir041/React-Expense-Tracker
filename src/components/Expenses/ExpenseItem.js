import "./ExpenseItem.css";
import PurchaseDate from "./PurchaseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const date = props.date;

  const title = props.title;

  const amount = props.amount;

  return (
    <Card className="expense-item">
      {/* all about date is in <PurchaseDate /> */}
      <PurchaseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">$ {amount}</div>
    </Card>
  );
};

export default ExpenseItem;
