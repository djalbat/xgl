"use strict";

const express = require("express");

const { STATIC_DIRECTORY_PATH } = require("../constants");

const staticRouter = express.static(STATIC_DIRECTORY_PATH);

module.exports = staticRouter;
