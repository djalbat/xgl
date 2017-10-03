'use strict';

const Element = require('./element'),
      Canvas = require('./canvas'),
      zoom = require('./scene/zoom'),
      angles = require('./scene/angles'),
      Offset = require('./scene/offset'),
      Normal = require('./scene/normal'),
      Rotation = require('./scene/rotation'),
      Position = require('./scene/position'),
      Perspective = require('./scene/perspective'),
      ColourShader = require('./shader/colour'),
      TextureShader = require('./shader/texture'),
      MouseEvents = require('./scene/mouseEvents');

class Scene extends Element {
  constructor(canvas, colourShader, textureShader) {
    super();
    
    this.canvas = canvas;
    this.colourShader = colourShader;
    this.textureShader = textureShader;
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

  addMouseEventHandlers() {
    const mouseEvents = MouseEvents.fromNothing(this.canvas);

    mouseEvents.addMouseUpEventHandler(angles.mouseUpEventHandler.bind(angles));

    mouseEvents.addMouseDownEventHandler(angles.mouseDownEventHandler.bind(angles));

    mouseEvents.addMouseMoveEventHandler(function(mouseCoordinates) {
      angles.mouseMoveEventHandler(mouseCoordinates);

      this.render();  ///
    }.bind(this));

    mouseEvents.addMouseWheelEventHandler(function(delta) {
      zoom.mouseWheelEventHandler(delta);

      this.render();
    }.bind(this));
  }

  resize() {
    const clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,  ///
          height = clientHeight;  ///

    this.canvas.resize(width, height);
  }

  render() {
    const xAxisAngle = angles.getXAxisAngle(),
          yAxisAngle = angles.getYAxisAngle(),
          distance = zoom.getDistance(),
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          xAngle = xAxisAngle,  ///
          zAngle = yAxisAngle, ///
          xCoordinate = 0,  ///-18,
          yCoordinate = 0,  ///-16,
          zCoordinate = -Math.max(10, distance), ///
          offset = Offset.fromXCoordinateAndYCoordinate(xCoordinate, yCoordinate),
          rotation = Rotation.fromXAngleAndZAngle(xAngle, zAngle),
          position = Position.fromZCoordinate(zCoordinate),
          perspective = Perspective.fromWidthAndHeight(width, height),
          normal = Normal.fromRotation(rotation);

    this.drawElements(offset, rotation, position, perspective, normal);
  }

  drawElements(offset, rotation, position, perspective, normal) {
    this.canvas.clear();

    this.canvas.useShader(this.colourShader);

    this.colourShader.bindBuffers(this.canvas);

    this.colourShader.activateTexture(this.canvas);

    this.canvas.render(this.colourShader, offset, rotation, position, perspective, normal);
    
    // this.canvas.useShader(this.textureShader);
    //
    // this.textureShader.bindBuffers(this.canvas);
    //
    // this.textureShader.activateTexture(this.canvas);
    //
    // this.canvas.render(this.textureShader, offset, rotation, position, perspective, normal);
  }

  static fromProperties(properties) {
    const { childElements, imageMap } = properties,
          canvas = new Canvas(),
          colourShader = ColourShader.fromNothing(canvas),
          textureShader = TextureShader.fromNothing(canvas),
          scene = new Scene(canvas, colourShader, textureShader);

    childElements.forEach(function(childElement) {
      childElement.create(colourShader, textureShader);
    });

    if (imageMap) {
      textureShader.createTexture(imageMap, canvas);
    }

    textureShader.createBuffers(canvas);
    colourShader.createBuffers(canvas);

    canvas.enableDepthTesting();
    canvas.enableDepthFunction();

    window.onresize = function() {
      scene.resize();
      scene.render();
    };

    scene.resize();
    scene.render();

    scene.addMouseEventHandlers();

    return scene;
  }
}

module.exports = Scene;
