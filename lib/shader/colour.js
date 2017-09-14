'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var normalMatrixName = 'uNormalMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    perspectiveMatrixName = 'uPerspectiveMatrix',
    vertexShaderSource = '\n    \n        attribute vec4 aVertexPosition;\n        attribute vec3 aVertexNormal;\n        attribute vec4 aVertexColour;\n\n\n        uniform mat4 ' + normalMatrixName + ';\n        uniform mat4 ' + rotationMatrixName + ';\n        uniform mat4 ' + positionMatrixName + ';\n        uniform mat4 ' + perspectiveMatrixName + ';\n        \n        varying lowp vec4 vColour;\n        \n        varying highp vec3 vLighting;\n        \n        highp vec3 calculateLighting() {\n          highp vec3 lighting;\n        \n          highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);\n          highp vec3 directionalLightColour = vec3(1, 1, 1);\n          highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n          highp vec4 transformedNormal = ' + normalMatrixName + ' * vec4(aVertexNormal, 1.0);            \n          highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          lighting = ambientLight + (directionalLightColour * directional);\n          \n          return lighting;\n        }\n        \n        vec4 calculatePosition() {\n          vec4 position;\n          \n          position = ' + perspectiveMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * aVertexPosition;\n          \n          return position;\n        }\n        \n        void main() {\n          gl_Position = calculatePosition();\n\n          vColour = aVertexColour;          \n          \n          vLighting = calculateLighting();\n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        varying lowp vec4 vColour;\n        \n        \n        varying highp vec3 vLighting;\n  \n  \n  \n        void main() {\n  \n  \n  \n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ';

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
    var shaderInfoLog = context.getShaderInfoLog(shader);

    throw new Error('Unable to create the shader.');
  }

  return shader;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbIm5vcm1hbE1hdHJpeE5hbWUiLCJyb3RhdGlvbk1hdHJpeE5hbWUiLCJwb3NpdGlvbk1hdHJpeE5hbWUiLCJwZXJzcGVjdGl2ZU1hdHJpeE5hbWUiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIkNvbG91clNoYWRlciIsImNvbnRleHQiLCJMSU5LX1NUQVRVUyIsInBuYW1lIiwic2hhZGVyUHJvZ3JhbSIsImNyZWF0ZVByb2dyYW0iLCJ2ZXJ0ZXhTaGFkZXIiLCJjcmVhdGVWZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsImNyZWF0ZUZyYWdtZW50U2hhZGVyIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJsaW5rU3RhdHVzIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIm1lc3NhZ2UiLCJnZXRQcm9ncmFtSW5mb0xvZyIsIkVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsIlZFUlRFWF9TSEFERVIiLCJ0eXBlIiwiY3JlYXRlU2hhZGVyIiwiRlJBR01FTlRfU0hBREVSIiwic2hhZGVyU291cmNlIiwiQ09NUElMRV9TVEFUVVMiLCJzaGFkZXIiLCJjb21waWxlU2hhZGVyIiwiY29tcGlsZVN0YXR1cyIsImdldFNoYWRlclBhcmFtZXRlciIsInNoYWRlckluZm9Mb2ciLCJnZXRTaGFkZXJJbmZvTG9nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLGVBQXpCO0FBQUEsSUFDTUMscUJBQXFCLGlCQUQzQjtBQUFBLElBRU1DLHFCQUFxQixpQkFGM0I7QUFBQSxJQUdNQyx3QkFBd0Isb0JBSDlCO0FBQUEsSUFJTUMsa0xBT2lCSixnQkFQakIsZ0NBUWlCQyxrQkFSakIsZ0NBU2lCQyxrQkFUakIsZ0NBVWlCQyxxQkFWakIsaWNBdUJxQ0gsZ0JBdkJyQyxxWUFrQ2lCRyxxQkFsQ2pCLFdBa0M0Q0Qsa0JBbEM1QyxXQWtDb0VELGtCQWxDcEUsK1JBSk47QUFBQSxJQW9ETUksa1JBcEROOztJQXNFTUMsWTs7Ozs7Ozt3Q0FDdUJDLE8sRUFBUztBQUM1QixVQUFFQyxXQUFGLEdBQWtCRCxPQUFsQixDQUFFQyxXQUFGO0FBQUEsVUFDQUMsS0FEQSxHQUNRRCxXQURSO0FBQUEsVUFFQUUsYUFGQSxHQUVnQkgsUUFBUUksYUFBUixFQUZoQjtBQUFBLFVBR0FDLFlBSEEsR0FHZUMsbUJBQW1CTixPQUFuQixDQUhmO0FBQUEsVUFJQU8sY0FKQSxHQUlpQkMscUJBQXFCUixPQUFyQixDQUpqQjs7O0FBTU5BLGNBQVFTLFlBQVIsQ0FBcUJOLGFBQXJCLEVBQW9DRSxZQUFwQztBQUNBTCxjQUFRUyxZQUFSLENBQXFCTixhQUFyQixFQUFvQ0ksY0FBcEM7O0FBRUFQLGNBQVFVLFdBQVIsQ0FBb0JQLGFBQXBCOztBQUVBLFVBQU1RLGFBQWFYLFFBQVFZLG1CQUFSLENBQTRCVCxhQUE1QixFQUEyQ0QsS0FBM0MsQ0FBbkI7O0FBRUEsVUFBSSxDQUFDUyxVQUFMLEVBQWlCO0FBQ2YsWUFBTUUsVUFBVWIsUUFBUWMsaUJBQVIsQ0FBMEJYLGFBQTFCLENBQWhCLENBRGUsQ0FDNEM7O0FBRTNELGNBQU0sSUFBSVksS0FBSixvREFBMERGLE9BQTFELFNBQU47QUFDRDs7QUFFRCxhQUFPVixhQUFQO0FBQ0Q7Ozs7OztBQUdIYSxPQUFPQyxNQUFQLENBQWNsQixZQUFkLEVBQTRCO0FBQzFCRixzQkFBb0JBLGtCQURNO0FBRTFCQyx3QkFBc0JBLG9CQUZJO0FBRzFCTCxvQkFBa0JBLGdCQUhRO0FBSTFCQyxzQkFBb0JBLGtCQUpNO0FBSzFCQyxzQkFBb0JBLGtCQUxNO0FBTTFCQyx5QkFBdUJBO0FBTkcsQ0FBNUI7O0FBU0FzQixPQUFPQyxPQUFQLEdBQWlCcEIsWUFBakI7O0FBRUEsU0FBU08sa0JBQVQsQ0FBNEJOLE9BQTVCLEVBQXFDO0FBQzdCLE1BQUVvQixhQUFGLEdBQW9CcEIsT0FBcEIsQ0FBRW9CLGFBQUY7QUFBQSxNQUNBQyxJQURBLEdBQ09ELGFBRFA7QUFBQSxNQUVBZixZQUZBLEdBRWVpQixhQUFhRCxJQUFiLEVBQW1CeEIsa0JBQW5CLEVBQXVDRyxPQUF2QyxDQUZmOzs7QUFJTixTQUFPSyxZQUFQO0FBQ0Q7O0FBRUQsU0FBU0csb0JBQVQsQ0FBOEJSLE9BQTlCLEVBQXVDO0FBQy9CLE1BQUV1QixlQUFGLEdBQXNCdkIsT0FBdEIsQ0FBRXVCLGVBQUY7QUFBQSxNQUNBRixJQURBLEdBQ09FLGVBRFA7QUFBQSxNQUVBbEIsWUFGQSxHQUVlaUIsYUFBYUQsSUFBYixFQUFtQnZCLG9CQUFuQixFQUF5Q0UsT0FBekMsQ0FGZjs7O0FBSU4sU0FBT0ssWUFBUDtBQUNEOztBQUVELFNBQVNpQixZQUFULENBQXNCRCxJQUF0QixFQUE0QkcsWUFBNUIsRUFBMEN4QixPQUExQyxFQUFtRDtBQUMzQyxNQUFFeUIsY0FBRixHQUFxQnpCLE9BQXJCLENBQUV5QixjQUFGO0FBQUEsTUFDQXZCLEtBREEsR0FDUXVCLGNBRFI7QUFBQSxNQUVBQyxNQUZBLEdBRVMxQixRQUFRc0IsWUFBUixDQUFxQkQsSUFBckIsQ0FGVDs7O0FBSU5yQixVQUFRd0IsWUFBUixDQUFxQkUsTUFBckIsRUFBNkJGLFlBQTdCOztBQUVBeEIsVUFBUTJCLGFBQVIsQ0FBc0JELE1BQXRCOztBQUVBLE1BQU1FLGdCQUFnQjVCLFFBQVE2QixrQkFBUixDQUEyQkgsTUFBM0IsRUFBbUN4QixLQUFuQyxDQUF0Qjs7QUFFQSxNQUFJLENBQUMwQixhQUFMLEVBQW9CO0FBQ2xCLFFBQU1FLGdCQUFnQjlCLFFBQVErQixnQkFBUixDQUF5QkwsTUFBekIsQ0FBdEI7O0FBRUEsVUFBTSxJQUFJWCxLQUFKLGdDQUFOO0FBQ0Q7O0FBRUQsU0FBT1csTUFBUDtBQUNEIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9ybWFsTWF0cml4TmFtZSA9ICd1Tm9ybWFsTWF0cml4JyxcbiAgICAgIHJvdGF0aW9uTWF0cml4TmFtZSA9ICd1Um90YXRpb25NYXRyaXgnLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gJ3VQb3NpdGlvbk1hdHJpeCcsXG4gICAgICBwZXJzcGVjdGl2ZU1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgYVZlcnRleFBvc2l0aW9uO1xuICAgICAgICBhdHRyaWJ1dGUgdmVjMyBhVmVydGV4Tm9ybWFsO1xuICAgICAgICBhdHRyaWJ1dGUgdmVjNCBhVmVydGV4Q29sb3VyO1xuXG5cbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsTWF0cml4TmFtZX07XG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3JvdGF0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3Bvc2l0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIGhpZ2hwIHZlYzMgY2FsY3VsYXRlTGlnaHRpbmcoKSB7XG4gICAgICAgICAgaGlnaHAgdmVjMyBsaWdodGluZztcbiAgICAgICAgXG4gICAgICAgICAgaGlnaHAgdmVjMyBhbWJpZW50TGlnaHQgPSB2ZWMzKDAuMywgMC4zLCAwLjMpO1xuICAgICAgICAgIGhpZ2hwIHZlYzMgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSk7XG4gICAgICAgICAgaGlnaHAgdmVjMyBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDAuODUsIDAuOCwgMC43NSkpO1xuICAgICAgICAgIFxuICAgICAgICAgIGhpZ2hwIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbE1hdHJpeE5hbWV9ICogdmVjNChhVmVydGV4Tm9ybWFsLCAxLjApOyAgICAgICAgICAgIFxuICAgICAgICAgIGhpZ2hwIGZsb2F0IGRpcmVjdGlvbmFsID0gbWF4KGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSwgMC4wKTtcbiAgICAgICAgICBcbiAgICAgICAgICBsaWdodGluZyA9IGFtYmllbnRMaWdodCArIChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uO1xuICAgICAgICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbk1hdHJpeE5hbWV9ICogYVZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcblxuICAgICAgICAgIHZDb2xvdXIgPSBhVmVydGV4Q29sb3VyOyAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICBcbiAgXG4gIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gIFxuICBcbiAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3VyLnJnYiAqIHZMaWdodGluZywgdkNvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG4gIFxuY2xhc3MgQ29sb3VyU2hhZGVyIHtcbiAgc3RhdGljIGNyZWF0ZVNoYWRlclByb2dyYW0oY29udGV4dCkge1xuICAgIGNvbnN0IHsgTElOS19TVEFUVVMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcG5hbWUgPSBMSU5LX1NUQVRVUyxcbiAgICAgICAgICBzaGFkZXJQcm9ncmFtID0gY29udGV4dC5jcmVhdGVQcm9ncmFtKCksXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlVmVydGV4U2hhZGVyKGNvbnRleHQpLFxuICAgICAgICAgIGZyYWdtZW50U2hhZGVyID0gY3JlYXRlRnJhZ21lbnRTaGFkZXIoY29udGV4dCk7XG4gIFxuICAgIGNvbnRleHQuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgICBjb250ZXh0LmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICBcbiAgICBjb25zdCBsaW5rU3RhdHVzID0gY29udGV4dC5nZXRQcm9ncmFtUGFyYW1ldGVyKHNoYWRlclByb2dyYW0sIHBuYW1lKTtcbiAgXG4gICAgaWYgKCFsaW5rU3RhdHVzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gY29udGV4dC5nZXRQcm9ncmFtSW5mb0xvZyhzaGFkZXJQcm9ncmFtKTsgIC8vL1xuICBcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgY29sb3VyIHNoYWRlciBwcm9ncmFtLCAnJHttZXNzYWdlfScuYCk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gc2hhZGVyUHJvZ3JhbTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENvbG91clNoYWRlciwge1xuICB2ZXJ0ZXhTaGFkZXJTb3VyY2U6IHZlcnRleFNoYWRlclNvdXJjZSxcbiAgZnJhZ21lbnRTaGFkZXJTb3VyY2U6IGZyYWdtZW50U2hhZGVyU291cmNlLFxuICBub3JtYWxNYXRyaXhOYW1lOiBub3JtYWxNYXRyaXhOYW1lLFxuICByb3RhdGlvbk1hdHJpeE5hbWU6IHJvdGF0aW9uTWF0cml4TmFtZSxcbiAgcG9zaXRpb25NYXRyaXhOYW1lOiBwb3NpdGlvbk1hdHJpeE5hbWUsXG4gIHBlcnNwZWN0aXZlTWF0cml4TmFtZTogcGVyc3BlY3RpdmVNYXRyaXhOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJTaGFkZXI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcihjb250ZXh0KSB7XG4gIGNvbnN0IHsgVkVSVEVYX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgdHlwZSA9IFZFUlRFWF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGNvbnRleHQpIHtcbiAgY29uc3QgeyBGUkFHTUVOVF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0eXBlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICBjb25zdCB7IENPTVBJTEVfU1RBVFVTIH0gPSBjb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSBjb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICBjb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IGNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIGNvbnN0IHNoYWRlckluZm9Mb2cgPSBjb250ZXh0LmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcblxuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLmApO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cbiJdfQ==