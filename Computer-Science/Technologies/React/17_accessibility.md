# Accessibility

- Web accessibility (also referred to as a11y) is the design and creation of websites that can be used by everyone. Accessibility support is necessary to allow assistive technology to interpret web pages.
- React fully supports building accessible websites, often by using standard HTML techniques.

// FAZER CURSO DO EGGHEAD -> https://egghead.io/courses/develop-accessible-web-apps-with-react e esse https://egghead.io/courses/start-building-accessible-web-applications-today

## Semantic HTML

- Using the various HTML elements to reinforce the meaning of information in our websites will often give us accessibility for free.
- [MDN HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

## Accessible Forms

### Labeling

- Every HTML form control, such as `<input>` and `<textarea>`, needs to be labeled accessibly. We need to provide descriptive labels that are also exposed to screen readers.
- Whenever possible, use the label element to associate text with form elements explicitly. The `for` or `htmlFor` attribute of the label must exactly match the `id` of the form control.

```jsx
<label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="nameInput" />
```

#### Hidding label text

##### Approach 1: Hiding the label element

```html
<label for="search" class="visuallyhidden">Search: </label>
<input type="text" name="search" id="search" />
<button type="submit">Search</button>
```

##### Approach 2: Using aria-label

```html
<input type="text" name="search" aria-label="Search" />
<button type="submit">Search</button>
```

#### Approach 3: Using aria-labelledby

```html
<input type="text" name="search" aria-labelledby="searchbutton" />
<button id="searchbutton" type="submit">Search</button>
```

#### Approach 4: Using the title attribute

```html
<input title="Search" type="text" name="search" />
<button type="submit">Search</button>
```

### Notifying the user of errors

- Error situations need to be understood by all users.
- [The W3C demonstrates user notifications](https://www.w3.org/WAI/tutorials/forms/notifications/)
- [WebAIM looks at form validation](https://webaim.org/techniques/formvalidation/)

## References

- [React docs](https://reactjs.org/)
- [Labeling Controls - W3C](https://www.w3.org/WAI/tutorials/forms/labels/)
