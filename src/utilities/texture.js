"use strict";

import { rotateVertices } from "../utilities/vertices";
import { invert2, invert3 } from "../maths/matrix";
import { first, second, third } from "../utilities/array";
import { calculateArbitraryRotationQuaternion } from "../utilities/quaternion";
import { add2, multiply2, transform2, transform3 } from "../maths/vector";

export function cloneTextureCoordinateTuples(textureCoordinateTuples) {
  textureCoordinateTuples = textureCoordinateTuples.map((textureCoordinateTuple) => {
    textureCoordinateTuple = textureCoordinateTuple.slice();  ///

    return textureCoordinateTuple;
  });

  return textureCoordinateTuples;
}

export function calculateMappedTextureCoordinateTuples(textureCoordinateTuples, extent) {
  const { left, bottom, width, height } = extent,
        mappedTextureCoordinateTuples = textureCoordinateTuples.map((textureCoordinateTuple) => {
          const mappedTextureCoordinateTuple = add2(multiply2(textureCoordinateTuple, [ width, height ] ), [ left, bottom ]);

          return mappedTextureCoordinateTuple;
        }); ///

  return mappedTextureCoordinateTuples;
}

export function calculateAdjustedTextureCoordinateTuples(vertices, normal, parentVertices, textureCoordinateTuples) {
  const arbitraryRotationQuaternion = calculateArbitraryRotationQuaternion(normal),
        rotationQuaternion = arbitraryRotationQuaternion; ///

  const rotatedVertices = rotateVertices(vertices, rotationQuaternion);

  parentVertices = rotateVertices(parentVertices, rotationQuaternion);

  vertices = rotatedVertices;  ///

  const firstVertex = first(vertices),
        secondVertex = second(vertices),
        thirdVertex = third(vertices),
        firstParentVertex = first(parentVertices),
        secondParentVertex = second(parentVertices),
        thirdParentVertex = third(parentVertices),
        firstTextureCoordinateTuple = first(textureCoordinateTuples),
        secondTextureCoordinateTuple = second(textureCoordinateTuples),
        thirdTextureCoordinateTuple = third(textureCoordinateTuples),
        firstVertexPosition = firstVertex.getPosition(),
        secondVertexPosition = secondVertex.getPosition(),
        thirdVertexPosition = thirdVertex.getPosition(),
        firstParentVertexPosition = firstParentVertex.getPosition(),
        secondParentVertexPosition = secondParentVertex.getPosition(),
        thirdParentVertexPosition = thirdParentVertex.getPosition(),
        R1x = firstVertexPosition[0],  ///
        R1y = firstVertexPosition[1],  ///
        R2x = secondVertexPosition[0], ///
        R2y = secondVertexPosition[1], ///
        R3x = thirdVertexPosition[0],  ///
        R3y = thirdVertexPosition[1],  ///
        P1x = firstParentVertexPosition[0], ///
        P2x = secondParentVertexPosition[0], ///
        P3x = thirdParentVertexPosition[0], ///
        P1y = firstParentVertexPosition[1], ///
        P2y = secondParentVertexPosition[1], ///
        P3y = thirdParentVertexPosition[1], ///
        P1u = firstTextureCoordinateTuple[0], ///
        P1v = firstTextureCoordinateTuple[1], ///
        P2u = secondTextureCoordinateTuple[0], ///
        P2v = secondTextureCoordinateTuple[1], ///
        P3u = thirdTextureCoordinateTuple[0], ///
        P3v = thirdTextureCoordinateTuple[1], ///
        textureCoordinatesMatrix = invert3([ 1, 1, 1, P1u, P2u, P3u, P1v, P2v, P3v ]),
        firstTransformedParentVerticesComponent = transform3([ P1x, P2x, P3x ], textureCoordinatesMatrix),
        secondTransformedParentVerticesComponent = transform3([ P1y, P2y, P3y ], textureCoordinatesMatrix),
        Ox = firstTransformedParentVerticesComponent[0],  ///
        Ux = firstTransformedParentVerticesComponent[1],  ///
        Vx = firstTransformedParentVerticesComponent[2],  ///
        Oy = secondTransformedParentVerticesComponent[0],  ///
        Uy = secondTransformedParentVerticesComponent[1],  ///
        Vy = secondTransformedParentVerticesComponent[2],  ///
        transformedParentVerticesMatrix = invert2([ Ux, Uy, Vx, Vy ]),
        firstAdjustedTextureCoordinate = transform2([ R1x - Ox, R1y - Oy ], transformedParentVerticesMatrix),
        secondAdjustedTextureCoordinate = transform2([ R2x - Ox, R2y - Oy ], transformedParentVerticesMatrix),
        thirdAdjustedTextureCoordinate = transform2([ R3x - Ox, R3y - Oy ], transformedParentVerticesMatrix),
        adjustedTextureCoordinateTuple = [
          firstAdjustedTextureCoordinate,
          secondAdjustedTextureCoordinate,
          thirdAdjustedTextureCoordinate,
        ];

  return adjustedTextureCoordinateTuple;
}
