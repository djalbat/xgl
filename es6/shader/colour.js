'use strict';

const Shader = require('../shader');

const normalMatrixName = 'uNormalMatrix',
      rotationMatrixName = 'uRotationMatrix',
      positionMatrixName = 'uPositionMatrix',
      perspectiveMatrixName = 'uPerspectiveMatrix',
      vertexShaderSource = `
    
        attribute vec4 aVertexPosition;
        attribute vec3 aVertexNormal;
        attribute vec4 aVertexColour;


        uniform mat4 ${normalMatrixName};
        uniform mat4 ${rotationMatrixName};
        uniform mat4 ${positionMatrixName};
        uniform mat4 ${perspectiveMatrixName};
        
        varying lowp vec4 vColour;
        
        varying highp vec3 vLighting;
        
        highp vec3 calculateLighting() {
          highp vec3 lighting;
        
          highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
          highp vec3 directionalLightColour = vec3(1, 1, 1);
          highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));
          
          highp vec4 transformedNormal = ${normalMatrixName} * vec4(aVertexNormal, 1.0);            
          highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
          
          lighting = ambientLight + (directionalLightColour * directional);
          
          return lighting;
        }
        
        vec4 calculatePosition() {
          vec4 position;
          
          position = ${perspectiveMatrixName} * ${positionMatrixName} * ${rotationMatrixName} * aVertexPosition;
          
          return position;
        }
        
        void main() {
          gl_Position = calculatePosition();

          vColour = aVertexColour;          
          
          vLighting = calculateLighting();
        }
        
      `,
      fragmentShaderSource = `
        
        varying lowp vec4 vColour;
        
        
        varying highp vec3 vLighting;
  
  
  
        void main() {
  
  
  
          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);
        }
        
      `;
  
class ColourShader extends Shader {
  static fromNothing(context) { return Shader.fromVertexShaderSourceAndFragmentShaderSource(ColourShader, vertexShaderSource, fragmentShaderSource, context); }
}

module.exports = ColourShader;
