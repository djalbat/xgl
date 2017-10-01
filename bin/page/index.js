'use strict';

const template = require('../template'),
      runtimeConfiguration = require('../runtimeConfiguration');

class indexPage {
  static html() {
    const host = runtimeConfiguration.getHost(),
          publicDirectoryPath = runtimeConfiguration.getPublicDirectoryPath(),
          filePath = `${publicDirectoryPath}/index.html`,
          args = {
            host: host
          },
          html = template.parseFile(filePath, args);

    return html;
  }
}

module.exports = indexPage;
