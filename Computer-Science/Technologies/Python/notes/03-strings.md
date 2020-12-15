# Strings

## Equality

<ul>
    <li>Two strings are equal if they have exactly the same contents, meaning that they are both the same length and each character has a one-to-one positional correspondence.</li>
</ul>

## Numerical

<ul>
    <li>There are two quasi-numerical operations which can be done on strings -- addition and multiplication,</li>
    <li>String addition is just another name for concatenation,</li>
    <li>String multiplication is repetitive addition, or concatenation.</li>
</ul>

### Examples

```sh
c = 'a'

c + 'b' # 'ab'

c * 5 # 'aaaaa'
```

## Containment

<ul>
    <li>There is a simple operator 'in' that returns True if the first operand is contained in the second,</li>
    <li>This also works on substrings.</li>
</ul>

### Examples

```sh
x = 'hello'

y = 'ell'

x in y # False

y in x # True
```

## Indexing and Slicing

<ul>
    <li>Unlike arrays in other languages, Python also indexes the arrays backwards, using negative numbers,</li>
    <li>We can also use "slices" to access a substring of s. <em>s[a:b] will give us a string starting with s[a] and ending with s[b-1]</em></li>
</ul>

```sh
>>> s[1:4]

'ana'
```

<ul>
    <li>Another feature of slices is that if the beginning or end is left empty, it will default to the first or last index, depending on context.</li>
</ul>

```sh
>>> s[2:]

'nadu'

>>> s[:3]

'Xan'

>>> s[:]

'Xanadu'
```

<ul>
    <li>You can also use negative numbers in slices</li>
</ul>

```sh
>>> print s[-2:]

'du'
```

## String methods

### is\*

<ul>
    <li>isalnum(), isalpha(), isdigit(), islower(), isupper(), isspace(), and istitle()</li>
    <li>The length of the string object compared must be at least 1, or the is* methods will return False</li>
    <li>In other words, a string object of len(string) == 0, is considered "empty", or False</li>
</ul>

#### isalnum

<ul>
    <li>True if the string is entirely composed of alpha betic and/or numeric characters (i.e. no punctuation)</li>
</ul>

#### isalpha and isdigit

<ul>
    <li>Work similarly for alphabetic characters or numeric characters only</li>
</ul>

#### isspace

<ul>
    <li>returns True if the string is composed entirely of whitespace</li>
</ul>

#### islower, issuper and istitle

<ul>
    <li>return True if the string is in lowercase, uppercase, or titlecase respectively</li>
</ul>

### Title, Upper, Lower, Swapcase, Capitalize

#### Title

<ul>
    <li>The <strong>title method capitalizes the first letter of each word in the string (and makes the rest lower case)</strong></li>
    <li>Words are identified as substrings of alphabetic characters that are separated by non-alphabetic characters, such as digits, or whitespace</li>
    <li>This can lead to some unexpected behavior. For example, the string "x1x" will be converted to "X1X" instead of "X1x"</li>
</ul>

#### Swapcase

<ul>
    <li>The <strong>swapcase</strong> method makes all uppercase letters lowercase and vice versa</li>
</ul>

#### Capitalize

<ul>
    <li>The <strong>capitalize</strong> method is like title except that it considers the entire string to be a word</li>
</ul>

### Count

<ul>
    <li>returns the number of the specified substrings in the string.</li>
</ul>

```sh
>>> s = 'Hello, world'

>>> s.count('o') # print the number of 'o's in 'Hello, World'
2
```

<ul>
    <li><em>.count() is case-sensitive, so this example will only count the number of lowercase letter 'o's.</em></li>
</ul>

```sh
>>> s = 'HELLO, WORLD'

>>> s.count('o') # print the number of 'o's in 'Hello, World'
0
```

### strip, rstrip, lstrip

<ul>
    <li>
        returns a copy of the string with the leading (lstrip) and trailing (rstrip) whitespace removes both
    </li>
</ul>

```sh
>>> s = '\t Hello, world\n\t'

>>> print s Hello, world

>>> print s.strip() Hello, world

>>> print s.lstrip() Hello,world
```

<ul>
    <li>Note the leading and trailing tabs and newlines</li>
    <li>Strip methods can balso be used to remove other types of characters</li>
</ul>

```sh
import string

s = 'www.wikibooks.org'

print s

print s.strip('w') # Removes all w's from outside print
s.strip(string.lowercase) # Removes all lowercase letters from outsize print
s.strip(string.printable) # Removes all printable characters

Outputs:
www.wikibooks.org  .wikibooks.org  .wikibooks.
```

### ljust, rjust, center

<ul>
    <li>left, right or center justifies a string into a given field size (the rest is padded with spaces)</li>
</ul>

```sh
>>> s = 'foo'

>>> s'foo'

>>> s.ljust(7)'foo
```

### join

- Joins together the given sequence with the string as separator

```py
''.join(seq) # '1 2 3 4 5'

'+'.join(seq) # '1+2+3+4+5'

''.join(map(str,seq)) # '1 2 3 4 5'
```

### find, index, rfind, rindex

- The find and index methods return the index of the first found occurrence of the given subsequence. If it is not found, find returns -1 but index raises a ValueError.
- rfind and rindex are the same as find and index except that they search through the string from right to left (i.e. they find the last occurrence)

```py
>>> s.find('l') 2]
>>> s[s.index('l'):]
'llo, world'
>>> s.rfind('l') 10
>>> s[:s.rindex('l')]
'Hello, wor'
>>> s[s.index('l'):s.rindex('l')]
'llo, wor'
```

## Resources

- [Python Programming, Wikibooks](https://upload.wikimedia.org/wikipedia/commons/9/91/Python_Programming.pdf)
