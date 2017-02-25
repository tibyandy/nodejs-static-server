const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');
const connectionHandler = (req, res) => {
  let method = req.method;
  let action = req.url.substring(1).split('/');
  let value = decodeURI(action.slice(1).join('/'));
  action = action[0];

  if (action == 'f') {
    return outputFile(res, value);
  } else if (action == 'f.') {
    return outputFile(res, '.');
  } else if (action == 'favicon.ico') {
    return outputFile(res, './favicon.png');
  }
  res.writeHead(200);
  res.end(`method: ${method}\naction: ${action}\nvalue : ${value}`);
}

const outputFile = (res, path) => {
  if (path == '') {
    path = '/';
  }
  try {
    let contents = fs.readFileSync(path);
    res.writeHead(200);
    return res.end(contents);
  } catch (e) {
    if (e.code === 'ENOENT') {
      res.writeHead(404, 'Not Found');
      return res.end('404 Not Found');
    } else if (e.code === 'EACCES') {
      res.writeHead(403, 'Access Denied');
      return res.end('403 Access Denied');
    } else if (e.code === 'EISDIR') {
      return listDir(res, path);
    }
    res.writeHead(400, {'Content-Type': 'text/plain'});
    return res.end(JSON.stringify(e));
  }
}

const listDir = (res, path) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let body = `<html><head><title>${path}</title><link rel="icon" href="/f/favicon.png"></head><body><h1>${path}</h1>\n<ul>\n`
  let files = fs.readdirSync(path);
  path += path == '/' ? '' : '/';
  for (i in files) {
    let file = files[i];
    let dir;
    try {
      let fstat = fs.statSync(path + file);
      dir = fstat.isDirectory() ? '[DIR] ' : '';
    } catch (e) {
      dir = '[?] ';
    }
    body += `<li>${dir}<a href="/f/${path}${file}">${file}</a></li>\n`;
  }
  body += '</ul></body></html>';
  return res.end(body);  
};

const server = require('http').createServer(connectionHandler);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

