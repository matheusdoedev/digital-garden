# Data Sctructures

## Introduction

- Formal data structures enable a programer to mentally structure large amounts of data into conceptually manageable relationships.
- Data structures also provide guarantees about algorithmic complexity - choosing an appropriate data structure for a job is crucial for writing good software.
- Because data structures are higher-level abstractons, they present to us operations on groups of data, such as adding an item to a list.
- When a data structure provides operations, we can call the data structure an **abstract data type**.

### Encapsulation

- Is when common patterns are grouped together under a single name and then parameterized, in order to achieve a higher-level understanding of that pattern.

### Abstraction

- Is a mechanism to hide the implementation details of an abstraction away from the users of the abstraction.

- When applications get to be more complex, the abstractions of programming languages become too low-level to effectively manage. Thus, we build our own abstractions on top of these lower-level constructs.
- Each time we build upwards, we lose access to the lower-level implementation details.

### Big-oh notation

- **Big-oh** notation is a common way of expressing a computer code's performance. The notation creates a relationship between the number of items in memory and the average performance for a function.
- For a set of `n` items, `O(n)` indicates that a particular function will operate on the set `n times` on average.
- `O(1)` indicates that the function always performs a constant number of operations regardless of the number of items.
- The notation only represents algorithmic complexity so a function may perform more operations but constant multiples of `n` are dropped by convention.

## Resources

- [Data Structures - Wikibooks]("https://en.wikibooks.org/wiki/Data_Structures")
