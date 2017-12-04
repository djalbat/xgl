'use strict';

const defaultVertices = [

        [ 0, 0, 0 ],
        [ 1, 0, 0 ],
        [ 1, 1, 0 ],
        [ 0, 1, 0 ],

      ],
      defaultIndexes = [
  
        [ 0, 1, 2 ],
        [ 2, 3, 0 ],
  
      ],
      defaultColour = [ 0, 1, 0, 1],
      defaultImageName = "grass.jpg",
      defaultTextureCoordinates = [

        [ 0, 0 ], [ 1, 0 ], [ 1, 1 ],
        [ 1, 1 ], [ 0, 1 ], [ 0, 0 ],

      ];

module.exports = {
  defaultVertices: defaultVertices,
  defaultIndexes: defaultIndexes,
  defaultColour: defaultColour,
  defaultImageName: defaultImageName,
  defaultTextureCoordinates: defaultTextureCoordinates
};
