'use strict';

const express = require('express'),
      necessary = require('necessary');

const constants = require('./constants'),
      indexPage = require('./page/index'),
      examplePage = require('./page/example'),
      imageMap = require('./imageMap');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { INDEX_PAGE_URI, EXAMPLE_PAGE_URI, IMAGE_MAP_URI } = constants;

function createRouter() {
  const router = express.Router();

  router.get(INDEX_PAGE_URI, function(request, response, next) {
    const html = indexPage.html();

    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    response.end(html);
  });

  router.get(EXAMPLE_PAGE_URI, function(request, response, next) {
    const { query } = request,
          keys = Object.keys(query),
          firstKey = first(keys),
          example = firstKey, ///
          html = examplePage.html(example);

    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    response.end(html);
  });

  router.get(IMAGE_MAP_URI, function(request, response, next) {
    response.writeHead(200, {'Content-Type': 'image/png; charset=utf-8'});

    imageMap.respond(response);
  });

  return router;
}

module.exports = {
  createRouter: createRouter
};
