'use strict';

const ColourPlane = require('../common/colour/plane');

const overallHeight = 9.5,
      overallWidth = 8,
      colour = [ 1, 1, 1, 1 ];

const Container = (properties) => {
  const { position, rotations, length } = properties,
        dimensions = [ 1, 1, 1 ],
        transformation = {
          dimensions: dimensions,
          position: position,
          rotations: rotations
        },
        overallLength = length, ///
        overallTransformation = transformation; ///

  return ([

    top(overallLength, overallTransformation),
    bottom(overallLength, overallTransformation),
    frontWall(overallLength, overallTransformation),
    backWall(overallLength, overallTransformation),
    sideWallA(overallLength, overallTransformation),
    sideWallB(overallLength, overallTransformation),

  ]);
};

module.exports = Container;

const top = (overallLength, overallTransformation) => {
  const width = overallWidth,
        height = overallLength,
        depth = overallHeight,
        position = [ 0, overallHeight, overallLength ],
        dimensions = {
          width: width,
          height: height,
          depth: depth
        },
        rotations = [ -90, 0, 0 ],
        transformation = {
          position: position,
          dimensions: dimensions,
          rotations: rotations
        },
        transformations = [
          transformation,
          overallTransformation
        ];

  return (

    <ColourPlane colour={colour} transformations={transformations} />

  );
};

const bottom = (overallLength, overallTransformation) => {
  const width = overallWidth,
        height = overallLength,
        depth = 0,
        position = [ 0, 0, 0 ],
        dimensions = {
          width: width,
          height: height,
          depth: depth
        },
        rotations = [ +90,  0, 0 ],
        transformation = {
          position: position,
          dimensions: dimensions,
          rotations: rotations
        },
        transformations = [
          transformation,
          overallTransformation
        ];

  return (

    <ColourPlane colour={colour} transformations={transformations} />

  );
};

const frontWall = (overallLength, overallTransformation) => {
  const width = overallWidth,
        height = overallHeight,
        depth = 0,
        position = [ 0, 0, overallLength ],
        dimensions = {
          width: width,
          height: height,
          depth: depth
        },
        rotations = [ 0, 0, 0 ],
        transformation = {
          position: position,
          dimensions: dimensions,
          rotations: rotations
        },
        transformations = [
          transformation,
          overallTransformation
        ];

  return (

    <ColourPlane colour={colour} transformations={transformations} />

  );
};

const backWall = (overallLength, overallTransformation) => {
  const width = overallWidth,
        height = overallHeight,
        depth = 0,
        position = [ overallWidth, 0, 0 ],
        dimensions = {
          width: width,
          height: height,
          depth: depth
        },
        rotations = [ 0, -180, 0 ],
        transformation = {
          position: position,
          dimensions: dimensions,
          rotations: rotations
        },
        transformations = [
          transformation,
          overallTransformation
        ];

  return (

    <ColourPlane colour={colour} transformations={transformations} />

  );
};

const sideWallA = (overallLength, overallTransformation) => {
  const width = overallLength,
        height = overallHeight,
        depth = 0,
        position = [ 0, 0, 0 ],
        dimensions = {
          width: width,
          height: height,
          depth: depth
        },
        rotations = [ 0, -90, 0 ],
        transformation = {
          position: position,
          dimensions: dimensions,
          rotations: rotations
        },
        transformations = [
          transformation,
          overallTransformation
        ];

  return (

    <ColourPlane colour={colour} transformations={transformations} />

  );
};

const sideWallB = (overallLength, overallTransformation) => {
  const width = overallLength,
        height = overallHeight,
        depth = 0,
        position = [ overallWidth, 0, overallLength ],
        dimensions = {
          width: width,
          height: height,
          depth: depth
        },
        rotations = [ 0, +90, 0 ],
        transformation = {
          position: position,
          dimensions: dimensions,
          rotations: rotations
        },
        transformations = [
          transformation,
          overallTransformation
        ];

  return (

    <ColourPlane colour={colour} transformations={transformations} />

  );
};
