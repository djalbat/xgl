'use strict';

const express = require('express');

const server = express();

server.use(express.static('examples'));

server.listen(8000);

