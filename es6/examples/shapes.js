'use strict';

const React = require('../react'),
      Scene = require('../scene'),
      ColourCuboid = require('./common/cuboid/colour'),
      TextureCuboid = require('./common/cuboid/texture'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const shapes = () => {

  preloadImageMap((imageMap) => {
    return (

      <Scene imageMap={imageMap}>
        <ColourCuboid offset={[0, 0, 0]} width={1} depth={1} height={1} colour={[1, 0, 0, 1]} />
        <TextureCuboid offset={[+2, +2, +2]} width={1} depth={1} height={1} imageName="bricks.jpg" />
      </Scene>

    );
  });
};

module.exports = shapes;
