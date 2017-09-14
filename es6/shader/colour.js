'use strict';

const normalMatrixName = 'uNormalMatrix',
      rotationMatrixName = 'uRotationMatrix',
      positionMatrixName = 'uPositionMatrix',
      perspectiveMatrixName = 'uPerspectiveMatrix',
      vertexShaderSource = `
    
        attribute vec4 aVertexPosition;
        attribute vec4 aVertexColour;
        
        uniform mat4 ${normalMatrixName};
        uniform mat4 ${rotationMatrixName};
        uniform mat4 ${positionMatrixName};
        uniform mat4 ${perspectiveMatrixName};
        
        varying lowp vec4 vColour;
        
        void main() {
          gl_Position = ${perspectiveMatrixName} * ${positionMatrixName} * ${rotationMatrixName} * aVertexPosition;

          vColour = aVertexColour;          
        }
        
      `,
      fragmentShaderSource = `
        
        varying lowp vec4 vColour;
  
        void main() {
          gl_FragColor = vColour;
        }
        
      `;
  
class ColourShader {
  static createShaderProgram(context) {
    const { LINK_STATUS } = context,
          pname = LINK_STATUS,
          shaderProgram = context.createProgram(),
          vertexShader = createVertexShader(context),
          fragmentShader = createFragmentShader(context);
  
    context.attachShader(shaderProgram, vertexShader);
    context.attachShader(shaderProgram, fragmentShader);
  
    context.linkProgram(shaderProgram);
  
    const linkStatus = context.getProgramParameter(shaderProgram, pname);
  
    if (!linkStatus) {
      const message = context.getProgramInfoLog(shaderProgram);  ///
  
      throw new Error(`Unable to create the colour shader program, '${message}'.`);
    }
  
    return shaderProgram;
  }
}

Object.assign(ColourShader, {
  vertexShaderSource: vertexShaderSource,
  fragmentShaderSource: fragmentShaderSource,
  normalMatrixName: normalMatrixName,
  rotationMatrixName: rotationMatrixName,
  positionMatrixName: positionMatrixName,
  perspectiveMatrixName: perspectiveMatrixName
});

module.exports = ColourShader;

function createVertexShader(context) {
  const { VERTEX_SHADER } = context,
        type = VERTEX_SHADER,
        vertexShader = createShader(type, vertexShaderSource, context);

  return vertexShader;
}

function createFragmentShader(context) {
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
    throw new Error(`Unable to create the shader.`);
  }

  return shader;
}
