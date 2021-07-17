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

## Getters / Setters

```ts
class C {
  _length = 0;

  get length() {
    return this._length;
  }

  set length(value: number) {
    this._length = value;
  }
}
```

- TypeScript has some special inference rules for accessors
  - If `get` exists but not set, the property is automatically `readonly`
  - If the type of the setter parameter is not specified, it is inferred form the return type of the getter
  - Getters and setters must have the same Member Visibility.

## Class Heritage

- Like other languages with object-oriented feautres, classes in JavaScript can inherit from base classes.

### `implements` Clauses

- You can use an `implements` clause to check that a class satisfies a particular `interface`. An error will be issued if a class fails to correctly implement it.

```ts
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

class Ball implements Pingable {
  // Class 'Ball' incorrectly implements interface 'Pingable'.
  // Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
  pong() {
    console.log("pong!");
  }
}
```

#### Cautions

- It's important to understand that an `implements` clause is only a check that the class can be treated as the interface type. It doesn't change the type of the class or its methods _at all_. A commom source of error is to assume that an `implements` clause will change the class type - it doesn't!

```ts
interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(s) {
    // Parameter 's' implicitly has an 'any' type.
    return s.toLowercase() === "ok";
  }
}
```

### `extends` Clauses

- Classes may `extend` from a base class. A derived class has all the properties and methods of its base class, and als

## References

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#emitting-with-errors)
- [Understanding TypeScript - 2021 Edition, Maximilian Schwarzmüller, Udemy](https://www.udemy.com/share/1013yQBUUdcFZaRnw=/)
