"use strict";

export const samplerName = "uSampler";

const fragmentShaderSource = new String(`
        
        uniform sampler2D ${samplerName};

        varying highp vec3 vLighting;
                   
        varying highp vec2 vTextureCoordinate;
        
        void main() {
          highp vec4 texelColour = texture2D(${samplerName}, vTextureCoordinate);
          
          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  
        }
        
      `);

export default fragmentShaderSource;
