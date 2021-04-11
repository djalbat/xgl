"use strict";

const express = require("express");

const { configurationUtilities } = require("necessary");

const staticRouter = require("./router/static"),
      defaultRouter = require("./router/default");

const { rc } = configurationUtilities;

rc(process.argv);

const { port } = rc,
      server = express(); ///

server.use(staticRouter);

server.use(defaultRouter);

server.listen(port);
