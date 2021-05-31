# Decision making

- Unix Shell supports conditional statements which are used to perform different actions based on different conditions.
	- The **if...else** statement
	- The **case...esac** statement

## The if...else statements

- Unix Shell supports following forms of **if...else** statement
	- if...fi statement
	- if...else...fi statement
	- if...elif...else...fi statement

```sh
if [ expression ]
then
	# Statements
fi
```

```sh
if [ expression ]
then
	# Statements
else
	# Statements
fi
```

```sh
if [ expression 1 ]
then
	# Statements
elif [ expression 2 ]
then
	# Statements
else
	# Statements
fi
```

```sh
#!/bin/sh

a=10
b=20

if [ $a == $b ]
then
	echo "a is equal to b"
elif [ $a -gt $b ]
then
	"a is greater than b"
elif [ $a -lt $b ]
then
	echo "a is less than b"
else
	echo "None of the condition met"
fi
```

- Most of the if statements check relations using relational operators.

## The case...esac Statement

- You can use multiple **if...elif** statements to perform a multiway branch. However, this is not always the best solution, especially when all of the branches depend on the value of a single variable.
- Unix Shel supports **case...esac** statement which handles exactly this situation, and it does so more efficiently than repeated **if...elif** statements.

```sh
case word in
	pattern1)
		Statement(s) to be executed if pattern1 matches
      	;;
	pattern2)
      	Statement(s) to be executed if pattern2 matches
      	;;
   	pattern3)
      	Statement(s) to be executed if pattern3 matches
      	;;
   	*)
     	Default condition to be executed
     	;;
esac
```

```sh
#!/bin/sh

FRUIT="kiwi"

case "$FRUIT" in
	"apple") echo "Apple pie is quite tasty."
	;;
	"banana") echo "I like banana nut bread."
	;;
	"kiwi") echo "New Zealand is famous for kiwi."
	;;
esac
```

```sh
#!/bin/sh

option="${1}"
case ${option} in
	-f) FILE="${2}"
		echo "File name is $FILE"
		;;
	-d) DIR="${2}"
		echo "Dir name is $DIR"
		;;
	*)
		echo "`basename ${0}` :usage: [ -f file ] | [ -d directory ]"
		exit 1 # Command to come out of the program with status 1
		;;
esac
```

```sh
$./test.sh
test.sh: usage: \[ -f filename \] | \[ -d directory \]
$ ./test.sh -f index.htm
$ vi test.sh
$ ./test.sh -f index.htm
File name is index.htm
$ ./test.sh -d unix
Dir name is unix
$
```