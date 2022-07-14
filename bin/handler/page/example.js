"use strict";

const { headers, statusCodes, contentTypes, templateUtilities } = require("necessary");

const { imageMapJSON } = require("xgl-server"),
      { IMAGE_MAP_PATH } = require("../../paths"),
      { HOST,
        TWO_SPACES,
        OVERLAY_IMAGE_SIZE,
        IMAGE_DIRECTORY_URI,
        IMAGE_DIRECTORY_PATH,
        EXAMPLE_PAGE_FILE_NAME } = require("../../constants");

const { parseFile } = templateUtilities,
      { OK_200_STATUS_CODE } = statusCodes,
      { CONTENT_TYPE_HEADER } = headers,
      { TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE } = contentTypes;

function examplePageHandler(request, response) {
  const names = [],
        overlayImageSize = OVERLAY_IMAGE_SIZE,
        imageDirectoryURI = IMAGE_DIRECTORY_URI,
        imageDirectoryPath = IMAGE_DIRECTORY_PATH,
        examplePageFileName = EXAMPLE_PAGE_FILE_NAME;

  imageMapJSON(names, imageDirectoryPath, overlayImageSize, (imageMapJSON) => {
    const imageNames = JSON.stringify(Object.keys(imageMapJSON));

    imageMapJSON = JSON.stringify(imageMapJSON, null, TWO_SPACES);

    const host = HOST,
          imageMapURI = IMAGE_MAP_PATH,
          filePath = examplePageFileName,
          args = {
            host,
            imageNames,
            imageMapURI,
            imageMapJSON,
            imageDirectoryURI
          },
          html = parseFile(filePath, args),
          headers = {},
          statusCode = OK_200_STATUS_CODE,
          contentType = TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;

    headers[CONTENT_TYPE_HEADER] = contentType;

    response.writeHead(statusCode, headers);

    response.end(html);
  });
}

module.exports = examplePageHandler;
