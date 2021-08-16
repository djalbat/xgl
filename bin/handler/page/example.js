"use strict";

const { templateUtilities } = require("necessary");

const { imageMapJSON } = require("xgl-server"),
      { IMAGE_MAP_PATH } = require("../../paths"),
      { OK_200_STATUS_CODE } = require("../../statusCodes"),
      { TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE } = require("../../contentTypes"),
      { TWO_SPACES,
        CONTENT_TYPE,
        OVERLAY_IMAGE_SIZE,
        IMAGE_DIRECTORY_URI,
        IMAGE_DIRECTORY_PATH,
        EXAMPLE_PAGE_FILE_NAME } = require("../../constants");

const { parseFile } = templateUtilities;

function examplePageHandler(request, response) {
  const names = [],
        overlayImageSize = OVERLAY_IMAGE_SIZE,
        imageDirectoryURI = IMAGE_DIRECTORY_URI,
        imageDirectoryPath = IMAGE_DIRECTORY_PATH,
        examplePageFileName = EXAMPLE_PAGE_FILE_NAME;

  imageMapJSON(names, imageDirectoryPath, overlayImageSize, (imageMapJSON) => {
    const imageNames = JSON.stringify(Object.keys(imageMapJSON));

    imageMapJSON = JSON.stringify(imageMapJSON, null, TWO_SPACES);

    const imageMapURI = IMAGE_MAP_PATH,
          filePath = examplePageFileName,
          args = {
            imageNames,
            imageMapURI,
            imageMapJSON,
            imageDirectoryURI
          },
          html = parseFile(filePath, args),
          headers = {},
          statusCode = OK_200_STATUS_CODE,
          contentType = TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;

    headers[CONTENT_TYPE] = contentType;

    response.writeHead(statusCode, headers);

    response.end(html);
  });
}

module.exports = examplePageHandler;
