'use strict';

const template = require('../template'),
      runtimeConfiguration = require('../runtimeConfiguration');

class facetsPage {
  static html() {
    const publicDirectoryPath = runtimeConfiguration.getPublicDirectoryPath(),
          filePath = `${publicDirectoryPath}/facets.html`,
          args = {},
          html = template.parseFile(filePath, args);

    return html;
  }
}

module.exports = facetsPage;
