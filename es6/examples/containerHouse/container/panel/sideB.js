'use strict';

const Panel = require('../panel');

const SidePanelB = (properties) => {
  const { length, overallWidth, overallHeight } = properties,
        position = [ overallWidth, 0, length ],
        rotations = [ 0, 180, 0 ];

  return (

    <Panel length={length} overallHeight={overallHeight} position={position} rotations={rotations} />

  );
};

module.exports = SidePanelB;
