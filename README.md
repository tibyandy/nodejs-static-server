# nodejs-static-server
Ultra simple static server for NodeJS.

## Usage:
### http://127.0.0.1:3000/f./
Lists all files and subdirectories where the **nodejs-static-server** is running.

### http://127.0.0.1:3000/f/
Lists all files and directories from the `/` **(root)** directory.

### http://127.0.0.1:3000/f/[relative_path]
### http://127.0.0.1:3000/f//[absolute_path]
If `[absolute_path]`/`[relative_path]` points to a directory, lists all files and subdirectories from that path.

If `[absolute_path]`/`[relative_path]` points to a file, retrieves the file.

## Examples:
Try pointing your internet browser to those URLs:
```
http://127.0.0.1:3000/f//home/andy
http://127.0.0.1:3000/f//home/andy/.bashrc
http://127.0.0.1:3000/f/favicon.ico
http://127.0.0.1:3000/f/server.js
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
Server running at http://127.0.0.1:3000/
```
Hit Ctrl+C (or cmd+c on a Mac) to stop the server.

## Requirements:
* NodeJS (tested with Node v6.10.0)
* Git (for downloading the code only, but you can get the whole code on the "Clone or download" button)