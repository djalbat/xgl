"use strict";

const { templateUtilities } = require("necessary");

const { OK_200_STATUS_CODE } = require("../../statusCodes"),
      { CONTENT_TYPE, INDEX_PAGE_FILE_NAME } = require("../../constants"),
      { TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE } = require("../../contentTypes");

const { parseFile } = templateUtilities;

function indexPageHandler(request, response) {
  const indexPageFileName = INDEX_PAGE_FILE_NAME, ///
        filePath = indexPageFileName, ///
        args = {},
        html = parseFile(filePath, args),
        headers = {},
        statusCode = OK_200_STATUS_CODE,
        contentType = TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;

  headers[CONTENT_TYPE] = contentType;

  response.writeHead(statusCode, headers);

  response.end(html);
}

module.exports = indexPageHandler;
