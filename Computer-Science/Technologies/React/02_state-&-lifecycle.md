# State & Lifecycle

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>{" "}
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
```

## Lifecycle methods

- They are special methods that we can declare on a component class to run some code when a component mounts and unmounts.

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

## Do Not Modify State Directly

```jsx
// Wrong
this.state.comment = "Hello";
```

```jsx
// Correct
this.setState({ comment: "Hello" });
```

- The only place where you can assign `this.state` is the constructor.
