'use strict';

const necessary = require('necessary');

const constants = require('../constants');

const { templateUtilities, miscellaneousUtilities } = necessary,
      { parseFile } = templateUtilities,
      { rc } = miscellaneousUtilities,
      { INDEX_PAGE_FILE_PATH } = constants;

function html() {
  const { templateDirectoryPath } = rc,
        filePath = `${templateDirectoryPath}${INDEX_PAGE_FILE_PATH}`,
        args = {},
        html = parseFile(filePath, args);

  return html;
}

module.exports = {
  html: html
};
