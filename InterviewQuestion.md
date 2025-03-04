### 1 Refer: https://github.com/sudheerj/reactjs-interview-questions?tab=readme-ov-file#what-is-react
### 2 Refer: https://www.geeksforgeeks.org/react-interview-questions/

1. What is React.js
- front-end and open-source JavaScript library.
- It is helpful in building reusable & easily maintainable (UI) components.

2. what is difference b/w library and framework.
- Both frameworks and libraries are code written by someone else that is used to help solve common problems. but By using a library, you can control the flow of the application and call the library. In contrast, when you use a framework, framework controls the flow and calls your code. and framework is more rigid/strict about some rules. but library is easy to integrate with any existing running project.

3. What is virtual DOM in React?
- React uses Virtual DOM which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. 
- It is the same, but it does not have the power to directly change the layout of the document. 
- Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM.

4. What is JSX?
- JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).
- **We can create react applications without using JSX as well. but then it will going to more complex so it's better to use jsx**
```js
//  without jsx:
const container = React.createElement('div','{}',text )
ReactDOM.render(container,rootElement);

// with jsx:
const container = (
<div>
  <p>This is a text</p>
</div>
);
ReactDOM.render(container,rootElement)
```

5. What are the differences between controlled and uncontrolled components?
- In a controlled component, the value of the input element is controlled by React.
- When a user enters data inside the input element of a controlled component, `onChange` function gets triggered and inside the code, we check whether the value entered is valid or invalid
- In an uncontrolled component, the value of the input element is handled by the DOM itself. Input elements inside uncontrolled components work just like normal HTML input form elements.
- we are not using onChange function to govern the changes made to the input element. Instead, we are using ref to access the value of the input element.
- **Important: Decide between using a controlled or uncontrolled input element for the lifetime of the component**
- we should either decide "fully" controlled or uncontrolled.
```js
// Example:
import React, { useState } from 'react'

export default function Practice() {
    const [text, setText] = useState("");
    
    console.log(text);
    return (
        <div>
            <input type="text" name="userName" value="asd" id="userName" onChange={(e) => {
                setText(e.target.value);
            }} />
            // if we are using onChange that means we {allow || want to} controlled by react
            // then in value={state} should be state variable not any hardcore value.
            // because hardcoring value make input to be uncontrolled by react. then we have to control input value using ref="" and that time then we can't use onChange={} 
        </div>
    )
}
```
6. What are props in React?
- props are the data that passed from a parent component into a child component.
- Usage:
    - Passing custom data to the React component.
    - Triggering state changes in child by parent state.

7. What is props drilling?
- `Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.`
- Sometimes while developing React applications, there is a need to pass data from a component that is higher in the hierarchy to a component that is deeply nested. To pass data between such components, we pass props from a source component and keep passing the prop to the next component in the hierarchy till we reach the deeply nested component.
- The disadvantage of using prop drilling is that, what if when we pass state variable to nested-nested child component then entire heirarchy get disturb and concept of modularity & security become worthless.

8. What is React Hooks?
- React Hooks are the built-in functions that let us {“hook into” || use} React state and lifecycle features from a functional component.
- React Hooks must be called only at the top level. It is not allowed to call them inside the nested functions, loops, or conditions.
- It is allowed to call the Hooks only from the React Function Components.

9. What is a key in React?
- A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted.

10. React Re-Rendering misassumption: https://www.youtube.com/watch?v=AwW7olQ84Qs

11. what is babel | what is Transcompiler | How JSX executed?
- A transcompiler, also called a source-to-source compiler or transpiler, is a special type of compiler that translates a source code in a programming language to the same or different programming language with a similar level of abstraction.
- A good example for Transpiler is the `typescript transpiler` which converts Typescript code to Javascript. `Babel transpiler` can also be used for jsx translating into pure js.
- Actually, we write react code is in .js file and because it we can't write html in it, therefore jsx is method by which we can write html inside .js file/code. but not only jsx actually behind since it's done by babel. babel take jsx and printing same as intended.
- what is babel?: Babel is a JavaScript compiler.
```js
// Practical Example:
<script type="text/babel"></script>
// When we write something other than "text/javascript" inside type="" then mentioned script doesn't executed by browser as default. you can check by writing anything like "text/sahil" then in network tab of browser it doesn't fetched and executed. even when we specify "text/babel".

// So, basically type="text/babel" this script parsed by babel transcompiler and then it will convert jsx code into pure .js code.

// Refer this to understand in depth: https://youtu.be/_ze46JgZpd4?si=aKUmhKPSXVKbCHOL&t=261
```

12. what is Higher Order Component?
- A higher-order component is a function that takes a original component and returns a new component with enhanced functionality. It's essentially a function that wraps around a component to provide additional features or behavior.

13. Explain one way data binding in React?
- Refer this: https://medium.com/@priyam_mondal/react-data-binding-a-comprehensive-guide-to-one-way-and-two-way-binding-6fb945add5ed
- ReactJS uses one-way data binding which can be Component to View or View to Component. It is also known as one-way data flow.

14. How many way to wrap multiple component in jsx?
- using fragment
`<Fragment> ... </Fragment>` or shorter syntax is `<> ...Multiple Child Component </>`
    - `Benefits to use fragment:` Fragments are a bit faster and use less memory by not creating an extra DOM node.
- By wrapping using <div> or any other html tag

15. Why React uses className over class attribute?
- Because: The attribute names written in JSX turned into keys of JavaScript objects, and js doesn't allow to use reserved key like "class". suppose if we used class in jsx but since it ultimately turned into js object and js not allowing "class" then it throw error.

16. 

