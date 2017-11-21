'use strict';

const express = require('express');

const constants = require('./constants'),
      imageMap = require('./imageMap'),
      indexPage = require('./page/index'),
      shapesPage = require('./page/shapes'),
      maskingPage = require('./page/masking'),
      containerHousePage = require('./page/containerHouse'),
      timberFramedHousePage = require('./page/timberFramedHouse');

const { IMAGE_MAP_PATH, INDEX_PAGE_PATH, SHAPES_PAGE_PATH, MASKING_PAGE_PATH, CONTAINER_HOUSE_PAGE_PATH, TIMBER_FRAMED_HOUSE_PAGE_PATH } = constants;

class routes {
  static router() {
    const router = express.Router();

    router.get(IMAGE_MAP_PATH, function(request, response, next) {
      response.writeHead(200, {'Content-Type': 'image/png; charset=utf-8'});

      imageMap.respond(response);
    });

    router.get(INDEX_PAGE_PATH, function(request, response, next) {
      const html = indexPage.html();

      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

      response.end(html);
    });

    router.get(SHAPES_PAGE_PATH, function(request, response, next) {
      const html = shapesPage.html();

      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

      response.end(html);
    });

    router.get(MASKING_PAGE_PATH, function(request, response, next) {
      const html = maskingPage.html();

      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

      response.end(html);
    });

    router.get(CONTAINER_HOUSE_PAGE_PATH, function(request, response, next) {
      const html = containerHousePage.html();

      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

      response.end(html);
    });

    router.get(TIMBER_FRAMED_HOUSE_PAGE_PATH, function(request, response, next) {
      const html = timberFramedHousePage.html();

      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

      response.end(html);
    });

    return router;
  }
}

module.exports = routes;
