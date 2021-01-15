# About Version

- Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.

## Local Version Control Systems

- Local VCSs are a simple database that kept all the changes to files under revision control.

## Centralized Version Control Systems

- These systems (such as CVS, Subversion, and Perforce) have a single server that contains all the versioned files, and a number of clients that check out files from that central place.

### CVCS advantages x local VCSs

- Everyone knows to a certain degree what everyone else on the project is doing.
- Administrators have fine-grained control over who can do what, and it's far easier to administer a CVCS that it to deal with local databases on every client.

### CVCS downsides

- If that central server goes down for an hour, then during that hour nobody can collaborate at all or save versioned changes to anything the're working on.
- If the hard disk the central database is on becomes corrupted, and proper backups haven't been kept, you lose absolutely everything.

### Distributed Version Control Systems

- In a DVCS (such as Git, Mercurial, Bazaar or Darcs), clients don't just check out the latest snapshot of the files, rather, they fully **mirror the repository**, including its full history.
- Thus, if any server dies, and these systems were collaborating via that server, any of the client repositories can be copied back up to the server to restore it.
- Every clone is really a full backup of all the data.

## Resources

- ["Pro Git" book, by Scott Chacon and Ben Straub](https://git-scm.com/book/en/v2)
