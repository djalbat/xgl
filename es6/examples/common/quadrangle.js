'use strict';

const defaultColour = [ 0, 1, 0, 1],
      defaultImageName = "grass.jpg",
      defaultIndexes = [
  
        [ 0, 1, 2 ],
        [ 2, 3, 0 ],
  
      ],
      defaultVertexCoordinates = [
  
        [ 0, 0, 0 ],
        [ 1, 0, 0 ],
        [ 1, 1, 0 ],
        [ 0, 1, 0 ],
  
      ],
      defaultTextureCoordinates = [

        [ 0, 0 ], [ 1, 0 ], [ 1, 1 ],
        [ 1, 1 ], [ 0, 1 ], [ 0, 0 ],

      ];

module.exports = {
  defaultColour: defaultColour,
  defaultImageName: defaultImageName,
  defaultIndexes: defaultIndexes,
  defaultVertexCoordinates: defaultVertexCoordinates,
  defaultTextureCoordinates: defaultTextureCoordinates
};
