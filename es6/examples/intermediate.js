'use strict';

const Canvas = require('../canvas'),
      Normal = require('../normal'),
      Rotation = require('../rotation'),
      Position = require('../position'),
      Perspective = require('../perspective'),
      ColourShader = require('../shader/colour'),
      TextureShader = require('../shader/texture');

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
      textureCoordinateData = [
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
      vertexPositionData = [
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
      vertexNormalData = [
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
      vertexIndexData = [
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
      ];

const intermediate = () => {
  const canvas = new Canvas(),
        context = canvas.getContext();

  if (!context) {
    return;
  }

  const textureShader = TextureShader.fromNothing(canvas),
        /*colourShader = ColourShader.fromNothing(canvas),*/
        shader = textureShader,  ///
        shaderProgram = shader.getProgram(),
        clientWidth = canvas.getClientWidth(),
        clientHeight = canvas.getClientHeight(),
        zCoordinate = -5, ///
        position = Position.fromZCoordinate(zCoordinate),
        perspective = Perspective.fromClientWidthAndClientHeight(clientWidth, clientHeight);

  textureShader.createAndBindVertexPositionBuffer(vertexPositionData, canvas);

  //colourShader.createAndBindVertexColourBuffer(vertexColourData, canvas);

  textureShader.createAndBindTextureCoordinateBuffer(textureCoordinateData, canvas);
  
  textureShader.createAndBindVertexNormalBuffer(vertexNormalData, canvas);

  const count = canvas.createAndBindElementBuffer(vertexIndexData);

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

    canvas.render(normal, rotation, position, perspective, shader);

    canvas.drawElements(count);

    requestAnimationFrame(render);
  }
};

module.exports = intermediate;

