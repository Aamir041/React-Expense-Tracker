import "./Card.css"

const Card = (props) => {
    const classes = "card " + props.className; // space after a class name is important 
    return <div className={classes}>{props.children}</div>
}

export default Card;