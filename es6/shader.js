'use strict';

const normalMatrixName = 'uNormalMatrix',
      rotationMatrixName = 'uRotationMatrix',
      positionMatrixName = 'uPositionMatrix',
      perspectiveMatrixName = 'uPerspectiveMatrix',
      vertexPositionAttributeName = 'aVertexPosition',
      vertexNormalAttributeName = 'aVertexNormal',
      calculateLightingSource = `

        uniform mat4 ${normalMatrixName};

        attribute vec3 ${vertexNormalAttributeName};

        vec3 ambientLight = vec3(0.3, 0.3, 0.3),
             directionalLightColour = vec3(1, 1, 1),
             directionalVector = normalize(vec3(0.85, 0.8, 0.75));
          
        vec3 calculateLighting() {
          vec4 transformedNormal = ${normalMatrixName} * vec4(${vertexNormalAttributeName}, 1.0);            

          float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
          
          vec3 lighting = ambientLight + (directionalLightColour * directional);
          
          return lighting;
        }

      `,
      calculatePositionSource = `

        uniform mat4 ${rotationMatrixName},
                     ${positionMatrixName},
                     ${perspectiveMatrixName};
        
        attribute vec4 ${vertexPositionAttributeName};

        vec4 calculatePosition() {
          vec4 position = ${perspectiveMatrixName} * ${positionMatrixName} * ${rotationMatrixName} * ${vertexPositionAttributeName};
          
          return position;
        }
        
      `;

class Shader {
  constructor(program, normalMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, perspectiveMatrixUniformLocation) {
    this.program = program;
    this.normalMatrixUniformLocation = normalMatrixUniformLocation;
    this.rotationMatrixUniformLocation = rotationMatrixUniformLocation;
    this.positionMatrixUniformLocation = positionMatrixUniformLocation;
    this.perspectiveMatrixUniformLocation = perspectiveMatrixUniformLocation;
  }

  getProgram() {
    return this.program;
  }

  getNormalMatrixUniformLocation() {
    return this.normalMatrixUniformLocation;
  }

  getRotationMatrixUniformLocation() {
    return this.rotationMatrixUniformLocation;
  }

  getPositionMatrixUniformLocation() {
    return this.positionMatrixUniformLocation;
  }

  getPerspectiveMatrixUniformLocation() {
    return this.perspectiveMatrixUniformLocation;
  }

  createAndBindVertexPositionBuffer(vertexPositionData, canvas) {
    const vertexPositionBuffer = canvas.createBuffer(vertexPositionData),
          vertexPositionAttributeLocation = canvas.getAttributeLocation(this.program, vertexPositionAttributeName),
          vertexPositionComponents = 3;

    canvas.bindBuffer(vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);

    const vertexPositionDataLength = vertexPositionData.length,
          count = vertexPositionDataLength / vertexPositionComponents;

    return count;
  }

  createAndBindVertexNormalBuffer(vertexNormalData, canvas) {
    const vertexNormalBuffer = canvas.createBuffer(vertexNormalData),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(this.program, vertexNormalAttributeName),
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

    const normalMatrixUniformLocation = canvas.getUniformLocation(program, normalMatrixName),
          rotationMatrixUniformLocation = canvas.getUniformLocation(program, rotationMatrixName),
          positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName),
          perspectiveMatrixUniformLocation = canvas.getUniformLocation(program, perspectiveMatrixName),
          shader = new Class(program, normalMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, perspectiveMatrixUniformLocation);
  
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
