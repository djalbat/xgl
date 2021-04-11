"use strict";

const fragmentShaderSource = new String(`
        
        varying lowp vec4 vColour;
              
        varying highp vec3 vLighting;

        void main() {
          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);
        }
        
      `);

export default fragmentShaderSource;
