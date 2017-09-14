'use strict';

class Shader {
  constructor(program) {
    this.program = program;
  }

  getProgram() {
    return this.program;
  }

  static fromVertexShaderSourceAndFragmentShaderSource(Class, vertexShaderSource, fragmentShaderSource, context) {
    const { LINK_STATUS } = context,
          pname = LINK_STATUS,
          program = context.createProgram(),
          vertexShader = createVertexShader(vertexShaderSource, context),
          fragmentShader = createFragmentShader(fragmentShaderSource, context);
  
    context.attachShader(program, vertexShader);
    context.attachShader(program, fragmentShader);
  
    context.linkProgram(program);
  
    const linkStatus = context.getProgramParameter(program, pname);
  
    if (!linkStatus) {
      const message = context.getProgramInfoLog(program);  ///
  
      throw new Error(`Unable to create the colour shader program, '${message}'.`);
    }

    const shader = new Class(program);
  
    return shader;
  }
}

module.exports = Shader;

function createVertexShader(vertexShaderSource, context) {
  const { VERTEX_SHADER } = context,
        type = VERTEX_SHADER,
        vertexShader = createShader(type, vertexShaderSource, context);

  return vertexShader;
}

function createFragmentShader(fragmentShaderSource, context) {
  const { FRAGMENT_SHADER } = context,
        type = FRAGMENT_SHADER,
        vertexShader = createShader(type, fragmentShaderSource, context);

  return vertexShader;
}

function createShader(type, shaderSource, context) {
  const { COMPILE_STATUS } = context,
        pname = COMPILE_STATUS,
        shader = context.createShader(type);

  context.shaderSource(shader, shaderSource);

  context.compileShader(shader);

  const compileStatus = context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    const shaderInfoLog = context.getShaderInfoLog(shader);

    throw new Error(`Unable to create the shader.`);
  }

  return shader;
}
