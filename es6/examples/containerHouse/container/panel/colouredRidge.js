'use strict';

const ColouredCanvasElement = require('../../../../element/canvas/coloured');

class ColouredRidge extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { colour = defaultColour } = properties,
          colouredRidge = ColouredCanvasElement.fromProperties(ColouredRidge, properties, vertices, indexes, colour);
    
    return colouredRidge;
  }
}

module.exports = ColouredRidge;

const vertices = [

      [ 0.0, 0.0, 0.0 ],
      [ 0.1, 0.0, 0.0 ],
      [ 0.3, 0.0, 1.0 ],
      [ 0.7, 0.0, 1.0 ],
      [ 0.9, 0.0, 0.0 ],
      [ 1.0, 0.0, 0.0 ],

      [ 0.0, 1.0, 0.0 ],
      [ 0.1, 1.0, 0.0 ],
      [ 0.3, 1.0, 1.0 ],
      [ 0.7, 1.0, 1.0 ],
      [ 0.9, 1.0, 0.0 ],
      [ 1.0, 1.0, 0.0 ],

    ],
    indexes = [

      [  0,  1,  6 ],
      [  7,  6,  1 ],

      [  1,  2,  7 ],
      [  8,  7,  2 ],

      [  2,  3,  8 ],
      [  9,  8,  3 ],

      [  3,  4,  9 ],
      [ 10,  9,  4 ],

      [  4,  5, 10 ],
      [ 11, 10,  4 ],

    ],
    defaultColour = [ 0.75, 0.75, 0.75, 1 ];
