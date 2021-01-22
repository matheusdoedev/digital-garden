# Git basics

## Initializing a Repository in an Existing Directory

### git init

- This creates a new subdirectory named .git that contains all of your necessary repository files - a Git repository skeleton.
- At this point, nothing in your project is tracked yet.

## Cloning an Existing Repository

- If you're familiar with other VCS systems such as Subversion, you'll notice that the command is "clone" and not "checkout". This is an important distinction.
- Instead of getting just a working copy, Git receives a full copy of nearly all data that the server has.
- Every version of every file for the history of the project is pulled down by default when you run git clone.
- In fact, if your server disk gets corrupted, you can often use nearly any of the clones on ant client to set the server back to the state it was in when it was cloned.

```zsh
$ git clone https://github.com/libgit2/libgit2
```

- That creates a directory named libgit2, initializes a .git directory inside it, pulls down all the data for that repository, and checks out a working copy of the latest version.
- If you go into the new libgit2 directory that was just created, you'll see the project files in there, ready to be worked on or used.

- If you want to clone the repository into a directory named something other than libgit2, you can specify the new directory name as an additional argument

```zsh
$ git clone https://github.com/libgit2/libgit2 mylibgit
```

## Recording Changes to the Repository

- Remember that each file in your working directory can be in one of two states:

  - tracked
  - untracked

- Tracked files are files that were in the last snapshot, they can be unmodified, modified, or staged. In short, tracked files are files that Git knows about.
- Untracked files are everything else. Any files in your working directory that were not in your last snapshot and are not in your staging area. When you first clone a repository, all of your files will be tracked and unmodified because Git just checked them out and you haven't edited anything.
- As you edit files, Git sees them as modified, because you've changed them since your last commit.
- As you work, you selectively stage changes, and the cycle repeats.

## Checking the Status of Your Files

- The main tool you use to determine which files are in which state is the git status command.

### Short Status

- Git also has a short status flag so you can see your changes in a more compact way. If you run `$ git status -s` or `$git status --short` you get a far more simplified output from the command `$ git status -s`

## Viewing Your Staged and Unstaged Changes

- If you want to know exactly what you changed, not just which files were changed - you can use the `git diff` command.
- `git diff` shows you the exact lines added and removed.

- If you want to see what you've staged that will go into your next commit, you can use git diff --staged. This command compares your staged changes to your last commit.
- It's important to note that git diff by itself doesn't show all changes made since your last commit - only changes that are still unstaged. If you've staged all of your changes, git diff will give no output.

## Committing Your Changes

- Now that your staging area is set up the way you want it, you can commit your changes.
- The simplest way to commit is to type git commit: `$ git commit`

### Commit message

- You can see that the default commit message contains the latest output of the git status command commented out and one empty line on top. You can remove these comments and type your commit message, or you can leave them there to help you remember what you're committing.
- For an even more explicit reminder of what you've modified, you can pass the `-v` option to git commit. Doing so also puts the diff of your change in the editor so you can see exactly what changes you're committing.
- Alternatively, you can type your commit message inline with the commit command by specifying it after a -m flag, like this:

```zsh
$ git commit -m "Story 182: fix benchmarks for speed"
```

- Remember that the commit records the snapshot you set up in your staging area. Anything you didn't stage is still sitting there modified. You can do another commit to add it to your history.
- Every time you perform a commit, you're recording a snapshot of your project that you can revert to or compare to later.

## Skipping the Staging Area

- If you want to skip the staging area, Git provides a simple shortcut. Adding the `-a` option to the git commit command makes Git automatically stage every file that is already tracked before doing the commit, letting you skip the git add part.

```zsh
$ git commit -a -m "Add new benchmarks"
```

## Removing Files

- To remove a file from Git, you have to remove it from your tracked files (more accurately, remove it from your staging area) and then commit.
- The git `rm` command does that, and also removes the file from your working directory so you don't see it as an untracked file the next time around.

