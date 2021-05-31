# Shell Arrays

- Shell supports a different type of variable called an **array variable**. This can hold multiple values at the same time. Arrays provide a method of grouping a set of variables. Instead of creating a new name for each variable that is required, you can use a single array variable that stores all the other variables.
- All the naming rules discussed for Shell Variables would be applicable while naming arrays.

## Defining Array Values

```sh
array_name[index]=value
```

```sh
NAME[0]="Zara"
```

If you are using the **ksh** shell, here is the syntax of array initialization

```sh
set -A array_name value1 value2 ... valuen
```

If you are using the **bash** shell, here is the syntax of array initialization

```sh
array_name=(value1 ... valuen)
```

## Accessing Array Values

After you have set any array variable, you access it as follows

```sh
${array_name[index]}
```

```sh
#!/bin/sh

NAME[0]="Zara"
NAME[1]="Qadir"
NAME[2]="Mahnaz"
NAME[3]="Ayan"
NAME[4]="Daisy"
echo "First Index: ${NAME[0]}"
echo "Second Index: ${NAME[1]}"
```

```bash
$./test.sh
First Index: Zara
Second Index: Qadir
```

You can access all the items in an array in one of the following ways:

```sh
${array_name[*]}
${array_name[@]}
```

```sh
NAME[0]="Zara"
NAME[1]="Qadir"
NAME[2]="Mahnaz"
NAME[3]="Ayan"
NAME[4]="Daisy"
echo "First Method: ${NAME[*]}"
echo "Second Method: ${NAME[@]}"
```

```bash
$./test.sh
First Method: Zara Qadir Mahnaz Ayan Daisy
Second Method: Zara Qadir Mahnaz Ayan Daisy
```

## References

- [tutorialspoint.com - Unix](https://www.tutorialspoint.com/unix/unix-file-management.htm)