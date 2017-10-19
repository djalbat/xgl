'use strict';

const Element = require('../element'),
      vec3 = require('../maths/vec3'),
      arrayUtilities = require('../utilities/array'),
      transformUtilities = require('../utilities/transform');

const { composeTransform } = transformUtilities,
      { chop, flatten } = arrayUtilities,
      { subtract, cross, normalise } = vec3;

class CanvasElement extends Element {
  constructor(transform, childElements) {
    super();

    this.transform = transform;

    this.childElements = childElements;
  }

  isCanvasElement() {
    return true;
  }

  getTransform() {
    return this.transform;
  }

  getChildElements() {
    return this.childElements;
  }

  create(colourRenderer, textureRenderer, transforms) {
    transforms = [this.transform, ...transforms]; ///

    const childElements = this.getChildElements();

    childElements.forEach(function(childElement) {
      childElement.create(colourRenderer, textureRenderer, transforms);
    });
  }

  calculateVertexPositionData(transforms) {
    transforms = [this.transform, ...transforms]; ///

    const initialVertexPositionData = this.getInitialVertexPositionData(),
          initialVertexPositions = chop(initialVertexPositionData, 3),  ///
          vertexPositions = initialVertexPositions.map(function(initialVertexPosition) {
            let vertexPosition = initialVertexPosition;

            transforms.forEach(function(transform) {
              vertexPosition = transform(vertexPosition);
            });

            return vertexPosition;
          }),
          vertexPositionData = flatten(vertexPositions);

    return vertexPositionData;
  }

  calculateVertexNormalData(vertexPositionData) {
    const faces = chop(vertexPositionData, 12),  ///
          vertexNormals = faces.reduce(function(vertexNormals, face) {
            const vertexPositions = chop(face, 3);

            for (let index = 0; index < 4; index++) {
              const firstVertexIndex = index,
                  secondVertexIndex = (index + 1) % 4,
                  thirdVertexIndex = (index + 3) % 4,
                  firstVertexPosition = vertexPositions[firstVertexIndex],
                  secondVertexPosition = vertexPositions[secondVertexIndex],
                  thirdVertexPosition = vertexPositions[thirdVertexIndex],
                  firstVector = subtract(secondVertexPosition, firstVertexPosition),
                  secondVector = subtract(thirdVertexPosition, firstVertexPosition),
                  vertexNormal = normalise(cross(firstVector, secondVector));

              vertexNormals.push(vertexNormal);
            }

            return vertexNormals;
          }, []),
          vertexNormalData = flatten(vertexNormals); ///

    return vertexNormalData;
  }

  calculateVertexIndexData(vertexPositionData) {
    const vertexIndexData = [],
          vertexPositionDataLength = vertexPositionData.length,
          facesLength = vertexPositionDataLength / 12; ///

    for (let index = 0; index < facesLength; index++) {
      const offset = index * 4;

      vertexIndexData.push(offset + 0);
      vertexIndexData.push(offset + 1);
      vertexIndexData.push(offset + 2);
      vertexIndexData.push(offset + 0);
      vertexIndexData.push(offset + 2);
      vertexIndexData.push(offset + 3);
    }

    return vertexIndexData;
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const { width, height, depth, position, rotations, childElements } = properties,
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = new Class(transform, childElements, ...remainingArguments);

    return canvasElement;
  }
}

module.exports = CanvasElement;
