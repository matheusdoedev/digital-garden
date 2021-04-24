# Handling Events

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

For example, the HTML:

```html
<button onclick="activateLasers()">Activate Lasers</button>
```

is slightly different in React:

```jsx
<button onClick={activateLasers}>Activate Lasers</button>
```

```js
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked");
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

- When using React, you generally don't need to call `addEventListener` to add listeners to a DOM element after it is created. Instead, just provide a listener when te element is initially rendered.

- When you define a component using an `ES6 class`, a common pattern is for an event handler to be a method on the class.

```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({ isToggleOn: !state.isToggleOn }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));
```

- You have to be careful about the meaning of `this` in JSX callbacks. In JavScript, class methods are not bound by default. If you forget to bind `this.handleClick` and pass it to onClick, `this` will be `undefined` when the function is actually called.

- If calling bind annoys you, there are two ways you can get arount this. If you are using the experimental `public class fields syntax`, you can use class fields to correctly bind callbacks.

```js
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```

- If you aren't using class fields syntax, you can use an `arrow function` in the callback

```js
class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:' this);
    }

    render() {
        // This syntax ensures `this` is bound within handleClick
        return (
            <button onClick={() => this.handleClick()}>
                Click me
            </button>
        )
    }
}
```

- The problem with this syntax is that a different callback is created each time the `LoggingButton` renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.

## Passing Arguments to Event Handlers

- Inside a loop, it is common to want to pass an extra parameter to an event handler.

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

- The above two lines are equivalent, and use `arrow functions` and `Function.prototype.bind` respectively.
- In both cases, the `e` argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.

## References

- [React docs](https://reactjs.org/docs/handling-events.html)
