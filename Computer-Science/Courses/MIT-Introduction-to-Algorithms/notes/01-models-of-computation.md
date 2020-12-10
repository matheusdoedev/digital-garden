# Models of Computation

## What is an Algorithm?

<ul>
    <li>Mathematical abstraction of computer program</li>
    <li>Computational procedure to solve a problem</li>
</ul>

### Analog

<ul>
    <li>computational <=> mathematical</li>
    <li>program <=> algorithm</li>
    <li>programmming language <=> pseudocode</li>
    <li>computer <=> model of computation</li>
</ul>

## Model of computation specifies

<ul>
    <li>what operations an algorithm is allowed?</li>
    <li>cost (time,space, ...) of each operation</li>
    <li>cost of algorithm = sum of operation costs</li>
</ul>

## Random Access Machine (RAM)

<ul>
    <li>Random Access Memory (RAM) modeled by a big array</li>
    <li>Θ(1) registers (each 1 word)</li>
    <li>In Θ(1) time, can
        <ul>
            <li>load word @ ri into register rj</li>
            <li>compute (+,-,*,/,&,|,^) on registers</li>
            <li>store register rj into memory @ ri</li>
        </ul>
    </li>
    <li>what's a word? w >= lg (memory size) bits
        <ul>
            <li style="color: aqua;">assume basic objects (e.g. int) fit in word</li>
        </ul>
    </li>
</ul>

## Pointer Machine

- dynamically allocated objects (namedtuple)
- object has O(1) fields
- field = word (e.g., int) or pointer to object/null (a.k.a. reference)
- weaker than (can be implemented on) RAM

## Python Model

- Python lets you use either mode of thinking

  1. "list" is actually an array -> RAM

  ```py
      L[i] = L[j] + 5 -> O(1) time
  ```

  2. object with O(1) attributes (including references) -> pointer machine

  ```py
      x = x.next -> O(1) time
  ```

- Python has many other operations. To determine their cost, imagine implementation in terms of (1) or (2):

  1. list

  ```py
  (a) L.append(x) -> O(1) time
  ```

  ```
  (b) L = L1 + L2 === L = [] -> O(1)
      (O(1+|L1|+|L2|)time)

            for x in L1:
                L.append(x) -> O(1)

            for x in L2:
                L.append(x) -> O(1)
  ```

## Resources

- [Lecture 2: Models of Computation](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/MIT6_006F11_lec02.pdf)
