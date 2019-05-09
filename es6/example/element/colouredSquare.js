'use strict';

const jiggle = require('../../../index');

const { ColouredCanvasElement } = jiggle;

const coordinates = [

        [ 0, 0, 0 ],
        [ 1, 0, 0 ],
        [ 1, 1, 0 ],
        [ 0, 1, 0 ],

      ],
      indexes = [

        [ 0, 1, 2 ],
        [ 2, 3, 0 ],

      ],
      colour = [ 1, 0, 0, 1 ];

class ColouredSquare extends ColouredCanvasElement {
  static fromProperties(properties) { return ColouredCanvasElement.fromProperties(ColouredSquare, properties, coordinates, indexes, colour); }
}

module.exports = ColouredSquare;
