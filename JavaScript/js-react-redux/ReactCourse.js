/* ********************************************* */
/* Creating the App */
/* ********************************************* */

// -->      import UserContext from "./src/components/userContext";

// npx create-react-app hello-world
// cd hello-world
// npm start

// or :

// npm install create-react-app -g
// create-react-app hello-world
// --> this method installs a package, so maybe not necessary





/* ********************************************* */
/* Application structure */
/* ********************************************* */

// root folder

// package.json
// here we have all the packages, dependencies etc. 
// package-lock.json ensures consistant installation of the dependancies
// gitignore and README.md files


// node_modules folder

// contains all the installed packages
// generated when app created


// public folder

// contains manifest.json that's concerned with web apps (out of scope)
// the icon
//an index.html file, it is that one that is served on the browser
// we are never going to use it, although maybe the head of the html
// all the UI is in a div tag with the ID root


// src folder

// the index.js is where everything happens : the root  element renders the <app> element:
// ReactDOM.render(<App />, document.getElementById('root));
// index.css renders all the styles of the body
// logo.svg is the method for the logo turning

// this calls the App.js, which renders all the html seen in the browser
// also the App.css that has all the styles
// and App.test.js for unit tests

// serviceWorker.js concerns progressive webapps and can be igored for now too


// --> so to sum up: 

// index.html is served on the browser, it contains the root DOM node
// then it serves index.js, here the ReactDom renders the App component onto the root DOM node
// the App.js component gives the html that is ultimately displayed on the browser





/* ********************************************* */
/* React Components */
/* ********************************************* */

// A component represents a part of the user interface
// A root component (App.js) contains all the components of the application

// How is it coded ?

// It is the code placed in a js file (or a jsx file), the code depends on the component type
// In react we have two component types

// --> !!! stateless !!! functional component : JavaScript functions, for example:
/*
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }
*/

// --> !!! stateful !!! class componenets : class extending component class, for example:
/*
    class Welcome extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }
*/

// !!!! they must render method rendering html

// so to sum up: 
// --> Components describe a part of the user interface
// --> they are re-usable and can be nested inside other components
// --> they are two types of them: 'Stateless functional components' and 'Stateful class components'





/* ********************************************* */
/* Stateless functional components */
/* ********************************************* */

// They are JavaScript functions
// They can optionally receive an object of properties (props) and return HTML (JSX) which describes the UI
// They must be in another js file in the components folder within the src folder

// First we must import react into the new component js file : 
//      --> import React from 'react'

// Then we write our function : 
//      --> const Greet = () => <h1>Hello Emile</h1>

// Then we export the function : 
//      --> export default Greet

// And we must import it as well in our file that will be needing that component: 
//      --> import Greet from './components/Greet'

// We can also export a named function : 
//      --> export const Greet = () => <h1>Hello Emile</h1>
// In that case we must inport it as such : 
//      --> import  { Greet } from './components/Greet'





/* ********************************************* */
/* Stateful class components */
/* ********************************************* */

// They are simply JS classes, they can also receive props as an option and render HTML

// They can also maintain a private internal state
// --> it can maintain some information that are private to that component and use that information to describe the UI

// To create a class we create a nex component js file the same way

// Then we import react AND the Component class from react
//      --> import React, { Component } from 'react'

// Then we write our class, we musn't forget to extend Component since we are doing an extension on the component
/*
    class Welcome extends Component {
        render(){
            return <h1>Class Component</h1>
        }
    }
*/

// Finally we export it the same way as a function component
//      --> export default Welcome

// And we can add it in whatever app as an HTML tag as long as we don't forget to import it :
//      --> import Welcome from './components/Welcome'





/* ********************************************* */
/* Difference between these two components */
/* ********************************************* */


// Functional components : 

// They are simple functions receiving props and returning a declaration
// We should always use this type of function if we have the choice

// --> Contrary to class components we don't have to use 'this' keyword
// --> We are forced to find a solution whithout having to use 'state'
// --> They are without any complicated logic and are mainly responsible for the UI
// We call them 'stateless', 'dumb' or 'presentational' components


// Class components : 

// They are a bit more feature rich
// --> They can maintain their own private data or 'state'
// --> They can contain complicated UI logic
// --> They provide 'lifecycle hooks'
// We call them 'stateful', 'smart' or 'container' components


// Update with hooks ! 

// Now functional components are not stateless anymore
// Furhermore they can also have lifecycle hooks and event binding 





/* ********************************************* */
/* JSX */
/* ********************************************* */


// This is not html that is returned, it's JSX!
/*
    function App() {
        return (
        <div className="App">
            <Greet />
            <Welcome />
        </div>
        );
    }
*/


// What is JSX : 

// JavaScript XML is an extension to the JavaScript language syntax
// They are used to write XML-like code for elements and components
// JSX tags have also a tag name, attributes and children, just like XML (eXtensible Markup Language)


// Why JSX :

// It is not an obligation, but it makes it simpler
// It is the same as pure JavaScript
// See the example in the hello-world app

// Each JSX element is syntaxic sugar for more complicated expressions
// That is why we need to import React every time

// JSX differences

// --> class : className
// --> for : htmlFor
// --> camelCase property naming convention : onclick : onClick, tabindex: tabIndex





/* ********************************************* */
/* Props */
/* ********************************************* */

// Components are reusable
// If we need to reuse the Greet component
// Now we need to greet whoever is connected with dynamic properties : props

// To specify props we specify them as attributes (see name attribute)
// Once we added the attribute to a component we go to that component file
// We enter the props parameter to the function


// First props to a functional component

// Props is an object that contains the attributes and their values that have been passed by the parent component
// So in our function we need to use props.name in {}

// So now we see the importance and the reusability of components props
// Furthermore we can have more props (see heroName) with very little code

// So for the properties we will pass for sure, we can use attributes (name, heroName)
// If we have no clue what will be passed as props or if you have to pass dynamic html content it can be a children props


// Now to use props in a class component (using the welcome component)

// Props can be used in classes using this.props.name or this.props.heroName inside {}
// Props are reunited together as objects
// like that we can render dynamic content

// !!!! Props are immutable : they cannot be changed !!!!

// How do we maitain components data that may change overtime ...





/* ********************************************* */
/* State */
/* ********************************************* */


// Component state

// As we have seen for now, every react component returns JSX that describes the UI
// Furthermore, we can influence what is rendered on the screen using props
// There is a second way to influence what is rendered on the screen : the state of the components


// Difference between state and props:

// Props :
// --> Get passed to the components
// --> They are function parameters
// --> They are immutable since the parents usually passes down the props to the child component
// The parents owns the props, they cannot be changed by the children
// --> Props are accessed via props (functional components) or this.props (class components)

// State :
// --> They are managed within the components
// --> Variables are declared in the function body
// --> The component has full control to change the state
// --> State can be accessed via useState Hook (functional component) or this.state (class component)


// Example how state can be used in class components

// We will put a text "Welcome visitor" with a button underneath that says subsribe
// When a user clicks it, the text above changes to "Thank you for subscribing"
// We can not do it with a prop since when a prop is changed, it can never change back (immutable)

// First we need to create a state object, and that is usually done inside the class's constructor
// Inside the constructor, we call the super() method, it is required because we extend react's component class
// Indeed a call has to be made to the base class constructor
// Then we call this.state = {an empty object for now} (state is a reserved keyword for react)
// In the object we initialise a property named 'message' with a value of "Welcome visitor"
/*
    class Message extends Component {
        constructor(){
            super()
            this.state = {
                message: 'Welcome visitor'
            }
        }
    }
*/

// Now we have to bind this state value in the render function
// Now we create a button element, add it to the h1 tag and enclose it in a parent div inside the return ()
/*
    render(){
        return <h1>
            {this.state.message}
        </h1>
    }
*/

// Now we need listen to the click event on this button
// We add an onClick attribute to the button with a handler in {} with an arrow function returning this.changeMessage
/*
    return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
    )
*/

// Now we have to define this new method, between the constructor and the render
// Inside we call the setState method calling an object with the new state
/*
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
*/

// This.setState({}) method allow us to alter the state of a class component
/*
    class Message extends Component {
        constructor(){
            super()
            this.state = {
                message: 'Welcome visitor'
            }
        }
        changeMessage(){
            this.setState({
                message: 'Thank you for subscribing'
            })
        }
        render(){
            return (
                <div>
                    <h1>{this.state.message}</h1>
                    <button onClick={() => this.changeMessage()}>Subscribe</button>
                </div>
            )
        }
    }
*/

// --> So a state is an object that is privatly maintained inside a component
// --> It can influence what is rendered in the browser
// --> State can be changed within the component





/* ********************************************* */
/* setState */
/* ********************************************* */

// Using the VS Code ES7 React/Redux/React-Native/JS snippets

// We will put a counter with a button that increments the counter onClick

// Once the new class done and the event listener method created for the onClick attribute
// We will try to not use the setState method in the increment() just to see what happens
/*
    class Counter extends Component {
        constructor(props){
            super(props)
            this.state = {
                count: 0
            }
        }

        increment(){
            this.state.count = this.state.count + 1
            console.log(this.state.count)
        }

        render(){
            return(
                <div>
                    <div>Count - {this.state.count}</div>
                    <button onClick={() => this.increment()}>Increment</button>
                </div>
            )
        }
    }
*/
// When we do that, in the console, the counter is update, but not on the UI !
// The the UI is not rendering whenever the state is updated, that is why we must never modify the state
// We must use setState, this.state only in the constructor
/*
    increment(){
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }
*/
// --> !!!!! Never use this.state in a method other than the constructor !!!!!

// Although we can see that the console value is 0 when the UI is 1
// --> calls to setState are asynchronous
// So here, console.log() is actually called before the setState()
// In that case we can set a callback function as a second parameter to the setState({}) method
/*
    increment(){
        this.setState({
            count: this.state.count + 1
        }, () => {console.log('Callback value : ', this.state.count)})
        console.log(this.state.count)
    }
*/
// !!!!! like that we have both results logged in so always use the callback function !!!!!


// If we change the method and make it more complicated
// We will have a second method to our class, incrementFive() that will increment by 5, by calling increment() five times
/*
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
*/
// This will call the increment() method 5 times, but will only increment by one the counter !
// This is because React may group multiple setState calls into a single update for better performance
// So all the five setState calls are done in one go and the updated value is not carried on between the different calls

// So here instead of passing in an object in the setState method, we need to pass a function
// That function will have as a parameter, the prevState that we will use to update the setState
/*
    increment(){
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
*/
// !!!! We we have to update the state on the previous state value, make sure to pass a function as an argument and not the usual object

// The second parameter of the setState function can be a props parameter
/*
    increment(){
        this.setState((prevState, props) => ({
            count: prevState.count + props.addValue
        }))
        console.log(this.state.count)
    }
*/





/* ********************************************* */
/* Destructuring props and state in React */
/* ********************************************* */


// Destructuring is an ES6 feature that makes possible to unpack values from arrays or properties form objects into distinct variables
// In react, destructuring props and state improves code readability, and we can find that syntax in most of the online material


// First functionnal components (using the greet functional component) : 
// They are two ways to destructure props in a functional component

// The first way is to destructure it in the function parameter itself, so instead of
/*
    const Greet = (props) => {
        console.log(props)
        return (
            <div>
                <h1>Hello {props.name} a.k.a {props.heroName}</h1>
                {props.children}
            </div>
        )
    }
*/
// We pass a function :
/*
    const Greet = ({name, heroName}) => {
        console.log(props)
        return (
            <div>
                <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            </div>
        )
    }
*/
// We are extracting name and heroname from the props object, so now we have: 
/*
    const Greet = ({name, heroName}) => {
        console.log(props)
        return (
            <div>
                <h1>Hello {name} a.k.a {heroName}</h1>
            </div>
        )
    }
*/

// The second way is to destructure it in the function body
/*
    const Greet = (props) => {
        const {name, heroName} = props
        return (
            <div>
                <h1>Hello {name} a.k.a {heroName}</h1>
            </div>
        )
    }
*/


// Now to destructurate classes we will use the Welcome class component

// In the class components we tend to destructurate props and state in the render method
// Even if you have plenty of props, you can choose which ones you want to destructure when you define your const variable
/*
    class Welcome extends Component {
        render(){
            const {name, heroName} = this.props
            return (
                <h1>
                    Welcome {name} a.k.a {heroName}
                </h1>
            )
        }
    }
*/

// On similar line we can also have a number of state properties, we can destructure them in a single array
//      --> const {state1, state2} = this.state
// Simply by adding that in the render method

// We will use this syntax as much as possible !





/* ********************************************* */
/* Event handling */
/* ********************************************* */


// How to handle events in react (using click events)


// First we will use an event handler inside a functional component (FunctionClick)

// Once created, we import it in the app, now when a user clicks on the button, a click event is fired
// --> Now we have tu capture that event and execute some basic code

// Usually, events are named using CamelCase (onClick not onclick like in vanilla js)
//      --> <button onClick={clickHandler}>Click</button>
//      --> instead of <button onclick="clickHandler()"">Click</button>

// Now we can define the clickHandler() function, we can as well define it inside the FuctionClick() function 
// !!!!! No parenthesis to the function call for the onClick event !!!!!
// So eventHandler is a function and not a function() call

// !!!!! In classes components, the state can be changed infinitely when we do that !!!!!


// Now we will use an event handler inside a class component (ClassClick)

// First we add a new class component, eport it and import it in app.js, while adding it in a JSX tag
// Then we do the same way as for functional components, we add an attribute to the tag
// !!!!! Since we are in a class, we must use a this keyword !!!!!
// !!!!! Make sure you don't add parenthesis to the handler !!!!!


// For the moment it is easy because the handlers don't do much, but usually, the event handlers modify the state of the components
// It is especially confusing while using setState, which is why we use "binding"





/* ********************************************* */
/* Binding event handlers */
/* ********************************************* */


// In React, the reason why we bind event handlers is purely because of the way 'this' works in js (check EventBind.js)

// So once our class component created, we add a state
/*
    class EventBind extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                message: 'Hello'
            }
        }
        
        render() {
            return (
                <div>
                    <div>{this.state.message}</div>
                    <button>Click</button>
                </div>
            )
        }
    }
*/

// No we want to change the message to goodbye when the user clicks on the button, so we want to change the state
// So for that we just add the onClick attribute
/*
    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
*/
// But an error is thrown while building for the browser : Cannot read property 'setState' of undefined
// If we simply log the 'this' keyword, the console returns 'undefined'
// So 'this' is undefined in event handlers, and that is why event handlers binding is necessary


// There is multiple ways to bind the event handlers

// Approach one : binding in the render method

// The first way is to use the 'bind' keyword in the handler of the render method
// --> <button onClick={this.clickHandler.bind(this)}>Click</button>
// Now it works, hello becomes goodbye on click and the console logs this object, which is the event bind object
// Although this works, every update to the state will cause te component to re-render
// It will in turn generate a brand new eventHandler on every render
// Although not severe in small apps, this could be troublesome in large apps (especially if there is nested components)


// Approach two : using arrow functions in the render method

// --> <button onClick={() => this.clickHandler()}>Click</button>
// We use parenthesis here because we are calling the eventHandler and returning that value
// This approach works as well, as expected
// It has also some performance consequences like the first approach


// Approach three : the most popular, and the official react one

// Here we bind the eventHandler in the constructor instead of in the render method
/*
class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
             message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
*/


// Approach four : using an arrow function as a class property
/*
    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
    }
    render() {
    return (
        <div>
            <div>{this.state.message}</div>
            <button onClick={this.clickHandler}>Click</button>
        </div>
    )
*/


// And that is it!
// Better not use the first and second approach
// Approach number three is the best since the fourth is still in experimentation





/* ********************************************* */
/* Methods as props */
/* ********************************************* */


// What if a child component wanted to communicate via props to a parent component
// We still use props, but we pass in a reference to a method as props to the child component
// We will see that in ParentComponent.js
// However here since we use 'this' in a method, we have to bind the method

// Now to create a ChildComponent.js, it is a functional component since we won't use any state

// So now when we click the button in the child component, we want to execute the method in the parent component
// We nee to pass the method as a prop to the child component
// --> <ChildComponent greetHandler={this.greetParent} />

// Now in the child component we can call the greetHandler using props and calling it as a function property
/*
    function ChildComponent(props) {
        return (
            <div>
                <button onClick={props.greetHandleer}>Greet Parent</button>
            </div>
        )
    }
*/

// Now we'll see how to pass a parameter when calling the parent method from the child component
// We will use an arrow function
// --> <button onClick={() => props.greetHandleer('child')}>Greet Parent</button>
// We pass the attribute as an arrow function and add () to the handler
// Now back in the parent method
/*
    greetParent(childName){
            alert(`Hello ${this.state.parentName} from ${childName}`)
    }
*/

// So to sum up, in the parent component we define the method,  then we render the child component tag as a method to a prop
// In the child component, we pass the method as the props, if we have to pass a parameter, we use the arrow function syntax
// You can destructure the props object in this function component, but since we only have this one object, we can leave it as it is





/* ********************************************* */
/* Conditional renedering */
/* ********************************************* */


// When we build our app, we sometimes want to show or hide an html component based on a condition
// Conditional rendering in react works in the same way as in JavaScript
// There is four ways to do it : "if/else", "element variables", "ternary conditional operator" and "short circuit operator"


// First approach : if/else statements

// We'll create a new file : UserGreeting.js with a class snippet (rce)
// In the class constructor we added a state "isLoggedIn"
// In JSX we added two divs, "welcome guest" and "welcome Emile", we want them to pop on conditional rendering
/*
    class UserGreeting extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                isLoggedIn: false
            }
        }
        
        render() {
            if (this.state.isLoggedIn) {
                return (
                    <div>Welcome Emile</div>
                )
            } else {
                <div>Welcome Guest</div>
            }
*/
// Now since the state of isLoggedIn is set to false, the browser will render Welcome Guest
// When we set the isLoggedIn state to tru, the browser renders Welcome Emile
// But now we have a lot of repetition and the render method looks crowded
// !!!!! if/else methods do not work inside the JSX !!!!!


// Second approach : element variables

// This is a better approach, we will use JS variables to store elements
// This will help to conditional render the entire component or only a part of the component
// First we create a variable inside the render method
// Once created, we use an if statement to change the content of the variable, then return that variable in a div
/*
    render() {
        let message
        if (this.state.isLoggedIn){
            message= <div>Welcome Emile</div>
        } else {
            message= <div>Welcome Guest</div>
        }
        return <div>{message}</div>        
    }
*/
// So message is the variable that stores the element to be rendered


// Third approach : ternary conditional operator

// This approach is much simpler using a ternary conditional operator, we call on condition this.state.isLoggedIn
// If true, returns the "Welcome Emile" div
// If false, returns the "Welcome Guest" div
/*
    render() {
        return(
            this.state.isLoggedIn ?
            <div>Welcome Emile</div> : 
            <div>Welcome Guest</div>
        )
    }
*/
// Or for a better understanding : 
/*
    render() {
        return(
            this.state.isLoggedIn ? (
                <div>Welcome Emile</div>
            ) : (
                <div>Welcome Guest</div>
            )
        )
    }
*/
// This is probably the most useful one, it keeps the code simple and readable


// Fourth approach : short circuit operator

// It is in fact a specific approach of the ternary conditional operator
// It is useful when we want to render either something or NOTHING
/*
    this.state.isLoggedIn && <div>Welcome Emile</div>
*/
// Here, if the left hand side is true, the right hand side can execute
// If the left hand side is false, the right hand side can not execute
// This is an expression is always either read as a whole or not at all





/* ********************************************* */
/* List rendering */
/* ********************************************* */


// To make a list, we want to repeat some html for each item in the list
// So we can use the "Math" method to quickly iterate over an array and return a new array with the desired changes applied

// The "Math" method : 
/*
    // We declare the array : 
    var array1 = [1, 4, 9, 16];

    // We pass a function to map since the map method accepts a function as an argument :
    const map1 = array1.map(x => x * 2);
    
    // Now the output
    console.log(map1); --> returns an array : [2, 8, 18, 32]
*/
// This is the concept for list rendering in react
// The difference is instead of a transformation like a multiplication, we will be transforming into JSX


// So we create a new component to show an example, it is called "NameList" containing an array of names
/*
    function NameList() {
        const names = ['Bruce', 'Clark', 'Diana']
        return (
            <div>
                <h2>{names[0]}</h2>
                <h2>{names[1]}</h2>
                <h2>{names[2]}</h2>
            </div>
        )
    }
*/
// This is fine, but it is not a proper solution, it can quickly become messy


// We will now use the "map" method to render the list of names

// We start by returning {} inside the returned <div>
// The "map" method is JS code that needs to be evaluated, we can do that in JSX using the {}
// Once we start writing html, we need to reuse {} if we have to evaluate the JS expression, hence the {name} : 
/*
    return (
        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div> 
*/
// Now to make it easier, we can take out the function from the return statement by assigning it to a variable
/*
    function NameList() {
        const names = ['Bruce', 'Clark', 'Diana']
        const nameList = names.map(name => <h2>{name}</h2>)
        return <div>{nameList}</div>
    }
*/


// Typically we will have a list of objects with a few properties to be rendered
// In such cases it is always a good idea to refactor the JSX into a seperate component and then use the component in the map method JSX*
// First we'll replace the array of names with an array of persons
// Now for each person in the list, we need to render their name, age and also skill
// We'll simply render them in the "map" method with additional html
/*
    const persons = [
        {
            id: 1, 
            name: 'Bruce', 
            age: 30, 
            skill: 'React'
        },
        {
            id: 2, 
            name: 'Clark', 
            age: 25, 
            skill: 'Angular'
        },
        {
            id: 3, 
            name: 'Diana', 
            age: 28, 
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => <h2>I am {person.name}. I am {person.age}. I know {person.skill}.</h2>)
    return <div>{personList}</div>
*/

// Now the recommended way is to refactor the JSX in a separate component, so we will create a new fiel : Person.js
// So now, we need to pass the data of persons as props to the Person component
// This is to render the name list, calling the Person component with the person prop
/*
    const personList = persons.map(person => <Person person={person} />)
    return <div>{personList}</div>
*/
// Now to define the Person function with a person prop
/*
    function Person({person}) {
        return (
            <div>
                <h2>
                    I am {person.name}. I am {person.age}. I know {person.skill}.
                </h2>
            </div>
        )
    }
*/
// We musn't forget to import the Person component in the NameList component

// We however have a console warning although it works : 
//"Each child in a list should have a unique "key" prop."
// That will be solved next





/* ********************************************* */
/* Lists and keys */
/* ********************************************* */


// React is telling us, each item in the list rendered using the map operator should have a prop named key
// The value to the prop should be unique, so in the NameList component, we add the key prop in the map method
// We could add "unique" as a string to that prop, but after, all the list items will have the same so NO
// So typically, we tend to use the id
/*
    const personList = persons.map(person => <Person key={person.id} person={person} />)
*/
// Now the warning message has been removed!

// The key prop value do not need to be "id" all the time, it can be anything for example the name, as long as it is UNIQUE
// We always need to include the key attribute

// However, the key prop is not accessible in the child components, if we try to render it in the JSX it doesn't work
// It will return undefined

// Why do we need a key ?
// --> Keys help react identify which items in the list have changed, are added or removed from the UI
// --> It plays a crucial role in handling UI updates efficiently


// Example with no keys
/* 
    <ul>
        <li>Bruce</li>
        <li>Clark</li>
    </ul>
*/
// And
/* 
    <ul>
        <li>Bruce</li>
        <li>Clark</li>
        <li>Diana</li>
    </ul>
*/
// Lets say we want to add <li>Diana</li> at the end
// How react handle this update : React iterates over both list items at the same time and generates a mutation whenever there is a difference
// Here, React matches the first two pair of items and sees there is no difference
// When trying to match the third pair of items, it sees that there is a difference and simply inserts the third item into the DOM tree
// This way instead of tearing down the old tree and building up a new tree from scratch react simply updates the tree by inserting the object at the end of the list

// Let's say this time we want to insert th new item at the beginning of the list
// In this situation, React will find out that every item is different
// React will end up mutating every child instead of realising it can keep the Bruce and Clark subtrees intact
// This inefficiency can be a problem, hence the key attributes


// Example with keys
/* 
    <ul>
        <li key="1">Bruce</li>
        <li key="2">Clark</li>
    </ul>
*/
// And
/* 
    <ul>
        <li key="3">Diana</li>
        <li key="1">Bruce</li>
        <li key="2">Clark</li>
    </ul>
*/
// React will use the key to match the children in the original tree with the children in the subsequent tree
// Now React knows that the element with the key "3" is a new element so react will preserve the subtree and simply insert the new element


// So to sum up : 

// A "key" is a special string attribute you need to include when creating lists of elements
// Keys give the elements a stable identity
// Keys help React identify which items have changed, are added or removed
// Help in efficient update of the user interface

// What happens if there is not an id wen we are in a simple array ? We'll see that next





/* ********************************************* */
/* Index as Key Anti-pattern */
/* ********************************************* */


// Most of the time, developers uses the index of elements as the key for list rendering
// It keeps the code simple and elegant and avoids the warning in the console


// Now how to use index as a key when rendering lists, and also the problems we might face when used in the wrong scenario
// So back in NameList.js, we add back the names array variable, and we'll render it instead of the person array
// -->   const names = ['Bruce', 'Clark', 'Diana']
// -->   const nameList = names.map(name => <h2>{name}</h2>)
// -->   return <div>{nameList}</div>

// Now the list is rendered but we have the console warning, so we need to add a unique key to each array item
// But now we don't have any Id ! so we can use the name
// -->     const nameList = names.map(name => <h2 key={name}>{name}</h2>)
// Now the error is gone


// Now what happens if we have a duplicate of the name ? So we then add another 'Bruce' in the array
// It works but we have an error : Encountered two children with the same key, `Bruce`

// To fix this, we can use a second parameter in the function passed to the map method, this is the index of the element in the current iteration
// --> const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
// So now we have the index displayed as well : 
// 0Bruce
// 1Clark
// 2Diana
// 3Bruce
// So this is how we can use the index value of the array items as key to the list items


// !!!!! Using the index value for the key to the list items can cause serious issues in certain scenarios !!!!!

// <ul>
//     <li key="0">1</li>
//     <li key="1">2</li>
//     <li key="2">3</li>
// </ul>

// This is what happens when we insert an item at the beginning

// <ul>
//     <li key="0">1</li>
//     <li key="1">2</li>
//     <li key="2">3</li>
//     <li key="3"></li>
// </ul>

// So react assumes that we keep the values associated with the key indexes, which is an issue
// !!!!! Now the values are all messed up !!!!!
// !!!!! This happens as well when you decide to sort the items !!!!!


// So we can use the index as a key, provided we respect all 3 following conditions : 

// 1. The items in your list do not have a unique id, if they do, we must always use the id as the key
// 2. The list must be a static list and not change (as in the example above), never adding or removing items in the list
// 3. The list will never be reordered or filtered


// Otherwise, I can use a npm packqage that generates a unique id for the lists items
// Or try to hash a unique value from one of the existing properties





/* ********************************************* */
/* Styling and CSS Basics */
/* ********************************************* */


// Now for the basics of styling and css when it comes to react
// There are a couple of options to style components in react :

// 1. CSS classic stylesheets
// 2. Inline styling
// 3. CSS modules
// 4. CSS in JS libraries ("Styled Components" recommended)

// We will cover only the first three options since the fourth one needs their own tutorials


// First approach : using CSS stylesheets

// So we now create a new file in components : Stylesheet.js, and after create a function component (rfce)
// To specify the styles for this component, we create a css file called myStyles.css in the components folder
// Inside the css file we add a classic class called primary setting the color to orange
// In order to use this file in our Stylesheet component we need to import it
// --> import './myStyles.css'
// Now we just have to set a className attribute to the h1 tag to "primary"

// We can also conditionally apply a className based on props or state of the component
// So to change that, we pass a prop to the Stylesheet component in the app component
// -->      <Stylesheet primary={false} />
// In the Stylesheets component, we pass the props in a conditional variable, if true, set to primary, if false set to null
/*
    function Stylesheet(props) {
        let className = props.primary ? 'primary' : ''
        return (
            <div>
                <h1 className={className}>Stylesheets</h1>
            </div>
        )
    }
*/

// Now if we want to specify multiple classes, the simplest way is to use template literals
// We create a new class in the css file
// Now back in the Stylesheet component, we change the className attribute to a template literal using backticks
// -->      <h1 className={`${className} font-xl`}>Stylesheets</h1>

// As an alternate to template literals, there is also a library called classnames, which makes it more cleaner


// Second approach : inline styling :

// We start by creating a new component called Inline.js, with a function component, and adding a h1 tag
// In react, inline styles are not specified as strings
// Instead, as an object whose key is the camel cased version of the stylename, before the function : 
/*
    const heading = {
        fontSize: '72px',
        color: 'blue'
    }
*/
// Here the value associated to the object css property is a string
// Then we just have to add a style attribute which calls the appropriate object : 


// Third approach : CSS modules :

// This works with react-scripts version 2 and newer
// The convention is to call them : name.module.css
// For example, we'll create two files : appStyles.css and appStyles.module.css, with respectively the error and success classes (red and green color)
// // Then we import them in the app : 
// -->      import './components/appStyles.css'
// -->      import styles from './components/appStyles.module.css'

// To use them in the app here is how we do : 
// -->      <h1 className='error'>Error</h1>
// -->      <h1 className={styles.success}>Success</h1>
// We access the class using the import statement variable name

// An advantage of using css modules is that the classes are locally scoped by default
// For example if we copy and paste inside the "Inline" component, the style applies (red color)
// -->      <h1 className='error'>Error</h1>
// !!!!! This can lead to css conflicts !!!!!

// On the other hand, css modules reference the class using the styles variable, it cannot be used in the children component
// If we copy :     <h1 className={styles.success}>Success</h1>, and paste it in the inline component, styles will be undefined
// So you can't accidently use a class that is defined for some other component





/* ********************************************* */
/* Basics of form handling */
/* ********************************************* */


// Now we will see how to capture input from form elements like the input, textarea, and select tags
// As well as to have the data available for form submission

// In regular html, form elements are responsible on their own to handle the user input and update the respected values
// What we want is to react to control the form elements instead, these are called "controlled components"

// If we consider an input element were a user type his email adress
// It has a value, and it can change based on user interaction
// -->      <inut type='text' value=... onChange=... />


// To change the value within a component, we use state and set state : 

// So in a controlled component, the value of the input field is set to the state property
// -->      <inut type='text' value={this.state.email} onChange=... />
/*
    this.state = {
        email: ''
    }
*/

// Next we have onChange event fired whenever there is a change in the input field value
// In the onChange handler, we use the setState method to update the state
// -->      <inut type='text' value={this.state.email} onChange={this.changeEmailHandler} />
/*
    this.changeEmailHandler = (event) => {
        this.setState({email: event.target.value})
    }
*/

// So when the state is updated, the render method is called and the new state is assigned as a value to the input element

// We have a cycle of setting the initial value from the state
// Then propagating the changed value to the state
// Then back to the input field

// React will always have access to the component state which reflect the updated values of the form elements
// That state object can then be used to submit the form data when needed


// Now the example, to start we create a new component called Form.js

// We create a class inside it in oder to use state, that returns a form tag parenting a div tag
// Inside the div we add a label and a text input, for now this is a html form, not a controlled react component

// To transform this in a controlled component, we need to follow two steps : 

// The first step is to create a component state that will control the value of the input element
// So within the class we create a constructor
// We then add a new state property called username, and initialise it with an empty string
// Next we assign this state property as the value of the input element
/*
    class Form extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                username: ''
            }
        }
        
        render() {
            return (
                <form>
                    <div>
                        <label>Username</label>
                        <input 
                            type='text' 
                            value={this.state.username} 
                        />
                    </div>
                </form>
            )
        }
    }
*/
// Now the input doesn't reflect the changes, that is because we didn't assign an event handler to reflect the changes
// We have a warning in the console : "You provided a `value` prop to a form field without an `onChange` handler"


// So now we need to create an onChange event handler
/*
    <input 
        type='text' 
        value={this.state.username} 
        onChange={this.handleUsernameChange}
    />
*/
// Now we need to add this onChange method as a class property as an arrow function

// When you assign a handler to the onChange event, that event itself is passed as a parameter to the handler
// So we have one parameter called event, from this event we can extract the value of the inputed element using event.target.value

// So any time we change the input, that value is captured using event.target.value
// So we just need to assign this captured value back to the state property
// To update the state we will use the setState method
/*
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
*/
// Now we have a controlled component

// We can do this for two other input html elements

// There is always three steps : 
// 1. Add the element html
// 2. Assign the component state to the element value
// 3. Assign an onChange handler that updates the state


// Now how to submit the form data

// First of all we add a submit button in the end of the form tag, with type submit attribute
// For now it is only a classic html form, sending to a new page when clicking on submit (refreshing)

