'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vertexShaderSource = '\n    \n        attribute vec4 aVertexPosition;\n        attribute vec4 aVertexColour;\n        attribute vec3 aVertexNormal;\n        attribute vec2 aTextureCoordinate;\n        \n        uniform mat4 uNormalMatrix;\n        uniform mat4 uRotationMatrix;\n        uniform mat4 uPositionMatrix;\n        uniform mat4 uPerspectiveMatrix;\n        \n        varying lowp vec4 vColour;\n        varying highp vec2 vTextureCoordinate;\n        varying highp vec3 vLighting;\n        \n        void main() {\n          gl_Position = uPerspectiveMatrix * uPositionMatrix * uRotationMatrix * aVertexPosition;\n          vColour = aVertexColour;\n          vTextureCoordinate = aTextureCoordinate;\n          \n          highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);\n          highp vec3 directionalLightColour = vec3(1, 1, 1);\n          highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n          highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);            \n          highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          vLighting = ambientLight + (directionalLightColour * directional);\n        }\n        \n      ',
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
  fragmentShaderSource: fragmentShaderSource
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJTaGFkZXIiLCJjb250ZXh0IiwiTElOS19TVEFUVVMiLCJwbmFtZSIsInNoYWRlclByb2dyYW0iLCJjcmVhdGVQcm9ncmFtIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlVmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVGcmFnbWVudFNoYWRlciIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwibGlua1N0YXR1cyIsImdldFByb2dyYW1QYXJhbWV0ZXIiLCJtZXNzYWdlIiwiZ2V0UHJvZ3JhbUluZm9Mb2ciLCJFcnJvciIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJWRVJURVhfU0hBREVSIiwidHlwZSIsImNyZWF0ZVNoYWRlciIsIkZSQUdNRU5UX1NIQURFUiIsInNoYWRlclNvdXJjZSIsIkNPTVBJTEVfU1RBVFVTIiwic2hhZGVyIiwiY29tcGlsZVNoYWRlciIsImNvbXBpbGVTdGF0dXMiLCJnZXRTaGFkZXJQYXJhbWV0ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSx5dENBQU47QUFBQSxJQWdDTUMsa2lCQWhDTjs7SUFtRE1DLE07Ozs7Ozs7d0NBQ3VCQyxPLEVBQVM7QUFDNUIsVUFBRUMsV0FBRixHQUFrQkQsT0FBbEIsQ0FBRUMsV0FBRjtBQUFBLFVBQ0FDLEtBREEsR0FDUUQsV0FEUjtBQUFBLFVBRUFFLGFBRkEsR0FFZ0JILFFBQVFJLGFBQVIsRUFGaEI7QUFBQSxVQUdBQyxZQUhBLEdBR2VDLG1CQUFtQk4sT0FBbkIsQ0FIZjtBQUFBLFVBSUFPLGNBSkEsR0FJaUJDLHFCQUFxQlIsT0FBckIsQ0FKakI7OztBQU1OQSxjQUFRUyxZQUFSLENBQXFCTixhQUFyQixFQUFvQ0UsWUFBcEM7QUFDQUwsY0FBUVMsWUFBUixDQUFxQk4sYUFBckIsRUFBb0NJLGNBQXBDOztBQUVBUCxjQUFRVSxXQUFSLENBQW9CUCxhQUFwQjs7QUFFQSxVQUFNUSxhQUFhWCxRQUFRWSxtQkFBUixDQUE0QlQsYUFBNUIsRUFBMkNELEtBQTNDLENBQW5COztBQUVBLFVBQUksQ0FBQ1MsVUFBTCxFQUFpQjtBQUNmLFlBQU1FLFVBQVViLFFBQVFjLGlCQUFSLENBQTBCWCxhQUExQixDQUFoQixDQURlLENBQzRDOztBQUUzRCxjQUFNLElBQUlZLEtBQUosNkNBQW1ERixPQUFuRCxTQUFOO0FBQ0Q7O0FBRUQsYUFBT1YsYUFBUDtBQUNEOzs7Ozs7QUFHSGEsT0FBT0MsTUFBUCxDQUFjbEIsTUFBZCxFQUFzQjtBQUNwQkYsc0JBQW9CQSxrQkFEQTtBQUVwQkMsd0JBQXNCQTtBQUZGLENBQXRCOztBQUtBb0IsT0FBT0MsT0FBUCxHQUFpQnBCLE1BQWpCOztBQUVBLFNBQVNPLGtCQUFULENBQTRCTixPQUE1QixFQUFxQztBQUM3QixNQUFFb0IsYUFBRixHQUFvQnBCLE9BQXBCLENBQUVvQixhQUFGO0FBQUEsTUFDQUMsSUFEQSxHQUNPRCxhQURQO0FBQUEsTUFFQWYsWUFGQSxHQUVlaUIsYUFBYUQsSUFBYixFQUFtQnhCLGtCQUFuQixFQUF1Q0csT0FBdkMsQ0FGZjs7O0FBSU4sU0FBT0ssWUFBUDtBQUNEOztBQUVELFNBQVNHLG9CQUFULENBQThCUixPQUE5QixFQUF1QztBQUMvQixNQUFFdUIsZUFBRixHQUFzQnZCLE9BQXRCLENBQUV1QixlQUFGO0FBQUEsTUFDQUYsSUFEQSxHQUNPRSxlQURQO0FBQUEsTUFFQWxCLFlBRkEsR0FFZWlCLGFBQWFELElBQWIsRUFBbUJ2QixvQkFBbkIsRUFBeUNFLE9BQXpDLENBRmY7OztBQUlOLFNBQU9LLFlBQVA7QUFDRDs7QUFFRCxTQUFTaUIsWUFBVCxDQUFzQkQsSUFBdEIsRUFBNEJHLFlBQTVCLEVBQTBDeEIsT0FBMUMsRUFBbUQ7QUFDM0MsTUFBRXlCLGNBQUYsR0FBcUJ6QixPQUFyQixDQUFFeUIsY0FBRjtBQUFBLE1BQ0F2QixLQURBLEdBQ1F1QixjQURSO0FBQUEsTUFFQUMsTUFGQSxHQUVTMUIsUUFBUXNCLFlBQVIsQ0FBcUJELElBQXJCLENBRlQ7OztBQUlOckIsVUFBUXdCLFlBQVIsQ0FBcUJFLE1BQXJCLEVBQTZCRixZQUE3Qjs7QUFFQXhCLFVBQVEyQixhQUFSLENBQXNCRCxNQUF0Qjs7QUFFQSxNQUFNRSxnQkFBZ0I1QixRQUFRNkIsa0JBQVIsQ0FBMkJILE1BQTNCLEVBQW1DeEIsS0FBbkMsQ0FBdEI7O0FBRUEsTUFBSSxDQUFDMEIsYUFBTCxFQUFvQjtBQUNsQixVQUFNLElBQUliLEtBQUosZ0NBQU47QUFDRDs7QUFFRCxTQUFPVyxNQUFQO0FBQ0QiLCJmaWxlIjoic2hhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0IGFWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgYVZlcnRleENvbG91cjtcbiAgICAgICAgYXR0cmlidXRlIHZlYzMgYVZlcnRleE5vcm1hbDtcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0IHVOb3JtYWxNYXRyaXg7XG4gICAgICAgIHVuaWZvcm0gbWF0NCB1Um90YXRpb25NYXRyaXg7XG4gICAgICAgIHVuaWZvcm0gbWF0NCB1UG9zaXRpb25NYXRyaXg7XG4gICAgICAgIHVuaWZvcm0gbWF0NCB1UGVyc3BlY3RpdmVNYXRyaXg7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gdVBlcnNwZWN0aXZlTWF0cml4ICogdVBvc2l0aW9uTWF0cml4ICogdVJvdGF0aW9uTWF0cml4ICogYVZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIHZDb2xvdXIgPSBhVmVydGV4Q29sb3VyO1xuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9IGFUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgICBcbiAgICAgICAgICBoaWdocCB2ZWMzIGFtYmllbnRMaWdodCA9IHZlYzMoMC4zLCAwLjMsIDAuMyk7XG4gICAgICAgICAgaGlnaHAgdmVjMyBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKTtcbiAgICAgICAgICBoaWdocCB2ZWMzIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMC44NSwgMC44LCAwLjc1KSk7XG4gICAgICAgICAgXG4gICAgICAgICAgaGlnaHAgdmVjNCB0cmFuc2Zvcm1lZE5vcm1hbCA9IHVOb3JtYWxNYXRyaXggKiB2ZWM0KGFWZXJ0ZXhOb3JtYWwsIDEuMCk7ICAgICAgICAgICAgXG4gICAgICAgICAgaGlnaHAgZmxvYXQgZGlyZWN0aW9uYWwgPSBtYXgoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpLCAwLjApO1xuICAgICAgICAgIFxuICAgICAgICAgIHZMaWdodGluZyA9IGFtYmllbnRMaWdodCArIChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xuICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGhpZ2hwIHZlYzQgdGV4ZWxDb2xvdXIgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gZ2xfRnJhZ0NvbG9yID0gdkNvbG91cjtcbiAgICAgICAgICAvLyBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXhlbENvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHRleGVsQ29sb3VyLmEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYDtcbiAgXG5jbGFzcyBTaGFkZXIge1xuICBzdGF0aWMgY3JlYXRlU2hhZGVyUHJvZ3JhbShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBMSU5LX1NUQVRVUyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwbmFtZSA9IExJTktfU1RBVFVTLFxuICAgICAgICAgIHNoYWRlclByb2dyYW0gPSBjb250ZXh0LmNyZWF0ZVByb2dyYW0oKSxcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVWZXJ0ZXhTaGFkZXIoY29udGV4dCksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVGcmFnbWVudFNoYWRlcihjb250ZXh0KTtcbiAgXG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICAgIGNvbnRleHQubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gIFxuICAgIGNvbnN0IGxpbmtTdGF0dXMgPSBjb250ZXh0LmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgcG5hbWUpO1xuICBcbiAgICBpZiAoIWxpbmtTdGF0dXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBjb250ZXh0LmdldFByb2dyYW1JbmZvTG9nKHNoYWRlclByb2dyYW0pOyAgLy8vXG4gIFxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIgcHJvZ3JhbSwgJyR7bWVzc2FnZX0nLmApO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHNoYWRlclByb2dyYW07XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTaGFkZXIsIHtcbiAgdmVydGV4U2hhZGVyU291cmNlOiB2ZXJ0ZXhTaGFkZXJTb3VyY2UsXG4gIGZyYWdtZW50U2hhZGVyU291cmNlOiBmcmFnbWVudFNoYWRlclNvdXJjZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhZGVyO1xuXG5mdW5jdGlvbiBjcmVhdGVWZXJ0ZXhTaGFkZXIoY29udGV4dCkge1xuICBjb25zdCB7IFZFUlRFWF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihjb250ZXh0KSB7XG4gIGNvbnN0IHsgRlJBR01FTlRfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDT01QSUxFX1NUQVRVUyB9ID0gY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gY29udGV4dC5jcmVhdGVTaGFkZXIodHlwZSk7XG5cbiAgY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIGNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSBjb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHBuYW1lKTtcblxuICBpZiAoIWNvbXBpbGVTdGF0dXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5gKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG4iXX0=