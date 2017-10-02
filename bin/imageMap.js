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
      names = readDirectory(imageDirectoryPath),
      namesLength = names.length,
      size = Math.ceil(Math.sqrt(namesLength)); ///

class imageMap {
  static respond(response) {
    createImageMap(function(buffer) {
      const context = {
        names: names,
        buffer: buffer
      };
      
      whilst(overlayWithImageCallback, function() {
        const { buffer } = context;

        sharp(buffer).pipe(response);
      }, context);
    });
  }
  
  static json() {
    const width = IMAGE_SIZE * size,  ///
          height = IMAGE_SIZE * size, ///
          json = names.reduce(function(json, name, index) {
            let top = Math.floor(index / size) / size,
                left = (index % size) / size,
                right = left + (1 / size),
                bottom = top + (1 / size);

            top = top * height;
            left = left * width;
            right = right * width;
            bottom = bottom * height;

            top = top + 8;
            left = left + 8;
            right = right - 8;
            bottom = bottom - 8;

            top = top / height;
            left = left / width;
            right = right / width;
            bottom = bottom / height;

            const coordinates = [
                    [left, top],
                    [right, top],
                    [right, bottom],
                    [left, bottom]
                  ];
            
            json[name] = coordinates;
            
            return json;
          }, {});    
    
    return json;
  }
}

module.exports = imageMap;

function createImageMap(callback) {
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