// A common approach is to have a JS function to handle the click event on the submit button
// That method will also have access to the data the user has entered into the form
// So we had a handler to an onSubmit attribute in the form tag

// For now we assign this handler to an arrow function with an event as property, and throw an alert with the data entered :
// -->              alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
// When we click okay on the alerrt, the page refreshes again
// To avoid this, we simply ADD         event.preventDefault() to the handler

// We can also instead of the form create a button with an onclick event handler and have the exact same body as the 
// It will allow the user to use the enter key for better UX

// Finally to clean up we defin a variable object with username, comments an topic assigned to this.state
// This enables us to remove this.state from all three attributes since it is now defined

/*
    class Form extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                username: '',
                comments: '',
                topic: 'react'
            }
        }
        
        handleUsernameChange = event => {
            this.setState({
                username: event.target.value
            })
        }

        handleCommentsChange = event => {
            this.setState({
                comments: event.target.value
            })
        }

        handleTopicChange = event => {
            this.setState({
                topic: event.target.value
            })
        }

        handleSubmit = event => {
            alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
            event.preventDefault()
        }

        render() {
            const {username, comments, topic} = this.state
            return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input 
                            type='text' 
                            value={username} 
                            onChange={this.handleUsernameChange}
                        />
                    </div>

                    <div>
                        <label>Comments</label>
                        <textarea 
                            value={comments}
                            onChange={this.handleCommentsChange}></textarea>
                    </div>

                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type='submit'>submit</button>
                </form>
            )
        }
    }
*/





/* ********************************************* */
/* Component lifecycle methods  */
/* ********************************************* */


// When we create a react component, it goes through several stages in it's lifecycle
// React provides us with buitl in methods that we can overwrite at particular stages in that lifecycle
// Let's check out the lifecycle methods available for a class component
// These methods do not exist on functional components
// The methods discussed here are for react version 16 and above

// There are four phases : "mounting", "updating", "unmounting" and "error handling"

// Mounting lifecycle methods are called : when an instance of a component is being created and inserted into the DOM
// Updating lifecycle methods are called : when a component is being re-rendered as a result of changes to either its props or state
// Unmounting lifecycle methods are called : when a component is being removed from the DOM
// Error handling lifecycle methods are called : when there is an error during rendering, in a lifecycle method, or in the constructor of any child component


// Mounting : 
// - constructor
// - static method : getDerivedStateFromProps
// - render
// - componentDidMount

// Updating : 
// - static method : getDerivedStateFromProps
// - shouldComponentUpdate
// - render
// - getSnapshotBeforeUpdate
// - componentDidUpdate

// Unmounting : 
// - componentDidUnmount

// Error handling : 
// - static method : getDerivedStateFromError
// - componentDidCatch


// !!!!! Knowing when to use which lifecycle method is crucial to properly understanding how to work with react !!!!!





/* ********************************************* */
/* Component mounting lifecycle methods  */
/* ********************************************* */


// Mounting lifecycle methods are called : when an instance of a component is being created and inserted into the DOM
// We'll be going through them in the order in which they are invoked


// 1. The constructor()

// It is a special function that will be called whenever a new component is created. 
// It is used for initialising state, and binding the event handlers
// We shouldn't cause side effects in a constructor (HTTP requests for example)

// There are two things to keep in mind when defining our constructor

// First we have to call a speciial function called super(props), this will call the base class constructor
// In our component, we have access to this.props only once we have initially called super, passing in the props as an argument

// The second is that constructor is the only place where we're expected to change the state by directly overwriting this.state fields
// In all other scenarios, we have to use this.setState


// 2. getDerivedStateFromProps(props, state) (static method)

// It is a rarely used lifecycle method
// It is used when the state of the component depends on changes in props over time
// For example, we have a component and the initial state of the component depends on the props being passed to the component
// In such a scenario we can use this method to set the state
// Since it is a static method, we do not have access to 'this' keyword, so we cannot access the this.setState into this particular scenario
// Instead, we simply have to return an object that represent the new state of the component
// Again, we shouldn't cause any side effects (HTTP requests, AJAX, fetching data from an endpoint...)


// 3. render()

// It is the only required method in a class component
// In this method, we simply read this.props and this.state then return JSX which describes the UI
// It is a pure function, for a given props and state, it should always return the same UI
// We should not change the state of the component or interact with the DOM, or make AJAX calls

// Since it is the render method JSX which also contains the other children components right after the parent method
// The children components lifecycle methods are also executed


// 4. componentDidMount()

// It is called only once in the whole lifecycle of a component
// It is invoked immediately after a component and all it's children components have been rendered to the DOM
// This method is the perfect place to cause side effect, we can interact with the DOM or perform any AJAX calls to load data
// So this is a good place to perform initialisation that requires DOM nodes and also load data by performing network requests


// Now to check out in the code about their execution
// We'll check this out in a new component : LifecycleA.js
/*
    class LifecycleA extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                name: 'Emile'
            }
            console.log('LifecycleA constructor')
        }

        static getDerivedStateFromProps(props, state){
            console.log('LifecycleA getDerivedStateFromProps')
            return null
        }

        componentDidMount() {
            console.log('LifecycleA componentDidMount')
        }
        
        render() {
            console.log('LifecycleA render')
            return <div>LifecycleA</div>
        }
    }
*/
// By logging all the methods call in the console, we can see that the order of the four methods are as described earlier


// Now lets see how this works with child components (LifecycleB component) in the console : 
/*
    LifecycleA constructor
    LifecycleA getDerivedStateFromProps
    LifecycleA render
    LifecycleB constructor
    LifecycleB getDerivedStateFromProps
    LifecycleB render
    LifecycleB componentDidMount
    LifecycleA componentDidMount
*/





/* ********************************************* */
/* Component updating lifecycle methods  */
/* ********************************************* */


// Updating lifecycle methods are called when a component is being re-rendered either because of changes to either props or state
// We'll be going through them in the order in which they are invoked
// There are 5 methods, but only 3 are used commonly


// 1. static getDerivedStateFromProps(props, state)

// This method returns either null or an object that represent the updated state of a component
// This method is called every time a component is re-rendered
// This method is used when the state depends of the props of the component
// We should not cause any side-effects from this method such as HTTP requests
// It is a rarely used method in the updating phase


// 2. shouldComponentUpdate(nextProps, nextState)

// This method receives the updated props and state and it dictates if the component should re-render or not
// By default, a component will re-render whenever props or state changes
// This method can prevent that default behavior by returning false
// With this method we can compare the existing props and state values with the next props and state values
// Then return true or false to let react know whether the component should update or not
// So this method is basically used for performance optimisation
// We should not cause side effects (HTTP requests), as well as calling the setState method
// It is a rarely used method in the updating phase


// 3. render()

// It is the only required method
// It reads props and state and returns JSX that describes the UI
// We should avoid changing state, interact with the DOM or make AJAX calls in this method


// 4. getSnapshotBeforeUpdate(prevProps, prevState)

// This method is called right before the changes to the virtual DOM are to be reflected in the DOM
//  We would use this method to capture information from the DOM
// For example we can read the user's scroll position and after the update, maintain that scroll position by performing some calculations
// This method will either return null or return a value
// The returned value will be passed as the third parameter to the next and last method of the updating lifecycle methods
// It is a rarely used method in the updating phase


// 5. componentDidUpdate(prevProps, prevState, snapshot)

// This method is called after the render method is finished in the re-render cycles
// It means that we can be sure that the component and all it's sub-components have properly rendered themselves after the update
// This method accepts three parameters, and is guaranteed to be called only once in each re-render cycle
// So here we can cause side effects like AJAX calls
// However before making the call, we need to compare the previous props with the new props and then decide wether to make the AJAX call or not
// If we're not comparing, we are doing unwanted requests, which is not a good idea


// Now we'll test the order of execution in the code by adding the three methods not already present in the LifecycleA component and it's sub-component LifecycleB
// Now we also need to trigger and update the lifecycle, we need to change either the props or the state
// So we'll change the state in a button click
/*
    class LifecycleA extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                name: 'Emile'
            }
            console.log('LifecycleA constructor')
        }

        static getDerivedStateFromProps(props, state){
            console.log('LifecycleA getDerivedStateFromProps')
            return null
        }

        componentDidMount() {
            console.log('LifecycleA componentDidMount')
        }

        shouldComponentUpdate() {
            console.log('LifecycleA shouldComponentUpdate')
            return true
        }

        getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log('LifecycleA getSnapshotBeforeUpdate')
            return null
        }

        componentDidUpdate() {
            console.log('LifecycleA componentDidUpdate')
        }

        changeState = () => {
            this.setState({
                name: 'CodingReact'
            })
        }
        
        render() {
            console.log('LifecycleA render')
            return (
                <div>
                    <div>LifecycleA</div>
                    <button onClick={this.changeState}>Change state</button>
                    <LifecycleB />
                </div>
            )
        }
    }
*/
/*
    class LifecycleB extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                name: 'Emile'
            }
            console.log('LifecycleB constructor')
        }

        static getDerivedStateFromProps(props, state){
            console.log('LifecycleB getDerivedStateFromProps')
            return null
        }

        componentDidMount() {
            console.log('LifecycleB componentDidMount')
        }
        
        shouldComponentUpdate() {
            console.log('LifecycleB shouldComponentUpdate')
            return true
        }

        getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log('LifecycleB getSnapshotBeforeUpdate')
            return null
        }

        componentDidUpdate() {
            console.log('LifecycleB componentDidUpdate')
        }
        
        render() {
            console.log('LifecycleB render')
            return <div>LifecycleB</div>
        }
    }
*/
// Here is what is logged in the console when we click on the button to change the state and update the components
/*
    LifecycleA getDerivedStateFromProps
    LifecycleA shouldComponentUpdate
    LifecycleA render
    LifecycleB getDerivedStateFromProps
    LifecycleB shouldComponentUpdate
    LifecycleB render
    LifecycleB getSnapshotBeforeUpdate
    LifecycleA getSnapshotBeforeUpdate
    LifecycleB componentDidUpdate
    LifecycleA componentDidUpdate
*/
// The render() and componentDidUpdate() methods are the most comonly used methods in the component update lifecycle





/* ********************************************* */
/* Unmounting phase lifecycle methods  */
/* ********************************************* */


// This phase has only one method : componentWillUnmount()
// This method is invoked immediately before a component is unmounted and destroyed

// In this method, we can perform some clean up tasks such as: 
// --> Cancelling any network requests
// --> Removing event handlers
// --> Cancelling any subscriptions
// --> Invalidating timers from setTimer or setInterval

// With this method, we shouldn't call the setState method
// This is simply because a component is never re-rendered after it has been unmounted





/* ********************************************* */
/* Error handling phase lifecycle methods  */
/* ********************************************* */


// This phase has two methods : 

// 1. static getDerivedStateFromError(error)
// 2. componentDidCatch(error, info)

// These two methods are called when there is an error either during rendering, in a lifecycle method, or in the constructor of any child component
// We'll see both these methods when we see the error boundaries concept in react







/* ****************************************************************************************** */
/* ****************************************************************************************** */
/* ********************************** ADVANCED TOPICS *************************************** */
/* ****************************************************************************************** */
/* ****************************************************************************************** */







/* ********************************************* */
/* Fragments */
/* ********************************************* */


// Fragments lets you group a list children elements without adding extra nodes to the DOM


// We will illustrate that with an example inside a new component : FragmentDemo.js

// When we have returned with a function component, or rendered with a class component multiple items, the application crashes
// That is because they always must be enclosed in a single parent tag (a div)
// When we do that, it works, however we have the div tag in the DOM tree
// This is where react fragments come into picture

// We can replace the enclosing div tag with a react fragment, and that will prevent an extra node to be added to the DOM tree
/*
    <React.Fragment>
        <h1>Fragment Demo</h1>
        <p>This describes the Fragment Demo component</p>
    </React.Fragment>
*/


// Now we will try with another example with two additional components "Table.js" and "Columns.js"
/*
    function Table() {
        return (
            <table>
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                </tbody>
            </table>
        )
    }
*/
/*
    function Columns() {
        return (
            <div>
                <td>Name</td>
                <td>Emile</td>
            </div>
        )
    }
*/
// So now it works, however we have a console warning message : "validateDOMNesting(...): <td> cannot appear as a child of <div>."
// Basically, react says that it is wrong to have a <td> element as a child of a <div> element
// When we inspect the element, the <div> tag is necessary to enclose the two <td> child elements
// So instead of that we can use a react fragment to enclose these two elements
// So now in the tree we have : 
/*
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>Emile</td>
            </tr>
        </tbody>
    </table>
*/
// Instead of the following which was wrong :
/*
    <table>
        <tbody>
            <tr>
                <div>
                    <td>Name</td>
                    <td>Emile</td>
                </div>
            </tr>
        </tbody>
    </table>
*/
// Now there is no <div> tag in between


// The final point in fragements is that it can the key attribute when rendering list of items
// For example, lets assume we have an array of items stored in a variable called items
// The key attribute is the only attribute that can be passed to a React fragment
/*
    function Columns() {
        const items = []
        return (
            <React.Fragment>
                {
                    items.map( item => (
                        <React.Fragment key={item.id}>
                            <h1>Title</h1>
                            <p>{item.title}</p>
                        </React.Fragment>
                    ))
                }
                <td>Name</td>
                <td>Emile</td>
            </React.Fragment>
        )
    }
*/
// We can replace the <React.Fragment></React.Fragment> with <></>
// There is however a limitation on this synthax, we cannot pass in the key attribute!
/*
    function Columns() {
        const items = []
        return (
            <>
                <td>Name</td>
                <td>Emile</td>
            </>
        )
    }
*/





/* ********************************************* */
/* Pure components */
/* ********************************************* */


// So far we have created class components by extending the component class from React : 
// -->      class ClassClick extends Component {....}
// We can see that even the App component extends the component class from React
// -->      class App extends Component {....}

// There is actually a second way to create a class component
// We can do that by extending the pure component class from React

// We'll see that in an example in the PureComp.js component (snippet rcpe)
// -->      export class PureComp extends PureComponent {....}

// Once created, imported, and called in the App component, we can see nothing is different from a normal component
// So what is the difference between a component and a pure component ?
// When should we use one over the other ?

// To demonstrate the difference, we need a pure component "PureComp" and a normal component "RegComp", and a parent component "ParentComp" that can change it's state
// We need to be able to change the state of the parent component so we can add some code to do so :
/*
    class ParentComp extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                name: 'Emile'
            }
        }

        componentDidMount() {
            setInterval(() => 
            this.setState ({
                name: 'Emile'
            })
            )
        }
        
        render() {
            return (
                <div>
                    Parent Component
                    <RegComp name={this.state.name} />
                    <PureComp name={this.state.name} />
                </div>
            )
        }
    }
*/
// And for the children components ! 
/*
    class PureComp extends PureComponent {
        render() {
            return (
                <div>
                    Pure Component {this.props.name}
                </div>
            )
        }
    }   
*/
// And : 
/*
    class RegComp extends Component {
        render() {
            return (
                <div>
                    Regular Component {this.props.name}
                </div>
            )
        }
    }
*/
// Once we have called the parent component in the app component, all three JSX are displayed properly
// What we want to know is when the render method is called in each of the components
// Once we have consoled logged every render call in each component we can see this : 
// -->      Parent
// -->      Regular
// -->      Pure
// Then every second it is re-rendered :
// -->      Parent
// -->      Regular
// But withouth the pure component

// --> !!!!! This is because the pure component class is never re-rendered

// A regular component does not implement the shouldComponentUpdat method
// It always return true by default

// A pure component implements shouldComponentUpdate with a shallow props and state comparison
// But what is a shallow comparison (SC)


// We can study shallow comparison with respect to primitive or complex types

// Primitive type : 
// a (SC) b returns true if a and b have the same value and are of the same type (number, string or boolean)
// For example if a & b are both strings with the value 'Emile' then the (SC) returns true

// Complex type : 
// a (SC) b returns true if a & b reference the exact same object (a & b are complex, such as object or arrays)
// For example :
/*
    var a = [1, 2, 3];
    var b = [1, 2, 3];
    var c = a;

    var ab_eq = (a === b); --> returns false since even though the items in both the arrays are the same, those two arrays do not reference the same object
    var ac_eq = (a === c); --> returns true since a & c reference the same object
*/


// So the pure component implements shouldComponentUpdate with a shallow prop and state comparison
// It does a shallow comparison of prevState and currentState
// It does a shallow comparison of prevProps and currentProps
// If there is a difference , it will re-render the component

// --> So our pure component does not re-render since the previous and current props is a string with the exact same value of 'Emile'


// So now in the parent component, we will extend as well PureComponent from react
// -->      import React, { Component, PureComponent } from 'react'
// Now we can see it there is no re-render

// !!!!! We myst always bear in mind that if a parent component doesn't re-render, it's child component will not re-render as well !!!!!


// So pure components, since they don't re-render can offer a performance boost since they don't re-render

// !!!!! Never push or pull items in an object of a pure component !!!!!
// !!!!! So in other words never mutate the state, always return a new object that reflects the new state !!!!!
// Better use regular components except if are facing a performance issue





/* ********************************************* */
/* Memo */
/* ********************************************* */


// Pure components only work with class components
// It would be nice to have an equivalent for functional components
// That is where react.memo comes into picture

// Let's see that in an example in the component MemoComp.js
// It is a functional component with the 'name' prop

// It is from react and react DOM versions 16 at least

// First we put back the parent component to a regular component by resetting 'extends { Component } from React
// We export our functional component this way : 
// -->      export default React.memo(MemoComp)

// No only the parent re-renders, the memo component renders only once

// So React.memo(MemoComp) is what we call a higher order component
// So react takes the component, adds some code, and returns a new enhanced component 
// In our case a component that does not re-render when there is no change to the props





/* ********************************************* */
/* Refs */
/* ********************************************* */


// Refs make it possible to access DOM nodes directly within React
// We'll take one of the most common use cases which is focusing a text imput

// For example, we suppose we have a loggin form, let's say when the page is loaded, we want the user input to be focused
// We create the RefsDemo.js class component, and add an input text
// What we want to achieve is to be already in the input form when the page loads, without having to click in the text input
// Using refs, we can do this in three simple steps


// 1. The First step is to create a ref

// We do that with the react.createRef() method in the constructor
/*
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
*/


// 2. The second step is to attach this ref to our input element in the render method

// To attach a ref we make use of the reserved 'ref' attribute
// -->      <input type='text' ref={this.inputRef} />         
// We now have a reference to the input element


// 3. The third step is to call the focus method on this input element

// But what exactly does the property this.inputRef hold after a reference is created
// So we are going to add the componentDidMount lifecycle hook, and console log this.inputRef
// This logs an object in the console : we have the 'current' property of type 'input'
// This property points to the actual DOM node
// So we need to call the focus method on the 'current' property
/*
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
*/
// So now on load, the text input is accessible without having to click on it


// A second possible case for using refs would be to fetch the input value
// So first, under the input, we add a button saying click, with an onClick handler
// Then we define the handler to display an alert with the content of the input
/*
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
*/


// React support a second way to set refs, which is "callback refs"

// This approach is older but still may be in use
// We'll try to achieve the same focusing on an input element
// This approach goes in four different steps

// 1. The first step is to create the ref
// In the first approach we used the createRef() method in the constructor of the class component
// In this approach we create a property and set a value of null in the constructor method
// -->       this.cbRef = null

// 2. In the second step, we create a method
// This method will assign a DOM element to the ref we have just created
// So still in the constructor we create a method, taking 'element' (DOM element) as a parameter
/*
    this.setCbRef = (element) => {
        this.cbRef = element
    }
*/

// 3. The third step is to attach this ref to the input element
// So we'll creat a second input element with a ref attribute calling 'this.setCbRef', our method that sets our ref
// The input element is implicitely passed as a parameter which is assigned to the cbRef property

// 4. The Fourth step is to set the code in componentDidMount()
// We can comment out the code for the first example, then add the following
// What we have to know about callback refs is that react will call the ref callback with the DOM element when the component mounts
// It will call it with 'null' when it unmounts
// !!!!! This is why we have to check if a value exists on the reference property and that it is not null !!!!!
/*
    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
    }
*/
// -->      Here, we first check thet this.cbRef exists before calling the focus method (it shouldn't be null)
// Unlike in the previous approach, the DOM node is directly accessed using the ref property (we don't need 'current')
// So now the second text input is focuse on component mount





/* ********************************************* */
/* Refs with class components */
/* ********************************************* */


// It is also possible to add a ref to a class comonent
// We'll see that with an example by creating a new component called Input.js
// -->      <input type="text" ref={this.inputRef} />
// This component is going to be an implementation of what we learned in the previous chapter
// We can focus on the input element in the componentDidMount lifecycle method, but for this example we don't want to do that
// Instead we want to create a method that will in turn focus the input element
// That method will be called by the parent component
/*
    focusInput() {
        this.inputRef.current.focus()
    }
*/
// Now we have a ref in our input element that calls on a focus method

// Now we will create the parent class component called "FocusInput.js"
// Inside we call the Input component and add a button
// When we click on the button in the parent component, we want to focus on the child component
// So we still have the three simple steps
      
// 1. In the constructor we add the method : 
// -->      this.componentRef = React.createRef()
// 2. In the input call component we add the ref attribute calling this method
// -->      <Input ref={this.componentRef} />
// 3. Finally we add a click handler to the button, and whithin the handler, call the child component method using the ref
/*
    this.clickHandler = () => {
        this.componentRef.current.focusInput()
    }
*/
// The inputFocus method is defined in the child class component

// !!!!! Refs cannot be attached to functional components !!!!!





/* ********************************************* */
/* Forwarding refs */
/* ********************************************* */


// Ref forwarding is a technique to automatically passing a ref through a component to one of it's children

// We'll start by the example in the component "FRInput.js" which stands for Forward Refs Input, and we'll explai later
// We'll also create a parent component "FRParentInput" that calls the child component and has a button as well

// When we click on the button we want to focus on the input text in the child component
// However, unlike before, where the ref was pointing to the class component

// Here we will use the forward ref technique to allow the parent component to directly reference the native input element
// This is done in four simple steps


// 1. First step, we create a ref in the parent component's constructor
// --> this.inputRef = React.createRef()

// 2. Second step we attach the ref to the child component using the ref attribute
// -->      <FRInput ref={this.inputRef} />

// 3. Third step, we need to forward this ref to the input element in the child component
// We can do this by using the forwardRef() method from the react library
// For that we need to modify how we create the functional component
// First we replace the traditional way of writing the function with an arrow function
// We will use the React.forwardRef method, this methods take one parameter which is the component
// Since we already have our arrow function, we'll simply cut it and paste it in the parameter () of the method
/*
    const FRInput = React.forwardRef( () => {
        return (
            <div>
                <input type="text" />
            </div>
        )}
    )
*/
// We know that a functional component can receive props as its parameter
// !!!!! When a component is passed as a parameter to the createRef() method, it receives the ref attribute as it's second parameter !!!!!
// -->          const FRInput = React.forwardRef( (props, ref) => {....}
// So we can use this ref parameter and pass it as a value to the ref attribute on the native input element
// -->      <input type="text" ref={ref} />
// This ref parameter will point to the value of the ref attribute from the parent component
// In other words, the ref is being forwarded from the parent component to the native input element

// 4. The fourth step allows us to define the click handler
/*
    clickHandler = () => {
        this.inputRef.current.focus()
    }
*/
// Since we are using forward ref technique imputRef.current points to the native input element and not the FRInput component instance

// So for our final step, once back in FRParentInput.js, we can define the clickHandler
// So to sum up

// 1. The parent component creates a ref in the constructor
// 2. Then attaches it to the cild component instance with the ref attribute
// 3. The child component sees that ref and tells the parent "I am not what you are looking for, you are looking for the native input element, right ?"
// "Let me directly introduce him to you"
// 4. So the child component receives the ref from the parent component
// 5. Then attaches it to the native input element
// 6. Now the parent component can directly access the input element using this.inputRef.current

// --> the child element is basically forwarding this reference

// Ref forwarding is something we will rarely use in our applications
// It might come in handy when we work with some libraries or when we're dealing with higher order components





/* ********************************************* */
/* Portals */
/* ********************************************* */


// Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component
// So far, we have had one DOM element in our html that we were mounting the react application into
/*
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
*/
// So in our application on the browser, in the DOM tree, everything falls down beneath the 'root' element
// React portals gives us the ability to break out of this DOM tree
// So we can render an element under a DOM node that is not under this 'root' element

// We'll see how to use portals with a simple example

// 1. In the first step, in the index.html, we'll add another div tag beneathh the root tag with the id portal-root
// -->      <div id='portal-root'></div>

// In a second step we create a new component called 'PortalDemo.js'
// Once exported and called in the App component, if we inspect it, we can see it is under the 'root' component

// In the third step we will use the ReactDOM.createPortal() method
// So in the PortalDemo component we need to import ReactDOM
// -->      import ReactDOM from 'react-dom'
// Then in the render method, instead of simply returning the JSX, we are going to return the ReactDOM.createPortal() method
// This method takes two parameters
// The first parameter is the JSX we want to return
// The second parameter is the DOM node we want to mount the JSX on to

// Now when we check the browser, the text is still here but it is not centered anymore 
// We managed to get it out of the 'root' component


// So now the question is why do we need portals ?

// One of the use cases, is having to deal with the parent component's CSS when the child component is a modal, a pop-up or a tool-ti^p
// -->      https://codesandbox.io/s/00254q4n6p


// Even though a portal can be found anywhere in the DOM tree, it reacts the same as a normal child, and this includes event bubbling
// So an event fired from inside a portal will propagate to it's ancestors in the containing react tree
// Even if those elements are not ancestors in the DOM tree, like in the example after
// -->      https://codepen.io/gaearon/pen/jGBWpE

// !!!!! So an event fired from inside a portal will propagate to ancestors in the containing react tree !!!!!





/* ********************************************* */
/* Error boundary */
/* ********************************************* */


// In the lifecycle method, there is also the error handling phase which includes 2 lifecycle methods
// -->      staticc getDerivedStateFromError(error)
// -->      componentDidCatch(error, info)


// Furing this tuto we have seen that runtime errors during rendering could put our application in a broken state
// React unmounts the whole react component tree

// What would be great would be to catch the error anywhere in the component tree and display a fallback UI
// This is where error boundary come into action

// An error boundary is a class component that implements either one or both of the lifecycle methods
// getDerivedStateFromError or componentDidCatch becomes an error boundary

// --> getDerivedStateFromError(error) is used to render a fallback UI after an error is thrown
// --> componentDidCatch(error, info) is used to log the error information


// Example in "Hero.js"

// We create a functional component taking  {heroName} as a prop
// For our understanding of error boundaries, we need to throw an error, so we add an if statement
/*
    function Hero({heroName}) {
        if (heroName === 'Joker') {
            throw new Error('Not a hero')
        }
        return (
            <div>
                {heroName}
            </div>
        )
    }
*/
// In the app component, we call twice the Hero commonent, with two different heroName attributes
// -->      <Hero heroName="Batman" />
// ->       <Hero heroName="Superman" />
// -->      <Hero heroName="Joker" />
// A soon as we add the joker, the application crashes, that's not good
// We want only the one component that has an error to unmount, and the other functionning ones to be unaffected
// We can achieve that with an error boundary called "ErrorBoundary.js"


// For this component to be a error boundary we need to use either one of the two previous methods


// 1. the getDerivedStateFromError(error) method : 

// In this method, we have to put error as a parameter, and to return a new state
/*
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
*/
// But this means we have to set the state as well :
/*
    constructor(props) {
        super(props)
        this.state = {
            hasError: false       
        }
    }
*/
// So here what we are effectly doing is that if at all there is an error when rendering any of the components
// We are setting the state hasError property to true
// This state property can be used to create a fallback UI
/*
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
         return this.props.children
    }
*/
// this.props.children refers to the component we are actually rendering

// In our final step we must wra    p all our components in our ErrorBoundary component in the app component
// Now we cann see in the browser that we still have the error
// During development and not production, we will always have the classic react error UI
// Our UI for handling errors will only appear when we are developing in production
// It appears quickly before the react error message but we can have it back if we click on the close button of the error message


// Now where to place error boundaries ?

// So at our point since the ErrorBoundary encloses all the components, if there is an error in only one of the components, the fallback UI will appear
// The thing is we wouldn't want to hide all the components if onlyy one has an error
// So what we need to do, is wrap each component with the ErrorBoundary component (série et dérivation)


// 2. The componentDidCatch(error, info) method

// The info parameter is the information related to the error
// This method is pretty much used to log the errors
// So if we have a loggin service, you can call it passing in the error and the info parameters
// For now we will simply log them to the console


// !!!!! These two methods catch errors in the lifecycle methods and the constructor of the whole tree below them !!!!!
// !!!!! However thehy do not catch errors inside event handlers, for those, we need to use the classic throw, catch and try methods !!!!!





/* ********************************************* */
/* Higher order components 1/3 */
/* ********************************************* */


// Why do we have a need for higher order components ?

// We'll explain this in a new file called "ClickCounter.js"
// Now we'll implement the actual click counter
/*
    class ClickCounter extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                count: 0
            }
        }
        
        incrementCount = () => {
            this.setState( prevState => {
                return { count: prevState.count + 1 }
            })
        }
        
        render() {
            const { count } = this.state
            return (
                <div>
                    <button onClick={this.incrementCount}>Clicked {count} times</button>
                </div>
            )
        }
    }
*/

// Let's say we show this to the client, and he is really happy about it
// However he has a new requirement, he wants another piece of UI that works very similarly to this counter
// Instead of button clicks, he wants a heading that indicates the number of times you hover over it


// We'll see that in the new example componenet "HoverCounter.js"
// The thing is that we already have the incrementCount handler in another component
// So actually, we can use the same code from the previous component, paste it, and add the hover handler : 
// -->      <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>


// Now the client wants an input element that counts the number of key presses so we can use onkeyup and display the counter
// We can of course implement it like the hover counter or the click counter
// However we do realise that we are duplicating code and not reusing the fonctionality


// How can we reuse this code !?
// The immediate thought is to lift this state to the parent component and pass the handler as a prop 
// This could definitely work in our scenario where the counters are direct children of the parent
// But what if the counter components are scattered in the component tree ?
// In that case, lifting the state would definitely not be the solution

// --> So there is a need to share common functionality between components without repeating code
// !!!!! This is where the concept of higher order component comes into picture !!!!!





/* ********************************************* */
/* Higher order components 2/3 */
/* ********************************************* */


// To share common functionality between components

// What is a Higher Order Component "HOC"

// It is a pattern where a function takes a component as an argument and returns a new component
// --> const NewComponent = higherOrderComponent(original component)
// Typically, an HOC adds additional data or functionality to the original component
// So the new component can also be refered as an Enhanced Component


// Let's start with the bare minimum code for an HOC in "withCounter.js"

// First : import React from 'react'
// Then we create the function : 
/*
    import React from 'react'

    const UpdatedComponent = (OriginalComponent) => {
        class NewComponent extends React.Component {
            render() {
                return <OriginalComponent name='Emile' />
            }
        }
        return NewComponent
    }

    export default UpdatedComponent
*/

// Now in the ClickCounter component, we can import the function from withCounter
// Then we export the ClickCounter as the argument to the UpdatedComponent function
// -->      export default UpdatedComponent(ClickCounter)
// So instead of exporting the component, we export it as the argument to the HOC function

// The HOC in addition to being the ClickCounter or the HoverCounter, now has a new prop called name
// So in both the components we can actually now use the name prop
// So we can add this props in both render methods :
/*
    <button onClick={this.incrementCount}>
        {this.props.name} Clicked {count} times
    </button>
*/
// And :
/*
    <h2 onMouseOver={this.incrementCount}>
        {this.props.name} Hovered {count} times
    </h2>
*/
// So now our HOC injects the 'name' prop to any component requiring it
// However, we need the counter functionality to be shared amongst the components

// So lets modify our HOC :
// We copy paste the constructor and the handler in the NewComponent class

// So the NewComponent now maintains a 'count' state and a method to increment that state
// Now we can remove the constructor and the handler for both components

// Now in the HOC, we need to pass down the state and the incrementCount method as props
// Like that, the original method can make use of that functionality
// So we remove the name prop and instead we add the new ones :
// -->      return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} />

// We can now make use of these props in the two components
// So we get rid of the state, and add the new props in the render method
// -->      const { count, incrementCount } = this.props

// In the onClick handler, it will now be just incrementCount
// -->      <button onClick={incrementCount}>Clicked {count} times</button>





/* ********************************************* */
/* Higher order components 3/3 */
/* ********************************************* */


// About passing down the props

// In the App component, we're going to pass the 'name' prop :
// -->      <ClickCounter name='Emile' />
// Then we can call it in the ClickCounter component : 
// -->      {this.props.name} Clicked {count} times
// We can see that the name is not displayed in the browser
// This is a common mistake that happens when we start working with HOCs

