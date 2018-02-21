'use strict';

require('./lib/jiggle');

module.exports = {
  Canvas: require('./lib/canvas'),
  Part: require('./lib/element/part'),
  Scene: require('./lib/element/scene'),
  Camera: require('./lib/element/camera'),
  CanvasElement: require('./lib/element/canvas'),
  ColouredCanvasElement: require('./lib/element/canvas/coloured'),
  TexturedCanvasElement: require('./lib/element/canvas/textured'),
  imageMapUtilities: require('./lib/utilities/imageMap')
};
