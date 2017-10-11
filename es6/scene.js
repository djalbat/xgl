'use strict';

const Element = require('./element'),
      Canvas = require('./canvas'),
      Offset = require('./scene/offset'),
      ColourShader = require('./shader/colour'),
      TextureShader = require('./shader/texture');

class Scene extends Element {
  constructor(offsetVec3, canvas, colourRenderer, textureRenderer) {
    super();

    this.offsetVec3 = offsetVec3;
    this.canvas = canvas;
    this.colourRenderer = colourRenderer;
    this.textureRenderer = textureRenderer;
  }
  
  getOffsetVec3() {
    return this.offsetVec3;
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

  drawElements(offset, rotation, position, projection, normal) {
    const colourRendererProgram = this.colourRenderer.getProgram(),
          textureRendererProgram = this.textureRenderer.getProgram();

    this.canvas.clear();

    this.canvas.useProgram(colourRendererProgram);

    this.colourRenderer.bindBuffers(this.canvas);

    this.canvas.render(this.colourRenderer, offset, rotation, position, projection, normal);

    this.canvas.useProgram(textureRendererProgram);
    
    this.textureRenderer.bindBuffers(this.canvas);
    
    this.textureRenderer.activateTexture(this.canvas);
    
    this.canvas.render(this.textureRenderer, offset, rotation, position, projection, normal);
  }

  updateHandler(rotation, position, projection, normal) {
    const offset = Offset.fromVec3(this.offsetVec3);

    this.drawElements(offset, rotation, position, projection, normal);
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
          offsetVec3 = offset,  ///
          canvas = new Canvas(),
          colourRenderer = ColourShader.fromNothing(canvas),
          textureRenderer = TextureShader.fromNothing(canvas),
          scene = Element.fromProperties(Scene, properties, offsetVec3, canvas, colourRenderer, textureRenderer);
    
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
