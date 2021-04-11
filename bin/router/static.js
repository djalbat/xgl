"use strict";

const express = require("express");

const { PUBLIC_DIRECTORY_PATH } = require("../constants");

const staticRouter = express.static(PUBLIC_DIRECTORY_PATH);

module.exports = staticRouter;
