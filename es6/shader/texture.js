'use strict';

const normalMatrixName = 'uNormalMatrix',
      rotationMatrixName = 'uRotationMatrix',
      positionMatrixName = 'uPositionMatrix',
      perspectiveMatrixName = 'uPerspectiveMatrix',
      vertexShaderSource = `
    
        attribute vec4 aVertexPosition;
        attribute vec3 aVertexNormal;
        attribute vec2 aTextureCoordinate;
        
        uniform mat4 ${normalMatrixName};
        uniform mat4 ${rotationMatrixName};
        uniform mat4 ${positionMatrixName};
        uniform mat4 ${perspectiveMatrixName};
        
        varying highp vec2 vTextureCoordinate;
        varying highp vec3 vLighting;
        
        void main() {
          gl_Position = ${perspectiveMatrixName} * ${positionMatrixName} * ${rotationMatrixName} * aVertexPosition;
          vTextureCoordinate = aTextureCoordinate;
          
          highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
          highp vec3 directionalLightColour = vec3(1, 1, 1);
          highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));
          
          highp vec4 transformedNormal = ${normalMatrixName} * vec4(aVertexNormal, 1.0);            
          highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
          
          vLighting = ambientLight + (directionalLightColour * directional);
        }
        
      `,
      fragmentShaderSource = `
        
        varying highp vec2 vTextureCoordinate;
        varying highp vec3 vLighting;
        
        uniform sampler2D uSampler;
  
        void main() {
          highp vec4 texelColour = texture2D(uSampler, vTextureCoordinate);
          
          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);
        }
        
      `;
  
class TextureShader {
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
  
      throw new Error(`Unable to create the texture shader program, '${message}'.`);
    }
  
    return shaderProgram;
  }
}

Object.assign(TextureShader, {
  vertexShaderSource: vertexShaderSource,
  fragmentShaderSource: fragmentShaderSource,
  normalMatrixName: normalMatrixName,
  rotationMatrixName: rotationMatrixName,
  positionMatrixName: positionMatrixName,
  perspectiveMatrixName: perspectiveMatrixName
});

module.exports = TextureShader;

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
