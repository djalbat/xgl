'use strict';

const Panel = require('../panel');

const FrontPanel = (properties) => {
  const { length, overallWidth, overallHeight } = properties,
        position = [ 0, 0, length ],
        rotations = [ 0, 90, 0 ];

  return (

      <Panel length={overallWidth} overallHeight={overallHeight} position={position} rotations={rotations} />  ///

  );
};

module.exports = FrontPanel;
