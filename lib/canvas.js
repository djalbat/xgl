'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4');

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

    if (!context) {
      throw new Error('Unable to initialise WebGL.');
    }

    this.context = context;

    this.domElement = domElement;
  }

  _createClass(Canvas, [{
    key: 'getContext',
    value: function getContext() {
      return this.context;
    }
  }, {
    key: 'render',
    value: function render(buffer, shaderProgram, projection, modelView) {
      var projectionMatrix = projection.getMatrix(),
          modelViewMatrix = modelView.getMatrix(),
          vertexPositionAttributeLocation = this.getAttributeLocation(shaderProgram, 'aVertexPosition'),
          projectionMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          modelViewMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uModelViewMatrix');

      this.enableDepthTesting();
      this.enableDepthFunction();

      this.clearColour();
      this.clearDepth();
      this.clearColourBuffer();
      this.clearDepthBuffer();

      this.bindBuffer(vertexPositionAttributeLocation, buffer);

      this.useProgram(shaderProgram);

      this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
      this.applyMatrix(modelViewMatrixUniformLocation, modelViewMatrix);
    }
  }, {
    key: 'applyMatrix',
    value: function applyMatrix(uniformLocation, matrix) {
      this.context.uniformMatrix4fv(uniformLocation, false, matrix);
    }
  }, {
    key: 'draw',
    value: function draw() {
      var offset = 0,
          vertexCount = 4;

      this.context.drawArrays(this.context.TRIANGLE_STRIP, offset, vertexCount);
    }
  }, {
    key: 'bindBuffer',
    value: function bindBuffer(vertexPositionAttributeLocation, buffer) {
      var numComponents = 2,
          type = this.context.FLOAT,
          normalize = false,
          stride = 0,
          offset = 0;

      this.context.bindBuffer(this.context.ARRAY_BUFFER, buffer);
      this.context.vertexAttribPointer(vertexPositionAttributeLocation, numComponents, type, normalize, stride, offset);
      this.context.enableVertexAttribArray(vertexPositionAttributeLocation);
    }
  }, {
    key: 'getUniformLocation',
    value: function getUniformLocation(program, name) {
      return this.context.getUniformLocation(program, name);
    }
  }, {
    key: 'getAttributeLocation',
    value: function getAttributeLocation(program, name) {
      return this.context.getAttribLocation(program, name);
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
    key: 'useProgram',
    value: function useProgram(program) {
      this.context.useProgram(program);
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
          float32DataArray = new Float32Array(data);

      this.context.bindBuffer(ARRAY_BUFFER_TYPE, buffer);

      this.context.bufferData(ARRAY_BUFFER_TYPE, float32DataArray, STATIC_DRAW);

      return buffer;
    }
  }]);

  return Canvas;
}();

