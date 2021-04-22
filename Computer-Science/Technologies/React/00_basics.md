## Basics

## JSX

```jsx
const element = <h1>Hello World</h1>;
```

- This syntax is called JSX, and it's a syntax extension to JavaScript.
- It's used to describe what the UI should look like.

### JSX Represents Objects

- Babel compiles JSX down to `React.createElement()` calls

```jsx
const element = <h1 className="greeting">Hello, world!</h1>;
```

```js
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

## Elements

- An element describes what you want to see on the screen

```jsx
const element = <h1>Hello World</h1>;
```

- Unlike browser DOM elements, React elements are plain objects, and are cheap to create.
- React DOM takes care of updating the DOM to match the React elements.

### Rendering an Element into the DOM

- Let's say there is a `<div>` somewhere in your HTML file:

```jsx
<div id="root"></div>
```

- We call this a "root" DOM node because everything inside it will be managed by React DOM.

- To render a React element into a root DOM node, pass both to ReactDOM.render()

```jsx
const element = <h1>Hello, world</h1>;

ReactDOM.render(element, document.getElementById("root"));
```

- React elements are **immutable**. Once you create an element, you can't change its children or attributes.
