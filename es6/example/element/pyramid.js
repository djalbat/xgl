"use strict";

const Side = require("./side");

const Pyramid = (properties) => [

  <Side />,
  <Side rotations={[ 0,  90, 0 ]} />,
  <Side rotations={[ 0, 180, 0 ]} />,
  <Side rotations={[ 0, 270, 0 ]} />,

];

module.exports = Pyramid;
