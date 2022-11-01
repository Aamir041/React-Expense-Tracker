- Like in JS we call functions and pass arguments in React also we can pass props in components aka childs
- We can use a components as many times we want in React
-  When project gets bigger try always dividing it into smaller and smaller componenets
- In **Expenses** project we have created a component called **ExpenseDate** and **Card** 
- In **Card** Component similarity was for rounded corners so it was created it simply a ui componenet and not a does not add to fucntionality

```jsx
const Card = (props) => {
    const classes = "card " + props.className; // space after a class name is important 
    return <div className={classes}>{props.children}</div>
}

```
- Breaking code into smaller components is called **COMPOSITION**

- To use jsx/html inside Component use we pass `props` inside Component function and add `props.children` inside returning jsx code. **children** is keyword in React

- To use className passed outside Component we use `props.className + class_name`. class_name is class name passed with return jsx code.

- Reaseon why when we change a variable in if that variable is in JSX code does not change cause our component return JSX code
- Think of Component as a function which returns JSX code now to update the page after changing variable we need to call that component again
- But a component is called/loaded only once in starting
- To solve this we need to change state of `<App/>`.
- To change state we use a function from React Lib called `useState()`

## useState
- `useState` is super important to understand.
- now `useState` is used to add reactivity to page. reactivity is just updating the content on page after some updation is done
- `useState` returns an array and that array contains **ONLY 2 ELEMENTS** that are a variable and a setterFunction
```javascript
 /*this is array destructuring*/ --> const [variable,setVariable] - useState(); <-- returns array
```
- whenever we want to update that `variable` we use setterFunction(`setVariable`) and not directly update that variable that is BIG NO NO !
- Now we previously talked about components and there reusability whenever we have multiple instances of a same component
- And we have `useState` in those components so there would be many `useState` but if we update only one components. we would be updating state of that component and NOT every component.


