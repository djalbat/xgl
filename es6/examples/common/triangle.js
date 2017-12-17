'use strict';

const defaultImageName = "graffiti.jpg",
      defaultColour = [ 1, 0, 1, 1],
      defaultIndexes = [
  
        [ 0, 1, 2 ],
  
      ],
      defaultVertexCoordinates = [
  
        [ 0, 0, 0 ],
        [ 1, 0, 0 ],
        [ 1, 1, 0 ],
  
      ],
      defaultTextureCoordinates = [
          
        [ 0, 0 ], [ 1, 0 ], [ 1, 1 ],
          
      ];

module.exports = {
  defaultImageName: defaultImageName,
  defaultColour: defaultColour,
  defaultIndexes: defaultIndexes,
  defaultVertexCoordinates: defaultVertexCoordinates,
  defaultTextureCoordinates: defaultTextureCoordinates
};
