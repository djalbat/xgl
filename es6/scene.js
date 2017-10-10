'use strict';

const Element = require('./element'),
      Canvas = require('./canvas'),
      Offset = require('./scene/offset'),
      ColourShader = require('./shader/colour'),
      TextureShader = require('./shader/texture');

class Scene extends Element {
  constructor(offsetVec3, canvas, colourShader, textureShader) {
    super();

    this.offsetVec3 = offsetVec3;
    this.canvas = canvas;
    this.colourShader = colourShader;
    this.textureShader = textureShader;
  }
  
  getOffsetVec3() {
    return this.offsetVec3;
  }
  
  getCanvas() {
    return this.canvas;
  }
  
  getColourShader() {
    return this.colourShader;
  }
  
  getTextureShader() {
    return this.textureShader;
  }

  resize() {
    const clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,  ///
          height = clientHeight;  ///

    this.canvas.resize(width, height);
  }

  drawElements(offset, rotation, position, projection, normal) {
    this.canvas.clear();

    this.canvas.useShader(this.colourShader);

    this.colourShader.bindBuffers(this.canvas);

    this.colourShader.activateTexture(this.canvas);

    this.canvas.render(this.colourShader, offset, rotation, position, projection, normal);

    this.canvas.useShader(this.textureShader);
    
    this.textureShader.bindBuffers(this.canvas);
    
    this.textureShader.activateTexture(this.canvas);
    
    this.canvas.render(this.textureShader, offset, rotation, position, projection, normal);
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
          colourShader = ColourShader.fromNothing(canvas),
          textureShader = TextureShader.fromNothing(canvas),
          scene = Element.fromProperties(Scene, properties, offsetVec3, canvas, colourShader, textureShader);
    
    childElements.forEach(function(childElement) {
      childElement.create(colourShader, textureShader);
    });

    if (imageMap) {
      textureShader.createTexture(imageMap, canvas);
    }

    colourShader.createBuffers(canvas);
    textureShader.createBuffers(canvas);

    canvas.enableDepthTesting();
    canvas.enableDepthFunction();

    scene.initialise();

    return scene;
  }
}

module.exports = Scene;
