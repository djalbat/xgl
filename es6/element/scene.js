'use strict';

const Element = require('../element'),
      ColourRenderer = require('../renderer/colour'),
      TextureRenderer = require('../renderer/texture');

class Scene extends Element {
  constructor(colourRenderer, textureRenderer, canvas) {
    super();

    this.colourRenderer = colourRenderer;
    this.textureRenderer = textureRenderer;

    this.canvas = canvas;
  }
  
  getCanvas() {
    return this.canvas;
  }
  
  getColourRenderer() {
    return this.colourRenderer;
  }
  
  getTextureRenderer() {
    return this.textureRenderer;
  }

  resize() {
    const clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,  ///
          height = clientHeight;  ///

    this.canvas.resize(width, height);
  }

  render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    const colourRendererProgram = this.colourRenderer.getProgram(),
          textureRendererProgram = this.textureRenderer.getProgram();

    this.canvas.clear();

    this.canvas.useProgram(colourRendererProgram);

    this.colourRenderer.bindBuffers(this.canvas);

    this.canvas.render(this.colourRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

    this.canvas.useProgram(textureRendererProgram);
    
    this.textureRenderer.bindBuffers(this.canvas);
    
    this.textureRenderer.activateTexture(this.canvas);
    
    this.canvas.render(this.textureRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }

  updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    this.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }

  initialise() {
    this.assignContext();

    this.onUpdate(this.updateHandler.bind(this));

    window.onresize = function() {
      this.resize();

      this.forceUpdate();
    }.bind(this);

    this.resize();

    this.forceUpdate();
  }

  static fromProperties(properties) {
    const { childElements, imageMap, canvas } = properties,
          colourRenderer = ColourRenderer.fromNothing(canvas),
          textureRenderer = TextureRenderer.fromNothing(canvas),
          scene = Element.fromProperties(Scene, properties, colourRenderer, textureRenderer, canvas);

    const transforms = [],
          childCanvasElements = childElements.filter(function(childElement) {
            const childElementCanvasElement = childElement.isCanvasElement();

            return childElementCanvasElement;
          });
    
    childCanvasElements.forEach(function(childCanvasElement) {
      childCanvasElement.create(colourRenderer, textureRenderer, transforms);
    });

    if (imageMap) {
      textureRenderer.createTexture(imageMap, canvas);
    }

    colourRenderer.createBuffers(canvas);
    textureRenderer.createBuffers(canvas);

    canvas.enableDepthTesting();
    canvas.enableDepthFunction();

    scene.initialise();

    return scene;
  }
}

module.exports = Scene;
