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

## Type Aliases

- A _type alias_ is a name for any type.

```ts
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

- You can actually use a type alias to give a name to any type at all, not just and object type.

```ts
type ID = number | string;
```

- Note that aliases are _only_ aliases - you cannot use type aliases to create different/distinct "versions" of the same type. When you use the alias, it's exactly as if you had written the aliased type.

## Interfaces

```ts
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

- Just like when we used a type alias above, the example works just as if we had used an anonymous object type. TypeScript is only concerned with the _structure_ of the value we passed to `printCoord` - it only cares that it has the expected properties. Being concerned only with the structure and capabilites of types is why we call TypeScript a _structurally_ typed type system.

### Differences Between Type Aliases and Interfaces

- The key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

## Type Assertions

- Sometimes you will have information about the type of a value that TypeScript can't know about. In this situation, you can use a _type assertion_ to specify a more specific type:

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

- Like a type annotation, type assertions are removed by the compiler and won't affect the runtime behavior of your code.
- You can also use the angle-bracket syntax (except if the code is in a `.tsx` file), which is equivalent

```tsx
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

- TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions like

```ts
const x = "hello" as number;
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
```

- Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to any (or unknown, which we’ll introduce later), then to the desired type

```ts
const a = expr as any as T;
```

## Literal Types

- In addition to the general `string` and `number`, we can refer to _specific_ strings and numbers in type positions.
- One way to think about this is to consider how JavaScript comes with different ways to declare a variable. Both `var` and `let` allow for changing what is held inside the variable, **and `const` does not**. This is reflected in how TypeScript creates types for literals.

```ts
let changingString = "Hello World";
changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString;

// let changingString: string;

const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;

// const constantString: "Hello World";
```

- It's not much use to have a variable that can only have one value. But by _combining_ literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values

```ts
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");
// Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
```

- Numeric literal types work the same way

```ts
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```

- You can combine these with non-literal types

```ts
interface Options {
  width: number;
}

function configure(x: Options | "auto") {
  // ...
}

configure({ width: 100 });
configure("auto");
configure("automatic");
// Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.
```

### Literal Inference

- When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later.

```ts
const obj = { counter: 0 };

if (someCondition) {
  obj.counter = 1;
}
```

- TypeScript doesn't assume the assignment of `1` to a field which previously had `0` is an error. Another way of saying this is that `obj.counter` must have the type `number`, not `0`,
  because types are used to determine both _reading_ and _writing_ behavior.

- The same applies to string:

```ts
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
```

- In the above example `req.method` is inferred to be `string`, not `"GET"`. Because code can be evaluated between the creation of req and the call of `handleRequest` which could assign a new string like `"GUESS"` to `req.method`, TypeScript considers this code to have an error.

- There are two ways to work around this:

  1. You can change the inference by adding a type assertion in either location:

  ```ts
  // Change 1:
  const req = { url: "https://example.com", method: "GET" as "GET" };
  // Change 2
  handleRequest(req.url, req.method as "GET");
  ```

  2. You can use `as const` to convert the entire object to be type literals:

  ```ts
  const req = { url: "https://example.com", method: "GET" } as const;
  handleRequest(req.url, req.method);
  ```

- The `as const` suffix acts like `const` but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like `string` or `number`;

### Non-null Assertion Operator (Postfix `!`);

- TypeScript also has a special syntax for removing `null` and `undefined` from a type without doing any explicit checking. Writing `!` after any expression is effectively a type assertion that the value isn't `null` or `undefined`

```ts
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

- Just like other type assertions, this doesn't change the runtime behavior of your code, so it's important to only use `!` when you known that the vlaue can't be `null` or `undefined`.

## Enums

- Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants.
- Unlike most TypeScript features, this is not a type-level addition to JavaScript but something added to the language and runtime. Because of this, it’s a feature which you should know exists, but maybe hold off on using unless you are sure.

## Less Common Primitives

### `bigint`

- Is a primitive in _JavaScript_ used for very large integers, `BigInt`

```ts
// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;
```

### symbol

- Is a primitive in _JavaScript_ used to create a globally unique reference via the function `Symbol()`;

```ts
const firstName = Symbol("name");
const secondName = Symbol("name");

if (firstName === secondName) {
  // This condition will always return 'false' since the types 'typeof firstName' and 'typeof secondName' have no overlap.
  // Can't ever happen
}
```

## References

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#emitting-with-errors)
- [Understanding TypeScript - 2021 Edition, Maximilian Schwarzmüller, Udemy](https://www.udemy.com/share/1013yQBUUdcFZaRnw=/)
