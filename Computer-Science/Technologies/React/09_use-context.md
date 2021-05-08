# useContext

```jsx
const value = useContext(MyContext);
```

- Accepts a context object (the value returned from React.createContext) and returns the current context value for that context.
- The current context value is determined by the value prop of the nearest `<MyContext.Provider>` above the calling component in the tree.

- When the nearest `<MyContext.Provider>` above the component updates, this Hook will trigger a rerender with the latest context value passed to that `MyContext.provider`. Even if an ancestor uses `React.memo` or `shouldComponentUpdate`, a rerender will still happen starting at the component itself using useContext.

- Don't forget that the argument to `useContext` must be the _context object itself_.

  - **Correct**: `useContext(MyContext)`
  - **Incorrect**: `useContext(MyContext.Consumer)`
  - **Incorrect**: `useContext(MyContext.Provider)`

- A component calling `useContext` will always re-render when the context value changes. If re-rendering the component is expensive, you can `optimize it by using memoization`

## Putting it together with Context.Provider

```jsx
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },

  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

function ThemeButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

## createContext

- The context will allow us to pass data/state across all components (through the component ree), without the use of props through the children components.

```jsx
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

## References

- [React docs](https://reactjs.org/)
- [React Completo Slides - Origamid](https://www.origamid.com/slide/react-completo/#/0305-usecontext/2)
