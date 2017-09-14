'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var normalMatrixName = 'uNormalMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    perspectiveMatrixName = 'uPerspectiveMatrix',
    vertexShaderSource = '\n    \n        attribute vec4 aVertexPosition;\n        attribute vec4 aVertexColour;\n        \n        uniform mat4 ' + normalMatrixName + ';\n        uniform mat4 ' + rotationMatrixName + ';\n        uniform mat4 ' + positionMatrixName + ';\n        uniform mat4 ' + perspectiveMatrixName + ';\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          gl_Position = ' + perspectiveMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * aVertexPosition;\n\n          vColour = aVertexColour;          \n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        varying lowp vec4 vColour;\n  \n        void main() {\n          gl_FragColor = vColour;\n        }\n        \n      ';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbIm5vcm1hbE1hdHJpeE5hbWUiLCJyb3RhdGlvbk1hdHJpeE5hbWUiLCJwb3NpdGlvbk1hdHJpeE5hbWUiLCJwZXJzcGVjdGl2ZU1hdHJpeE5hbWUiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIkNvbG91clNoYWRlciIsImNvbnRleHQiLCJMSU5LX1NUQVRVUyIsInBuYW1lIiwic2hhZGVyUHJvZ3JhbSIsImNyZWF0ZVByb2dyYW0iLCJ2ZXJ0ZXhTaGFkZXIiLCJjcmVhdGVWZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsImNyZWF0ZUZyYWdtZW50U2hhZGVyIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJsaW5rU3RhdHVzIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIm1lc3NhZ2UiLCJnZXRQcm9ncmFtSW5mb0xvZyIsIkVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsIlZFUlRFWF9TSEFERVIiLCJ0eXBlIiwiY3JlYXRlU2hhZGVyIiwiRlJBR01FTlRfU0hBREVSIiwic2hhZGVyU291cmNlIiwiQ09NUElMRV9TVEFUVVMiLCJzaGFkZXIiLCJjb21waWxlU2hhZGVyIiwiY29tcGlsZVN0YXR1cyIsImdldFNoYWRlclBhcmFtZXRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixlQUF6QjtBQUFBLElBQ01DLHFCQUFxQixpQkFEM0I7QUFBQSxJQUVNQyxxQkFBcUIsaUJBRjNCO0FBQUEsSUFHTUMsd0JBQXdCLG9CQUg5QjtBQUFBLElBSU1DLGlKQUtpQkosZ0JBTGpCLGdDQU1pQkMsa0JBTmpCLGdDQU9pQkMsa0JBUGpCLGdDQVFpQkMscUJBUmpCLGtIQWFvQkEscUJBYnBCLFdBYStDRCxrQkFiL0MsV0FhdUVELGtCQWJ2RSxxR0FKTjtBQUFBLElBdUJNSSxrS0F2Qk47O0lBaUNNQyxZOzs7Ozs7O3dDQUN1QkMsTyxFQUFTO0FBQzVCLFVBQUVDLFdBQUYsR0FBa0JELE9BQWxCLENBQUVDLFdBQUY7QUFBQSxVQUNBQyxLQURBLEdBQ1FELFdBRFI7QUFBQSxVQUVBRSxhQUZBLEdBRWdCSCxRQUFRSSxhQUFSLEVBRmhCO0FBQUEsVUFHQUMsWUFIQSxHQUdlQyxtQkFBbUJOLE9BQW5CLENBSGY7QUFBQSxVQUlBTyxjQUpBLEdBSWlCQyxxQkFBcUJSLE9BQXJCLENBSmpCOzs7QUFNTkEsY0FBUVMsWUFBUixDQUFxQk4sYUFBckIsRUFBb0NFLFlBQXBDO0FBQ0FMLGNBQVFTLFlBQVIsQ0FBcUJOLGFBQXJCLEVBQW9DSSxjQUFwQzs7QUFFQVAsY0FBUVUsV0FBUixDQUFvQlAsYUFBcEI7O0FBRUEsVUFBTVEsYUFBYVgsUUFBUVksbUJBQVIsQ0FBNEJULGFBQTVCLEVBQTJDRCxLQUEzQyxDQUFuQjs7QUFFQSxVQUFJLENBQUNTLFVBQUwsRUFBaUI7QUFDZixZQUFNRSxVQUFVYixRQUFRYyxpQkFBUixDQUEwQlgsYUFBMUIsQ0FBaEIsQ0FEZSxDQUM0Qzs7QUFFM0QsY0FBTSxJQUFJWSxLQUFKLG9EQUEwREYsT0FBMUQsU0FBTjtBQUNEOztBQUVELGFBQU9WLGFBQVA7QUFDRDs7Ozs7O0FBR0hhLE9BQU9DLE1BQVAsQ0FBY2xCLFlBQWQsRUFBNEI7QUFDMUJGLHNCQUFvQkEsa0JBRE07QUFFMUJDLHdCQUFzQkEsb0JBRkk7QUFHMUJMLG9CQUFrQkEsZ0JBSFE7QUFJMUJDLHNCQUFvQkEsa0JBSk07QUFLMUJDLHNCQUFvQkEsa0JBTE07QUFNMUJDLHlCQUF1QkE7QUFORyxDQUE1Qjs7QUFTQXNCLE9BQU9DLE9BQVAsR0FBaUJwQixZQUFqQjs7QUFFQSxTQUFTTyxrQkFBVCxDQUE0Qk4sT0FBNUIsRUFBcUM7QUFDN0IsTUFBRW9CLGFBQUYsR0FBb0JwQixPQUFwQixDQUFFb0IsYUFBRjtBQUFBLE1BQ0FDLElBREEsR0FDT0QsYUFEUDtBQUFBLE1BRUFmLFlBRkEsR0FFZWlCLGFBQWFELElBQWIsRUFBbUJ4QixrQkFBbkIsRUFBdUNHLE9BQXZDLENBRmY7OztBQUlOLFNBQU9LLFlBQVA7QUFDRDs7QUFFRCxTQUFTRyxvQkFBVCxDQUE4QlIsT0FBOUIsRUFBdUM7QUFDL0IsTUFBRXVCLGVBQUYsR0FBc0J2QixPQUF0QixDQUFFdUIsZUFBRjtBQUFBLE1BQ0FGLElBREEsR0FDT0UsZUFEUDtBQUFBLE1BRUFsQixZQUZBLEdBRWVpQixhQUFhRCxJQUFiLEVBQW1CdkIsb0JBQW5CLEVBQXlDRSxPQUF6QyxDQUZmOzs7QUFJTixTQUFPSyxZQUFQO0FBQ0Q7O0FBRUQsU0FBU2lCLFlBQVQsQ0FBc0JELElBQXRCLEVBQTRCRyxZQUE1QixFQUEwQ3hCLE9BQTFDLEVBQW1EO0FBQzNDLE1BQUV5QixjQUFGLEdBQXFCekIsT0FBckIsQ0FBRXlCLGNBQUY7QUFBQSxNQUNBdkIsS0FEQSxHQUNRdUIsY0FEUjtBQUFBLE1BRUFDLE1BRkEsR0FFUzFCLFFBQVFzQixZQUFSLENBQXFCRCxJQUFyQixDQUZUOzs7QUFJTnJCLFVBQVF3QixZQUFSLENBQXFCRSxNQUFyQixFQUE2QkYsWUFBN0I7O0FBRUF4QixVQUFRMkIsYUFBUixDQUFzQkQsTUFBdEI7O0FBRUEsTUFBTUUsZ0JBQWdCNUIsUUFBUTZCLGtCQUFSLENBQTJCSCxNQUEzQixFQUFtQ3hCLEtBQW5DLENBQXRCOztBQUVBLE1BQUksQ0FBQzBCLGFBQUwsRUFBb0I7QUFDbEIsVUFBTSxJQUFJYixLQUFKLGdDQUFOO0FBQ0Q7O0FBRUQsU0FBT1csTUFBUDtBQUNEIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9ybWFsTWF0cml4TmFtZSA9ICd1Tm9ybWFsTWF0cml4JyxcbiAgICAgIHJvdGF0aW9uTWF0cml4TmFtZSA9ICd1Um90YXRpb25NYXRyaXgnLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gJ3VQb3NpdGlvbk1hdHJpeCcsXG4gICAgICBwZXJzcGVjdGl2ZU1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgYVZlcnRleFBvc2l0aW9uO1xuICAgICAgICBhdHRyaWJ1dGUgdmVjNCBhVmVydGV4Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsTWF0cml4TmFtZX07XG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3JvdGF0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3Bvc2l0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbk1hdHJpeE5hbWV9ICogYVZlcnRleFBvc2l0aW9uO1xuXG4gICAgICAgICAgdkNvbG91ciA9IGFWZXJ0ZXhDb2xvdXI7ICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2Q29sb3VyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYDtcbiAgXG5jbGFzcyBDb2xvdXJTaGFkZXIge1xuICBzdGF0aWMgY3JlYXRlU2hhZGVyUHJvZ3JhbShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBMSU5LX1NUQVRVUyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwbmFtZSA9IExJTktfU1RBVFVTLFxuICAgICAgICAgIHNoYWRlclByb2dyYW0gPSBjb250ZXh0LmNyZWF0ZVByb2dyYW0oKSxcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVWZXJ0ZXhTaGFkZXIoY29udGV4dCksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVGcmFnbWVudFNoYWRlcihjb250ZXh0KTtcbiAgXG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICAgIGNvbnRleHQubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gIFxuICAgIGNvbnN0IGxpbmtTdGF0dXMgPSBjb250ZXh0LmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgcG5hbWUpO1xuICBcbiAgICBpZiAoIWxpbmtTdGF0dXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBjb250ZXh0LmdldFByb2dyYW1JbmZvTG9nKHNoYWRlclByb2dyYW0pOyAgLy8vXG4gIFxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBjb2xvdXIgc2hhZGVyIHByb2dyYW0sICcke21lc3NhZ2V9Jy5gKTtcbiAgICB9XG4gIFxuICAgIHJldHVybiBzaGFkZXJQcm9ncmFtO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ29sb3VyU2hhZGVyLCB7XG4gIHZlcnRleFNoYWRlclNvdXJjZTogdmVydGV4U2hhZGVyU291cmNlLFxuICBmcmFnbWVudFNoYWRlclNvdXJjZTogZnJhZ21lbnRTaGFkZXJTb3VyY2UsXG4gIG5vcm1hbE1hdHJpeE5hbWU6IG5vcm1hbE1hdHJpeE5hbWUsXG4gIHJvdGF0aW9uTWF0cml4TmFtZTogcm90YXRpb25NYXRyaXhOYW1lLFxuICBwb3NpdGlvbk1hdHJpeE5hbWU6IHBvc2l0aW9uTWF0cml4TmFtZSxcbiAgcGVyc3BlY3RpdmVNYXRyaXhOYW1lOiBwZXJzcGVjdGl2ZU1hdHJpeE5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clNoYWRlcjtcblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKGNvbnRleHQpIHtcbiAgY29uc3QgeyBWRVJURVhfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRTaGFkZXIoY29udGV4dCkge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IGNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IGNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIGNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICBjb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuYCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuIl19