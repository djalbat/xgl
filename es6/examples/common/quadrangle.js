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
      defaultTextureCoordinates = [

        [ 0, 0 ], [ 1, 0 ], [ 1, 1 ],
        [ 1, 1 ], [ 0, 1 ], [ 0, 0 ],

      ];

module.exports = {
  defaultVertices: defaultVertices,
  defaultIndexes: defaultIndexes,
  defaultTextureCoordinates: defaultTextureCoordinates
};
