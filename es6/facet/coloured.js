'use strict';

const Facet = require('../facet'),
      verticesUtilities = require('../utilities/vertices');

const { calculateNormal } = verticesUtilities;

class ColouredFacet extends Facet {
  constructor(vertices, normal, colour) {
    super(vertices, normal);
    
    this.colour = colour;
  }
  
  getColour() {
    return this.colour;
  }
  
  getVertexColours() {
    const vertexColour = this.colour, ///
          vertexColours = [
            vertexColour,
            vertexColour,
            vertexColour,
          ];
    
    return vertexColours;
  }
  
  static fromVerticesIndexesAndColour(vertices, indexes, colour) {
    vertices = indexes.map(function(index) {
      const vertex = vertices[index];

      return vertex;
    });

    const normal = calculateNormal(vertices),
          colouredFacet = new ColouredFacet(vertices, normal, colour);
    
    return colouredFacet;
  }
}

module.exports = ColouredFacet;
