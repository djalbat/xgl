'use strict';

const ColouredSquare = require('./colouredSquare');

const LargeRectangle = (properties) =>

  <ColouredSquare size={[ 2, 4, 1 ]} position={[ 0, 0, 0 ]} colour={[ 1, 0, 0 ]} />

;

module.exports = LargeRectangle;
