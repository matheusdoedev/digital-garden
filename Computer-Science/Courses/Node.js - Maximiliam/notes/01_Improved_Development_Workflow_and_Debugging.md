# Improved Development Workflow and Debugging

## Global Features vs Core Modules vs Third-party modules

<ul>
   <li><strong>Global features</strong>: keywords like <em>const</em> or <em>function</em> but also some global objects like process</li>
   <li><strong>Core Node.js Modules</strong>: Examples would be the file-system module <em>("fs")</em>, the path module <em>("path")</em> or the Http module ("http")</li>
   <li><strong>Third-party Modules</strong>: Installed via <em>npm install</em> you can add any kind of feature to your app via this way</li>
   <li><strong>Global features</strong> are <strong>always available</strong>, you don't need to import them into the files where you want to use them</li>
   <li><strong>Core Node.js Modules</strong> don't need to be installed <strong>(NO <em>npm install</em></strong> is required) but you <strong>need to import them</strong> when you want to use features exposed by them<br><br> Example: <em>const fs = require('fs')</em><br><br>You can now use the <em>fs</em> object exported by the "fs" module.<br></li>

   <li><strong>Third-party Modules need to be installed</strong> (via <em>npm install</em> in the project folder) <strong>AND imported</strong><br><br>Example:<br><em>npm install --save express-session<br>const sessions = require('express-session')<br></em></li>
</ul>

## NPM

<ul>
    <li>npm stands for <em>"Node Package Manager"</em> and it allows you to manage your Node project and its dependencies</li>
    <li>You can initialize a project with <em>npm init</em></li>
    <li>npm scripts can be defined in the package.json to give you "shortcuts" to common tasks/commands</li>
</ul>

## Types of Errors

<ul>
    <li>Syntax, runtime and logical errors can break your app</li>
    <li>Syntax an druntime errors throw (helpful) error messages (with line numbers!)</li>
    <li>Logical errors can be fixed with testing and the help of the debugger</li>
</ul>

## 3rd Party Packages

<ul>
    <li>Node projects typically don't just use core modules and custom code but also third-partu packages</li>
    <li>You install them via npm</li>
    <li>You can differentiate between production dependencies (--save), development dependencies (--save-dev) and global dependencies (-g)</li>
</ul>

## Debugging

<ul>
    <li>Analyze variable values at runtime</li>
    <li>Look into (and manipulate) variables at runtime</li>
    <li>Set breakpoints cleverly (i.e respect the async/ event-driven nature)</li>
</ul>

### Useful Resources & Links

<ul>
    <li><a href="https://nodejs.org/en/docs/guides/debugging-getting-started/">More on debugging Node.js</a></li>
    <li><a href="https://code.visualstudio.com/docs/nodejs/nodejs-debugging">Debugging Node in Visual Studio Code</a></li>
</ul>
