'use strict';

const defaultVertices = [
        
        [ 0, 0, 0 ],
        [ 1, 0, 0 ],
        [ 1, 1, 0 ],
          
      ],
      defaultIndexes = [
  
        [ 0, 1, 2 ],
  
      ],
      defaultColour = [ 1, 0, 1, 1],
      defaultImageName = "graffiti.jpg",
      defaultTextureCoordinates = [
          
        [ 0, 0 ], [ 1, 0 ], [ 1, 1 ],
          
      ];

module.exports = {
  defaultVertices: defaultVertices,
  defaultIndexes: defaultIndexes,
  defaultColour: defaultColour,
  defaultImageName: defaultImageName,
  defaultTextureCoordinates: defaultTextureCoordinates
};
