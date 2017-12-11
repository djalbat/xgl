'use strict';

const defaultIndexes = [
  
        [ 0, 1, 2 ],
  
      ],
      defaultColour = [ 1, 0, 1, 1],
      defaultImageName = "graffiti.jpg",
      defaultVertexCoordinates = [
  
        [ 0, 0, 0 ],
        [ 1, 0, 0 ],
        [ 1, 1, 0 ],
  
      ],
      defaultTextureCoordinates = [
          
        [ 0, 0 ], [ 1, 0 ], [ 1, 1 ],
          
      ];

module.exports = {
  defaultColour: defaultColour,
  defaultImageName: defaultImageName,
  defaultIndexes: defaultIndexes,
  defaultVertexCoordinates: defaultVertexCoordinates,
  defaultTextureCoordinates: defaultTextureCoordinates
};
