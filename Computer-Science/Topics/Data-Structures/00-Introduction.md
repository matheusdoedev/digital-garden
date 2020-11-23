# Data Sctructures

## Introduction

<ul>
    <li>Formal data structures enable a programmer to mentally structure large amounts of data into conceptually manageable relationships.</li>
    <li>Data structures also provide guarantees about algorithmic complexity - choosing an appropriate data structure for a job is crucial for writing good software</li>
    <li>Because data structures are higher-level abstractions, they present to us operations on groups of data, such as adding an item to a list</li>
    <li>When a data structure provides operations, we can call the data structure an <strong>abstract data dype</strong> (sometimes abbreviated as ADT)</li>
</ul>

<ul>
    <li><strong>Encapsulation</strong> is when common patterns are grouped together under a single name and then parameterized, in order to achieve a higher-level understanding of that pattern</li>
    <li><strong>Abstraction</strong> is a mechanism to hide the implementation details of an abstraction away from the users of the abstraction</li>
</ul>

## Node

<ul>
    <li>A node is a simply container for a value, plus a pointer to a "next" node (which may be null)</li>
    <li><strong>make-node</strong>(Element v, Node next ): Node create a new node, with <em>v</em> as its contained value and <em>next</em> as the value of the next pointer</li>
    <li><strong>get-value</strong>(Node n): Element returns the value contained in node n</li>
    <li><strong>get-next</strong>(Node n): Node returns the value of node n's next pointer</li>
    <li><strong>set-value</strong>(Node n, Element n): Sets the contained value of <em>n</em> to be <em>v</em></li>
    <li><strong>set-next</strong>(Node n, Node new-next): Node sets the value of node n's next pointer to be new-next.</li>[]
    <li>All operations can be performed in time that is <em>O(1)</em></li>
</ul>

## Resources

<ul>
    <li><a href="https://en.wikibooks.org/wiki/Data_Structures">Data Structures - Wikibooks</a></li>
</ul>
