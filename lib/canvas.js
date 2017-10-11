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
    value: function render(shader, offset, rotation, position, projection, normal) {
      var offsetMatrix = offset.getMatrix(),
          rotationMatrix = rotation.getMatrix(),
          positionMatrix = position.getMatrix(),
          projectionMatrix = projection.getMatrix(),
          normalMatrix = normal.getMatrix(),
          offsetMatrixUniformLocation = shader.getOffsetMatrixUniformLocation(),
          rotationMatrixUniformLocation = shader.getRotationMatrixUniformLocation(),
          positionMatrixUniformLocation = shader.getPositionMatrixUniformLocation(),
          projectionMatrixUniformLocation = shader.getProjectionMatrixUniformLocation(),
          normalMatrixUniformLocation = shader.getNormalMatrixUniformLocation();

      this.applyMatrix(offsetMatrixUniformLocation, offsetMatrix);
      this.applyMatrix(rotationMatrixUniformLocation, rotationMatrix);
      this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
      this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
      this.applyMatrix(normalMatrixUniformLocation, normalMatrix);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsicHJvZ3JhbU1peGluIiwicmVxdWlyZSIsInRleHR1cmVNaXhpbiIsImNvbG91ck1peGluIiwic2hhZGVyTWl4aW4iLCJidWZmZXJNaXhpbiIsIm1hdHJpeE1peGluIiwiZGVwdGhNaXhpbiIsIm1vdXNlTWl4aW4iLCJkb21VdGlsaXRpZXMiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiZGVmYXVsdE9mZnNldCIsIkNhbnZhcyIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiRXJyb3IiLCJ3aWR0aCIsImhlaWdodCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwicHJvZ3JhbSIsIm5hbWUiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsInNldEF0dHJpYnV0ZSIsIngiLCJ5Iiwidmlld3BvcnQiLCJ1bmlmb3JtTG9jYXRpb24iLCJpbnRlZ2VyVmFsdWUiLCJ1bmlmb3JtMWkiLCJjbGVhckRlcHRoIiwiY2xlYXJDb2xvdXIiLCJjbGVhckRlcHRoQnVmZmVyIiwiY2xlYXJDb2xvdXJCdWZmZXIiLCJzZXRXaWR0aCIsInNldEhlaWdodCIsInNldFZpZXdwb3J0Iiwic2hhZGVyIiwib2Zmc2V0Iiwicm90YXRpb24iLCJwb3NpdGlvbiIsInByb2plY3Rpb24iLCJub3JtYWwiLCJvZmZzZXRNYXRyaXgiLCJnZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsIm9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJhcHBseU1hdHJpeCIsImNvdW50IiwiZ2V0Q291bnQiLCJkcmF3RWxlbWVudHMiLCJUUklBTkdMRVMiLCJVTlNJR05FRF9TSE9SVCIsIm1vZGUiLCJ0eXBlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsd0JBQVIsQ0FBckI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLHdCQUFSLENBRHJCO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSx1QkFBUixDQUZwQjtBQUFBLElBR01HLGNBQWNILFFBQVEsdUJBQVIsQ0FIcEI7QUFBQSxJQUlNSSxjQUFjSixRQUFRLHVCQUFSLENBSnBCO0FBQUEsSUFLTUssY0FBY0wsUUFBUSx1QkFBUixDQUxwQjtBQUFBLElBTU1NLGFBQWFOLFFBQVEsc0JBQVIsQ0FObkI7QUFBQSxJQU9NTyxhQUFhUCxRQUFRLHNCQUFSLENBUG5CO0FBQUEsSUFRTVEsZUFBZVIsUUFBUSxpQkFBUixDQVJyQjs7SUFVUVMsc0IsR0FBMkJELFksQ0FBM0JDLHNCOzs7QUFFUixJQUFNQyxnQkFBZ0IsQ0FBdEI7O0lBRU1DLE07QUFDSixvQkFBaUM7QUFBQSxRQUFyQkMsUUFBcUIsdUVBQVYsUUFBVTs7QUFBQTs7QUFDL0IsUUFBTUMsYUFBYUosdUJBQXVCRyxRQUF2QixDQUFuQjtBQUFBLFFBQ01FLFVBQVVELFdBQVdFLFVBQVgsQ0FBc0IsT0FBdEIsQ0FEaEI7O0FBR0EsUUFBSSxDQUFDRCxPQUFMLEVBQWM7QUFDWixZQUFNLElBQUlFLEtBQUoscUNBQU47QUFDRDs7QUFFRCxT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QUFLQyxZQUFMLENBQWtCRixLQUFsQjtBQUNEOzs7aUNBRVlBLEssRUFBK0I7QUFBQSxVQUF4QnRCLE1BQXdCLHVFQUFmOUIsYUFBZTtBQUFBLHFCQUNKLEtBQUtJLE9BREQ7QUFBQSxVQUNsQ21ELFNBRGtDLFlBQ2xDQSxTQURrQztBQUFBLFVBQ3ZCQyxjQUR1QixZQUN2QkEsY0FEdUI7QUFBQSxVQUVwQ0MsSUFGb0MsR0FFN0JGLFNBRjZCO0FBQUEsVUFHcENHLElBSG9DLEdBRzdCRixjQUg2Qjs7O0FBSzFDLFdBQUtwRCxPQUFMLENBQWFrRCxZQUFiLENBQTBCRyxJQUExQixFQUFnQ0wsS0FBaEMsRUFBdUNNLElBQXZDLEVBQTZDNUIsTUFBN0M7QUFDRDs7Ozs7O0FBR0g2QixPQUFPQyxNQUFQLENBQWMzRCxPQUFPNEQsU0FBckIsRUFBZ0N4RSxZQUFoQztBQUNBc0UsT0FBT0MsTUFBUCxDQUFjM0QsT0FBTzRELFNBQXJCLEVBQWdDdEUsWUFBaEM7QUFDQW9FLE9BQU9DLE1BQVAsQ0FBYzNELE9BQU80RCxTQUFyQixFQUFnQ3JFLFdBQWhDO0FBQ0FtRSxPQUFPQyxNQUFQLENBQWMzRCxPQUFPNEQsU0FBckIsRUFBZ0NwRSxXQUFoQztBQUNBa0UsT0FBT0MsTUFBUCxDQUFjM0QsT0FBTzRELFNBQXJCLEVBQWdDbkUsV0FBaEM7QUFDQWlFLE9BQU9DLE1BQVAsQ0FBYzNELE9BQU80RCxTQUFyQixFQUFnQ2xFLFdBQWhDO0FBQ0FnRSxPQUFPQyxNQUFQLENBQWMzRCxPQUFPNEQsU0FBckIsRUFBZ0NqRSxVQUFoQztBQUNBK0QsT0FBT0MsTUFBUCxDQUFjM0QsT0FBTzRELFNBQXJCLEVBQWdDaEUsVUFBaEM7O0FBRUFpRSxPQUFPQyxPQUFQLEdBQWlCOUQsTUFBakIiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwcm9ncmFtTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9wcm9ncmFtJyksXG4gICAgICB0ZXh0dXJlTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi90ZXh0dXJlJyksXG4gICAgICBjb2xvdXJNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL2NvbG91cicpLFxuICAgICAgc2hhZGVyTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9zaGFkZXInKSxcbiAgICAgIGJ1ZmZlck1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vYnVmZmVyJyksXG4gICAgICBtYXRyaXhNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL21hdHJpeCcpLFxuICAgICAgZGVwdGhNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL2RlcHRoJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vbW91c2UnKSxcbiAgICAgIGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpO1xuXG5jb25zdCB7IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IgfSA9IGRvbVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdE9mZnNldCA9IDA7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgY29udGV4dC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpOyB9XG5cbiAgc2V0Vmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCkgeyB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7IH1cblxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHsgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7IH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuICAgIHRoaXMuc2V0Vmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoc2hhZGVyLCBvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKSB7XG4gICAgY29uc3Qgb2Zmc2V0TWF0cml4ID0gb2Zmc2V0LmdldE1hdHJpeCgpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb24uZ2V0TWF0cml4KCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbi5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbi5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBub3JtYWwuZ2V0TWF0cml4KCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0TWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeCk7XG5cbiAgICBjb25zdCBjb3VudCA9IHNoYWRlci5nZXRDb3VudCgpO1xuXG4gICAgdGhpcy5kcmF3RWxlbWVudHMoY291bnQpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKGNvdW50LCBvZmZzZXQgPSBkZWZhdWx0T2Zmc2V0KSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQ7XG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtb3VzZU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG4iXX0=