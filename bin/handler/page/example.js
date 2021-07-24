"use strict";

const { templateUtilities } = require("necessary");

const { imageMapJSON } = require("xgl-server"),
      { IMAGE_MAP_PATH } = require("../../paths"),
      { OVERLAY_IMAGE_SIZE,
        IMAGE_DIRECTORY_URI,
        IMAGE_DIRECTORY_PATH,
        EXAMPLE_PAGE_FILE_NAME,
        TEXT_HTML_CHARSET_UTF8_CONTENT_TYPE } = require("../../constants");

const { parseFile } = templateUtilities;

function examplePageHandler(request, response) {
  const names = [],
        overlayImageSize = OVERLAY_IMAGE_SIZE,  ///
        imageDirectoryURI = IMAGE_DIRECTORY_URI, ///
        imageDirectoryPath = IMAGE_DIRECTORY_PATH,  ///
        examplePageFileName = EXAMPLE_PAGE_FILE_NAME;  ///

  imageMapJSON(names, imageDirectoryPath, overlayImageSize, (imageMapJSON) => {
    const imageNames = JSON.stringify(Object.keys(imageMapJSON)); ///

    imageMapJSON = JSON.stringify(imageMapJSON, null, "  "); ///

    const imageMapURI = IMAGE_MAP_PATH,  ///
          filePath = examplePageFileName, ///
          args = {
            imageNames,
            imageMapURI,
            imageMapJSON,
            imageDirectoryURI
          },
          html = parseFile(filePath, args),
          contentType = TEXT_HTML_CHARSET_UTF8_CONTENT_TYPE;

    response.writeHead(200, { "Content-Type": contentType });

    response.end(html);
  });
}

module.exports = examplePageHandler;