// The problem here is that when we specify props in the ClickCounter component, 
// The props are sent down to the HOC and not to ClickCounter
// If we console.log(this.props.name) in the withCounter render method, "Emile" is displayed in the console
// For the HoverCounter however, it is undefined since we are not passing any props in the App component
// --> So the prop is passed to HOC but not to the component that is wrapped

// To fix this issue, we need to pass the remaining props to the wrapped component using the spread operator
/*
    return <WrappedComponent 
                count={this.state.count} 
                incrementCount={this.incrementCount}
                {...this.props}
                />
*/
// What is happening here is that the HOC adds two props to the wrapped component
// And then simply passes down what remaining prop has been specified
// In our case, it passes down the name prop

// !!!!! So when we do HOCs, we musn't forget to pass down the remaining props with {...this.props} !!!!!


// About passing parameters to the HOC function

// For example, we would like to increment with different numbers when using the ClickCounter or the HoverCounter
// We can do that by passing a parameter to the HOC function
// So the arrow function will now have two parameters : 
// -->      const withCounter = (WrappedComponent, incrementNumber) => {
// And in the incrementCount handler : 
// -->      return { count: prevState.count + incrementNumber }
// Then we just have to add the incrementNumber we want in the export function : 
// -->      export default withCounter(HoverCounter, 10)





/* ********************************************* */
/* Render props 1/2 */
/* ********************************************* */


// Now let's look at another pattern that allows us to share code between components which is the "render prop pattern"

// First we will oversee why we need such a pattern
// We'll see that in the "ClickCounterTwo.js" component
// We'll do the same with "HoverCounterTwo.js"
/*
    class HoverCounterTwo extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                count: 0
            }
        }
        
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }
        
        render() {
            const { count } = this.state
            return (
                <div>
                    <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
                </div>
            )
        }
    }
*/
// Now the client wants a counter for each key presses

// We can do that with the render prop pattern





/* ********************************************* */
/* Render props 2/2 */
/* ********************************************* */


// What exactly is render props ? We'll see that in the "User.js" component


// 1. First step

// Instead of hardcoding "Emile", we'll pass it as a prop in the App component :
// -->      <User name='Emile' />
// And in the User component : 
// -->      <div>{this.props.name}</div>


// 2. Second step

// Instead of simply passing the string "Emile" as name prop
// We want to pass a function that will return the string "Emile"
// So in the App component, we change the string to a function returning that same string : 
// -->      <User name={ () => 'Emile'} />
// And we add parenthesis in the User component since name is now a function :
// -->      <div>{this.props.name()}</div>


// 3. Third step

// Now we want to have parameters to the function in the name prop
// Based on the parameter, we want to change what is rendered by the user component
// So we enter 'isLoggedIn' as a parameter, and we want the user component to return "Guest" or "Emile" based on the value of 'isLoggedIn'
// So we implement a ternary conditional in the App component : 
// -->      <User name={ (isLoggedIn) => isLoggedIn ? 'Emile' : 'Guest'} />
// And in the User component : 
// -->      <div>{this.props.name(true)}</div>


// 4. Fourth step

// In the App component we change the name prop to render : 
// -->      <User render={ (isLoggedIn) => isLoggedIn ? 'Emile' : 'Guest'} />
// And apply this change to the User component as well : 
// -->      {this.props.render(true)}


// With this example, here is what we need to keep in mind : 
// --> In react, it is possible to use a prop whose value is a function to control what is rendered by a component
// --> This is pretty much what the Render Props Pattern is based on


// The term "Render Prop" refers to a technique for sharing code between components using a prop whose value is a function
// This definition has two important parts, "sharing code between components" and "prop whose value is a function"
// We just saw how to set a prop whose value is a function, now we will see how to share code using that


// Now we create the CounterRenderProps that will include all our common functionality for the hover and click counters
// These are the state and the increment count method
// So we can remove these from the two components, and add it to the CounterRenderProps component

// For the moment the JSX is empty because the render props is going to control what will be rendered by this CounterRenderProps component
// For our example we will render the two components and pass down the count state, and the incrementCount method
// -->      {this.props.render(this.state.count, this.incrementCount)}
// So the CounterRenderProps component is saying : take the count state, and the incrementCount method and render whatever you want to


// So to sum up :

// 1. In the App component we render the CounterRenderProps component
/*
    <CounterRenderProps render={ (count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        )}
    />
    <CounterRenderProps render={ (count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount}/>
        )}
    />
*/

// 2. In the CounterRenderProps component, we have a count state, and an incrementCount method
// However, the CounterRenderProps component does not render anything on it's own
// It is simply going to render whatever is passed as the render prop
/*
    class CounterRenderProps extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                count: 0
            }
        }
        
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }
        
        render() {
            return (
                <div>
                    {this.props.render(this.state.count, this.incrementCount)}
                </div>
            )
        }
    }
*/
// By doing so, it passes on the count state and the incrementCount method

// 3. Back in the App component, we can see that the render prop is the Click and Hover counters components
// The count state and the incrementCount method form the CounterRenderProps component are passed as props to the two other components


// 4. These two components make use of the passed in props to render the actual UI

// 5. Here is another way of calling it without using the render prop : 
/*
    <CounterRenderProps> 
        { (count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount}/>)}
    </CounterRenderProps>
*/
// We just pass the function with it's arguments between the opening and closing component tag
// And then in the CounterRenderProps component : 
// -->      {this.props.children(this.state.count, this.incrementCount)}





/* ********************************************* */
/* Context 1/3 */
/* ********************************************* */


// Another powerful and interesting concept is react context
// In this part we will try to understand what is the need for the context API

// If we consider a react application that has lots of components

// AppComponent --> A
// AppComponent --> B --> D
// AppComponent --> C --> E --> F

// Let's say we want components A, D and F to display the logged in username
// That information is maintained as a property of the AppComponent
// So in this case, we need to pass down the username as a prop
// For A it is easy, since the AppComponent simply pass the username prop to component A
// For D however, we must first pass the username prop to B which in turn must pass it to D
// Same for F, passing the username prop first to C, who in turn pass it do E, then finally pass it to F

// So the problem is that we need to pass prop to components that do not require it, in order to finally pass it to the components needing it

// The solution would be to directly send data to the required component
// This will avoid having to manually drill down the props through every level of the component tree
// --> This is where context comes into picture

// Context provides a way to pass data through the component tree without having to pass props down manually at each level





/* ********************************************* */
/* Context 2/3 */
/* ********************************************* */


// In this part, we will provide a user context that will enable a component at any level to read a prop that is passed at the top level
// For this demo we will only use AppComponent --> C --> E --> F
// Our goal is to pass the userame value from the AppComponent, and read that value in component F using context
// Once the four components created, there are three steps to implement in order to use context


// 1. Create the context
// 2. Provide a context value
// 3. Consume the context value in the necessary components


// 1. Creating the context : 

// We will create a new file called "userContext.js" and import React
// -->      import React from 'react'

// Then we create the context, assigning it to a variable
// -->      const UserContext = React.createContext()

// Every context object created using the createContext() method comes in with a Provider and a Consumer react component
// We need these two components for the next two steps which means we have to export them
// Hence, while exporting them, it is nice to fit them with a more readable name
// -->      const UserProvider = UserContext.Provider
// -->      const UserConsumer = UserContext.Consumer

// Now, we can export them
// --> export { UserProvider, UserConsumer }


// 2. Provide a context value

// Now we need to provide this user context using the UserProvider component
// The place we provide it is important because only the descendant components can consume it
// The App component is generally a good place, since all the other components fall under it
// So we can wrap ComponentC with the UserProvider component in the App component
/*
    <UserProvider>
        <ComponentC />
    </UserProvider>
*/
// We also musn't forget to include the import statement at the top of the App component
// -->      import { UserProvider } from './components/userContext'

// Now the provider component is responsible for providing a value for all the descendant components
// We provide it by adding a value attribute to the UserProvider component call in the App component
// -->      <UserProvider value='Emile'>


// 3. Consume the context value

// We need to consume the context value in ComponentF
// In order to do so, we need to use the consumer component
// In between the opening and closing tags of the consumer component, we need to specify a function

// The function gets the user context value as it's parameter which can then be used whithin the function body to return a react element
// So we are passing a function as a child to the consumer component
// The consumer component tells the componentF, you need the username right ? let me provide it !





/* ********************************************* */
/* Context 3/3 */
/* ********************************************* */


// Let's discuss two more points about the context API

// 1. We can set a default value to our context

// This value is set while creating the context
// It is passed as an argument to the createContext method
// -->      const UserContext = React.createContext('ReactTutorial')
// Now if we comment out the UserProvider component wrapper in the App component
// So the default value will only be used when a component does not have a matching provider above it in the component tree


// 2. The context type property

// We previously saw how to use the consumer component to consume the context value
// There is in fact another way to do that, using the context type property on a class
// We'll see how this works by consuming the user context value in ComponentE

// First we need to export the user context itself in the userContext component
// -->      export default UserContext

// Next we need to assign this user context to the context type property in the class, so in ComponentE, outside the class code
// -->      ComponentE.contextType = UserContext
// While making sure to import it at the top
// -->      import UserContext from './userContext'
// Then in the render method
/*
    <div>
        Component E context {this.context}
        <ComponentF />
    </div>
*/
// We can also replace the ComponentE.contextType = UserContext by the next statement inside the class component
// -->      static contextType = UserContext


// But why don't we use the contextType every time since it is simpler ? Well there are two limitations

// The first is that it only works with class components
// The second is that we can only subscribe to a single context using context type
// Since we often need to use more than a single context in which scenario the consumer component is the way to go

// So we can finish by having this kind of example of code : 
/*
    function Content() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <UserContext.Consumer>
                        {user => (
                            <ProfilePage user={user} theme={theme} />
                        )}
                    </UserContext.Consumer>
                )}
            </ThemeContext.Consumer>
        )
    }
*/





/* ********************************************* */
/* React and HTTP */
/* ********************************************* */


// We are going to introduce how HTTP requests are handled in a react application
// We most of the time need to fetch and/or send data to the server via user interaction
// React is a library for building user interfaces, it is in no way concerned about HTTP

// How do we make AJAX requests in React or how do we make API calls in React

// As a starter, react does not have a particular way to fetch and/or send data to the server
// In fact, as much as react is concerned, it doesn't even have to know that there is a server is in the picture
// React components simply reads props and state and render the UI

// Therefore, to use some data from the server, we just have to get the data into the components props or state

// Now if React is not going to handle the request ? Who is going to do it ?
// This is where we will have to make use of an HTTP Library
// AXIOS is a good one
// In any case, we won't be focusing on what library we use, but how do we use it with react
// To do that we will create a new app called react-http

// Once in the folder we call npm install axios and it is installed





/* ********************************************* */
/* HTTP GET requests */
/* ********************************************* */


// Now we will learn how to make an HTTP GET request using axios, and render the data in our react component

// To fetch the data, we need to have an API endpoint, for that we will be using JSONPlaceholder
// It is a fake online REST API for testing and proptotyping

// Once on the page, if we scroll down to the routes section, we can see the possible http requests we can make
// We will be using the /posts one, to fetch an array

// So now we create a new "components" folder, and a new component called "PostList.js" which will be a class component
// We add some text in the render method, then call the PostList component in the App component
// N.B. In this tutorial, we will not use hooks but use class components


// Now for data fetching


// 1. First step

// We import the axios library in the PostList component
// -->      import axios from 'axios'


// 2. Second step

// We need to create a state property that will store the list of posts
/*
    this.state = {
            posts: []
    }
*/
// We initialise this state to an empty array


// 3. Third step

// We are going to use axios to make a GET request to the JSONPlaceholder API
// But where do we place the code to make the GET request ?

// We'll place it in the componentDidMount() lifecycle method
// This method will be executed when the component mounts for the first time 
// And it will only be executed once during the component lifetime
// The perfect place to make our GET request

// So now we invoke the GET method from the axios library
// This method accepts the API endpoint as it's argument
// So we simply paste the posts route url as a string
/*
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
    }
*/

// So we are now making the GET request, but how do we access the returned data ?
// axios is a promise-based library so we can add 'then' and 'catch' blocs

// 'then' accepts an arrow function as it's argument which gives us access to the response
// So we'll simply log to the console the response

// Also, if anything went wrong, we can simply catch the error, and log it to the console

// So now in the console, the data is rendered
// All we need to do now is to assign this data array to the state property and then render it in the JSX
/*
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }
*/
// Now we just need to call it in the render method, while first destructuring the state property
// Then display this list of posts using the map method
/*
    render() {
        const { posts } = this.state
        return (
            <div>
                List of posts
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null
                }
            </div>
        )
    }
*/
// So we check if posts.length exists first (if there is any of them), then list them using the map() method
// If there isn't any, we return null

// So if we destructure every step : 

// 1. We start off with the constructor, we have a state property called posts which is an empty array
// 2. Then the control goes to the render method, the text "list of posts" is rendered but the map() method isn't since the array is empty
// 3. Then the control goes to componentDidMount(), here we make our GET request to the API endpoint, once the data is retrieved we then update the state posts property
// 4. When we change state, the component will re-render and this time the array is not empty and so the list is rendered in the browser


// Now we'll quickly see how to display an error message when the API fails

// We'll add another state property called message that we'll initialise with an empty string
// In the catch block we will set it to the string "Error while retrieving data"
// Now in the JSX, if there is an error message we will display it
// Musn't forget to destructure errorMsg as well !
// Now if we alter the url, the error message is displayed beneath the string "List of posts"
/*
    import React, { Component } from 'react'
    import axios from 'axios'

    class PostList extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                posts: [],
                errorMsg: ''
            }
        }
        
        componentDidMount() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    console.log(response)
                    this.setState({posts: response.data})
                })
                .catch(error => {
                    console.log(error)
                    this.setState({errorMsg: 'Error retrieving data'})
                })
        }

        render() {
            const { posts, errorMsg } = this.state
            return (
                <div>
                    List of posts
                    {
                        posts.length ?
                        posts.map(post => <div key={post.id}>{post.title}</div>) :
                        null
                    }
                    { errorMsg ? <div>{errorMsg}</div> : null }
                </div>
            )
        }
    }

    export default PostList
*/





/* ********************************************* */
/* HTTP POST requests */
/* ********************************************* */


// Now we will see how to post data to an API via our react application

// If we look at the object property for a post, there is a userId, a title and a body
// The id is self-incrementing so it doesn't have to be sent as part of the POST request

// So we are going to create three input fields, one for userId, one for title and one for body
// We will store the data in the state object and make a POST request on click of the submit button

// We'll do that in a new file called 'PostForm.js'

// 1. In here we have a form with three inputs, for userId, body and title
// 2. Next, lets create state properties for these three fields and link them back to the input elements
// 3. Next, we destructure them in the render() method
// 4. Then we can assign them to the value attribute in each input element
// 5. Next, we add the onChange handler, to track the changed on the input values and keep them in sync with the state object
// 6. Then we set the changeHandler as an arrow function accepting the event (e) asset argument
// 7. Since we are using the name attribute, we do not need seperate handlers for each input
// 8. The last thing we need is the submit handler, so we add a button of type submit, before the closing tag of the form
// 9. Then in the opening tag of the for we specify a submitHandler in an onSubit attribute


// Now that we have logged what we wanted, lets post it via axios, this is pretty much like the GET request with a small change

// 1. First we import axios
// 2. Then in the submit handler we can make the POST request
// 3. The post method takes in the same url as first argument and as a second argument takes the data we need to send
// 4. Once the request is complete we either get a response or an error
// 5. This time the item added has a unique Id as well which we can use in the UI


// Making PUT or DELETE requests are pretty much the same







/* ****************************************************************************************** */
/* ****************************************************************************************** */
/* ************************************** REACT HOOKS *************************************** */
/* ****************************************************************************************** */
/* ****************************************************************************************** */







/* ********************************************* */
/* Introduction */
/* ********************************************* */


// 1. What are hooks ?

// They are a new feature addition in react version 16.8
// It allows us to use react features without having to write a class!

// Fo example : the state of a component
// Previously we could use state only within class components
// With hooks, we can now use state and also other react features without writing a class

// We should keep in mind that hooks don't work inside classes
// They let us use react without classes


// 2. Why use hooks ?

// First reason : JS related
// --> the issues with "this" keyword
// --> the need to bind event handlers in class components
// --> the fact that classes don't minfy very well and make hot reloading very unreliable
// With hooks, since we don't have to use classes, we won't have to face these problems

// Second reason : advanced topics in react (HOC & render props pattern)
// --> there is no particular way to reuse stateful component logic between components
// --> the HOC and render props pattern do adress this problem, but we have to reorder our components which ends up with awkward looking code
// --> we end up wrapping our components with several other components to share the functionality, which makes the code harder to follow
// --> so there is a need to share stateful logic in a better way
// Hooks helps us in this aspect by allowing us to reuse stateful logic without changing our component hierarchy

// Third reason : deal with how code is placed in a component and that complex components become hard to understand
// --> when creating components for complex scenarios such as data fetching and subscribing to events
// --> related code is not organised in one place but scattered across different lifecycle methods
// --> for example, data fetching is usually done in componentDidMount() and sometimes in componentDidUpdate()
// --> if we need event handlers, we have to set them up in componentDidMount() and unsubscribe in componentWillUnmount()
// --> because of stateful logic, it's not possible to break these class components methods into smaller one to have cleaner code
// --> it would be much better if all the related code was together
// Rather than forcing a split based on lifecycle methods, hooks let us split one component into smaller functions based on what pieces are related


// 3. Noteworthy points

// --> we need react version 16.8 or higher to use hooks
// --> hooks are completely opt in, we don't have to learn or use them if we don't want to
// --> hooks don't contain any breaking changes and the release is 100% backwards-compatible
// --> the react teams don't have any plans of removing classes from react
// --> we can't use hooks inside class components, but our apps can use classes and functional components with hooks
// --> Hooks provide a more direct API to the react concepts we already know such as "props", "state", "context", "refs" and "lifecycle"





/* ********************************************* */
/* useState hook */
/* ********************************************* */


// The very first hook is the state hook

// Until now, if we started to write a functional component and ran into a situation where we needed to add state
// We would have to convert the component to a class component, and that because, state can only be used in class components
// But that now changes since the state hook allows us to use state in funcitonal components
// To understand how the state hook works, we're gonna take an example with a simple counter component
// First we'll do it classically with a class component, and then with a functional component using a state hook


// First a counter using a class component "ClassCounter.js"

// 1. First step : create a class component
// 2. Second step : create a state variable initialised to 0
// 3. Third step : create a method that is capable of changing this state value


// Second a counter using a functional component and the state hook

// 1. First step : create a functional component
// Now we need a different way to implement step 2 and 3
// So first we import the method from react in our component
// -->      import React, {useState} from 'react'

// Now how do we use it in our component ? Hooks are just functions so we simply call them

// useState() accepts an argument which is the initial value of the property
// It returns the current value of the property
// And a method that is capable of updating that state property
// -->      const [count, setCount] = useState(0)

// This syntax is called array destructuring which is a feature in ES6
// With this we have our set two and set three implemented

// So the method takes in as argumetn the changed state value
// -->      <button onClick={setCount(count + 1)}>Count {count}</button>

// And since this is a function call, we must convert it into an arrow function
// -->      <button onClick={() => setCount(count + 1)}>Count {count}</button>

// So finally we have : 
/*
    import React, {useState} from 'react'

    function HookCounter() {
        
        const [count, setCount] = useState(0)
        
        return (
            <div>
                <button onClick={() => setCount(count + 1)}>Count {count}</button>
            </div>
        )
    }

    export default HookCounter
*/


// Here are the basic rules for hooks

// 1. Only call hooks at the top level of our react function
// Don't call them inside loops, conditions or nested functions
// 2. Only call hooks from react function
// We must always call them from react functional components and not just any regular JS function





/* ********************************************* */
/* useState with previous state */
/* ********************************************* */


// Now we are going to look at how to set the state based on the previous state value
// Here we will still use an app with counters "HookCounterTwo.js"
// But we will use buttons to increment, decrement, and reset the state value

// By doing it like we did previously it works, but it is unsafe
// We will demonstrate that by using another button incrementing by 5 the count using a for loop
/*
    const incrementFive = () => {
        for(let i = 0; i>5; i++) {
            setCount(count + 1)
        }
    }
*/

// To overcome this we need to use the second form of the setCount function
// Instead of passing in the a value of the new state variable
// We pass in a function that has access to the old state value

// So any time we must update the state value based on the previous state value
// We should always go with the safer option of passing in a function that will set the new state value
// So we pass in a function to the state setter

// We can see the equivalent with class components in "ClassCounterTwo.js"





/* ********************************************* */
/* useState with object */
/* ********************************************* */


// Using an object as a variable with the useState hook

// We will use the "HookCounterThree.js" file
// We initialise set state with an object with two parameter and their respective values set to an empty string
// -->      const [name, setName] = useState({firstName: '', lastName: ''})

// !!!!! A state variable can be a number, a boolean, a string, an object or even an array !!!!!

// In the JSX we'll return a form with two inputs, one for the firstName and one for the lastName
// Below the input fields, we'll display two heading displaying the firstName and the lastName

// Next we need to handle the value attribute and the onChange event on the two input fields
// For the onCHange, we set it to event "e" arrow function that calls setName, and sets firstName to e.target.value
/*
    return (
        <div>
            <form>
                <input 
                    type='text' 
                    value={name.firstName} 
                    onChange={e => setName({firstName: e.target.value})} 
                />
                <input 
                    type='text' 
                    value={name.lastName}
                    onChange={e => setName({lastName: e.target.value})}
                />
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your last name is - {name.lastName}</h2>
            </form>
        </div>
    )
*/

// So when we change an input value, we update one of the two names properties using the setName function
// The problem is that when we change in one input field, then pass to another input field, the first one resets

// So something is happening to the state variable
// To see what is happening we are going to display the name state variable
// -->      <h2>{JSON.stringify(name)}</h2>

// In the browser we can see that we have firstName and lastName set to empty strings
// When we start typing in the firstName, the lastName is removed from the state variable

// This happens because useState doesn't automatically merge and update the object
// This is a key difference to setState when we come across it in class components

// The useState hook sets a function but will not merge the state, we have to do it manually
// In the setState function in the onChange attribute, we must first spread the name, and the update the value
// -->      onChange={e => setName({ ... name, firstName: e.target.value })} 
// So we say, copy all the name object, and then change the firstName property value





/* ********************************************* */
/* useState with array */
/* ********************************************* */


// How to use the state hook when the state variable is an array
// We'll see that in "HookCounterFour.js"

// We create this functional component and destructure the items and setItems variable
// Then we initialise useState with an empty array
// -->      const [items, setItems] = useState([])
/*
    import React, {useState} from 'react'

    function HookCounterFour() {
        
        const [items, setItems] = useState([])
        
        const addItem = () => {
            setItems([...items, {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }])
        }

        return (
            <div>
                <button onClick={addItem}>Add a number</button>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))}
                </ul>
            </div>
        )
    }

    export default HookCounterFour
*/





/* ********************************************* */
/* useState summary */
/* ********************************************* */


// 1. The useState hook lets you add state to functional components

// 2. In classes, the state is always an object

// 3. With the useState hook, the state doesn't have to be an object

// 4. The useState hook returns an array with 2 elements

// 5. The first element is the current value of the state, and the second element is a state setter function

// 6. New state value depends on the previous state value, you can pass a function to the setter function

// 7. When dealing with objects or arrays, we must always make sure to spread our state variable and then call the setter function





/* ********************************************* */
/* useEffect hook */
/* ********************************************* */


// Effects are used in class components for updating the DOM, fetching data from an API endpoint
// Or setting up subscriptions or timers

// Since the render method would be too early to perform side effects, we had to use lifecycle methods

// For example, we can consider updating the document title to the current counter value : 
/*
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`
    }
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`
    }
*/

// For another example, lets consider a timer :
/*
    componentDidMount() {
        this.interval = setInterval(this.AnimationPlaybackEvent, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
*/

// If we combine this : 
/*
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`
        this.interval = setInterval(this.AnimationPlaybackEvent, 1000)
    }
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
*/
// So we can see that completely unrelated code are sometimes put together


// --> The effect hook lets us perform side effects in functional components
// --> It is a close replacement for lifecycle methods such as componentDidMount, componentDidUnmount and componentWillUnmount





/* ********************************************* */
/* useEffect after render */
/* ********************************************* */


// Here we will do the same as in the first previous example, to update the title
// An example of how it would look like in a class component is in "ClassCounterOne.js"


// Then we setup the same with the functional component "HookCounterOne.js" without changing the title, which only uses useState
// Now to setup the updating of the title using effect hooks

// 1. First we import the useEffect method
// -->      import React, {useState, useEffect} from 'react'

// 2. useEffect is a function that takes a function as it's parameter, that will be called every time the component is re-rendered
/*
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
*/
// And that's it !


// What happens is that when we use the useEffect function, it's argumet (a function too) is called every time the component is rendered
// useEffect is placed inside the component which makes it easy to access the component state and props without having to write more code





/* ********************************************* */
/* Conditionally run effects */
/* ********************************************* */


// We learned that the useEffect hook is called after every single render !

// However, this might create a performance problem
// So we need a way to conditionally render an effect from a functional component


// First we'll see how it worked on a class component, usinf "ClassCounterOne.js"

// We are going to add a text input which will accept a name from the user
// The input updates the 'name' state onChange, but it does that in componentDidUpdate
// So even if we don't click the button that changes the title, on every key up on the input, the title is re-rendered anyway
// This is why it can cause performance issues
// --> componentDidUpdate is being used for two different functions
/*
    class ClassCounterOne extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                count: 0,
                name: ''
            }
        }
        
        componentDidMount() {
            document.title = `Clicked ${this.state.count} times`
        }

        componentDidUpdate(prevProps, prevState) {
            console.log('Updating document title')
            document.title = `Clicked ${this.state.count} times`
        }
        
        render() {
            return (
                <div>
                <input 
                    type='text' 
                    value={this.state.name}
                    onChange={e => {
                        this.setState({name: e.target.value})
                    }}
                />
                    <button onClick={() => this.setState({ count: this.state.count + 1})}>
                        Click {this.state.count} times
                    </button>
                </div>
            )
        }
    }
*/

// To optimise this we can compare the update value before and after the update
// And if the values have changed, we then conditionally re-render the title
// To do this we can use the prevProps and prevState parameters of the componentDidUpdate method
/*
    componentDidUpdate(prevProps, prevState) {
        console.log('Updating document title')
        if(prevState.count != this.state.count) {
            console.log('Updating document title')
            document.title = `Clicked ${this.state.count} times`
        }
    }
*/
// So now we are conditionally updating the title only when the count value changes


// Now we can apply that to the effect hook in "HookCounterOne.js"

// So we start by creating a new state variable for the name input value
// -->      const [name, setName] = useState('')

// Then we add our new input in the JSX
// -->      <input type='text' value={name} onChange={e => setName(e.target.value)} />

// Then we'll add a console.log in the useEffect function
// -->      console.log('useEffect updating document title')

// Now in the browser, the console logs the text also on the input interaction, similarly as above
// --> So how can we tell react to conditionally run useEffect only when the count value changes ?

// To do so, we pass in a second parameter to the useEffect function
// This parameter is an array, within it, we need to specify either props or state we need to watch for
// Only when one of these change, will this effect be executed
// For us, we just need the 'count' value
/*
    useEffect(() => {
        console.log('useEffect updating document title')
        document.title = `You clicked ${count} times`
    }, [count])
*/





/* ********************************************* */
/* Run effect only once */
/* ********************************************* */


// This is to mimic the componentDidMount() method of class components


// First we'll see how this works in class components with the "ClassMouse.js" component
/*
    class ClassMouse extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                x: 0,
                y: 0
            }
        }
        
        logMousePosition = e => {
            this.setState({ x: e.clientX, y: e.clientY })
        }

        componentDidMount() {
            window.addEventListener('mousemove', this.logMousePosition)
        }

        render() {
            return (
                <div>
                    X - {this.state.x} Y - {this.state.y}
                </div>
            )
        }
    }
*/
// In the browser, the coordinates update when the mouse moves
// In the class component, we set up the event listener only once with componentDidMount()


// Now to implement the same effects in a functional component called "HookMouse.js"
// Once the component created, we import the methods
// -->      import React, {useState, useEffect} from 'react'

// Then we create two state variables for x and y initialised to 0
/*
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
*/

// Then we call these values in the JSX
// -->      <div>Hooks X - {x} Y - {y}</div>

// Next we need to add an event listener on the mousemove, so we need the useEffect function
/*
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    })
*/

// Finally we need to define the function called in the event listener
/*
    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
*/

// Now in the browser it works, but the function is called an enormous amount of times, slowing down the efficiency
// So the function is called every time the component is re-rendered
// What we do is as second argument for the useEffect function, we specify an empty array
// Doing that, there is no reason guven to react to call this function when the component is re-rendered
/*
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    }, [])
*/

// !!!!! So we can mimic the componentDidMount() method by simply passing in an empty array as second argument of the useEffect function !!!!!





/* ********************************************* */
/* useEffect with cleanup */
/* ********************************************* */


// Now we will see how to replace the componentWillUnmount() lifecycle method with the effect hook


// First we will see how this is put in place in a classical class component
// We are going to add a button to show or hide the mouse event we implemented before

// So we create a new functional component called "MouseContainer.js" and import useState
// -->      import React, {useState} from 'react'

// Then we set up the useState to a boolean
// -->      const [display, setDisplay] = useState(true)

// We can then add our button to toggle displays
// -->      <button onClick={() => setDisplay(!display)}>Toggle display</button>

// And finally call the display and the HookMouse component below the button, (must import it in the functional component too)
// -->      {display && <HookMouse />}

// In the browser, when we toggle off the display, the mouse event is still triggered when the mouse moves
// So even though the component has been removed, the event listener that belongs to this component is still listening
// This is what the warning indicates in the console as well


// So how do we handle the cleanup code ?
// In class components, we simply needed to use componentWillUnmount() lifecycle method
/*
    componentWillMount() {
        window.removeEventListener('mousemove', this.logMousePosition)
    }
*/


// How can we mimic this lifecycle method using useEffect ?
// The useEffect function, takes a function as an argument, but can also return a function
// That returned function will be executed when the component will unmount
// So whatever we return is basically our cleanup function
/*
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
*/





/* ********************************************* */
/* useEffect with incorrect dependency */
/* ********************************************* */


// For this example we are going to create a counter that automatically increment every second
/*
    class IntervalClassCounter extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                count: 0
            }
        }
        
        componentDidMount() {
            this.interval = setInterval(this.tick, 1000)
        }
        
        componentWillUnmount() {
            clearInterval(this.interval)
        }

        tick = () => {
            this.setState({
                count: this.state.count + 1
            })
        }

        render() {
            return (
                <div>
                    <h1>{this.state.count}</h1>
                </div>
            )
        }
    }
*/


// Now we are going to do the same with hooks in a functional component
// We create the component and import useState
// Then we set the count state with an initial value of 0
// -->      const[count, setCount] = useState(0)

// The next step is to set the componentDidMount method with the tick function
// We'll set up the tick function first
/*
    const tick = () => {
        setCount(count + 1)
    }
*/

// Next we need useEffect to replicate componentDidMount
/*
    useEffect(() => {
        const interval = setInterval(tick, 1000)
    })
*/
// Now this effect is going to fire after every render

// Since we only want the timer to be set to zero when the componentDidMount, we simply pass in an empty array
/*
    useEffect(() => {
        const interval = setInterval(tick, 1000)
    }, [])
*/

// Next we need to replicate componentDidUnmount by returning a function
/*
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
*/

// Now we have an issue, since the counter doesn't tick in the browser

// By setting an empty array, we tod react to ignore any changes which stops the counter at 1
/*
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])
*/

// We must never forget to check for dependencies


// There is however another way to make this work while keeping the empty array
/*
    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }
*/
// This works since we use the prevCount


// Sometimes we may want to use a function inside useEffect


// !!!!! One last thing, is when we have multiple useEffect calls !!!!!






/* ********************************************* */
/* Fetching data with useEffect 1/3 */
/* ********************************************* */


// !!!!! 'Suspense' will soon be in charge of data fetching on React.js !!!!!

// First we import axios, useState and useEffect

// Then on JSONPlaceholder we open the post page and copy the link for the fetch request


// Now we create our state variable
// -->      const [posts, setPosts] = useState([])

// Then the useEffect function to fetch the data
/*
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    })
*/

// And finally we render it
/*
    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
*/

// Now it works since the console logs the fetched data
// We must render it using setState since the state is currently an empty array
/*
    .then(res => {
        console.log(res)
        setPosts(res.data)
    })
*/

// It works, however, the data is being fetched infinitely, we want it to be fetched only once !
// To do that we set the empty array as dependency in the useEffect function





