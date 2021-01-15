# Mathematical Background

## Asymptotic Notation

- In addition to correctness another important characteristic of a useful algorithm is its time and memory consumption.
- Time and memory are both valuable resources and there are important differences in how we can use them.

```
f(n) = n²+3n+14

f(n) => time
n => input data size
```

- The units of time typically used are in terms of the number of some fundamental operation performed.
- For example, some fundamental operations we might care about are: the number of additions or multiplications needed; the number of element comparisons; the number of memory-location swaps performed; or the raw number of machine instructions executed.
- In general we might just refer to these fundamental operations performed as steps taken.

#### Asymptotic Notation

```
O(log n) <= O(n) <= O(n) <= O(n log n) <= O(n²) <= O(n³) <= O(2n)
```

```
f(n) = O(g(n)) when ∃c>0, ∃n0>0, ∀n>=n0:0<=f(n)<=c.g(n)
```

- That is, **f(n) = O(g(n))** holds if and only if there exists some constants c and n⁰ such that for all **n>n0f(n)** is positive and less than or equal to **c.g(n)**.
- The equal sign used in this notation describes a relationship between **f(n)** and **g(n)** instead of reflecting a true equality.
- In light of this, some define Big-O in terms of a set, that: **f(n) ∈ O(g(n))** when:

```
f(n) ∈ {f(n):O(g(n)) when ∃c>0, ∃n0>0, ∀n>=n0:0<=f(n)<=c.g(n)}
```

### Big Omega

- Provides a lower bound.
- In general, we say that **f(n) = Ω(g(n))** when:

```
∃c>0, ∃n0>0, ∀n>=n0:0<=c.g(n)<=f(n)
```

- i.e. **f(n) = Ω(g(n))** if and only if there exist constants c and n⁰ such that for all n>n⁰ f(n) is positive and **greater** than or equal to c.g(n).

### Big Theta

- When a given function is both **O(g(n))** and **Ω(g(n))**, we say it is **Θ(g(n))**, and we have a tight bound on the function.
- A function f(n) is Θ(g(n)) when:

```
∃c1>0, ∃c2>0, ∃n0>0, ∀n>=n0:0<=c1.g(n)<=f(n)<=c2.g(n)
```

## Algorithm Analysis: Solving Recurrence

- Merge sort of n elements: **T(n)=2.T(n/2)+c(n)**.
- This describes one iteration of the merge sort: the problem space n is reduced to two halves **(2.T(n/2))**, and then merged back together at the end of all the recusive calls **(c(n))**.

### Substitution method

- Formulate a guess about the big Oh time of your equation.
- Then use proof by unduction to prove the guess is correct.

### Summations

### Draw the Tree and Table

## Resources

- [Algorithms - Wikibooks](https://en.wikibooks.org/wiki/Algorithms)
