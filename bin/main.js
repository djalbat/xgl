"use strict";

const express = require("express");

const staticRouter = require("./router/static"),
      defaultRouter = require("./router/default");

const server = express(); ///

server.use(staticRouter);

server.use(defaultRouter);

server.listen(8888);
