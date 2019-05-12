'use strict';

const ColouredSquare = require('./colouredSquare');

const Rectangle = (properties) =>

  <ColouredSquare size={[ 0.5, 0.5, 0.5 ]} position={[ 0.5, 0.5, 6 ]} colour={[ 0, 1, 0 ]} />

;

module.exports = Rectangle;
