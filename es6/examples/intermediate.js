'use strict';

const Canvas = require('../canvas'),
      Normal = require('../normal'),
      Rotation = require('../rotation'),
      Position = require('../position'),
      Perspective = require('../perspective'),
      ColourShader = require('../shader/colour'),
      TextureShader = require('../shader/texture');

const intermediate = () => {
  const canvas = new Canvas(),
        context = canvas.getContext();

  if (!context) {
    return;
  }

  const /*textureShaderProgram = TextureShader.createShaderProgram(context),*/
        colourShaderProgram = ColourShader.createShaderProgram(context),
        /*shaderProgram = textureShaderProgram,*/
        shaderProgram = colourShaderProgram,
        clientWidth = canvas.getClientWidth(),
        clientHeight = canvas.getClientHeight(),
        zCoordinate = -5, ///
        position = Position.fromZCoordinate(zCoordinate),
        perspective = Perspective.fromClientWidthAndClientHeight(clientWidth, clientHeight);

  createAndBindVertexPositionBuffer(canvas, shaderProgram);

  createAndBindVertexColourBuffer(canvas, shaderProgram);

  createAndBindTextureCoordinateBuffer(canvas, shaderProgram);
  
  createAndBindVertexNormalBuffer(canvas, shaderProgram);

  const count = createVertexIndexElementBuffer(canvas);

  canvas.useProgram(shaderProgram);

  canvas.enableDepthTesting();
  canvas.enableDepthFunction();

  let initialTime = null;

  const image = new Image();

  image.onload = function() {
    const context = canvas.getContext(),
          { TEXTURE0 } = context,
          target = TEXTURE0,
          uSamplerUniformLocationIntegerValue = 0,
          uSamplerUniformLocation = canvas.getUniformLocation(shaderProgram, 'uSampler');

    canvas.createTexture(image);

    canvas.activateTexture(target);

    canvas.setUniformLocationIntegerValue(uSamplerUniformLocation, uSamplerUniformLocationIntegerValue);

    requestAnimationFrame(render);
  };

  image.src = 'texture/bricks.jpg';

  function render(time) {
    if (initialTime === null) {
      initialTime = time;
    }

    const elapsedTime = time - initialTime,
          xAngle = elapsedTime / 1000,
          yAngle = elapsedTime / 1000,
          rotation = Rotation.fromXAngleAndYAngle(xAngle, yAngle),
          normal = Normal.fromRotation(rotation);

    canvas.render(normal, rotation, position, perspective, shaderProgram);

    canvas.drawElements(count);

    requestAnimationFrame(render);
  }
};

module.exports = intermediate;

function createAndBindVertexPositionBuffer(canvas, shaderProgram) {
  const vertexPositionData = [
          -1.0, -1.0, +1.0,
          +1.0, -1.0, +1.0,
          +1.0, +1.0, +1.0,
          -1.0, +1.0, +1.0,

          -1.0, -1.0, -1.0,
          -1.0, +1.0, -1.0,
          +1.0, +1.0, -1.0,
          +1.0, -1.0, -1.0,

          -1.0, +1.0, -1.0,
          -1.0, +1.0, +1.0,
          +1.0, +1.0, +1.0,
          +1.0, +1.0, -1.0,

          -1.0, -1.0, -1.0,
          +1.0, -1.0, -1.0,
          +1.0, -1.0, +1.0,
          -1.0, -1.0, +1.0,

          +1.0, -1.0, -1.0,
          +1.0, +1.0, -1.0,
          +1.0, +1.0, +1.0,
          +1.0, -1.0, +1.0,

          -1.0, -1.0, -1.0,
          -1.0, -1.0, +1.0,
          -1.0, +1.0, +1.0,
          -1.0, +1.0, -1.0
        ],
        vertexPositionBuffer = canvas.createBuffer(vertexPositionData),
        vertexPositionAttributeLocation = canvas.getAttributeLocation(shaderProgram, 'aVertexPosition'),
        vertexPositionComponents = 3;

  canvas.bindBuffer(vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);

  const vertexPositionDataLength = vertexPositionData.length,
        count = vertexPositionDataLength / vertexPositionComponents;

  return count;
}

