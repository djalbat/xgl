'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var normalMatrixName = 'uNormalMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    perspectiveMatrixName = 'uPerspectiveMatrix',
    vertexShaderSource = '\n    \n        attribute vec4 aVertexPosition;\n        attribute vec4 aVertexColour;\n        attribute vec3 aVertexNormal;\n        attribute vec2 aTextureCoordinate;\n        \n        uniform mat4 ' + normalMatrixName + ';\n        uniform mat4 ' + rotationMatrixName + ';\n        uniform mat4 ' + positionMatrixName + ';\n        uniform mat4 ' + perspectiveMatrixName + ';\n        \n        varying lowp vec4 vColour;\n        varying highp vec2 vTextureCoordinate;\n        varying highp vec3 vLighting;\n        \n        void main() {\n          gl_Position = ' + perspectiveMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * aVertexPosition;\n          vColour = aVertexColour;\n          vTextureCoordinate = aTextureCoordinate;\n          \n          highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);\n          highp vec3 directionalLightColour = vec3(1, 1, 1);\n          highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n          highp vec4 transformedNormal = ' + normalMatrixName + ' * vec4(aVertexNormal, 1.0);            \n          highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          vLighting = ambientLight + (directionalLightColour * directional);\n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        varying lowp vec4 vColour;\n        varying highp vec2 vTextureCoordinate;\n        varying highp vec3 vLighting;\n        \n        uniform sampler2D uSampler;\n  \n        void main() {\n          highp vec4 texelColour = texture2D(uSampler, vTextureCoordinate);\n          \n          // gl_FragColor = vColour;\n          // gl_FragColor = texture2D(uSampler, vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);\n        }\n        \n      ';

var Shader = function () {
  function Shader() {
    _classCallCheck(this, Shader);
  }

  _createClass(Shader, null, [{
    key: 'createShaderProgram',
    value: function createShaderProgram(context) {
      var LINK_STATUS = context.LINK_STATUS,
          pname = LINK_STATUS,
          shaderProgram = context.createProgram(),
          vertexShader = createVertexShader(context),
          fragmentShader = createFragmentShader(context);


      context.attachShader(shaderProgram, vertexShader);
      context.attachShader(shaderProgram, fragmentShader);

      context.linkProgram(shaderProgram);

      var linkStatus = context.getProgramParameter(shaderProgram, pname);

      if (!linkStatus) {
        var message = context.getProgramInfoLog(shaderProgram); ///

        throw new Error('Unable to create the shader program, \'' + message + '\'.');
      }

      return shaderProgram;
    }
  }]);

  return Shader;
}();

Object.assign(Shader, {
  vertexShaderSource: vertexShaderSource,
  fragmentShaderSource: fragmentShaderSource,
  normalMatrixName: normalMatrixName,
  rotationMatrixName: rotationMatrixName,
  positionMatrixName: positionMatrixName,
  perspectiveMatrixName: perspectiveMatrixName
});

module.exports = Shader;

function createVertexShader(context) {
  var VERTEX_SHADER = context.VERTEX_SHADER,
      type = VERTEX_SHADER,
      vertexShader = createShader(type, vertexShaderSource, context);


  return vertexShader;
}

function createFragmentShader(context) {
  var FRAGMENT_SHADER = context.FRAGMENT_SHADER,
      type = FRAGMENT_SHADER,
      vertexShader = createShader(type, fragmentShaderSource, context);


  return vertexShader;
}

function createShader(type, shaderSource, context) {
  var COMPILE_STATUS = context.COMPILE_STATUS,
      pname = COMPILE_STATUS,
      shader = context.createShader(type);


  context.shaderSource(shader, shaderSource);

  context.compileShader(shader);

  var compileStatus = context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    throw new Error('Unable to create the shader.');
  }

  return shader;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvc2hhZGVyLmpzIl0sIm5hbWVzIjpbIm5vcm1hbE1hdHJpeE5hbWUiLCJyb3RhdGlvbk1hdHJpeE5hbWUiLCJwb3NpdGlvbk1hdHJpeE5hbWUiLCJwZXJzcGVjdGl2ZU1hdHJpeE5hbWUiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIlNoYWRlciIsImNvbnRleHQiLCJMSU5LX1NUQVRVUyIsInBuYW1lIiwic2hhZGVyUHJvZ3JhbSIsImNyZWF0ZVByb2dyYW0iLCJ2ZXJ0ZXhTaGFkZXIiLCJjcmVhdGVWZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsImNyZWF0ZUZyYWdtZW50U2hhZGVyIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJsaW5rU3RhdHVzIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIm1lc3NhZ2UiLCJnZXRQcm9ncmFtSW5mb0xvZyIsIkVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsIlZFUlRFWF9TSEFERVIiLCJ0eXBlIiwiY3JlYXRlU2hhZGVyIiwiRlJBR01FTlRfU0hBREVSIiwic2hhZGVyU291cmNlIiwiQ09NUElMRV9TVEFUVVMiLCJzaGFkZXIiLCJjb21waWxlU2hhZGVyIiwiY29tcGlsZVN0YXR1cyIsImdldFNoYWRlclBhcmFtZXRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixlQUF6QjtBQUFBLElBQ01DLHFCQUFxQixpQkFEM0I7QUFBQSxJQUVNQyxxQkFBcUIsaUJBRjNCO0FBQUEsSUFHTUMsd0JBQXdCLG9CQUg5QjtBQUFBLElBSU1DLG9PQU9pQkosZ0JBUGpCLGdDQVFpQkMsa0JBUmpCLGdDQVNpQkMsa0JBVGpCLGdDQVVpQkMscUJBVmpCLHlNQWlCb0JBLHFCQWpCcEIsV0FpQitDRCxrQkFqQi9DLFdBaUJ1RUQsa0JBakJ2RSwwWEF5QnFDRCxnQkF6QnJDLGtRQUpOO0FBQUEsSUFvQ01LLGtpQkFwQ047O0lBdURNQyxNOzs7Ozs7O3dDQUN1QkMsTyxFQUFTO0FBQzVCLFVBQUVDLFdBQUYsR0FBa0JELE9BQWxCLENBQUVDLFdBQUY7QUFBQSxVQUNBQyxLQURBLEdBQ1FELFdBRFI7QUFBQSxVQUVBRSxhQUZBLEdBRWdCSCxRQUFRSSxhQUFSLEVBRmhCO0FBQUEsVUFHQUMsWUFIQSxHQUdlQyxtQkFBbUJOLE9BQW5CLENBSGY7QUFBQSxVQUlBTyxjQUpBLEdBSWlCQyxxQkFBcUJSLE9BQXJCLENBSmpCOzs7QUFNTkEsY0FBUVMsWUFBUixDQUFxQk4sYUFBckIsRUFBb0NFLFlBQXBDO0FBQ0FMLGNBQVFTLFlBQVIsQ0FBcUJOLGFBQXJCLEVBQW9DSSxjQUFwQzs7QUFFQVAsY0FBUVUsV0FBUixDQUFvQlAsYUFBcEI7O0FBRUEsVUFBTVEsYUFBYVgsUUFBUVksbUJBQVIsQ0FBNEJULGFBQTVCLEVBQTJDRCxLQUEzQyxDQUFuQjs7QUFFQSxVQUFJLENBQUNTLFVBQUwsRUFBaUI7QUFDZixZQUFNRSxVQUFVYixRQUFRYyxpQkFBUixDQUEwQlgsYUFBMUIsQ0FBaEIsQ0FEZSxDQUM0Qzs7QUFFM0QsY0FBTSxJQUFJWSxLQUFKLDZDQUFtREYsT0FBbkQsU0FBTjtBQUNEOztBQUVELGFBQU9WLGFBQVA7QUFDRDs7Ozs7O0FBR0hhLE9BQU9DLE1BQVAsQ0FBY2xCLE1BQWQsRUFBc0I7QUFDcEJGLHNCQUFvQkEsa0JBREE7QUFFcEJDLHdCQUFzQkEsb0JBRkY7QUFHcEJMLG9CQUFrQkEsZ0JBSEU7QUFJcEJDLHNCQUFvQkEsa0JBSkE7QUFLcEJDLHNCQUFvQkEsa0JBTEE7QUFNcEJDLHlCQUF1QkE7QUFOSCxDQUF0Qjs7QUFTQXNCLE9BQU9DLE9BQVAsR0FBaUJwQixNQUFqQjs7QUFFQSxTQUFTTyxrQkFBVCxDQUE0Qk4sT0FBNUIsRUFBcUM7QUFDN0IsTUFBRW9CLGFBQUYsR0FBb0JwQixPQUFwQixDQUFFb0IsYUFBRjtBQUFBLE1BQ0FDLElBREEsR0FDT0QsYUFEUDtBQUFBLE1BRUFmLFlBRkEsR0FFZWlCLGFBQWFELElBQWIsRUFBbUJ4QixrQkFBbkIsRUFBdUNHLE9BQXZDLENBRmY7OztBQUlOLFNBQU9LLFlBQVA7QUFDRDs7QUFFRCxTQUFTRyxvQkFBVCxDQUE4QlIsT0FBOUIsRUFBdUM7QUFDL0IsTUFBRXVCLGVBQUYsR0FBc0J2QixPQUF0QixDQUFFdUIsZUFBRjtBQUFBLE1BQ0FGLElBREEsR0FDT0UsZUFEUDtBQUFBLE1BRUFsQixZQUZBLEdBRWVpQixhQUFhRCxJQUFiLEVBQW1CdkIsb0JBQW5CLEVBQXlDRSxPQUF6QyxDQUZmOzs7QUFJTixTQUFPSyxZQUFQO0FBQ0Q7O0FBRUQsU0FBU2lCLFlBQVQsQ0FBc0JELElBQXRCLEVBQTRCRyxZQUE1QixFQUEwQ3hCLE9BQTFDLEVBQW1EO0FBQzNDLE1BQUV5QixjQUFGLEdBQXFCekIsT0FBckIsQ0FBRXlCLGNBQUY7QUFBQSxNQUNBdkIsS0FEQSxHQUNRdUIsY0FEUjtBQUFBLE1BRUFDLE1BRkEsR0FFUzFCLFFBQVFzQixZQUFSLENBQXFCRCxJQUFyQixDQUZUOzs7QUFJTnJCLFVBQVF3QixZQUFSLENBQXFCRSxNQUFyQixFQUE2QkYsWUFBN0I7O0FBRUF4QixVQUFRMkIsYUFBUixDQUFzQkQsTUFBdEI7O0FBRUEsTUFBTUUsZ0JBQWdCNUIsUUFBUTZCLGtCQUFSLENBQTJCSCxNQUEzQixFQUFtQ3hCLEtBQW5DLENBQXRCOztBQUVBLE1BQUksQ0FBQzBCLGFBQUwsRUFBb0I7QUFDbEIsVUFBTSxJQUFJYixLQUFKLGdDQUFOO0FBQ0Q7O0FBRUQsU0FBT1csTUFBUDtBQUNEIiwiZmlsZSI6InNoYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9ybWFsTWF0cml4TmFtZSA9ICd1Tm9ybWFsTWF0cml4JyxcbiAgICAgIHJvdGF0aW9uTWF0cml4TmFtZSA9ICd1Um90YXRpb25NYXRyaXgnLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gJ3VQb3NpdGlvbk1hdHJpeCcsXG4gICAgICBwZXJzcGVjdGl2ZU1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgYVZlcnRleFBvc2l0aW9uO1xuICAgICAgICBhdHRyaWJ1dGUgdmVjNCBhVmVydGV4Q29sb3VyO1xuICAgICAgICBhdHRyaWJ1dGUgdmVjMyBhVmVydGV4Tm9ybWFsO1xuICAgICAgICBhdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxNYXRyaXhOYW1lfTtcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7cm90YXRpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7cG9zaXRpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7cGVyc3BlY3RpdmVNYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uTWF0cml4TmFtZX0gKiBhVmVydGV4UG9zaXRpb247XG4gICAgICAgICAgdkNvbG91ciA9IGFWZXJ0ZXhDb2xvdXI7XG4gICAgICAgICAgdlRleHR1cmVDb29yZGluYXRlID0gYVRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICAgIFxuICAgICAgICAgIGhpZ2hwIHZlYzMgYW1iaWVudExpZ2h0ID0gdmVjMygwLjMsIDAuMywgMC4zKTtcbiAgICAgICAgICBoaWdocCB2ZWMzIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpO1xuICAgICAgICAgIGhpZ2hwIHZlYzMgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygwLjg1LCAwLjgsIDAuNzUpKTtcbiAgICAgICAgICBcbiAgICAgICAgICBoaWdocCB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gJHtub3JtYWxNYXRyaXhOYW1lfSAqIHZlYzQoYVZlcnRleE5vcm1hbCwgMS4wKTsgICAgICAgICAgICBcbiAgICAgICAgICBoaWdocCBmbG9hdCBkaXJlY3Rpb25hbCA9IG1heChkb3QodHJhbnNmb3JtZWROb3JtYWwueHl6LCBkaXJlY3Rpb25hbFZlY3RvciksIDAuMCk7XG4gICAgICAgICAgXG4gICAgICAgICAgdkxpZ2h0aW5nID0gYW1iaWVudExpZ2h0ICsgKGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgKiBkaXJlY3Rpb25hbCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7XG4gIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgaGlnaHAgdmVjNCB0ZXhlbENvbG91ciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBnbF9GcmFnQ29sb3IgPSB2Q29sb3VyO1xuICAgICAgICAgIC8vIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleGVsQ29sb3VyLnJnYiAqIHZMaWdodGluZywgdGV4ZWxDb2xvdXIuYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgO1xuICBcbmNsYXNzIFNoYWRlciB7XG4gIHN0YXRpYyBjcmVhdGVTaGFkZXJQcm9ncmFtKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IExJTktfU1RBVFVTIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHBuYW1lID0gTElOS19TVEFUVVMsXG4gICAgICAgICAgc2hhZGVyUHJvZ3JhbSA9IGNvbnRleHQuY3JlYXRlUHJvZ3JhbSgpLFxuICAgICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVZlcnRleFNoYWRlcihjb250ZXh0KSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZUZyYWdtZW50U2hhZGVyKGNvbnRleHQpO1xuICBcbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIGNvbnRleHQuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gICAgY29udGV4dC5saW5rUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgXG4gICAgY29uc3QgbGlua1N0YXR1cyA9IGNvbnRleHQuZ2V0UHJvZ3JhbVBhcmFtZXRlcihzaGFkZXJQcm9ncmFtLCBwbmFtZSk7XG4gIFxuICAgIGlmICghbGlua1N0YXR1cykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGNvbnRleHQuZ2V0UHJvZ3JhbUluZm9Mb2coc2hhZGVyUHJvZ3JhbSk7ICAvLy9cbiAgXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlciBwcm9ncmFtLCAnJHttZXNzYWdlfScuYCk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gc2hhZGVyUHJvZ3JhbTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNoYWRlciwge1xuICB2ZXJ0ZXhTaGFkZXJTb3VyY2U6IHZlcnRleFNoYWRlclNvdXJjZSxcbiAgZnJhZ21lbnRTaGFkZXJTb3VyY2U6IGZyYWdtZW50U2hhZGVyU291cmNlLFxuICBub3JtYWxNYXRyaXhOYW1lOiBub3JtYWxNYXRyaXhOYW1lLFxuICByb3RhdGlvbk1hdHJpeE5hbWU6IHJvdGF0aW9uTWF0cml4TmFtZSxcbiAgcG9zaXRpb25NYXRyaXhOYW1lOiBwb3NpdGlvbk1hdHJpeE5hbWUsXG4gIHBlcnNwZWN0aXZlTWF0cml4TmFtZTogcGVyc3BlY3RpdmVNYXRyaXhOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGFkZXI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcihjb250ZXh0KSB7XG4gIGNvbnN0IHsgVkVSVEVYX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgdHlwZSA9IFZFUlRFWF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGNvbnRleHQpIHtcbiAgY29uc3QgeyBGUkFHTUVOVF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0eXBlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICBjb25zdCB7IENPTVBJTEVfU1RBVFVTIH0gPSBjb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSBjb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICBjb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IGNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLmApO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cbiJdfQ==