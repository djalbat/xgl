'use strict';

const vec3 = require('../../../maths/vec3'),
      TopRail = require('./railing/topRail'),
      Uprights = require('./railing/uprights'),
      CanvasElement = require('../../../element/canvas');

const { add } = vec3,
      { thickness } = TopRail,
      height = 3;

class Railing extends CanvasElement {
  childElements(properties) {
    const { position, rotations, length } = properties;

    return ([

      <TopRail position={add(position, [0, height, 0])} rotations={rotations} length={length}/>,

      <Uprights position={position} rotations={rotations} height={height} length={length} thickness={thickness}/>

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Railing, properties); }
}

Object.assign(Railing, {
  thickness: thickness
});

module.exports = Railing;
