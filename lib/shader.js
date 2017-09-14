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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibm9ybWFsTWF0cml4TmFtZSIsInJvdGF0aW9uTWF0cml4TmFtZSIsInBvc2l0aW9uTWF0cml4TmFtZSIsInBlcnNwZWN0aXZlTWF0cml4TmFtZSIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiU2hhZGVyIiwiY29udGV4dCIsIkxJTktfU1RBVFVTIiwicG5hbWUiLCJzaGFkZXJQcm9ncmFtIiwiY3JlYXRlUHJvZ3JhbSIsInZlcnRleFNoYWRlciIsImNyZWF0ZVZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImxpbmtTdGF0dXMiLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwibWVzc2FnZSIsImdldFByb2dyYW1JbmZvTG9nIiwiRXJyb3IiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIiwiVkVSVEVYX1NIQURFUiIsInR5cGUiLCJjcmVhdGVTaGFkZXIiLCJGUkFHTUVOVF9TSEFERVIiLCJzaGFkZXJTb3VyY2UiLCJDT01QSUxFX1NUQVRVUyIsInNoYWRlciIsImNvbXBpbGVTaGFkZXIiLCJjb21waWxlU3RhdHVzIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLGVBQXpCO0FBQUEsSUFDTUMscUJBQXFCLGlCQUQzQjtBQUFBLElBRU1DLHFCQUFxQixpQkFGM0I7QUFBQSxJQUdNQyx3QkFBd0Isb0JBSDlCO0FBQUEsSUFJTUMsb09BT2lCSixnQkFQakIsZ0NBUWlCQyxrQkFSakIsZ0NBU2lCQyxrQkFUakIsZ0NBVWlCQyxxQkFWakIseU1BaUJvQkEscUJBakJwQixXQWlCK0NELGtCQWpCL0MsV0FpQnVFRCxrQkFqQnZFLDBYQXlCcUNELGdCQXpCckMsa1FBSk47QUFBQSxJQW9DTUssa2lCQXBDTjs7SUF1RE1DLE07Ozs7Ozs7d0NBQ3VCQyxPLEVBQVM7QUFDNUIsVUFBRUMsV0FBRixHQUFrQkQsT0FBbEIsQ0FBRUMsV0FBRjtBQUFBLFVBQ0FDLEtBREEsR0FDUUQsV0FEUjtBQUFBLFVBRUFFLGFBRkEsR0FFZ0JILFFBQVFJLGFBQVIsRUFGaEI7QUFBQSxVQUdBQyxZQUhBLEdBR2VDLG1CQUFtQk4sT0FBbkIsQ0FIZjtBQUFBLFVBSUFPLGNBSkEsR0FJaUJDLHFCQUFxQlIsT0FBckIsQ0FKakI7OztBQU1OQSxjQUFRUyxZQUFSLENBQXFCTixhQUFyQixFQUFvQ0UsWUFBcEM7QUFDQUwsY0FBUVMsWUFBUixDQUFxQk4sYUFBckIsRUFBb0NJLGNBQXBDOztBQUVBUCxjQUFRVSxXQUFSLENBQW9CUCxhQUFwQjs7QUFFQSxVQUFNUSxhQUFhWCxRQUFRWSxtQkFBUixDQUE0QlQsYUFBNUIsRUFBMkNELEtBQTNDLENBQW5COztBQUVBLFVBQUksQ0FBQ1MsVUFBTCxFQUFpQjtBQUNmLFlBQU1FLFVBQVViLFFBQVFjLGlCQUFSLENBQTBCWCxhQUExQixDQUFoQixDQURlLENBQzRDOztBQUUzRCxjQUFNLElBQUlZLEtBQUosNkNBQW1ERixPQUFuRCxTQUFOO0FBQ0Q7O0FBRUQsYUFBT1YsYUFBUDtBQUNEOzs7Ozs7QUFHSGEsT0FBT0MsTUFBUCxDQUFjbEIsTUFBZCxFQUFzQjtBQUNwQkYsc0JBQW9CQSxrQkFEQTtBQUVwQkMsd0JBQXNCQSxvQkFGRjtBQUdwQkwsb0JBQWtCQSxnQkFIRTtBQUlwQkMsc0JBQW9CQSxrQkFKQTtBQUtwQkMsc0JBQW9CQSxrQkFMQTtBQU1wQkMseUJBQXVCQTtBQU5ILENBQXRCOztBQVNBc0IsT0FBT0MsT0FBUCxHQUFpQnBCLE1BQWpCOztBQUVBLFNBQVNPLGtCQUFULENBQTRCTixPQUE1QixFQUFxQztBQUM3QixNQUFFb0IsYUFBRixHQUFvQnBCLE9BQXBCLENBQUVvQixhQUFGO0FBQUEsTUFDQUMsSUFEQSxHQUNPRCxhQURQO0FBQUEsTUFFQWYsWUFGQSxHQUVlaUIsYUFBYUQsSUFBYixFQUFtQnhCLGtCQUFuQixFQUF1Q0csT0FBdkMsQ0FGZjs7O0FBSU4sU0FBT0ssWUFBUDtBQUNEOztBQUVELFNBQVNHLG9CQUFULENBQThCUixPQUE5QixFQUF1QztBQUMvQixNQUFFdUIsZUFBRixHQUFzQnZCLE9BQXRCLENBQUV1QixlQUFGO0FBQUEsTUFDQUYsSUFEQSxHQUNPRSxlQURQO0FBQUEsTUFFQWxCLFlBRkEsR0FFZWlCLGFBQWFELElBQWIsRUFBbUJ2QixvQkFBbkIsRUFBeUNFLE9BQXpDLENBRmY7OztBQUlOLFNBQU9LLFlBQVA7QUFDRDs7QUFFRCxTQUFTaUIsWUFBVCxDQUFzQkQsSUFBdEIsRUFBNEJHLFlBQTVCLEVBQTBDeEIsT0FBMUMsRUFBbUQ7QUFDM0MsTUFBRXlCLGNBQUYsR0FBcUJ6QixPQUFyQixDQUFFeUIsY0FBRjtBQUFBLE1BQ0F2QixLQURBLEdBQ1F1QixjQURSO0FBQUEsTUFFQUMsTUFGQSxHQUVTMUIsUUFBUXNCLFlBQVIsQ0FBcUJELElBQXJCLENBRlQ7OztBQUlOckIsVUFBUXdCLFlBQVIsQ0FBcUJFLE1BQXJCLEVBQTZCRixZQUE3Qjs7QUFFQXhCLFVBQVEyQixhQUFSLENBQXNCRCxNQUF0Qjs7QUFFQSxNQUFNRSxnQkFBZ0I1QixRQUFRNkIsa0JBQVIsQ0FBMkJILE1BQTNCLEVBQW1DeEIsS0FBbkMsQ0FBdEI7O0FBRUEsTUFBSSxDQUFDMEIsYUFBTCxFQUFvQjtBQUNsQixVQUFNLElBQUliLEtBQUosZ0NBQU47QUFDRDs7QUFFRCxTQUFPVyxNQUFQO0FBQ0QiLCJmaWxlIjoic2hhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBub3JtYWxNYXRyaXhOYW1lID0gJ3VOb3JtYWxNYXRyaXgnLFxuICAgICAgcm90YXRpb25NYXRyaXhOYW1lID0gJ3VSb3RhdGlvbk1hdHJpeCcsXG4gICAgICBwb3NpdGlvbk1hdHJpeE5hbWUgPSAndVBvc2l0aW9uTWF0cml4JyxcbiAgICAgIHBlcnNwZWN0aXZlTWF0cml4TmFtZSA9ICd1UGVyc3BlY3RpdmVNYXRyaXgnLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCBhVmVydGV4UG9zaXRpb247XG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0IGFWZXJ0ZXhDb2xvdXI7XG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzIGFWZXJ0ZXhOb3JtYWw7XG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke25vcm1hbE1hdHJpeE5hbWV9O1xuICAgICAgICB1bmlmb3JtIG1hdDQgJHtyb3RhdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICB1bmlmb3JtIG1hdDQgJHtwb3NpdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICB1bmlmb3JtIG1hdDQgJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9ICR7cGVyc3BlY3RpdmVNYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25NYXRyaXhOYW1lfSAqIGFWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB2Q29sb3VyID0gYVZlcnRleENvbG91cjtcbiAgICAgICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSBhVGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgICAgXG4gICAgICAgICAgaGlnaHAgdmVjMyBhbWJpZW50TGlnaHQgPSB2ZWMzKDAuMywgMC4zLCAwLjMpO1xuICAgICAgICAgIGhpZ2hwIHZlYzMgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSk7XG4gICAgICAgICAgaGlnaHAgdmVjMyBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDAuODUsIDAuOCwgMC43NSkpO1xuICAgICAgICAgIFxuICAgICAgICAgIGhpZ2hwIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbE1hdHJpeE5hbWV9ICogdmVjNChhVmVydGV4Tm9ybWFsLCAxLjApOyAgICAgICAgICAgIFxuICAgICAgICAgIGhpZ2hwIGZsb2F0IGRpcmVjdGlvbmFsID0gbWF4KGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSwgMC4wKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2TGlnaHRpbmcgPSBhbWJpZW50TGlnaHQgKyAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcbiAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBoaWdocCB2ZWM0IHRleGVsQ29sb3VyID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIGdsX0ZyYWdDb2xvciA9IHZDb2xvdXI7XG4gICAgICAgICAgLy8gZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWxDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB0ZXhlbENvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG4gIFxuY2xhc3MgU2hhZGVyIHtcbiAgc3RhdGljIGNyZWF0ZVNoYWRlclByb2dyYW0oY29udGV4dCkge1xuICAgIGNvbnN0IHsgTElOS19TVEFUVVMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcG5hbWUgPSBMSU5LX1NUQVRVUyxcbiAgICAgICAgICBzaGFkZXJQcm9ncmFtID0gY29udGV4dC5jcmVhdGVQcm9ncmFtKCksXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlVmVydGV4U2hhZGVyKGNvbnRleHQpLFxuICAgICAgICAgIGZyYWdtZW50U2hhZGVyID0gY3JlYXRlRnJhZ21lbnRTaGFkZXIoY29udGV4dCk7XG4gIFxuICAgIGNvbnRleHQuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgICBjb250ZXh0LmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICBcbiAgICBjb25zdCBsaW5rU3RhdHVzID0gY29udGV4dC5nZXRQcm9ncmFtUGFyYW1ldGVyKHNoYWRlclByb2dyYW0sIHBuYW1lKTtcbiAgXG4gICAgaWYgKCFsaW5rU3RhdHVzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gY29udGV4dC5nZXRQcm9ncmFtSW5mb0xvZyhzaGFkZXJQcm9ncmFtKTsgIC8vL1xuICBcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyIHByb2dyYW0sICcke21lc3NhZ2V9Jy5gKTtcbiAgICB9XG4gIFxuICAgIHJldHVybiBzaGFkZXJQcm9ncmFtO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2hhZGVyLCB7XG4gIHZlcnRleFNoYWRlclNvdXJjZTogdmVydGV4U2hhZGVyU291cmNlLFxuICBmcmFnbWVudFNoYWRlclNvdXJjZTogZnJhZ21lbnRTaGFkZXJTb3VyY2UsXG4gIG5vcm1hbE1hdHJpeE5hbWU6IG5vcm1hbE1hdHJpeE5hbWUsXG4gIHJvdGF0aW9uTWF0cml4TmFtZTogcm90YXRpb25NYXRyaXhOYW1lLFxuICBwb3NpdGlvbk1hdHJpeE5hbWU6IHBvc2l0aW9uTWF0cml4TmFtZSxcbiAgcGVyc3BlY3RpdmVNYXRyaXhOYW1lOiBwZXJzcGVjdGl2ZU1hdHJpeE5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYWRlcjtcblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKGNvbnRleHQpIHtcbiAgY29uc3QgeyBWRVJURVhfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRTaGFkZXIoY29udGV4dCkge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IGNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IGNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIGNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICBjb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuYCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuIl19