# Angular Templates

- Is a chunk of HTML. Within a template, you can use special syntax to leverage many of Angular's features.

## Empover your HTML

- With special Angular syntax in your templates, you can extend the HTML vocabulary of your applications.
- Almost all HTML syntax is valid template syntax. However, because an Angular template is part of an overall webpage, and not the entire page, you don't need to include elements such as `<html>`, `<body>`, or `<base>`.

## Text interpolation

- Text interpolation allows you to incorporate dynamic string values into your HTML templates. With interpolation, you can dynamically change what appears in an application view, such as displaying a custom greeting that includes the user's name.

```html
<h1>{{ title }}</h1>
```

### Template expressions

- A template **expression** produces a value and appears within double curly braces, `{{ }}`. Angular resolve the expression and assigns it to a property of a binding target. The target could be an HTML element, a component, or a directive.

```html
<p>The sum of 1 + 1 is {{ 1 + 1 }}</p>
```

- Expressions can also invoke methods of the host component

```html
<p>The sum of 1 + 1 is not {{ 1 + 1 + getVal() }}.</p>
```

### Expression best practices

- Use short expressions
- Quick execution
- No visible side effects