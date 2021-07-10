"use strict";

const express = require("express");

const { createLiveReloadHandler } = require("lively-cli");

const { WATCH_PATTERN } = require("../constants"),
      { imageMapHandler, indexPageHandler, examplePageHandler } = require("../handlers"),
      { LIVE_RELOAD_PATH, IMAGE_MAP_PATH, INDEX_PAGE_PATH, EXAMPLE_PAGE_PATH } = require("../paths");

const defaultRouter = express.Router(),
      liveReloadHandler = createLiveReloadHandler(WATCH_PATTERN);

defaultRouter.get(LIVE_RELOAD_PATH, liveReloadHandler);

defaultRouter.get(IMAGE_MAP_PATH, imageMapHandler);

defaultRouter.get(INDEX_PAGE_PATH, indexPageHandler);

defaultRouter.get(EXAMPLE_PAGE_PATH, examplePageHandler);

module.exports = defaultRouter;
