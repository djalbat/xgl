"use strict";

const { headers, statusCodes, contentTypes, templateUtilities } = require("necessary");

const { INDEX_PAGE_FILE_NAME } = require("../../constants");

const { parseFile } = templateUtilities,
      { OK_200_STATUS_CODE } = statusCodes,
      { CONTENT_TYPE_HEADERS } = headers,
      { TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE } = contentTypes;

function indexPageHandler(request, response) {
  const indexPageFileName = INDEX_PAGE_FILE_NAME, ///
        filePath = indexPageFileName, ///
        args = {},
        html = parseFile(filePath, args),
        headers = {},
        statusCode = OK_200_STATUS_CODE,
        contentType = TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;

  headers[CONTENT_TYPE_HEADERS] = contentType;

  response.writeHead(statusCode, headers);

  response.end(html);
}

module.exports = indexPageHandler;