/* ********************************************* */
/* Fetching data with useEffect 2/3 */
/* ********************************************* */


// Let's learn how to fetch individual posts by passing in the post Id to the get request
// To fetch a certain Id, we simply need to append the Id number to the url of JSONPlaceholder posts

// First step we need to create an input element for the user to type the id
// So we need a state variable
// -->      const [id, setId] = useState(1)

// Then we can call them in the JSX
/*
    <input 
        type="text"
        value={id}
        onChange={e = setId(e.target.value)}
    />
*/


// Now the first step will be to change the url enpoint
// -->              axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

// Now we need to change the state variable to one object and not an array of objects

// Now it works except the title doesn't change when we enter a second Id
// We need to precise id in the dependency !!!!!





/* ********************************************* */
/* Fetching data with useEffect 3/3 */
/* ********************************************* */


// Now we'll try to send in the fetch request when clicking on a button and not on typing in the input value
// We'll trigger the effect on button click

// First we'll create a new state
// -->          const [idFromButtonClick, setIdFromButtonClick] = useState(1)
/*
    import React, {useState, useEffect} from 'react'
    import axios from 'axios'

    function DataFetching() {
        
        const [post, setPost] = useState({})
        const [id, setId] = useState(1)
        const [idFromButtonClick, setIdFromButtonClick] = useState(1)

        const handleClick = () => {
            setIdFromButtonClick(id)
        }

        useEffect(() => {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
                .then(res => {
                    console.log(res)
                    setPost(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }, [idFromButtonClick])
        
        return (
            <div>
                <input 
                    type="text"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <button type='button' onClick={handleClick}>Fetch post</button>
                <div>{post.title}</div>
                </div>
                )
            }
            
            export default DataFetching
*/





/* ********************************************* */
/* useContext hook 1/3 */
/* ********************************************* */


// What is the react context API

// --> App Component --> ComponentA
// --> App Component --> ComponentB --> ComponeneD
// --> App Component --> ComponentC --> ComponentE --> ComponentF

// In this tree of componenets example only ComponentA, D & F are supposed to have the username props
// With effect, we can avoid to pass the prop to component that don't need it in order to pass it to the last three components

// --> Context provides a way to pass data through the component tree without having to pass props down manually at every level





/* ********************************************* */
/* useContext hook 2/3 */
/* ********************************************* */


// Before hooks, this is how context worked

// --> App Component --> ComponentA
// --> App Component --> ComponentB --> ComponeneD
// --> App Component --> ComponentC --> ComponentE --> ComponentF


// Here we will only use ComponentC, E & F

// To use context, we need to wrap components with consumers
// This is practicle but can be messy when multiple contexts are present to pass down multiple props
/*
    function ComponentF() {
        return (
            <div>
                <UserContext.Consumer>
                    {user => {
                        return (
                            <ChannelContext.Consumer>
                                {chanel => {
                                    return (
                                        <div>
                                            User context value {user}, channel context value {channel}
                                        </div>
                                    )
                                }}
                            </ChannelContext.Consumer>
                        )
                    }}
                </UserContext.Consumer>
            </div>
        )
    }
*/

// Just to consume two values, there is a lot of nesting

// This is where the useContext hook comes into picture
// This hook lets us consume context values in a more simpler way





/* ********************************************* */
/* useContext hook 3/3 */
/* ********************************************* */


// Before we saw how to create a context in three steps : 

// 1. Step one, create a context with the createContext() method, next in the App component
// -->      export const UserContext = React.createContext()

// 2. We provide the context value at a high level in the component tree

// 3. We consume the context using the render props pattern


// Now let's try to reproduce this using the useContext hook

// The first two steps provides the same
// The useContext Hook only makes the consumption of the context easier

// We'll try to consume the value in ComponentE

// 1. First step, we import useContext from React
// -->      import React, {useContext} from 'react'

// 2. Second step we import the context created in the App component
// -->      import {UserContext, ChannelContext} from '../App'

// 3. Third step we call in the useContext function with the context names as arguments
//Before we add this : 
/*
    function ComponentE() {
        return (
            <div>
                <ComponentF />
            </div>
        )
    }
*/
// And now : 
/*
    function ComponentE() {

        const user = useContext(UserContext)
        const channel = useContext(ChannelContext)

        return (
            <div>
                <ComponentF />
                {channel}
                {user}
            </div>
        )
    }
*/
// useContext returns the context value, so that is why we need to assign thelm to variables in order to reuse them in the code later
// We just need to render the values in the JSX of the render method





/* ********************************************* */
/* useReducer hook 1/8 */
/* ********************************************* */


// Now we will explain the what and why about the useReducer hook

// useReducer is a hook that is used for state management
// So this hook is an alternative to usesState

// What is the difference ?
// useState is built using useReducer

// When should we use one or the other
// We'll answer that once we have seen all the examples


// So far all the hooks we have used have a meaning
// So what is a reducer ?
// It is easier to understand if we know how to use Redux

// Let's dive a little bit more deeper in the JS reduce method
/*
    const array1 = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(array1.reduce(reducer)); --> returns 10
    console.log(array1.reduce(reducer, 5)); --> returns 15
*/
// So the reducer turns an array into a single value, hence reducing it


// The reduce method takes two parameter
// The useReducer hook will take two parameters too
// --> useReducer(reducer, initialState)
// --> newState = reducer(currentState, action)


// The reduce method returns a single value
// The useReducer hook returns a pair of values [newState, dispatch]
// The  dispatch method is specifically used to specify the action

// --> useReducer(reducer, initialState)
// --> reducer(currentState, action)





/* ********************************************* */
/* useReducer hook (simple state & action) 2/8 */
/* ********************************************* */


// In this part we will make our first simple example in "CounterOne.js"
// We will again do a counter component to be able to compare it with the one done with the useState hook
// We need to be able to increment, decrement and reset the count value so we add three buttons to the JSX

// Next we need a count variable that can be displayed in the JSX, this is where we need useReducer
// We'll break it down into each step


// 1. First step : we need to import useReducer from react
// -->      import React, { useReducer } from 'react'
// useReducer is also a function so we simply have to call it in our functional component
// -->      useReducer(reducer, initialState)
// It takes two parameters, the reducer function and an initial state


// 2. Second step : defining the two parameters
// We're going to define them outside the component

// We set the initial value to 0
// -->      const intialState = 0

// Now the reducer functino takes two parameters in an arrow function and rerturns a new state
/*
    const reducer = (state, action) => {
        return newState
    }
*/
// So the reducer functions accepts the current state, performs an action and returns a new state
// This "acion" is an instruction to the reducer function
// For our example, we can have three transitions of state, or actions : increment, decrement and reset
// The convention to do so is to use switch statements
// So in the body of the function we'll add a switch statement
/*
    const reducer = (state, action) => {
        switch(action) {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return initialState
            default:
                return state
        }
    }
*/


// 3. Third step : we need to get hold of a value to display in the JSX
// We also need a way to call the reducer function with the appropriate action
// -->      const [count, dispatch] = useReducer(reducer, initialState)

// So useReducer returns the current state which we have called "count" paired with a dispatch method
// This dispatch method allows us to execute the code coresponding to a particular action

// So now in the JSX we can add a <div> displaying the count value
// -->      <div>Count - {count}</div>

// And as well we can add a click handler to each of the buttons
/*
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
*/
// We have implemented useReducer with a simple state and a simple action !





/* ********************************************* */
/* useReducer hook (complex state & action) 3/8 */
/* ********************************************* */


// Now the second example for the useReducer hook in "CounterTwo.js"
// Here we're going to be using a state object and an action object
// This is a pattern that will be familiar to redux users

// We'll copy the code for CounterOne.js for starters

// Next we'll set the initial state to an object
/*
    const initialState = {
        firstCounter: 0
    }
*/

// Now we'll change the dispatch to call an object with the "type" parameter
// -->      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>

// Finally in the reducer function, the switch parameter will change as well
// -->      switch(action.type) {...

// Finally in the swithc statement we need to return the state object
// -->      return { firstCounter: state.firstCounter + 1 }

// And that is pretty much it, the component state and action are now objects


// But what is the advantage of using this particular pattern ?

// First scenario : concerning the value by which we need to increment or decrement the counter
// We can change it easily by adding another property
/*
    const reducer = (state, action) => {
        switch(action.type) {
            case 'increment':
                return { firstCounter: state.firstCounter + action.value }
            case 'decrement':
                return { firstCounter: state.firstCounter - action.value }
            case 'reset':
                return initialState
            default:
                return state
        }
    }

    function CounterTwo() {
        const [count, dispatch] = useReducer(reducer, initialState)

        return (
            <div>
                <div>Count - {count.firstCounter}</div>
                <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
                <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
                <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
        )
    }
*/
// So we can use data in the reducer function


// The second scenario is about state being an object
// If we suppose we wanted to maintain two different objects
// That is really simple if our state is an object
/*
    const initialState = {
        firstCounter: 0,
        secondCounter: 10
    }
*/
// Now we have two properties in the state object, but changing only one at the time
// to change the ewpected output we have to modify the return statements to merge the state properties
// We can do that using the spread "..." operator
/*
    const reducer = (state, action) => {
        switch(action.type) {
            case 'increment':
                return { ...state, firstCounter: state.firstCounter + action.value }
            case 'decrement':
                return { ...state, firstCounter: state.firstCounter - action.value }
            case 'increment2':
                return { ...state, secondCounter: state.secondCounter + action.value }
            case 'decrement2':
                return { ...state, secondCounter: state.secondCounter - action.value }
            case 'reset':
                return initialState
            default:
                return state
        }
    }
*/
// We can now add the JSX for the second counter
/*
    return (
        <div>
            <div>First counter : {count.firstCounter}</div>
            <div>Second counter : {count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <div>
                <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment counter 2</button>
                <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement counter 2</button>
            </div>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
*/


// So by using state as an object, we can keep track of two different counters
// By using action as an object we are able to pass additional data to the reducer function





/* ********************************************* */
/* Multiple useReducers 4/8 */
/* ********************************************* */


// If we need two counters with the exact same state transition, there is a much simpler alternative
// That is to use multiple useReducer hooks, we'll see that in "CounterThree.js"

// So we can call multiple useReducers in the functional component
/*
    import React, { useReducer } from 'react'

    const initialState = 0
    const reducer = (state, action) => {
        switch(action) {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return initialState
            default:
                return state
        }
    }

    function CounterThree() {
        const [count, dispatch] = useReducer(reducer, initialState)
        const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

        return (
            <div>
                <div>Count - {count}</div>
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
                <div>Count - {countTwo}</div>
                <button onClick={() => dispatchTwo('increment')}>Increment</button>
                <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
                <button onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>
        )
    }

    export default CounterThree
*/

// So here we are making use of multiple reducers making use of the same reducer functions
// This avoids the complexity of merging the state if it where to be an object
// It also prevents us of duplicating code in the reducer function (like in CounterTwo)





/* ********************************************* */
/* useReducer with useContext 5/8 */
/* ********************************************* */


// So far we have seen the use of useReducer with local state management (at the component level)
// But at some points we might want to share the state between components
// That would be a global state management
// We can do that by combining useReducer with useContext

// Now to explain the scenario in simple terms
// If we consider an application with 3 components that each maintain their own components
// If the three components where to share the counter value, they would need to share the same state

// We create component A, B, C, D, E & F each nested in each other like in the useContext and context lessons
// Our goal is to maintain a state in App.js and modify that state from components A, D & F
// For that we have two main steps


// 1. First step : 
// We create a counter in App.js using the reducer hook

// 2. Second step : 
// We provide and consume the counter context in the required components


// 1. First step : 

// In app component we import useReducer
// -->      import { useReducer } from 'react'

// Then we create the reducer function and the initial state
/*
    const initialState = 0
    const reducer = (state, action) => {
        switch(action) {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return initialState
            default:
                return state
        }
    }
*/

// Then we call {count} in the JSX and in the app function we destructurate the count
// -->        const [count, dispatch] = useReducer(reducer, initialState)

// Now we want to call the dispatch function inside the nested components so this is where begins step two


// 2. Second step : 

// We start by creating a concept and import the useContext API
// --> export const CountContext = React.createContext()

// Now we can wrap everything with our new context provider
// On the provider we can specify the value attribute with an object
// -->      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>

// Then we import useContext from react, and CountContext from App.js in our components
/*
    import React, { useContext } from 'react'
    import {CountContext} from '../App.js'
*/

// Then we call our CountContext in our functional components
// -->      const countContext = useContext(CountContext)

// And finally we can call them in the JSX
// -->      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>





/* ********************************************* */
/* Fetching data with useReducer 6/8 */
/* ********************************************* */


// We already saw this with the useEffect and the useState hooks
// This time we will do the same with the useEffect and the useReducer hook
// We will compare both methods in which the scenario will be the same

// As soon as the component mounts we will make an API call to fetch data
// Will the data is being fetched, we will display a loading indicator
// When the data is fetched successfully, we will hide the loading indicator and display the data
// If there is an error fetching the data, we will hide the loading indicator and display an error message

// So we will do that in "DataFetchingOne.js"

// So first we install axios
// --> npm install axios

// Then we can import useState and useEffect
// -->      import React, { useState, useEffect } from 'react'

// Then we import axios as well
// -->      import axios from 'axios'

// Then we need to define the state variables required for this data fetching component
/*
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('true')
    const [post, setPost] = useState({})
*/

// Now we need to make the API call and set the appropriate state
/*
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('Something went wrong')
            })
    }, [])
*/

// And we can call them in the JSX
/*
    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
*/


// So to sum up we have declared three variables with the useState hook
// Depending on the fetch request response or an error
// We apply the appropriate state transitions





/* ********************************************* */
/* Fetching data with useReducer 7/8 */
/* ********************************************* */


// Now we will do the same thing using useReducer and useEffect
// We will see that in "DataFetchingTwo.js"


// 1. First step :

// First we import the two hooks necessary for our component
// -->      import React, { useReducer, useEffect } from 'react'

// Then we can import axios as well
// -->      import axios from 'axios'


// 2. Second step : 

// Now we need to declare the initial state and define the reducer function
// For the state, we define the same than previously, but this time we define them as property of an object
/*
    const initialState = {
        loading: true, 
        error: '', 
        post: {}
    }
*/

// Next is the reducer function
/*
    const reducer = (state, action) => {
        switch(action.type) {
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    post: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    post: {},
                    error: 'Something went wrong'
                }
            default:
                return state
        }
    }
*/


// 3. Third step : 

// We need to invoke useEFfect and useReducer to fetch the data and set the state
// --       const [state, dispatch] = useReducer(reducer, initialState)

// Now we can do our fetching request using useEffect
/*
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({type: 'FETCH_SUCCESS', payload: response.data})
            })
            .catch(error => {
                dispatch({type: 'FETCH_ERROR'})
            })
    }, [])
*/

// Finally we can add our JSX return statement
/*
    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
*/
// We have to add "state. ..." since all the parameters are now part of the state object


// Now the states are grouped in an object, and the state transitions are grouped in objects as well in the different switch() cases





/* ********************************************* */
/* useState v/s useReducer 8/8 */
/* ********************************************* */


// 1. Regarding the state type

// If the state is a number, a string, a boolean it is more intersting to use the useState hook
// If the state is an object or an array it is better to use the useReducer hook


// 2. Number of state transitions

// If we have only one or two the useState kook will be the best choice
// If we have much more state transitions it is better to use the useReducer hook


// 3. How related are the state transitions

// If they are not we should use the useState hook
// If they are, we should use the useReducer hook


// 4. The business logic

// If there is none, we should use the useState hook
// If there is a complex business logic we should use the useReducer hook


// 5. Local state or global state

// If it is to maintain a local state, we should use the useState hook
// If it is to maintain a global state, we should use the useReducer hook





/* ********************************************* */
/* useCallback hook */
/* ********************************************* */


// We have the example in "ParentComponent.js"

// ParentComponent does 5 things : 

// 1. It displays the title
// 2. It displays a person's age
// 3. It provides a button to increment that person's age
// 4. It displays a person's salary
// 5. It provides a button to increment that person's salary


// But couldn't we do this simpler and not use 4 different components
// We must think about performance optimisation
// All the console logs informs us about all the rendering that happens while using the app
// There is a lot !!!

// Each time we click a button, every component is re-rendered !
// It is ok for this simple app, but for a larger app it would be complicated for performance

// To improve performance we have to restrict re-renders to only the components that need to re-render
// We can improve this using React.memo

// React.memo is a higher order component that will prevent a functional component to re-render if it's props or state did not change
// So we can export each component using the React.memo("component") method
// Once this is done, only the necessary components re-render if they have a change in their props or state

// However when we increment the age, the increment salary button is re-rendered too
// This is because a new increment salary functino is created each time the component re-renders
// When dealing with function we always have to consider reference equality

// Even though the two functions have the exact same behavior it does not mean they are equal to each other
// So the function before the re-render is different to the function after the re-render
// And since the function is a prop, React.memo sees that the prop has changed and will not prevent the re-render


// How can we fix this : the useCallback hook
// useCallback is a fook that will return a memorised version of the callback function 
// It will only change if one of the dependencies has changed

// In our example it will mean that the useCallback hook will "cache" the incrementSalary function
// And it will return that if the salary is not incremented
// If the dependency has changed, only then a new function will be returned


// Why do we need useCallback
// It is useful when passing callbacks to optimised child components that rely on reference equality to prevent unnecessary renders


// How can we use it

// 1. First step : 

// We need to import it
// -->      import React, { useState, useCallback } from 'react'


// 2. Second step :

// We need to call useCallback
// This function accepts a callback function as it first parameter, and an array of dependencies as it's second parameter
/*
    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
*/

// And that is it ! It is use to optimise performance





/* ********************************************* */
/* useMemo hook */
/* ********************************************* */


// useMemo is another hook that is concerned for performance optimisation
// We'll see that in an example in the "Counter.js" component

// So in that file we'll initialise two counter values with useState so we must first import useState
// -->      import React, { useState } from 'react'

// Then we can initialise our two counter values with the useState API
// -->      const [counterOne, setCounterOne] = useState(0)
// -->      const [counterTwo, setCounterTwo] = useState(0)

// Next we will create two functions to increment the count value
/*
    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
*/

// Finally in the JSX we will display two buttons with the count values and a handler to increment them
/*
    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One : {counterOne}</button>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two : {counterTwo}</button>
            </div>
        </div>
    )
*/


// Now we want to display near the count value an indicator saying if the count value is an odd or an even number

// So to do that we start by creating the function in the functional component's body
/*
    const isEven = () => {
        return counterOne % 2 === 0
    }
*/

// And then we can call it in the JSX
/*
    <div>
        <button onClick={incrementOne}>Count One : {counterOne}</button>
        <span>{isEven() ? ' Even' : ' Odd'}</span>
    </div>
*/


// Now if we'd slow down a lot the isEven function, when clicking on counterOne, it will take some time to re-render
// However, even the counterTwo button will be slowed down
// That is because every time the state updates, the component re-renders

// So we need to tell react, not to recalculate certain values when it is not necessary
// Especially the ones that take a long time to compute
// This is where the useMemo hook comes into picture

// useMemo will only recompute "cached" values only when one of the dependencies have changed


// So first we import useMemo from react
// -->      import React, { useState, useMemo } from 'react'

// Then within the functional component's body, we call the useMemo hook
// As first parameter, we enter the function whose return value has to be cached
// So we enter the isEven function body as first argument

// In our second parameter, we need to specify our dependencies
// These will be counterOne for this function
/*
    const isEven = useMemo(() => {
        let i = 0
        while (i<200000000) i++
        return counterOne % 2 === 0
    }, [counterOne])
*/

// Finially on our JSX, we remove the parenthesis from isEven since it isn't a function anymore but a variable
// -->      <span>{isEven ? ' Even' : ' Odd'}</span>


// So we can see that useCallback and useMemo are very similar, what is the difference ?

// useCallback caches the provided function instance itself
// useMemo invokes the provided function and caches it's result

// -->      So if we need to cache a function, we should use useCallback
// -->      And if we need to cache the result of a function, we should use useMemo





/* ********************************************* */
/* useRef hook 1/2 */
/* ********************************************* */


// This hook makes it possible to access DOM nodes directly within functional components
// For our example we'l be doing quite a common use which is 'focusing a text input'
// We want the username field to be focused when loading the page
// We will demonstrate this example in the "FocusInput.js" functional component


// First we need to be able to use a function like componentDidMount()
// Since we need the element to be focused only once, and that when the component is mounted

// We can do this using the useEffect hook, so we start by importing it
// -->      import React, { useEffect } from 'react'

// Then within the component we call useEffect
// useEffect takes an arrow function, and an array as parameters
// Since we want the function to be called only once, we leave the array empty
// Inside the function, we want to focus the input element
// To do that we need the ref hook, which we can do in three simple steps


// 1. First step

// We need to import the useRef API
// -->      import React, { useEffect, useRef } from 'react'


// 2. Second step

// We need to create a variable calling useRef and passing in the initial value
// -->      const inputRef = useRef(null)
// In our case, we initialise it with the null value

// Once we created it, we need to attach it to the input element
// To do that we make use of the reserved "ref" attribute
// -->      <input ref={inputRef} type="text" />


// 3. Third step

// We need to call the focus() method on the input element in the useEffect() function
// -->      inputRef.current.focus()

// The current property is proper to react
// React will set the ref's current property to the corresponding DOM node
// Hence, this is how you actually access the input element
/*
    import React, { useEffect, useRef } from 'react'

    function FocusInput() {
        
        const inputRef = useRef(null)

        useEffect(() => {
            inputRef.current.focus()
        }, [])

        return (
            <div>
                <input ref={inputRef} type="text" />
            </div>
        )
    }

    export default FocusInput
*/





/* ********************************************* */
/* useRef hook 2/2 */
/* ********************************************* */


// To demonstrate the second use of the useRef hook we will start by showing the difference with a class component "ClassTimer.js"
// We want to implement an interval timer that increments every second and displays the value in the browser

// First we'll create an instance field or class property which will point to the interval timer

// THen we'll set the state for the timer to 0 in a constructor

// Then we create the componentDidMount() lifecycle method to increment the timer with setInterval
// setInterval takes a callback function as it's first argument in which we set the state to the previous state + 1
// The second argument is the time interval which we set to 1000ms

// Then we can create the componentWillUnmount() lifecycle method to reset the timer when the component unmounts
// So we call to clearInterval with the interval class property

// Then finally we call the timer in the JSX
/*
    import React, { Component } from 'react'

    class ClassTimer extends Component {
        interval

        constructor(props) {
            super(props)
        
            this.state = {
                timer: 0
            }
        }
        
        componentDidMount() {
            this.interval = setInterval(() => {
                this.setState(prevState => ({timer: prevState.timer + 1}))
            }, 1000)
        }

        componentWillUnmount() {
            clearInterval(this.interval)
        }

        render() {
            return (
                <div>
                    Class Timer - {this.state.timer}
                </div>
            )
        }
    }

    export default ClassTimer
*/

// Now we want to add a clear timer button
// -->      <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>

// So this has worked !

// Now if we want to replicate that exact same scenario with a functional component in "HookTimer.js"


// First we need a state variable to hold the timer value

// So we need to import useState
// -->      import React, { useState } from 'react'

// Then we can create our state variable
// -->      const [timer, setTimer] = useState(0)

// Next we need to replicate the behavior of componentDidMount() and componentWillUnmount()
// For that we have the effect hook so we start by importing it
// -->      import React, { useState, useEffect } from 'react'
// Then we call useEffect() with as first parameter an arrow function within which we set up our timer
// After that we need to return a clean up function that will clear the interval
// Finally we specify an empty dependency array to useEffect
// Then we can call the timer value in the JSX and it is all good
/*
    function HookTimer() {

        const [timer, setTimer] = useState(0)

        useEffect(() => {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1)
            }, 1000)
            return () => {
                clearInterval(interval)
            }
        }, [])

        return (
            <div>
                Hook Timer - {timer}
            </div>
        )
    }
*/

// The last thing is we must clear this timer value on a button click
// -->      <button onClick={() => clearInterval(interval)}>Clear Hook Timer</button>

// When we look at the browser, there is a problem since interval is not defined
// It is only defined in the useEffect method

// So we can clear the counter from the effect hook but not from a handler
// This is where useRef comes to the rescue

// Although useRef can hold a reference to a DOM node using the ref attribute
// It can aslo be used to store inimutable values

// What is great about useRef is that the values will persist through the re-renders
// While also not causing any additional renders when it's value changes


// So we start by importing the useRef API
// -->      import React, { useState, useEffect, useRef } from 'react'

// And within the component we invoke it and assign it to a variable
// -->      const intervalRef = useRef()

// Finally we can change interval with intervalRef.current in our useEffect() method
/*
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
*/

// And the same in the event handler
// -->      <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>





/* ********************************************* */
/* Other hooks */
/* ********************************************* */


// Three rare hooks won't be explained here


// 1. useImperativeHandle()

// --> useImperativeHandle(ref, createHandle, [deps])
// This hook personalises the instance that is exposed to the parent component during the use of refs
// As alwaus, we should better avoid using imperative code manipulating refs in most of the cases. 

// This hook is built to be used with forwardRef
/*
    function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
        inputRef.current.focus();
        }
    }));
    return <input ref={inputRef} ... />;
    }
    FancyInput = forwardRef(FancyInput);
*/
// In this example, a parent component using
// -->      <FancyInput ref={inputRed} />
// Could call
// -->      inputRef.current.focus()


// 2. useLayoutEffect()

// This hook is similar to useEffect(), except it is called synchronously after the DOM mutations have happened
// We can use it to inspect the DOM layout and make a new render synchronously
// Planned updates in useLayoutEffect() are treated synchronously before the browser proceded to the layout


// 3. useDebugValue()

// -->      useDebugValue(value)

// We can use this hook to display a personalised label for custom hooks in react dev tools

// For example

/*
    function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    // ...

    // Affiche une étiquette dans les DevTools à côté de ce Hook
    // par exemple, "FriendStatus: En ligne"
    useDebugValue(isOnline ? 'En ligne' : 'Hors-ligne');

    return isOnline;
    }
*/

// It is not advised to use these labels to each custom hooks
// It is mostly useful for custom hooks coming from shared libraries

// This hook can accept a formating function as an optional second parameter
// This function is called only if the hooks are inspected
// It receives a debugging value as argument and should forward the formated value

// For example, a personalised hook that sends a "date" value, can avoid calling unnecessarily the toDateString() function
// This can be done by calling this formating
// -->      useDebugValue(date, date => date.toDateString());





/* ********************************************* */
/* Custom hooks introduction 1/4 */
/* ********************************************* */


// So far we viewed several hooks built in the React library
// -->      useState
// -->      useEffect
// -->      useContext
// -->      useReducer
// -->      useCallback
// -->      useMemo
// -->      useRef

// But what is stopping us from building our own hooks ?
// It is encouraged to build our own hooks by extracting component logic into reusable functions
// So it is possible for anyone to create our own custom hooks

// A custom hook is basically a JS function whose name starts with "use"
// A custom hook can also call other hooks if required

// They can be a simpler alternative to Higher Order Components or to the Render Props method





/* ********************************************* */
/* useDocumentTitle custom hook 2/4 */
/* ********************************************* */


// In this first example, we'll create a custom hook that updates the document title
// We'll split this example into two halves

// First we're going to create a counter and set the document title as we normally would without using custom hooks
// Second, we're going to see how to extract the logic into a custom hook


// First part : we're going to create a new component called "DocTitleOne.js"

// 1. We want to create a count value
// Then we want to update the title on every render to the current count value

// So we start by importing the useState and useEffect hooks
// -->      import React, { useState, useEffect } from 'react'

// Then we create a count state variable
// -->      const [count, setCount] = useState(0)

// Next in the JSX we add a button to increment this count value
// -->      <button onClick={() => setCount(count + 1)}>Count - {count}</button>

// Lastly we need to update the document title to the current count value
/*
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
*/
// Now it works as expected


// Second part : now we want to update the document title again, but this time from another component

// We'll do that in another component called "DocTitleTwo.js"
// We keep the same code as in DocTitleOne but change DocTitleOne to DocTitleTwo

// It works as well, however we are repeating our code and our logic in two seperate components
// This is where a custom hook makes sense

// So in our example we can create a custom hook that extracts the logic updating the document title
// We can then reuse our custom hook into different components

// So we'll create a new folder called "hooks"
// Within this new folder we'll create a new hook called "useDocumentTitle.js"
// By convention we always start custom hooks names with "use"

// In this new component we create a boiler plate functional component
// We copy paste our useEffect() function
// We also need to pass in 'count' as a parameter to our hook
// As well as import the useEffect() API
// We can get rid of the return method of the functional component
// And since we are not returning any JSX we can get rid of importing react as well
/*
    import { useEffect } from 'react'

    function useDocumentTitle(count) {
        useEffect(() => {
            document.title = `Count ${count}`
        }, [count])
    }

    export default useDocumentTitle
*/

// Back in the component, we can now call our custom hook with the count variable as it's parameter
// We must also import our new hook, and we can get rid of importing the useEffect hook
/*
    import React, { useState } from 'react'
    import useDocumentTitle from '../hooks/useDocumentTitle'

    function DocTitleOne() {
        const [count, setCount] = useState(0)

        useDocumentTitle(count)

        return (
            <div>
                <button onClick={() => setCount(count + 1)}>Count - {count}</button>
            </div>
        )
    }

    export default DocTitleOne
*/

// It works in both cases !
// Now we are reusing logic instead of duplicating it





/* ********************************************* */
/* useCounter custom hook 3/4 */
/* ********************************************* */


// In our second example we'll be creating a new custom hook called "useCounter.js"
// This hook will make it possible to reuse logic for a simple counter

// We're gonna again tackle this problem in two parts
// In the first part we'll create classic components
// In the second part we'll implement the custom hook to reuse that code


// First part : we'll use the file "CounterCustomOne.js"

// Once we created the function we need three buttons, to increment, decrement and reset the counter value

// First we're gonna import useState from react
// -->      import React, { useState } from 'react'

// Then we create our count state variable
// -->      const [count, setCount] = useState(0)

// Next we need to define three methods to increase, derease and reset the counter value
/*
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }
*/

// Finally we can add the JSX
/*
    <div>
        <h2>Count = {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
*/

// It works ! But what if we needed this counter functionality in another component ?
// So we create the "CounterCustomTwo.js" and copy paste the code from CounterCustomOne
// But once again we are duplicating code, so we can attack part two and create a custom hook


// Second part : we'll create a new custom hook in the "hook" folder called "useCounter.js"

// So we need to copy the state variable as well as the three methods from one of the counter components
// And paste it in our new custom hook, hence we need to import useState, and we can remove react from the import
/*
    import { useState } from 'react'

    function useCounter() {
        const [count, setCount] = useState(0)

        const increment = () => {
            setCount(prevCount => prevCount + 1)
        }

        const decrement = () => {
            setCount(prevCount => prevCount - 1)
        }

        const reset = () => {
            setCount(0)
        }
        
        return [count, increment, decrement, reset]
    }

    export default useCounter
*/

// Now we need to way to access the counter value and the methods from the counter components
// So instead of returning some JSX, our hook will return an array of values

// We can now access them by using an array destructurating in our counter components
/*
    import React from 'react'
    import useCounter from '../hooks/useCounter'

    function CounterCustomOne() {

        const [count, increment, decrement, reset] = useCounter()

        return (
            <div>
                <h2>Count = {count}</h2>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        )
    }

    export default CounterCustomOne
*/

// Custom hooks can do plenty of stuff
// For example we can change our initial value from 0 to a parameter called initialCount
/*
    function useCounter(initialCount = 0) {
        const [count, setCount] = useState(initialCount)

        const increment = () => {
            setCount(prevCount => prevCount + 1)
        }

        const decrement = () => {
            setCount(prevCount => prevCount - 1)
        }

        const reset = () => {
            setCount(initialCount)
        }
        
        return [count, increment, decrement, reset]
    }
*/

// So now if at all this variable is specified, it is used, else, 0 is used
// In CounterCustomTwo we will change the initial value to 10
// -->      const [count, increment, decrement, reset] = useCounter(10)

// So now in the browser, the second counter starts at 10 and the first one at 0

// We can also customise the value to increment or decrement
// We add the value parameter to the useCounter function
// As well as replace it in the increment and decrement methods
/*
    function useCounter(initialCount = 0, value) {
        const [count, setCount] = useState(initialCount)

        const increment = () => {
            setCount(prevCount => prevCount + value)
        }

        const decrement = () => {
            setCount(prevCount => prevCount - value)
        }

        const reset = () => {
            setCount(initialCount)
        }
        
        return [count, increment, decrement, reset]
    }
*/

// In our counters we can change as well
// -->      const [count, increment, decrement, reset] = useCounter(10, 10
// -->      const [count, increment, decrement, reset] = useCounter(0, 1)





/* ********************************************* */
/* useInput custom hook 4/4 */
/* ********************************************* */


