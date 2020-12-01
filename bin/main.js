"use strict";

const express = require("express"),
      necessary = require("necessary");

const staticRouter = require("./router/static"),
      defaultRouter = require("./router/default");

const { miscellaneousUtilities } = necessary,
      { onETX, rc } = miscellaneousUtilities;

rc(process.argv);

const { port } = rc,
      server = express(); ///

server.use(staticRouter);

server.use(defaultRouter);

server.listen(port);

onETX(process.exit);
