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
      defaultColour = [ 1, 0, 0 ];

class ColouredSquare extends ColouredCanvasElement {
  static fromProperties(properties) {
  	const { colour = defaultColour } = properties,
			    colouredSquare = ColouredCanvasElement.fromProperties(ColouredSquare, properties, coordinates, indexes, colour);

  	return colouredSquare;
  }
}

module.exports = ColouredSquare;
