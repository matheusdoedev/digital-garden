# Git Branching

- Branching means you diverge from the main line of development and continue to do work without messing with that main line.

## Branches in a Nutshell

- When you make a commit, Git stores a **commit object** that contains a pointer to the snapshot of the content you staged.

- A branch in Git is simply a lightweight movable pointer to one of these commits.
- The default branch name in Git is master. As you start making commits, you're given a master branch that points to the last commit you made. Every time you commit, the master branch pointer moves forward automatically.

## Creating a New Branch

- What happens when you create a new branch? Well, doing so creates a new pointer for you to move around.
- Let's say you want to create a new branch called testing. You do this with the `git branch` command:

```zsh
$ git branch testing
```

- This creates a new pointer to the same commit you're currently on.

### How does Git know what branch you're currently on?

- It keeps a special pointer called HEAD.
- In Git, this is a pointer to the local branch you're currently on.

- The Git branch command only _created_ a new branch - it didn't switch to that branch.

- To se where the HEAD pointer is:

```zsh
$ git log --oneline --decorate
```

## Switching Branches

- To switch to an existing branch, you run the git checkout command.

```zsh
$ git checkout <branchname>
```

- This moves HEAD to point to the testing branch.

- To show commit history for th edesired branch you have to explicitly specify it:

```zsh
$ git log <branchname>
```

- To show all of the branches, add --all to your git log command
