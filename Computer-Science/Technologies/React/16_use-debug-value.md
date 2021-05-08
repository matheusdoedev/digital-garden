# useDebugValue

```jsx
useDebugValue(value);
```

- `useDebugValue` can be used to display a label for custom hooks in React DevTools.

```jsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? "Online" : "Offline");

  return isOnline;
}
```

- Tip: It's not recommended adding debug values to every custom Hook. It's most valuable for custom Hooks that are part of shared libraries.

## Defer formatting debug values

- In some cases formatting a value for display migh be an expensive operation. It's also unnecessary unless a Hook is actually inspected.

- For this reason `useDebugValue` accepts a formatting function as an optional second parameter. This function is only called if the Hooks are inspected. It receives the debug value as a parameter and should return a formatted display value.

- For example a custom Hook that returned a `Date` value could avoid calling the `toDateString` function unnecessarily by passing the following formatter.

## References

- [React docs](https://reactjs.org/)
