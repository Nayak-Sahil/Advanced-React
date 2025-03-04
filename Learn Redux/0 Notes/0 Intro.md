# What is Redux?
- React Redux is a `state management library` for React applications.
- It used to `manage state of application globally`. so, that we use anywhere we want.
- redux `offers a predictable state container` for JavaScript apps.
    - predictable state container means `the state of the application is consistent, very easy to manageable and know the value of state.`
    - `Single Source of Truth`: All the application data (state) is stored in a single JavaScript object (the store). This makes it easier to predict where to find the state and how it will change.
        - It eliminates data redundancy, ensures everyone in an organization accesses the most accurate and up-to-date information from a single location
    - `Time-Travel Debugging:` Predictability allows tools to track how the state evolves step-by-step. You can replay actions to see how they affect the state, making debugging easier.

# Why we used this:
- `Watch`: https://www.youtube.com/shorts/4tsQtBxlxEc
- like two component (parent-child) don't need to rely on each other. we create one centeral (abstract store) that then both parent-child component rely on that abstract thing. 
    - we can say we move to tightly coupled into loosely coupled :) :).

# Redux Vs React-Redux Vs Redux-ToolKit
1. Redux:
    - `State management library`, `Independent of React`
    - This library used to create centralizes the state in a single store.
    - Store → Actions → Reducers
    - `require lot of boilerplate code`. 

2. Redux-Toolkit
    - A modern, simplified version of Redux with built-in tools to `reduce boilerplate code`
    - `Built on top of Redux`
    - It's a basically `Simplified Redux implementation`

3. React-Redux
    - A `binding library` that connects React-Project with Redux.
    - it's a `React-specific`.
    - It `allows React components to easily access the Redux store` using hooks (`useSelector`, `useDispatch`) or higher-order components (connect).
    - **Remember**  you still need to install `react-redux` when using `Redux Toolkit`.

- More Difference: 
    - `Redux Toolkit`: Focuses on managing state and creating the store.
    - `React-Redux`: Handles the integration of Redux with React components.
        - It offers essential hooks like:
            - `useSelector`: To access state from the store.
            - `useDispatch`: To dispatch actions to the store.
            - `Provider`: To make the store available to the entire React app.

# With Redux, follow these below steps:
- `npm install redux react-redux`
- create `store.jsx` file inside `store/` directory.
    - in this file, create store, reducers, etc..
- import store.jsx file in App.jsx and wrap `<App>` component using `<Provider store={imported store}>`

# How to extract data from store?
1. `useSelector()`
    - Inside React functional components. this hooks used if you want to extract data within any componenet.
    - syntax: `useSelector((state) => state);`
    - syntax: `useSelector((state) => state.reducer_name);` // if we have multiple state and multiple operation for each different state then we create separate reducer. Thus we have to specify specific reducer_name to get data of that particular state.
    - syntax breakdown: `const state = useSelector(state => state.someReducer);`
        - **This is a selector function. It takes the entire Redux store state as its argument (state), and returns the part of the state you're interested in.**
2. `store.getState()`
    - Outside of React components, we can't use hooks so extract data in such case we used this method.
    - steps to use it:
        1. `import store from "./store/store";`
        2.  `const state = store.getState();`
        OR
            `store.getState().reducer_name` To get specific state-data.
    - **Remember:** This way doesn't trigger re-renders.
    - `store.getState(): Access the entire state tree`
    - **Note:** This just give one-time data. it **doesn't give updated value** everytime whenever state-data changed`.

3. Wrap store.getState() using `store.subscribe()`
    - This like when you want to get state-data `{outside component + updated value everytime when state changed}`
    - If you want to get updated value everytime whenever state-data changed, `then you have to wrap it using subscribe()`
    ```js
        const unsubscribe = store.subscribe(() => {
            const state = store.getState();
            console.log('Updated state:', state);
        });

        // Later, you can unsubscribe if needed
        unsubscribe();
    ```

# With Redux Toolkit:
- `npm install @reduxjs/toolkit react-redux`
- create `store/store.jsx`
    - import store.jsx file in App.jsx and wrap `<App>` component using `<Provider store={imported store}>`

- As like with `Naive Redux`, for multiple operation of different state, we create different reducer to separate different state's operation.
- But in `Redux Toolkit`, we create different slice for separate different state's operation.
- `slice` is a feature that contains name, initialState, all operation associated to that particular feature/slice.
- `From slice` we export **reducer and all the operation separately**.

```js
export const { function_name1, function_name2 } = sliceName.actions;
export default sliceName.reducer;
```  