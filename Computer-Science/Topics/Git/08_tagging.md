# Tagging

- Git has the ability to tag specific points in a repository's history as being important.

## Listing Your Tags

- Listing the existing tags in Git is straightforward. Just type `git tag (with optional -l or --list)`:

```zsh
$ git tag v1.0
```

- You can also search for tags that match a particular patter. If you're interested only in looking at the 1.8.5 series, you can run this:

```zsh
$ git tag -l "v1.8.5*"
```

- If you want just the entire list of tags, running the command `git tag` implicitly assumes you want a listing and provides one. The use of -l or --list in this case is optional. If, however, you're supplying a wildcard pattern to match tag names, the use of -l or --list is mandatory.

## Creating Tags

- git supports two types of tags:

  - lightweight
  - annotated

- A **lightweight tag** is very much like a branch that doesn't change - it's just a `pointer` to a specific commit.

- **Annotated tags**, however, are stored as full objects in the Git database.

  - They're checksummed;
  - contain the tagger name, email, and date;
  - have a tagging message;
  - and can be signed and verified with GNU Privacy Guard (GPG).

- It's generally recommended that you create annotated tags so you can have all this information, but if you want a temporary tag or for some reason don't want to keep the other information, lightweight tags are available too.

### Annotate Tags

- Creating an annotated tag in Git is simple. The easiest way is to specify -a when you run the tag command:

```zsh
$ git tag -a v1.4 -m "my version 1.4"
```

- The `m` specifies a tagging message, which is stored with the tag. If you don't specify a message for an annotated tag, Git launches your editor so you can type it in.

### Lightweight Tags

- Another way to tag commits is with a lightweight tag.
- This is basically the commit checksum stored in a file. - no other information is kept.
- To create a lightweight tag, don't supply any of the -a, -s, or -m options, just provide a tag name:

```zsh
$ git tag v1.4-1lw
```

## Tagging Later

- Now, suppose you forgot to tag the project at v1.2, which was at the "Update rakefile" commit. You can add it after the fact. To tag that commit, you specify the commit checksum (or part of it) at the end of the command:

```zsh
$ git tag -a v1.2 9fceb02
```

## Sharing Tags

- By default, the git push command doesn't transfer tags to remote servers. You will have to explicity push tags to a shared server after you have created them. This process is just like sharing remote brances - you can run:

```zsh
$ git push origin --tags
```

- Now , when someone else clones or pulls from your repository, they will get all your tags as well

- `git push <remote> --tags` will push both lightweight and annotated tags. There is currently no option to push only lightweight.

- There is currently no option to push only lightweight tags, but if you use `git push <remote> --follow-tags` only annotated tags will be pushed to the remote.

## Deleting Tags

- To delete a tag on your local repository, you can use `git tag -d <tagname>`.
- Note that this does not remove the tag from any remote servers. There are two commom variations for deleting a tag from a remote server.

- The first variation is `git push <remote> :refs/tags/<tagname>`:

- The second (and more intuitive) way to delete a remote tag is with:

```zsh
$ git push origin --delete <tagname>
```

## Checking out Tags

- If you want to view the versions of files a tag is pointing to, you can do a git checkout of that tag, although this puts your repository in "detached HEAD" state, which has some ill side effects:

```zsh
$ git checkout v2.0.0
```

- You are in 'detached HEAD' state. You can look around, make experimental changes and commit them, and you can discard any commits you make in this state without impacting any branches by performing another checkout.

- If you want to create a new branch to retain commits you create, you may do so (now or later) by using -c with the switch command.

```zsh
$ git switch -c <newbranch-name>
```

- Or undo this operation with:

```zsh
$ git switch -
```

- If you make changes and then create a commit, the tag will stay the same, but your new commit won't belong to any branch and will be unreachable, except by the exact commit hash. Thus, if you need to make changes - say you're fixing a bug on an onder version, for instance - you will generally want to create a branch:

```zsh
$ git checkout -b version2 v2.0.0
```
