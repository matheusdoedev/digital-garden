# Special Variables

- We understood how to be careful when we use certain nonalphanumeric characters in variable names. This is because those characters are used in the names of special Unix variables. These variables are reserved for specific functions

For example, the **$** character represents the process ID number, or PID, of the current shell

```bash
$ echo $$
29949
```

The above command writes the PID of the current shell

## Command-Line Arguments

- The comand-line arguments $1, $2, $3, ..., $9 are positional parameters, with $0 pointing to the actual command, program, shell script, or function and $1, $2, $3, ..., $9 as the arguments to the command.

```sh
#!/bin/sh

echo "File Name: $0"
echo "First Parameter: $1"
echo "Second Parameter: $2"
echo "Quoted Values: $@"
echo "Quoted Values: $*"
echo "Total Number of Parameters: $#"
```

```bash
./test.sh Zara Ali
File Name : ./test.sh
First Parameter : Zara
Second Parameter : Ali
Quoted Values: Zara Ali
Quoted Values: Zara Ali
Total Number of Parameters : 2
```

## Special Parameters $* and $@

- There are special parameters that allow accessing all the command-line arguments at once. **S\*** and **S@** both will act the same unless they are enclosed in double quotes. "".
- Both the parameters specify the command-line arguments. However, the `$*` special parameter takes the entire list as one argument with spaces between and the `$@` special parameter takes the entire list and separates it into separate arguments.
- We can write the shell script as shown below to process an unknown number of commandline arguments with either the $* or $@

```sh
#!/bin/sh

for TOKEN in $*
do
	echo $TOKEN
done
```

```bash
$ ./test.sh Zara Ali 10 Years Old
Zara
Ali
10
Years
Old
```


## Exit Status

- The **$?** variable represents the exit status of the previous command.
- Exit status is a numerical value returned by every command upon its completion. As a rule, most commands return an exit status of 0 if they successful, and 1 if they were unsuccessful.
- Some commands return additional exit statuses for particular reasons. For example, some commands differentiate between kinds of errors and will return various exit values depending on the specific type of failure.

```bash
$./test.sh Zara Ali
File Name : ./test.sh
First Parameter : Zara
Second Parameter : Ali
Quoted Values: Zara Ali
Quoted Values: Zara Ali
Total Number of Parameters : 2
$echo $?
0
$
```

## References

- [tutorialspoint.com - Unix](https://www.tutorialspoint.com/unix/unix-file-management.htm)