// As before we will do this in two parts
// In this example were going to submit a simple form where the user can enter his firstname and lastname


// First part : we'll be working in the "UserForm.js" functional component

// We need two state variables for firstname and lastname, so we'll start by importing useState
// -->      import React, { useState } from 'react'

// Then we can set up our two state variables
// -->      const [firstName, setFirstName] = useState('')
// -->      const [lastName, setLastName] = useState('')

// Then for the JSX we create a <form> with two input elements for firstName and lastName respectively
// Next we need to change these inputs into controlled components
// Finally we'll add a submit button and create a handler for the form onSubmit
/*
    import React, { useState } from 'react'

    function UserForm() {
        
        const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
        
        const submitHandler = e => {
            alert(`Hello ${firstName} ${lastName}`)
        }

        return (
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>First name</label>
                        <input 
                            value={firstName} 
                            onChange={e => setFirstName(e.target.value)} 
                            type="text" 
                        />
                    </div>
                    <div>
                        <label>Last name</label>
                        <input 
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            type="text"
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

    export default UserForm
*/


// Second part : What we need is a custom hook to encapsulate this controlled component behavior for an input element

// That is binding the value and onChange attribute
// We'll do that in a new file called "useInput.js"

// So after have imported useState and removed the import of React
// We can set a new state variable that can keep track of the input fields value
// -->      const [value, setValue] = useState(initialValue)

// Then we create a reset function that sets the value to the initial value
/*
    const reset = () => {
        setValue(initialValue)
    }
*/

// Next we create an object with two properties, value assigned to value, and onChange that takes the value of the event target

// Finally we can return an array with value, bind and reset
/*
    import { useState } from 'react'

    function useInput(initialValue) {
        const [value, setValue] = useState(initialValue)

        const reset = () => {
            setValue(initialValue)
        }

        const bind = {
            value, // same as 'value: value,'
            onChange: e => {
                setValue(e.target.value)
            }
        }

        return [value, bind, reset]
    }

    export default useInput
*/

// Now we need to incorporate this in our component
/*
    import React from 'react'
    import useInput from '../hooks/useInput'


    function UserForm() {
        
        // const [firstName, setFirstName] = useState('')
        // const [lastName, setLastName] = useState('')
        
        const [firstName, bindFirstName, resetFirstName] = useInput('')
        const [lastName, bindLastName, resetLastName] = useInput('')

        const submitHandler = e => {
            alert(`Hello ${firstName} ${lastName}`)
            resetFirstName()
            resetLastName()
        }

        return (
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>First name</label>
                        <input 
                            // value={firstName} 
                            // onChange={e => setFirstName(e.target.value)} 
                            {...bindFirstName}
                            type="text" 
                        />
                    </div>
                    <div>
                        <label>Last name</label>
                        <input 
                            // value={lastName}
                            // onChange={e => setLastName(e.target.value)}
                            {...bindLastName}
                            type="text"
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

    export default UserForm
*/
// We destructurate the two arrays from returned by useInput()
// We use the spread operator to use the two elements of our bind object (value and onChange)
// That way we can assign them to the input attributes value and onChange





/* ************************************************************************************************************ */
/* ************************************************************************************************************ */
/* ************************************************************************************************************ */






/* ********************************************* */
/* React Table Introduction */
/* ********************************************* */


// 1. Why Table component or library ?

// Having to build some sort of a table to visualise the data is inevitable
// Building your own table component can be challenfing and time consuming

// We will be using the react-table component library
// It is a collection of hooks for building powerful tables and data grid experiences
// TThese hooks are lightweight, composable, and ultra-extensible
// They do not render any markup or style for us

// --> So it is a table utility and ot a table component


// 2. What is in the library ?

// React table setup, basic table
// Footers and group headers
// Sorting, filtering and pagination
// How to select rows
// Column ordering, column hiding, and sticky columns





/* ********************************************* */
/* Getting started */
/* ********************************************* */


// 1. Preparation

// First of all we create a new react app
// Then we can install the react-table dependency
// We can now see it in our package.json file

// 2. Mock data

// Now we'll be setting up some mock data
// To do that we'll use "mockaroo"

// Once we have chosen our fields, we'll download it as a json file
// And paste it in a new "components" folder in our "src" folder of our app





/* ********************************************* */
/* Basic table */
/* ********************************************* */


// Now we'll implement the basic react table, here are the steps to follow

// 1. We need to get the data we want to display
// 2. Define the columns for our table
// 3. Use the data and columns defined to create a table instance
// 4. Define a basic table structure using plain HTML
// 5. Use the table instance created in step 3 to brig life to the HTML defined in step 4
// 6. Include the desired CSS


// 1. Getting hold of the data we want to display

// We already have it in our json mock data


// 2. Defining our columns

// We'll start by creating a new file in our components folder called "columns.js"
// Inside it we'll define and export a variable named COLUMNS
// This will be an array of objects that will represent each column
// In each object we'll define a "Header" property
// Now we have assigned a label for each of the columns

// We now need to associate each columns with our JSON data
// For that we need to specify the accessor property for each of the columns
// So we define a second property called "accessor" for each object
// We assign to this property the equivalent property of our JSON data objects
/*
    export const COLUMNS = [
        {
            Header: 'id',
            accessor: 'id'
        },
        {
            Header: 'First Name',
            accessor: 'first_name'
        },
        {
            Header: 'Last Name',
            accessor: 'last_name'
        },
        {
            Header: 'Date of Birth',
            accessor: 'date_of_birth'
        },
        {
            Header: 'Country',
            accessor: 'country'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        }
    ]
*/
// We didn't take the email and age columns in our COLUMNS array so they will not be rendered in our UI


// 3. Creating a table instance

// This is where we'll start using the react-table library

// We'll create the "BasicTable.js" functional component
// Then we can import our basic needs
/*
    import { useTable } from 'react-table'
    import MOCK_DATA from './MOCK_DATA.json'
    import { COLUMNS } from './columns'
*/

// Then we'll use the useTable hook that gives an object with our columns and data
/*
    useTable({
        columns: COLUMNS;
        data: MOCK_DATA
    })
*/

// However, it is recommended to use the useMemo() hook when using useTable()
// So we can import that hook as well , and create our variables
/*
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
*/
// This allows us to be sure that the data won't be recreated on each render

// That way we can call them in our useTable() hook
/*
    useTable({
        columns: columns,
        data: data
    })
*/
// Or thanks to ES6
/*
    useTable({
        columns,
        data
    })
*/
// Finally we can create our table instance to finalise step 3*
/*
    const tableInstance = useTable({
        columns,
        data
    })
*/


// 4. Preparing our basic JSX table
/*
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
*/


// 5. Matching our tableInstance with our JSX

// So now we need to apply our tableInstance inside our JSX to render our data in the UI
// First we'll destructurate our tableInstance variable
/*
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
     } = tableInstance
*/
// These are functions and arrays that the useTable hook has given to us to enable easy table creation
// We need to use all of these in our HTML to enable react-table to work as intended

// First we destructurate getTableProps() in the table tag, and getTableBodyProps in the tbody tag
// Then inside the thead tag, we map the headerGroups and call a function calling the tr and th tags
// Inside the tr tag, we destructurate the headerGroup by calling getHeaderGroupProps()
// Then we map the headers inside the headerGroup, and call the th tag destructuring the columns
/*
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}

            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
*/
// We do the same thing with the body of the table


// 6. Now to include the styling of our table component

// We'll just paste some content from W3Schools in a "table.css" file in our components folder
/*
    table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    
    table td, table th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    table tr:nth-child(even){
        background-color: #f2f2f2;
    }

    table tr:hover {
        background-color: #ddd;
    }

    table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #4CAF50;
        color: white;
    }
*/
// Then we can import it in our BasicTable component
// -->      import './table.css'
// Finally we import our BasicTable in our App.js, and run it and it works !

// To finish we can merge our variables into one and get rid of the tableInstance variable





/* ********************************************* */
/* Footers */
/* ********************************************* */


// Now we'll add a footer to our table


// 1. We'll specify a footer property to our column objects in our columns component
/*
    export const COLUMNS = [
        {
            Header: 'Id',
            Footer: 'Id',
            accessor: 'id'
        },
        {
            Header: 'First Name',
            Footer: 'First Name',
            accessor: 'first_name'
        },
        {
            Header: 'Last Name',
            Footer: 'Last Name',
            accessor: 'last_name'
        },
        {
            Header: 'Date of Birth',
            Footer: 'Date of Birth',
            accessor: 'date_of_birth'
        },
        {
            Header: 'Country',
            Footer: 'Country',
            accessor: 'country'
        },
        {
            Header: 'Phone',
            Footer: 'Phone',
            accessor: 'phone'
        }
    ]
*/


// 2. We'll use react-table to render the footer JSX

// We add "footerGroups" to our destructuring for the useTable() method
/*
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow } = useTable({ columns, data })
*/

// And then we can call it in our new tfoot tag at the end of our table tag in our JSX
/*
    <tfoot>
        {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map(column => (
                    <td {...column.getFooterProps}>
                        {column.render('Footer')}
                    </td>
                ))}
            </tr>
        ))}
    </tfoot>
*/


// 3. Arranging the CSS

// In our CSS file we just add the td inside the tfoot tags the same as the th tags
/*
    table th, tfoot td {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #4CAF50;
        color: white;
    }
*/





/* ********************************************* */
/* Header groups */
/* ********************************************* */


// How can we group headers with react-table ?

// In our columns component, we are going to group first name and last name
// We'll also do a second group called info wih the date of birth, country and phone

// So we'll create a new variable and simply fill it
/*
    export const GROUPED_COLUMNS = [
        {
            Header: 'Id',
            Footer: 'Id',
            accessor: 'id'
        },
        {
            Header: 'Name',
            Footer: 'Name',
            columns: [
                {
                    Header: 'First Name',
                    Footer: 'First Name',
                    accessor: 'first_name'
                },
                {
                    Header: 'Last Name',
                    Footer: 'Last Name',
                    accessor: 'last_name'
                }
            ]
        },
        {
            Header: 'Info',
            Footer: 'Info',
            columns: [
                {
                    Header: 'Date of Birth',
                    Footer: 'Date of Birth',
                    accessor: 'date_of_birth'
                },
                {
                    Header: 'Country',
                    Footer: 'Country',
                    accessor: 'country'
                },
                {
                    Header: 'Phone',
                    Footer: 'Phone',
                    accessor: 'phone'
                }
            ]
        }
    ]
*/

// Then we can import it in our BasicTable component, and pass it in our useMemo() hook
// And it works !

// Since we won't be needing header groups for the continuity of the course, we can comment it out





/* ********************************************* */
/* Sorting */
/* ********************************************* */


// How to implement the sorting feature in the react-table library ?
// We'll see that in the "SortingTable.js" component
// Inside we'll copy and paste the same code as in the BasicTable component

// Then we'll import the useSortBy() hook from the react-table library
// -->      import { useTable, useSortBy } from 'react-table'

// Now we pass it in as the second argument of our useTable() hook
/*
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow } = useTable({ columns, data }, useSortBy)
*/

// Now in our thead tag, inside our th destructuring, we pass in a parameter to the getHeaderProps()
// This adds properties related to the sorting feature on the individual column
// -->       {column.isSorted ? (column.isSortedDesc ? ' down' : ' up') : ''}

// Instead of the up and down strings we can use icons if we import them
/*
    <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ? ' up' : ' down') : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
*/





/* ********************************************* */
/* Sorting and formatting */
/* ********************************************* */


// How to sort and format columns in react-table ?

// Since the date is in ISO format in our Mock data json, the sorting works even for dates

// We'll start by installing the date formatting package
// -->      npm install date-fns

// Then we can import it in our columns.js file
// -->      import { format } from 'date-fns'

// Then in our date of birth object, we'll add a new property called cell
/*
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy') }
    },
*/
// In our format function we pass the value as a new Date since it is a string in the JSON file
// Then we pass in second argument the format that we wish





/* ********************************************* */
/* Global filtering */
/* ********************************************* */


// We have two types of filtering, global filtering and column filtering

// In global filtering, the filter applies to all the columns in the table
// We'll see that in the "FilteringTable.js" component


// 1. We'll start by creating a filter input component for our global filter

// So we create the "GlobalFilter.js" functional component
// Our function takes in two props that we are going to destructurate 'filter' and 'setFilter'

// Then in our JSW we'll return a span tag
/*
    <span>
        Search: {' '}
        <input value={filter || ''}
        onChange={e => setFilter(e.target.value)} />
    </span>
*/


// 2. The useGlobalFilter() hook

// In our FilteringTable component, we import this hook from react-table
// -->      import { useTable, useGlobalFilter } from 'react-table'

// Then we pass it as the second argument to our useTable function
// We also destructurate state and setGlobalFilter
/*
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter } = useTable({ columns, data }, useGlobalFilter)
*/

// The table 'state' contains several properties so we take out the globalFilter
// -->      const { globalFilter } = state


// 3. Including all this in the JSX

// First we wrap the whole table into a fragment <></>
// Then we add our Global Filter component above the table
// -->      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

// Now we can include FilteringTable in App.js and see how it works in the browser

// !!!!! This is only client side filtering, for a few thousand rows, for more, we'd better use server side filtering !!!!!





/* ********************************************* */
/* Column filtering */
/* ********************************************* */


// How can we filter at a column level ?


// 1. Building our new component

// We can start by creating the "ColumnFilter.js" component
// We can copy and paste the code from the GlobalFilter component as a starter and rename the function

// Then we need only to pass in the column props
// After we can destructure it in filterValue and setFilter
// Finally we just need to replace filter by filterValue in the JSX


// 2. The useFilters() hook

// In our FilteringTable component we can import the useFilters() hook from react-table
// Then we pass it as an argument of the useTable() function, before useGlobalFilter 
// Then we can call it in our headers <th> after the column headers render method
/*
    <th {...column.getHeaderProps()}>
        {column.render('Header')}
        <div>
            {column.canFilter ? column.render('Filter') : null}
        </div>
    </th>
*/

// The string 'Filter' is a property in our column.js component objects
// So in the columns.js file, we can import ColumnFilter and add it in every column object
/*
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter
    },
*/





/* ********************************************* */
/* More on filtering */
/* ********************************************* */


// 1. Disabling column filters

// If we try to remove the filter property on one column, it brakes our app
// To do it, we need to add another property called 'disableFilters' and set it to true
/*
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        Filter: ColumnFilter,
        disableFilters: true
    },
*/


// 2. The defaultColumn property

// Instead of applying the ColumnFilter to the Filter property, could we just set it once ?
// We can do that with the defaultColumn parameter

// In FilteringTable.js, after calling our data, we can define another variable called defaultColumn
/*
    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])
*/
// We pass in our default parameters for our columns in an object, with an empty array like for the other variables

// Then we can call it in the useTable() function as third parameter
/*
    const { 
            getTableProps,
            getTableBodyProps,
            headerGroups,
            footerGroups,
            rows,
            prepareRow,
            state,
            setGlobalFilter } = useTable({ columns, data, defaultColumn }, useFilters, useGlobalFilter)
*/

// Now we can remove the Filter property from our COLUMNS objects, and the UI stays the same


// 3. Debouncing our filter functionality

// For the moment, filtering is done on every keyup action, it's good for now
// But if we have a lot of rows, the app could not be as performant as we'd want it to be
// The solution is to debounce our onChange event in the filter
// For that we use the useAsyncDebounce() hook from the react-table library

// So in our GlobalFilter.js component we import useState() from react and useAsyncDebounce() from react-table
/*
    import React, { useState } from 'react'
    import { useAsyncDebounce } from 'react-table'
*/

// Then we set our onChange variable
// -->      const [value, setValue] = useState(filter)

// And after we set our onChange variable using the useAsyncDebounce() hook
/*
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)
*/

// And then we can bring it in our JSX
/*
    <input 
        value={value || ''}
        onChange={(e) => {
            setValue(e.target.value)
            onChange(e.target.value)
        }}
    />
*/





/* ********************************************* */
/* Pagination */
/* ********************************************* */


// How to page our data and implement a previous and next button ?
// We'll implement it in the "PaginationTable.js" component
// Inside we'll copy the code from the BasicTable and paste it
// We'll also remove the footer section and the footerGroup from the useTable() function


// 1. Importing and implementing the usePagination() hook

// We import it from the react-table library
// And we can pass it in as second argument of the useTable() hook


// 2. Implementing page

// We destructurate page instead of rows as a variable from the useTable() hook
// And the we replace rows by page in our JSX
// Now it works, we have 10 rows, but we can not see any more since there are no pages


// 3. Setting up the previous and next buttons

// We import nextPage and previousPage from useTable
// Now we need to call them in onClick events
// And set up the buttons in our JSX

// So we add a <div> with the two buttons, calling the two functions as onClick methods
// We also need to put everything in a fragment <></>


// 4. Beautifying it

// We import canNextPage and canPreviousPage from the useTable() hook
// These help indicate if we can go next or previous
// -->      <button onClick={() => previousPage()} disabled={!canPreviousPage}>

// Now to add the page numbers
// We destructurate pageOptions and state from the useTable() hook

// Then we can add them to the JSX
/*
    <span>
        Page{' '}
        <strong>
            {pageIndex + 1} of {pageOptions.length}
        </strong>
        {' '}
    </span>
*/





/* ********************************************* */
/* Pagination (go to page) */
/* ********************************************* */


// Now we'll see how to jump between pages

// First we pull out gotoPage and pageCount from the useTable() hook
// Then we can add our two buttons
/*
    <div>
        <span>
            Page{' '}
            <strong>
                {pageIndex + 1} of {pageOptions.length}
            </strong>
            {' '}
        </span>
        <span>
            | Go to page: {' '}
            <input 
                type='number'
                defaultValue={pageIndex + 1}
                onChange={e => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
                }}
                style={{width: '50px'}}
            />

        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
        </button>
    </div>
*/

// We also added the go to page function





/* ********************************************* */
/* Pagination (page size) */
/* ********************************************* */


// How to configure the page size for our table ?
// By default, the page size is set to 10

// So we destructure setPageSize from the useTable() hook
// As well as the pageSize parameter from state
/*
    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
        {[10, 25, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
                Show {pageSize}
            </option>
        ))}
    </select>
*/
// And that's it !





/* ********************************************* */
/* Selecting rows */
/* ********************************************* */


// What happens if we want to select one or more rows to send them to an API endpoint ?
// We'll see that in the "RowSelection.js" component

// Since we only need 10 rows, we'll be slicing the rows
// -->      const firstPageRows = rows.slice(0,10)

// Then instead of mapping the rows, we map the firstPageRows
// -->      {firstPageRows.map(row => {


// 1. Row selector helper component

// We'll do that in the "Checkbox.js" component
/*
    import React from 'react'

    export const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <>
                <input type='checkbox' ref={resolvedRef} {...rest} />
            </>
        )
    })
*/
// We get this code in the react-table documentation


// 2. useRowSelect in our RowSelection component

// We start by importing this function from the react-table library
// Then we can pass it as second argument of the useTable() hook
// This gives us a property that helps us keep track of the selected rows
// So now we can destructure selectedFlatRows from the useTable() hook
// This will give us a flat array of rows that are currently selected in our react table


// 3. Including our checkbox in our RowSelection component

// We need to add a new column with the Checkbox component
/*
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        selectedFlatRows
    } = useTable(
        { columns, data }, 
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                return [
                    {
                        id: 'selection',
                        Header: ({getToggleAllRowsSelectedProps}) => (
                            <Checkbox {...getToggleAllRowsSelectedProps()} />
                        ),
                        Cell: ({row}) => (
                            <Checkbox {...row.getToggleRowSelectedProps()} />
                        )
                    },
                    ...columns
                ]
            })
        }
    )
*/

// Then we can add it at the end of our JSX
/*
    <>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}

            </thead>
            <tbody {...getTableBodyProps()}>
                {firstPageRows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                {footerGroups.map(footerGroup => (
                    <tr {...footerGroup.getFooterGroupProps()}>
                        {footerGroup.headers.map(column => (
                            <td {...column.getFooterProps}>
                                {column.render('Footer')}
                            </td>
                        ))}
                    </tr>
                ))}
            </tfoot>
        </table>
        <pre>
            <code>
                {JSON.stringify(
                    {
                        selectedFlatRows: selectedFlatRows.map((row) => row.original)
                    },
                    null,
                    2
                )}
            </code>
        </pre>
    </>
*/

// Before checking it out in the browser, we must remove the strict mode from index.js





/* ********************************************* */
/* Column ordering */
/* ********************************************* */


// How to change the column order to refocus on what the user needs ?
// For that we can use the useColumnOrder() hook
// We'll see that in the "ColumnOrder.js" component
// Inside we can copy / paste the code from the BasicTable component


// 1. Importing the hook

// We can import the useColumnOrder() hook from the react-table library
// Then we can pass it as second argument to our useTable() hook
// Then we can destructure setColumnOrder from the useTable() hook


// 2. Then in the JSX

// To be able to call this method, we add a button in our JSX
// -->      <button onClick={changeOrder}>Change column order</button>


// 3. Now we need to define our changeOrder helper

// Here we changed the order of the three last columns
/*
    const changeOrder = () => {
        setColumnOrder([
            'id', 
            'first_name',
            'last_name',
            'phone',
            'country',
            'date_of_birtn'
        ])
    }
*/
// Like that we can prepare presets of columns hardcoded as arrays using the accessor parameters of our colums





/* ********************************************* */
/* Column hiding */
/* ********************************************* */


// We'll see how to do that in the "ColumnHiding.js" component


// 1. Destructuring

// We'll destructure a property and a method from the useTable() hook
// These are "allColumns" and "getToggleHideAllColumnsProps"


// 2. Implementing the JSX

/*
    <div>
        <div>
            <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
        </div>
        {
            allColumns.map(column => (
                <div key={column.id}>
                    <label>
                        <input type='checkbox' {...column.getToggleHiddenProps()} />
                        {column.Header}
                    </label>
                </div>
            ))
        }
    </div>
*/
// It works !





/* ********************************************* */
/* Sticky columns */
/* ********************************************* */


// For this feature we need another package called react-table-sticky
// -->      npm i react-table-sticky
// We will also need a second package
// -->      npm install styled-components
// Then we can start working on the new "StickyTable.js" component7


// 1. Building the component

// We start by copy /pasting the code from our BasicTable component
// Then we create a TableStyles component and import styled from styled components
// After we can copy paste the styles from https://github.com/GuillaumeJasmin/react-table-sticky
// Then we export it
/*
import styled from 'styled-components'

export const Styles = styled.div`
  .table {
    border: 1px solid #ddd;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      padding: 5px;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #fff;
      overflow: hidden;

      :last-child {
        border-right: 0;
      }
    }

    &.sticky {
      overflow: scroll;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }

      .header {
        top: 0;
        box-shadow: 0px 3px 3px #ccc;
      }

      .footer {
        bottom: 0;
        box-shadow: 0px -3px 3px #ccc;
      }

      .body {
        position: relative;
        z-index: 0;
      }

      [data-sticky-td] {
        position: sticky;
      }

      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }

      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
    }
  }
`;
*/


// 2. We add it in our StickyTable component

// We import useBlockLayout from react-table
// Then we import useSticky from react-table-sticky
// We pass in these two additional hooks to our useTable() hook


// 3. Then we can modify our JSX

// We simply copy / paste the JSX for the github repository from above
/*
    <Styles>
        <div {...getTableProps()} className="table sticky" style={{ width: 1000, height: 500 }}>
            <div className="header">
                {headerGroups.map((headerGroup) => (
                    <div {...headerGroup.getHeaderGroupProps()} className="tr">
                        {headerGroup.headers.map((column) => (
                            <div {...column.getHeaderProps()} className="th">
                                {column.render('Header')}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div {...getTableBodyProps()} className="body">
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <div {...row.getRowProps()} className="tr">
                            {row.cells.map((cell) => (
                                <div {...cell.getCellProps()} className="td">
                                    {cell.render('Cell')}
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    </Styles>
*/

// Then we can remove our footer destructuring
// And add a limit of rows
// -->      const firstPageRows = rows.slice(0,20)
// And in our JSX we map firstPageRows instead of mapping rows


// 4. Specifying which of our columns are sticky

// We can do that in columns.js
// We add the sticky property with the 'left' parameter to the three first columns
// Also, we add two columns

// It works !


// Further readings : 
// -->      Grouping
// -->      In-line row editing
// -->      Row drag and drop
// -->      Column re-sizingf
// -->      React Table + Material UI







/* ************************************************************************************************************ */
/* ************************************************************************************************************ */
/* ************************************************************************************************************ */


/* ************************************************************************************************************ */
/* ************************************************************************************************************ */
/* ************************************************************************************************************ */







/* ********************************************* */
/* material-ui */
/* ********************************************* */


// First we create a new app

// Then we install the material-ui package
// In our application folder, in the console we enter the following
// -->      npm install @material-ui/core
// Now we have the package in our "package.json" file
// We can now start the react application

// Once started we start editing our App.js component

// We can remove everything except the logo





/* ********************************************* */
/* Button */
/* ********************************************* */


// Everything about buttons will be inside the "MaterialUiButtons.js" functional component

// Next we can import our first material-ui element, a button
// -->      import Button from '@material-ui/core/Button'
// -->      <Button>Hello World!</Button>

// Whatch out the uppercase on the B !

// Now we can pass in arguments to our Button to style it with the default package stylings
// -->      <Button variant="contained" color="primary">Hello World!</Button>

// We can add an href with a # which sends us to the localhost:3000/#

// We can also add an onClick handler
// -->      onClick={() => alert('Hello')}

// We can change the size as well
// --> size="small"

// If we wanted to apply our own styling we can do that
// So we can override some of the styes of material-ui
/*
    style={{
    fontSize: 24
    }}
*/

// Some buttons have icons, to do that we're going to have to add one more library
// -->      npm add material-ui/icons
// Now it also appears in our package.json file
// And import it from our new library
// -->      import SaveIcon from '@material-ui/icons/Save'

// Now we can add our icon as a component in a prop
// -->      startIcon={<SaveIcon />}
// We can also put an icon at the end
// -->      endIcon={<SaveIcon />}


// Now we'll be creating a button group
// We'll put a second button inside with a DeleteIcon we import from the icons library
// We must import ButtonGroup from the core library
// by grouping them, the corners of the button are merged where they touch

// So now we can pass the "variant" and "size" props to the button group instead of each button
// If we put a color to the button group it applies to all buttons within like previously
// However if we specify another color to one of the buttons it will override the color defined in the ButtonGroup

// All the props and values can be checked out on the documentation !





/* ********************************************* */
/* CheckBoxes */
/* ********************************************* */


// We'll create a new functional component called "MaterialUiCheckbox.js" in order to view them


// So now within this component, we can import the Checkbox
// -->      import Checkbox from '@material-ui/core/Checkbox'

// Now we need to pass in a number of props for the checkbox to do anything
// The first one is checked, and we're going to set them with hooks
// -->      checked={checked}

// So we create the state variable 
// -->      const [checked, setChecked] = useState(true)

// After having imported the useState hook from react
// -->      import React, { useState } from 'react'

// And finally the onChange handler to set the state
// -->      onChange={(e) => setChecked(e.target.checked)}

// Like for the buttons we can also set the color to primary or disable the checkbox

// We can also add some imput props
/*
    inputProps={{
        'aria-label': 'secondary checkbox'
    }}
*/


// Now we'll add a label so for this we'll import from the core library the FormControlLabel
// -->      import FormControlLabel from '@material-ui/core/FormControlLabel'

// So inside our <FormControlLabel /> we can pass in our checkbock as our "countrol" prop
// Then we can add our label prop
/*
    <FormControlLabel 
        control={
            <Checkbox 
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                // color="primary"
                // disabled
                inputProps={{
                    'aria-label': 'secondary checkbox'
                }}
            />
        }
        label="Testing Checkbox"
    />
*/


// Now if we want to give more personality to our checkbox button, like putting icons for checked or not checked
// We just need to add the icons from the buttons as props
// -->      icon={<DeleteIcon />}
// -->      checkedIcon={<SaveIcon />}





/* ********************************************* */
/* TextField */
/* ********************************************* */


// We'll see the text inputs examples inside the "MaterialUiTextfield.js" functional component

// So we can import it and the insert it in our component
// -->      import TextField from '@material-ui/core/TextField'


// For now we can't see it very well and especially since we are using a dark theme

// So in a first step we'll just style it in our App.css file after having imported it
/*
    input {
    color: white !important;
    }
*/

// Now we can pass in a few props if we want to such as variant or color
// If we pass the type prop to date we can have it formatted which is nice
/*
    <TextField 
        variant="outlined" // can also be "filled"
        color="secondary"
        type="date"
    />
*/
// We also have a dropdown for the date when clicking on the calendar which is sweet
// There is multiple anumation when adding labels too, since they move in and out when clicking on the box
// We can also place a value instead of a placeholder





/* ********************************************* */
/* Styling */
/* ********************************************* */


// Now we're going to create a custom style for one of our components, such as one of the buttons for example

// First we import makeStyles from the styles library
// -->      import { makeStyles } from '@material-ui/core/styles'

// Then we create a variable containing our styles outside of our functional component body
/*
    const useStyles = makeStyles({
        root: {
            background: 'linear-gradient(45deg, #333, #999)',
            border: 0,
            borderRadius: 15,
            color: 'white',
            padding: '0 30px'
        }
    })
*/


// Now to apply it to a button, there is a few different way we can do this
// We'll do it in a new component called "ButtonStyled.js"
/*
    import React from 'react'
    import Button from '@material-ui/core/Button'
    import { makeStyles } from '@material-ui/core/styles'

    const useStyles = makeStyles({
        root: {
            background: 'linear-gradient(45deg, #333, #999)',
            border: 0,
            borderRadius: 15,
            color: 'white',
            padding: '0 30px'
        }
    })

    function ButtonStyled() {
        const classes = useStyles()
        return <Button className={classes.root}>Test Styled Button</Button>
    }

    export default ButtonStyled
*/





/* ********************************************* */
/* Theme provider */
/* ********************************************* */


// If we wanted to redisign the entire theme, we can do that too
// For that we need to create a theme provider
// This will work like a parent that we can then use for updating all of our colors

// So we start by importing it in our main app from the Styles library
// -->      import { ThemeProvider } from '@material-ui/core/Styles'

// Then we can wrap our whole App component main <div> with our <ThemeProvider> tag
// This tag requires us to pass in a theme as a prop <ThemeProvider theme={theme}>

// So now we need to import as well createMuiTheme
// -->      import { ThemeProvider, createMuiTheme } from '@material-ui/core/Styles'


// Now we can create a variable outside the App functional component to define "theme"
/*
    const theme = createMuiTheme({
    palette: {
        primary: {
        main: orange[500],
        },
        secondary: {
        main: green[300]
        }
    }
    })
*/
// After having imported orange as well from the colors library
// -->      import { orange, green } from '@material-ui/core/colors';

// There's a lot more thing we could do if we wanted, we can nest themes
// We can add different types of styling
// All this is specifically explained in the documentatino





/* ********************************************* */
/* Typography */
/* ********************************************* */


// So to modify our font-sizes and font-families, but first we need to install it
// -->      npm add fontsource-roboto

// Then we can import it in our App functional component
// -->      import 'fontsource-roboto'

// Next we can import the typography as well before tempering with it
// -->      import Typography from '@material-ui/core/Typography'

// We can then call it as a html tag in our JSX
// Also we need to pass "variant" props inside it to specify our text typography
/*
    <Typography variant='h1'>
        Welcome to my Test App
    </Typography>
*/

// We can apply different type of variants suche as body1, subtitle1 ...
// We need to check that out in the documentation

// By setting the "component" prop we are able to change how the component is being inspected by the browseer
// -->      <Typography variant='h2' component='div'>
// Here, the text renders as an <h2>, but the browser considers this component as a <div>


// If we want to we can also customise the theme of our typography
// We just need to add a typography object in our theme variable
/*
  typography: {
    h2: {
      fontSize: 36
    }
  },
*/





/* ********************************************* */
/* Containers, Grids and general layout */
/* ********************************************* */


// We'll start by importing the "Container" from the Container core library
// -->      import Container from '@material-ui/core/Container'

// Then we can wrap our main <div> in our App with the countainer, itself wrapped in the ThemeProvider
// We can then specify a size with the "maxWidth" prop with "sm" for small or "xs", "lg" or "md"


// Now to create grids, we'll import "Paper" and "Grid" in order to have the grids and to see them better
// -->      import Paper from '@material-ui/core/Paper'
// -->      import Grid from '@material-ui/core/Grid'

// So we'll create a few Paper components inside of a grid
// We'll also see how to define these
// Now that we have defined our paper with a few styles we can duplicate them
/*
    <Grid>
        <Paper style={{height: 75, width:50}}/>
    </Grid>
*/

