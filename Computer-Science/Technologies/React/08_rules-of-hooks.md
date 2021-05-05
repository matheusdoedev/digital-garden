# Rules of Hooks

## Only Call Hooks at the Top Level

- **Don't call Hooks inside loops, conditions, or nested functions**. Instead, always use Hooks at the top level of your React function, before any early returns.
- By following this rule, you ensure that Hooks are called in the same order each time a component renders.
- That's what allows React to correctly preserve the state of Hooks between multipe `useState` and `useEffect` calls.

## Only Call Hooks from React Functions

- **Don't call Hooks from regular JavaScript functions.** Instead, you can:
  - Call Hooks from React function components.
  - Call Hooks from custom Hooks.

## References

- [React docs](https://reactjs.org/docs/handling-events.html)
