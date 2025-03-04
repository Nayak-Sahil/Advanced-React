- How react internally optimize thing?.
- one of optimization is `Batching`. To understand it, refer following example:

```js
const [count. setcount] = useState():
// what is difference between following statement:
setcount(count + 1);
// and
secount((prev) => prev + 1);
```

### setcount(count + 1);

- React takes the value of count as it exists when the line is executed and sets the state to count + 1.
- If multiple setCount calls are made in rapid succession, the state might not have been updated yet due to React’s batching of state updates, potentially leading to stale or incorrect results.

```js
// Example
const handleClick = () => {
  setCount(count + 1); // Adds 1 based on initial count (0)
  setCount(count + 1); // Still adds 1 based on initial count (0)
  // Final Result: count is 1 (not 2, due to stale state)
};
```

- May result in incorrect updates if multiple setCount calls are made.
- Suitable when you're confident no other state updates happen concurrently.

### setCount((prev) => prev + 1);

- Uses the latest state, even if updates are batched.
- Always updates sequentially using the most recent state.
- Recommended for updating based on the current state.

```js
const handleClick = () => {
  setCount((prev) => prev + 1); // Adds 1 to the current state
  setCount((prev) => prev + 1); // Adds 1 to the updated state
  // Final Result: count is 2 (updates correctly)
};
```

### Why result differ?
- React batches multiple state updates into a single re-render for performance optimization. This means that if you call several state updates in quick succession (within a single event loop tick), React will group them together and only re-render once. This helps to minimize the number of re-renders and improve the overall performance of your application.
```js
function ExampleComponent() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("John");

  const updateState = () => {
    setCount(count + 1);
    setName("Doe");
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={updateState}>Update State</button>
    </div>
  );
}
```
- React will batch these updates and trigger only one re-render (even if two state variable updated), making the state update process more efficient.