# Hooks

- They let you use state and other React features without writing a class.
- A Hook is a special function that lets you "hook into" React features.
- If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.

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

- When you call `useEffect`, you're telling React to run your _effect_ function after flushing changes to the DOM.
- Effects are declared inside the component so they have access to its props and state
- By default, React runs the effects after every render - _including_ the first render.

- Effects may also optionally specify how to "clean up" after them by returning a function.

```jsx
import React, { useState, useEffect } from "react";

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return "Loading...";
  }

  return isOnline ? "Online" : "Offline";
}
```

- In this example, React would unsubscribe from our `ChatAPI` when the component unmounts, as well as before re-running the effect due to a subsequent render.

- We can use more than a single effect in a component

```jsx
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
}
```

- Hooks let you organize side effects in a component by what pieces are related (such as adding and removing a subscription), rather than forcing a split based on lifecycle methods.

## Rules of Hooks

- Only call Hooks **at the top level**. Don't call Hooks inside loops, conditions, or nested functions.
- Only call Hooks **from React function components**. Don't call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks.)

## Building Your Own Hooks

- Sometimes, we want to reuse some stateful logic between components. **Custom Hooks** let you do this. but without adding more components to your tree.

```jsx
import React, { useState, useEffect } from "react";

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

- The state of each component that use the custom hook is completely independent. Hooks are a way to reuse _stateful logic_, not state itself. In fact, each _call_ to a Hook has a completely isolated state. - so you can even use the same custom Hook twice in one component.

- Custom Hooks are more of a convetion than a feature. If a function's name starts with `use` and it call other Hooks, we say it is a custom Hook.

## References

- [React docs](https://reactjs.org/docs/handling-events.html)
