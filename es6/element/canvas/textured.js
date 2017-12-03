'use strict';

const CanvasElement = require('../../element/canvas'),
      arrayUtilities = require('../../utilities/array'),
      vectorUtilities = require('../../utilities/vector'),
      imageMapUtilities = require('../../utilities/imageMap');

const { push } = arrayUtilities,
      { add2, multiply2 } = vectorUtilities,
      { getImageDetails } = imageMapUtilities;

class TexturedCanvasElement extends CanvasElement {
  constructor(facets, transform, textureCoordinates, imageName) {
    super(facets, transform);

    this.textureCoordinates = textureCoordinates;

    this.imageName = imageName;
  }

  getTextureCoordinates() {
    return this.textureCoordinates;
  }
  
  getImageName() {
    return this.imageName;
  }

  create(colourRenderer, textureRenderer, transforms, masked) {
    super.create(colourRenderer, textureRenderer, transforms);
    
    if (!masked) {
      this.render(textureRenderer);
    }
  }
  
  render(textureRenderer) {
    const vertexPositions = this.calculateVertexPositions(),
          vertexIndexes = this.calculateVertexIndexes(),
          vertexNormals = this.calculateVertexNormals(),
          textureCoordinates = this.calculateTextureCoordinates();

    textureRenderer.addVertexPositions(vertexPositions);
    textureRenderer.addVertexIndexes(vertexIndexes);
    textureRenderer.addVertexNormals(vertexNormals);
    textureRenderer.addTextureCoordinates(textureCoordinates);
  }

  calculateTextureCoordinates() {
    const facets = this.getFacets(),
          imageDetails = getImageDetails(this.imageName),
          { left, bottom, width, height } = imageDetails,
          textureCoordinates = facets.reduce(function(textureCoordinates, facet) { ///
            push(textureCoordinates, translateTextureCoordinates(this.textureCoordinates, left, bottom, width, height ));

            return textureCoordinates;
          }.bind(this), []);
    
    return textureCoordinates;
  }

  static fromProperties(Class, properties, vertices, indexes, textureCoordinates, ...remainingArguments) {
    const { imageName } = properties,
          texturedCanvasElement = CanvasElement.fromProperties(Class, properties, vertices, indexes, textureCoordinates, imageName, ...remainingArguments);
    
    return texturedCanvasElement;
  }
}

module.exports = TexturedCanvasElement;

function translateTextureCoordinates(textureCoordinates, left, bottom, width, height ) {
  textureCoordinates = textureCoordinates.map(function(textureCoordinates) {  ///
    textureCoordinates = add2(multiply2(textureCoordinates, [ width, height ] ), [ left, bottom ]);

    return textureCoordinates;
  });

  return textureCoordinates;
}
