'use strict';

const Element = require('../element'),
      arrayUtilities = require('../utilities/array'),
      vectorUtilities = require('../utilities/vector'),
      transformUtilities = require('../utilities/transform');

const { chop } = arrayUtilities,
      { composeTransform } = transformUtilities,
      { subtract3, cross3, normalise3 } = vectorUtilities;

class CanvasElement extends Element {
  constructor(transform) {
    super();

    this.transform = transform;
  }

  getTransform() {
    return this.transform;
  }

  create(colourRenderer, textureRenderer, transforms) {
    transforms = [this.transform, ...transforms]; ///

    const childElements = this.getChildElements();

    childElements.forEach(function(childElement) {
      childElement.create(colourRenderer, textureRenderer, transforms);
    });
  }

  calculateVertexPositions(transforms) {
    transforms = [this.transform, ...transforms]; ///

    const initialVertexPositions = this.getInitialVertexPositions(),
          vertexPositions = initialVertexPositions.map(function(initialVertexPosition) {
            let vertexPosition = initialVertexPosition;

            transforms.forEach(function(transform) {
              vertexPosition = transform(vertexPosition);
            });

            return vertexPosition;
          });

    return vertexPositions;
  }

  calculateVertexNormals(vertexPositions) {
    const faces = chop(vertexPositions, 4),  ///
          vertexNormals = faces.reduce(function(vertexNormals, face) {
            const vertexPositions = face; ///

            for (let index = 0; index < 4; index++) {
              const firstVertexIndex = index,
                    secondVertexIndex = (index + 1) % 4,
                    thirdVertexIndex = (index + 3) % 4,
                    firstVertexPosition = vertexPositions[firstVertexIndex],
                    secondVertexPosition = vertexPositions[secondVertexIndex],
                    thirdVertexPosition = vertexPositions[thirdVertexIndex],
                    firstVector = subtract3(secondVertexPosition, firstVertexPosition),
                    secondVector = subtract3(thirdVertexPosition, firstVertexPosition),
                    vertexNormal = normalise3(cross3(firstVector, secondVector));

              vertexNormals.push(vertexNormal);
            }

            return vertexNormals;
          }, []);

    return vertexNormals;
  }

  calculateVertexIndexes(vertexPositions) {
    const vertexIndexes = [],
          vertexPositionsLength = vertexPositions.length,
          facesLength = vertexPositionsLength / 4; ///

    for (let index = 0; index < facesLength; index++) {
      const offset = index * 4;

      vertexIndexes.push(offset + 0);
      vertexIndexes.push(offset + 1);
      vertexIndexes.push(offset + 2);
      vertexIndexes.push(offset + 0);
      vertexIndexes.push(offset + 2);
      vertexIndexes.push(offset + 3);
    }

    return vertexIndexes;
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const { width, height, depth, position, rotations } = properties,
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = Element.fromProperties(Class, properties, transform, ...remainingArguments);

    return canvasElement;
  }
}

module.exports = CanvasElement;
