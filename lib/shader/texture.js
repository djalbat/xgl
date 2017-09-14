'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var normalMatrixName = 'uNormalMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    perspectiveMatrixName = 'uPerspectiveMatrix',
    vertexShaderSource = '\n    \n        attribute vec4 aVertexPosition;\n        attribute vec3 aVertexNormal;\n        \n        attribute vec2 aTextureCoordinate;\n        \n        uniform mat4 ' + normalMatrixName + ';\n        uniform mat4 ' + rotationMatrixName + ';\n        uniform mat4 ' + positionMatrixName + ';\n        uniform mat4 ' + perspectiveMatrixName + ';\n        \n        \n        varying highp vec2 vTextureCoordinate;\n        varying highp vec3 vLighting;\n        \n        void main() {\n          gl_Position = ' + perspectiveMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * aVertexPosition;\n          \n          \n          vTextureCoordinate = aTextureCoordinate;\n          \n          highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);\n          highp vec3 directionalLightColour = vec3(1, 1, 1);\n          highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n          highp vec4 transformedNormal = ' + normalMatrixName + ' * vec4(aVertexNormal, 1.0);            \n          highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          vLighting = ambientLight + (directionalLightColour * directional);\n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        \n        varying highp vec2 vTextureCoordinate;\n        \n        varying highp vec3 vLighting;\n                   \n        uniform sampler2D uSampler;\n\n        void main() {\n          highp vec4 texelColour = texture2D(uSampler, vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);\n          \n        }\n        \n      ';

