'use strict';

const necessary = require('necessary');

const angles = require('../angles'),
      zoom = require('../zoom'),
      Canvas = require('../canvas'),
      Normal = require('../normal'),
      Rotation = require('../rotation'),
      Position = require('../position'),
      Perspective = require('../perspective'),
      MouseEvents = require('../mouseEvents'),
      ColourShader = require('../shader/colour'),
      TextureShader = require('../shader/texture'),
      imagesUtilities = require('../utilities/images'),
      ColourCube = require('./intermediate/cube/colour'),
      TextureCube = require('./intermediate/cube/texture');

const { arrayUtilities } = necessary,
      { preload } = imagesUtilities,
      { first } = arrayUtilities;

let render;

function intermediate() {
  const canvas = new Canvas(),
        colourShader = ColourShader.fromNothing(canvas),
        textureShader = TextureShader.fromNothing(canvas);

  const mouseEvents = new MouseEvents(canvas);

  mouseEvents.addMouseUpEventHandler(mouseUpEventHandler);
  mouseEvents.addMouseDownEventHandler(mouseDownEventHandler);
  mouseEvents.addMouseMoveEventHandler(mouseMoveEventHandler);
  mouseEvents.addMouseWheelEventHandler(mouseWheelEventHandler);

  canvas.enableDepthTesting();
  canvas.enableDepthFunction();

  createColourCube(colourShader, canvas, function(colourCube) {
    createTextureCube(textureShader, canvas, function(textureCube) {
      render = createRender(canvas, colourCube, colourShader, textureCube, textureShader);

      render();
    });
  });
}

module.exports = intermediate;

function createColourCube(colourShader, canvas, callback) {
  const offsetPosition = [-2, 0, 0],
        colourCube = ColourCube.fromOffsetPosition(offsetPosition, colourShader, canvas);

  callback(colourCube);
}

function createTextureCube(textureShader, canvas, callback) {
  const sources = [
          'texture/bricks.jpg'
        ];

  preload(sources, function(images) {
    const firstImage = first(images),
          offsetPosition = [+2, 0, 0],
          image = firstImage, ///
          textureCube = TextureCube.fromOffsetPositionAndImage(offsetPosition, image, textureShader, canvas);

    callback(textureCube);
  });
}

function createRender(canvas, colourCube, colourShader, textureCube, textureShader) {
  const clientWidth = canvas.getClientWidth(),
        clientHeight = canvas.getClientHeight(),
        perspective = Perspective.fromClientWidthAndClientHeight(clientWidth, clientHeight),
        colourCubeCount = colourCube.getCount(),
        textureCubeCount = textureCube.getCount();

  const render = () => {
    const xAxisAngle = angles.getXAxisAngle(),
          yAxisAngle = angles.getYAxisAngle(),
          distance = zoom.getDistance(),
          xAngle = xAxisAngle,  ///
          zAngle = yAxisAngle, ///
          zCoordinate = -Math.max(10, distance), ///
          position = Position.fromZCoordinate(zCoordinate),
          rotation = Rotation.fromXAngleAndZAngle(xAngle, zAngle),
          normal = Normal.fromRotation(rotation);

    canvas.clear();

    colourCube.bind(colourShader, canvas);

    canvas.useShader(colourShader);

    colourShader.activateTexture(canvas);

    canvas.render(colourShader, normal, rotation, position, perspective);

    canvas.drawElements(colourCubeCount);

    textureCube.bind(textureShader, canvas);

    canvas.useShader(textureShader);

    textureShader.activateTexture(canvas);

    canvas.render(textureShader, normal, rotation, position, perspective);

    canvas.drawElements(textureCubeCount);
  };

  return render;
}

function mouseUpEventHandler(mouseCoordinates) {
  angles.mouseUpEventHandler(mouseCoordinates);
}

function mouseDownEventHandler(mouseCoordinates) {
  angles.mouseDownEventHandler(mouseCoordinates);
}

function mouseMoveEventHandler(mouseCoordinates) {
  angles.mouseMoveEventHandler(mouseCoordinates);

  if (render) {
    render();
  }
}

function mouseWheelEventHandler(delta) {
  zoom.mouseWheelEventHandler(delta);

  if (render) {
    render();
  }
}
