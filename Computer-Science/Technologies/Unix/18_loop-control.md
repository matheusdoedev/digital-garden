# Loop Control

## The Break Statement

- The **break** statement is used to terminate the execution of the entire loop, after completing the execution of all of the lines of code up to the break statement. It then steps down to the code following the end of the loop.

### Syntax

```sh
break
```

- The break command can also be used to exit from a nested loop using this format.

```sh
break n
```

- Here **n** specifies the **n** enclosing loop to the exit from.

```sh
#!/bin/sh

a=0

while [ $a -lt 10 ]
do
	echo $a
	if [ $a -eq 5 ]
	then
		break
	fi
	a=`expr $a + 1`
done
```

```sh
#!/bin/sh

for var1 in 1 2 3
do
	for var2 in 0 5
	do
		if [ $var1 -eq 2 -a $var2 -eq 0 ]
		then
			break 2
		else
			echo "$var1 $var2"
		fi
	done
done
```

## The continue statement

- The **continue** statement is similar to the **break** command, except that it causes the current iteration of the loop to exit, rather than the entire loop.
- This statement is useful when an error has occured but you want to try to execute the next iteration of the loop.

### Syntax

```sh
continue
```

- Like with the break statement, an integer argument can be given to the continue command to skip commands from nested loops.

```sh
continue n
```

```sh
#!/bin/sh

NUMS="1 2 3 4 5 6 7"

for NUM in $NUMS
do
	Q=`expr $NUM % 2`
	if [ $Q -eq 0 ]
	then
		echo "Number is an even number!!"
		continue
	fi
	echo "Found odd number"
done
```

## References

- [tutorialspoint.com - Unix](https://www.tutorialspoint.com/unix/unix-shell-loops.htm)