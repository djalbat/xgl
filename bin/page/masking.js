'use strict';

const template = require('../template'),
      runtimeConfiguration = require('../runtimeConfiguration');

class maskingPage {
  static html() {
    const publicDirectoryPath = runtimeConfiguration.getPublicDirectoryPath(),
          filePath = `${publicDirectoryPath}/masking.html`,
          args = {},
          html = template.parseFile(filePath, args);

    return html;
  }
}

module.exports = maskingPage;
