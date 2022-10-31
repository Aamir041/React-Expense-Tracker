- Like in JS we call functions and pass arguments in React also we can pass props in components aka childs
- We can use a components as many times we want in React
-  When project gets bigger try always dividing it into smaller and smaller componenets
- In **Expenses** project we have created a component called **ExpenseDate** and **Card** 
- In **Card** Component similarity was for rounded corners

```jsx
const Card = (props) => {
    const classes = "card " + props.className; // space after a class name is important 
    return <div className={classes}>{props.children}</div>
}

```
- Breaking code into smaller components is called **COMPOSITION**

- To use jsx/html inside Component use we pass `props` inside Component function and add `props.children` inside returning jsx code. **children** is keyword in React

- To use className passed outside Component we use `props.className` + class_name. class_name is class name passed with return jsx code.

