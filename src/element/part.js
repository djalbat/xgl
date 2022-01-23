"use strict";

import Mask from "./mask";
import Element from "../element";
import ColourRenderer from "../renderer/colour";
import ImagesTextureRenderer from "../renderer/texture/images";
import ImageMapTextureRenderer from "../renderer/texture/imageMap";

import { elementsFromChildElements } from "../utilities/element";

export default class Part extends Element {
  constructor(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer) {
    super();

    this.images = images;
    this.imageMap = imageMap;
    this.imageNames = imageNames;
    this.imageTiling = imageTiling;
    this.imageMapJSON = imageMapJSON;
    this.colourRenderer = colourRenderer;
    this.textureRenderer = textureRenderer;
  }
  
  initialise(canvas, marginOfError) {
    const colourRenderer = ColourRenderer.fromNothing(canvas),
          childElements = this.getChildElements(),
          masks = elementsFromChildElements(childElements, Mask);

    let textureRenderer = null;

    if (this.images !== null) {
      const imagesTextureRenderer = ImagesTextureRenderer.fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);

      textureRenderer = imagesTextureRenderer;  ///
    }

    if (this.imageMap !== null) {
      const imageMapTextureRenderer = ImageMapTextureRenderer.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);

      textureRenderer = imageMapTextureRenderer;  ///
    }

    childElements.forEach((childElement) => childElement.createFacets(marginOfError));

    childElements.forEach((childElement) => childElement.maskFacets(masks, marginOfError));

    childElements.forEach((childElement) => childElement.addFacets(colourRenderer, textureRenderer));

    if (colourRenderer !== null) {
      colourRenderer.createBuffers(canvas);
    }

    if (textureRenderer !== null) {
      textureRenderer.createBuffers(canvas);
    }

    this.colourRenderer = colourRenderer;

    this.textureRenderer = textureRenderer;
  }

  render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
    this.colourRenderer && this.colourRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas);  ///

    this.textureRenderer && this.textureRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas);  ///
  }

  static fromProperties(properties) {
    const { images = null, imageMap = null, imageNames = null, imageTiling = false, imageMapJSON = null } = properties,
          colourRenderer = null,  ///
          textureRenderer = null, ///
          part = Element.fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer);

    return part;
  }
}