// Grids can be either container or they can be an item
// So we'll set one grid element as container for other grid items
/*
    <Grid container>
        <Grid item>
            <Paper style={{height: 75, width:50}}/>
        </Grid>
    </Grid>
*/

// Now we create more items, and we'll add props to the container grid





/* ********************************************* */
/* Responsiveness */
/* ********************************************* */


// To do that we're going to apply our responsiveness directly in our grid component
/*
    <Grid container spacing={2} justify="center">
        <Grid item xs={3} sm={6}>
            <Paper style={{height: 75, width: '100%'}}/>
        </Grid>
        <Grid item xs={3} sm={6}>
            <Paper style={{height: 75, width: '100%'}}/>
        </Grid>
        <Grid item xs={3} lg={6}>
            <Paper style={{height: 75, width: '100%'}}/>
        </Grid>
    </Grid>
*/
// We could also just specify "xs" without any argument and it will set automatically





/* ********************************************* */
/* AppBar */
/* ********************************************* */


// Now we're going to add another component to our App called the AppBar
// First we import a few elements
/*
    import AppBar from '@material-ui/core/AppBar'
    import ToolBar from '@material-ui/core/ToolBar'
    import IconButton from '@material-ui/core/IconButton'
    import MenuIcon from '@material-ui/icons/Menu'
    import Button from '@material-ui/core/Button'
*/

// Then we can style it
/*
    <AppBar color="secondary">
        <ToolBar>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6">
                MUI Themeing
            </Typography>
            <Button>
                Login
            </Button>
        </ToolBar>
    </AppBar>
*/
// And there we go !







/* ************************************************************************************************************ */
/* ************************************************************************************************************ */
/* ************************************************************************************************************ */







/* ********************************************* */
/* axios */
/* ********************************************* */


// The PUT request updates the object to the object we enter
// The PATCH request only updates the parameters we specify during our request
// The All request allow us to do multiple request at the same time






/* ************************************************************************************************************ */
/* ************************************************************************************************************ */
/* ************************************************************************************************************ */







/* ********************************************* */
/* React router */
/* ********************************************* */


// Create a new app
// --> npx create-react-app

// Then install the library
// -->       npm install react-router-dom

// We create a Nav component that we call inside the App component
// The Nav has a list of the page titles
// We create a Shop and a About components which will be our routes

// Then we import in the App component
// Finally we style a little in the App.css file


// Now in our App component we can import the router by changing the router name with the "as" code
// -->      import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


// Now we must everything that we need to be able to use routing with the <Router> tag
// (instead of the <BrowserRouter> tag)


// Now we can define each route inside the Router
/*
    function App() {
        return (
            <Router>
                <div className="App">
                    <Nav />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/shop" component={Shop} />
                    </Switch>
                </div>
            </Router>
    );
}
*/

// Here the <Router> wraps our whole App, so everything inside can use the ReactRouter library
// Our <Nav> component will be rendered on every route

// We have our 3 routes, with their url path as a prop
// Their second prop is the component that they render under the <Nav>

// For the Homepage, we must specify the "exact" prop for it doesn't add any route on top the / like /About ...
// The <Switch> is important too because it helps the router render only the specific routes we asked


// Now we can add the links in the Nav component
// Instead of using the anchor <a> tags, we'll import "Link" from the router library
// -->      import { Link } from 'react-router-dom'

// Now we can add the link with the "to" prop that takes the url as argument
/*
    function Nav() {
        
        const navStyle = {
            color: 'white'
        }

        return (
            <nav>
                <h3>Logo</h3>
                <ul className="nav-links">
                    <Link style={navStyle} to="/about">
                        <li>About</li>
                    </Link>
                    <Link style={navStyle} to="/shop">
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        );
    }
*/
// Also we created a style for the links for them to be white





/* ********************************************* */
/* Dynamic Routes */
/* ********************************************* */


// Now we'll create dynamic routes, in the Shop page

/*
    import React, { useState, useEffect } from 'react'

    function Shop() {

        useEffect(() => {
            fetchItems()
        }, []) // [] like that it only runs when the component mounts

        const [items, setItems] = useState([])

        const fetchItems = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            const items = await data.json()
            console.log(items)
            setItems(items)
        }

        return (
            <div>
                {items.map(item => (
                    <h1 key={item.id}>{item.title}</h1>
                ))}
            </div>
    );
    }

    export default Shop
*/

// We import useState and useEffect
// Then we set useEffect to fetchItems that will run only when the component mounts if we specify an empty array as second parameter

// Then we define the fetch item function to fetch data
// Finally we map the fetched data and return the JSX


// Now if we want to create a route for each item, we just import "Link" again and wrap our mapped items
/*
    <div>
        {items.map(item => (
            <h1 key={item.id}>
                <Link to={`/shop/${item.id}`}>{item.title}</Link>
            </h1>
        ))}
    </div>
*/
// To make the route dynamic, we put the backquotes `` and call the id of the items

// Now we need to create the layout for those routes
// So in the App component we add a new <Route> beneath the others
// -->      <Route path='/shop/:id' component={ItemDetail} />



// But since we use the /Shop already, we need to specify "exact" in the shop route

// Now we need to pass the "match" prop to our ItemDetail new component
// That way we can fetch elements of the link that brought us here, such as the id, title...
// And finally add it at the end of our fetch request using backticks
/*
    import React, { useState, useEffect } from 'react'

    function ItemDetail({ match }) {

        useEffect(() => {
            fetchItem()
        }, []) // [] like that it only runs when the component mounts

        const [item, setItem] = useState({})

        const fetchItem = async () => {
            const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            const item = await fetchItem.json()
            setItem(item)
            console.log(item)
        }

        return (
            <div>
                <h1>{item.title}</h1>
                <h4>{item.body}</h4>
            </div>
    );
    }

    export default ItemDetail
*/







/* ************************************************************************************************************ */
/* ************************************************************************************************************ */
/* ************************************************************************************************************ */







/* ************************************************************************************** */
/* ************************************************************************************** */
/* Node.js API with authentification tutorial */
/* ************************************************************************************** */
/* ************************************************************************************** */


// How to store users in the database ?
// Hashing passwords
// JSON webtokens
// Private routes and more...





/* ********************************************* */
/* Installing node.js and setting up */
/* ********************************************* */


// 1. We need node.js installed first ! (done via website)

// Than we can open a terminal in our new folder 
// -->      npm init
// Then we press enter for every parameter, and this adds us a "package.json" file !

// Same as in React, all this file does is hold and track all of our installed packages


// 2. Setting up express

// In our console we simply install express.js
// -->      npm install express

// Now we have express installed in our dependencies in our package.json file


// 3. Now we're going to install nodemon

// In our console as well
// -->      npm install --save-dev nodemon

// Now we have it inside our devDependencies in our package.json file

// nodemon is a tool that helps develop node. js based applications
// It does that by automatically restarting the node application when file changes in the directory are detected


// 4. Now we can create our JS file

// We can call it index.js

// Now we can initiate our first server
// -->      const express = require('express');
// Then we can invoke our function
// -->      const app = express();


// 5. Now we can initiate our server by setting it up to a custom port

// Here we use our const calling the express function and pass it the listen function with the port we want to apply
// Also we pass in a callback function as second argument that returns a console log
// -->      app.listen(3000, () => console.log('Server up and running :) !'));


// 6. Creating our routes

// First we create a new folder called "routes"
// Inside we create a new file called "auth.js"

// Inside we can create a variable
// -->      const router = require('express').Router();
// Like that we can export our variable afterwords
// -->      module.exports = router;

// Like that we can later import it in our index.js file


// 7. In our route we can now do a post method on our router variable

// In it we send a request/response as a function
// This function returns a response that te set to the 'Register' string
/*
    router.post('/register', (req,res) => {
        res.send('Register');
    });
*/


// 8. Now we can iport the routes in our index.js
// -->      const authRoute = require('./routes/auth');


// 9. Now we can create the routes middleware in our index.js
// So we call app (express function) with the use keyword
// We can then for a specified route, call authRoute which is require(our new route)
// -->      app.use('/api/user', authRoute);

// So now, everything in the authRoute will have the /api/user prefix
// So it will mean in fact : /api/user/register when we call "post" in our auth.js file


// 10. Now to test

// We start by deleting all the scripts in package.json
// And we replace it as following
// -->      "start": "nodemon index.js"

// Then if we do "npm start" in our console
// We get our message "Server up and running :) !"


// 11. Second test

// We download and install "postman"
// Once we are in postman, we just need to enter the adress : http://localhost:3000/api/user/register
// If we choose POST, it will send us the response we set in our router.post() function
// -->      Register


// 12. Finally we need to connect to a database

// We connect to our MongoDB Atlas account and create a new free cluster called "Cluster0"
// Then in security we add a new user called "emile" with password "emile0"
// We ensure ourself that the user can read/write to any database and create it

// Next we go to ip whitelist to add our ip adress
// We can add IP adresses, especially ours

// Now to connect to the database, we go to our cluster and click connect
// Then connect to our application, then mongo gives us aa string we'll have to copy

// Then we restart our app
// -->      npm start

// Now we can import mongoose as a variable in our index.js file
// -->      const mongoose = require('momngoose');

// Finally we can call connect on our new variable passing in our string
// --> mongoose.connect('mongodb+srv://emile:<password>@cluster0.w0kx3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// We just need to pass our password instead of the placeholder inside our url
// As a second argument we pass our callback function calling a console log 'connected to db!'
// Once npm started again, the console logs our message !
// It will throw us a warning with { useNewUrlParser: true } in the console so we copy this
// We can now pass it as a second argument between our url and our console log callback function


// 13. Finally we need to create a model of how our data is going to show out

// So how our user is going to look like
// We need to create a model and have it easy to connect to mongoDB and to use it's data

// We're gonna install a package called "mongoose", so in the console
// -->      npm install mongoose
// Now it is added to our dependencies in our package.json file


// Ok ! now when starting npm we have first "Server up and running :) !" then "connected to db!"





/* ********************************************* */
/* Password security */
/* ********************************************* */


// Since our password is in the index.js code, that is not good
// So we'll find a way to call it without showing it like that

// To do that we'll install another package called "dotenv"
// -->      npm install dotenv
// Now we have it as well installed in our package.json dependencies section

// dotenv creates an environment variable, in which we can store our password
// Like that if we push our code to GitHub, it won't display our password
// When we push it to something like "heroku" we can add our variable there

// Now we can create a new file in app folder called ".env"
// Inside we can set up CONNECT_DB = our url

// Inside index.js, we can remove the url, import the .env
// -->      const dotenv = require('dotenv');
// And then initiate it
// -->      dotenv.config();
// And now we can call it in our mongoose.connect() method in the first argument instead of the url
// -->      process.env.DB_CONNECT, 

// If we start the server again, it still works,, so we have "hidden" our password from our main js file





/* ********************************************* */
/* Model creation */
/* ********************************************* */


// We can create now our model, called "User.js" in a new folder called "model"
// inside we can create our variable called mongoose requiring mongoose

// Now we can create our schema
/*
    const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            min: 6, // minimum of 6 characters
            max: 255
        },
        email: {
            type: String,
            required: true, 
            max: 255,
            min: 6
        },
        password: {
            type: String,
            required: true, 
            max: 1024,
            min: 6
        },
        date: {
            type: Date,
            default: Date.now
        }
    });
*/

// Finally we can export it as a mongoose model, calling User and the schema we just created
// -->      module.exports = mongoose.model('User', userSchema);


// Now back in auth.js we can call our new model

// We start by importing it
// -->      const User = require('../model/User');

// Now we have access to the user, so we can ow try to make a request in auth.js
/*
    router.post('/register', (req,res) => {
        // res.send('Register');
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            passoword: req.body.password
        })
    });
*/

// So here we creaete a new user with our request object body attributes, and post it to the server
// Doing that we are setting a new schema object User with parameters that will be returned by the server


// Now we need a body parter to be sure to be able to read the response to the post request we just created
// So back in our index.js, we can set a "Middleware" section
// -->      app.use(express.json());
// And that's it, now we can send post requests


// Now we can try this out in auth.js

// Until now we have created a new user with the user Variable and the User schema in User.js
// So in router.post(...) in our auth.js file, we can save our variable after having created it

// First we add an async call because we need some before we actually submit something to the database
// Then we can do a try and catch block, to catch and send an error 400
// And then try to save the user we just created
/*
    router.post('/register', async (req,res) => {
        // res.send('Register');
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            passoword: req.body.password
        });
        try {
            const savedUser = await user.save();
            res.send(savedUser);
        } catch(err) {
            res.status(400).send(err);
        }
    });
*/


// So now we can try it, we go back to postman, navigate to http://localhost:3000/api/user/register
// We delete all the "headers" except "Content-type" that must be set to 'application.json'
// Then we can post and await an awnser, formatted as our schema hopefully







/* ************************************************************************************************************ */
/* ************************************************************************************************************ */
/* ************************************************************************************************************ */







/* ************************************************************************************** */
/* ************************************************************************************** */
/* MERN stack tutorial */
/* ************************************************************************************** */
/* ************************************************************************************** */


// MERN stands for MongoDB, express.js, node.js and React.js

// MongoDB is a nonSQL database that stores our data
// Express.js is a backend framework used mostly for buiding APIs
// React is a frontend library / framework
// Node.js is a JavaScript runtime that allows us to use JavaScript as a server side language

// We'll build our API with express, node and mongoose which will connect to our mongoDB database
// We'll also be using packages such as reactstrapp, that allows us to use bootstrap in react
// We'll also use React transition group that does transition css effects for fading for example
// We'll also be doing a full deployment





/* ********************************************* */
/* Exoress API & MongoDB */
/* ********************************************* */


// We're gonna start with the backend, by building an express API
// Using mongoose to interact with mongoDB


// 1. Installing packages

// We consider node.js is already installed
// In a terminal we can do "npm init"
// Then in entry point we specify server.js
// -->      entry point: (index.js) server.js
// And I enter my name as the author
// And finally add an MIT licence
// -->      license: (ISC) MIT

// Now we have our package.json file
// We still have to install some dependencies

// So in our console
// -->      npm install express
// Then we need body-parser so that we can handle data that comes in when a request is done to our server
// -->      npm install body-parser
// We also need mongoose to interact with our MongoDB database
// -->      npm install mongoose
// Finally we need concurrently so that we can run more than one npm script at a time
// Like that we will be able to run the client and the server at the same time
// -->      npm install concurrently
// We also need nodemon which will constantly look at our backend and reload without us having to restart the server
// --> npm install -D nodemon
// The -D means that we only need for development purpose and won't be needing it for our production build

// Now we can replace the "test" script by a new one
/*
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js"
  },
*/


// 2. Importing our packages in our server.js file

// Now we can create our server.js file in the main folder

// Also we can import our packages needed for this file for now
// -->      const express = require('express');
// -->      const mongoose = require('mongoose');
// -->      const bodyParser = require('body-parser');

// Then we can initialise express with a variable we'll call "app"
// -->      const app = express();

// Then we need a middleware for body parser
// -->      app.use(boduParser.json());


// 3. Setting up the DB

// Next thing we need our mongoDB URI
// Once we have created a cluster database, we need to create a user to access it

// Now we just get our Mongo URI and copy it

// To keep everything clean and tidy, we can create a config folder to keep all this kind of data
// In this folder we create a "keys.js" file and export our mongoURI
/*
    module.exports = {
        mongoURI: 'mongodb+srv://emile:emile123@cluster0.w0kx3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    };
*/
// !!!!! We mustn't forget to replace our <username> and <password> in the URI with the one we just created !!!!!


// Now in our server.js we need to bring this file in calling our object
// -->      const db = require('./config').mongoURI;


// 4. Connecting to the DB

// Now we need to connect to MongoDB using mongoose, calling our new "db" variable
// This connect function is promise based so we need to add the two blocks
// In the .then block we call a callback function console logging that we are connected
// In the .catch block, we just catch the error and console log it as well
/*
    mongoose
        .connect(db)
        .then(() => console.log('Mongo DB connected...'))
        .catch(err => console.log(err));
*/


// 5. Setting up the server running

// Now that we connected to Mongo we need to run our server
// So we'll create a variable for the port we're going to use
// Since we'll be deploying it on Heroku, we'll need to use a specific vocabulary
// -->      const port = process.env.PORT || 5000;
// We also specify OR on port 5000


// Then we call a listen to our app on the variable port, with a callback function as well
// -->      app.listen(port, () => console.log(`Server started on port ${port}`));


// 6. Testing the connection to the server and the DB

// Now we can test our app, since we wrote two new scripts in our package.json file
// We can use nodemon to view the server.js changes in real time while developping it
// So instead of npm start, we'll call
// -->      npm run server


// Now we can read first "Server started on port 5000", and then "Mongo DB connected..."
// We're up and running with the database and the server !





/* ********************************************* */
/* Creating our data model */
/* ********************************************* */


// We want to get request from our front-end, the react application
// In order to FETCH, POST and DELETE items in the database
// In mongoose, we use models for our database items, so we need to create them

// We start by creating a new folder called "models"
// Inside we'll create a file called "Item.js" (with a capital I since it's a model)

// Now we're going to start by importing mongoose
// -->      const mongoose = require('mongoose');

// Then we can create a variable called Schema equal to our mongoose's schema
// -->      const Schema = mongoose.Schema;

// And now we can define our schema parameters and values associated
/*
    const ItemSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    });
*/

// Finally we can export it to be able to use it in our server.js file
// -->      module.exports = Item = mongoose.model('item', ItemSchema);

// So we call it "Item" that we assign to a mongoose model, that takes in a name "item" and the schema associated





/* ********************************************* */
/* Setting up the requests on the database */
/* ********************************************* */


// We could have all of our routing in our server.js file
// But that would be too complicated

// 1. First we create our routes location and files

// So we'll create a new folder called "routes"
// And inside it another folder called "api"
// Inside it we'll create a new file called "items.js" where all of our routes will go


// 2. Now we can fetch it in our server file

// For our system to be able to find that new file we need too add a few lines in our server.js file

// First we import it
// -->      const items = require('./routes/api/items');

// Now we want any requests that go to routes/api/items/anything to go to that file we created
// -->      app.use('/api/items', items);
// Like that anything that goes to api/items must refer to "items" which is our variable which is our file


// 3. Then we import our necessary files, and export our router

// Now in our file we have to define our router, so first we import express
// -->      const express = require('express');

// Then we can call the espress router, which is part of the express object
// -->      const router = express.Router();


// Now we need to bring in our item model in order to make queries (find, save...)
// -->      const Item = require('../../models/Item');

// We mustn't forget to export it as well, or the other files won't be able to fetch information in this file
// -->      modules.export = router;


// 4. Now we can create some routes

// Instead of app.get (if we were in our server file) we call router.get
// -->      router.get('/');
// We just put in "/" since we are already in our api/items location
// THen we can call our request/response function
/*
    router.get('/', (req, res) => {
        Item.find()
            .sort({ date: -1 })
            .then(items => res.json(items))
    });
*/
// Our function, like mongoose and meteor can use the find and sort methods
// And for the .then, we call our items from our json items since we're in a json api


// 5. Now we'll make a test using Postman

// So in postman, we can set a get request to the following adress
// -->      http://localhost:5000/api/items

// The status is 200 and ok, and we get back an empty array
// This is good since we don't have anything in the database for now


// 6. Now we need to create our POST endpoint

// First we create a new item variable, then we save it to the database
// And then we take that item and take it to our json api
/*
    router.post('/', (req, res) => {
        const newItem = new Item({
            name: req.body.name
        });
        newItem.save().then(item => res.json(item));
    });
*/


// 7. Now we can test it in postman

// So we set the request to POST and then we must add a header
// This header has a key of "Content-type" and a value of "application/json"

// THen we enter a new json object and click send
/*
    {
        "name": "Milk"
    }
*/
// Normally it should send back our object with it's id and date


// 8. Now we can create a delete request

// For this we start by finding the object using findById() calling the id params from the url
// Then we get that item, remove it from the database, then send a callback function saying success
// And we can also catch errors in case we don't enter an existing id and return a success equals to false
/*
    router.delete('/:id', (req, res) => {
        Item.findById(req.params.id)
            .then(item => item.remove().then(() => res.json({success: true})))
            .catch(err => res.status(404).json({success:false}));
    });
*/


// 9. We can test that in postman and Mongo

// We can create, delete, and find all the items of our database
// We can also track their existence and data in Mongo


// !!!!!!! WE HAVE SET UP OUR BACK-END !!!!!!!





/* ********************************************* */
/* Fron-end React setting */
/* ********************************************* */


// 1. Creating the react app

// We create a client folder in our application
// Then in the console we go inside that folder
// -->      npx create react app

// This will generate a package.json, but all that's inside is only for client side for react

// The first thing to do is to add a script in that file
// We already have npm start, build, test and eject
// We need to add one in order to avoid having to call the whole http adress of the server when making requests
// We want to be able to do only 'api/items' like in the back-end file with the "items" variable
// -->      "proxy": "http://localhost:5000",

// Now since we want to run the front-end and the back-end at the same time


// 2. Setting up concurrently

// To avoid having two terminal open at the same time, we'll use concurrently
// To do that, in our back-end package.json file, we add new scripts
// -->      "client": "npm start --prefix client"

// This command allows us to run npm start (for react) from the main folder
// --prefix client basically says to the console to run npm start in the client folder

// Now we'll use concurrently in another script called "dev" that starts our back-end and our front-end
// -->      "dev": "concurrently \"npm run server\" \"npm run client\""

// So now we can run both by typing : npm run dev


// 3. GitHub installation and download

// To avoid losing our "node_module" folder in our client, when we upload to GitHub and when someone downloads our code
// We'll simply add a last script to install the client like we did in phase one in the client's package.json
// So now we have :
/*
  "scripts": {
    "client-install": "npm install --prefix client",
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  }
*/


// 4. Starting our full-stack app

// Now hopefully by running "npm run dev" we should have our server running on our port:5000
// And our client running on our port:3000

// It works !
// We have our default react app on localhost:3000
// As well as our single object we creatd "milk" on localhost:5000


// 6. Tidying up before building the react app

// So we delete the logo.svg file
// We can also delete index.css file
// And we can keep put delete all that is inside the app.css file

// Now we open the index.js file
// Inside we can remove the import index.css since it doesn't exist anymore
// We can also get rid of the end of the file that is useless

// Now in App.js, we can get rid of our import logo
// Also in the render method, we'll get rid of everything except the parent div
// We can just add an <h1> that says hello to check that neverything is working


// 7. Installing the dependencies

// We need some dependencies for our react application
// We'll start by building our react application
// For that we'll use react-strap, react-transition-group and stuff like that
// And then we'll move on to redux
// And finally we'll connect it to the back-end

// So first we open a second terminal and cd to client (!!! very important to be in the right folder!!!)

// Once in the folder we can install bootstrap
// Also we can install reactstrap
// We can also install uuid (which generates for us random ids) since at first we'll use static data to test our app and connect it to the backend afterwords
// Finally we can install the react-transition-group
// We'll install rerdux later
// -->       npm i bootstrap reactstrap uuid react-transition-group
// We can check in our dependencies that they have been added in our client package.json and it's all good !





/* ********************************************* */
/* Building the front-end app navbar */
/* ********************************************* */


// 1. Preparation

// First in App.js, we'll import bootstrap
// -->      import 'bootstrap/dist/css/bootstrap.min.css';
// This changes the font style of our <h1> so it has been imported with success

// Then we create a folder in the src folder called "components"
// Inside we create a new file called "AppNavBar.js"


// 2. Importing the necessary libraries

// In this component we'll import reactstrap since we'll be building our navbar with it
// We'll be using state to have a collapsing dropdown hamburger menu when the screen size is too small

// Now we'll import react and component, as well as the reactstrap components we'll be needing
/*
    import React, { Component } from 'react'
    import {
        Collapse, 
        Navbar, 
        NavbarToggler, 
        NavbarBrand, 
        Nav, 
        NavItem, 
        NavLink, 
        Container
    } from 'reactstrap'
*/


// 3. Building the navbar collapsing state

// Then we can create the basics of our class component
/*
    class AppNavBar extends Component {
        constructor() {
            
        }
    }

    export default AppNavBar
*/

// Then we create our state, and our setState for toggling the navbar hamburger menu
/*
    class AppNavBar extends Component {
        state = {
            isOpen: false
        }

        toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
*/


// 4. Building our navbar in the render method

// And we can create our render with our bootstrap elements
/*
    <div>
        <Navbar color="dark" dark expend="sm" className="mb-5">

        </Navbar>
    </div>
*/
// The color is a native bootstrap color
// The expend is to say when do we expend the navbar so here it's on "sm" screens
// Finally we add a className with "mb-5" which is like margin-bottom
/*
    <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">My Shopping List</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/EmileVitu">
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>
*/
// The ml-auto is the margin left automatically aligned


// 5. Adding the navbar component in our App component

// Now in App.js we can import our component
// -->      import AppNavBar from './components/AppNavBar'

// And simply add it in our JSX
/*
    <div className="App">
      <AppNavBar />
      <h1>Hello</h1>
    </div>
*/





/* ********************************************* */
/* Building the ShoppingList component */
/* ********************************************* */


// 1. Preparing the component

// In our components folder we start by creating th "ShoppingList.js" component*

// Then we can import the react and component libraries
// -->      import React, { Component } from 'react'

// We can import as well our libraries from reactstrap
// -->      import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'

// Then we'll need to import elements of the react-transition-group library
// -->      import { CSSTransition, TransitionGroup } from 'react-transition-group'

// Finally we'll import the uuid library since for now we'll be generating id's since we won't be connected to the back-end yet
// -->      import { v1 as uuid } from 'uuid'


// 2. Preparing the state of the component

// Since our state will after be the database array, we'll set it for now to an array of items
/*
    class ShoppingList extends Component {
        state = {
            items: [
                { id: uuid(), name: 'Eggs' },
                { id: uuid(), name: 'Milk' },
                { id: uuid(), name: 'Steak' },
                { id: uuid(), name: 'Water' },
            ]
        }
    }
*/
// The id's will be generated by the uuid() function


// 3. Preparing the render method of the component

// First we'll destructurate items, by picking items out of this.state
// -->      const { items } = this.state

// Then we'll return the JSX inside a father <Container>
/*
    <Container>
        <Button
            color="dark"
            style={{marginBottom: '2rem'}}
            onClick={() => {
                const name = prompt('Enter Item')
                if(name) {
                    this.setState(state => ({
                        items: [...state.items, { id: uuid(), name }]
                    }))
                }
            }}
        >
            Add Item
        </Button>
    </Container>
*/
// Here we simply add a Button with a color from reactstrap ad a css style

// We also add an onClick handler, this one creates a name from a prompt
// And after, if a user enters a name, it sets the state
// When setting state, we spread the state.items, and then add a new item at the end
// This one takes a new id with uuid() as value, and he name prompt as the name value


// 4. Diplaying the state items

// We'll add a list group in the JSX
/*
    <ListGroup>
        <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                    <ListGroupItem>
                        {name}
                    </ListGroupItem>
                </CSSTransition>
            ))}
        </TransitionGroup>
    </ListGroup>
*/

// Will pit a transitionGroup to wrap our list with a className for future css styling
// Then we map our items, passing in the id and name props
// The mapping returns a CSSTransition with the id as key, a 500ms timeout and a classNames for fading
// This CSSTransition wraps our ListGroupItem that returns the name prop for each item mapped


// 5. Adding a delete button

// Inside the <ListGroupItem> we insert our delete button
/*
    <Button
            className="remove-btn" 
            color="danger"
            size="sm"
            onClick={() => {
                this.setState(state => ({
                    items: state.items.filter(item => item.id !== id)
                }))
            }}          
        >&times;</Button>
*/
// We add a class, a color and a size
// We also add our handler that uses set state, takes the state and filter the items
// We filter them so that they render all the items that have a different id than the one we selected


// 6. Enabling the fading with the css transition group

// We go inside the App.css and enter our css styles for our elements

// First we add a margin on the right to our delete buttons for tidyness
/*
    .remove-btn {
        margin-right: 0.5rem;
    }
*/

// Then we can set our classes for the "fade" special class attribute
/*
    .fade-enter {
    opacity: 0.01;
    }

    .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
    }

    .fade-exit {
    opacity: 1;
    }

    .fade-exit-active {
    opacity: 0.01;
    transition: opacity 1000ms ease-in;
    }
*/





/* ********************************************* */
/* Implementing redux 1/2 */
/* ********************************************* */


// Now we need to implement redux in order to create a second component
// Instead of having the prompt imbedded in our shopping list
// We want an item model component to be able to interact with our redux state

// Redux is our state manager, where we want our state to be stored in our front-end
// When we'll connect to the back-end


// 1. Preparing Redux

// First we go to the client folder since we're installing redux for the client
// Then we install a few items :
// -->       npm i redux react-redux redux-thunk

// We need redux, react-redux to bind redux to react
// Finally we need redux-thunk for connecting redux with the back-end, we'll use it later

// Now we have them in our package.json file in our client folder


// 2. Creating our file and importing the necessary libraries

// In the source folder of our client folder, we create "store.js"
// This will be the entry point to our redux store

// Our redux store holds the whole state tree of our application. 
// The only way to change the state inside it is to dispatch an action on it

// First we import what we will be needing from redux
// -->      import { createStore, applyMiddleware, compose  } from 'redux'

// We need createStore to create our store
// We need applyMiddleware because we are using "thunk" and we need to wrap it with it
// Finally, we need compose since we need redux tools, and to use that with applyMiddlleware, we need to wrap it in this compose function

// We also need to import thunk and rootReducers that we didn't install yet
// -->      import { createStore, applyMiddleware, compose  } from 'redux'
// -->      import rootReducer from './reducers'
// rootReducers will actually be in /reducers/index.js, but since it is an index.js file, it is it by default so we can just put /reducers


// 3. Building the store

// First we create a variable for our initial state set to an empty object
// -->      const initialState = {}

// Then we put all our middleware inside an array in a variable like that they will be easier to get to
// -->      const middlewware = [thunk]

// Then we create our store inside a variable using createStore()
// This function takes in three parameters, the rootReducer, our initialState and it would also take any middleware
// So for the third we should put applyMiddleware, but since we are using redux tools, we have to pass it in the applyMiddleware in the compose() function
// Inside the compose() method we can pass in applyMiddleware, with the spreading of our middleware variable as parameter
// Finally if we open the redux devtools, they say our store doesn't work and to follow instructinos, by clicking on this link, they say we need to add a line of code
/*
    const store = createStore(
        rootReducer, 
        initialState, 
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
*/

// Finally we just need to export it as usual
// -->      expoprt default store

// We shouldn't have to touch redux anymore ! Ever !


// 4. Integrating the store in our application

// We go back to App.js, where we need to bring in what we call the provider from react-redux
// So we need to import it from react-redux, as well as our store component
// -->      import { Provider } from 'react-redux'
// -->      import store from './store'

// Now we need to wrap our whole application JSX passing in the store argument in a store property
/*
    function App() {
    return (
        <Provider store={store}>
        <div className="App">
            <AppNavBar />
            <h1>Hello</h1>
            <ShoppingList />
        </div>
        </Provider>
    );
    }
*/
// Now we should be able to access stored state in all of our components


// 5. Creating the rootReducer

// So in the source folder we create a new folder called "reducers" containing an "index.js" file
// The main interest of our rootReducer is to bring together all of our other reducers
// For our application, we only need one, but if we had other schemas, we would need this rootReducer for that
/*
    import { combineReducers } from 'redux'
    import itemReducer from './itemReducer'

    export default combineReducers({
        item: itemReducer
    })
*/


// 6. Now we need to create our itemReducer

// First we create the itemReducer.js in the reducers folder

// The reducer is where our actual state is going to go
// This is where we check our actions (getItem, addItem, removeItem...)
// These will be dispatched to our reducer
// Our reducer will act as the middleman between the server and our react app

// So we can create our initial state as an object with the item array and the four objects inside it
// Just like in our ShoppingList component, as static data
/*
    import { v1 as uuid } from 'uuid'

    const initialState = {
        items: [
            { id: uuid(), name: 'Eggs' },
            { id: uuid(), name: 'Milk' },
            { id: uuid(), name: 'Steak' },
            { id: uuid(), name: 'Water' }
        ]
    }
*/



// 7. Now we need to evaluate action types, so we need to create some types

// So we'll create a new folder called "actions" in which we create the "types.js" file
// Inside we define our actions as variables set to their equivalent string
/*
    export const GET_ITEMS = 'GET_ITEMS'
    export const ADD_ITEM = 'ADD_ITEM'
    export const DELETE_ITEM = 'DELETE_ITEM'
*/

// Now we want to bring these inside our itemReducer file
// -->      import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

// Now we need to export the actions on our state
/*
    export default function(state = initialState, action) {
        switch(action.type) {
            case GET_ITEMS: 
                return {
                    ...state
                }
            default: 
                return state;
        }
    }
*/

