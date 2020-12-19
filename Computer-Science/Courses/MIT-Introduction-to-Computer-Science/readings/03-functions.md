# Functions

## Function call

- A **function** is a named sequence of statements that performs a computation.
- When you define a function, you specify the name and the sequence of statements.

## Adding new functions

- A **function definition** specifies the name of a new function and the sequence of statements that execute when the function is called.

```py
def print_lyrics():
    print "I'm a lumberjack, and I'm okay."
    print "I sleep all night and I work all day."
```

- **def** is a keyword that indicates that this is a function definition.

## Stack diagrams

- To keep track of which variables can be used where, it is sometimes useful to draw a **stack diagram**.
- Like state diagrams, stack diagrams show the value of each variable, but they also show the function each variable belongs to.
- Each function is represented by a **frame**.
- A frame is a box with the name of a function beside it and the parameters and variables of the function inside it.

## Encapsulation

- Wrapping a piece of code up in a function is called **encapsulation**.

## Interface

- The **interface** of a function is a summary of how it is used: what are the parameters? what does the function do? and what is the return value?

## Refactor

- Rearranging a program to improve fnction interfaces and facilitate code re-se--is called **refactoring**

## A development plan

- Is a process for writing programs

### Encapsulation and generalization process steps

1. Start by writing a small program with no function definitions
1. Once you get the program working, encapsulate it in a function and give it a name.
1. Generalize the function by adding appropriate parameters.
1. Repeat steps 1-3 until you have a set of working functions
1. Look for opportunities to improve the program by refactoring

## docstring

- A **docstring** is a string at the beginning of a function that explains the interface.

## Resources

- [Think Python: How to think like a Computer Scientist](http://www.greenteapress.com/thinkpython/html/index.html)
