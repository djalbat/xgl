'use strict';

const express = require('express'),
      necessary = require('necessary');

const routes = require('./routes');

const { miscellaneousUtilities } = necessary,
      { onETX, rc } = miscellaneousUtilities,
      { setRCBaseExtension } = rc,
      { argv, exit } = process;

setRCBaseExtension('jiggle');

onETX(exit);

rc(argv);

createServer();

function createServer() {
  const server = express(), ///
        router = routes.router(),
        { port, publicDirectoryPath } = rc;

  server.use(router);

  server.use(express.static(publicDirectoryPath));

  server.listen(port);
}
