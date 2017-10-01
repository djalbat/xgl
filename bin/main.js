'use strict';

const express = require('express');

const escape = require('./escape'),
      routes = require('./routes'),
      runtimeConfiguration = require('./runtimeConfiguration');

escape();

createServer();

function createServer() {
  const server = express(), ///
        port = runtimeConfiguration.getPort(),
        publicDirectoryPath = runtimeConfiguration.getPublicDirectoryPath(),
        router = routes.router();

  server.use(router);

  server.use(express.static(publicDirectoryPath));

  server.listen(port);
}
