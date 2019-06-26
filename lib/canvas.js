'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var depthMixin = require('./mixin/depth'),
    colourMixin = require('./mixin/colour'),
    shaderMixin = require('./mixin/shader'),
    bufferMixin = require('./mixin/buffer'),
    matrixMixin = require('./mixin/matrix'),
    programMixin = require('./mixin/program'),
    textureMixin = require('./mixin/texture'),
    blendingMixin = require('./mixin/blending');

var Canvas = function () {
  function Canvas() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'canvas';

    _classCallCheck(this, Canvas);

    var domElement = domElementFromSelector(selector),
        context = domElement.getContext('webgl');

    if (!context) {
      throw new Error('Unable to initialise the context.');
    }

    this.context = context;

    this.domElement = domElement;

    this.enableDepthTesting(); ///
  }

  _createClass(Canvas, [{
    key: 'getContext',
    value: function getContext() {
      return this.context;
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.domElement.width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.domElement.height;
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
    key: 'setWidth',
    value: function setWidth(width) {
      this.domElement.setAttribute('width', width);
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      this.domElement.setAttribute('height', height);
    }
  }, {
    key: 'setViewport',
    value: function setViewport(x, y, width, height) {
      this.context.viewport(x, y, width, height);
    }
  }, {
    key: 'setUniformLocationIntegerValue',
    value: function setUniformLocationIntegerValue(uniformLocation, integerValue) {
      this.context.uniform1i(uniformLocation, integerValue);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.clearDepth();
      this.clearColour();
      this.clearDepthBuffer();
      this.clearColourBuffer();
    }
  }, {
    key: 'resize',
    value: function resize(width, height) {
      this.setWidth(width);
      this.setHeight(height);
      this.setViewport(0, 0, width, height);
    }
  }, {
    key: 'render',
    value: function render(renderer, offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var offsetMatrixUniformLocation = renderer.getOffsetMatrixUniformLocation(),
          normalsMatrixUniformLocation = renderer.getNormalsMatrixUniformLocation(),
          positionMatrixUniformLocation = renderer.getPositionMatrixUniformLocation(),
          rotationsMatrixUniformLocation = renderer.getRotationsMatrixUniformLocation(),
          projectionMatrixUniformLocation = renderer.getProjectionMatrixUniformLocation();

      this.applyMatrix(offsetMatrixUniformLocation, offsetMatrix);
      this.applyMatrix(normalsMatrixUniformLocation, normalsMatrix);
      this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
      this.applyMatrix(rotationsMatrixUniformLocation, rotationsMatrix);
      this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
    }
  }, {
    key: 'drawElements',
    value: function drawElements(start, finish) {
      var _context = this.context,
          TRIANGLES = _context.TRIANGLES,
          UNSIGNED_SHORT = _context.UNSIGNED_SHORT,
          mode = TRIANGLES,
          type = UNSIGNED_SHORT,
          count = finish - start,
          offset = start * 2; ///

      this.context.drawElements(mode, count, type, offset);
    }
  }]);

  return Canvas;
}();

Object.assign(Canvas.prototype, depthMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, programMixin);
Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, blendingMixin);

