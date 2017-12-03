'use strict';

const express = require('express');

const constants = require('./constants'),
      imageMap = require('./imageMap'),
      indexPage = require('./page/index'),
      defaultPage = require('./page/default');

const { IMAGE_MAP_URL_PATH, 
        INDEX_PAGE_URL_PATH, 
        SHAPES_PAGE_URL_PATH,
        SHAPES_PAGE_FILE_NAME,
        MASKING_PAGE_URL_PATH,
        MASKING_PAGE_FILE_NAME,
        CONTAINER_HOUSE_PAGE_URL_PATH, 
        CONTAINER_HOUSE_PAGE_FILE_NAME,
        TIMBER_FRAMED_HOUSE_PAGE_URL_PATH,
        TIMBER_FRAMED_HOUSE_PAGE_FILE_NAME } = constants;

class routes {
  static router() {
    const router = express.Router();

    router.get(IMAGE_MAP_URL_PATH, function(request, response, next) {
      response.writeHead(200, {'Content-Type': 'image/png; charset=utf-8'});

      imageMap.respond(response);
    });

    router.get(INDEX_PAGE_URL_PATH, function(request, response, next) {
      const html = indexPage.html();

      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

      response.end(html);
    });

    router.get(SHAPES_PAGE_URL_PATH, function(request, response, next) {
      const html = defaultPage.html(SHAPES_PAGE_FILE_NAME);

      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

      response.end(html);
    });

    router.get(MASKING_PAGE_URL_PATH, function(request, response, next) {
      const html = defaultPage.html(MASKING_PAGE_FILE_NAME);

      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

      response.end(html);
    });

    router.get(CONTAINER_HOUSE_PAGE_URL_PATH, function(request, response, next) {
      const html = defaultPage.html(CONTAINER_HOUSE_PAGE_FILE_NAME);

      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

      response.end(html);
    });

    router.get(TIMBER_FRAMED_HOUSE_PAGE_URL_PATH, function(request, response, next) {
      const html = defaultPage.html(TIMBER_FRAMED_HOUSE_PAGE_FILE_NAME);

      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

      response.end(html);
    });

    return router;
  }
}

module.exports = routes;
