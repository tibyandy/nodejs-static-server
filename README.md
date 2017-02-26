# aso-server
A simple static server for NodeJS.

*[Version 0.2.1](CHANGELOG.md) - Configurable host and ports; npm compatible*

## Usage:
### http://127.0.0.1:3000/f./
Lists all files and subdirectories where the **static-server** is running.

### http://127.0.0.1:3000/f/
Lists all files and directories from the `/` **(root)** directory.

### http://127.0.0.1:3000/f/{path}/{to}/{file}
Retrieve a file relative to the **static-server** directory, or list all files/directories from **{file}** is a directory.

### http://127.0.0.1:3000/f//{path}/{to}/{file}
Retrieve a file relative to the **root** directory, or list all files/directories from **{file}** is a directory.

## Examples:
After starting **static-server**, try pointing your internet browser to those URLs:
```
http://localhost:3000/
http://localhost:3000/f//home
http://localhost:3000/f/favicon.ico
http://localhost:3000/f/server.js
http://localhost:3000/f.
http://localhost:3000/g/unhandled/command
```

## Running the server:
Open your terminal on any desired directory and type
```
git clone https://github.com/tibyandy/nodejs-static-server.git
cd nodejs-static-server
node server
```
The server will return:
```
Server running at http://localhost:3000/
Hit CTRL+C (or CMD+C) to stop
```
For more options, type any of the below commands:
```
node server help
node server /?
node server -h
```

## Requirements:
* [NodeJS](https://nodejs.org/) (tested with Node v6.10.0)
* [git](https://git-scm.com/) (for downloading the code only, but you can get the whole code on the "Clone or download" button)