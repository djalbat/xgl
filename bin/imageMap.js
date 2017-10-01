'use strict';

const sharp = require('sharp'),
      necessary = require('necessary');

const runtimeConfiguration = require('./runtimeConfiguration');

const { asynchronousUtilities } = necessary,
      { whilst } = asynchronousUtilities;

const imageDirectoryPath = runtimeConfiguration.getImageDirectoryPath(),
      grassImagePath = `${imageDirectoryPath}/grass.jpg`,
      concreteImagePath = `${imageDirectoryPath}/concrete.jpg`,
      paths = [
        grassImagePath,
        concreteImagePath
      ];

class imageMap {
  static respond(response) {
    createImageMap(function(buffer) {
      const context = {
        paths: paths,
        buffer: buffer
      };

      whilst(overlayImageCallback, function() {
        const { buffer } = context;

        sharp(buffer).pipe(response);
      }, context);
    });
  }
}

module.exports = imageMap;

function createImageMap(callback) {
  const width = 512,
        height = 512,
        channels = 4,
        background = { r: 255, g: 255, b: 255, alpha: 255 },
        options = {
          width: width,
          height: height,
          channels: channels,
          background: background
          };

  sharp({
    create: options ///
  })
  .png()
  .toBuffer()
  .then(callback);
}

function overlayImageCallback(next, done, context, index) {
  const { buffer, paths } = context,
        pathsLength = paths.length,
        lastIndex = pathsLength - 1;

  if (index > lastIndex) {
    done();

    return;
  }

  const top = 0,
        left = index * 256, ///
        options = {
          top: top,
          left: left
        },
        path = paths[index];

  sharp(buffer)
  .overlayWith(path, options)
  .toBuffer()
  .then(function(buffer) {
    context.buffer = buffer;  ///

    next();
  });
}
