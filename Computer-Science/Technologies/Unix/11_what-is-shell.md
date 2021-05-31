## Shell Scripts

- The basic concept of a shell is a list of commands, which are listed in the order of execution. A good shell script will have comments, preceded by # sign, describing the steps.
- There are conditional tests, such as value A is greater than value B, loops allowing us to go through massive amounts of data, files to read and store data, and variables to read and store data, and the script may include functions.
- Shell scripts and functions are both `interpreted`. This means they are not compiled.

## Example Script

- All scripts would have the **.sh** extension.
- Before you add anything else to your script, you need to alert the system that a shell script is being started. This is done using the **shebang** construct.

```sh
#!/bin/sh
```

- This tells the system that the commands that follow are to be executed by the Bourne shell.

```sh
#!/bin/bash
pwd
ls
```

## Shell Comments

```sh
#!/bin/bash

# Author: Zara Ali
# Copyright (c) Tutorialspoint.com
# Script follows here:
pwd
ls
```

- Save the above content and make the script executable

```bash
$ chmod +x <scriptname.sh>
```

- Execute the script

```bash
$ ./<scriptname.sh>
```

## References

- [tutorialspoint.com - Unix](https://www.tutorialspoint.com/unix/unix-file-management.htm)