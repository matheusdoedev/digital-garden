# Git aliases

- If you don't want to type the entire text of each of the Git commands, you can easily set up an alias for each command using git config.

```zsh
$ git config --global alias.br
```

- This technique can also be very useful in creating commands that you think should exist. For example, to correct the usability problem you encountered with unstaging a file, you can add your own unstage alias to Git:

```zsh
$ git config --global alias.unstage 'reset HEAD --'
```

## External command

- However, maybe you want to run an external command, rather than a Git subcommand. In that case, you start the command with a `!` character. This is useful if you write your own tools that work with a Git repository. We can demonstrate by aliasing git visual to run gitk:

```zsh
$ git config --global alias.visual '!gitk"
```
