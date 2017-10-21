'use strict';

const Panel = require('../panel');

const SidePanelA = (properties) => {
  const { length, overallWidth, overallHeight } = properties;

  return (

    <Panel length={length} overallHeight={overallHeight} />

  );
};

module.exports = SidePanelA;
