'use strict';

const defaultVertices = [
  
        [ 0, 0, 0 ],
        [ 1, 0, 0 ],
        [ 1, 1, 0 ],
        [ 0, 1, 0 ],

        [ 0, 0, 1 ],
        [ 1, 0, 1 ],
        [ 1, 1, 1 ],
        [ 0, 1, 1 ],

      ],
      defaultIndexes = [
  
        [ 1, 0, 3 ],
        [ 3, 2, 1 ],
  
        [ 4, 5, 6 ],
        [ 6, 7, 4 ],
  
        [ 0, 4, 7 ],
        [ 7, 3, 0 ],
  
        [ 5, 1, 2 ],
        [ 2, 6, 5 ],
  
        [ 7, 6, 2 ],
        [ 2, 3, 7 ],
  
        [ 4, 0, 1 ],
        [ 1, 5, 4 ],

      ],
      defaultColour = [ 1, 0, 0, 1 ],
      defaultImageName = "bricks.jpg",
      defaultTextureCoordinates = [

        [ 0, 0 ], [ 1, 0 ], [ 1, 1 ],
        [ 1, 1 ], [ 0, 1 ], [ 0, 0 ],

        [ 0, 0 ], [ 1, 0 ], [ 1, 1 ],
        [ 1, 1 ], [ 0, 1 ], [ 0, 0 ],

        [ 0, 0 ], [ 1, 0 ], [ 1, 1 ],
        [ 1, 1 ], [ 0, 1 ], [ 0, 0 ],

        [ 0, 0 ], [ 1, 0 ], [ 1, 1 ],
        [ 1, 1 ], [ 0, 1 ], [ 0, 0 ],

        [ 0, 0 ], [ 1, 0 ], [ 1, 1 ],
        [ 1, 1 ], [ 0, 1 ], [ 0, 0 ],

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