function createAndBindVertexColourBuffer(canvas, shaderProgram) {
  const vertexColourData = [
          1.0,  0.0,  0.0,  1.0,
          1.0,  0.0,  0.0,  1.0,
          1.0,  0.0,  0.0,  1.0,
          1.0,  0.0,  0.0,  1.0,

          0.0,  1.0,  1.0,  1.0,
          0.0,  1.0,  1.0,  1.0,
          0.0,  1.0,  1.0,  1.0,
          0.0,  1.0,  1.0,  1.0,

          0.0,  1.0,  0.0,  1.0,
          0.0,  1.0,  0.0,  1.0,
          0.0,  1.0,  0.0,  1.0,
          0.0,  1.0,  0.0,  1.0,

          1.0,  0.0,  1.0,  1.0,
          1.0,  0.0,  1.0,  1.0,
          1.0,  0.0,  1.0,  1.0,
          1.0,  0.0,  1.0,  1.0,

          0.0,  0.0,  1.0,  1.0,
          0.0,  0.0,  1.0,  1.0,
          0.0,  0.0,  1.0,  1.0,
          0.0,  0.0,  1.0,  1.0,

          1.0,  1.0,  0.0,  1.0,
          1.0,  1.0,  0.0,  1.0,
          1.0,  1.0,  0.0,  1.0,
          1.0,  1.0,  0.0,  1.0
        ],
        vertexColourBuffer = canvas.createBuffer(vertexColourData),
        vertexColourAttributeLocation = canvas.getAttributeLocation(shaderProgram, 'aVertexColour'),
        vertexColourComponents = 4;

  canvas.bindBuffer(vertexColourBuffer, vertexColourAttributeLocation, vertexColourComponents);
}

function createAndBindTextureCoordinateBuffer(canvas, shaderProgram) {
  const textureCoordinateData = [
          0.0,  0.0,
          1.0,  0.0,
          1.0,  1.0,
          0.0,  1.0,

          0.0,  0.0,
          1.0,  0.0,
          1.0,  1.0,
          0.0,  1.0,

          0.0,  0.0,
          1.0,  0.0,
          1.0,  1.0,
          0.0,  1.0,

          0.0,  0.0,
          1.0,  0.0,
          1.0,  1.0,
          0.0,  1.0,

          0.0,  0.0,
          1.0,  0.0,
          1.0,  1.0,
          0.0,  1.0,

          0.0,  0.0,
          1.0,  0.0,
          1.0,  1.0,
          0.0,  1.0
        ],
        textureCoordinateBuffer = canvas.createBuffer(textureCoordinateData),
        textureCoordinateAttributeLocation = canvas.getAttributeLocation(shaderProgram, 'aTextureCoordinate'),
        textureCoordinateComponents = 2;

  canvas.bindBuffer(textureCoordinateBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
}

function createAndBindVertexNormalBuffer(canvas, shaderProgram) {
  const vertexNormalData = [
           0.0,  0.0, +1.0,
           0.0,  0.0, +1.0,
           0.0,  0.0, +1.0,
           0.0,  0.0, +1.0,

           0.0,  0.0, -1.0,
           0.0,  0.0, -1.0,
           0.0,  0.0, -1.0,
           0.0,  0.0, -1.0,

           0.0, +1.0,  0.0,
           0.0, +1.0,  0.0,
           0.0, +1.0,  0.0,
           0.0, +1.0,  0.0,

           0.0, -1.0,  0.0,
           0.0, -1.0,  0.0,
           0.0, -1.0,  0.0,
           0.0, -1.0,  0.0,

          +1.0,  0.0,  0.0,
          +1.0,  0.0,  0.0,
          +1.0,  0.0,  0.0,
          +1.0,  0.0,  0.0,

          -1.0,  0.0,  0.0,
          -1.0,  0.0,  0.0,
          -1.0,  0.0,  0.0,
          -1.0,  0.0,  0.0
        ],
        vertexNormalBuffer = canvas.createBuffer(vertexNormalData),
        vertexNormalAttributeLocation = canvas.getAttributeLocation(shaderProgram, 'aVertexNormal'),
        vertexNormalComponents = 3;

  canvas.bindBuffer(vertexNormalBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
}

function createVertexIndexElementBuffer(canvas) {
  const vertexIndexData = [
           0,  1,  2,
           0,  2,  3,

           4,  5,  6,
           4,  6,  7,

           8,  9, 10,
           8, 10, 11,

          12, 13, 14,
          12, 14, 15,

          16, 17, 18,
          16, 18, 19,

          20, 21, 22,
          20, 22, 23
        ],
        vertexIndexElementBuffer = canvas.createElementBuffer(vertexIndexData),
        vertexIndexDataLength = vertexIndexData.length,
        count = vertexIndexDataLength;  ///

  canvas.bindElementBuffer(vertexIndexElementBuffer);

  return count;
}
