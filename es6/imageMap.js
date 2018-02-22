'use strict';

const sharp = require('sharp'),
      necessary = require('necessary');

const { fileSystemUtilities, asynchronousUtilities, miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { whilst } = asynchronousUtilities,
      { readDirectory } = fileSystemUtilities;

function png(imageDirectoryPath, overlayImageSize, response) {
  const names = readDirectory(imageDirectoryPath),
        dimension = dimensionFromNames(names);

  createImageMap(dimension, overlayImageSize, function(buffer) {
    const context = {
      buffer: buffer,
      names: names,
      dimension: dimension,
      overlayImageSize: overlayImageSize,
      imageDirectoryPath: imageDirectoryPath
    };
    
    whilst(overlayCallback, function() {
      response.writeHead(200, {'Content-Type': 'image/png; charset=utf-8'});

      const { buffer } = context;

      sharp(buffer).pipe(response);
    }, context);
  });
}

function json(imageDirectoryPath) {
  const names = readDirectory(imageDirectoryPath),
        dimension = dimensionFromNames(names),
        json = names.reduce(function(json, name, index) {
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

module.exports = {
  respond: respond,
  json: json
};

function createImageMap(dimension, overlayImageSize,  callback) {
  const width = dimension * overlayImageSize,
        height = dimension * overlayImageSize,
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
    .then(function(buffer) {
      callback(buffer)
    });
}

function overlayCallback(next, done, context, index) {
  const { names, buffer, dimension, overlayImageSize, imageDirectoryPath } = context,
        namesLength = names.length,
        lastIndex = namesLength - 1;

  if (index > lastIndex) {
    done();
    
    return;
  }
  
  const name = names[index],
        path = `${imageDirectoryPath}/${name}`;

  resizeImage(path, overlayImageSize, function(resizedImageBuffer) {
    const top = ((dimension - 1) - Math.floor(index / dimension) ) * overlayImageSize,
          left = (index % dimension) * overlayImageSize,
          options = {
            top: top,
            left: left
          };

    sharp(buffer)
      .overlayWith(resizedImageBuffer, options)
      .toBuffer()
      .then(function(buffer) {
        Object.assign(context, {
          buffer: buffer
        });

        next();
      });
  });
}

function resizeImage(path, overlayImageSize, callback) {
  const width = overlayImageSize, ///
        height = overlayImageSize;  ///
  
  sharp(path)
    .resize(width, height)
    .toBuffer()
    .then(function(buffer) {
      const resizedImageBuffer = buffer; ///
      
      callback(resizedImageBuffer);
    });
}

function dimensionFromNames(names) {
  const namesLength = names.length,
        dimension = Math.ceil(Math.sqrt(namesLength)); ///

  return dimension;
}
