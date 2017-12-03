'use strict';

const template = require('../template'),
      imageMap = require('../imageMap'),
      runtimeConfiguration = require('../runtimeConfiguration');

class indexPage {
  static html(fileName) {
    const host = runtimeConfiguration.getHost(),
          imageMapJSON = JSON.stringify(imageMap.json(), null, '\t'), ///
          publicDirectoryPath = runtimeConfiguration.getPublicDirectoryPath(),
          filePath = `${publicDirectoryPath}/${fileName}`,
          args = {
            host: host,
            imageMapJSON: imageMapJSON
          },
          html = template.parseFile(filePath, args);

    return html;
  }
}

module.exports = indexPage;
