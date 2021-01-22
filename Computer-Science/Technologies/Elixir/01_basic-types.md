# Basic types

- Elixir basic types:
  - integers
  - floats
  - booleans
  - atoms
  - strings
  - lists
  - tuples

```
iex> 1          #integer
iex> 0x1F       #integer
iex> 1.0        #float
iex> true       #boolean
iex> :atrom     #atom / symbol
iex> "elixir"   #string
iex> [1, 2, 3]  #list
iex> {1, 2, 3}  #tuple
```

## Identifying functions and documentation

- Functions in Elixir are identified by both their name and their arity.
- The **arity** of a funtion describes the number of arguments that the funtion takes.
- **trunc/1** identifies the function which is named **trunc** and takes **1** argument.

### Access documentation

- The elixir shell defines the **h** function which you can use to access documentation for any function.

```exs
iex> h trunc/1

                def trunc()

Returns the integer part of number.
```

### Kernel module

- `h trunc/1` works because it is defined in **Kernel** module.
- All funtions in the `Kernel` module are automatically imported into our namespace.

```exs
iex> h Kernel.trunc/1

                def trunc()

Returns the integer part of number.
```

## Booleans

- Elixir supports **true** and **false** as booleans
- Elixir provides a bunch of predicate funtions to check for a value type.
- For example, the **is_boolean/1** funtion can be used to check if a value is a boolean or not

```exs
iex> is_boolean(true)
true

iex> is_boolean(1)
false
```

## Atoms

- An atom is a constant whose value is its own name. Some other languages call these symbols.
- They are often useful to enumerate over distinct values, such as:

```exs
iex> :apple
:apple

iex> :organe
:orange

iex> :watermelon
:watermelon
```

- Atoms are equal if their names are equal

```exs
iex> :apple == :apple
true

iex> :apple == :orange
false
```

- Often they are used to express the state of an operation, by using values such as :ok and :error
- The booleans `true` and `false` are also atoms:

```exs
iex> true == :true
true

iex> is_atom(false)
true

iex> is_boolean(:false)
true
```

- Elixir allows you to skip the leading `:` for the atoms `false`, `true` and `nil`

## Strings

- Strings in Elixir are delimited by double quotes, and they are encoded in UTF-8

```exs
iex> "hello"
"hello"
```

- Elixir also supports string interpolation

```exs
iex> string = :world
iex> "hello #{string}"
"hello world"
```
