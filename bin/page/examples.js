'use strict';

const template = require('../template'),
      runtimeConfiguration = require('../runtimeConfiguration');

function html() {
  const templateDirectoryPath = runtimeConfiguration.getPublicDirectoryPath(),
        filePath = `${templateDirectoryPath}/examples.html`,
        args = {},
        html = template.parseFile(filePath, args);

  return html;
}

module.exports = {
  html: html
};
