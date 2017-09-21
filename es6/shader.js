'use strict';

const normalMatrixName = 'uNormalMatrix',
      rotationMatrixName = 'uRotationMatrix',
      positionMatrixName = 'uPositionMatrix',
      perspectiveMatrixName = 'uPerspectiveMatrix',
      calculateLightingSource = `

        attribute vec3 aVertexNormal;

        uniform mat4 ${normalMatrixName};

        vec3 ambientLight = vec3(0.3, 0.3, 0.3),
             directionalLightColour = vec3(1, 1, 1),
             directionalVector = normalize(vec3(0.85, 0.8, 0.75));
          
        vec3 calculateLighting() {
          vec4 transformedNormal = ${normalMatrixName} * vec4(aVertexNormal, 1.0);            

          float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
          
          vec3 lighting = ambientLight + (directionalLightColour * directional);
          
          return lighting;
        }

      `,
      calculatePositionSource = `

        attribute vec4 aVertexPosition;

        uniform mat4 ${rotationMatrixName},
                     ${positionMatrixName},
                     ${perspectiveMatrixName};
        
        vec4 calculatePosition() {
          vec4 position = ${perspectiveMatrixName} * ${positionMatrixName} * ${rotationMatrixName} * aVertexPosition;
          
          return position;
        }
        
      `;

class Shader {
  constructor(program) {
    this.program = program;
  }

  getProgram() {
    return this.program;
  }

  getNormalMatrixUniformLocation(canvas) { return canvas.getUniformLocation(this.program, normalMatrixName); }

  getRotationMatrixUniformLocation(canvas) { return canvas.getUniformLocation(this.program, rotationMatrixName ); }

  getPositionMatrixUniformLocation(canvas) { return canvas.getUniformLocation(this.program, positionMatrixName ); }

  getPerspectiveMatrixUniformLocation(canvas) { return canvas.getUniformLocation(this.program, perspectiveMatrixName ); }

  createAndBindVertexPositionBuffer(vertexPositionData, canvas) {
    const vertexPositionBuffer = canvas.createBuffer(vertexPositionData),
          vertexPositionAttributeLocation = canvas.getAttributeLocation(this.program, 'aVertexPosition'),
          vertexPositionComponents = 3;

    canvas.bindBuffer(vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);

    const vertexPositionDataLength = vertexPositionData.length,
          count = vertexPositionDataLength / vertexPositionComponents;

    return count;
  }

  createAndBindVertexNormalBuffer(vertexNormalData, canvas) {
    const vertexNormalBuffer = canvas.createBuffer(vertexNormalData),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(this.program, 'aVertexNormal'),
          vertexNormalComponents = 3;

    canvas.bindBuffer(vertexNormalBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
  }

  static fromVertexShaderSourceAndFragmentShaderSource(Class, vertexShaderSource, fragmentShaderSource, canvas) {
    const context = canvas.getContext(),
          { LINK_STATUS } = context,
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

Object.assign(Shader, {
  calculateLightingSource: calculateLightingSource,
  calculatePositionSource: calculatePositionSource
});

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
