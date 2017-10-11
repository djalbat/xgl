'use strict';

const Element = require('./element'),
      Canvas = require('./canvas'),
      OffsetMatrix = require('./matrix/offset'),
      ColourShader = require('./shader/colour'),
      TextureShader = require('./shader/texture');

class Scene extends Element {
  constructor(offset, canvas, colourRenderer, textureRenderer) {
    super();

    this.offset = offset;
    this.canvas = canvas;
    this.colourRenderer = colourRenderer;
    this.textureRenderer = textureRenderer;
  }
  
  getOffsetVec3() {
    return this.offset;
  }
  
  getCanvas() {
    return this.canvas;
  }
  
  getColourShader() {
    return this.colourRenderer;
  }
  
  getTextureShader() {
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

  updateHandler(rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    const offsetMatrix = OffsetMatrix.fromOffset(this.offset);

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
    const { childElements, imageMap, offset } = properties,
          canvas = new Canvas(),
          colourRenderer = ColourShader.fromNothing(canvas),
          textureRenderer = TextureShader.fromNothing(canvas),
          scene = Element.fromProperties(Scene, properties, offset, canvas, colourRenderer, textureRenderer);
    
    childElements.forEach(function(childElement) {
      childElement.create(colourRenderer, textureRenderer);
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
