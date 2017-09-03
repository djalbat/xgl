'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domUtilities = require('./utilities/dom');

var domElementFromSelector = domUtilities.domElementFromSelector;


var defaultRed = 0.0,
    defaultBlue = 0.0,
    defaultGreen = 0.0,
    defaultAlpha = 1.0,
    defaultDepth = 1.0,
    defaultVertexShaderSource = '\n        attribute vec4 aVertexPosition;\n    \n        uniform mat4 uModelViewMatrix;\n        uniform mat4 uProjectionMatrix;\n    \n        void main() {\n          gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n        }\n      ',
    defaultFragmentShaderSource = '\n        void main() {\n          gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n        }\n      ';

var Canvas = function () {
  function Canvas() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'canvas';

    _classCallCheck(this, Canvas);

    var domElement = domElementFromSelector(selector),
        context = domElement.getContext('webgl');

    this.context = context;

    this.domElement = domElement;
  }

  _createClass(Canvas, [{
    key: 'getContext',
    value: function getContext() {
      return this.context;
    }
  }, {
    key: 'getClientWidth',
    value: function getClientWidth() {
      return this.domElement.clientWidth;
    }
  }, {
    key: 'getClientHeight',
    value: function getClientHeight() {
      return this.domElement.clientHeight;
    }
  }, {
    key: 'clearDepthBuffer',
    value: function clearDepthBuffer() {
      this.context.clear(this.context.DEPTH_BUFFER_BIT);
    }
  }, {
    key: 'clearColourBuffer',
    value: function clearColourBuffer() {
      this.context.clear(this.context.COLOR_BUFFER_BIT);
    }
  }, {
    key: 'clearColour',
    value: function clearColour() {
      var red = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRed;
      var green = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGreen;
      var blue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBlue;
      var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAlpha;
      this.context.clearColor(red, green, blue, alpha);
    }
  }, {
    key: 'clearDepth',
    value: function clearDepth() {
      var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultDepth;
      this.context.clearDepth(depth);
    }
  }, {
    key: 'createShader',
    value: function createShader(type, shaderSource) {
      var shader = this.context.createShader(type);

      this.context.shaderSource(shader, shaderSource);

      this.context.compileShader(shader);

      var compileStatus = this.context.getShaderParameter(shader, this.context.COMPILE_STATUS);

      if (!compileStatus) {
        throw new Error('Unable to create the shader.');
      }

      return shader;
    }
  }, {
    key: 'createVertexShader',
    value: function createVertexShader() {
      var vertexShaderSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultVertexShaderSource;

      var VERTEX_SHADER_TYPE = this.context.VERTEX_SHADER,
          ///
      vertexShader = this.createShader(VERTEX_SHADER_TYPE, vertexShaderSource);

      return vertexShader;
    }
  }, {
    key: 'createFragmentShader',
    value: function createFragmentShader() {
      var fragmentShaderSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFragmentShaderSource;

      var FRAGMENT_SHADER_TYPE = this.context.FRAGMENT_SHADER,
          ///
      vertexShader = this.createShader(FRAGMENT_SHADER_TYPE, fragmentShaderSource);

      return vertexShader;
    }
  }, {
    key: 'createShaderProgram',
    value: function createShaderProgram(vertexShaderSource, fragmentShaderSource) {
      var shaderProgram = this.context.createProgram(),
          vertexShader = this.createVertexShader(vertexShaderSource),
          fragmentShader = this.createFragmentShader(fragmentShaderSource);

      this.context.attachShader(shaderProgram, vertexShader);
      this.context.attachShader(shaderProgram, fragmentShader);

      this.context.linkProgram(shaderProgram);

      var linkStatus = this.context.getProgramParameter(shaderProgram, this.context.LINK_STATUS);

      if (!linkStatus) {
        var message = this.context.getProgramInfoLog(shaderProgram); ///

        throw new Error('Unable to create the shader program, \'' + message + '\'');
      }

      return shaderProgram;
    }
  }, {
    key: 'createBuffer',
    value: function createBuffer(data) {
      var ARRAY_BUFFER_TYPE = this.context.ARRAY_BUFFER,
          ///
      STATIC_DRAW = this.context.STATIC_DRAW,
          buffer = this.context.createBuffer(),
          verticesFloat32Array = new Float32Array(data);

      this.context.bindBuffer(ARRAY_BUFFER_TYPE, buffer);

      this.context.bufferData(ARRAY_BUFFER_TYPE, verticesFloat32Array, STATIC_DRAW);

      return buffer;
    }
  }, {
    key: 'enableDepthTesting',
    value: function enableDepthTesting() {
      this.context.enable(this.context.DEPTH_TEST);
    }
  }, {
    key: 'enableDepthFunction',
    value: function enableDepthFunction() {
      this.context.depthFunc(this.context.LEQUAL);
    }
  }, {
    key: 'getProgramUniformLocation',
    value: function getProgramUniformLocation(program, name) {
      return this.context.getUniformLocation(program, name);
    }
  }, {
    key: 'getProgramAttributeLocation',
    value: function getProgramAttributeLocation(program, name) {
      return this.context.getAttribLocation(program, name);
    }
  }, {
    key: 'useProgram',
    value: function useProgram(program) {
      this.context.useProgram(program);
    }
  }, {
    key: 'usePerspective',
    value: function usePerspective(location, perspective) {
      var flag = false,
          ///
      matrix = perspective.getMatrix();

      this.context.uniformMatrix4fv(location, flag, matrix);
    }
  }, {
    key: 'useModelView',
    value: function useModelView(location, modelView) {
      var flag = false,
          ///
      matrix = modelView.getMatrix();

      this.context.uniformMatrix4fv(location, flag, matrix);
    }
  }, {
    key: 'useBuffer',
    value: function useBuffer(location, buffer) {
      var numComponents = 2,
          type = this.context.FLOAT,
          ///
      normalize = false,
          stride = 0,
          offset = 0;

      this.context.bindBuffer(this.context.ARRAY_BUFFER, buffer);

      this.context.vertexAttribPointer(location, numComponents, type, normalize, stride, offset);

      this.context.enableVertexAttribArray(location);
    }
  }, {
    key: 'render',
    value: function render(offset, vertexCount) {
      this.context.drawArrays(this.context.TRIANGLE_STRIP, offset, vertexCount);
    }
  }]);

  return Canvas;
}();

