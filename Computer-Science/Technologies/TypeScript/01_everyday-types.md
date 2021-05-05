# Everyday Types

## Type Annotations on Variables

- When you declare a variable using `const`, `var`, or `let`, you can optionally add a type annotation to explicitly specify the type of the variable.

```ts
let myName: string = "Alice";
```

- In most cases, though, this isn't needed. Wherever possible, TypeScript tries to automatically _infer_ the types in your code. For example, the type of a variable is inferred based on the type of its initializer:

```ts
// No type annotation needed -- 'myName' inferred as type 'string'
let myName = "Alice";
```

## Functions

- TypeScript allows you to specify the types of both the input and output values of functions.

```ts
// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

```ts
function getFavoriteNumber(): number {
  return 26;
}
```

## Anonymous Functions

- Anonymous funtions are a little bit different from function declarations. When a function appears in a place where TypeScript can determine how it's going to be called, the parameters of that function are automatically given types.

```ts
// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUppercase());
  // Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUppercase());
  // Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
```

- Even though the parameter `s` didn't have a type annotation, TypeScript used the types of the `forEach` function, along with the inferred type of the array, to determine the type `s` will have. This process is called _contextual typing_ because the _context_ that the function occurred in informed what type it should have.

## Object Types

```ts
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

- You can use `,` or `;` to separate the properties, and the last separator is optional either way.
- The type part of each property is also optional. If you don't specify a type, it will be assumed to be any.

### Optional Properties

```ts
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

- In JavaScript, if you access a property that doesn't exist, you'll get the value `undefined` rather than a runtime error. Because of this, when you read from an optional property, you'll have to check for `undefined` before using it.

```ts
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
  // Object is possibly 'undefined'.

  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
```

## Union Types

- A **Union Type** is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union's members.

```ts
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
```

- TypeScript will only allow you to do things with the union if that thing is valid for every member of the union. For example, if you have the union `string | number`, you can't use methods that are only available on `string;

```ts
function printId(id: number | string) {
  // Error
  console.log(id.toUpperCase());

  // Property 'toUpperCase' does not exist on type 'string | number'.
  // Property 'toUpperCase' does not exist on type 'number'.
}
```

- The solution is to _narrow_ the union with code. _Narrowing_ occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
- For example, TypeScript knows that only a string value will have a typeof value `"string"`

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
```

## References

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#emitting-with-errors)
- [Understanding TypeScript - 2021 Edition, Maximilian Schwarzmüller, Udemy](https://www.udemy.com/share/1013yQBUUdcFZaRnw=/)
