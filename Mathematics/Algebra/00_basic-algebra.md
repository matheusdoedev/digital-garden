# Basic Algebra

## Terminology and Notation

- `A := B` indicates that the equality holds by definition of the notations involved.
- The notation `P = => Q` means that P implies Q. `If P, then Q`. For example, `x = 2 = => x² = 4`.
- The notation `P <=> Q` means `P = => Q` and `Q = => P`. `P if and only if Q`. For example `3x - 6 = 0 <=> x=2`.

## Commutative and Associative laws

- In particular, the Commutative and Associative Laws say that you can add a bunch of numbers in any order and similarly you can multiply a bunch of numbers in any order. For example, `(A + B) + (C + D) = (A + C) + (B + D), (A * B) * (C * D) = (A * C) * (B * D)`.

## Identity

- Is an equation which is true for all values of the variables which appear in it.
  1. `a * 0 = 0`
  1. `-a = (-1)a`
  1. `a(-b) = -ab`
  1. `(-a)(-b) = ab`

## The Laws of Exponents

- For `a ∈ IR / a > 0`:
  1. `a²a³ = (aa)(aaa) = a²⁺³ = a⁵`,
  1. `(a²)³ = (aa)(aa)(aa) = a^2*3 = a⁶`
  1. `a²/a³ = (aa)(aa)/(aa)(aa)(aa) = a^-1`

## Kinds of Numbers

- The **natural numbers** are `1,2,3,...`
- The **integers** are `...,-3,-2,-1,0,1,2,3,...`
- The **rational numbers** are ratios of integers like `3/2, 14/99, -1/2`
- The **real numbers** are numbers which have an infinite decimal expansion like `√2 = 1.414213562373...`
- The **complex numbers** are those numbers of form `z = x + iy` where `x` and `y` are real numbers and `i` is a special new number called the imaginary unit which has the property that `i² = -1`. Every integer is a rational number (because n = n/1), every rational number is a real number, and every real number is a complex number (because x = x + 0i). A real number which is not rational is called irrational.

## Rational Numbers

- That a real number is rational if and only if its decimal expansion eventually repeats periodically forever.
  - `0.333...`
  - `2.83333`

## The Number Line

- The choice of two points (representing 0 and 1) on a line determines a correspondence between the points of the line.
- The correspondence is called coordinate system on the line. The line is called a number line.

- Every real number is either positive, negative, or zero (and no number satisfies two of these conditions),
- The sum of two positive numbers is positive
- The product of two positive numbers is positive.

## Interval Notation

- The open interval `(a,b)` or `]a,b[` is the set of all real numbers x such that `a < x < b`, and the closed interval `[a,b]` is the set of all real numbers x such that `a <= x <= b`. Thus x is in the set `(a,b) <=> a < x < b` and x is in the set `[a,b] <=> a <= x <= b`.
- x is in the set `(a, b] <=> a < x <= b`,
- `]a,b) <=> a <= x < b`,
- `(a,∞) <=> a < x`
- `(∞,a] <=> x <= a`
- `(a,b) U (c,∞) <=> either a < x < b or else c < x`

## Exponents

- Suppose that a is a positive real number. The there is one and only one way to define a^x for all real numbers x such that

  1. `a^x+y = a^x * a^y, a⁰ = 1, a¹ = a, 1^x = 1`.
  1. If `a > 1` and `x < y` then `a^x < a^y`.
  1. If `a < 1` and `x < y` then `a^x > a^y`.

- With this definition, the laws of exponents continue to hold when a and b are positive real numbers and m and n are arbitrary real numbers. The number ax is positive (when a is positive) regardless of the sign of x.

- When `m = 1` and `n` is a natural number, the number a^1/n is called the `nth root` (square root if n = 2 and cube root if n = 3) and is sometimes denoted `√`.

- When n is absent, `n = 2` is understood: `√a := a^1/2`.

- A number b is said to be an nth root of a if `b^n = a`.

- When n is odd, every real number √a has exactly one (real) nth root and this is denoted by na. When n is even, a positive real number √a has two (real) nth roots (and n a denotes the one which is positive) but a negative number has no real nth roots.

## Absolute Value

- You may have been taught that |x| is the distance from the real number x to the 0 on the number line. So, for example, `|5| = 5` and `|-5| = 5`, since each is 5 units from 0 on the number line.
- Another way to define absolute value is by the equation `|x| = x²`. Using this definition, we have:

  - `|5| = √5² = √25 = 5`
  - `|-5| = √(-5)² = √25 = 5`

- The long and short of both of these procedures is that |x| takes negative real numbers and assigns them to their positive counterparts. More precisely until while it leaves positive numbers alone.

### Properties of Absolute Value

- Let a,b, and x be real numbers and let n be an integer. Then:
  - Product Rule: `|ab| = |a||b|`,
  - Power Rule: `|a^n| = |a|^n`,
  - The Triangle Inequality: `|a + b| <= |a| + |b|`,
  - `|x| = 0 <=> x = 0`,
  - For `c > 0`, `|x| = c <=> x = c || x = -c`,
  - For `c < 0`, `|x| = c` has no solution.

## Solving equations

- A number `a` is called a solution of an equation containing the variable x if the equation becomes a true statemant when a is substituted for x. A solution of an equation is sometimes also called a root of the equation.
- Two equations are said to be equivalent if they have exactly the same solutions. Usually two equations are equivalent because one can be obtained from the other by performing an operation to both sides of the equation which can be reversed by another operation of the same kind.

- We use the symbol `= =>` when we want to assert that one equation implies another but do not want to assert the converse.
- If the operation is not "reversible", there is the possibility that the set of solutions gets bigger in which case the new solutions are called _extraneous solutions_.

## Resources

- College Algebra, by UWCA on Wikibooks
