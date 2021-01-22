# Git Ignore

- The rules for the patterns you can put in the .gitignore file are as follows:
  - Blank lines or lines starting with `#` are ignored
  - Standard glob patterns work, and will be applied recursively throughout the entire working tree.
  - You can start patterns with a forward slash (/) to avoid recursivity.
  - You can end patterns with a forward slash (/) to specify a directory.
  - You can negate a pattern by starting it with an exclamation point (!).

## Glob patterns

- Glob patterns are like simplified regular expressiosn that shells use.

  - An asterisk (\*) matches zero or more characters;
  - [abc] matches any character inside the brackets (in this case a,b, or c);
  - a question mark (?) matches a single character;
  - and brackets enclosing characters separated by a hyphen ([0-9]) matches any character between them (in this case 0 through 9).
  - you can also use two asterisks to match nested directories;
  - a/\*\*/z would match a/z, a/b/z, a/b/c/z, and so on.

- In the simple case, a repository might have a single .gitignore file in its root directory, which applies recursively to the entire repository. However, it is also possible to hava additional .gitignore files in subdirectories.
- The rules in these nested .gitignore files apply only to the files under the directory where they are located.

## Resources

- ["Pro Git" book, by Scott Chacon and Ben Straub](https://git-scm.com/book/en/v2)
