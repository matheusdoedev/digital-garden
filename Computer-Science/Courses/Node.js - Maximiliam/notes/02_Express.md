# Express

## What is Express.js

<ul>
    <li>Express.js is Node.js framework - a package that adds a bunch of utilify functions and tools and a clear set of rules on how the app should be built (middleware!)</li>
    <li>It's highly extensible and other packages can be plugged into it (middleware!)</li>
</ul>

## Middleware, next() and res()

<ul>
    <li>Express.js relies heavily on middleware functions - you can easily add them by calling use()</li>
    <li>Middleware functions handle a request and should call next() to forward the request to the next function in line or send a response</li>
</ul>

## Routing

<ul>
    <li>You can filter requests by path and method</li>
    <li>If you filter by method, paths are matched exactly, otherwise, the first segment of a URL is matched</li>
    <li>You can use the express.Router to split your routes acess files elegantely</li>
</ul>

## Serve files

<ul>
    <li>You're not limited to serving dummy text as a response</li>
    <li>You can sendFile()s to your users - e.g. HTML files</li>
    <li>If a request is directly made for a file (e.g a .css file is requested), you can enable static serving for such files via express.static()</li>
</ul>

## Express documentation

<ul>
    <li><a href="https://expressjs.com/en/starter/installing.html">Express</a></li>
</ul>
