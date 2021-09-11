"use strict";

import Element from "../element";
import ColourRenderer from "../renderer/colour";
import ImagesTextureRenderer from "../renderer/texture/images";
import ImageMapTextureRenderer from "../renderer/texture/imageMap";

export default class Part extends Element {
  constructor(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden) {
    super();

    this.images = images;
    this.imageMap = imageMap;
    this.imageNames = imageNames;
    this.imageTiling = imageTiling;
    this.imageMapJSON = imageMapJSON;
    this.colourRenderer = colourRenderer;
    this.textureRenderer = textureRenderer;

    this.hidden = hidden;
  }
  
  render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
    this.colourRenderer && this.colourRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas);  ///

    this.textureRenderer && this.textureRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas);  ///
  }

  magnify(magnification) {
    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.magnify(magnification));
  }

  initialise(canvas, masks, marginOfError) {
    let textureRenderer = null;

    const colourRenderer = ColourRenderer.fromNothing(canvas);

    if (this.images !== null) {
      const imagesTextureRenderer = ImagesTextureRenderer.fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);

      textureRenderer = imagesTextureRenderer;  ///
    }

    if (this.imageMap !== null) {
      const imageMapTextureRenderer = ImageMapTextureRenderer.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);

      textureRenderer = imageMapTextureRenderer;  ///
    }

    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.createFacets(this.hidden, marginOfError));

    childElements.forEach((childElement) => childElement.amendFacets(masks, marginOfError));

    childElements.forEach((childElement) => childElement.addFacets(colourRenderer, textureRenderer));

    colourRenderer && colourRenderer.createBuffers(canvas); ///

    textureRenderer && textureRenderer.createBuffers(canvas); ///

    this.colourRenderer = colourRenderer;

    this.textureRenderer = textureRenderer;
  }

  static fromProperties(properties) {
    const { images = null, imageMap = null, imageNames = null, imageTiling = false, imageMapJSON = null, hidden = false } = properties,
          colourRenderer = null,  ///
          textureRenderer = null, ///
          part = Element.fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden);

    return part;
  }
}