module.exports = Canvas;

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsiZGVwdGhNaXhpbiIsInJlcXVpcmUiLCJjb2xvdXJNaXhpbiIsInNoYWRlck1peGluIiwiYnVmZmVyTWl4aW4iLCJtYXRyaXhNaXhpbiIsInByb2dyYW1NaXhpbiIsInRleHR1cmVNaXhpbiIsImJsZW5kaW5nTWl4aW4iLCJDYW52YXMiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiY29udGV4dCIsImdldENvbnRleHQiLCJFcnJvciIsImVuYWJsZURlcHRoVGVzdGluZyIsIndpZHRoIiwiaGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJwcm9ncmFtIiwibmFtZSIsImdldFVuaWZvcm1Mb2NhdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwic2V0QXR0cmlidXRlIiwieCIsInkiLCJ2aWV3cG9ydCIsInVuaWZvcm1Mb2NhdGlvbiIsImludGVnZXJWYWx1ZSIsInVuaWZvcm0xaSIsImNsZWFyRGVwdGgiLCJjbGVhckNvbG91ciIsImNsZWFyRGVwdGhCdWZmZXIiLCJjbGVhckNvbG91ckJ1ZmZlciIsInNldFdpZHRoIiwic2V0SGVpZ2h0Iiwic2V0Vmlld3BvcnQiLCJyZW5kZXJlciIsIm9mZnNldE1hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJyb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImFwcGx5TWF0cml4Iiwic3RhcnQiLCJmaW5pc2giLCJUUklBTkdMRVMiLCJVTlNJR05FRF9TSE9SVCIsIm1vZGUiLCJ0eXBlIiwiY291bnQiLCJvZmZzZXQiLCJkcmF3RWxlbWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxnQkFBUixDQURwQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsZ0JBQVIsQ0FGcEI7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLGdCQUFSLENBSHBCO0FBQUEsSUFJTUksY0FBY0osUUFBUSxnQkFBUixDQUpwQjtBQUFBLElBS01LLGVBQWVMLFFBQVEsaUJBQVIsQ0FMckI7QUFBQSxJQU1NTSxlQUFlTixRQUFRLGlCQUFSLENBTnJCO0FBQUEsSUFPTU8sZ0JBQWdCUCxRQUFRLGtCQUFSLENBUHRCOztJQVNNUSxNO0FBQ0osb0JBQWlDO0FBQUEsUUFBckJDLFFBQXFCLHVFQUFWLFFBQVU7O0FBQUE7O0FBQy9CLFFBQU1DLGFBQWFDLHVCQUF1QkYsUUFBdkIsQ0FBbkI7QUFBQSxRQUNNRyxVQUFVRixXQUFXRyxVQUFYLENBQXNCLE9BQXRCLENBRGhCOztBQUdBLFFBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osWUFBTSxJQUFJRSxLQUFKLHFDQUFOO0FBQ0Q7O0FBRUQsU0FBS0YsT0FBTCxHQUFlQSxPQUFmOztBQUVBLFNBQUtGLFVBQUwsR0FBa0JBLFVBQWxCOztBQUVBLFNBQUtLLGtCQUFMLEdBWitCLENBWUg7QUFDN0I7Ozs7aUNBRVk7QUFDWCxhQUFPLEtB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QyxFQUF1Q0QsSUFBdkMsRUFBNkNFLE1BQTdDO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxNQUFQLENBQWN6RCxPQUFPMEQsU0FBckIsRUFBZ0NuRSxVQUFoQztBQUNBaUUsT0FBT0MsTUFBUCxDQUFjekQsT0FBTzBELFNBQXJCLEVBQWdDakUsV0FBaEM7QUFDQStELE9BQU9DLE1BQVAsQ0FBY3pELE9BQU8wRCxTQUFyQixFQUFnQ2hFLFdBQWhDO0FBQ0E4RCxPQUFPQyxNQUFQLENBQWN6RCxPQUFPMEQsU0FBckIsRUFBZ0MvRCxXQUFoQztBQUNBNkQsT0FBT0MsTUFBUCxDQUFjekQsT0FBTzBELFNBQXJCLEVBQWdDOUQsV0FBaEM7QUFDQTRELE9BQU9DLE1BQVAsQ0FBY3pELE9BQU8wRCxTQUFyQixFQUFnQzdELFlBQWhDO0FBQ0EyRCxPQUFPQyxNQUFQLENBQWN6RCxPQUFPMEQsU0FBckIsRUFBZ0M1RCxZQUFoQztBQUNBMEQsT0FBT0MsTUFBUCxDQUFjekQsT0FBTzBELFNBQXJCLEVBQWdDM0QsYUFBaEM7O0FBRUE0RCxPQUFPQyxPQUFQLEdBQWlCNUQsTUFBakI7O0FBRUEsU0FBU0csc0JBQVQsQ0FBZ0NGLFFBQWhDLEVBQTBDO0FBQ3hDLE1BQU1DLGFBQWMsT0FBT0QsUUFBUCxLQUFvQixRQUFyQixHQUNFNEQsU0FBU0MsZ0JBQVQsQ0FBMEI3RCxRQUExQixFQUFvQyxDQUFwQyxDQURGLEdBQzRDO0FBQ3hDQSxVQUZ2QixDQUR3QyxDQUdOOztBQUVsQyxTQUFPQyxVQUFQO0FBQ0QiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZXB0aE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9kZXB0aCcpLFxuICAgICAgY29sb3VyTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NvbG91cicpLFxuICAgICAgc2hhZGVyTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3NoYWRlcicpLFxuICAgICAgYnVmZmVyTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2J1ZmZlcicpLFxuICAgICAgbWF0cml4TWl4aW4gPSByZXF1aXJlKCcuL21peGluL21hdHJpeCcpLFxuICAgICAgcHJvZ3JhbU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9wcm9ncmFtJyksXG4gICAgICB0ZXh0dXJlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3RleHR1cmUnKSxcbiAgICAgIGJsZW5kaW5nTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2JsZW5kaW5nJyk7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgY29udGV4dC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmVuYWJsZURlcHRoVGVzdGluZygpOyAgLy8vXG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpOyB9XG5cbiAgc2V0Vmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCkgeyB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7IH1cblxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHsgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7IH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuICAgIHRoaXMuc2V0Vmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXIocmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0TWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVCxcbiAgICAgICAgICBjb3VudCA9IGZpbmlzaCAtIHN0YXJ0LFxuICAgICAgICAgIG9mZnNldCA9IHN0YXJ0ICogMjsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgY29sb3VyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBzaGFkZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbWF0cml4TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBibGVuZGluZ01peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG4iXX0=