module.exports = Canvas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsibWF0NCIsInJlcXVpcmUiLCJkb21VdGlsaXRpZXMiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiZGVmYXVsdFJlZCIsImRlZmF1bHRCbHVlIiwiZGVmYXVsdEdyZWVuIiwiZGVmYXVsdEFscGhhIiwiZGVmYXVsdERlcHRoIiwiZGVmYXVsdFZlcnRleFNoYWRlclNvdXJjZSIsImRlZmF1bHRGcmFnbWVudFNoYWRlclNvdXJjZSIsIkNhbnZhcyIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiRXJyb3IiLCJidWZmZXIiLCJzaGFkZXJQcm9ncmFtIiwicHJvamVjdGlvbiIsIm1vZGVsVmlldyIsInByb2plY3Rpb25NYXRyaXgiLCJnZXRNYXRyaXgiLCJtb2RlbFZpZXdNYXRyaXgiLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0QXR0cmlidXRlTG9jYXRpb24iLCJwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwibW9kZWxWaWV3TWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZW5hYmxlRGVwdGhUZXN0aW5nIiwiZW5hYmxlRGVwdGhGdW5jdGlvbiIsImNsZWFyQ29sb3VyIiwiY2xlYXJEZXB0aCIsImNsZWFyQ29sb3VyQnVmZmVyIiwiY2xlYXJEZXB0aEJ1ZmZlciIsImJpbmRCdWZmZXIiLCJ1c2VQcm9ncmFtIiwiYXBwbHlNYXRyaXgiLCJ1bmlmb3JtTG9jYXRpb24iLCJtYXRyaXgiLCJ1bmlmb3JtTWF0cml4NGZ2Iiwib2Zmc2V0IiwidmVydGV4Q291bnQiLCJkcmF3QXJyYXlzIiwiVFJJQU5HTEVfU1RSSVAiLCJudW1Db21wb25lbnRzIiwidHlwZSIsIkZMT0FUIiwibm9ybWFsaXplIiwic3RyaWRlIiwiQVJSQVlfQlVGRkVSIiwidmVydGV4QXR0cmliUG9pbnRlciIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwicHJvZ3JhbSIsIm5hbWUiLCJnZXRBdHRyaWJMb2NhdGlvbiIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhIiwiY2xlYXJDb2xvciIsImRlcHRoIiwiZW5hYmxlIiwiREVQVEhfVEVTVCIsImRlcHRoRnVuYyIsIkxFUVVBTCIsImNsZWFyIiwiREVQVEhfQlVGRkVSX0JJVCIsIkNPTE9SX0JVRkZFUl9CSVQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInNoYWRlclNvdXJjZSIsInNoYWRlciIsImNyZWF0ZVNoYWRlciIsImNvbXBpbGVTaGFkZXIiLCJjb21waWxlU3RhdHVzIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwiQ09NUElMRV9TVEFUVVMiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJWRVJURVhfU0hBREVSX1RZUEUiLCJWRVJURVhfU0hBREVSIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJGUkFHTUVOVF9TSEFERVJfVFlQRSIsIkZSQUdNRU5UX1NIQURFUiIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVWZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsImNyZWF0ZUZyYWdtZW50U2hhZGVyIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJsaW5rU3RhdHVzIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIkxJTktfU1RBVFVTIiwibWVzc2FnZSIsImdldFByb2dyYW1JbmZvTG9nIiwiZGF0YSIsIkFSUkFZX0JVRkZFUl9UWVBFIiwiU1RBVElDX0RSQVciLCJjcmVhdGVCdWZmZXIiLCJmbG9hdDMyRGF0YUFycmF5IiwiRmxvYXQzMkFycmF5IiwiYnVmZmVyRGF0YSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjs7QUFFQSxJQUFNQyxlQUFlRCxRQUFRLGlCQUFSLENBQXJCOztJQUVRRSxzQixHQUEyQkQsWSxDQUEzQkMsc0I7OztBQUVSLElBQU1D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QWEyRSxZQUFiLENBQTBCdkUsYUFBMUIsRUFBeUNxRSxjQUF6Qzs7QUFFQSxXQUFLekUsT0FBTCxDQUFhNEUsV0FBYixDQUF5QnhFLGFBQXpCOztBQUVBLFVBQU15RSxhQUFhLEtBQUs3RSxPQUFMLENBQWE4RSxtQkFBYixDQUFpQzFFLGFBQWpDLEVBQWdELEtBQUtKLE9BQUwsQ0FBYStFLFdBQTdELENBQW5COztBQUVBLFVBQUksQ0FBQ0YsVUFBTCxFQUFpQjtBQUNmLFlBQU1HLFVBQVUsS0FBS2hGLE9BQUwsQ0FBYWlGLGlCQUFiLENBQStCN0UsYUFBL0IsQ0FBaEIsQ0FEZSxDQUNpRDs7QUFFaEUsY0FBTSxJQUFJRixLQUFKLDZDQUFtRDhFLE9BQW5ELFFBQU47QUFDRDs7QUFFRCxhQUFPNUUsYUFBUDtBQUNEOzs7aUNBRVk4RSxJLEVBQU07QUFDakIsVUFBTUMsb0JBQW9CLEtBQUtuRixPQUFMLENBQWFvQyxZQUF2QztBQUFBLFVBQXFEO0FBQy9DZ0Qsb0JBQWMsS0FBS3BGLE9BQUwsQ0FBYW9GLFdBRGpDO0FBQUEsVUFFTWpGLFNBQVMsS0FBS0gsT0FBTCxDQUFhcUYsWUFBYixFQUZmO0FBQUEsVUFHTUMsbUJBQW1CLElBQUlDLFlBQUosQ0FBaUJMLElBQWpCLENBSHpCOztBQUtBLFdBQUtsRixPQUFMLENBQWFxQixVQUFiLENBQXdCOEQsaUJBQXhCLEVBQTJDaEYsTUFBM0M7O0FBRUEsV0FBS0gsT0FBTCxDQUFhd0YsVUFBYixDQUF3QkwsaUJBQXhCLEVBQTJDRyxnQkFBM0MsRUFBNkRGLFdBQTdEOztBQUVBLGFBQU9qRixNQUFQO0FBQ0Q7Ozs7OztBQUdIc0YsT0FBT0MsT0FBUCxHQUFpQjdGLE1BQWpCIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTtcblxuY29uc3QgZG9tVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZG9tJyk7XG5cbmNvbnN0IHsgZG9tRWxlbWVudEZyb21TZWxlY3RvciB9ID0gZG9tVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0UmVkID0gMC4wLFxuICAgICAgZGVmYXVsdEJsdWUgPSAwLjAsXG4gICAgICBkZWZhdWx0R3JlZW4gPSAwLjAsXG4gICAgICBkZWZhdWx0QWxwaGEgPSAxLjAsXG4gICAgICBkZWZhdWx0RGVwdGggPSAxLjAsXG4gICAgICBkZWZhdWx0VmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCBhVmVydGV4UG9zaXRpb247XG4gICAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCB1TW9kZWxWaWV3TWF0cml4O1xuICAgICAgICB1bmlmb3JtIG1hdDQgdVByb2plY3Rpb25NYXRyaXg7XG4gICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHVQcm9qZWN0aW9uTWF0cml4ICogdU1vZGVsVmlld01hdHJpeCAqIGFWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIGRlZmF1bHRGcmFnbWVudFNoYWRlclNvdXJjZSA9IGBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgMS4wKTtcbiAgICAgICAgfVxuICAgICAgYDtcbiAgXG5jbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9ICdjYW52YXMnKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgICAgICAgIGNvbnRleHQgPSBkb21FbGVtZW50LmdldENvbnRleHQoJ3dlYmdsJyk7XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGluaXRpYWxpc2UgV2ViR0wuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cbiAgXG4gIHJlbmRlcihidWZmZXIsIHNoYWRlclByb2dyYW0sIHByb2plY3Rpb24sIG1vZGVsVmlldykge1xuICAgIGNvbnN0IHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uLmdldE1hdHJpeCgpLFxuICAgICAgICAgIG1vZGVsVmlld01hdHJpeCA9IG1vZGVsVmlldy5nZXRNYXRyaXgoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnYVZlcnRleFBvc2l0aW9uJyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1UHJvamVjdGlvbk1hdHJpeCcpLFxuICAgICAgICAgIG1vZGVsVmlld01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1TW9kZWxWaWV3TWF0cml4Jyk7XG5cbiAgICB0aGlzLmVuYWJsZURlcHRoVGVzdGluZygpO1xuICAgIHRoaXMuZW5hYmxlRGVwdGhGdW5jdGlvbigpO1xuXG4gICAgdGhpcy5jbGVhckNvbG91cigpO1xuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBidWZmZXIpO1xuICAgIFxuICAgIHRoaXMudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgocHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChtb2RlbFZpZXdNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG1vZGVsVmlld01hdHJpeCk7XG4gIH1cblxuICBhcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIG1hdHJpeCkge1xuICAgIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm1Mb2NhdGlvbiwgZmFsc2UsIG1hdHJpeCk7XG4gIH1cbiAgXG4gIGRyYXcoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gMCxcbiAgICAgICAgICB2ZXJ0ZXhDb3VudCA9IDQ7XG4gICAgXG4gICAgdGhpcy5jb250ZXh0LmRyYXdBcnJheXModGhpcy5jb250ZXh0LlRSSUFOR0xFX1NUUklQLCBvZmZzZXQsIHZlcnRleENvdW50KTtcbiAgfVxuXG4gIGJpbmRCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgYnVmZmVyKSB7XG4gICAgY29uc3QgbnVtQ29tcG9uZW50cyA9IDIsXG4gICAgICAgICAgdHlwZSA9IHRoaXMuY29udGV4dC5GTE9BVCxcbiAgICAgICAgICBub3JtYWxpemUgPSBmYWxzZSxcbiAgICAgICAgICBzdHJpZGUgPSAwLFxuICAgICAgICAgIG9mZnNldCA9IDA7XG5cbiAgICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0aGlzLmNvbnRleHQuQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICAgIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIG51bUNvbXBvbmVudHMsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQpO1xuICAgIHRoaXMuY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgY2xlYXJDb2xvdXIocmVkID0gZGVmYXVsdFJlZCwgZ3JlZW4gPSBkZWZhdWx0R3JlZW4sIGJsdWUgPSBkZWZhdWx0Qmx1ZSwgYWxwaGEgPSBkZWZhdWx0QWxwaGEpIHsgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IocmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEpOyB9XG5cbiAgY2xlYXJEZXB0aChkZXB0aCA9IGRlZmF1bHREZXB0aCkgeyB0aGlzLmNvbnRleHQuY2xlYXJEZXB0aChkZXB0aCk7IH1cblxuICBlbmFibGVEZXB0aFRlc3RpbmcoKSB7IHRoaXMuY29udGV4dC5lbmFibGUodGhpcy5jb250ZXh0LkRFUFRIX1RFU1QpOyB9XG5cbiAgZW5hYmxlRGVwdGhGdW5jdGlvbigpIHsgdGhpcy5jb250ZXh0LmRlcHRoRnVuYyh0aGlzLmNvbnRleHQuTEVRVUFMKTsgfVxuXG4gIHVzZVByb2dyYW0ocHJvZ3JhbSkgeyB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbShwcm9ncmFtKTsgfVxuXG4gIGNsZWFyRGVwdGhCdWZmZXIoKSB7IHRoaXMuY29udGV4dC5jbGVhcih0aGlzLmNvbnRleHQuREVQVEhfQlVGRkVSX0JJVCk7IH1cblxuICBjbGVhckNvbG91ckJ1ZmZlcigpIHsgdGhpcy5jb250ZXh0LmNsZWFyKHRoaXMuY29udGV4dC5DT0xPUl9CVUZGRVJfQklUKTsgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UpIHtcbiAgICBjb25zdCBzaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gICAgdGhpcy5jb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gICAgY29uc3QgY29tcGlsZVN0YXR1cyA9IHRoaXMuY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCB0aGlzLmNvbnRleHQuQ09NUElMRV9TVEFUVVMpO1xuXG4gICAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZGVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSA9IGRlZmF1bHRWZXJ0ZXhTaGFkZXJTb3VyY2UpIHtcbiAgICBjb25zdCBWRVJURVhfU0hBREVSX1RZUEUgPSB0aGlzLmNvbnRleHQuVkVSVEVYX1NIQURFUiwgIC8vL1xuICAgICAgICAgIHZlcnRleFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKFZFUlRFWF9TSEFERVJfVFlQRSwgdmVydGV4U2hhZGVyU291cmNlKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG4gIH1cblxuICBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSA9IGRlZmF1bHRGcmFnbWVudFNoYWRlclNvdXJjZSkge1xuICAgIGNvbnN0IEZSQUdNRU5UX1NIQURFUl9UWVBFID0gdGhpcy5jb250ZXh0LkZSQUdNRU5UX1NIQURFUiwgIC8vL1xuICAgICAgICAgIHZlcnRleFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKEZSQUdNRU5UX1NIQURFUl9UWVBFLCBmcmFnbWVudFNoYWRlclNvdXJjZSk7XG5cbiAgICByZXR1cm4gdmVydGV4U2hhZGVyO1xuICB9XG5cbiAgY3JlYXRlU2hhZGVyUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlKSB7XG4gICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKCksXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IHRoaXMuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xuXG4gICAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuXG4gICAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuXG4gICAgY29uc3QgbGlua1N0YXR1cyA9IHRoaXMuY29udGV4dC5nZXRQcm9ncmFtUGFyYW1ldGVyKHNoYWRlclByb2dyYW0sIHRoaXMuY29udGV4dC5MSU5LX1NUQVRVUyk7XG5cbiAgICBpZiAoIWxpbmtTdGF0dXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmNvbnRleHQuZ2V0UHJvZ3JhbUluZm9Mb2coc2hhZGVyUHJvZ3JhbSk7ICAvLy9cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIgcHJvZ3JhbSwgJyR7bWVzc2FnZX0nYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoYWRlclByb2dyYW07XG4gIH1cblxuICBjcmVhdGVCdWZmZXIoZGF0YSkge1xuICAgIGNvbnN0IEFSUkFZX0JVRkZFUl9UWVBFID0gdGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgLy8vXG4gICAgICAgICAgU1RBVElDX0RSQVcgPSB0aGlzLmNvbnRleHQuU1RBVElDX0RSQVcsXG4gICAgICAgICAgYnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpLFxuICAgICAgICAgIGZsb2F0MzJEYXRhQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEpO1xuXG4gICAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIoQVJSQVlfQlVGRkVSX1RZUEUsIGJ1ZmZlcik7XG5cbiAgICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YShBUlJBWV9CVUZGRVJfVFlQRSwgZmxvYXQzMkRhdGFBcnJheSwgU1RBVElDX0RSQVcpO1xuXG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcblxuIl19