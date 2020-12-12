# The way of the program

- The single most important skill for a computer scientist is **problem solving**. Problem solving means the ability to formulate problems, think creatively about solutions, and express a solution clearly and accurately.

## High-level languages X Low-level languages

### Low-level languages

- "Machine languages" or "assembly languages"
- Computers con only execute programs written in low-level languages
- Don't need to be processed before they can run

### High-level languages

- Take extra time to be processed before run
- It is much easier to program in a high-level language
- Take less time to write
- Shorter and easier to read
- They are portable, meaning that they can run on different kinds of computers

## Two kinds of programs process high-level languages into low-level languages

- interpreters
- compilers

### Interpreters

- Reads a high-level program and executes it, meaning that it does what the program says

```sh
    Source code -> Interpreter -> Output
```

### Compilers

- Reads the program and translates it completely before the program starts running

```sh
    Source code -> Compiler -> Object code -> Executor -> Output
```

- Once a program is compiled, they can be execute repeatedly without further translation

## What is program

-A **program** is a sequence of instructions that specifies how to perform a computation

### Basic instructions that appear in just every language

- **input**: Get data from the keyboard, a file, or some other device
- **output**: Display data on the screen or send data to a file or other device
- **math**: Perform basic mathematical operations like addition and multiplication
- **conditional execution**: Check for certain conditions and execute the appropriate sequence of statements
- **repetition**: Perform some action repeatedly, usually with some variation

## What is debugging ?

- Programming errors are called **bugs**and the process of tracking them down is called **debugging**
- Three kinds of erros can occur in a program: **syntax errors**, **runtime errors**, and **semantic errors**

### Syntax errors

- **Syntax** refers to the structure of a program and the rules about that structure, for example, python will execute a program if the syntax is correct, otherwise, the interpreter displays an error message

### Runtime errors

- This kind of error does not apper until after the program has started running

### Semantic errors

- It will run successfully in the sense that the computer will not generate any error messages, but it will not do the right thing, it will do something else. Specifically, it will do what you told it to do
- The meaning of the program (it's semantics) is wrong.

## Resources

- [Think Python: How to think like a Computer Scientist](http://www.greenteapress.com/thinkpython/html/index.html)
