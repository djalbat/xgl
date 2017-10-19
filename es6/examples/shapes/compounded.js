'use strict';

const CanvasElement = require('../../element/canvas'),
      ColouredCylinder = require('../common/coloured/cylinder'),
      TexturedCylinder = require('../common/textured/cylinder');

class CompoundedShapes extends CanvasElement {
  getChildElements() {
    return ([

        <ColouredCylinder width={1} height={1} depth={1} position={[ 3, -1, 1 ]} rotations={[ 0, 0, 0 ]} colour={[ 1, 0, 1, 1 ]} />,
        <TexturedCylinder width={1} height={1} depth={1} position={[ 0, 1, -3 ]} rotations={[ 0, 90, 90 ]} imageName="gravel.jpg" />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(CompoundedShapes, properties); }
}

module.exports = CompoundedShapes;
