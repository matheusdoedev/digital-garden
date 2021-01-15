# Git config

- Is a toll that lets you get and set configuration variables that control all aspects of how Git looks and operates

## How to store variables

- These variables can be stored in three different places:

  1. `[path]etcgitconfig` file:
     - Contains values applied to every user on the system and all their repositories.
     - If you pass the option --system to git config, it reads and writes from this file specifically.
     - Because this is a system configuration file, you would need admnistrative or superuser privilege to make changes do it.
  1. `/.gitconfig` or `/.configgitconfig` file:
     - Values specific personally to you, the user.
     - You can make Git read and write to this file specifically by passing the --global option, and this affects all of the repositories you work with on your system.
  1. config file in the Git directory (that is, `.git/config`) of whatever repository you're currently using:
     - Specific to that single repository.
     - You can force Git to read from and write to this file with the --local option, but that is in fact the default.

- You can view all of your settings and whee they are coming from using:

```zsh
$ git config --list --show-origin
```

## Your identify

- The first thing you should do when you install Git is to set your user name and email address.
- This is important because every Git commit uses this information, and it's immutably baked into the commits you start creating:

```zsh
$ git config --global user.name "John Doe"
```

## Resources

- ["Pro Git" book, by Scott Chacon and Ben Straub](https://git-scm.com/book/en/v2)
