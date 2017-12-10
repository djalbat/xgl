'use strict';

const CanvasElement = require('../../../element/canvas'),
      ColouredRidge = require('./panel/colouredRidge');

class Panel extends CanvasElement {
  childElements(properties) {
    const { length, overallHeight } = properties,
          width = 1.125,  ///
          height = overallHeight, ///
          depth = 0.25,
          rotations = [ 0, -90, 0 ],
          step = 1,
          indent = 0.25,
          count = length / step,
          colour = [ 1, 1, 1, 1 ],
          elements = [];

    for (let index = 0; index < count - 1; index++) {
      const position = [depth+indent, 0, step*index + step/2, 0];

      elements.push(

        <ColouredRidge colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />,

      )
    }

    return elements;
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Panel, properties); }
}

module.exports = Panel;
