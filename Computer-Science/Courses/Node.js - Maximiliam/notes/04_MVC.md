# The Model View Controller (MVC)

## What's MVC ?

### Model

<ul>
    <li>Responsible for represent your data</li>
    <li>Responsible for managing your data (saving, fetching, etc)</li>
    <li>Doesn't matter if you manage data in memory, files or databases</li>
    <li>Contains data-related logic</li>
</ul>

### View

<ul>
    <li>What the users sees</li>
    <li>Shouldn't contain too much logic</li>
</ul>

### Controller

<ul>
    <li>Connecting your Models and your Views</li>
    <li>Contains the "in-between" logic</li>
    <li>Should only make sure that the two can communicate (in both directions)</li>
    <li>Split across middlewares functions</li>
</ul>
