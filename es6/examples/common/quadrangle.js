'use strict';

const defaultImageName = "grass.jpg",
      defaultColour = [ 0, 1, 0, 1],
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
  defaultImageName: defaultImageName,
  defaultColour: defaultColour,
  defaultIndexes: defaultIndexes,
  defaultVertexCoordinates: defaultVertexCoordinates,
  defaultTextureCoordinates: defaultTextureCoordinates
};
