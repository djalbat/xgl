'use strict';

const sharp = require('sharp'),
      necessary = require('necessary');

const constants = require('./constants'),
      runtimeConfiguration = require('./runtimeConfiguration');

const { fileSystemUtilities, asynchronousUtilities } = necessary,
      { IMAGE_SIZE } = constants,
      { whilst } = asynchronousUtilities,
      { readDirectory } = fileSystemUtilities;

const imageDirectoryPath = runtimeConfiguration.getImageDirectoryPath(),
      names = readDirectory(imageDirectoryPath),
      namesLength = names.length,
      dimension = Math.ceil(Math.sqrt(namesLength)); ///

class imageMap {
  static respond(response) {
    createImageMap(function(buffer) {
      const context = {
        names: names,
        buffer: buffer
      };
      
      whilst(overlayCallback, function() {
        const { buffer } = context;

        sharp(buffer).pipe(response);
      }, context);
    });
  }
  
  static json() {
    const json = names.reduce(function(json, name, index) {
      const left = (index % dimension) / dimension,
            bottom = Math.floor(index / dimension) / dimension,
            width = 1 / dimension,
            height = 1 / dimension;

      json[name] = {
        left: left,
        bottom: bottom,
        width: width,
        height: height
      };

      return json;
    }, {});
    
    return json;
  }
}

module.exports = imageMap;

function createImageMap(callback) {
  const width = IMAGE_SIZE * dimension,  ///
        height = IMAGE_SIZE * dimension, ///
        channels = 4,
        background = { r: 0, g: 0, b: 0, alpha: 0 },
        options = {
          width: width,
          height: height,
          channels: channels,
          background: background
        },
        imageMap = sharp({
          create: options ///
        });

  imageMap
    .png()
    .toBuffer()
    .then(callback);
}

function overlayCallback(next, done, context, index) {
  const { names, buffer } = context,
        namesLength = names.length,
        lastIndex = namesLength - 1;

  if (index > lastIndex) {
    done();
    
    return;
  }
  
  const name = names[index],
        path = `${imageDirectoryPath}/${name}`;

  resizeImage(path, function(resizedImageBuffer) {
    const top = ((dimension - 1) - Math.floor(index / dimension) ) * IMAGE_SIZE,
          left = (index % dimension) * IMAGE_SIZE,
          options = {
            top: top,
            left: left
          };

    sharp(buffer)
      .overlayWith(resizedImageBuffer, options)
      .toBuffer()
      .then(function(buffer) {
        context.buffer = buffer;  ///

        next();
      });
  });
}

function resizeImage(path, callback) {
  const width = IMAGE_SIZE, ///
        height = IMAGE_SIZE;  ///
  
  sharp(path)
    .resize(width, height)
    .toBuffer()
    .then(function(buffer) {
      const resizedImageBuffer = buffer; ///
      
      callback(resizedImageBuffer);
    });
}
