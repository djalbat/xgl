'use strict';

function projectOntoXYPlane(vertex) {
  vertex = [...vertex.slice(0, 2), 0];  ///
  
  return vertex;
}

module.exports = {
  projectOntoXYPlane: projectOntoXYPlane
};
