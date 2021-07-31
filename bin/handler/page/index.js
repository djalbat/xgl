"use strict";

const { templateUtilities } = require("necessary");

const { INDEX_PAGE_FILE_NAME, TEXT_HTML_CHARSET_UTF8_CONTENT_TYPE } = require("../../constants");

const { parseFile } = templateUtilities;

function indexPageHandler(request, response) {
  const indexPageFileName = INDEX_PAGE_FILE_NAME, ///
        filePath = indexPageFileName, ///
        args = {},
        html = parseFile(filePath, args),
        contentType = TEXT_HTML_CHARSET_UTF8_CONTENT_TYPE;

  response.writeHead(200, { "Content-Type": contentType });

  response.end(html);
}

module.exports = indexPageHandler;
