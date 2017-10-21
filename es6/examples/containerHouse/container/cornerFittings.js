'use strict';

const CornerFitting = require('./cornerFitting'),
      CanvasElement = require('../../../element/canvas');

const { width, depth, height } = CornerFitting;

class CornerFittings extends CanvasElement {
  childElements(properties) {
    const { length, overallWidth, overallHeight } = properties;

    return ([

      <CornerFitting position={[                    0,                      0, 0 ]} />,
      <CornerFitting position={[                    0, overallHeight - height, 0 ]} />,
      <CornerFitting position={[ overallWidth - width,                      0, 0 ]} />,
      <CornerFitting position={[ overallWidth - width, overallHeight - height, 0 ]} />,

      <CornerFitting position={[                    0,                      0, length - depth ]} />,
      <CornerFitting position={[                    0, overallHeight - height, length - depth ]} />,
      <CornerFitting position={[ overallWidth - width,                      0, length - depth ]} />,
      <CornerFitting position={[ overallWidth - width, overallHeight - height, length - depth ]} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(CornerFittings, properties); }
}

module.exports = CornerFittings;
