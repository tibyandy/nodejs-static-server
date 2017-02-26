# aso-server
A simple standalone/embeddable HTTP file server for NodeJS.

- **Version 0.4.1** - Added new commands: `d` / `d.` / `i` / `i.`
- [GitHub](https://github.com/tibyandy/nodejs-static-server) / [Changelog](CHANGELOG.md)

## Running the server standalone:
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

## Embedding the server as a node module:
1. Add **aso-server** as a npm dependency on **package.json**:  

        "dependencies": {
            "aso-server": "^0.3.0"
        }
1. Embed the server with:  

        const asoServer = require('../server');
1. Start and control the server:  

        let server = asoServer
            .onError(e => console.log(e))
            .onStop(() => console.log('server stopped'))
            .start('localhost', 3456, srv => {
                console.log('server started');
            });
        // srv and server are the same

## Server URLs:
All server files can be accessed through HTTP GET:
```
http://<host>:<port>/<dot_command>
http://<host>:<port>/<command>/<path_to_relative_file>
http://<host>:<port>/<command>//<path_to_absolute_file>
```
- When a **command** is followed by double-slashes (`//`), the provided path is considered **absolute** to the server root.
- When it's followed by a single slash (`/`), it's considered **relative** to the path the server is running.
- **dot_command**s - the same as **commands**, but followed by a dot character (`.`) - can be used to retrieve information of the path the server is running.


### Commands:

- `f` / `f.` - Retrieve file (raw) or directory as HTML
- `i` / `i.` - File information (JSON)
- `d` / `d.` - Directory files JSON:
 - `{"exists": false}` - It's not a file, nor a directory, or it has access denied
 - `{"exists": true}` - Exists and it's not a directory
 - `{"exists": true, "files":["filename1", "filename2"...], "dirs":["dirname1", "dirname2"...]}`


### Examples URLs:
After starting **static-server**, try pointing your internet browser to those URLs:
```
http://localhost:3000/
http://localhost:3000/f//home
http://localhost:3000/f/favicon.ico
http://localhost:3000/f/server.js
http://localhost:3000/f.
http://localhost:3000/g/unhandled/command
```

## Requirements:
* For running: [NodeJS](https://nodejs.org/) (tested with Node v6.10.0)
* For downloading: [git](https://git-scm.com/) OR [npm](https://www.npmjs.com/package/aso-server/tutorial) OR get the whole code with the "Clone or download" button