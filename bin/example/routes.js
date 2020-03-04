'use strict';

const xglServer = require('xgl-server'),
      necessary = require('necessary');

const constants = require('./constants'),
      liveReloadSnippet = require('./liveReloadSnippet');

const { templateUtilities, miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { parseFile } = templateUtilities,
      { imageMapPNG, imageMapJSON } = xglServer,
      { IMAGE_MAP_URI, OVERLAY_IMAGE_SIZE, INDEX_PAGE_FILE_NAME, EXAMPLE_PAGE_FILE_NAME } = constants;

function imageMap(request, response) {
  const { imageDirectoryPath } = rc,
        names = [],
        overlayImageSize = OVERLAY_IMAGE_SIZE;

  imageMapPNG(names, imageDirectoryPath, overlayImageSize, response);
}

function indexPage(request, response) {
  const { templateDirectoryPath } = rc,
        indexPageFileName = INDEX_PAGE_FILE_NAME,
        filePath = `${templateDirectoryPath}/${indexPageFileName}`, ///
        args = {},
        html = parseFile(filePath, args);

  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

  response.end(html);
}

function examplePage(request, response) {
  const { imageDirectoryURI, imageDirectoryPath, templateDirectoryPath } = rc,
        names = [],
        overlayImageSize = OVERLAY_IMAGE_SIZE,
        examplePageFileName = EXAMPLE_PAGE_FILE_NAME;

  imageMapJSON(names, imageDirectoryPath, overlayImageSize, function (imageMapJSON) {
    const imageNames = JSON.stringify(Object.keys(imageMapJSON)); ///

    imageMapJSON = JSON.stringify(imageMapJSON, null, '\t'); ///

    const imageMapURI = IMAGE_MAP_URI,  ///
          filePath = `${templateDirectoryPath}/${examplePageFileName}`, ///
          args = {
            imageNames,
            imageMapURI,
            imageMapJSON,
            imageDirectoryURI,
            liveReloadSnippet
          },
          html = parseFile(filePath, args);

    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    response.end(html);
  });
}

module.exports = {
  imageMap,
  indexPage,
  examplePage
};
