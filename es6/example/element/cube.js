'use strict';

const jiggle = require('../../../index');

const Face = require('./face');

const { CanvasElement } = jiggle;

const defaultC0lour = [ 1, 1, 0 ];

class Cube extends CanvasElement {
	childElements(properties) {
	  const { colour = defaultC0lour } = properties;

		return ([

			<Face colour={colour} rotations={[   0,   0, 0 ]} />,
			<Face colour={colour} rotations={[ +90,   0, 0 ]} />,
			<Face colour={colour} rotations={[   0, +90, 0 ]} />,

			<Face colour={colour} rotations={[ 180,   0, 0 ]} />,
			<Face colour={colour} rotations={[ -90,   0, 0 ]} />,
			<Face colour={colour} rotations={[   0, -90, 0 ]} />,

		]);
	}

  static fromProperties(properties) { return CanvasElement.fromProperties(Cube, properties); }
}

module.exports = Cube;