// So here, we export a function the state and the action object (that has a type parameter)
// We call a switch() on the type parameter of the action object
// In our first case, to get item, it will just return the spread of our state
// And we'll just add a default case, where you simply return the state


// 8. Now to create our actions

// We create the "itemActions.js" file in our actions folder
// This is where we'll make our request to the backend, but we'll do that later

// We start by importing our actions
// -->      import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types'

// Now we can add our arrow function as an export, to return the GET_ITEMS action type
// Like that the return is going to the itemReducer and it checks the action.type of the switch()
/*
    export const getItems = () => {
        return {
            type: GET_ITEMS
        }
    }
*/

// Now we want to call that getItems function from within our component


// 9. Calling our action in our component

// We can start by deleting our state, since we have it in our itemReducer

// So we must import connect from react-redux
// -->      import { connect } from 'react-redux'

// Then we must import our getItems function
// -->      import { getItems } from '../actions/itemActions'

// Now we have to call connect while exporting our component
// -->      export default connect(mapStateToProps, { getItems })(ShoppingList)
// connect() takes in two parameters, one function we need to create (mapStateToProps) and the function we want to call

// Now we can create that functions, in order to map our state into props to pass it to our component
/*
    const mapStateToProps = (state) => ({
        item: state.item
    })
*/

// Now we have to set our prop type
// -->      import PropTypes from 'prop-types'
/*
    ShoppingList.propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired
    }
*/
// That way we can set our prop types to a function and an object for getItems and item respectively
// Like that they are passed as props
// So now we are mapping our redux state to a component property

// We can now call it in our component with the componentDidMount() lifecycle method
/*
    componentDidMount() {
        this.props.getItems()
    }
*/

// Finally, since we don't have the state anymore, we have to add the following
// -->      const { items } = this.props.item
// Instead of the previous "const { items } = this.state"
// It will no longer refer to our component state, but to the item array of objects in our items mapped state

// Now it works, and we can access our items in the state tab of our redux inspector in our browser





/* ********************************************* */
/* Implementing redux 1/2 */
/* ********************************************* */


// 1. Adding functionality to the delete buttons

// We can start by adding the "deleteItem" action to the import from itemActions in our ShoppingList
// -->      import { getItems, deleteItem } from '../actions/itemActions'
// As well as in the export connect() function
// -->      export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList)

// Now we can create it, so we go to our itemActions.js file
/*
    export const deleteItem = (id) => {
        return {
            type: DELETE_ITEM,
            payload: id
        }
    }
*/
// However, this time, the function takes the id of the item selected as a prop*
// Since when we return we're returning to the reducer's switch()
// So that's why we need to send it the id as a payload as well

// Now in our reducer we can add a case to delete
/*
    case DELETE_ITEM:
        return {
            ...state
            items: state.items.filter(item => item.id !== action.payload)
        }
*/
// Same as before we simply filter and keep only the items that do not having an id matching the id we passed as a prop
// However, the reducer won't recognise the id, so we need to identify it as action.payload

// Now we need to change the onClick handler in our ShoppingList component
// -->      onClick={this.onDeleteClick.bind(this, id)}
// So we need to create an onDeleteClick function, and we bind it to "this" and to "id"
/*
    onDeleteClick = (id) => {
        this.props.deleteItem(id)
    }
*/
// So we simply pass in the id as parameter, and call props with deleteItem, like we did with getItem


// 2. Now to create our item modal component

// So we'll create the "ItemModal.js" file in the components folder
// Then we'll import everything we need to build it
/*
    import React, { Component } from 'react'
    import { 
        Button, 
        Modal, 
        ModalHeader,
        ModalBody, 
        Form, 
        FormGroup,
        Label, 
        Input
    } from 'reactstrap'
    import { connect } from 'react-redux'
    import { addItem } from '../actions/itemActions'
*/
// Then we export it in the connect() since we'll be using redux
// -->      export default connect()(ItemModal)

// Then we can start building it
// Same as the navbar with the isOpen state, we'll have a modal state to know if it is open or not
// There will also be a name component state for our form
/*
    class ItemModal extends Component {
        state = {
            modal: false,
            name: ''
        }

        toggle = () => {
            this.setState({
                modal: !this.state.modal
            })
        }

        onChange = (e) => {
            this.setState({ [e.target.name]: e.target.value })
        }

        render() {
            return(
                <div>
                    <Button
                        color="dark"
                        style={{marginBottom: '2rem'}}
                        onClick={this.toggle}
                    >Add Item</Button>
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                    >
                        <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="item">Item</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="item"
                                        placeholder="Add shopping item"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            )
        }
    }
*/
// So we create a toggle function, the same as for the navbar hamburger menu
// Then we add the render method, inside it we add a button that will toggle the modal with a handler
// Then we add our Modal, with our form inside with it's label and input with an onSubmit handler
// Finally we create the onChange handler to set the state of the name state to the target value

// Now we can import it and add it in our App component
// We slide it between our navbar and our shoppinglist components
// However they are not aligned, so we'll import Container from reactstrap
// And wrap both items in a container for tidyness

// Now back in the modal we add a button 
/*
    <Button
        color="dark"
        style={{marginTop: '2rem'}}
        block
    >Add Item</Button>
*/

// Now we finally need to do our onSubmit event onclick
/*
    onSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            id: uuid(),
            name: this.state.name
        }

        // Add item via addItem action
        this.props.addItem(newItem)

        // Close the modal
        this.toggle()
    }
*/

// Now we need to create the addItem action from our itemActions.js
/*
    export const addItem = (item) => {
        return {
            type: ADD_ITEM,
            payload: item
        }
    }
*/
// Only this time we simply pass in the item id

// Finally we need to add it in our reducer
/*
    case ADD_ITEM: 
        return {
            ...state, 
            items: [action.payload, ...state.items]
        }
*/
// So here we return the whole state with the spread operator

// Finally in our ItemModal.js, we need to export properly the our class via connect()
/*
    const mapStateToProps =  (state) => ({
        item: state.item
    })

    export default connect(mapStateToProps, { addItem })(ItemModal)
*/

// And then, we return the whole state and append our payload (item) on to it
// It works !





/* ********************************************* */
/* Connecting the back-end */
/* ********************************************* */


// 1. Fixing our itemReducer

// First we delete the content of our initial state items array
// We can set it to an empty array
// We'll also add a loading value to our initial state, which will be a false boolean

// Now we can get rid of the uuid import since we don't use it anymore

// Then we can add another action to our import : ITEMS_LOADING
// -->      import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types'

// However we need to add it's export in our types, so in our types file
// -->      export const ITEMS_LOADING = 'ITEMS_LOADING'

// Then if we come back to our itemReducer, we can add this case to our switch() statement
/*
    case ITEMS_LOADING: 
        return {
            ...state,
            loading: true
        }
*/
// We simply need to add the initial state with the spread operator, 
// And then set our loading state to true


// 2. Adding a new action

// First we need to add our new type
// -->      import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types'

// Then we can create our new action
/*
    export const setItemsLoading = () => {
        return {
            type: ITEMS_LOADING
        }
    }
*/
// The only thing here is to set the type to ITEMS_LOADING which simply sets loading to true


// 3. Fixing our get request

// First we'll install axios once we have cd'ed to our client folder
// -->      npm i axios
// We now have it added in our dependencies, in our client's package.json

// Now in our itemActions.js file, we can import axios
// -->      import axios from 'axios'

// We comment out our old getItems actions and restart it
// This time, we add a second arrow taking in the dispatch keyword
// In our return statement, we call dispatch() taking in setItemsLoading() (making it true)

// Then we can call axios, to go to the /api/items route
// Since we set it earlier in the back-end we don't need to call the entire route, just api/items

// Then in the .then block, we call dispatch, with an object with a type of GET_ITEMS, and a payload of res.data
/*
    export const getItems = () => dispatch => {
        dispatch(setItemsLoading())
        axios
            .get('/api/items')
            .then(res => 
                dispatch({
                    type: GET_ITEMS,
                    payload: res.data
                })
            )
    }
*/
// This will fetch the data from the ./api/routes.js where we already have our data ready to go
/*
    router.get('/', (req, res) => {
        Item.find()
            .sort({ date: -1 })
            .then(items => res.json(items))
    });
*/

// Back in our itemReducer, we need in the first case, to add the items from the database since for now it is an empty array
/*
    switch(action.type) {
        case GET_ITEMS: 
            return {
                ...state,
                items: action.payload,
                loading: false
            }
*/
// Also we put back the lading state to false, since the items will be fetched
// And now it works ! The database is fetched !


// 4. Fixing the add button

// In our ItemModal, we can remove the id from the newItem
// Since it will be automatically generated by MongoDB
// We can also get rid of importing uuid()

// Now back in our actions we can change our export addItem
/*
    export const addItem = (item) => dispatch => {
        axios
            .post('api/items', item)
            .then(res => 
                dispatch({
                    type: ADD_ITEM,
                    payload: res.data
                }))
    }
*/
// So when we pass our post request to axios, we pass in item as second parameter
// This is the item generated in our modal
// In the then block, we call dispatch, with the type of ADD_ITEM and the payload of res.data
// That data will be the item we add to the database in our router.post function

// In our reducer, there is nothing more we need to do since the payload is already there


// 5. Fixing the delete button

// First we need to change id to _id (the id from MongoDB) in our ShoppingList component

// Now we need to change the actions in deleteItem
/*
    export const deleteItem = (id) => dispatch => {
        axios
            .delete(`/api/items/${id}`)
            .then(res => dispatch({
                type: DELETE_ITEM,
                payload: id
            }))
    }
*/

// Next in our reducer, we just need to add _id instead of id for MongoDB
/*
    case DELETE_ITEM:
        return {
            ...state,
            items: state.items.filter(item => item._id !== action.payload)
        }
*/
// It works !





/* ********************************************* */
/* Prepare and deploy */
/* ********************************************* */


// 1. Minor changes and fixes

// First in our index.html of our public folder, we can change the title to our app name
// Commented out the itemReducer import in our Modal since it is not used as well


// 2. npm build

// Normaly, if our application we could just run npm build
// It is a script in our package.json
// And that would take our react app and build it out into static asset
// We could upload that to any server if it was just a front end app

// So what we'll want to do is to modify the server;js file so that unless it is on the api/items route, it runs our index.html
// We also want the react build to be mounted once on heroku, and not push the build to heroku


// 3. Preparing server.js to deployment

// We first import "path"
// -->      const path = require('path');

// And now we can add our if statement
/*
    // Serve static assets if in production
    if(process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'))

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
        })
    }
*/
// So this should load the index.html build if not hitting the api/items path


// 4. Setting up our package.json server file

// We need to add a script
// -->          "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
// So here we need to set this flag to false during the build
// We also want to run npm install in the client folder
// And at the same time run the build in the client folder as well


// 5. Setting up heroku

// Now we can download and install 'HEROKU CLI'
// Now that it is installed we should be able to run heroku commands
// Once signed in on the heroku webpage we can go back to our vs code
// Here in our main folder (not the client one) we can login to heroku in our console
// -->      heroku login

// Then we can create our heroku app
// -->      heroku create

// This will return some special name
/*
    Creating app... done, ⬢ shrouded-mesa-36590
    https://shrouded-mesa-36590.herokuapp.com/ | https://git.heroku.com/shrouded-mesa-36590.git
*/

// Now in our browser we can return in heroku and login and we have our app crated on our dashboard
// By clicking on deploy they give us all the steps we need to do, so we need to add a git repository
// -->      git init
// -->      git add .
// This last one is to add all the folder
// -->      git commit -am 'Version 1.0.0'
// Finally we can do our commit

// Then we copy our heroku git:remote link
// -->      heroku git:remote -a shrouded-mesa-36590

// Then we can push our repository to heroku
// -->      git push heroku master

// At that point it should run the heroku-postbuild script

// Then it should be all good
// We can finally change our DNS and our domain name on the heroku website





/* ********************************************* */
/* Backend JWT Authentication */
/* ********************************************* */


// JWT stands for JSON Web Tokens
// It helps us to proctect certain routes

// Using this we can login or register to get a token
// Then we'll send this token to the backend to access protected routes


// 1. Creating the user Model

// So we create a "User.js" file in our models folder and fill it
/*
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    // Create our schema
    const UserSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        register_date: {
            type: Date,
            default: Date.now
        }
    });

    module.exports = User = mongoose.model('user', UserSchema);
*/
// We simply replaced Item by User, item by user, and ItemSchema by UserSchema
// We also added a password and email field with the email having a "unique" field set as true


// 2. Register user route

// Now we need to have a route for register user
// So first we create a user.js file in the api folder in the routes folder

// Then we need to add it in our server.js file
// Instead of having
// -->      const items = require('./routes/api/items');
// And then
// -->      app.use('/api/items', items);
// We're simply going to do like this
/*
    app.use('/api/items', require('./routes/api/items'))
    app.use('/api/users', require('./routes/api/users'))
*/

// Now we have an error since we have nothing in that file, so we go back to users.js
/*
    const express = require('express');
    const router = express.Router();

    // User model
    const User = require('../../models/User');

    // @route POST api/users
    // @desc register new users
    // @access public
    router.post('/', (req, res) => {
        res.send('register')
    });

    module.exports = router;
*/
// So we just made a few changes and have only one route compared to our items.js route

// Now we have a warning
// -->      DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
// So to fix this we can go to server.js
/*
    mongoose
        .connect(db, { 
            useNewUrlParser: true,
            useCreateIndex: true
        })
        .then(() => console.log('Mongo DB connected...'))
        .catch(err => console.log(err));
*/
// We simply add a connect parameter in the second argument and set it to true

// Now in postman, if we send a post request to this route, it returns "register" so it works !
// It means that now we can access that route !


// 3. Preparing dependencies

// Before, we needed bodyparser, but now express has it's own parser so we can remove the bodyparser import
// We can also comment out the app.use() for our bodyparser middleware and replace it by the same with express
// -->      app.use(express.json())
// We can also remove the package
// -->      npm remove body-parser

// Now we'll install bcrypt (the js version)
// -->      npm install bcryptjs

// Now we can go back to our user route
// We can comment out our 'register' test
// And add a destructuring of our User model assigning it to the body of the request
// After that we'll add a simple validation with if statements
/*
    // @route POST api/users
    // @desc register new users
    // @access public
    router.post('/', (req, res) => {
        // res.send('register')
        const { name, email, password } = req.body

        // Simple validation
        if(!name || !email || !password) {
            return res.status(400).json({msg: 'Please enter all fields'})
        }

        // Check for existing user
        User.findOne({ email })
            .then(user => {
                // If the user exists
                if(user) {return res.status(400).json({ msg: 'User already exists' })}
                // If the user doesn't exist
                const newUser = new User({
                    name, 
                    email, 
                    password
                })
            })
    });
*/


// 5. Encrypting password

// For now, the password is readable in the database, so we need to import bcrypt
// -->      const bcrypt = require('bcryptjs')

// Now underneath our user.findOne in our users route, we have a couple of things to do
// We're going to create what we call a "salt" which is used to create a hash
// In other words a password hash from a plain text password
/*
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err
            newUser.password = hash
            newUser.save()
                .then(user => {
                    res.json({
                        user: {
                            id: user.id, 
                            name: user.name,
                            email: user.email
                        }
                    })
                })
        })
    })
*/
// So here, after the newUser has its password created, we call bcrypt to generate a salt
// This salt has 10 characters of hash, and it returns a salt
// Then we call hash on our newUser.password, with our salt and our callback function
// In this function we throw an error if there is an error, 
// Then we hash our password, and we save it

// Now to test in postman, if we click post it returns "Please enter all fields", which means it works
// So we need to post data in a raw json format
/*
    {
        "name": "Emile",
        "email": "emile@email.com",
        "password": "1234556"
    }
*/
// Then it returns
/*
    {
        "user": {
            "id": "6054ce100e3d474fb01c421b",
            "name": "Emile",
            "email": "emile@email.com"
        }
    }
*/
// It works !
// If we check our user password in the database on Atlas, it is completely hashed !


// 6. JWT : JSON Web Tokens

// When we register we get a token just like when we log in
// Just like when we login from the framework

// We can start by going to jwt.io on our browser to check it out
// A web token is encoded and when we decode it there are three parts

// A header with an algorythm and token type
// A payload with data
// A verify signature

// In order to generate these, we need to use JSON Web Tokens
// -->      npm install jsonwebtoken
// Now we have it in our dependencies

// Usually, what we hace in our keys folder should be in variables and not like that
// Wo we'll also install the package config
// -->      npm i config

// So in our config foldedr, we can create a "default.json" file
/*
    {
        "mongoURI": "mongodb+srv://emilev:emile123@cluster0.w0kx3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        "jwtSecret" : "sl_myJwtSecret"
    }
*/

// Inside we can copy past our keys for our mongo URI as well as our JWT secret
// Now we can delete our keys.js file

// So now in our server.js file we can import config, and comment out our previous "db" configuration
// -->          const config = require('config')
// Instead we pass in by config
// -->      const db = config.get('mongoURI')

// Now back in users we'll import config too since as well as JWT
// -->      const config = require('config')
// -->      const jwt = require('jsonwebtoken')

// Now right above our res.json, in our .then block we can add
/*
    jwt.sign(
        { id: user.id },
        config.get('jwtSecret'),
        { expiresIn: 3600 }
    )
*/
// So we set the payload as a json object, with the id assigned to the user id as data
// We do that since we need to know which user it is
// We could add more stuff, but for now we'll leave it like that

// The next parameter is the secret "config.get('jwtSecret')"
// The next one is optional, it is an expire date that we set at 3600 s (one hour)
// Finally we have our callback function that takes in an error and a token as parameter
// In the return, we throw an if statement that throws the error if there is one
// If not it returns our res.json, in which we add our token: token

// So now it should return to us a token as well as a user
// Which we'll be able to authenticate with access private routes
// So back in postman we can do the same request
/*
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTcwNGZjZjk0MmNmMmYzNGQwZjI1ZiIsImlhdCI6MTYxNjMxNTY0NCwiZXhwIjoxNjE2MzE5MjQ0fQ.YnL2_LGVSf-IwkzcGbnlF2BjsIsngoxHxf1MlulyzKg",
        "user": {
            "id": "605704fcf942cf2f34d0f25f",
            "name": "Emile",
            "email": "emile@email.com"
        }
    }
*/
// And it works, we do have a token returned with the new user

// If we paste our token on the "jwt.io" webpage we can see that in the payloag, our id is the same as our user id in mongoDB


// 7. Authentication token

// We want to get a token when we authenticate as well as when we register

// So we can create a new file in our "api" folder in the "routes" folder called "auth.js"
// So we copy everything from the users route and paste it in here

// As for the route, we only need the email and the password compared to the users route
// We also ned to set the error when a user does not exist
// Finally we need to campare the password entered with the user.password
// And tjhen create our token
/*
    // @route POST api/auth
    // @desc authenticate new users
    // @access public
    router.post('/', (req, res) => {
        // res.send('register')
        const { email, password } = req.body

        // Simple validation
        if(!email || !password) {
            return res.status(400).json({msg: 'Please enter all fields'})
        }

        // Check for existing user
        User.findOne({ email })
            .then(user => {
                
                // If the user exists
                if(!user) {return res.status(400).json({ msg: 'User does not exists' })}
                
                // Validate password
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(!isMatch) return res.status(400).json({msg; 'Invalid credentials'})
                    })

                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 }, 
                        (err, token) => {
                            if(err) throw err
                            res.json({
                                token,
                                user: {
                                    id: user.id, 
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    )

            })
    });
*/

// Now in "server.js" we can add our route
// -->      app.use('/api/auth', require('./routes/api/auth'))


// 8. Private routes

// Now we need to create the middleware so that we can have private routes that are only accessed if we send along this token
// So in a new "middleware" folder in the root folder, we create the "auth.js" file

// We can now import config and jwt
// -->      const config = require('config')
// -->      const jwt = require('jsonwebtoken')

// Then we can create our auth function with req, res and next as parameters
/*
    function auth(req, res, next) {
        const token = req.header('x-auth-token')

        // Check for token
        if(!token) return res.status(401).json({ msg: 'No token, authorisation denied' })

        try {
            // Verify token
            const decoded = jwt.verify(token, config.get('jwtSecret'))

            // Add user from payload
            req.user = decoded
            next()
        } catch(e) {
            res.status(400).json({ msg: 'Token is not valid' })
        }
    }
*/

// We can finally export it
// -->      module.exports = auth


// 9. Now we need to add our authentication to our items route

// So we start by importing our new authentication file
// -->      const auth = require('../../middleware/auth')

// Now we simply add auth as a second parameter to our post request

// Now in postman, if we try to send a post request to add an item to the items route
// We have a 401, access denied error
// So if we get the user token from the previous user login
// We can paste it as value to the "x-auth-token" header that we add to our request
// In that case it works and the item is added to the database


// 10. Lastly we need a way to constantly validate our user authentication

// So first in our auth.js route, we import our auth middleware
// -->      const auth = require('../../middleware/auth')

// Then we can build our route 
/*
    // @route GET api/auth/user
    // @desc get user data
    // @access private
    router.get('/user', auth, (req, res) => {
        User.findById(req.user.id)
            .select('-password')
            .then(user => res.json(user))
    })
*/

// Now in postman if we do a get request to this route with the token as header it returns the following
/*
    {
        "_id": "605704fcf942cf2f34d0f25f",
        "name": "Emile",
        "email": "emile@email.com",
        "register_date": "2021-03-21T08:34:04.827Z",
        "__v": 0
    }
*/
// So it returns us the user minus the password like we requested with the select() method





/* ********************************************* */
/* React and Redux authentication states */
/* ********************************************* */


// So now we can not add or remove items anymore since we do not have the permission thanks to JWT
// So we want to create a modal for login and register


// 1. Adding our new types

// We're gonna work again on the front end, and we'll have two new reducers, an authentication and an error reducer
// We'll also have auth and error action files, as well as types, so we'll start with changing our types files
/*
    export const USER_LOADING = 'USER_LOADING'
    export const USER_LOADED = 'USER_LOADED'
    export const AUTH_ERROR = 'AUTH_ERROR'
    export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
    export const LOGIN_FAIL = 'LOGIN_FAIL'
    export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
    export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
    export const REGISTER_FAIL = 'REGISTER_FAIL'
    export const GET_ERRORS = 'GET_ERRORS'
    export const CLEAR_ERRORS = 'CLEAR_ERRORS'
*/
// The 8 first types our for authentication and the two lasts for error handling


// 2. Creating our reducers

// First we create two new files in our reducers folder : "authReducer.js" and "errorReducer.js"
// Then in our index.js inside our reducers folder we need to import these two new files
// -->      import errorReducer from './errorReducer'
// -->      import authReducer from './authReducer'

// Finally we can export them with the combineReducers redux method
/*
    export default combineReducers({
        item: itemReducer,
        error: errorReducer,
        auth: authReducer
    })
*/


// 3. The error reducer

// In the errorReducer file, we need only two types, get error and clear error, so it should be easier than the auth reducer
// FIrst we can import these two types
// -->      import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types'

// Then we can set up our initialState as an object
/*
    const initialState = {
        msg: {},
        status: null, 
        id: null
    }
*/

// And then we can set our switch() function
/*
    export default function(state = initialState, action) {
        switch(action.type) {
            case GET_ERRORS: 
                return {
                    msg: action.payload.msg,
                    status: action.payload.status,
                    id: action.payload.id
                }
            case CLEAR_ERRORS: 
                return {
                    msg: {},
                    status: null, 
                    id: null
                }
            default: 
                return state
        }
    }
*/


// 4. Now to set up our authReducer

// First we need to import all the types
/*
    import { 
        USER_LOADING, 
        USER_LOADED, 
        AUTH_ERROR, 
        LOGIN_SUCCESS, 
        LOGIN_FAIL, 
        LOGOUT_SUCCESS, 
        REGISTER_SUCCESS, 
        REGISTER_FAIL, 
        GET_ERRORS, 
        CLEAR_ERRORS } from '../actions/types'
*/

// Then we need to set up the initialState
/*
    const initialState = {
        token: localStorage.fetItem('token'),
        isAuthenticated: null, 
        isLoading: false, 
        user: null
    }
*/

// Now we need to export our switch() function with the different action types
// For the USER_LOADING action, we want to return the current state, which is why we use the spread operator
// We also need to set the isLoading boolean to true
// The second case is running almost all the time to check that we are logged in
// Then LOGIN_SUCCESS and REGISTER_SUCCESS will be the same, the only difference is we add the current payload, which is the token and the username
/*
    export default function(state = initialState, action) {
        switch(action.type) {
            case USER_LOADING: 
                return {
                    ...state, 
                    isLoading: true
                }
            case USER_LOADED:
                return {
                    ...state, 
                    isAuthenticated: true, 
                    isLoading: false, 
                    user: action.payload
                }
            case LOGIN_SUCCESS:
            case REGISTER_SUCCESS:
                localStorage.setItem('token', action.payload.token)
                return {
                    ...state,
                    ...action.payload,
                    isAuthenticated: true, 
                    isLoading: false
                }
            case AUTH_ERROR:
            case LOGIN_FAIL:
            case LOGOUT_SUCCESS:
            case REGISTER_FAIL:
                localStorage.removeItem('token')
                return {
                    ...state, 
                    token: null, 
                    user: null, 
                    isAuthenticated: false, 
                    isLoading: false
                }
            default: 
                return state
        }
    }
*/


// 5. Creating our two new actions

// Now with every request, we want to constantly load the user
// So we need an action called load user and error actions that are going to be working together

// So in our actions folder, we create "authActions.js" as well as "errorActions.js"
// Once we imported axios and the auth action types, we can check our token and load user by exporting a function
// Since it's an asynchronous function we need to call dispatch as well

// First we set up our error actions in our errorActions.js file
/*
    import { GET_ERRORS, CLEAR_ERRORS } from './types'

    // RETURN ERRORS
    export const returnErrors = (msg, status, id = null) => {
        return {
            type: GET_ERRORS, 
            payload: { msg, status, id }
        }
    }

    // CLEAR ERRORS
    export const clearErrors = () => {
        return {
            type: CLEAR_ERRORS
        }
    }
*/

// Now we can call the loadUser action
/*
// Check token & load user
    export const loadUser = () => (dispatch, getState) => {
        // User loading
        dispatch({ type: USER_LOADING })
        // Get token from local storage
        const token = getState().auth.token

        // Headers
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }

        // If token, add to headers
        if(token) {
            config.headers['x-auth-token'] = token
        }

        axios.get('/api/auth/user', config)
            .then(res => dispatch({
                type: USER_LOADED,
                payload: res.data
            }))
            .catch(err => {
                dispatch(returnErrors(err.response.data, err.response.status))
                dispatch({
                    type: AUTH_ERROR
                })
            })
    }
*/


// 6. Now to call our loadUser from our App

// Back in App.js we ned to call this action frequently
// So we need to call it during the componentDidMount() lifecycle method
/*
    componentDidMount() {
        store.dispatch(loadUser())
    }
*/
// We also need to import it
// -->      import { loadUser } from './actions/authActions'

// Now if we look at our app on our browser in our redux inspector
// We can see that the items loading is called, and the user loading too
// Now we need to set up our user loaded action
// Since we'll be using tokens in different actions, we'll make it a separate funcction to check tokens and setup the config and headers
/*
    // Check token & load user
    export const loadUser = () => (dispatch, getState) => {
        // User loading
        dispatch({ type: USER_LOADING })

        axios.get('/api/auth/user', tokenConfig(getState))
            .then(res => dispatch({
                type: USER_LOADED,
                payload: res.data
            }))
            .catch(err => {
                dispatch(returnErrors(err.response.data, err.response.status))
                dispatch({
                    type: AUTH_ERROR
                })
            })
    }

    // Setup config/headers and token
    export const tokenConfig = getState => {
        // Get token from local storage
        const token = getState().auth.token

        // Headers
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }

        // If token, add to headers
        if(token) {
            config.headers['x-auth-token'] = token
        }
        return config
    }
*/
// And there we go !





/* ********************************************* */
/* React registration */
/* ********************************************* */


// So in our components folder we create a folder called "auth"
// Inside we create the "RegisterModal.js" component
/*
    import React, { Component } from 'react'
    import { 
        Button, 
        Modal, 
        ModalHeader,
        ModalBody, 
        Form, 
        FormGroup,
        Label, 
        Input,
        NavLink
    } from 'reactstrap'
    import { connect } from 'react-redux'
    import PropTypes from 'prop-types'

    class RegisterModal extends Component {
        state = {
            modal: false,
            name: '', 
            email: '', 
            password: '',
            msg: null
        }

        static PropTypes = {
            isAuthenticated: PropTypes.bool, 
            error: PropTypes.object.isRequired
        }

        toggle = () => {
            this.setState({
                modal: !this.state.modal
            })
        }

        onChange = (e) => {
            this.setState({ [e.target.name]: e.target.value })
        }

        onSubmit = (e) => {
            e.preventDefault()



            // Close the modal
            this.toggle()
        }

        render() {
            return(
                <div>
                    <NavLink onClick={this.toggle} href="#">
                        Register
                    </NavLink>
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                    >
                        <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        onChange={this.onChange}
                                    />

                                    <Label for="email">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        onChange={this.onChange}
                                    />

                                    <Label for="password">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        onChange={this.onChange}
                                    />

                                    <Button
                                        color="dark"
                                        style={{marginTop: '2rem'}}
                                        block
                                    >Register</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            )
        }
    }

    const mapStateToProps =  (state) => ({
        isAuthenticated: state.item.isAuthenticated,
        error: state.error
    })

    export default connect(mapStateToProps {  })(RegisterModal)
*/


// 2. Now since we want to display this in the navbar, we can go to the appNavBar component
/*
import React, { Component } from 'react'
import { 
    Button, 
    Modal, 
    ModalHeader,
    ModalBody, 
    Form, 
    FormGroup,
    Label, 
    Input,
    NavLink,
    Alert
 } from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { register } from '../../actions/authActions'

class RegisterModal extends Component {
    state = {
        modal: false,
        name: '', 
        email: '', 
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool, 
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props
        if(error !== prevProps.error) {
            // Check for register error
            if(error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const { name, email, password } = this.state

        // Create user object
        const newUser = {
            name, 
            email, 
            password
        }

        // Attempt to register
        this.props.register(newUser)

    }

    render() {
        return(
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Register
                </NavLink>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        { this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null }
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    onChange={this.onChange}
                                    className="mb-3"
                                />

                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={this.onChange}
                                    className="mb-3"
                                />

                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={this.onChange}
                                    className="mb-3"
                                />

                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Register</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps =  (state) => ({
    isAuthenticated: state.item.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, { register })(RegisterModal)
*/

// Now when there is an error the message displays, however if we close and open the modal again, the message is still there
// So we need to import clearErrors from our error actions
// Then we export it along register
// We also need to add it to propTypes
// And then we can implement it inside our toggle function
/*
    toggle = () => {
        // Clear errors
        this.props.clearErrors()
        this.setState({
            modal: !this.state.modal
        })
    }
*/

// Now we just want the modal to close on it's own once the user has successfully registered


// 3. Now we need to logout and clear the state of the user and it's token

// So in components/auth we create the "Logout.js" file
/*
    import React, { Component, Fragment } from 'react'
    import { NavLink } from 'reactstrap'
    import { connect } from 'react-redux'
    import { logout } from '../../actions/authActions'
    import PropTypes from 'prop-types'

    export class Logout extends Component {
        
        static propTypes = {
            logout: PropTypes.func.isRequired
        }
        
        render() {
            return (
                <Fragment>
                    <NavLink onClick={this.props.logout} href="#">
                        Logout
                    </NavLink>
                </Fragment>
            )
        }
    }

    export default connect(null, { logout })(Logout)
*/
// Finally we can add this component to our navbar





/* ********************************************* */
/* React login and access control */
/* ********************************************* */


