'use strict';

const jiggle = require('../../../index');

const ColouredSquare = require('./colouredSquare');

const { CanvasElement } = jiggle;

class Cube extends CanvasElement {
	childElements(properties) {
		return ([

			<ColouredSquare colour={[ 1, 0, 0 ]} rotations={[   0,   0, 0 ]} />,
			<ColouredSquare colour={[ 0, 1, 0 ]} rotations={[ +90,   0, 0 ]} />,
			<ColouredSquare colour={[ 0, 0, 1 ]} rotations={[   0, +90, 0 ]} />,

			<ColouredSquare colour={[ 0, 1, 1 ]} rotations={[ 180,   0, 0 ]} />,
			<ColouredSquare colour={[ 1, 0, 1 ]} rotations={[ -90,   0, 0 ]} />,
			<ColouredSquare colour={[ 1, 1, 0 ]} rotations={[   0, -90, 0 ]} />,

		]);
	}

  static fromProperties(properties) { return CanvasElement.fromProperties(Cube, properties); }
}

module.exports = Cube;
