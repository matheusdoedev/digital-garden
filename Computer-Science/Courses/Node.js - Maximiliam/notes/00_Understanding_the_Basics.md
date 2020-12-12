# Understanding the Basics

## How the Web Works

<ul>
    <li>The <strong>client</strong> (browser/user) will send a <strong>request</strong> to the <strong>server</strong>, that will handle that request, doing some tasks, connect to databases, and so therefore will be send a <strong>response</strong> back to the client</li>
</ul>

## Program Lifecycle & Event Loop

<ul>
    <li>Node.js runs non-blocking JS code and uses an event-driven code ("Event Loop") for running your logic</li>
    <li>A Node program exits as soon as there is no more work to do</li>
    <li>Note: The createServer() event never finishes by default</li>
</ul>

## Asynchronous Code

<ul>
    <li>JS code is non-blocking</li>
    <li>Use callbacks and events => Order changes!</li>
</ul>

## Requests & Responses

<ul>
    <li>Parse request data in chunks (Streams & Buffers)</li>
    <li>Avoid "double responses"</li>
</ul>

## Node.js & Core Modules

<ul>
    <li>Node.js ships with multiple core modules (http, fs, path, ...)</li>
    <li>Core modules can be imported into any file to be used there</li>
    <li>Import via require('module')</li>
</ul>

## The Node Module System

<ul>
    <li>Import via require('./path-to-file') for custom files or require('module') for core & third-party modules</li>
    <li>Export via module.exports or just exports (for multiple exports)</li>
</ul>
