# Divide and Conquer

- Part of the trick of making a good divide and conquer algorithm is determining how a given problem could be separated into two or more similar, but smaller, subproblems.

### Divide and Conquer Methodology

1. Given a problem, identify a small number of significantly smaller subproblems of the same type.
1. Solve each subproblem recursively (the smallest possible size of a subproblem is a base-case).
1. Combine these solutions into a solution for the main problem.

## Merge Sort

- The problem that **merge sort** solves is general sorting:
  - Given an unordered array of elements that have a total ordering, create an array that has the same elements sorted.
- We might want to start by breaking a array into two arrays of size n/2 elements. These smaller arrays will also be unsorted and it is meaningful to sort these smaller problems;
- Thus we consider these smaller arrays "similar". Ignoring the base case for a moment, this reduces the problem into a different one:
  - Given two sorted arrays, how can they be combined to form a single sorted array that contains all the elements of both given arrays.

### Analysis

- Let _T(n)_ be the number of steps the algorithm takes to run on input of size n.
- Merging takes linear time and we recurse each time on two subproblems of half the original size, so n.

```
T(n)=2.T+O(n).2
```

## Binary Search

- Once an array is sorted, we can quickly locate items in the array by doing a **bynary search**
- Finding and item in an already sorted array is similar to finding a name in a phonebook: you can start by flipping the book open toward the middle. If the name you're looking for is on that page, you stop. If you went too far, you can start the process again with the first half of the book.
- If the name you're searching for appears later thant the page, you start from the second half of the book instead.
- You repeat this process, narrowing down your search space by half each time, until you find what you were looking for.

## Resources

- [Algorithms - Wikibooks](https://upload.wikimedia.org/wikipedia/commons/8/81/Algorithms.pdf)