// 1. So in our components/auth we can create "LoginModal.js"
/*
    import React, { Component } from 'react'
    import { 
        Button, 
        Modal, 
        ModalHeader,
        ModalBody, 
        Form, 
        FormGroup,
        Label, 
        Input,
        NavLink,
        Alert
    } from 'reactstrap'
    import { connect } from 'react-redux'
    import PropTypes from 'prop-types'
    import { login } from '../../actions/authActions'
    import { clearErrors } from '../../actions/errorActions'

    class LoginModal extends Component {
        state = {
            modal: false,
            email: '', 
            password: '',
            msg: null
        }

        static propTypes = {
            isAuthenticated: PropTypes.bool, 
            error: PropTypes.object.isRequired,
            login: PropTypes.func.isRequired, 
            clearErrors: PropTypes.func.isRequired
        }

        componentDidUpdate(prevProps) {
            const { error, isAuthenticated } = this.props
            if(error !== prevProps.error) {
                // Check for register error
                if(error.id === 'LOGIN_FAIL') {
                    this.setState({ msg: error.msg.msg })
                } else {
                    this.setState({ msg: null })
                }
            }

            // If authenticated, and if modal is true (open), then close modal
            if(this.state.modal) {
                if(isAuthenticated) {
                    this.toggle()
                }
            }
        }

        toggle = () => {
            // Clear errors
            this.props.clearErrors()
            this.setState({
                modal: !this.state.modal
            })
        }

        onChange = (e) => {
            this.setState({ [e.target.name]: e.target.value })
        }

        onSubmit = (e) => {
            e.preventDefault()

            const { name, email, password } = this.state

            // Create user object
            const newUser = {
                name, 
                email, 
                password
            }

            // Attempt to register
            this.props.register(newUser)

        }

        render() {
            return(
                <div>
                    <NavLink onClick={this.toggle} href="#">
                        Login
                    </NavLink>
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                    >
                        <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                        <ModalBody>
                            { this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null }
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>

                                    <Label for="email">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        onChange={this.onChange}
                                        className="mb-3"
                                    />

                                    <Label for="password">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        onChange={this.onChange}
                                        className="mb-3"
                                    />

                                    <Button
                                        color="dark"
                                        style={{marginTop: '2rem'}}
                                        block
                                    >Login</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            )
        }
    }

    const mapStateToProps =  (state) => ({
        isAuthenticated: state.item.isAuthenticated,
        error: state.error
    })

    export default connect(mapStateToProps, { login, clearErrors })(LoginModal)
*/
// Then we can import it and add it to the navbar


// 2. Now to create our login action
/*
    // Login user
    export const login = ({ email, password }) => dispatch => {
        // Headers
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }

        // Request body
        const body = JSON.stringify({ email, password })

        axios.post('/api/auth', body, config)
            .then(res => dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            }))
            .catch(err => {
                dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))
                dispatch({
                    type: LOGIN_FAIL
                })
            })
    }
*/


// 3. Now we'll reorder the login, register and logout links to appear only when needed

// So in our navbar component, we need to be able to access our auth state
// So we import connect and proptypes, then we mapstatetoprops for auth
// Then we can create two variables that hold the links, and displays it when needed
/*
        const { isAuthenticated, user } = this.props.auth

        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>{ user ? `Welcome ${user.name}` : '' }</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        )

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        )
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">My Shopping List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                { isAuthenticated ? authLinks : guestLinks }
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
*/


// 4. Now we need to be able to delete and add new items when logged in

// So back in our itemActions we import tokenConfig and return error

// Next, our getItems is good, but we only need to add a .catch statement to handle errors
// -->      .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

// Then we can add the same .catch method to our delete and add item functions
// After we need to send along the token to both delete item and add item
// So first we need to call fetState it with dispatch
// Then we can set it as parameter in our post and delete methods as the argument for the tokenConfig function
/*
    export const deleteItem = (id) => (dispatch, getState) => {
        axios
            .delete(`/api/items/${id}`, tokenConfig(getState))
            .then(res => dispatch({
                type: DELETE_ITEM,
                payload: id
            }))
            .catch(err => 
                dispatch(returnErrors(err.response.data, err.response.status))
            )
    }

    export const addItem = (item) => (dispatch, getState) => {
        axios
            .post('api/items', item, tokenConfig(getState))
            .then(res => 
                dispatch({
                    type: ADD_ITEM,
                    payload: res.data
                }))
            .catch(err => 
                dispatch(returnErrors(err.response.data, err.response.status))
            )
    }
*/
// Now it works !


// 5. Now we need to hide our delete and add items buttons when not logged in

// So we add proptypes and isAuthenticated
// Like that we can call this in a ternary operator to manage the add item button
/*
                { this.props.isAuthenticated ?  
                    <Button
                        color="dark"
                        style={{marginBottom: '2rem'}}
                        onClick={this.toggle}
                    >Add Item</Button> : 
                    <h4 className="mb-3 ml-4">Please log in to manage items</h4>}
*/

// Then in shopping list
/*
    { this.props.isAuthenticated ? 
        <Button
            className="remove-btn" 
            color="danger"
            size="sm"
            // onClick={() => {
            //     this.setState(state => ({
            //         items: state.items.filter(item => item.id !== id)
            //     }))
            // }}         
            onClick={this.onDeleteClick.bind(this, _id)} 
        >&times;</Button> : null }
*/


// And that's it !

// -->      https://github.com/bradtraversy/mern_shopping_list







/* ************************************************************************************************************ */
/* ************************************************************************************************************ */
/* ************************************************************************************************************ */







/* ********************************************* */
/* Redux introduction and preparation */
/* ********************************************* */


// Redux is a predicatable state container for JS apps
// It manages the state of our application in a predictable way

// We'll see just redux first
// After we'll see how to bind them with react


// So in a new folder called redux-demo, we type in a console : npm init --yes
// This initialises a package.json file with the default settings

// Then we install the redux dependency
// -->      npm install redux

// Then we create an index.js file with a console.log statement
// -->      console.log('From index.js')

// Now when we type "node index" in the console, the log appears !





/* ********************************************* */
/* Redux three core concepts */
/* ********************************************* */


// Our scenario will be in a cake shop

// We have the shop with the cakes stored on a shelf
// A shopkeeper at the front of the store
// A custimer at the store entrance

// A customer can buy a cake
// The shopkeeper can remove the cake from the shelf and receipt to keep track


// Now how to link this to redux and our three core concepts ?

// Store --> shop --> holds the state of our application
// Action --> intention to buy a cake --> describes what happened
// Reducer --> shopkeeper --> ties the store and actions together


// So the store holds the state of our application
// An action describes the changes in the state of the application
// A reducer carries out the state transition depending on the action





/* ********************************************* */
/* Redux three principles */
/* ********************************************* */


// First principle

// --> the state of our whole application is stored in an object tree within a single store
// So we maintain our application state in a single object which would be managed by the redux store
// Here we are tracking the number of cakes
/*
    {
        numberOfCakes: 10
    }
*/

// Second principle

// --> The only way to change the state is to emit an action, an object describing what happened
// So to update the state of our app, we need to let redux know about that with an action
// We can not directly update the state object
// Here we can not directly take a cake off a shelf
// We need to let the shopkeeper know about our action : BUY_CAKE
/*
    {
        type: BUY_CAKE
    }
*/


// Third principle

// --> To specify how the state tree is transformed by actions, we write pure reducers
// Pure reducers are functions that take "previousState" and "action" as parameters and return a "newState"
// So the reducer is the shop keeper, he takes a cake off if we ask him to, print a receipt, decrease the number of cakes etc.


// So to sum up

// Our JS is subscribed to our redux store that keeps our state
// If we want to change it we need to "dispatch" an action
// This action goes to the reducer who changes the state in the store
// The store returns the new state to the app since the app is subscribed to it





/* ********************************************* */
/* Redux actions */
/* ********************************************* */


// Actions are the only way our application can interact with the store
// They carry some information from our app to the redux store
// They are plain JS objects
// They have a "type" property that indicates the type of action being performed
// The type property is typically defined as string constants

/*
    const BUY_CAKE = 'BUY_CAKE'

    {
        type: BUY_CAKE,
        info: 'First redux action'
    }
*/

// Now we transform our action into a function
/*
    function buyCake() {
        return {
                type: BUY_CAKE,
                info: 'First redux action'
            }
    }
*/

// So an action is an object with a type property
// An action creator is a function that returns an action object





/* ********************************************* */
/* Redux reducers */
/* ********************************************* */


// Reducers specify how the app's state changes in response to actions sent to the store
// They are functinos that accepts state and action as arguments and returns the next state
// -->      (previousState, action) => newState


// To define our previous state, we need the initialState
/*
    const initialState = {
        numOfCakes: 10
    }
*/

// Now we can write our reducer function
/*
    const reducer = (state = initialState, action) => {
        switch(action.type) {
            case BUY_CAKE: return {
                numOfCakes: state.numOfCakes - 1
            }
            default: 
                return state
        }
    }
*/

// It is sometimes better to create a copy of our state object
/*
    const reducer = (state = initialState, action) => {
        switch(action.type) {
            case BUY_CAKE: return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            default: 
                return state
        }
    }
*/
// We do that using the spread operator "..." on our state before triggering our action





/* ********************************************* */
/* Redux store */
/* ********************************************* */


// There is onl on store for the entire application but it has responsablilities

// 1. It holds the application state
// 2. It allows access to state via "getState()"
// 3. It allows state to be updated via "dispatch(action)"
// 4. Registers listeners via "subscribe(listener)"
// 5. Handles unregistering of listeners via the function returned by subsribe(listener)


// Now to implement all this


// 1. Holding the application state

// -->      const redux = require('redux')
// Since for now we're in a node.js application we can use require to import it

// Then we can pull out our createStore function
// -->      const createStore = redux.createStore

// Finally we can create our store, passing in our reducer function as parameter
// -->      const store = createStore(reducer)
// Our reducer function has the initial state of our application
// It is required for the store in order to make the state transitions based on the actions received


// 2. Accessing the state via getState()

// We'll add a log statement
// -->      console.log('Initial state', store.getState())
// This will return our current state when we type in "node index" in our console
// -->      Initial state { numOfCakes: 10 }


// 4. Implementing the subscribe method

// -->      store.subscribe(() => console.log('Updated state', store.getState()))


// 3. Allow updating the state with a dispatch method

// -->      store.dispatch(buyCake())


// 5. Unsubscribe

// -->      const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))


// Now when we enter "node index" in our console it gives us this
/*
    Initial state { numOfCakes: 10 }
    Updated state { numOfCakes: 9 }
    Updated state { numOfCakes: 8 }
    Updated state { numOfCakes: 7 }
*/





/* ********************************************* */
/* Multiple reducers */
/* ********************************************* */


// We add an ice cream shop !
// So we will need a second reducer

// First if we use only one reducer it will look like that
/*
    const BUY_ICECREAM = 'BUY_ICECREAM'
    function buyIceCream() {
        return {
            type: BUY_ICECREAM,
            info: 'Second redux action'
        }
    }
    const initialState = {
        numOfCakes: 10,
        numOfIceCreams: 20
    }
    const reducer = (state = initialState, action) => {
        switch(action.type) {
            case BUY_CAKE: return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            case BUY_ICECREAM: return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
            default: 
                return state
        }
    }
    store.dispatch(buyCake())
    store.dispatch(buyCake())
    store.dispatch(buyCake())
    store.dispatch(buyIceCream())
    store.dispatch(buyIceCream())
*/
// And this will return this
/*
Initial state { numOfCakes: 10, numOfIceCreams: 20 }
Updated state { numOfCakes: 9, numOfIceCreams: 20 }
Updated state { numOfCakes: 8, numOfIceCreams: 20 }
Updated state { numOfCakes: 7, numOfIceCreams: 20 }
Updated state { numOfCakes: 7, numOfIceCreams: 19 }
Updated state { numOfCakes: 7, numOfIceCreams: 18 }
*/

// But if we have many products it will become messy and hard to debug
// So we'll put in place a second reducer


// Now to combineReducers()
/*
    const BUY_CAKE = 'BUY_CAKE'
    const BUY_ICECREAM = 'BUY_ICECREAM'

    function buyCake() {
        return {
                type: BUY_CAKE,
                info: 'First redux action'
            }
    }

    function buyIceCream() {
        return {
            type: BUY_ICECREAM,
            info: 'Second redux action'
        }
    }
    const initialCakeState = {
        numOfCakes: 10
    }

    const initialIceCreamState = {
        numOfIceCreams: 20
    }

    const cakeReducer = (state = initialCakeState, action) => {
        switch(action.type) {
            case BUY_CAKE: return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            default: 
                return state
        }
    }

    const iceCreamReducer = (state = initialIceCreamState, action) => {
        switch(action.type) {
            case BUY_ICECREAM: return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
            default: 
                return state
        }
    }
*/

// Now we import combineReducers
// -->      const combineReducers = redux.combineReducers

// Next, before creating our store, we combine our reducers
/*
    const rootReducer = combineReducers({
        cake: cakeReducer,
        iceCream: iceCreamReducer
    })

    const store = createStore(rootReducer)
*/
// This returns
/*
    Initial state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 20 } }
    Updated state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 20 } }
    Updated state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 20 } }
    Updated state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 20 } }
    Updated state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 19 } }
    Updated state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 18 } }
*/


// So if we follow up, we create a rootReducer combining all our reducers
// Then we create a store passing in the root reducer as parameter to the method
// Then we call dispatch calling functions
// The action functions called return actions that we have defined
// These actions are took in by the reducers that modify the state
// The console log shows the state of all reducers as objects each time one of them is modified





/* ********************************************* */
/* Middleware */
/* ********************************************* */


// It is the suggested way to extend redux with custom functionality
// It provides a third party extension point between dispatching an action, and the moment it reaches the reducer
// We can use a middleware for logging, crash reporting, performing asynchronous tasks etc.

// We will use "redux-logger"
// -->      npm install redux-logger

// Then we need to import it
// -->      const reduxLogger = require('redux-logger')

// Then we can create our logger
// -->      const logger = reduxLogger.createLogger()


// How do we include a middleware ?
// We use the applyMiddleware function from redux
// -->      const applyMiddleware = redux.applyMiddleware

// Then we can include the middleware as second parameter of our createStore function passing our middleware as well
// -->      const store = createStore(rootReducer, applyMiddleware(logger))

// We can pass in as many middleware as we want !

// We can finally remove our console log statement in our subscribe method
// -->      const unsubscribe = store.subscribe(() => {})

// When typing 'node index' to run our file, it works !

/*
    Initial state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 20 } }
    action BUY_CAKE @ 08:39:25.266
    prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 20 } }
    action     { type: 'BUY_CAKE', info: 'First redux action' }
    next state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 20 } }
    action BUY_CAKE @ 08:39:25.270
    prev state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 20 } }
    action     { type: 'BUY_CAKE', info: 'First redux action' }
    next state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 20 } }
    action BUY_CAKE @ 08:39:25.273
    prev state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 20 } }
    action     { type: 'BUY_CAKE', info: 'First redux action' }
    next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 20 } }
    action BUY_ICECREAM @ 08:39:25.275
    prev state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 20 } }
    action     { type: 'BUY_ICECREAM', info: 'Second redux action' }
    next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 19 } }
    action BUY_ICECREAM @ 08:39:25.277
    prev state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 19 } }
    action     { type: 'BUY_ICECREAM', info: 'Second redux action' }
    next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 18 } }
*/





/* ********************************************* */
/* Asynchronous actions */
/* ********************************************* */


// Synchronous actions

// In our application, we are using "synchronous actions"
// As soon as an action is dispatched, the state is immmediately updated
// If we dispatch the BUY_CAKE action, the numOfCakes is right away decremented by 1
// Same with the BUY_ICECREAM action as well


// Asynchronous actions

// For example :
// When we do API calls to fetch data from an end point and use that data in our application


// In our application, we will fetch a list of users and store it in our state
/*
{
    loading: true,
    data: [],
    error: ''
}
*/
// Loading : displays a loading spinner for our component
// Data : list of users
// Error : displays errors to the user


// For our actions :
// FETCH_USERS_REQUEST : fetch list of users
// FETCH_USERS_SUCCESS : fetched successfully
// FETCH_USERS_FAILURE : not fetched

// So our reducer will have three cases


// So we'll build our application now inside the "asyncActions.js" file

// First we set up our initial state
/*
    const initialState = {
        loading: false,
        users: [],
        error: ''
    }
*/

// Then we can set up our actions
/*
    const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
    const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
    const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'
*/

// Now we can create our action creators
/*
    const fetchUsersRequest = () => {
        return {
            type: FETCH_USERS_REQUEST
        }
    }

    const fetchUsersSuccess = (users) => {
        return {
            type: FETCH_USERS_SUCCESS,
            payload: users
        }
    }

    const fetchUsersFailure = (error) => {
        return {
            type: FETCH_USERS_FAILURE,
            payload: error
        }
    }
*/

// Now we can create our reducer function
/*
    const reducer = (state = initialState, action) => {
        switch(action.type) {
            case FETCH_USERS_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case FETCH_USERS_SUCCESS:
                return {
                    loading: false,
                    users: action.payload,
                    error: ''
                }
            case FETCH_USERS_FAILURE:
                return {
                    loading: false,
                    users: [],
                    error: action.payload
                }
        }
    }
*/
// Here, "action.payload", correspond to the payload property of each of our actions

// Finally we can create our redux store
// So at the top we can import redux and the createStore function
/*
    const redux = require('redux')
    const createStore = redux.createStore
*/
// At the bottom we can create our store passing in our reducer function as parameter
// -->      const store = createStore(reducer)

// Our application is set up !





/* ********************************************* */
/* Redux-Thunk middleware */
/* ********************************************* */


// Now we'll see how to use action creators with network requests
// Or how to make an API call while working with redux

// We will need to install axios and redux-thunk
// -->      npm i axios redux-thunk

// Now we need to apply the thunk middleware
// -->      const applyMiddleware = redux.applyMiddleware

// Then we can pass it in our createStore function as second argument
// -->      const store = createStore(reducer, applyMiddleware)

// Then we can import the thunk middleware
// -->      const thunkMiddleware = require('redux-thunk').default

// And finally pass it in our applyMiddleware function call
// -->      const store = createStore(reducer, applyMiddleware(thunkMiddleware))

// And we can also import axios
// -->      const axios = require('axios')


// Now we need to define our asynchronous action creator
// Thunk helps us by returning a function instead of an object when creating an action creator
// This returned function is special since it doesn't have to be pure
// This allows to have side-effects such as asynchronous API calls
// This function can also dispatch actions like the ones that we have seen before
// So we need to pass in the dispatch method as its argument
// We'll be using the JSONPlaceholder site with the /users endpoint
/*
    const fetchUsers = () => {
        return function(dispatch) {
            dispatch(fetchUsersRequest())
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    // response.data is the array of users
                    const users = response.data.map(user => user.id)
                    dispatch(fetchUsersSuccess(users))
                })
                .catch(error => {
                    // error.message is the error description
                    dispatch(fetchUsersFailure(error.message))
                })
        }
    }
*/

// Finally we can subscribe and then dispatch fetchUsers()
/*
    store.subscribe(() => { console.log(store.getState()) })
    store.dispatch(fetchUsers())
*/


// We can now run our application with node.js
// -->      node .\asyncActions.js

// This will return our response
/*
    { loading: true, users: [], error: '' }
    {
    loading: false,
    users: [
        1, 2, 3, 4,  5,
        6, 7, 8, 9, 10
    ],
    error: ''
*/

// All good, so now we'll connect all this to react now !





/* ********************************************* */
/* React-Redux setup */
/* ********************************************* */


// We'll start by building a cake shop app
// So we create a new react app
// Then we install redux and react-redux
// Then in a new "components" folder we create the "CakeContainer.js" functional component
/*
    import React from 'react'

    function CakeContainer() {
        return (
            <div>
                <h2>Number of cakes</h2>
                <button>Buy Cake</button>
            </div>
        )
    }

    export default CakeContainer
*/
// And finally we include our new component in our App.js file





/* ********************************************* */
/* React-Redux actions setup */
/* ********************************************* */


// We create a "redux" folder in our src folder
// In that folder we create a "cakes" folder
// And inside we create the "cakeActions.js" file
/*
    const buyCake = () => {
        return {
            type: 'BUY_CAKE'
        }
    }
*/

// Now in the same folder we create the "cakeTypes.js" file and inside export our variable
// -->      export const BUY_CAKE = 'BUY_CAKE'

// Now in our action file, we can import the variable and replace the string inside the return statement
/*
    import { BUY_CAKE } from './cakeTypes'

    export const buyCake = () => {
        return {
            type: BUY_CAKE
        }
    }
*/
// Also we export it





/* ********************************************* */
/* React-Redux reducer setup */
/* ********************************************* */


// In our cake folder we create the "cakeReducer.js" file

// Wo we import our type
// Then we set up our initial state
// Then we create our reducer function, passing in the state set at the initial state and action as arguments
// Then we create our switch() function
// Finally we export our reducer function
/*
    import { BUY_CAKE } from './cakeTypes'

    const initialState = {
        numOfCakes: 10
    }

    const cakeReducer = (state = initialState, action) => {
        switch(action.type) {
            case BUY_CAKE:
                return {
                    ...state,
                    numOfCakes: state.numOfCakes - 1
                }
            default:
                return state
        }
    }

    export default cakeReducer
*/





/* ********************************************* */
/* React-Redux store setup */
/* ********************************************* */


// In our redux folder, we create our "store.js" file
// Inside it we import createStore from redux as well as our cake reducer
// Then we create our store passing in cakeReducer as argument
// And finally we can export it as default
/*
    import { createStore } from 'redux'
    import cakeReducer from './cake/cakeReducer'

    const store = createStore(cakeReducer)

    export default store
*/


// Now we'll be needing the react-redux component
// To make our store accessible to our react app, we need to import the "Provider" and wrap our app with it
/*
    import './App.css';
    import { Provider } from 'react-redux'
    import store from './redux/store'
    import CakeContainer from './components/CakeContainer'


    function App() {
    return (
        <Provider store={store}>
        <div className="App">
            <CakeContainer />
        </div>
        </Provider>
    );
    }

    export default App;
*/
// To do that we need to pass in the store as our provider prop





/* ********************************************* */
/* React-Redux connect */
/* ********************************************* */


// 1. First we set up our mapStateToProps function

/*
    const mapStateToProps = (state) => {
        return {
            numOfCakes: state.numOfCakes
        }
    }
*/


// 2. Then we set up our mapDispatchToProps function

/*
    const mapDispatchToProps = (dispatch) => {
        return {
            buyCake: () => dispatch(buyCake())
        }
    }
*/


// 3. Then in a new index.js file in our redux folder

// We export our buyCake function
// -->      export { buyCake } from './cake/cakeActions'


// 4. Then we can import it in our CakeContainer with "connect" from react-redux

// We also import "connect" from react-redux
/*
    import { buyCake } from '../redux'
    import { connect } from 'react-redux'
*/

// -->      export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)

// Finallt we just need to pass in props
/*
    function CakeContainer(props) {
        return (
            <div>
                <h2>Number of cakes - {props.numOfCakes}</h2>
                <button onClick={props.buyCake}>Buy Cake</button>
            </div>
        )
    }
*/





/* ********************************************* */
/* React-Redux with hooks "useSelector()" */
/* ********************************************* */


// exists as of React-Redux v7.1

// So we create the "HooksCakeContainer.js" file in our components
/*
    import React from 'react'

    function HooksCakeContainer() {
        return (
            <div>
                <h2>Number of cakes - </h2>
                <button>Buy Cake</button>
            </div>
        )
    }

    export default HooksCakeContainer
*/

// The useSelector() hook works a bit like the mapStateToProps() function
// So we start by importing it
// -->      import { useSelector } from 'react-redux'

// Now we can pass in the state and return the  number of cakes, just like in the mapStateToProps function
// -->      const numOfCakes = useSelector(state => state.numOfCakes)

// We can then just pass it in and check it once our new component is in our App.js

// It works, but we are just missing the onClick handler





/* ********************************************* */
/* React-Redux with hooks "useDispatch()" */
/* ********************************************* */


// First we import useDispatch from reactRedux
// -->      import { useSelector, useDispatch } from 'react-redux'

// Then we simply need to add it in our onClick handler
// -->      <button onClick={() => dispatch(buyCake)}>Buy Cake</button>

// And that's it ! It works !





/* ********************************************* */
/* Cakes and IceCreams */
/* ********************************************* */


// Now we'll be implementing the ice cream state

// First we'll be creating an iceCream folder in the redux folder
// Inside we'll create iceCreamTypes, iceCreamReducer and iceCreamActions

// In our iceCreamTypes.js we export our type
// -->      export const BUY_ICECREAM = 'BUY_ICECREAM'

// Next in our iceCreamActions.js we can create our action
/*
    import { BUY_ICECREAM } from './iceCreamTypes'

    export const buyIceCream = () => {
        return {
            type: BUY_ICECREAM
        }
    }
*/

// Then in our index.js file we export our function too
// -->      export { buyIceCream } from './iceCream/iceCreamActions'

// Then we'll define our reducer in iceCreamReducer.js
/*
    import { BUY_ICECREAM } from './iceCreamTypes'

    const initialState = {
        numOfIceCreams: 20
    }

    const iceCreamReducer = (state = initialState, action) => {
        switch(action.type) {
            case BUY_ICECREAM:
                return {
                    ...state,
                    numOfIceCreams: state.numOfIceCreams - 1
                }
            default:
                return state
        }
    }

    export default iceCreamReducer
*/

// Now we need to combine our reducers in our root reducer
// So in the redux folder we create "rootReducer.js"
/*
    import { combineReducers } from 'redux'
    import cakeReducer from './cake/cakeReducer'
    import iceCreamReducer from './iceCream/iceCreamReducer'

    const rootReducer = combineReducers({
        cake: cakeReducer,
        iceCream: iceCreamReducer
    })

    export default rootReducer
*/

// Now in store.js
/*
    import { createStore } from 'redux'
    import rootReducer from './rootReducer'

    const store = createStore(rootReducer)

    export default store
*/


// Now we can create the IceCreamContainer.js component
/*
    import React from 'react'
    import { buyCake, buyIceCream } from '../redux'
    import { connect } from 'react-redux'

    function IceCreamContainer(props) {
        return (
            <div>
                <h2>Number of ice creams - {props.numOfIceCreams}</h2>
                <button onClick={props.buyIceCream}>Buy Cake</button>
            </div>
        )
    }

    const mapStateToProps = (state) => {
        return {
            numOfCakes: state.numOfIceCreams
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            buyIceCream: () => dispatch(buyIceCream())
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
*/

// Finally we just include our new component in our App.js file
// However it doesn't work

// It's because we need to specify which state we are updating in our mapStateToProps functions and hooks
// -->      numOfIceCreams: state.iceCream.numOfIceCreams





/* ********************************************* */
/* Logger middleware */
/* ********************************************* */


// First we install the logger
// -->      npm i redux-logger

// Then in our store.js we can import it
// -->      import logger from 'redux-logger'

// Then we import the applyMiddleware function from redux
// -->      import { createStore, applyMiddleware } from 'redux'

// Then we simply pass the logger as parameter for the applyMiddleware, passed in as second argument to our createStorre function
// -->      const store = createStore(rootReducer, applyMiddleware(logger))





/* ********************************************* */
/* Redux devTools extension */
/* ********************************************* */


// Once installed in our browser, we need to include it in our application
// We can check that out in a github repo
// -->      https://github.com/reduxjs/redux-devtools/blob/master/docs/Walkthrough.md#manual-integration

// So in our console :
// -->      npm install --save redux-devtools-extension

// Once installed we can use it in our store.js file
// -->      import { composeWithDevtools } from 'redux-devtools-extension'

// And then use it to wrap our second argument of our createStore function
// -->      const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))





/* ********************************************* */
/* Redux action payload */
/* ********************************************* */


// We are going to add an input element to specify the number of cakes to buy
// So in a new component called "NewCakeContainer.js"

// We start by importing the useState() hook, then we set the state
// -->      const [number, setNumber] = useState(1)

// Then we add our input to the JSX
// -->      <input type='text' value={number} onChange={e => setNumber(e.target.value)} />

// Now we need to change our onClick handler
// -->      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>

// Finally we need to adapt our mapDispatchToProps function
// -->      buyCake: (number) => dispatch(buyCake(number))

// Now we just need to adapt our action by adding the payload
/*
    export const buyCake = (number = 1) => {
        return {
            type: BUY_CAKE,
            payload: number
        }
    }
*/

// Now in our cake reducer
// -->      numOfCakes: state.numOfCakes - action.payload





/* ********************************************* */
/* Redux mapStateToProps */
/* ********************************************* */


// The mapStateToProps function takes the state as first parameter
// The second parameter is the props that have already been passed to the component

// We'll demonstrate that in a new file called "ItemContainer.js"
/*
    import React from 'react'
    import { connect } from 'react-redux'

    function ItemContainer(props) {
        return (
            <div>
                <h2>Item - {props.item}</h2>
            </div>
        )
    }

    const mapStateToProps = (state, ownProps) => {
        const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCreams.numOfIceCreams
        return {
            item: itemState
        }
    }

    export default connect(mapStateToProps)(ItemContainer)
*/

// And in App.js
/*
    function App() {
    return (
        <Provider store={store}>
        <div className="App">
            <CakeContainer />
            <HooksCakeContainer />
            <IceCreamContainer />
            <NewCakeContainer />
            <ItemContainer cake />
            <ItemContainer />
        </div>
        </Provider>
    );
    }
*/
// We render it twice, and once with the "cake" prop

// It works, we passed props as well as the state





/* ********************************************* */
/* Redux mapDispatchToProps */
/* ********************************************* */


// We'll now look at the second parameter that can be passed to the mapDispatchToProps function
/*
    import React from 'react'
    import { connect } from 'react-redux'
    import { buyCake, buyIceCream } from '../redux'

    function ItemContainer(props) {
        return (
            <div>
                <h2>Item - {props.item}</h2>
                <button onClick={props.buyItem}>Buy item</button>
            </div>
        )
    }

    const mapStateToProps = (state, ownProps) => {
        const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
        return {
            item: itemState
        }
    }

    const mapDispatchToProps = (dispatch, ownProps) => {
        const dispatchFunction = ownProps.cake 
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())
        
        return {
            buyItem: dispatchFunction
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
*/

// !!!!! if we don't have mapStateToProps, but we do have mapDispatchToProps, we need to pass null as the first parameter of the connect function !!!!!





/* ********************************************* */
/* Redux async actions */
/* ********************************************* */


// We'll start by creating the "UserContainer.js" component
// Then we'll create our user folder in the redux folder, with it's three classic files

// In userType.js, we add our types
/*
    export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
    export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
    export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE' 
*/

// In userActions.js we add our actions
/*
    import {
        FETCH_USERS_REQUEST,
        FETCH_USERS_SUCCESS,
        FETCH_USERS_FAILURE
    } from './userTypes'

    export const fetchUsersRequest = () => {
        return {
            type: FETCH_USERS_REQUEST
        }
    }

    export const fetchUsersSuccess = (users) => {
        return {
            type: FETCH_USERS_SUCCESS,
            payload: users
        }
    }

    export const fetchUsersFailure = (error) => {
        return {
            type: FETCH_USERS_FAILURE,
            payload: error
        }
    }
*/

// Finally in our userReducer.js
/*
    import {
        FETCH_USERS_REQUEST,
        FETCH_USERS_SUCCESS,
        FETCH_USERS_FAILURE
    } from './userTypes'

    const initialState = {
        loading: false,
        users: [],
        error: ''
    }

    const reducer = (state = initialState, action) => {
        switch(action.type) {
            case FETCH_USERS_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case FETCH_USERS_SUCCESS:
                return {
                    loading: false,
                    users: action.payload,
                    error: ''
                }
            case FETCH_USERS_FAILURE:
                return {
                    loading: false,
                    users: [],
                    error: action.payload
                }
            default:
                return state
        }
    }

    export default reducer
*/

// Then we can export our actions creators form our index.js file
/*
    export { buyCake } from './cake/cakeActions'
    export { buyIceCream } from './iceCream/iceCreamActions'
    export * from './user/userActions'
*/

// Then in rootReducer.js
/*
    import { combineReducers } from 'redux'
    import cakeReducer from './cake/cakeReducer'
    import iceCreamReducer from './iceCream/iceCreamReducer'
    import userReducer from './user/userReducer'

    const rootReducer = combineReducers({
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    })

    export default rootReducer
*/

// We'll see the rest in the last part





/* ********************************************* */
/* Redux Thunk get request */
/* ********************************************* */


// First we install two last packages
// -->      npm i redux-thunk axios

// Then we'll set up thunk in our store.js file, import it and then pass it to the middleware
// -->      const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

// Now in our userActions.js we'll define the fetchUsers function once we have imported axios
/*
    export const fetchUsers = () => {
        return (dispatch) => {
            dispatch(fetchUsersRequest)
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    const users = response.data
                    dispatch(fetchUsersSuccess(users))
                })
                .catch(error => {
                    const errorMsg = error.message
                    dispatch(fetchUsersFailure(errorMsg))
                })
        }
    }
*/

// Now we need to subscribe to it in our UserContainer.js component
/*
    import React, { useEffect } from 'react'
    import { connect } from 'react-redux'
    import { fetchUsers } from '../redux'

    function UserContainer({ userData, fetchUsers }) {
        
        useEffect(() => {
            fetchUsers()
        }, [])
        
        return userData.loading ? (
            <h2>Loading</h2>
        ) : userData.error ? (
            <h2>{userData.error}</h2>
        ) : (
            <div>
                <h2>User List</h2>
                <div>    
                    {
                        userData && 
                        userData.users && 
                        userData.users.map(user => <p>{user.name}</p>)
                    }
                </div>
            </div>
        )
    }

    const mapStateToProps = state => {
        return {
            userData: state.user
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            fetchUsers: () => dispatch(fetchUsers())
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
*/

// Finally we can import it and display it in our App.js component























