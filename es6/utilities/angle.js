'use strict';

function calculateHalfAngleSine(angleCosine) { return Math.sqrt((1 - angleCosine) / 2); }

function calculateHalfAngleCosine(angleCosine) { return Math.sqrt((1 + angleCosine) / 2); }

module.exports = {
  calculateHalfAngleSine: calculateHalfAngleSine,
  calculateHalfAngleCosine: calculateHalfAngleCosine
};
