'use strict';

const template = require('../template'),
      imageMap = require('../imageMap'),
      runtimeConfiguration = require('../runtimeConfiguration');

class examplePage {
  static html(example) {
    const imageMapJSON = JSON.stringify(imageMap.json(), null, '\t'), ///
          publicDirectoryPath = runtimeConfiguration.getPublicDirectoryPath(),
          filePath = `${publicDirectoryPath}/example.html`,
          args = {
            example: example,
            imageMapJSON: imageMapJSON
          },
          html = template.parseFile(filePath, args);

    return html;
  }
}

module.exports = examplePage;
