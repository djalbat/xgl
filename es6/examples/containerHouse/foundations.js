'use strict';

const ConcreteSlab = require('./concreteSlab');

const Foundations = (properties) => [

  <ConcreteSlab position={[ -0.5, -1, -0.5 ]} width={12.5} height={1} depth={33} />,
  <ConcreteSlab position={[   24, -1, -0.5 ]} width={24.4} height={1} depth={33} />,

];

module.exports = Foundations;