var TextureShader = function () {
  function TextureShader() {
    _classCallCheck(this, TextureShader);
  }

  _createClass(TextureShader, null, [{
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

        throw new Error('Unable to create the texture shader program, \'' + message + '\'.');
      }

      return shaderProgram;
    }
  }]);

  return TextureShader;
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJub3JtYWxNYXRyaXhOYW1lIiwicm90YXRpb25NYXRyaXhOYW1lIiwicG9zaXRpb25NYXRyaXhOYW1lIiwicGVyc3BlY3RpdmVNYXRyaXhOYW1lIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJUZXh0dXJlU2hhZGVyIiwiY29udGV4dCIsIkxJTktfU1RBVFVTIiwicG5hbWUiLCJzaGFkZXJQcm9ncmFtIiwiY3JlYXRlUHJvZ3JhbSIsInZlcnRleFNoYWRlciIsImNyZWF0ZVZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImxpbmtTdGF0dXMiLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwibWVzc2FnZSIsImdldFByb2dyYW1JbmZvTG9nIiwiRXJyb3IiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIiwiVkVSVEVYX1NIQURFUiIsInR5cGUiLCJjcmVhdGVTaGFkZXIiLCJGUkFHTUVOVF9TSEFERVIiLCJzaGFkZXJTb3VyY2UiLCJDT01QSUxFX1NUQVRVUyIsInNoYWRlciIsImNvbXBpbGVTaGFkZXIiLCJjb21waWxlU3RhdHVzIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLGVBQXpCO0FBQUEsSUFDTUMscUJBQXFCLGlCQUQzQjtBQUFBLElBRU1DLHFCQUFxQixpQkFGM0I7QUFBQSxJQUdNQyx3QkFBd0Isb0JBSDlCO0FBQUEsSUFJTUMsdU1BT2lCSixnQkFQakIsZ0NBUWlCQyxrQkFSakIsZ0NBU2lCQyxrQkFUakIsZ0NBVWlCQyxxQkFWakIsK0tBaUJvQkEscUJBakJwQixXQWlCK0NELGtCQWpCL0MsV0FpQnVFRCxrQkFqQnZFLDhXQTBCcUNELGdCQTFCckMsa1FBSk47QUFBQSxJQXFDTUssK2FBckNOOztJQXVETUMsYTs7Ozs7Ozt3Q0FDdUJDLE8sRUFBUztBQUM1QixVQUFFQyxXQUFGLEdBQWtCRCxPQUFsQixDQUFFQyxXQUFGO0FBQUEsVUFDQUMsS0FEQSxHQUNRRCxXQURSO0FBQUEsVUFFQUUsYUFGQSxHQUVnQkgsUUFBUUksYUFBUixFQUZoQjtBQUFBLFVBR0FDLFlBSEEsR0FHZUMsbUJBQW1CTixPQUFuQixDQUhmO0FBQUEsVUFJQU8sY0FKQSxHQUlpQkMscUJBQXFCUixPQUFyQixDQUpqQjs7O0FBTU5BLGNBQVFTLFlBQVIsQ0FBcUJOLGFBQXJCLEVBQW9DRSxZQUFwQztBQUNBTCxjQUFRUyxZQUFSLENBQXFCTixhQUFyQixFQUFvQ0ksY0FBcEM7O0FBRUFQLGNBQVFVLFdBQVIsQ0FBb0JQLGFBQXBCOztBQUVBLFVBQU1RLGFBQWFYLFFBQVFZLG1CQUFSLENBQTRCVCxhQUE1QixFQUEyQ0QsS0FBM0MsQ0FBbkI7O0FBRUEsVUFBSSxDQUFDUyxVQUFMLEVBQWlCO0FBQ2YsWUFBTUUsVUFBVWIsUUFBUWMsaUJBQVIsQ0FBMEJYLGFBQTFCLENBQWhCLENBRGUsQ0FDNEM7O0FBRTNELGNBQU0sSUFBSVksS0FBSixxREFBMkRGLE9BQTNELFNBQU47QUFDRDs7QUFFRCxhQUFPVixhQUFQO0FBQ0Q7Ozs7OztBQUdIYSxPQUFPQyxNQUFQLENBQWNsQixhQUFkLEVBQTZCO0FBQzNCRixzQkFBb0JBLGtCQURPO0FBRTNCQyx3QkFBc0JBLG9CQUZLO0FBRzNCTCxvQkFBa0JBLGdCQUhTO0FBSTNCQyxzQkFBb0JBLGtCQUpPO0FBSzNCQyxzQkFBb0JBLGtCQUxPO0FBTTNCQyx5QkFBdUJBO0FBTkksQ0FBN0I7O0FBU0FzQixPQUFPQyxPQUFQLEdBQWlCcEIsYUFBakI7O0FBRUEsU0FBU08sa0JBQVQsQ0FBNEJOLE9BQTVCLEVBQXFDO0FBQzdCLE1BQUVvQixhQUFGLEdBQW9CcEIsT0FBcEIsQ0FBRW9CLGFBQUY7QUFBQSxNQUNBQyxJQURBLEdBQ09ELGFBRFA7QUFBQSxNQUVBZixZQUZBLEdBRWVpQixhQUFhRCxJQUFiLEVBQW1CeEIsa0JBQW5CLEVBQXVDRyxPQUF2QyxDQUZmOzs7QUFJTixTQUFPSyxZQUFQO0FBQ0Q7O0FBRUQsU0FBU0csb0JBQVQsQ0FBOEJSLE9BQTlCLEVBQXVDO0FBQy9CLE1BQUV1QixlQUFGLEdBQXNCdkIsT0FBdEIsQ0FBRXVCLGVBQUY7QUFBQSxNQUNBRixJQURBLEdBQ09FLGVBRFA7QUFBQSxNQUVBbEIsWUFGQSxHQUVlaUIsYUFBYUQsSUFBYixFQUFtQnZCLG9CQUFuQixFQUF5Q0UsT0FBekMsQ0FGZjs7O0FBSU4sU0FBT0ssWUFBUDtBQUNEOztBQUVELFNBQVNpQixZQUFULENBQXNCRCxJQUF0QixFQUE0QkcsWUFBNUIsRUFBMEN4QixPQUExQyxFQUFtRDtBQUMzQyxNQUFFeUIsY0FBRixHQUFxQnpCLE9BQXJCLENBQUV5QixjQUFGO0FBQUEsTUFDQXZCLEtBREEsR0FDUXVCLGNBRFI7QUFBQSxNQUVBQyxNQUZBLEdBRVMxQixRQUFRc0IsWUFBUixDQUFxQkQsSUFBckIsQ0FGVDs7O0FBSU5yQixVQUFRd0IsWUFBUixDQUFxQkUsTUFBckIsRUFBNkJGLFlBQTdCOztBQUVBeEIsVUFBUTJCLGFBQVIsQ0FBc0JELE1BQXRCOztBQUVBLE1BQU1FLGdCQUFnQjVCLFFBQVE2QixrQkFBUixDQUEyQkgsTUFBM0IsRUFBbUN4QixLQUFuQyxDQUF0Qjs7QUFFQSxNQUFJLENBQUMwQixhQUFMLEVBQW9CO0FBQ2xCLFVBQU0sSUFBSWIsS0FBSixnQ0FBTjtBQUNEOztBQUVELFNBQU9XLE1BQVA7QUFDRCIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBub3JtYWxNYXRyaXhOYW1lID0gJ3VOb3JtYWxNYXRyaXgnLFxuICAgICAgcm90YXRpb25NYXRyaXhOYW1lID0gJ3VSb3RhdGlvbk1hdHJpeCcsXG4gICAgICBwb3NpdGlvbk1hdHJpeE5hbWUgPSAndVBvc2l0aW9uTWF0cml4JyxcbiAgICAgIHBlcnNwZWN0aXZlTWF0cml4TmFtZSA9ICd1UGVyc3BlY3RpdmVNYXRyaXgnLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCBhVmVydGV4UG9zaXRpb247XG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzIGFWZXJ0ZXhOb3JtYWw7XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxNYXRyaXhOYW1lfTtcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7cm90YXRpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7cG9zaXRpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7cGVyc3BlY3RpdmVNYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbk1hdHJpeE5hbWV9ICogYVZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9IGFUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgICBcbiAgICAgICAgICBoaWdocCB2ZWMzIGFtYmllbnRMaWdodCA9IHZlYzMoMC4zLCAwLjMsIDAuMyk7XG4gICAgICAgICAgaGlnaHAgdmVjMyBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKTtcbiAgICAgICAgICBoaWdocCB2ZWMzIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMC44NSwgMC44LCAwLjc1KSk7XG4gICAgICAgICAgXG4gICAgICAgICAgaGlnaHAgdmVjNCB0cmFuc2Zvcm1lZE5vcm1hbCA9ICR7bm9ybWFsTWF0cml4TmFtZX0gKiB2ZWM0KGFWZXJ0ZXhOb3JtYWwsIDEuMCk7ICAgICAgICAgICAgXG4gICAgICAgICAgaGlnaHAgZmxvYXQgZGlyZWN0aW9uYWwgPSBtYXgoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpLCAwLjApO1xuICAgICAgICAgIFxuICAgICAgICAgIHZMaWdodGluZyA9IGFtYmllbnRMaWdodCArIChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgaGlnaHAgdmVjNCB0ZXhlbENvbG91ciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleGVsQ29sb3VyLnJnYiAqIHZMaWdodGluZywgdGV4ZWxDb2xvdXIuYSk7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgO1xuICBcbmNsYXNzIFRleHR1cmVTaGFkZXIge1xuICBzdGF0aWMgY3JlYXRlU2hhZGVyUHJvZ3JhbShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBMSU5LX1NUQVRVUyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwbmFtZSA9IExJTktfU1RBVFVTLFxuICAgICAgICAgIHNoYWRlclByb2dyYW0gPSBjb250ZXh0LmNyZWF0ZVByb2dyYW0oKSxcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVWZXJ0ZXhTaGFkZXIoY29udGV4dCksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVGcmFnbWVudFNoYWRlcihjb250ZXh0KTtcbiAgXG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICAgIGNvbnRleHQubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gIFxuICAgIGNvbnN0IGxpbmtTdGF0dXMgPSBjb250ZXh0LmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgcG5hbWUpO1xuICBcbiAgICBpZiAoIWxpbmtTdGF0dXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBjb250ZXh0LmdldFByb2dyYW1JbmZvTG9nKHNoYWRlclByb2dyYW0pOyAgLy8vXG4gIFxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSB0ZXh0dXJlIHNoYWRlciBwcm9ncmFtLCAnJHttZXNzYWdlfScuYCk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gc2hhZGVyUHJvZ3JhbTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFRleHR1cmVTaGFkZXIsIHtcbiAgdmVydGV4U2hhZGVyU291cmNlOiB2ZXJ0ZXhTaGFkZXJTb3VyY2UsXG4gIGZyYWdtZW50U2hhZGVyU291cmNlOiBmcmFnbWVudFNoYWRlclNvdXJjZSxcbiAgbm9ybWFsTWF0cml4TmFtZTogbm9ybWFsTWF0cml4TmFtZSxcbiAgcm90YXRpb25NYXRyaXhOYW1lOiByb3RhdGlvbk1hdHJpeE5hbWUsXG4gIHBvc2l0aW9uTWF0cml4TmFtZTogcG9zaXRpb25NYXRyaXhOYW1lLFxuICBwZXJzcGVjdGl2ZU1hdHJpeE5hbWU6IHBlcnNwZWN0aXZlTWF0cml4TmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVNoYWRlcjtcblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKGNvbnRleHQpIHtcbiAgY29uc3QgeyBWRVJURVhfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRTaGFkZXIoY29udGV4dCkge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IGNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IGNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIGNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICBjb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuYCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuIl19