'use strict';

const necessary = require('necessary');

const Shader = require('../shader'),
      vertexShaderSource = require('./source/colour/vertex'),
      fragmentShaderSource = require('./source/colour/fragment');

const { createVertexShader, createFragmentShader } = Shader,
      { vertexColourAttributeName } = vertexShaderSource,
      { arrayUtilities } = necessary,
      { merge } = arrayUtilities,
      add = merge;  ///

class ColourShader extends Shader {
  constructor(program, canvas) {
    super(program, canvas);

    this.vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName);

    this.vertexColourData = [];
  }

  addVertexColourData(vertexColourData) {
    add(this.vertexColourData, vertexColourData);
  }

  createBuffers(canvas) {
    this.createVertexColourBuffer(canvas);

    super.createBuffers(canvas);
  }

  createVertexColourBuffer(canvas) {
    this.vertexColourBuffer = canvas.createBuffer(this.vertexColourData);
  }

  bindBuffers(canvas) {
    this.bindVertexColourBuffer(canvas);

    super.bindBuffers(canvas);
  }

  bindVertexColourBuffer(canvas) {
    const vertexColourComponents = 4;

    canvas.bindBuffer(this.vertexColourBuffer, this.vertexColourAttributeLocation, vertexColourComponents);
  }

  activateTexture(canvas) {}  ///

  static fromNothing(canvas) {
    const vertexShader = createVertexShader(vertexShaderSource, canvas),
          fragmentShader = createFragmentShader(fragmentShaderSource, canvas),
          colourShader = canvas.createShader(ColourShader, vertexShader, fragmentShader);

    return colourShader;
  }
}

module.exports = ColourShader;
