# Heaps and Heap sort

## Priority Queue

- A data structure implementing a set S of elements, each associated with a key, supporting the following operations:
  - <span style="color: aqua;">insert(S,x) :</span> insert element x into set S
  - <span style="color: aqua;">max(S) :</span> return element of S with largest key
  - <span style="color: aqua;">extract_max(S) :</span> return element of S with largest key and remove it from S
  - <span style="color: aqua;">increase_key(S,x,v) :</span> increase the value of element x's key to new value k

## Heap

- Implementation of a priority queue
- An <span style="color: red;">array</span>, visualized as a nearly complete <span style="color: red;">binary tree</span>
- <span style="color: aqua;">Max Heap Property:</span> The key of a node is >= than the keys of its children
  - <span style="color: aqua;">Min Heap</span> defined analogously

## Heap as a Tree

- <span style="color: aqua;">root of tree</span> first element in the array, corresponding to <span style="color: green;">i = 1</span>
- <span style="color: aqua;">parent(i)=i/2:</span> returns index of node's parent
- <span style="color: aqua;">left(i)=2i:</span> returns index of node's left child
- <span style="color: aqua;">right(i)=2i+1:</span> returns index of node's right child

- <span style="color: green;">No pointers required! Height of a binary heap is O(lg n)</span>

## Heap Operations

- <span style="color: aqua;">build_max_heap:</span> produce a max-heap from an unordered array
- <span style="color: aqua;">max_heapify:</span> correct a <span style="color: red;">single</span> violation of the ehap property in a subtree at its root
- <span style="color: aqua;">insert, extract_max, heapsort</span>

### Max_heapify

- **Assume that the trees rooted at left(i) and right(i) are max-heaps**
- If element A[i] violates the max-heap property, correct violation by "trickling" element A[i] down the tree, making the subtree rooted at index i a max-heap;
- Time = O(log n)

#### Max_heapify Pseudocode

```
l = left(i)
r = right(i)

if (l <= heap-size(A) and A[l] > A[i])
    then largest = l     else largest = i
if (r <= heap-size(A) and A[r] > A[largest])
    then largest = r
if largest = i
    then exchange A[i] and A[largest]
        Max_Heapify(A, largest)
```

### Build_Max_Heap(A)

- Converts A[1...n] to a max heap

```
Build_Max_Heap(A):
    for i=n/2 downto 1
        do Max_Heapify(A,i)
```

- Time = O(n log n)

## Heap-Sort

- Sorting strategy:

  1. Build Max Heap from unordered array;
  1. Find Maximum element A[1];
  1. Swap elements A[n] and A[1]:
     - now max element is at the end of the array!
  1. Discard node n from heap
     - (by decrementing heap-size variable)
  1. New root may violate max heap property, but its children are max-heaps. Run max_heapify to fix this.
  1. Go to Step 2 unless heap is empty

- Running time:

  - after n iterations the Heap is empty
  - every iteration involves a swap and a max_heapify operation; hence it takes O(log n) time

- Overall O(n log n)

## Resources

- [Lecture 4: Heaps and Heap sort, MIT 6.006 Introduction to Algorithms](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/MIT6_006F11_lec03.pdf)
