"use strict";

const server = require("xgl-server"), ///
      necessary = require("necessary");

const constants = require("./constants"),
      liveReloadSnippet = require("./liveReloadSnippet");

const { templateUtilities } = necessary,
      { parseFile } = templateUtilities,
      { imageMapPNG, imageMapJSON } = server,
      { IMAGE_MAP_URI,
        OVERLAY_IMAGE_SIZE,
        INDEX_PAGE_FILE_NAME,
        EXAMPLE_PAGE_FILE_NAME,
        IMAGE_DIRECTORY_URI,
        IMAGE_DIRECTORY_PATH,
        TEMPLATE_DIRECTORY_PATH,
        TEXT_HTML_CHARSET_UTF8_CONTENT_TYPE } = constants;

function imageMap(request, response) {
  const names = [],
        overlayImageSize = OVERLAY_IMAGE_SIZE,
        imageDirectoryPath = IMAGE_DIRECTORY_PATH;

  imageMapPNG(names, imageDirectoryPath, overlayImageSize, response);
}

function indexPage(request, response) {
  const templateDirectoryPath = TEMPLATE_DIRECTORY_PATH,
        indexPageFileName = INDEX_PAGE_FILE_NAME,
        filePath = `${templateDirectoryPath}/${indexPageFileName}`, ///
        args = {},
        html = parseFile(filePath, args),
        contentType = TEXT_HTML_CHARSET_UTF8_CONTENT_TYPE;

  response.writeHead(200, { "Content-Type": contentType });

  response.end(html);
}

function examplePage(request, response) {
  const names = [],
        overlayImageSize = OVERLAY_IMAGE_SIZE,
        examplePageFileName = EXAMPLE_PAGE_FILE_NAME,
        imageDirectoryURI = IMAGE_DIRECTORY_URI,
        imageDirectoryPath = IMAGE_DIRECTORY_PATH,
        templateDirectoryPath = TEMPLATE_DIRECTORY_PATH;

  imageMapJSON(names, imageDirectoryPath, overlayImageSize, (imageMapJSON) => {
    const imageNames = JSON.stringify(Object.keys(imageMapJSON)); ///

    imageMapJSON = JSON.stringify(imageMapJSON, null, "  "); ///

    const imageMapURI = IMAGE_MAP_URI,  ///
          filePath = `${templateDirectoryPath}/${examplePageFileName}`, ///
          args = {
            imageNames,
            imageMapURI,
            imageMapJSON,
            imageDirectoryURI,
            liveReloadSnippet
          },
          html = parseFile(filePath, args),
          contentType = TEXT_HTML_CHARSET_UTF8_CONTENT_TYPE;

    response.writeHead(200, { "Content-Type": contentType });

    response.end(html);
  });
}

module.exports = {
  imageMap,
  indexPage,
  examplePage
};
