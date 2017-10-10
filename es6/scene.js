'use strict';

const Canvas = require('./canvas'),
      Offset = require('./scene/offset'),
      ColourShader = require('./shader/colour'),
      TextureShader = require('./shader/texture');

class Scene {
  constructor(offsetVec3, canvas, colourShader, textureShader) {
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

  initialise() {
    assignContext.call(this);

    this.registerCallback(function(rotation, position, projection, normal) {
      const offset = Offset.fromVec3(this.offsetVec3);

      this.resize();

      this.drawElements(offset, rotation, position, projection, normal);
    }.bind(this));

    this.addMouseEventHandlers();
  }

  static fromProperties(properties) {
    const { childElements, imageMap, offset } = properties,
          offsetVec3 = offset,  ///
          canvas = new Canvas(),
          colourShader = ColourShader.fromNothing(canvas),
          textureShader = TextureShader.fromNothing(canvas),
          scene = new Scene(offsetVec3, canvas, colourShader, textureShader);
    
    const parentElement = scene; ///

    childElements.forEach(function(childElement) {
      childElement.create(colourShader, textureShader);
      
      updateParentContext(childElement, parentElement); ///
    });

    if (imageMap) {
      textureShader.createTexture(imageMap, canvas);
    }

    textureShader.createBuffers(canvas);
    colourShader.createBuffers(canvas);

    canvas.enableDepthTesting();
    canvas.enableDepthFunction();

    // window.onresize = function() {
    //   scene.resize();
    //   scene.render();
    // };

    scene.initialise();

    return scene;
  }
}

module.exports = Scene;

function updateParentContext(childElement, parentElement) {
  const parentContext = (typeof childElement.parentContext === 'function') ?
                          childElement.parentContext() :
                            childElement.context;

  parentElement.context = Object.assign({}, parentElement.context, parentContext);

  delete childElement.context;
}

function assignContext(names, thenDelete) {
  const argumentsLength = arguments.length;

  if (argumentsLength === 1) {
    const firstArgument = first(arguments);

    if (typeof firstArgument === 'boolean') {
      names = Object.keys(this.context);

      thenDelete = firstArgument;
    } else {
      thenDelete = true;
    }
  }

  if (argumentsLength === 0) {
    names = Object.keys(this.context);

    thenDelete = true;
  }

  names.forEach(function(name) {
    const value = this.context[name],
          propertyName = name,  ///
          descriptor = {
            value: value
          };

    Object.defineProperty(this, propertyName, descriptor);

    if (thenDelete) {
      delete this.context[name];
    }
  }.bind(this), []);
}
