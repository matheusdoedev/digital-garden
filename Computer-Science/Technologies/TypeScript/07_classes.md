# Classes

- Classes are blueprints for JavaScript objects.

## Fiels

- A field declaration creates a public writeable property on a class

```ts
class Point {
  x: number;
  y: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;
```

- Fields can also have _initializers_, these will run automatically when the class is instantiated

```ts
class Point {
  x = 0;
  y = 0;
}

const pt = new Point();
console.log(`${pt.x}, ${pt.y}`); // Prints 0, 0
```

- Just like with `const`, `let`, and `var`, the initializer of a class property will be used to infer its type

### --strictPropertyInitialization

- The **strictProperyInitialization** setting controls wheter class fields need to be initialized in the constructor.

```ts
class BadGreeter {
  name: string;
  // Property 'name' has no initializer and is not definitely assigned in the constructor.
}
```

```ts
class GoodGreeter {
  name: string;

  constructor() {
    this.name = "hello";
  }
}
```

### readonly

- Fields may be prefixed with the `readonly` modifier. This prevents assignments to the field outside of the constructor.

```ts
class Greeter {
  readonly name: string = "world";

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err() {
    this.name = "not ok";
    // Cannot assign to 'name' because it is a read-only property.
  }
}

const g = new Greeter();
g.name = "also not ok";
// Cannot assign to 'name' because it is a read-only property.
```

## Constructs

- Class constructors are very similar to functions. You can add parameters with type annotations default values, and overloads

```ts
class Point {
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
```

### Differeces between class constructor and function signatures

- Constructors can't have type parameters;
- Constructors can't have return type annotations.

## Methods

- A function property on a class is called a _method_. Methods can use all the same type annotations as functions and constructs

```ts
class Point {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
```

## Gettes / Setters

## References

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#emitting-with-errors)
- [Understanding TypeScript - 2021 Edition, Maximilian Schwarzmüller, Udemy](https://www.udemy.com/share/1013yQBUUdcFZaRnw=/)
