'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domUtilities = require('./utilities/dom'),
    bufferMixin = require('./mixin/buffer'),
    shaderMixin = require('./mixin/shader'),
    colourMixin = require('./mixin/colour'),
    depthMixin = require('./mixin/depth');

var domElementFromSelector = domUtilities.domElementFromSelector;


var defaultDepth = 1.0,
    defaultOffset = 0;

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
    key: 'useProgram',
    value: function useProgram(program) {
      this.context.useProgram(program);
    }
  }, {
    key: 'render',
    value: function render(shaderProgram, projection, modelView) {
      this.useProgram(shaderProgram);

      var projectionMatrix = projection.getMatrix(),
          modelViewMatrix = modelView.getMatrix(),
          projectionMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          modelViewMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uModelViewMatrix');

      this.enableDepthTesting();
      this.enableDepthFunction();

      this.clearColour();
      this.clearDepth();
      this.clearColourBuffer();
      this.clearDepthBuffer();

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
    value: function draw(vertexCount) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;

      this.context.drawArrays(this.context.TRIANGLE_STRIP, offset, vertexCount);
    }
  }]);

  return Canvas;
}();

Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, depthMixin);

module.exports = Canvas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsiZG9tVXRpbGl0aWVzIiwicmVxdWlyZSIsImJ1ZmZlck1peGluIiwic2hhZGVyTWl4aW4iLCJjb2xvdXJNaXhpbiIsImRlcHRoTWl4aW4iLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiZGVmYXVsdERlcHRoIiwiZGVmYXVsdE9mZnNldCIsIkNhbnZhcyIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiRXJyb3IiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInByb2dyYW0iLCJuYW1lIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJ1c2VQcm9ncmFtIiwic2hhZGVyUHJvZ3JhbSIsInByb2plY3Rpb24iLCJtb2RlbFZpZXciLCJwcm9qZWN0aW9uTWF0cml4IiwiZ2V0TWF0cml4IiwibW9kZWxWaWV3TWF0cml4IiwicHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsIm1vZGVsVmlld01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImVuYWJsZURlcHRoVGVzdGluZyIsImVuYWJsZURlcHRoRnVuY3Rpb24iLCJjbGVhckNvbG91ciIsImNsZWFyRGVwdGgiLCJjbGVhckNvbG91ckJ1ZmZlciIsImNsZWFyRGVwdGhCdWZmZXIiLCJhcHBseU1hdHJpeCIsInVuaWZvcm1Mb2NhdGlvbiIsIm1hdHJpeCIsInVuaWZvcm1NYXRyaXg0ZnYiLCJ2ZXJ0ZXhDb3VudCIsIm9mZnNldCIsImRyYXdBcnJheXMiLCJUUklBTkdMRV9TVFJJUCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGlCQUFSLENBQXJCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxnQkFBUixDQURwQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsZ0JBQVIs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ZG9tVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZG9tJyksXG4gICAgICBidWZmZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vYnVmZmVyJyksXG4gICAgICBzaGFkZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vc2hhZGVyJyksXG4gICAgICBjb2xvdXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY29sb3VyJyksXG4gICAgICBkZXB0aE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9kZXB0aCcpO1xuXG5jb25zdCB7IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IgfSA9IGRvbVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdERlcHRoID0gMS4wLFxuICAgICAgZGVmYXVsdE9mZnNldCA9IDA7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSBXZWJHTC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgdXNlUHJvZ3JhbShwcm9ncmFtKSB7IHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pOyB9XG5cbiAgcmVuZGVyKHNoYWRlclByb2dyYW0sIHByb2plY3Rpb24sIG1vZGVsVmlldykge1xuICAgIHRoaXMudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcblxuICAgIGNvbnN0IHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uLmdldE1hdHJpeCgpLFxuICAgICAgICAgIG1vZGVsVmlld01hdHJpeCA9IG1vZGVsVmlldy5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VQcm9qZWN0aW9uTWF0cml4JyksXG4gICAgICAgICAgbW9kZWxWaWV3TWF0cml4VW5pZm9ybUxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VNb2RlbFZpZXdNYXRyaXgnKTtcblxuICAgIHRoaXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7XG4gICAgdGhpcy5lbmFibGVEZXB0aEZ1bmN0aW9uKCk7XG5cbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICAgIHRoaXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG1vZGVsVmlld01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbW9kZWxWaWV3TWF0cml4KTtcbiAgfVxuXG4gIGFwcGx5TWF0cml4KHVuaWZvcm1Mb2NhdGlvbiwgbWF0cml4KSB7XG4gICAgdGhpcy5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodW5pZm9ybUxvY2F0aW9uLCBmYWxzZSwgbWF0cml4KTtcbiAgfVxuICBcbiAgZHJhdyh2ZXJ0ZXhDb3VudCwgb2Zmc2V0ID0gZGVmYXVsdE9mZnNldCkge1xuICAgIHRoaXMuY29udGV4dC5kcmF3QXJyYXlzKHRoaXMuY29udGV4dC5UUklBTkdMRV9TVFJJUCwgb2Zmc2V0LCB2ZXJ0ZXhDb3VudCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBidWZmZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgY29sb3VyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG4iXX0=