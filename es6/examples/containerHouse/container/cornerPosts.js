'use strict';

const CornerPost = require('./cornerPost'),
      CanvasElement = require('../../../element/canvas');

const { width, depth } = CornerPost;

class CornerPosts extends CanvasElement {
  childElements(properties) {
    const { length, overallWidth, overallHeight } = properties;

    return ([

      <CornerPost position={[                    0, 0,              0 ]} overallHeight={overallHeight} />,
      <CornerPost position={[ overallWidth - width, 0,              0 ]} overallHeight={overallHeight} />,
      <CornerPost position={[                    0, 0, length - depth ]} overallHeight={overallHeight} />,
      <CornerPost position={[ overallWidth - width, 0, length - depth ]} overallHeight={overallHeight} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(CornerPosts, properties); }
}

module.exports = CornerPosts;
