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

- In One useState approach the problem is that we copy previous state and this will cause proble if a setter function is called multiple time 

**Previous Code for one state approach**
This approach does not follow pure function principle
```javascript
const enteredTitleHandler = (event) => {
    setUserInput(
        {
            ...userInput,
            enteredTitle:event.target.value
        }
     );
}
```

**Instead we should use this approach**
This approach ensures prevState in unaffected and this also follow pure function principle
```javascript
const enteredTitleHandler = (event) => {
    setUserInput( (prevState) => {
        return (
            {
                ...prevState,
                enteredTitle:event.target.value
            }
        )
    }
     );
}
```
- Always use `onSubmit` inside form tag for button tag because after submitting in`<form>` tag page reloads 

- If you want to prevent reloading of `<form>` tag after submit button is clicked then use preventDefault method on event i.e. `onSubmit`

## How to send data from child to parent

If looked closely we return JSX code and not HTML in React components, and every we use is component
like `input` , `button`, etc and we can add listenrs to them like `onClick`, `onChange`, etc these listners are nothing but props 

In react components closly resemble to function and props as arguments therefore to we can set prop in component as function and pass our data from child to parent using that function that is declared in parent and change the variable present in parent NOTE that variable can be any thing.

In this project we send data from <`ExpensesForm>` to `<NewExpenses>` which then send to `<App>` where we update the array of object that contains our data.

In this project `<NewExpense>` and `<Expense>` are siblings i.e. they are on same lvl of tree where root is `<App>` and **IN REACT WE CAN NOT SENT DATA FROM SIBLING TO SIBLING** 

In order to send data to sibling we send that to parent first and that data parent sends to child components that needs this thing is called **Lifting the State Up** 


