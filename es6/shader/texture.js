'use strict';

const Shader = require('../shader');

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

class TextureShader extends Shader {
  static fromNothing(context) { return Shader.fromVertexShaderSourceAndFragmentShaderSource(TextureShader, vertexShaderSource, fragmentShaderSource, context); }
}

module.exports = TextureShader;
