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

- Because a branch in Git is actually a simple file that contains the 40 character SHA-1 checksum of the commit it points to, branches are cheap create and destroy. Creating a new branch is as quick and simple as writing.
- This is in sharp contrast to the way most older VCS tools branch, which involves copying all of the project's files into a second directory. This can take several seconds or even minutes, depending on the size of the project, whereas in Git the process is always instantaneous.
- Also because we're recording the parents when we commit, finding a proper merge base for merging is automatically done for us and is generally very easy to do.

- To show all of the branches, add --all to your git log command

## Creating a new branch and switching to it at the same time

```zsh
$ git checkout -b <newbranchname>
```

- From Git version 2.23 onwards you can use `git switch` instead of git checkout to:
  1. Switch to an existing branch: `git switch testing-branch`
  1. Create a new branch and switch to it: `git switch -c newbranc`. The -c flag stands for create, you can also use the full flag: `--create`.
  1. Return to your previously checked out branch: `git switch -`

## Merging

### git merge

```zsh
$ git merge <branchname>
```

### Fast-forward merge

- When the commit pointed by the branch merged as directly ahead of the commit that HEAD is pointing, Git simply moves the pointer forward.

### Deleting branch

```zsh
$ git branch -d <branchname>
```

### Recursively merge

- When the commit on the branch that is merged is not ahead of a direct ancestor of the branch that is merging in, Git does a simple three-way merge, using the two snapshots pointed to by the branch tips and the commom ancestor of the two.
- Instead of just moving the branch pointer forward, Git creates a new snapshot that result from this three-way merge and automatically creates a new commit that points to it. This is referred to as a merge commit, and is special in that it has more than one parent.
