# The Model View Controller (MVC)

## What's MVC ?

### Model

- Responsible for represent your data
- Responsible for managing your data (saving, fetching, etc)
- Doesn't matter if you manage data in memory, files or databases
- Contains data-related logic

### View

- What the users sees
- Shouldn't contain too much logic

### Controller

- Connecting your Models and your Views
- Contains the "in-between" logic
- Should only make sure that the two can communicate (in both directions)
- Split across middlewares functions
