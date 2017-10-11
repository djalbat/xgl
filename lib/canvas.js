'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var programMixin = require('./canvas/mixin/program'),
    textureMixin = require('./canvas/mixin/texture'),
    colourMixin = require('./canvas/mixin/colour'),
    shaderMixin = require('./canvas/mixin/shader'),
    bufferMixin = require('./canvas/mixin/buffer'),
    matrixMixin = require('./canvas/mixin/matrix'),
    depthMixin = require('./canvas/mixin/depth'),
    mouseMixin = require('./canvas/mixin/mouse'),
    domUtilities = require('./utilities/dom');

var domElementFromSelector = domUtilities.domElementFromSelector;


var defaultOffset = 0;

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
    value: function render(shader, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var offsetMatrixUniformLocation = shader.getOffsetMatrixUniformLocation(),
          rotationMatrixUniformLocation = shader.getRotationMatrixUniformLocation(),
          positionMatrixUniformLocation = shader.getPositionMatrixUniformLocation(),
          projectionMatrixUniformLocation = shader.getProjectionMatrixUniformLocation(),
          normalMatrixUniformLocation = shader.getNormalMatrixUniformLocation(),
          canvas = this; ///

      offsetMatrix.apply(offsetMatrixUniformLocation, canvas);
      rotationMatrix.apply(rotationMatrixUniformLocation, canvas);
      positionMatrix.apply(positionMatrixUniformLocation, canvas);
      projectionMatrix.apply(projectionMatrixUniformLocation, canvas);
      normalMatrix.apply(normalMatrixUniformLocation, canvas);

      var count = shader.getCount();

      this.drawElements(count);
    }
  }, {
    key: 'drawElements',
    value: function drawElements(count) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
      var _context = this.context,
          TRIANGLES = _context.TRIANGLES,
          UNSIGNED_SHORT = _context.UNSIGNED_SHORT,
          mode = TRIANGLES,
          type = UNSIGNED_SHORT;


      this.context.drawElements(mode, count, type, offset);
    }
  }]);

  return Canvas;
}();

Object.assign(Canvas.prototype, programMixin);
Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, depthMixin);
Object.assign(Canvas.prototype, mouseMixin);

