'use strict';

const jiggle = require('../../index');

const { Canvas, Part, Scene, Camera } = jiggle;

const simpleExample = () => {
  const canvas = new Canvas();

  return (

    <Scene canvas={canvas}>
      <Part canvas={canvas}>
      </Part>
      <Camera canvas={canvas} initialDistance={5} initialOffset={[ 0, 0, 0 ]} />
    </Scene>

  );
};

module.exports = simpleExample;
