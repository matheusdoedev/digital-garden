# Hooks

- They let you use state and other React features without writing a class.

```js
import React, { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- **Hooks** allow you to reuse stateful logic without changing your component hierarchy.
- **Hooks** let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data).

## State Hook

```js
import React, { useState } from 'react;

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

- We call **useState** hook to add some local state to it. React will preserve this state between re-renders.
- **useState** returns a pair: the _current_ state value and function that lets you update it.
- The only argument to **useState** is the initial state. The initial argument is only used during the first render.

### Declaring multiple state variables

```js
function ExampleWithManyStates() {
    // Declare multiple state variables
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks }]);
}
```

- The **array destructuring** syntax lets us give different names to the state variables we declared by calling **useState**.
- These names aren't a part of the **useState** API. Instead, React assumes that if you call **useState** many times, you do it in the same order during every render.

## Effect Hook

- You've likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations `side effecs`;
- The Effect Hook, **useEffect**, adds the ability to perform side effects from a function component. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes, but unified into a single API.

```js
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

    return (
      <div>
        <p>You clicked {count} times</p>
      </div>
    );
  });
}
```
