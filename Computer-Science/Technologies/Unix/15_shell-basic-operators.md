# Shell Basic Operators

- There are various operators supported by each shell:
	- Arithmetic Operators
	- Relational Operators
	- Boolean Operators
	- String Operators
	- File Test Operators

- Bourne shell (sh) did not originally have any mechanism to perform simple arithmetic operations but it uses external programs, either **awk** or **expr**

```sh
#!/bin/sh

val=`expr 2 + 2`
echo "Total value : $val"
```

The following points need to be considered while adding

- There must be spaces between operators and expressions. For example, 2+2 is not correct; it should be written as 2 + 2.
- The complete expression should be enclosed between backticks.

## Arithmetic Operators

- It is very important to understand that all the conditional expressions should be inside square braces with spaces around them, for example **[ $a == $b ]** is correct whereas, **[$a==$b]** is incorrect.

- All the arithmetical calculations are done using long integers.

## Relational Operators

- Bourne Shell supports the following relational operators that are specific to numeric values. These operators do not work for string values unless their value is numeric.
- For example, following operators will work to check a relation between 10 and 20 as well as in between "10" and "20" but not in between "ten" and "twenty".

Assume variable a holds 10 and variable b holds 20 then:

| Operator | Description | Example
| :-------- | :--------- | :--------- |
| **-eq** | Checks if the value of two operands are equal or not; if yes, then the condition becomes true. | \[ $a -eq $b \] is not true. |
| **-ne** | Checks if the value of two operands are equal or not; if values are not equal, then the condition becomes true. | \[ $a -ne $b \] is true. |
| **-gt** | Checks if the value of left operand is greater than the value of right operand; if yes, then the condition becomes true. | \[ $a -gt $b \] is not true. |
| **-lt** | Checks if the value of left operand is less than the value of right operand; if yes, then the condition becomes true. | \[ $a -lt $b \] is true |
| **-ge** | Checks if the value of left operand is greater than or equal to the value of right operand; if yes, then the condition becomes true. | \[ $a -eq $b \] is not true. |
| **-le** | Checks if the value of left operand is less than or equal to the value of right operand; if yes, then the condition becomes true. | \[ $a -le $b \] is true. |

- It is very important to understand that all the conditional expressions should be placed inside square braces with spaces around them. For example, **\[ $a <= $b \]** is correct whereas, **\[$a <= $b\]** is incorrect.

## Boolean Operators

Assume variable **a** holds 10 and variable **b** holds 20 then

| Operator | Description | Example
| :-------- | :--------- | :--------- |
| **!** | This is logical negation. This inverts a true condition into false and vice versa. | \[ ! false \] is true. |
| **-o** | This is logical **OR**. If one of the operands is true, then the condition becomes true. | \[ $a -lt 20 -o $b -gt 100 \] is true. |
| **-a** | This is logical **AND**. If both the operands are true, then the condition becomes true otherwise false. | \[ $a -lt 20 -a $b -gt 100 \] is false. |

## String Operators

Assume variable **a** holds "abc" and variable **b** holds "efg" then:

| Operator | Description | Example
| :-------- | :--------- | :--------- |
| **=** | Checks if the value of two operands are equal or not; if yes, then the condition becomes true. | \[ $a = $b \] is not true. |
| **!=** | Checks if the value of two operands are equal or not; if values are not equal then the condition becomes true. | \[ $a != $b \] is true. |
| **-z** | Checks if the given string operand size is zero; if it is zero length, then it returns true. | \[ -z $a \] is not true. |
| **-n** | Checks if the given string operand size is non-zero; if it is nonzero length, then it returns true. | \[ -n $a \] is not false. |
| **str** | Checks if **str** is not the empty string; if it is empty, then it returns false. | \[ $a \] is not false. |

## References

- [tutorialspoint.com - Unix](https://www.tutorialspoint.com/unix/unix-basic-operators.htm)
- [C Shell Operators](https://www.tutorialspoint.com/unix/unix-c-shell-operators.htm)
- [Korn Shell Operators](https://www.tutorialspoint.com/unix/unix-korn-shell-operators.htm)

