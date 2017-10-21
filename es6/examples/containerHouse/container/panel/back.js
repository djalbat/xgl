'use strict';

const Panel = require('../panel');

const BackPanel = (properties) => {
  const { length, overallWidth, overallHeight } = properties,
        position = [ overallWidth, 0, 0 ],
        rotations = [ 0, -90, 0 ];

  return (

    <Panel length={overallWidth} overallHeight={overallHeight} position={position} rotations={rotations} />  ///

  );
};

module.exports = BackPanel;
