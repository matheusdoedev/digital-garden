# Narrowing

- Imagine we have a function called `padLeft`

```ts
function padLeft(padding: number | string, input: string): string {
  throw new Error("Not implemented yet!");
}
```

- If `padding` is a `number`, it will treat that as the number of spaces we want to prepend to `input`. If `padding` is a `string`, it should just prepend `padding` to `input`. Let's try to implement the logic for when `padLef` is passed a `number` for `padding`.

```ts
function padLeft(padding: number | string, input: string) {
  return new Array(padding + 1).join(" ") + input;
  // Operator '+' cannot be applied to types 'string | number' and 'number'.
}
```

- TypeScript is warning us that adding a `number` to a `number | string` might not give us what we want, and it's right. In other words, we haven't explicity checked if `padding` is a `number` first, nor are we handling the case where it's a `string`, so let's do exactly that.

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  }

  return padding + input;
}
```

- Within our `if` check, TypeScript sees `typeof padding === "number"` and understands that as a special form of code called a _type guard_. TypeScript follows possible paths of execution that our programs can take to analyze the most specific possible type of a value at a given position. It looks at these special checks (called _type guards_) and assignments, and the process of refining types to more specific types than declared is called _narrowing_. In many editors we can observe these types as they changes, and we'll even do so in our examples.

## `typeof` Type Guards

- As we’ve seen, JavaScript supports a typeof operator which can give very basic information about the type of values we have at runtime. TypeScript expects this to return a certain set of strings:

  - "string"
  - "number"
  - "bigint"
  - "boolean"
  - "symbol"
  - "undefined"
  - "object"
  - "function"

- Like we saw with `padLeft`, this operator comes up pretty often in a number of JavaScript libraries, and TypeScript can understand it to narrow types in different branches.
- In TypeScript, checking against the value returned by `typeof` is a type guard. Because TypeScript encodes how `typeof` operates on different values, it knows about some of it's quirks in JavaScript.

```ts
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
      // Object is possibly 'null'.
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}
```

## References

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#emitting-with-errors)
