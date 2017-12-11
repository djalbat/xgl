'use strict';

const defaultColour = [ 1, 0, 0, 1 ],
      defaultImageName = "bricks.jpg",
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
      defaultVertexCoordinates = [
  
        [ 0, 0, 0 ],
        [ 1, 0, 0 ],
        [ 1, 1, 0 ],
        [ 0, 1, 0 ],
  
        [ 0, 0, 1 ],
        [ 1, 0, 1 ],
        [ 1, 1, 1 ],
        [ 0, 1, 1 ],
  
      ],
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
  defaultColour: defaultColour,
  defaultImageName: defaultImageName,
  defaultIndexes: defaultIndexes,
  defaultVertexCoordinates: defaultVertexCoordinates,
  defaultTextureCoordinates: defaultTextureCoordinates
};
