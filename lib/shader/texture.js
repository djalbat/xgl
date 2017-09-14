'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var normalMatrixName = 'uNormalMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    perspectiveMatrixName = 'uPerspectiveMatrix',
    vertexShaderSource = '\n    \n        attribute vec4 aVertexPosition;\n        attribute vec3 aVertexNormal;\n        attribute vec2 aTextureCoordinate;\n        \n        uniform mat4 ' + normalMatrixName + ';\n        uniform mat4 ' + rotationMatrixName + ';\n        uniform mat4 ' + positionMatrixName + ';\n        uniform mat4 ' + perspectiveMatrixName + ';\n        \n        varying highp vec2 vTextureCoordinate;\n        varying highp vec3 vLighting;\n        \n        void main() {\n          gl_Position = ' + perspectiveMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * aVertexPosition;\n          vTextureCoordinate = aTextureCoordinate;\n          \n          highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);\n          highp vec3 directionalLightColour = vec3(1, 1, 1);\n          highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n          highp vec4 transformedNormal = ' + normalMatrixName + ' * vec4(aVertexNormal, 1.0);            \n          highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          vLighting = ambientLight + (directionalLightColour * directional);\n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        varying highp vec2 vTextureCoordinate;\n        varying highp vec3 vLighting;\n        \n        uniform sampler2D uSampler;\n  \n        void main() {\n          highp vec4 texelColour = texture2D(uSampler, vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);\n        }\n        \n      ';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJub3JtYWxNYXRyaXhOYW1lIiwicm90YXRpb25NYXRyaXhOYW1lIiwicG9zaXRpb25NYXRyaXhOYW1lIiwicGVyc3BlY3RpdmVNYXRyaXhOYW1lIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJUZXh0dXJlU2hhZGVyIiwiY29udGV4dCIsIkxJTktfU1RBVFVTIiwicG5hbWUiLCJzaGFkZXJQcm9ncmFtIiwiY3JlYXRlUHJvZ3JhbSIsInZlcnRleFNoYWRlciIsImNyZWF0ZVZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImxpbmtTdGF0dXMiLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwibWVzc2FnZSIsImdldFByb2dyYW1JbmZvTG9nIiwiRXJyb3IiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIiwiVkVSVEVYX1NIQURFUiIsInR5cGUiLCJjcmVhdGVTaGFkZXIiLCJGUkFHTUVOVF9TSEFERVIiLCJzaGFkZXJTb3VyY2UiLCJDT01QSUxFX1NUQVRVUyIsInNoYWRlciIsImNvbXBpbGVTaGFkZXIiLCJjb21waWxlU3RhdHVzIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLGVBQXpCO0FBQUEsSUFDTUMscUJBQXFCLGlCQUQzQjtBQUFBLElBRU1DLHFCQUFxQixpQkFGM0I7QUFBQSxJQUdNQyx3QkFBd0Isb0JBSDlCO0FBQUEsSUFJTUMsNkxBTWlCSixnQkFOakIsZ0NBT2lCQyxrQkFQakIsZ0NBUWlCQyxrQkFSakIsZ0NBU2lCQyxxQkFUakIscUtBZW9CQSxxQkFmcEIsV0FlK0NELGtCQWYvQyxXQWV1RUQsa0JBZnZFLHNWQXNCcUNELGdCQXRCckMsa1FBSk47QUFBQSxJQWlDTUssc1lBakNOOztJQWdETUMsYTs7Ozs7Ozt3Q0FDdUJDLE8sRUFBUztBQUM1QixVQUFFQyxXQUFGLEdBQWtCRCxPQUFsQixDQUFFQyxXQUFGO0FBQUEsVUFDQUMsS0FEQSxHQUNRRCxXQURSO0FBQUEsVUFFQUUsYUFGQSxHQUVnQkgsUUFBUUksYUFBUixFQUZoQjtBQUFBLFVBR0FDLFlBSEEsR0FHZUMsbUJBQW1CTixPQUFuQixDQUhmO0FBQUEsVUFJQU8sY0FKQSxHQUlpQkMscUJBQXFCUixPQUFyQixDQUpqQjs7O0FBTU5BLGNBQVFTLFlBQVIsQ0FBcUJOLGFBQXJCLEVBQW9DRSxZQUFwQztBQUNBTCxjQUFRUyxZQUFSLENBQXFCTixhQUFyQixFQUFvQ0ksY0FBcEM7O0FBRUFQLGNBQVFVLFdBQVIsQ0FBb0JQLGFBQXBCOztBQUVBLFVBQU1RLGFBQWFYLFFBQVFZLG1CQUFSLENBQTRCVCxhQUE1QixFQUEyQ0QsS0FBM0MsQ0FBbkI7O0FBRUEsVUFBSSxDQUFDUyxVQUFMLEVBQWlCO0FBQ2YsWUFBTUUsVUFBVWIsUUFBUWMsaUJBQVIsQ0FBMEJYLGFBQTFCLENBQWhCLENBRGUsQ0FDNEM7O0FBRTNELGNBQU0sSUFBSVksS0FBSixxREFBMkRGLE9BQTNELFNBQU47QUFDRDs7QUFFRCxhQUFPVixhQUFQO0FBQ0Q7Ozs7OztBQUdIYSxPQUFPQyxNQUFQLENBQWNsQixhQUFkLEVBQTZCO0FBQzNCRixzQkFBb0JBLGtCQURPO0FBRTNCQyx3QkFBc0JBLG9CQUZLO0FBRzNCTCxvQkFBa0JBLGdCQUhTO0FBSTNCQyxzQkFBb0JBLGtCQUpPO0FBSzNCQyxzQkFBb0JBLGtCQUxPO0FBTTNCQyx5QkFBdUJBO0FBTkksQ0FBN0I7O0FBU0FzQixPQUFPQyxPQUFQLEdBQWlCcEIsYUFBakI7O0FBRUEsU0FBU08sa0JBQVQsQ0FBNEJOLE9BQTVCLEVBQXFDO0FBQzdCLE1BQUVvQixhQUFGLEdBQW9CcEIsT0FBcEIsQ0FBRW9CLGFBQUY7QUFBQSxNQUNBQyxJQURBLEdBQ09ELGFBRFA7QUFBQSxNQUVBZixZQUZBLEdBRWVpQixhQUFhRCxJQUFiLEVBQW1CeEIsa0JBQW5CLEVBQXVDRyxPQUF2QyxDQUZmOzs7QUFJTixTQUFPSyxZQUFQO0FBQ0Q7O0FBRUQsU0FBU0csb0JBQVQsQ0FBOEJSLE9BQTlCLEVBQXVDO0FBQy9CLE1BQUV1QixlQUFGLEdBQXNCdkIsT0FBdEIsQ0FBRXVCLGVBQUY7QUFBQSxNQUNBRixJQURBLEdBQ09FLGVBRFA7QUFBQSxNQUVBbEIsWUFGQSxHQUVlaUIsYUFBYUQsSUFBYixFQUFtQnZCLG9CQUFuQixFQUF5Q0UsT0FBekMsQ0FGZjs7O0FBSU4sU0FBT0ssWUFBUDtBQUNEOztBQUVELFNBQVNpQixZQUFULENBQXNCRCxJQUF0QixFQUE0QkcsWUFBNUIsRUFBMEN4QixPQUExQyxFQUFtRDtBQUMzQyxNQUFFeUIsY0FBRixHQUFxQnpCLE9BQXJCLENBQUV5QixjQUFGO0FBQUEsTUFDQXZCLEtBREEsR0FDUXVCLGNBRFI7QUFBQSxNQUVBQyxNQUZBLEdBRVMxQixRQUFRc0IsWUFBUixDQUFxQkQsSUFBckIsQ0FGVDs7O0FBSU5yQixVQUFRd0IsWUFBUixDQUFxQkUsTUFBckIsRUFBNkJGLFlBQTdCOztBQUVBeEIsVUFBUTJCLGFBQVIsQ0FBc0JELE1BQXRCOztBQUVBLE1BQU1FLGdCQUFnQjVCLFFBQVE2QixrQkFBUixDQUEyQkgsTUFBM0IsRUFBbUN4QixLQUFuQyxDQUF0Qjs7QUFFQSxNQUFJLENBQUMwQixhQUFMLEVBQW9CO0FBQ2xCLFVBQU0sSUFBSWIsS0FBSixnQ0FBTjtBQUNEOztBQUVELFNBQU9XLE1BQVA7QUFDRCIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBub3JtYWxNYXRyaXhOYW1lID0gJ3VOb3JtYWxNYXRyaXgnLFxuICAgICAgcm90YXRpb25NYXRyaXhOYW1lID0gJ3VSb3RhdGlvbk1hdHJpeCcsXG4gICAgICBwb3NpdGlvbk1hdHJpeE5hbWUgPSAndVBvc2l0aW9uTWF0cml4JyxcbiAgICAgIHBlcnNwZWN0aXZlTWF0cml4TmFtZSA9ICd1UGVyc3BlY3RpdmVNYXRyaXgnLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCBhVmVydGV4UG9zaXRpb247XG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzIGFWZXJ0ZXhOb3JtYWw7XG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke25vcm1hbE1hdHJpeE5hbWV9O1xuICAgICAgICB1bmlmb3JtIG1hdDQgJHtyb3RhdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICB1bmlmb3JtIG1hdDQgJHtwb3NpdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICB1bmlmb3JtIG1hdDQgJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9ICR7cGVyc3BlY3RpdmVNYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25NYXRyaXhOYW1lfSAqIGFWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSBhVGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgICAgXG4gICAgICAgICAgaGlnaHAgdmVjMyBhbWJpZW50TGlnaHQgPSB2ZWMzKDAuMywgMC4zLCAwLjMpO1xuICAgICAgICAgIGhpZ2hwIHZlYzMgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSk7XG4gICAgICAgICAgaGlnaHAgdmVjMyBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDAuODUsIDAuOCwgMC43NSkpO1xuICAgICAgICAgIFxuICAgICAgICAgIGhpZ2hwIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbE1hdHJpeE5hbWV9ICogdmVjNChhVmVydGV4Tm9ybWFsLCAxLjApOyAgICAgICAgICAgIFxuICAgICAgICAgIGhpZ2hwIGZsb2F0IGRpcmVjdGlvbmFsID0gbWF4KGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSwgMC4wKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2TGlnaHRpbmcgPSBhbWJpZW50TGlnaHQgKyAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcbiAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBoaWdocCB2ZWM0IHRleGVsQ29sb3VyID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWxDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB0ZXhlbENvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG4gIFxuY2xhc3MgVGV4dHVyZVNoYWRlciB7XG4gIHN0YXRpYyBjcmVhdGVTaGFkZXJQcm9ncmFtKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IExJTktfU1RBVFVTIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHBuYW1lID0gTElOS19TVEFUVVMsXG4gICAgICAgICAgc2hhZGVyUHJvZ3JhbSA9IGNvbnRleHQuY3JlYXRlUHJvZ3JhbSgpLFxuICAgICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVZlcnRleFNoYWRlcihjb250ZXh0KSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZUZyYWdtZW50U2hhZGVyKGNvbnRleHQpO1xuICBcbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIGNvbnRleHQuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gICAgY29udGV4dC5saW5rUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgXG4gICAgY29uc3QgbGlua1N0YXR1cyA9IGNvbnRleHQuZ2V0UHJvZ3JhbVBhcmFtZXRlcihzaGFkZXJQcm9ncmFtLCBwbmFtZSk7XG4gIFxuICAgIGlmICghbGlua1N0YXR1cykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGNvbnRleHQuZ2V0UHJvZ3JhbUluZm9Mb2coc2hhZGVyUHJvZ3JhbSk7ICAvLy9cbiAgXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgdGhlIHRleHR1cmUgc2hhZGVyIHByb2dyYW0sICcke21lc3NhZ2V9Jy5gKTtcbiAgICB9XG4gIFxuICAgIHJldHVybiBzaGFkZXJQcm9ncmFtO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVGV4dHVyZVNoYWRlciwge1xuICB2ZXJ0ZXhTaGFkZXJTb3VyY2U6IHZlcnRleFNoYWRlclNvdXJjZSxcbiAgZnJhZ21lbnRTaGFkZXJTb3VyY2U6IGZyYWdtZW50U2hhZGVyU291cmNlLFxuICBub3JtYWxNYXRyaXhOYW1lOiBub3JtYWxNYXRyaXhOYW1lLFxuICByb3RhdGlvbk1hdHJpeE5hbWU6IHJvdGF0aW9uTWF0cml4TmFtZSxcbiAgcG9zaXRpb25NYXRyaXhOYW1lOiBwb3NpdGlvbk1hdHJpeE5hbWUsXG4gIHBlcnNwZWN0aXZlTWF0cml4TmFtZTogcGVyc3BlY3RpdmVNYXRyaXhOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlU2hhZGVyO1xuXG5mdW5jdGlvbiBjcmVhdGVWZXJ0ZXhTaGFkZXIoY29udGV4dCkge1xuICBjb25zdCB7IFZFUlRFWF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihjb250ZXh0KSB7XG4gIGNvbnN0IHsgRlJBR01FTlRfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDT01QSUxFX1NUQVRVUyB9ID0gY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gY29udGV4dC5jcmVhdGVTaGFkZXIodHlwZSk7XG5cbiAgY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIGNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSBjb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHBuYW1lKTtcblxuICBpZiAoIWNvbXBpbGVTdGF0dXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5gKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG4iXX0=