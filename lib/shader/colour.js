'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var normalMatrixName = 'uNormalMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    perspectiveMatrixName = 'uPerspectiveMatrix',
    vertexShaderSource = '\n    \n        attribute vec4 aVertexPosition;\n        attribute vec4 aVertexColour;\n        attribute vec3 aVertexNormal;\n\n        uniform mat4 ' + normalMatrixName + ';\n        uniform mat4 ' + rotationMatrixName + ';\n        uniform mat4 ' + positionMatrixName + ';\n        uniform mat4 ' + perspectiveMatrixName + ';\n        \n        varying lowp vec4 vColour;\n        varying highp vec3 vLighting;\n        \n        void main() {\n          gl_Position = ' + perspectiveMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * aVertexPosition;\n\n          highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);\n          highp vec3 directionalLightColour = vec3(1, 1, 1);\n          highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n          highp vec4 transformedNormal = ' + normalMatrixName + ' * vec4(aVertexNormal, 1.0);            \n          highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          vLighting = ambientLight + (directionalLightColour * directional);\n\n          vColour = aVertexColour;          \n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        varying lowp vec4 vColour;\n        varying highp vec3 vLighting;\n  \n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ';

var ColourShader = function () {
  function ColourShader() {
    _classCallCheck(this, ColourShader);
  }

  _createClass(ColourShader, null, [{
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

        throw new Error('Unable to create the colour shader program, \'' + message + '\'.');
      }

      return shaderProgram;
    }
  }]);

  return ColourShader;
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbIm5vcm1hbE1hdHJpeE5hbWUiLCJyb3RhdGlvbk1hdHJpeE5hbWUiLCJwb3NpdGlvbk1hdHJpeE5hbWUiLCJwZXJzcGVjdGl2ZU1hdHJpeE5hbWUiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIkNvbG91clNoYWRlciIsImNvbnRleHQiLCJMSU5LX1NUQVRVUyIsInBuYW1lIiwic2hhZGVyUHJvZ3JhbSIsImNyZWF0ZVByb2dyYW0iLCJ2ZXJ0ZXhTaGFkZXIiLCJjcmVhdGVWZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsImNyZWF0ZUZyYWdtZW50U2hhZGVyIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJsaW5rU3RhdHVzIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIm1lc3NhZ2UiLCJnZXRQcm9ncmFtSW5mb0xvZyIsIkVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsIlZFUlRFWF9TSEFERVIiLCJ0eXBlIiwiY3JlYXRlU2hhZGVyIiwiRlJBR01FTlRfU0hBREVSIiwic2hhZGVyU291cmNlIiwiQ09NUElMRV9TVEFUVVMiLCJzaGFkZXIiLCJjb21waWxlU2hhZGVyIiwiY29tcGlsZVN0YXR1cyIsImdldFNoYWRlclBhcmFtZXRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixlQUF6QjtBQUFBLElBQ01DLHFCQUFxQixpQkFEM0I7QUFBQSxJQUVNQyxxQkFBcUIsaUJBRjNCO0FBQUEsSUFHTUMsd0JBQXdCLG9CQUg5QjtBQUFBLElBSU1DLGdMQU1pQkosZ0JBTmpCLGdDQU9pQkMsa0JBUGpCLGdDQVFpQkMsa0JBUmpCLGdDQVNpQkMscUJBVGpCLHlKQWVvQkEscUJBZnBCLFdBZStDRCxrQkFmL0MsV0FldUVELGtCQWZ2RSx3UkFxQnFDRCxnQkFyQnJDLGtUQUpOO0FBQUEsSUFrQ01LLDBPQWxDTjs7SUE2Q01DLFk7Ozs7Ozs7d0NBQ3VCQyxPLEVBQVM7QUFDNUIsVUFBRUMsV0FBRixHQUFrQkQsT0FBbEIsQ0FBRUMsV0FBRjtBQUFBLFVBQ0FDLEtBREEsR0FDUUQsV0FEUjtBQUFBLFVBRUFFLGFBRkEsR0FFZ0JILFFBQVFJLGFBQVIsRUFGaEI7QUFBQSxVQUdBQyxZQUhBLEdBR2VDLG1CQUFtQk4sT0FBbkIsQ0FIZjtBQUFBLFVBSUFPLGNBSkEsR0FJaUJDLHFCQUFxQlIsT0FBckIsQ0FKakI7OztBQU1OQSxjQUFRUyxZQUFSLENBQXFCTixhQUFyQixFQUFvQ0UsWUFBcEM7QUFDQUwsY0FBUVMsWUFBUixDQUFxQk4sYUFBckIsRUFBb0NJLGNBQXBDOztBQUVBUCxjQUFRVSxXQUFSLENBQW9CUCxhQUFwQjs7QUFFQSxVQUFNUSxhQUFhWCxRQUFRWSxtQkFBUixDQUE0QlQsYUFBNUIsRUFBMkNELEtBQTNDLENBQW5COztBQUVBLFVBQUksQ0FBQ1MsVUFBTCxFQUFpQjtBQUNmLFlBQU1FLFVBQVViLFFBQVFjLGlCQUFSLENBQTBCWCxhQUExQixDQUFoQixDQURlLENBQzRDOztBQUUzRCxjQUFNLElBQUlZLEtBQUosb0RBQTBERixPQUExRCxTQUFOO0FBQ0Q7O0FBRUQsYUFBT1YsYUFBUDtBQUNEOzs7Ozs7QUFHSGEsT0FBT0MsTUFBUCxDQUFjbEIsWUFBZCxFQUE0QjtBQUMxQkYsc0JBQW9CQSxrQkFETTtBQUUxQkMsd0JBQXNCQSxvQkFGSTtBQUcxQkwsb0JBQWtCQSxnQkFIUTtBQUkxQkMsc0JBQW9CQSxrQkFKTTtBQUsxQkMsc0JBQW9CQSxrQkFMTTtBQU0xQkMseUJBQXVCQTtBQU5HLENBQTVCOztBQVNBc0IsT0FBT0MsT0FBUCxHQUFpQnBCLFlBQWpCOztBQUVBLFNBQVNPLGtCQUFULENBQTRCTixPQUE1QixFQUFxQztBQUM3QixNQUFFb0IsYUFBRixHQUFvQnBCLE9BQXBCLENBQUVvQixhQUFGO0FBQUEsTUFDQUMsSUFEQSxHQUNPRCxhQURQO0FBQUEsTUFFQWYsWUFGQSxHQUVlaUIsYUFBYUQsSUFBYixFQUFtQnhCLGtCQUFuQixFQUF1Q0csT0FBdkMsQ0FGZjs7O0FBSU4sU0FBT0ssWUFBUDtBQUNEOztBQUVELFNBQVNHLG9CQUFULENBQThCUixPQUE5QixFQUF1QztBQUMvQixNQUFFdUIsZUFBRixHQUFzQnZCLE9BQXRCLENBQUV1QixlQUFGO0FBQUEsTUFDQUYsSUFEQSxHQUNPRSxlQURQO0FBQUEsTUFFQWxCLFlBRkEsR0FFZWlCLGFBQWFELElBQWIsRUFBbUJ2QixvQkFBbkIsRUFBeUNFLE9BQXpDLENBRmY7OztBQUlOLFNBQU9LLFlBQVA7QUFDRDs7QUFFRCxTQUFTaUIsWUFBVCxDQUFzQkQsSUFBdEIsRUFBNEJHLFlBQTVCLEVBQTBDeEIsT0FBMUMsRUFBbUQ7QUFDM0MsTUFBRXlCLGNBQUYsR0FBcUJ6QixPQUFyQixDQUFFeUIsY0FBRjtBQUFBLE1BQ0F2QixLQURBLEdBQ1F1QixjQURSO0FBQUEsTUFFQUMsTUFGQSxHQUVTMUIsUUFBUXNCLFlBQVIsQ0FBcUJELElBQXJCLENBRlQ7OztBQUlOckIsVUFBUXdCLFlBQVIsQ0FBcUJFLE1BQXJCLEVBQTZCRixZQUE3Qjs7QUFFQXhCLFVBQVEyQixhQUFSLENBQXNCRCxNQUF0Qjs7QUFFQSxNQUFNRSxnQkFBZ0I1QixRQUFRNkIsa0JBQVIsQ0FBMkJILE1BQTNCLEVBQW1DeEIsS0FBbkMsQ0FBdEI7O0FBRUEsTUFBSSxDQUFDMEIsYUFBTCxFQUFvQjtBQUNsQixVQUFNLElBQUliLEtBQUosZ0NBQU47QUFDRDs7QUFFRCxTQUFPVyxNQUFQO0FBQ0QiLCJmaWxlIjoiY29sb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBub3JtYWxNYXRyaXhOYW1lID0gJ3VOb3JtYWxNYXRyaXgnLFxuICAgICAgcm90YXRpb25NYXRyaXhOYW1lID0gJ3VSb3RhdGlvbk1hdHJpeCcsXG4gICAgICBwb3NpdGlvbk1hdHJpeE5hbWUgPSAndVBvc2l0aW9uTWF0cml4JyxcbiAgICAgIHBlcnNwZWN0aXZlTWF0cml4TmFtZSA9ICd1UGVyc3BlY3RpdmVNYXRyaXgnLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCBhVmVydGV4UG9zaXRpb247XG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0IGFWZXJ0ZXhDb2xvdXI7XG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzIGFWZXJ0ZXhOb3JtYWw7XG5cbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsTWF0cml4TmFtZX07XG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3JvdGF0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3Bvc2l0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbk1hdHJpeE5hbWV9ICogYVZlcnRleFBvc2l0aW9uO1xuXG4gICAgICAgICAgaGlnaHAgdmVjMyBhbWJpZW50TGlnaHQgPSB2ZWMzKDAuMywgMC4zLCAwLjMpO1xuICAgICAgICAgIGhpZ2hwIHZlYzMgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSk7XG4gICAgICAgICAgaGlnaHAgdmVjMyBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDAuODUsIDAuOCwgMC43NSkpO1xuICAgICAgICAgIFxuICAgICAgICAgIGhpZ2hwIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbE1hdHJpeE5hbWV9ICogdmVjNChhVmVydGV4Tm9ybWFsLCAxLjApOyAgICAgICAgICAgIFxuICAgICAgICAgIGhpZ2hwIGZsb2F0IGRpcmVjdGlvbmFsID0gbWF4KGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSwgMC4wKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2TGlnaHRpbmcgPSBhbWJpZW50TGlnaHQgKyAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcblxuICAgICAgICAgIHZDb2xvdXIgPSBhVmVydGV4Q29sb3VyOyAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3VyLnJnYiAqIHZMaWdodGluZywgdkNvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG4gIFxuY2xhc3MgQ29sb3VyU2hhZGVyIHtcbiAgc3RhdGljIGNyZWF0ZVNoYWRlclByb2dyYW0oY29udGV4dCkge1xuICAgIGNvbnN0IHsgTElOS19TVEFUVVMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcG5hbWUgPSBMSU5LX1NUQVRVUyxcbiAgICAgICAgICBzaGFkZXJQcm9ncmFtID0gY29udGV4dC5jcmVhdGVQcm9ncmFtKCksXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlVmVydGV4U2hhZGVyKGNvbnRleHQpLFxuICAgICAgICAgIGZyYWdtZW50U2hhZGVyID0gY3JlYXRlRnJhZ21lbnRTaGFkZXIoY29udGV4dCk7XG4gIFxuICAgIGNvbnRleHQuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgICBjb250ZXh0LmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICBcbiAgICBjb25zdCBsaW5rU3RhdHVzID0gY29udGV4dC5nZXRQcm9ncmFtUGFyYW1ldGVyKHNoYWRlclByb2dyYW0sIHBuYW1lKTtcbiAgXG4gICAgaWYgKCFsaW5rU3RhdHVzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gY29udGV4dC5nZXRQcm9ncmFtSW5mb0xvZyhzaGFkZXJQcm9ncmFtKTsgIC8vL1xuICBcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgY29sb3VyIHNoYWRlciBwcm9ncmFtLCAnJHttZXNzYWdlfScuYCk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gc2hhZGVyUHJvZ3JhbTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENvbG91clNoYWRlciwge1xuICB2ZXJ0ZXhTaGFkZXJTb3VyY2U6IHZlcnRleFNoYWRlclNvdXJjZSxcbiAgZnJhZ21lbnRTaGFkZXJTb3VyY2U6IGZyYWdtZW50U2hhZGVyU291cmNlLFxuICBub3JtYWxNYXRyaXhOYW1lOiBub3JtYWxNYXRyaXhOYW1lLFxuICByb3RhdGlvbk1hdHJpeE5hbWU6IHJvdGF0aW9uTWF0cml4TmFtZSxcbiAgcG9zaXRpb25NYXRyaXhOYW1lOiBwb3NpdGlvbk1hdHJpeE5hbWUsXG4gIHBlcnNwZWN0aXZlTWF0cml4TmFtZTogcGVyc3BlY3RpdmVNYXRyaXhOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJTaGFkZXI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcihjb250ZXh0KSB7XG4gIGNvbnN0IHsgVkVSVEVYX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgdHlwZSA9IFZFUlRFWF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGNvbnRleHQpIHtcbiAgY29uc3QgeyBGUkFHTUVOVF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0eXBlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICBjb25zdCB7IENPTVBJTEVfU1RBVFVTIH0gPSBjb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSBjb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICBjb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IGNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLmApO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cbiJdfQ==