module.exports = Canvas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsiZG9tVXRpbGl0aWVzIiwicmVxdWlyZSIsImRvbUVsZW1lbnRGcm9tU2VsZWN0b3IiLCJkZWZhdWx0UmVkIiwiZGVmYXVsdEJsdWUiLCJkZWZhdWx0R3JlZW4iLCJkZWZhdWx0QWxwaGEiLCJkZWZhdWx0RGVwdGgiLCJkZWZhdWx0VmVydGV4U2hhZGVyU291cmNlIiwiZGVmYXVsdEZyYWdtZW50U2hhZGVyU291cmNlIiwiQ2FudmFzIiwic2VsZWN0b3IiLCJkb21FbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImNsZWFyIiwiREVQVEhfQlVGRkVSX0JJVCIsIkNPTE9SX0JVRkZFUl9CSVQiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJhbHBoYSIsImNsZWFyQ29sb3IiLCJkZXB0aCIsImNsZWFyRGVwdGgiLCJ0eXBlIiwic2hhZGVyU291cmNlIiwic2hhZGVyIiwiY3JlYXRlU2hhZGVyIiwiY29tcGlsZVNoYWRlciIsImNvbXBpbGVTdGF0dXMiLCJnZXRTaGFkZXJQYXJhbWV0ZXIiLCJDT01QSUxFX1NUQVRVUyIsIkVycm9yIiwidmVydGV4U2hhZGVyU291cmNlIiwiVkVSVEVYX1NIQURFUl9UWVBFIiwiVkVSVEVYX1NIQURFUiIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiRlJBR01FTlRfU0hBREVSX1RZUEUiLCJGUkFHTUVOVF9TSEFERVIiLCJzaGFkZXJQcm9ncmFtIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZVZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImxpbmtTdGF0dXMiLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwiTElOS19TVEFUVVMiLCJtZXNzYWdlIiwiZ2V0UHJvZ3JhbUluZm9Mb2ciLCJkYXRhIiwiQVJSQVlfQlVGRkVSX1RZUEUiLCJBUlJBWV9CVUZGRVIiLCJTVEFUSUNfRFJBVyIsImJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsInZlcnRpY2VzRmxvYXQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiYmluZEJ1ZmZlciIsImJ1ZmZlckRhdGEiLCJlbmFibGUiLCJERVBUSF9URVNUIiwiZGVwdGhGdW5jIiwiTEVRVUFMIiwicHJvZ3JhbSIsIm5hbWUiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsInVzZVByb2dyYW0iLCJsb2NhdGlvbiIsInBlcnNwZWN0aXZlIiwiZmxhZyIsIm1hdHJpeCIsImdldE1hdHJpeCIsInVuaWZvcm1NYXRyaXg0ZnYiLCJtb2RlbFZpZXciLCJudW1Db21wb25lbnRzIiwiRkxPQVQiLCJub3JtYWxpemUiLCJzdHJpZGUiLCJvZmZzZXQiLCJ2ZXJ0ZXhBdHRyaWJQb2ludGVyIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJ2ZXJ0ZXhDb3VudCIsImRyYXdBcnJheXMiLCJUUklBTkdMRV9TVFJJUCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGlCQUFSLENBQXJCOztJQUVRQyxzQixHQUEyQkYsWSxDQUEzQkUsc0I7OztBQUVSLElBQU1DLGFBQWEsR0FBbkI7QUFBQSxJQUNNQyxjQUFjLEdBRHBCO0FBQUEsSUFFTUMsZUFBZSxHQUZyQjtBQUFBLElBR01DLGVBQWUsR0FIckI7QUFBQSxJQUlNQyxlQUFlLEdBSnJCO0FBQUEsSUFLTUMsK1JBTE47QUFBQSxJQWVNQyw4SEFmTjs7SUFxQk1DLE07QUFDSixvQkFBaUM7QUFBQSxRQUFyQkMsUUFBcUIsdUVBQVYsUUFBVTs7QUFBQTs7QUFDL0IsUUFBTUMsYUFBYVYsdUJBQXVCUyxRQUF2QixDQUFuQjtBQUFBLFFBQ01FLFVBQVVELFdBQVdFLFVBQVgsQ0FBc0IsT0FBdEIsQ0FEaEI7O0FBR0EsU0FBS0QsT0FBTCxHQUFlQSxPQUFmOztB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OlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb21VdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9kb20nKTtcblxuY29uc3QgeyBkb21FbGVtZW50RnJvbVNlbGVjdG9yIH0gPSBkb21VdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRSZWQgPSAwLjAsXG4gICAgICBkZWZhdWx0Qmx1ZSA9IDAuMCxcbiAgICAgIGRlZmF1bHRHcmVlbiA9IDAuMCxcbiAgICAgIGRlZmF1bHRBbHBoYSA9IDEuMCxcbiAgICAgIGRlZmF1bHREZXB0aCA9IDEuMCxcbiAgICAgIGRlZmF1bHRWZXJ0ZXhTaGFkZXJTb3VyY2UgPSBgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0IGFWZXJ0ZXhQb3NpdGlvbjtcbiAgICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0IHVNb2RlbFZpZXdNYXRyaXg7XG4gICAgICAgIHVuaWZvcm0gbWF0NCB1UHJvamVjdGlvbk1hdHJpeDtcbiAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gdVByb2plY3Rpb25NYXRyaXggKiB1TW9kZWxWaWV3TWF0cml4ICogYVZlcnRleFBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgICAgZGVmYXVsdEZyYWdtZW50U2hhZGVyU291cmNlID0gYFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjAsIDEuMCwgMS4wLCAxLjApO1xuICAgICAgICB9XG4gICAgICBgO1xuICBcbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG4gIFxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuICBcbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuICBcbiAgY2xlYXJEZXB0aEJ1ZmZlcigpIHsgdGhpcy5jb250ZXh0LmNsZWFyKHRoaXMuY29udGV4dC5ERVBUSF9CVUZGRVJfQklUKTsgfVxuXG4gIGNsZWFyQ29sb3VyQnVmZmVyKCkgeyB0aGlzLmNvbnRleHQuY2xlYXIodGhpcy5jb250ZXh0LkNPTE9SX0JVRkZFUl9CSVQpOyB9XG5cbiAgY2xlYXJDb2xvdXIocmVkID0gZGVmYXVsdFJlZCwgZ3JlZW4gPSBkZWZhdWx0R3JlZW4sIGJsdWUgPSBkZWZhdWx0Qmx1ZSwgYWxwaGEgPSBkZWZhdWx0QWxwaGEpIHsgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IocmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEpOyB9XG4gIFxuICBjbGVhckRlcHRoKGRlcHRoID0gZGVmYXVsdERlcHRoKSB7IHRoaXMuY29udGV4dC5jbGVhckRlcHRoKGRlcHRoKTsgfVxuXG4gIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UpIHtcbiAgICBjb25zdCBzaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gICAgdGhpcy5jb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gICAgY29uc3QgY29tcGlsZVN0YXR1cyA9IHRoaXMuY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCB0aGlzLmNvbnRleHQuQ09NUElMRV9TVEFUVVMpO1xuXG4gICAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZGVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSA9IGRlZmF1bHRWZXJ0ZXhTaGFkZXJTb3VyY2UpIHtcbiAgICBjb25zdCBWRVJURVhfU0hBREVSX1RZUEUgPSB0aGlzLmNvbnRleHQuVkVSVEVYX1NIQURFUiwgIC8vL1xuICAgICAgICAgIHZlcnRleFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKFZFUlRFWF9TSEFERVJfVFlQRSwgdmVydGV4U2hhZGVyU291cmNlKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG4gIH1cblxuICBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSA9IGRlZmF1bHRGcmFnbWVudFNoYWRlclNvdXJjZSkge1xuICAgIGNvbnN0IEZSQUdNRU5UX1NIQURFUl9UWVBFID0gdGhpcy5jb250ZXh0LkZSQUdNRU5UX1NIQURFUiwgIC8vL1xuICAgICAgICAgIHZlcnRleFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKEZSQUdNRU5UX1NIQURFUl9UWVBFLCBmcmFnbWVudFNoYWRlclNvdXJjZSk7XG5cbiAgICByZXR1cm4gdmVydGV4U2hhZGVyO1xuICB9XG5cbiAgY3JlYXRlU2hhZGVyUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlKSB7XG4gICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKCksXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IHRoaXMuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xuXG4gICAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuXG4gICAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuXG4gICAgY29uc3QgbGlua1N0YXR1cyA9IHRoaXMuY29udGV4dC5nZXRQcm9ncmFtUGFyYW1ldGVyKHNoYWRlclByb2dyYW0sIHRoaXMuY29udGV4dC5MSU5LX1NUQVRVUyk7XG5cbiAgICBpZiAoIWxpbmtTdGF0dXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmNvbnRleHQuZ2V0UHJvZ3JhbUluZm9Mb2coc2hhZGVyUHJvZ3JhbSk7ICAvLy9cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIgcHJvZ3JhbSwgJyR7bWVzc2FnZX0nYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoYWRlclByb2dyYW07XG4gIH1cblxuICBjcmVhdGVCdWZmZXIoZGF0YSkge1xuICAgIGNvbnN0IEFSUkFZX0JVRkZFUl9UWVBFID0gdGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgLy8vXG4gICAgICAgICAgU1RBVElDX0RSQVcgPSB0aGlzLmNvbnRleHQuU1RBVElDX0RSQVcsXG4gICAgICAgICAgYnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpLFxuICAgICAgICAgIHZlcnRpY2VzRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShkYXRhKTtcblxuICAgIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKEFSUkFZX0JVRkZFUl9UWVBFLCBidWZmZXIpO1xuXG4gICAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEoQVJSQVlfQlVGRkVSX1RZUEUsIHZlcnRpY2VzRmxvYXQzMkFycmF5LCBTVEFUSUNfRFJBVyk7XG4gICAgXG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfVxuICBcbiAgZW5hYmxlRGVwdGhUZXN0aW5nKCkgeyB0aGlzLmNvbnRleHQuZW5hYmxlKHRoaXMuY29udGV4dC5ERVBUSF9URVNUKTsgfVxuICBcbiAgZW5hYmxlRGVwdGhGdW5jdGlvbigpIHsgdGhpcy5jb250ZXh0LmRlcHRoRnVuYyh0aGlzLmNvbnRleHQuTEVRVUFMKTsgfVxuXG4gIGdldFByb2dyYW1Vbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIGdldFByb2dyYW1BdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7IH1cbiAgXG4gIHVzZVByb2dyYW0ocHJvZ3JhbSkgeyB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbShwcm9ncmFtKTsgfVxuICBcbiAgdXNlUGVyc3BlY3RpdmUobG9jYXRpb24sIHBlcnNwZWN0aXZlKSB7IFxuICAgIGNvbnN0IGZsYWcgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgbWF0cml4ID0gcGVyc3BlY3RpdmUuZ2V0TWF0cml4KCk7XG4gICAgXG4gICAgdGhpcy5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYobG9jYXRpb24sIGZsYWcsIG1hdHJpeCk7IFxuICB9XG5cbiAgdXNlTW9kZWxWaWV3KGxvY2F0aW9uLCBtb2RlbFZpZXcpIHtcbiAgICBjb25zdCBmbGFnID0gZmFsc2UsIC8vL1xuICAgICAgICAgIG1hdHJpeCA9IG1vZGVsVmlldy5nZXRNYXRyaXgoKTtcblxuICAgIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KGxvY2F0aW9uLCBmbGFnLCBtYXRyaXgpO1xuICB9XG5cbiAgdXNlQnVmZmVyKGxvY2F0aW9uLCBidWZmZXIpIHtcbiAgICBjb25zdCBudW1Db21wb25lbnRzID0gMixcbiAgICAgICAgICB0eXBlID0gdGhpcy5jb250ZXh0LkZMT0FULCAgLy8vXG4gICAgICAgICAgbm9ybWFsaXplID0gZmFsc2UsXG4gICAgICAgICAgc3RyaWRlID0gMCxcbiAgICAgICAgICBvZmZzZXQgPSAwO1xuXG4gICAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcblxuICAgIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGxvY2F0aW9uLCBudW1Db21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcblxuICAgIHRoaXMuY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2NhdGlvbik7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0LCB2ZXJ0ZXhDb3VudCkge1xuICAgIHRoaXMuY29udGV4dC5kcmF3QXJyYXlzKHRoaXMuY29udGV4dC5UUklBTkdMRV9TVFJJUCwgb2Zmc2V0LCB2ZXJ0ZXhDb3VudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG4iXX0=