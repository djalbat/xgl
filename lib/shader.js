'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var normalMatrixName = 'uNormalMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    perspectiveMatrixName = 'uPerspectiveMatrix',
    calculateLightingSource = '\n\n        attribute vec3 aVertexNormal;\n\n        uniform mat4 ' + normalMatrixName + ';\n\n        vec3 calculateLighting() {\n          vec3 lighting,\n               ambientLight = vec3(0.3, 0.3, 0.3),\n               directionalLightColour = vec3(1, 1, 1),\n               directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(aVertexNormal, 1.0);            \n\n          float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          lighting = ambientLight + (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ',
    calculatePositionSource = '\n\n        attribute vec4 aVertexPosition;\n\n        uniform mat4 ' + rotationMatrixName + ';\n        uniform mat4 ' + positionMatrixName + ';\n        uniform mat4 ' + perspectiveMatrixName + ';\n        \n        vec4 calculatePosition() {\n          vec4 position;\n          \n          position = ' + perspectiveMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * aVertexPosition;\n          \n          return position;\n        }\n        \n      ';

var Shader = function () {
  function Shader(program) {
    _classCallCheck(this, Shader);

    this.program = program;
  }

  _createClass(Shader, [{
    key: 'getProgram',
    value: function getProgram() {
      return this.program;
    }
  }], [{
    key: 'fromVertexShaderSourceAndFragmentShaderSource',
    value: function fromVertexShaderSourceAndFragmentShaderSource(Class, vertexShaderSource, fragmentShaderSource, context) {
      var LINK_STATUS = context.LINK_STATUS,
          pname = LINK_STATUS,
          program = context.createProgram(),
          vertexShader = createVertexShader(vertexShaderSource, context),
          fragmentShader = createFragmentShader(fragmentShaderSource, context);


      context.attachShader(program, vertexShader);
      context.attachShader(program, fragmentShader);

      context.linkProgram(program);

      var linkStatus = context.getProgramParameter(program, pname);

      if (!linkStatus) {
        var message = context.getProgramInfoLog(program); ///

        throw new Error('Unable to create the colour shader program, \'' + message + '\'.');
      }

      var shader = new Class(program);

      return shader;
    }
  }]);

  return Shader;
}();

Object.assign(Shader, {
  calculateLightingSource: calculateLightingSource,
  calculatePositionSource: calculatePositionSource
});

module.exports = Shader;

function createVertexShader(vertexShaderSource, context) {
  var VERTEX_SHADER = context.VERTEX_SHADER,
      type = VERTEX_SHADER,
      vertexShader = createShader(type, vertexShaderSource, context);


  return vertexShader;
}

