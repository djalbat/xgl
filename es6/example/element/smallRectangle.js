'use strict';

const ColouredSquare = require('./colouredSquare');

const SmallRectangle = (properties) =>

  <ColouredSquare size={[ 1, 2, 1 ]} position={[ 0, 0, 10 ]} colour={[ 0, 1, 0 ]} />

;

module.exports = SmallRectangle;
