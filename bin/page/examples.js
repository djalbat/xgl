'use strict';

const template = require('../template'),
      runtimeConfiguration = require('../runtimeConfiguration');

class examplesPage {
  static html() {
    const publicDirectoryPath = runtimeConfiguration.getPublicDirectoryPath(),
          filePath = `${publicDirectoryPath}/examples.html`,
          args = {},
          html = template.parseFile(filePath, args);

    return html;
  }
}

module.exports = examplesPage;
