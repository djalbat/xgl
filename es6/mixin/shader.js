'use strict';

function createShader(type, shaderSource) {
  const { COMPILE_STATUS } = this.context,
        pname = COMPILE_STATUS,
        shader = this.context.createShader(type);

  this.context.shaderSource(shader, shaderSource);

  this.context.compileShader(shader);

  const compileStatus = this.context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    throw new Error(`Unable to create the shader.`);
  }

  return shader;
}

module.exports = {
  createShader: createShader
};
