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
  
        [ 0, 3, 1 ],
        [ 2, 1, 3 ],
  
        [ 4, 5, 6 ],
        [ 6, 7, 4 ],
  
        [ 0, 4, 7 ],
        [ 7, 3, 0 ],
  
        [ 5, 1, 6 ],
        [ 2, 6, 1 ],
  
        [ 3, 7, 6 ],
        [ 6, 2, 3 ],
  
        [ 0, 5, 4 ],
        [ 5, 0, 1 ],
  
      ];

module.exports = {
  defaultVertices: defaultVertices,
  defaultIndexes: defaultIndexes
};
