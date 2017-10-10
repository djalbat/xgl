'use strict';

const Canvas = require('./canvas'),
      Zoom = require('./scene/zoom'),
      angles = require('./scene/angles'),
      Offset = require('./scene/offset'),
      Normal = require('./scene/normal'),
      Rotation = require('./scene/rotation'),
      Position = require('./scene/position'),
      Projection = require('./scene/projection'),
      ColourShader = require('./shader/colour'),
      TextureShader = require('./shader/texture'),
      MouseEvents = require('./scene/mouseEvents');

class Scene {
  constructor(zoom, offsetVec3, canvas, colourShader, textureShader) {
    this.zoom = zoom;
    this.offsetVec3 = offsetVec3;
    this.canvas = canvas;
    this.colourShader = colourShader;
    this.textureShader = textureShader;
  }
  
  getZoom() {
    return this.zoom;
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

  addMouseEventHandlers() {
    const mouseEvents = MouseEvents.fromNothing(this.canvas);

    mouseEvents.addMouseUpEventHandler(angles.mouseUpEventHandler.bind(angles));

    mouseEvents.addMouseDownEventHandler(angles.mouseDownEventHandler.bind(angles));

    mouseEvents.addMouseMoveEventHandler(function(mouseCoordinates) {
      angles.mouseMoveEventHandler(mouseCoordinates);

      this.render();  ///
    }.bind(this));

    mouseEvents.addMouseWheelEventHandler(function(delta) {
      this.zoom.mouseWheelEventHandler(delta);

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
          distance = this.zoom.getDistance(),
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          xAngle = xAxisAngle,  ///
          yAngle = undefined, ///
          zAngle = yAxisAngle, ///
          zCoordinate = -distance, ///
          offset = Offset.fromVec3(this.offsetVec3),
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle),
          position = Position.fromZCoordinate(zCoordinate),
          projection = Projection.fromWidthAndHeight(width, height),
          normal = Normal.fromRotation(rotation);

    this.drawElements(offset, rotation, position, projection, normal);
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

  static fromProperties(properties) {
    const { childElements, imageMap, offset, initialPosition } = properties,
          initialDistance = -initialPosition[2], ///
          offsetVec3 = offset,  ///
          zoom = Zoom.fromInitialDistance(initialDistance),
          canvas = new Canvas(),
          colourShader = ColourShader.fromNothing(canvas),
          textureShader = TextureShader.fromNothing(canvas),
          scene = new Scene(zoom, offsetVec3, canvas, colourShader, textureShader);

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
