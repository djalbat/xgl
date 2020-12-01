"use strict";

const express = require("express");

const constants = require("../constants");

const { PUBLIC_DIRECTORY_PATH } = constants;

const staticRouter = express.static(PUBLIC_DIRECTORY_PATH);

module.exports = staticRouter;