- Another useful thing you may want to do is to keep the file in your working tree but remove if from your staging area. In other words. you may want to keep the file on your hard drive but not have Git track it anymore.
- This is particularly useful if you forgot to add something to your .gitignore file and accidentally staged it, like a large log file or a bunch of .a compiled files. To do this, use the --cached option:

```zsh
$ git rm --cached README
```

- You can pass files, directories, and file-glob patterns to the git rm command. That means you can do things such as:

```zsh
$ git rm log/\*.log
```

## Moving files

- Unlike many other VCS systems, Git doens't explicity track file movement. If you rename a file in Git, no metadata is stored in Git that tells it you renamed the file. However, Git is pretty smart about figuring that out after the fact.

- `$ git mv file_from file_to`, and it works fine. In fact, if you run something like this and look at the status, you'll see that Git considers it a renamed file:

```zsh
$ git mv README.md README
```

- However, this is equivalent to running something like this:

```zsh
$ mv README.md README

$ git rm README.md

$ git add README
```

## Viewing the Commit History

- The most basic and powerful tool to do this is the git log command.
- By default, with no arguments, git log lists the commits made in that repository in reverse chronological order. That is, the most recent commits show up first. As you can see, this command lists each commit with its SHA-1 checksum, the author's name and email, the date written, and the commit message.

```zsh
$ git log commit
```

- One of the more helpful options is `-p` or `--patch`, which shows the difference (the patch output) introduced in each commit.
- You can also liit the number of log entries displayed, such as using -2 to show only the last two entries.

```zsh
$ git log -p -2
```

- If you want to see some abbreviated stats for each commit, you can use the --stat option:

```zsh
$ git log --stat commit
```

- Another really useful option is `pretty`. This option changes the log output to formats other than the default.
- The `oneline` value for this option prints each commit on a single line, which is useful if you're looking at a lot of commits.
- In addition, the short, full, and fuller values show the output in roughly the same format but with less or more information, respectively:

```zsh
$ git log --pretty=oneline
```

- The most interesting option value is format, which allows you to specify your own log output format. This is especially useful when you're generating output for machine parsing - because you specify the format explicitly, you know it won't change with updates to Git:

```zsh
$ git log --pretty=format:%h - %an, %ar : %s
```

- The oneline and format option values are particularly useful with another log option called --graph
- This option adds a nice little ASCII graph showing your branch and merge history

```zsh
$ git log --pretty=format:"%h %s" --graph
```

### Common options to git log

- `-p`:

  - Show the patch introduced with each commit.

- `--stat`:

  - Show statistics for files modified in each commit.

- `--shortstat`:

  - Display only the changed/insertions/deletions line from the --stat command.

- `--name-only`:

  - Show the list of files modified after the commit information.

- `--name-status`:

  - Show the list of files affected with added/modified/deleted information as well.

- `--abbrev-commit`:

  - Show only the first few characters of the SHA-1 checksum instead of all 40.

- `--relative-date`:

  - Display the date in a relative format (for example, "2 weeks ago") instead of using the full date format

- `--graph`:

  - Display an ASCII graph of the branch and merge history beside the log output.

- `--pretty`:

  - Show commits in an alternate format. Option values include oneline, short, full, fuller, and format (where you specify your own format).

- `--oneline`:
  - Shorthand for --pretty=oneline --abbrev-commit used together.

## Limiting Log Output

- In addition to output-formatting options, git log takes a number of useful limiting options, that is, opations that let you show only a subset of commits.
- You've seen one such option already, the `-2` option, which displays only the last two commits. In fact, you can do `-<n>`, where n is any integer to show the last n commits.
- The time-limiting options, such as `--since` and `--until` are very useful. For example, this command gets the list of commits made in the last two weeks:

```zsh
$ git log --since=2.weeks
```

