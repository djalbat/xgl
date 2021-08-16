"use strict";

import { SHADER_ERROR } from "../errors";

export function createShader(type, shaderSource) {
  const { COMPILE_STATUS } = this.context,
        pname = COMPILE_STATUS,
        shader = this.context.createShader(type);

  this.context.shaderSource(shader, shaderSource);

  this.context.compileShader(shader);

  const compileStatus = this.context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    throw new Error(SHADER_ERROR);
  }

  return shader;
}

export function createVertexShader(vertexShaderSource, canvas) {
  const { VERTEX_SHADER } = this.context,
        type = VERTEX_SHADER,
        vertexShader = this.createShader(type, vertexShaderSource);

  return vertexShader;
}

export function createFragmentShader(fragmentShaderSource, canvas) {
  const { FRAGMENT_SHADER } = this.context,
        type = FRAGMENT_SHADER,
        fragmentShader = this.createShader(type, fragmentShaderSource);

  return fragmentShader;
}
