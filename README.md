# aso-server
A simple standalone/embeddable HTTP file server for NodeJS.

- **Version 0.3.0** - Made embeddable besides standalone
- [Change History](CHANGELOG.md)
- [GitHub](https://github.com/tibyandy/nodejs-static-server)

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

## Running the server as a node module:
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

## Server access URLs:
### http://127.0.0.1:3000/f./
Lists all files and subdirectories where the **static-server** is running.

### http://127.0.0.1:3000/f/
Lists all files and directories from the `/` **(root)** directory.

### http://127.0.0.1:3000/f/{path}/{to}/{file}
Retrieve a file relative to the **static-server** directory, or list all files/directories from **{file}** is a directory.

### http://127.0.0.1:3000/f//{path}/{to}/{file}
Retrieve a file relative to the **root** directory, or list all files/directories from **{file}** is a directory.

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
* [NodeJS](https://nodejs.org/) (tested with Node v6.10.0)
* [git](https://git-scm.com/) OR [npm](https://www.npmjs.com/package/aso-server/tutorial) OR get the whole code with the "Clone or download" button