module.exports = Canvas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsicHJvZ3JhbU1peGluIiwicmVxdWlyZSIsInRleHR1cmVNaXhpbiIsImNvbG91ck1peGluIiwic2hhZGVyTWl4aW4iLCJidWZmZXJNaXhpbiIsIm1hdHJpeE1peGluIiwiZGVwdGhNaXhpbiIsIm1vdXNlTWl4aW4iLCJkb21VdGlsaXRpZXMiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiZGVmYXVsdE9mZnNldCIsIkNhbnZhcyIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiRXJyb3IiLCJ3aWR0aCIsImhlaWdodCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwicHJvZ3JhbSIsIm5hbWUiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsInNldEF0dHJpYnV0ZSIsIngiLCJ5Iiwidmlld3BvcnQiLCJ1bmlmb3JtTG9jYXRpb24iLCJpbnRlZ2VyVmFsdWUiLCJ1bmlmb3JtMWkiLCJjbGVhckRlcHRoIiwiY2xlYXJDb2xvdXIiLCJjbGVhckRlcHRoQnVmZmVyIiwiY2xlYXJDb2xvdXJCdWZmZXIiLCJzZXRXaWR0aCIsInNldEhlaWdodCIsInNldFZpZXdwb3J0Iiwic2hhZGVyIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJyb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwibm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiY2FudmFzIiwiYXBwbHkiLCJjb3VudCIsImdldENvdW50IiwiZHJhd0VsZW1lbnRzIiwib2Zmc2V0IiwiVFJJQU5HTEVTIiwiVU5TSUdORURfU0hPUlQiLCJtb2RlIiwidHlwZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLHdCQUFSLENBQXJCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSx3QkFBUixDQURyQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsdUJBQVIsQ0FGcEI7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLHVCQUFSLENBSHBCO0FBQUEsSUFJTUksY0FBY0osUUFBUSx1QkFBUixDQUpwQjtBQUFBLElBS01LLGNBQWNMLFFBQVEsdUJBQVIsQ0FMcEI7QUFBQSxJQU1NTSxhQUFhTixRQUFRLHNCQUFSLENBTm5CO0FBQUEsSUFPTU8sYUFBYVAsUUFBUSxzQkFBUixDQVBuQjtBQUFBLElBUU1RLGVBQWVSLFFBQVEsaUJBQVIsQ0FSckI7O0lBVVFTLHNCLEdBQTJCRCxZLENBQTNCQyxzQjs7O0FBRVIsSUFBTUMsZ0JBQWdCLENBQXRCOztJQUVNQyxNO0FBQ0osb0JBQWlDO0FBQUEsUUFBckJDLFFBQXFCLHVFQUFWLFFBQVU7O0FBQUE7O0FBQy9CLFFBQU1DLGFBQWFKLHVCQUF1QkcsUUFBdkIsQ0FBbkI7QUFBQSxRQUNNRSxVQUFVRCxXQUFXRSxVQUFYLENBQXNCLE9BQXRCLENBRGhCOztBQUdBLFFBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osWUFBTSxJQUFJRSxLQUFKLHFDQUFOO0FBQ0Q7O0FBRUQsU0FBS0YsT0FBTCxHQUFlQSxPQUFmOztBQUVBLFNBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FB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U0FGNkI7QUFBQSxVQUdwQ0csSUFIb0MsR0FHN0JGLGNBSDZCOzs7QUFLMUMsV0FBS2hELE9BQUwsQ0FBYTZDLFlBQWIsQ0FBMEJJLElBQTFCLEVBQWdDTixLQUFoQyxFQUF1Q08sSUFBdkMsRUFBNkNKLE1BQTdDO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxNQUFQLENBQWN2RCxPQUFPd0QsU0FBckIsRUFBZ0NwRSxZQUFoQztBQUNBa0UsT0FBT0MsTUFBUCxDQUFjdkQsT0FBT3dELFNBQXJCLEVBQWdDbEUsWUFBaEM7QUFDQWdFLE9BQU9DLE1BQVAsQ0FBY3ZELE9BQU93RCxTQUFyQixFQUFnQ2pFLFdBQWhDO0FBQ0ErRCxPQUFPQyxNQUFQLENBQWN2RCxPQUFPd0QsU0FBckIsRUFBZ0NoRSxXQUFoQztBQUNBOEQsT0FBT0MsTUFBUCxDQUFjdkQsT0FBT3dELFNBQXJCLEVBQWdDL0QsV0FBaEM7QUFDQTZELE9BQU9DLE1BQVAsQ0FBY3ZELE9BQU93RCxTQUFyQixFQUFnQzlELFdBQWhDO0FBQ0E0RCxPQUFPQyxNQUFQLENBQWN2RCxPQUFPd0QsU0FBckIsRUFBZ0M3RCxVQUFoQztBQUNBMkQsT0FBT0MsTUFBUCxDQUFjdkQsT0FBT3dELFNBQXJCLEVBQWdDNUQsVUFBaEM7O0FBRUE2RCxPQUFPQyxPQUFQLEdBQWlCMUQsTUFBakIiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwcm9ncmFtTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9wcm9ncmFtJyksXG4gICAgICB0ZXh0dXJlTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi90ZXh0dXJlJyksXG4gICAgICBjb2xvdXJNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL2NvbG91cicpLFxuICAgICAgc2hhZGVyTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9zaGFkZXInKSxcbiAgICAgIGJ1ZmZlck1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vYnVmZmVyJyksXG4gICAgICBtYXRyaXhNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL21hdHJpeCcpLFxuICAgICAgZGVwdGhNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL2RlcHRoJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vbW91c2UnKSxcbiAgICAgIGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpO1xuXG5jb25zdCB7IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IgfSA9IGRvbVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdE9mZnNldCA9IDA7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgY29udGV4dC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpOyB9XG5cbiAgc2V0Vmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCkgeyB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7IH1cblxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHsgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7IH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuICAgIHRoaXMuc2V0Vmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoc2hhZGVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgY2FudmFzID0gdGhpczsgIC8vL1xuXG4gICAgb2Zmc2V0TWF0cml4LmFwcGx5KG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgY2FudmFzKTtcbiAgICByb3RhdGlvbk1hdHJpeC5hcHBseShyb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgY2FudmFzKTtcbiAgICBwb3NpdGlvbk1hdHJpeC5hcHBseShwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgY2FudmFzKTtcbiAgICBwcm9qZWN0aW9uTWF0cml4LmFwcGx5KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgbm9ybWFsTWF0cml4LmFwcGx5KG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgY2FudmFzKTtcblxuICAgIGNvbnN0IGNvdW50ID0gc2hhZGVyLmdldENvdW50KCk7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhjb3VudCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoY291bnQsIG9mZnNldCA9IGRlZmF1bHRPZmZzZXQpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVDtcblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHByb2dyYW1NaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgc2hhZGVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBidWZmZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcbiJdfQ==