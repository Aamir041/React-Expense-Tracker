import "./PurchaseDate.css";

const PurchaseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" }); // to get month name

  const year = props.date.getFullYear(); // to get year

  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); // to get date as a number
  return (
    <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default PurchaseDate;
