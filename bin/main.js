'use strict';

const express = require('express'),
      necessary = require('necessary');

const routes = require('./routes'),
			constants = require('./constants');

const { miscellaneousUtilities } = necessary,
      { onETX, rc } = miscellaneousUtilities,
			{ argv, exit } = process,
			{ imageMap, indexPage, examplePage } = routes,
			{ IMAGE_MAP_URI, INDEX_PAGE_URI, EXAMPLE_PAGE_URI } = constants;

rc(argv);

const { port, publicDirectoryPath } = rc,
      server = express(), ///
      staticRouter = express.static(publicDirectoryPath),
      defaultRouter = express.Router();

defaultRouter.get(IMAGE_MAP_URI, imageMap);

defaultRouter.get(INDEX_PAGE_URI, indexPage);

defaultRouter.get(EXAMPLE_PAGE_URI, examplePage);

server.use(defaultRouter);

server.use(staticRouter);

server.listen(port);

onETX(exit);
