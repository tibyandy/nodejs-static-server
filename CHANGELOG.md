# Changelog

## [0.3.0] - 2017-02-25

1. Made ALSO embedable. Use with

        const asoServer = require('../server');
        asoServer.onError(onErrorFn).onClose(onCloseFn).start('localhost', 3456, server => {
          console.log('server started');
          server.stop(() => {
            console.log('server stopped');
          });
        });

1. Added **npm test** `module.test.js`

## [0.2.1] - 2017-02-25
### [0.2.1]
1. Renamed project to **aso-server**

### [0.2.0]
1. Made configurable host and ports
1. Added help: `node server /?` or `node server --help` or `node server -h`
1. Made npm compatible - can be launched with `npm start`
1. Added CHANGELOG.md (this file!)
1. Improved [README.md](README.md)

## [0.1.0] - 2017-02-25
1. Initial "standalone" version
1. Provides the following URLs:
 - http://localhost:3000/f
 - http://localhost:3000/f.
 - http://localhost:3000/f/path/to/relative/file
 - http://localhost:3000/f//path/to/absolute/file
