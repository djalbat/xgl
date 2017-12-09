'use strict';

const TopRail = require('./railing/topRail'),
      Uprights = require('./railing/uprights'),
      CanvasElement = require('../../../element/canvas');

const { thickness } = TopRail,
      overallHeight = 3;

class Railing extends CanvasElement {
  childElements(properties) {
    const { length } = properties;

    return ([

      <TopRail overallHeight={overallHeight} length={length} />,

      <Uprights overallHeight={overallHeight} length={length} thickness={thickness} />

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Railing, properties); }
}

Object.assign(Railing, {
  thickness: thickness
});

module.exports = Railing;
