'use strict';

const sharp = require('sharp'),
      necessary = require('necessary');

const constants = require('./constants'),
      runtimeConfiguration = require('./runtimeConfiguration');

const { fileSystemUtilities, asynchronousUtilities } = necessary,
      { readDirectory } = fileSystemUtilities,
      { whilst } = asynchronousUtilities,
      { IMAGE_SIZE } = constants;

const imageDirectoryPath = runtimeConfiguration.getImageDirectoryPath(),
      paths = readDirectory(imageDirectoryPath),
      pathsLength = paths.length,
      size = Math.ceil(Math.sqrt(pathsLength)); ///

class imageMap {
  static respond(response) {
    createImageMap(size, function(buffer) {
      const context = {
        size: size,
        paths: paths,
        buffer: buffer
      };
      
      whilst(overlayWithImageCallback, function() {
        const { buffer } = context;

        sharp(buffer).pipe(response);
      }, context);
    });
  }
  
  static json() {
    const json = paths.reduce(function(json, path, index) {
            const top = (index / size) / size,
                  left = (index % size) / size;
            
            json[path] = {
              top: top,
              left: left
            };
            
            return json;
          }, {});    
    
    return json;
  }
}

module.exports = imageMap;

function createImageMap(size, callback) {
  const width = IMAGE_SIZE * size,  ///
        height = IMAGE_SIZE * size, ///
        channels = 4,
        background = { r: 255, g: 255, b: 255, alpha: 0 },
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

function overlayWithImageCallback(next, done, context, index) {
  const { size, paths, buffer } = context,
        pathsLength = paths.length,
        lastIndex = pathsLength - 1;

  if (index > lastIndex) {
    done();
    
    return;
  }
  
  const path = paths[index],
        absolutePath = `${imageDirectoryPath}/${path}`;

  resizeImage(absolutePath, function(resizedImageBuffer) {
    const top = Math.floor(index / size) * IMAGE_SIZE,
          left = (index % size) * IMAGE_SIZE,
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

function resizeImage(absolutePath, callback) {
  const width = IMAGE_SIZE, ///
        height = IMAGE_SIZE;  ///
  
  sharp(absolutePath)
    .resize(width, height)
    .toBuffer()
    .then(function(buffer) {
      const resizedImageBuffer = buffer; ///
      
      callback(resizedImageBuffer);
    });
}