- You can also filter the list to commits that match some search criteria. The `--author` option allows you to filter on a specific author, and the `--grep` option lets you search for keywords in the commit messages.
- You can specify more than one instance of both the `--author` and `--grep` search criteria, which will limit the commit output to commits that match any of the --author patterns and any of the --grep patterns. However, adding the `--all-match` option further limits the output to just those commits that match all `--grep` patterns.

### -S

- Another really helpful filter is the `-S` option (colloquially referred to as Git's "pickaxe" option), which takes a string and shows only those commits that changed the number of occurrences of that string. For instace, if you wanted to find the last commit that added or removed a reference to a specific function, you could call:

```zsh
$ git log -S funtion_name
```

- The last really useful option to pass to git log as a filter is a path. If you specify a directory or file name, you can limit the log output to commits that introduced a change to those files. This is always the last option and is generally preceded by `double dashes (--)` to separate the paths from the options:

```zsh
$ git log -- path/to/file
```

### Options to limit the output of git log

- `-<n>`:

  - Show only the last n commits.

- `--since, --after`:

  - Limit the commits to those made after the specified date.

- `--until, --before`:

  - Limit the commits to those made before the specified date.

- `--author`:

  - Only show commits in which the author entry matches the specified string.

- `--committer`:

  - Only show commits in which the committer entry matches the specified string.

- `--grep`:
  - Only show commits with a commit message containing the string.

### Preventing the display of merge commits

- Depending on the workflow used in your repository, it's possible that a sizable percentage of the commits in your log history are just merge commits, which typically aren't very informative. To prevent the display of merge commits cluttering up your log history, simply add the log option --no-merges.

## Undoing things

- One of the common undos takes place when you commit too early and possibly forget to add some files, or you mess up your commit message. If you want to redo that commit, make the additional changes you forgot, stage them, and commit again using the `--amend` option:

```zsh
$ git commit --amend
```

- This command takes your staging area and uses it for the commit. If you've made no changes since your last commit, then your snapshot will look exactly the same, and all you'll change is your commit message.

- If you commit and then realize you forgot to stage the changes in a file you wanted to add to this commit, you can do something like this:

```zsh
$ git commit -m "Initial commit"

$ git add forgotten_file

$ git commit --amend
```

- You end up with a single commit - the second commit replaces the results of the first.

- It's important to understand that when you're amending your last commit, you're not so much fixing it as _replacing_ it entirely with a new, improved commit that pushes the old commit out of the way and puts the new commit in its place. Effectively, it's as if the previous commit never happened, and it won't show up in your repository history.

- The obvious value to amending commits is to make minor improvements to your last commit, without cluttering your repository history with commit messages of the form, "Oops, forgot to add a file" or "Darn, fixing a typo in last commit".

- Only amend commits that are still local and have not been pushed somewhere. Amending previously pushed commits and force pushing the branch will cause problems for your collaborators.

## Unstaging a Staged File

- use `git reset HEAD <file>` or `git restore HEAD <file>` to unstage

## Unmodifying a Modified File

```zsh
$ git checkout -- CONTRIBUTING.md
```

- It's important to understand that `git checkout -- <file>` is a dangerous command.
- Any local changes you made to that file are gone. Git just replaced that file with the most recently-committed version. Don't ever use this command unless you absolutely know that you don't want those unsaved local changes.

- Remember, anything that is committed in Git can almost always be recovered. Even commits that were on branches that were deleted or commits that were overwritten with an --amend commit can be recovered. However anything you lose that was never committed is likely never to be seen again.

## Undoing Things with git restore

- Introduced on git 2.23.0;
- It's basically an alternative to git reset.
- From Git version 2.23.0 onwards, Git will use git restore instead of git reset for many undo operations.

### Unstaging a Staged File with git restore

```zsh
$ git restore --staged <file>
```

### Unmodifying a Modified File with git restore

```zsh
$ git restore <file>
```

## Resources

- ["Pro Git" book, by Scott Chacon and Ben Straub](https://git-scm.com/book/en/v2)
