# The Git Workflow

- The basic Git workflow goes something like this:

  1. You modify files in your working tree.
  1. You selectively stage just those changes you want to be part of your next commit, which adds only those changes to the staging area.
  1. You do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory.

- If a particular version of a file is in the Git directory, it's considered committed.
- If it has been modified and was added to the staging area, it is staged.
- And if it was changed since it was checked out but has not been staged, it is modified.

## Resources

- ["Pro Git" book, by Scott Chacon and Ben Straub](https://git-scm.com/book/en/v2)
