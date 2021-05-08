# useImperativeHandle

```jsx
useImperativeHandle(ref, createHandle, [deps]);
```

- `useImperativeHandle` customizes the instance value that is exposed to parent components when using `ref`. As always, imperative code using refs should be avoided in most cases. `useImperativeHandle` should be used with `forwardRef`.

```jsx
function FancyInput(props, ref) {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} ... >
}

FancyInput = forwardRef(FancyInput);
```

## References

- [React docs](https://reactjs.org/)
