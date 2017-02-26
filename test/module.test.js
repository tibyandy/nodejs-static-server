const DEBUG = false;

const expect = require('chai').expect;
const debug = DEBUG ? e => console.log('    -', e) : () => {};

describe('module.test.js', () => {
  if (DEBUG) {
    beforeEach(function () {
      console.log('\n[TEST START]', this.currentTest.title);
    });
  }

  const asoServer = require('../server');
  const http = require('http');

  it('start server, request and receive data, shutdown server', done => {
    let data = '';
    const onServerStart = () => {
      debug('server started');
      http.get({ hostname: 'localhost', port: 54321, path: '/f/LICENSE', agent: false }, onRequestDone);
    };
    const onRequestDone = (r) => {
      debug('connection stablished');
      r.on('data', d => data += d).on('end', onRequestEnd)
    };
    const onRequestEnd = (d) => {
      data = data.split('\n')[0];
      debug(`data received: ${data}`);
      expect(data).to.equal('MIT License', 'Received content from /f/LICENSE does not match');
      server.stop();
    };
    const onServerStop = () => {
      debug('server stopped');
      done();
    };

    const server = asoServer.start('localhost', 54321, onServerStart).onStop(onServerStop);
  })

  const failTest = (done, expectedError, host, port) => {
    const onServerStart = () => {
      done(new Error('Should not be able to start server'));
    };
    const onServerError = (r) => {
      debug('server error');
      expect(r.code).to.equal(expectedError, 'Error code does not match');
      done();
    };
    const onServerStop = () => {
      done(new Error('Should not reach stop when error on start'));
    };

    const server = asoServer.onError(onServerError).onStop(onServerStop).start(host, port, onServerStart);
  };

  it('start server on invalid port', done => {
    failTest(done, 'EACCES', 'localhost', 1);
  });

  it('start server on port out of range', done => {
    failTest(done, undefined, 'localhost', 98765);
  });

  it('start server on invalid host', done => {
    failTest(done, 'ENOTFOUND', 'invalid host name', 8080);
  });

});



