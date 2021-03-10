## Working with Remotes

- Remote repositories are versions of your project that are hosted on the Internet or network somewhere.
- It is entirely possible that you can be working with a "remote" repository that is, in fact, on the same host you are. The word "remote" does not necessarily is somewhere else on the network or Internet, only that it is elsewhere.

### Showing Your Remotes

- To see which remote servers you have configured, you can run the `git remote` command. It lists the shortnames of each remote handle you've specified.
- You can also specify `-v`, which shows you the URLs that Git has stored for the shortname to be used when reading and writing for that remote:

```zsh
$ git remote -v
```

## Adding Remote Repositories

- To add a new remote Git repository as a shortname you can reference easily, run:

```zsh
$ git remote add <shortname> <url>
```

- To get data from your remote projects, you can run:

```zsh
$ git fetch <remote>
```

- The command goes out to that remote project and pulls down all the data from that remote project that you don't have yet. After you do this, you should have references to all the branches from that remote, which you can merge in or inspect at any time.

### Git pull

- If your current branch is set up to track a remote branch, you can use the `git pull` command to automatically fetch and then merge that remote branch into your current branch.
- Running git pull generally fetches data from the server you originally cloned from and automatically tries to merge it into the code you're currently working on.

## Pushing Your rRemotes

- When you have your project at a point that you want to share, you have to push it upstream. The command ofr this is simple:

```zsh
$ git push <remote> <branch>
```

- This command works only if you cloned from a server to which you have write access and if nobody has pushed in the meantime. If you and someone else clone at the same time and they push upstream and then you push upstream, your push will rightly be rejected. You'll have to fetch their work first and incorporate it into yours before you'll be allowed to push.

## Inspecting a Remote

- If you want to see more information about a particular remote, you can use the git remote show <remote> command.

## Renaming and Removing Remotes

- You can run `git remote rename` to change a remote's shortname.

```zsh
$ git remote rename <old> <new>
```

- It's worth mentioning that this changes all your remote-tracking branch names, too.

### Removing remote

- If you want to remove a remote for some reason - you've moved the server or are no longer using a particular mirror, or perhaps a contributor isn't contributing anymore - you can use:

```zsh
$ git remote remove
```

or

```zsh
$ git remote rm
```

- Once you delete the reference to a remote this way, all remote-tracking branches and configuration settings associated with that remote are also deleted.

## Resources

- ["Pro Git" book, by Scott Chacon and Ben Straub](https://git-scm.com/book/en/v2)
