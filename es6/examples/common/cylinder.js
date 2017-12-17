'use strict';

const constants = require('../../constants'),
      arrayUtilities = require('../../utilities/array');

const { CYLINDER_SIDES } = constants,
      { push } = arrayUtilities;

const defaultColour = [ 0, 0, 1, 1 ],
      defaultImageName = "concrete.jpg",
      defaultIndexes = calculateDefaultIndexes(),
      defaultVertexCoordinates = calculateDefaultVertexCoordinates(),
      defaultTextureCoordinates = calculateDefaultTextureCoordinates();

module.exports = {
  defaultImageName: defaultImageName,
  defaultColour: defaultColour,
  defaultIndexes: defaultIndexes,
  defaultVertexCoordinates: defaultVertexCoordinates,
  defaultTextureCoordinates: defaultTextureCoordinates
};

function calculateDefaultVertexCoordinates() {
  const defaultVertexCoordinates = [],
        sides = CYLINDER_SIDES,
        step = 2 * Math.PI / sides;

  for (let count = 0; count < sides; count++) {
    const angle = step * count,
          angleCosine = Math.cos(angle),
          angleSine = Math.sin(angle),
          topDefaultVertexCoordinates = [
            ( angleCosine + 1 ) / 2,
            ( angleSine + 1 ) / 2,
            0
          ],
          bottomDefaultVertexCoordinates = [
            ( angleCosine + 1 ) / 2,
            ( angleSine + 1 ) / 2,
            1
          ];
  
    defaultVertexCoordinates.push(topDefaultVertexCoordinates);
    defaultVertexCoordinates.push(bottomDefaultVertexCoordinates);
  }

  return defaultVertexCoordinates;
}

function calculateDefaultIndexes() {
  const defaultIndexes = [],
        sides = CYLINDER_SIDES,
        defaultIndexCount = sides * 2;

  for (let count = 0; count < sides; count++) {
    const defaultIndex = count * 2,
          firstDefaultIndexes = [ (defaultIndex + 1) % defaultIndexCount, (defaultIndex + 0) % defaultIndexCount, (defaultIndex + 2) % defaultIndexCount ],
          secondDefaultIndexes = [ (defaultIndex + 2) % defaultIndexCount, (defaultIndex + 3) % defaultIndexCount, (defaultIndex + 1) % defaultIndexCount ];

    defaultIndexes.push(firstDefaultIndexes);
    defaultIndexes.push(secondDefaultIndexes);
  }

  return defaultIndexes;
}

function calculateDefaultTextureCoordinates() {
  const defaultTextureCoordinates = [],
        sides = CYLINDER_SIDES,
        step = 1 / sides;

  for (let count = 0; count < sides; count++) {
    const offset = step * count,
          firstDefaultTextureCoordinates = [ [ offset, 0 ], [ offset, 1 ], [ offset + step, 1 ] ],
          secondDefaultTextureCoordinates = [ [ offset + step, 1 ], [ offset + step, 0 ], [ offset, 0 ] ];

    push(defaultTextureCoordinates, firstDefaultTextureCoordinates);
    push(defaultTextureCoordinates, secondDefaultTextureCoordinates);
  }

  return defaultTextureCoordinates;
}
