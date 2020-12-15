# Data types

<ul>
    <li>boolean</li>
    <li>Numeric types: 
        <ul>
            <li>int: Integers, equivalent to C longs in Python 2.x, non-limited length in Python 3.x,</li>
            <li>long: Long, integers of non-limited length, exists only in Python 2.x</li>
            <li>float: Floating-Point numbers, equivalent to C doubles</li>
            <li>complex: Complex Numbers Sequences</li>
        </ul>
    </li>
    <li>str: String, represented as a sequence of 8-bit characters in Python 2.x, but as a sequence of Unicode characters (in the range of U + 0000 - U + 10FFFF) in Python 3.x</li>
    <li>byte: a sequence of integers in the range of 0-255, only available in Python 3.x</li>
    <li>array: like bytes, but mutable (see below), only available in Python 3.x</li>
    <li>list</li>
    <li>tuple</li>
    <li>Sets:
        <ul>
            <li>set: an unordered collection of unique objects, available as a standard type since Python 2.6</li>
            <li>frozen set: like set, but immutable, available as a standard type since Python 2.6</li>
        </ul>
    </li>
    <li>Mappings:
        <ul>
            <li>dict: Python dictionaries, also called hashmaps or associative arrays, which means that an element of the list is associated with a definition, rather like a Map in Java</li>
        </ul>
    </li>
</ul>

## Note

<ul>
    <li>Variables in Python are really just references to objects in memory</li>
</ul>

## Creating objects of defined types

<ul>
    <li>Literal integers can be entered in three ways:
        <ul>
            <li>decimal numbers can be entered directly,</li>
            <li>hexadecimal numbers can be entered by prepending a 0x or 0X (0xff is hex FF, or 255 in decimal)</li>
            <li>octal liberals depends on the version of Python. In Python 2.x octals can be entered by prepending a 0 (0732 is octal 732, or 474 in decimal), in Python 3.x octals can be entered by prepending a <em>0o</em> or <em>0O</em> (0o732 is octal 732, or 474 in decimal)</li>
            <li>long integers are entered either directly, or by appending an L (0L is a long integer)</li>
        </ul>
    </li>
    <li>Complex numbers are entered by adding a real number and an imaginary one, which is entered by appending a j (i.e. 10+5j is a complex number. So is 10j).</li>
    <li>Tuples are entered in parentheses, with commas betweeen the entries: (10, 'Mary had a little lamb'). Also, the parenthesis can be left out when it's not ambiguous to do so: 10, 'whose fleece was as white as snow'.
        <ul>
            <li>Note that one-element tuples can be entered by surrounding the entry with parentheses and adding a comma like so: ('this is a stupid tuple',),</li>
        </ul>
    </li>
    <li>Lists are similar, but with brackets: <em>Null object ['abc',1,2,3]</em>.</li>
    <li>Dicts are created by surrounding with curly braces a list of key/value pairs separated from each other by a colon and from the other entries with commas: <em>{ 'hello': 'world', 'wight': 'African or European?' }</em></li>
</ul>

## Note

<ul>
    <li>Any of these composite types can contain any other, to any depth.</li>
</ul>

## Null object

<ul>
    <li>The Python analogue of null pointer known from other programming languages is <em>None</em>,</li>
    <li><em>None</em> is not a null pointer or a null reference but an actual object of which there is only one instance</li>
</ul>

## Resources

- [Python Programming, Wikibooks](https://upload.wikimedia.org/wikipedia/commons/9/91/Python_Programming.pdf)
