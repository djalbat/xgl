"use strict";

const lively = require("lively-cli"), ///
      express = require("express");

const routes = require("../routes"),
      constants = require("../constants");

const { createReloadHandler } = lively,
      { imageMap, indexPage, examplePage } = routes,
      { RELOAD_PATH, WATCH_PATTERN, IMAGE_MAP_URI, INDEX_PAGE_URI, EXAMPLE_PAGE_URI } = constants;

const defaultRouter = express.Router(),
      reloadHandler = createReloadHandler(WATCH_PATTERN);

defaultRouter.get(RELOAD_PATH, reloadHandler);

defaultRouter.get(IMAGE_MAP_URI, imageMap);

defaultRouter.get(INDEX_PAGE_URI, indexPage);

defaultRouter.get(EXAMPLE_PAGE_URI, examplePage);

module.exports = defaultRouter;
