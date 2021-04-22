# Introduction

- A JavaScript superset
- A language building up on JavaScript
- Adds new Features + advantages to JavaScript
- Browser CAN'T execute it!
- TypeScript is compiled to JavaScript

## TypeScript vs JavaScript

- The key difference is that JavaScript uses _dynamic types_ (resolved at runtime), TypeScript uses _static types_ (set during development).

## What TypeScript adds...

- Static types.
- Next-gen JavaScript features (compiled down for older Browsers)
- Non-JavaScript features like **Interfaces** and **Generics**
- Meta-programming features like Decorators
- Rich configuration options

## Basics

- _Static types systems_ describe the shapes and behaviors of what our values will be when we run our programs.
- A _type-checker_ like **TypeScript** uses that information and tells us when things might be going off the rails

## Non-exception failures

- Ultimately, a static type system has to make the call over what code should be flagged as an error in its system, even if it's "valid" JavaScript that won't immediately throw an error.

## Types for Tooling

- TypeScript can catch bugs when we make mistakes in our code. That's great, but TypeScript can also prevent us from making those mistakes in the first place.
- The type-checker has information to check things like wheter we're accessing the right properties on variables and other properties. Once it has that information, it can also start suggesting which properties you might want to use.

## `tsc`, the TypeScript compiler

### Emitting with Errors

- Of course, over time, you may want to be a bit more defensive against mistakes, and make TypeScript act a bit more strictly. In that case, you can use the `--noEmitOnError` compiler option.

```sh
tsc --noEmitOnError hello.ts
```

## Explicit Types

- _Type annotations_ are used to described what types of values can be called with.

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
```

### Type inference

- We don't always have to write explicit type annotations. In many cases, TypeScript can even just _infer_ (or "figure out") the types for us even if we omit them

```ts
let msg = "hello there"; // let msg: string
```

## Erased Types

- Type annotations aren't part of JavaScript (or ECMAScript to be pedantic), so there really aren't any browsers or other runtimes that can just run TypeScript unmodified. That's why TypeScript needs a compiler in the first place - it needs some way to strip out or transform any TypeScript-specific code so that you can run it.
- Most TypeScript-specific code gets erased away, and likewise, here our types annotations were completely erased.

```js
"use strict";
function greet(person, date) {
  console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}
greet("Maddison", new Date());
```

## Downleveling

- One other difference from the above was that our template string was rewritten from

```ts
`Hello ${person}, today is ${date.toDateString()}!`;
```

- to

```js
"Hello " + person + ", today is " + date.toDateString() + "!";
```

- Template strings are a feature from a version of ECMAScript called ECMAScript 2015 (a.k.a. ECMAScript 6, ES2015, ES6, etc).
- TypeScript has the ability to rewrite code from newer versions of ECMAScript to older ones such as ECMAScript 3 or ECMAScript 5.
- This process of moving from a newer or "higher" version of ECMAScript down to an older or "lower" one is sometimes called _downleveling_.

- To change the ECMAScript version compiler target use `--target es2015` to target to another version.

## Strictness

- TypeScript has several type-checking strictness flags that can be turned on or off. The `--strict` flag in the CLI, or `"strict": true` in a _tsconfig.json_ toggles them all on simultaneously, but we can opt out of them individually.

### noImplicitAny

- Recall that in some places, TypeScript doesn't try to infer any types for us and instead falls back to the most lenient type: `any`.
- Using `any` often defeats the purpose of using TypeScript in the first place. The more typed your program is, the more validation and tooling you'll get, meaning you'll run into fewer bugs as you code.
- Turning on the `noImplicitAny` flag will issue an error on any variables whose type is implicity inferred as any.

### strictNullChecks

- By default, values like `null` and `undefined` are assignable to any other type. This can make writing some code easier, but forgetting to handle `null` and `undefined` is the cause of countless bugs in the world.
- The `strictNullChecks` flag makes handling `null` and `undefined` more explicit, and _spares_ us from worrying about where we _forgot_ to handle `null` and `undefined`.

## References

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#emitting-with-errors)
- [Understanding TypeScript - 2021 Edition, Maximilian Schwarzmüller, Udemy](https://www.udemy.com/share/1013yQBUUdcFZaRnw=/)
