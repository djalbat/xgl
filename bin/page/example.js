'use strict';

const necessary = require('necessary');

const imageMap = require('../imageMap'),
      constants = require('../constants');

const { templateUtilities, miscellaneousUtilities } = necessary,
      { parseFile } = templateUtilities,
      { rc } = miscellaneousUtilities,
      { EXAMPLE_PAGE_FILE_PATH } = constants;

function html(example) {
  const { templateDirectoryPath } = rc,
        imageMapJSON = JSON.stringify(imageMap.json(), null, '\t'), ///
        filePath = `${templateDirectoryPath}${EXAMPLE_PAGE_FILE_PATH}`,
        args = {
          example: example,
          imageMapJSON: imageMapJSON
        },
        html = parseFile(filePath, args);

  return html;
}

module.exports = {
  html: html
};
