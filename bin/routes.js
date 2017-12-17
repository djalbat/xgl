'use strict';

const express = require('express'),
      necessary = require('necessary');

const constants = require('./constants'),
      imageMap = require('./imageMap'),
      examplePage = require('./page/example'),
      examplesPage = require('./page/examples');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { IMAGE_MAP_URL_PATH,
        EXAMPLE_PAGE_URL_PATH,
        EXAMPLES_PAGE_URL_PATH } = constants;

class routes {
  static router() {
    const router = express.Router();

    router.get(IMAGE_MAP_URL_PATH, function(request, response, next) {
      response.writeHead(200, {'Content-Type': 'image/png; charset=utf-8'});

      imageMap.respond(response);
    });

    router.get(EXAMPLE_PAGE_URL_PATH, function(request, response, next) {
      const { query } = request,
            keys = Object.keys(query),
            firstKey = first(keys),
            example = firstKey, ///
            html = examplePage.html(example);

      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

      response.end(html);
    });

    router.get(EXAMPLES_PAGE_URL_PATH, function(request, response, next) {
      const html = examplesPage.html();

      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

      response.end(html);
    });

    return router;
  }
}

module.exports = routes;
