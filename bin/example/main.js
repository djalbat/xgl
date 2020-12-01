"use strict";

const lively = require("lively-cli"), ///
      express = require("express"),
      necessary = require("necessary");

const routes = require("./routes"),
      constants = require("./constants");

const { miscellaneousUtilities } = necessary,
      { onETX, rc } = miscellaneousUtilities,
      { createReloadHandler } = lively,
      { imageMap, indexPage, examplePage } = routes,
      { RELOAD_PATH, WATCH_PATTERN, IMAGE_MAP_URI, INDEX_PAGE_URI, EXAMPLE_PAGE_URI, PUBLIC_DIRECTORY_PATH } = constants;

rc(process.argv);

const { port } = rc,
      server = express(), ///
      staticRouter = express.static(PUBLIC_DIRECTORY_PATH),
      defaultRouter = express.Router(),
      reloadHandler = createReloadHandler(WATCH_PATTERN);

defaultRouter.get(RELOAD_PATH, reloadHandler);

defaultRouter.get(IMAGE_MAP_URI, imageMap);

defaultRouter.get(INDEX_PAGE_URI, indexPage);

defaultRouter.get(EXAMPLE_PAGE_URI, examplePage);

server.use(staticRouter);

server.use(defaultRouter);

server.listen(port);

onETX(process.exit);
