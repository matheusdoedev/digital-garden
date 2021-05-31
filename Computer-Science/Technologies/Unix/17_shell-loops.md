# Shell Loops

- A loop is a powerful programming tool that enables you to execute a set of commands repeatedly.
	
### The While Loop

```sh
while command
do
	# Statements
done
```

```sh
#!/bin/sh

a=0

while [ $a -lt 10 ]
do
	echo $a
	a=`expr $a + 1`
done
```

### The For Loop

```sh
for var in word1 word2 ... wordN
do
	# Statements
done
```

```sh
#!/bin/sh

for var in 0 1 2 3 4 5 6 7 8 9
do
	echo $var
done
```

```sh
#!/bin/sh

for FILE in $HOME/.bash*
do
	echo $FILE
done
```

### The Until Loop

- The while loop is perfect for a situation where you need to execute a set of commands while some condition is true. Sometimes you need to execute a set of commands until a condition is true.

```sh
until command
do 
	# Statements
done
```

```sh
#!/bin/sh

a=0

until [ ! $a -lt 10 ]
do
	echo $a
	a=`expr $a + 1`
done
```

### The Select Loop

- The **select** loop provides an easy way to create a numbered menu from which users can select options. It is useful when you need to ask the user to choose one or more items from a list of choices.

```sh
select var in word1 word2 ... wordN
do
	# Statements
done
```

```sh
select DRINK in tea cofee water juice appe all none
```

```bash
$./test.sh
1) tea
2) cofee
3) water
4) juice
5) appe
6) all
7) none
#? juice
Available at home
#? none
$
```

You can change the prompt displayed by the select loop by altering the variable PS3 follows

```bash
$PS3 = "Please make a selection => " ; export PS3
$./test.sh
1) tea
2) cofee
3) water
4) juice
5) appe
6) all
7) none
Please make a selection => juice
Available at home
Please make a selection => none
$
```

## References

- [tutorialspoint.com - Unix](https://www.tutorialspoint.com/unix/unix-shell-loops.htm)