# Insertion sort and Merge sort

## Why Sorting?

- Obvious applications
  - Organize an MP3 library
  - Mantain a telephone directory
- Problems that become easy once items are in sorted order
  - Find a median, or find closest pairs
  - Binary search, identify statistical outliers
- Non-obvious applications
  - Data compression: sorting finds duplicates
  - Computer graphics: rendering scenes front to back

## Insertion sort

- INSERTION-SORT<span style="color: aqua;">(A,n)</span> -> <span style="color: aqua;">A[1 .. n]</span>

  ```py
    for j <-- 2 to n
        insert key A[j] into the (already sorted) sub-array A[1 .. j-1].
          by pairwise key-swaps down to its right position
  ```

- Running time? O(n²) because O(n²) compares and O(n²) swaps e.g. when input is A = [n, n-1, n-2,...,2,1]

## Binary Insertion sort

- BINARY-INSERTION-SORT<span style="color: aqua;">(A,n)</span> -> <span style="color: aqua;">A[1 .. n]</span>

  ```py
      for j <-- 2 to n
          insert key A[j] into the (already sorted) sub-array A[1 .. j-1].
          Use binary search to find the right position
  ```

- Binary search with take <span style="color: aqua;">O(log n)</span> time.
- Howeber, shifting the elements after insertion will still take <span style="color: aqua;">O(n)</span> time
- Complexity: <span style="color: aqua;">O(n log n) comparisons, (n²) swaps</span>

## Merge sort

- MERGE-SORT <span style="color: aqua;">A[1 .. n]</span>

  1. If <span style="color: aqua;">n = 1</span>, done (nothing to sort).
  1. Otherwise, recursively sort <span style="color: aqua;">A[1..n/2]</span> and <span style="color: aqua;">A[n/2+1..n]</span>.
  1. <span style="color: red;">"Merge"</span> the two sorted sub-arrays.

- <span style="color: red;">Key subroutine:</span> Merge

## Resources

- [Lecture 3: Insertion sort and Merge sort, MIT 6.006 Introduction to Algorithms](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/MIT6_006F11_lec03.pdf)
