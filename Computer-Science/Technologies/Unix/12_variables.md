# Variables

- A variable is a character string to which we assign a value. The value assigned could be a `number`, `text`, `filename`, `device`, or any other type of data.
- A variable is nothing more than a pointer to the actual data. The shell enables you to create, assign, and delete variables.

## Variables Names

- The name of a variable can contain only letters (a to z or A to Z), numbers (0 to 9) or the underscore character (__).
- By convention, Unix shell variable swill have their names in UPPERCASE.

The following examples are valid variables names:

```sh
_ALI
TOKEN_A
VAR_1
VAR_2
```

Following are the examples of invalid variable names:

```sh
2_VAR
-VARIABLE
VAR1-VAR2
VAR_A!
```

- The reason you cannot use other characters such as **!**, **\***, or **-** is that these characters have a special meaning for the shell.

## Defining Variables

```sh
NAME="Zara Ali"
```

- Variables of this type are called **scalar variables**. A scalar variable can hold only one value at a time.

```sh
VAR1="Zara Ali"
VAR2=100
```

## Accessing Values

- To access the value stored in a variable, prefix its name with the dollar sign (**$**)

```sh
#!/bin/sh

NAME+"Zara Ali"
echo $NAME
```

## Read-only Variables

- Shell provides a way to mark variables as read-only by using the read-only command. After a variable is marked read-only, its value cannot be changed.

```sh
#!/bin/bash

NAME="Zara Ali"
readonly NAME
NAME="Qadiri"
```

```bash
/bin/sh: NAME: This variable is read only
```

## Unsetting Variables

- Unsetting or deleting a variable directs the shell to remove the variable from the list of variables that it tracks. Once you unset a variable, you cannot access the stored value in the variable.

```sh
unset variable_name
```

```sh
#!/bin/sh

NAME="Zara Ali"
unset NAME
echo $NAME
# This echo will not print anything
```

- **You cannot use the unset command to unset variables that are marked readonly**.

## Variable Types

- **Local Variables** - A local variable is a variable that is present within the current instance of the shell. It is not available to programs that are started by the shell. They are set at the command prompt.
- **Environment Variables** - An environment variable is a variable to any child process of the shell. Some programs need environment variables in order to function correctly. Usually, a shell script defines only those environment .
- **Shell Variables** - A shell variable is a special variable that is set by the shell and is required by the shell in order to function correctly. Some of these variables are environment variables whereas others are local variables.

## References

- [tutorialspoint.com - Unix](https://www.tutorialspoint.com/unix/unix-file-management.htm)