function createFragmentShader(fragmentShaderSource, context) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibm9ybWFsTWF0cml4TmFtZSIsInJvdGF0aW9uTWF0cml4TmFtZSIsInBvc2l0aW9uTWF0cml4TmFtZSIsInBlcnNwZWN0aXZlTWF0cml4TmFtZSIsImNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlIiwiY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UiLCJTaGFkZXIiLCJwcm9ncmFtIiwiQ2xhc3MiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsImNvbnRleHQiLCJMSU5LX1NUQVRVUyIsInBuYW1lIiwiY3JlYXRlUHJvZ3JhbSIsInZlcnRleFNoYWRlciIsImNyZWF0ZVZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImxpbmtTdGF0dXMiLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwibWVzc2FnZSIsImdldFByb2dyYW1JbmZvTG9nIiwiRXJyb3IiLCJzaGFkZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIiwiVkVSVEVYX1NIQURFUiIsInR5cGUiLCJjcmVhdGVTaGFkZXIiLCJGUkFHTUVOVF9TSEFERVIiLCJzaGFkZXJTb3VyY2UiLCJDT01QSUxFX1NUQVRVUyIsImNvbXBpbGVTaGFkZXIiLCJjb21waWxlU3RhdHVzIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwic2hhZGVySW5mb0xvZyIsImdldFNoYWRlckluZm9Mb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsZUFBekI7QUFBQSxJQUNNQyxxQkFBcUIsaUJBRDNCO0FBQUEsSUFFTUMscUJBQXFCLGlCQUYzQjtBQUFBLElBR01DLHdCQUF3QixvQkFIOUI7QUFBQSxJQUlNQyxpR0FJaUJKLGdCQUpqQiw0U0FZK0JBLGdCQVovQiw2UkFKTjtBQUFBLElBMEJNSyxtR0FJaUJKLGtC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dEI7O0FBRUEsVUFBTSxJQUFJRCxLQUFKLGdDQUFOO0FBQ0Q7O0FBRUQsU0FBT0MsTUFBUDtBQUNEIiwiZmlsZSI6InNoYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9ybWFsTWF0cml4TmFtZSA9ICd1Tm9ybWFsTWF0cml4JyxcbiAgICAgIHJvdGF0aW9uTWF0cml4TmFtZSA9ICd1Um90YXRpb25NYXRyaXgnLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gJ3VQb3NpdGlvbk1hdHJpeCcsXG4gICAgICBwZXJzcGVjdGl2ZU1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlID0gYFxuXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzIGFWZXJ0ZXhOb3JtYWw7XG5cbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsTWF0cml4TmFtZX07XG5cbiAgICAgICAgdmVjMyBjYWxjdWxhdGVMaWdodGluZygpIHtcbiAgICAgICAgICB2ZWMzIGxpZ2h0aW5nLFxuICAgICAgICAgICAgICAgYW1iaWVudExpZ2h0ID0gdmVjMygwLjMsIDAuMywgMC4zKSxcbiAgICAgICAgICAgICAgIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgICAgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygwLjg1LCAwLjgsIDAuNzUpKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gJHtub3JtYWxNYXRyaXhOYW1lfSAqIHZlYzQoYVZlcnRleE5vcm1hbCwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gbWF4KGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSwgMC4wKTtcbiAgICAgICAgICBcbiAgICAgICAgICBsaWdodGluZyA9IGFtYmllbnRMaWdodCArIChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgLFxuICAgICAgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgPSBgXG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzQgYVZlcnRleFBvc2l0aW9uO1xuXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3JvdGF0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3Bvc2l0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb247XG4gICAgICAgICAgXG4gICAgICAgICAgcG9zaXRpb24gPSAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uTWF0cml4TmFtZX0gKiBhVmVydGV4UG9zaXRpb247XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYDtcblxuY2xhc3MgU2hhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSkge1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleFNoYWRlclNvdXJjZUFuZEZyYWdtZW50U2hhZGVyU291cmNlKENsYXNzLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBMSU5LX1NUQVRVUyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwbmFtZSA9IExJTktfU1RBVFVTLFxuICAgICAgICAgIHByb2dyYW0gPSBjb250ZXh0LmNyZWF0ZVByb2dyYW0oKSxcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjb250ZXh0KSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KTtcbiAgXG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICAgIGNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gIFxuICAgIGNvbnN0IGxpbmtTdGF0dXMgPSBjb250ZXh0LmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgcG5hbWUpO1xuICBcbiAgICBpZiAoIWxpbmtTdGF0dXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBjb250ZXh0LmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pOyAgLy8vXG4gIFxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBjb2xvdXIgc2hhZGVyIHByb2dyYW0sICcke21lc3NhZ2V9Jy5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaGFkZXIgPSBuZXcgQ2xhc3MocHJvZ3JhbSk7XG4gIFxuICAgIHJldHVybiBzaGFkZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTaGFkZXIsIHtcbiAgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2U6IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLFxuICBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZTogY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2Vcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYWRlcjtcblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZFUlRFWF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IGNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IGNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIGNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICBjb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgY29uc3Qgc2hhZGVySW5mb0xvZyA9IGNvbnRleHQuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuYCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuIl19