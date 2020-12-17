# Algorithms

- An essential part of programming is multiple-layer thinking.
- Computer programmers need an excellent ability to reason with multiple-layered abastractions.

## Overview of the Techniques

### Divide and Conquer

- Many problems, particularly when the input is given in an array, can be solved by cutting the problem into smaller pieces (_divide_), solving the smaller parts recursively (_conquer_), and then combining the solutions into a single result.

### Backtracking

- In backtracking, you consider all possible choices to solve a problem and recursively solve subproblems under the assumption that the choice is taken.
- Is generally an inefficient, brute-force technique, but there are optimizations that can be performed to reduce both the depth of the tree and this number of branches.

### Dynamic Programming

- Dynamic programming is an optimization technique for backtracking algorithms.
- When subproblems need to be solved repeatedly time can be saved by solving all of the subproblems first and storing the solution to each subproblem in a table.

### Greedy Algorithms

- A greedy algorithm can be useful when enough information is known about possible choices that "the best" choice can be determined without considering 8
- Typically, greedy algorithms are not challenging to write, but they are difficult to prove correct.

### Hill Climbing

- The basic idea is to start with a poor solution to a problem, and then repeatedly apply optimizations to that solution until it becomes optimal or meets some other requirement.

## Resources

- [Algorithms - Wikibooks](https://en.wikibooks.org/wiki/Algorithms)
