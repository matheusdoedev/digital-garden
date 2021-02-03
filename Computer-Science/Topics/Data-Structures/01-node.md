## Node

- A node is a simply container for a value, plus a pointer to a "next" node (which may be null),
- **make-node**(Element v, Node next): Node -> create a new node with _v_ as its contained value and _next_ as the value of the next pointer,
- **get-value**(Node n): Element -> returns the value contained in node n,
- **get-next**(Node n): Node -> returns the value of node n's next pointer,
- **set-value**(Node n, Element v): void -> sets the contained value of _n_ to be _v_,
- **set-next**(Node n, Node new-next): Node -> sets the value of node n's next pointer to be new-next.
- All operations can be performed in time that is `O(1)`.

## Resources

- [Data Structures - Wikibooks]("https://en.wikibooks.org/wiki/Data_Structures")
