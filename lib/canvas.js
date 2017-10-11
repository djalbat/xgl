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

module.exports = Canvas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsicHJvZ3JhbU1peGluIiwicmVxdWlyZSIsInRleHR1cmVNaXhpbiIsImNvbG91ck1peGluIiwic2hhZGVyTWl4aW4iLCJidWZmZXJNaXhpbiIsIm1hdHJpeE1peGluIiwiZGVwdGhNaXhpbiIsImRvbVV0aWxpdGllcyIsImRvbUVsZW1lbnRGcm9tU2VsZWN0b3IiLCJkZWZhdWx0T2Zmc2V0IiwiQ2FudmFzIiwic2VsZWN0b3IiLCJkb21FbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJFcnJvciIsIndpZHRoIiwiaGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJwcm9ncmFtIiwibmFtZSIsImdldFVuaWZvcm1Mb2NhdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwic2V0QXR0cmlidXRlIiwieCIsInkiLCJ2aWV3cG9ydCIsInVuaWZvcm1Mb2NhdGlvbiIsImludGVnZXJWYWx1ZSIsInVuaWZvcm0xaSIsImNsZWFyRGVwdGgiLCJjbGVhckNvbG91ciIsImNsZWFyRGVwdGhCdWZmZXIiLCJjbGVhckNvbG91ckJ1ZmZlciIsInNldFdpZHRoIiwic2V0SGVpZ2h0Iiwic2V0Vmlld3BvcnQiLCJzaGFkZXIiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsIm9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJjYW52YXMiLCJhcHBseSIsImNvdW50IiwiZ2V0Q291bnQiLCJkcmF3RWxlbWVudHMiLCJvZmZzZXQiLCJUUklBTkdMRVMiLCJVTlNJR05FRF9TSE9SVCIsIm1vZGUiLCJ0eXBlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsd0JBQVIsQ0FBckI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLHdCQUFSLENBRHJCO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSx1QkFBUixDQUZwQjtBQUFBLElBR01HLGNBQWNILFFBQVEsdUJBQVIsQ0FIcEI7QUFBQSxJQUlNSSxjQUFjSixRQUFRLHVCQUFSLENBSnBCO0FBQUEsSUFLTUssY0FBY0wsUUFBUSx1QkFBUixDQUxwQjtBQUFBLElBTU1NLGFBQWFOLFFBQVEsc0JBQVIsQ0FObkI7QUFBQSxJQU9NTyxlQUFlUCxRQUFRLGlCQUFSLENBUHJCOztJQVNRUSxzQixHQUEyQkQsWSxDQUEzQkMsc0I7OztBQUVSLElBQU1DLGdCQUFnQixDQUF0Qjs7SUFFTUMsTTtBQUNKLG9CQUFpQztBQUFBLFFBQXJCQyxRQUFxQix1RUFBVixRQUFVOztBQUFBOztBQUMvQixRQUFNQyxhQUFhSix1QkFBdUJHLFFBQXZCLENBQW5CO0FBQUEsUUFDTUUsVUFBVUQsV0FBV0UsVUFBWCxDQUFzQixPQUF0QixDQURoQjs7QUFHQSxRQUFJLENBQUNELE9BQUwsRUFBYztBQUNaLFlBQU0sSUFBSUUsS0FBSixxQ0FBTjtBQUNEOztBQUVELFNBQUtGLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7OztvQ0FFZTtB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QUtoRCxPQUFMLENBQWE2QyxZQUFiLENBQTBCSSxJQUExQixFQUFnQ04sS0FBaEMsRUFBdUNPLElBQXZDLEVBQTZDSixNQUE3QztBQUNEOzs7Ozs7QUFHSEssT0FBT0MsTUFBUCxDQUFjdkQsT0FBT3dELFNBQXJCLEVBQWdDbkUsWUFBaEM7QUFDQWlFLE9BQU9DLE1BQVAsQ0FBY3ZELE9BQU93RCxTQUFyQixFQUFnQ2pFLFlBQWhDO0FBQ0ErRCxPQUFPQyxNQUFQLENBQWN2RCxPQUFPd0QsU0FBckIsRUFBZ0NoRSxXQUFoQztBQUNBOEQsT0FBT0MsTUFBUCxDQUFjdkQsT0FBT3dELFNBQXJCLEVBQWdDL0QsV0FBaEM7QUFDQTZELE9BQU9DLE1BQVAsQ0FBY3ZELE9BQU93RCxTQUFyQixFQUFnQzlELFdBQWhDO0FBQ0E0RCxPQUFPQyxNQUFQLENBQWN2RCxPQUFPd0QsU0FBckIsRUFBZ0M3RCxXQUFoQztBQUNBMkQsT0FBT0MsTUFBUCxDQUFjdkQsT0FBT3dELFNBQXJCLEVBQWdDNUQsVUFBaEM7O0FBRUE2RCxPQUFPQyxPQUFQLEdBQWlCMUQsTUFBakIiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwcm9ncmFtTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9wcm9ncmFtJyksXG4gICAgICB0ZXh0dXJlTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi90ZXh0dXJlJyksXG4gICAgICBjb2xvdXJNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL2NvbG91cicpLFxuICAgICAgc2hhZGVyTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9zaGFkZXInKSxcbiAgICAgIGJ1ZmZlck1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vYnVmZmVyJyksXG4gICAgICBtYXRyaXhNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL21hdHJpeCcpLFxuICAgICAgZGVwdGhNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL2RlcHRoJyksXG4gICAgICBkb21VdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9kb20nKTtcblxuY29uc3QgeyBkb21FbGVtZW50RnJvbVNlbGVjdG9yIH0gPSBkb21VdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRPZmZzZXQgPSAwO1xuXG5jbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9ICdjYW52YXMnKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgICAgICAgIGNvbnRleHQgPSBkb21FbGVtZW50LmdldENvbnRleHQoJ3dlYmdsJyk7XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlIGNvbnRleHQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7IH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTsgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0KTsgfVxuXG4gIHNldFZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHsgdGhpcy5jb250ZXh0LnZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpOyB9XG5cbiAgc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKSB7IHRoaXMuY29udGV4dC51bmlmb3JtMWkodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpOyB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG4gICAgdGhpcy5jbGVhckNvbG91cigpO1xuICAgIHRoaXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgICB0aGlzLnNldFZpZXdwb3J0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKHNoYWRlciwgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIGNvbnN0IG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIGNhbnZhcyA9IHRoaXM7ICAvLy9cblxuICAgIG9mZnNldE1hdHJpeC5hcHBseShvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgcm90YXRpb25NYXRyaXguYXBwbHkocm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgcG9zaXRpb25NYXRyaXguYXBwbHkocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgcHJvamVjdGlvbk1hdHJpeC5hcHBseShwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIG5vcm1hbE1hdHJpeC5hcHBseShub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICBjb25zdCBjb3VudCA9IHNoYWRlci5nZXRDb3VudCgpO1xuXG4gICAgdGhpcy5kcmF3RWxlbWVudHMoY291bnQpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKGNvdW50LCBvZmZzZXQgPSBkZWZhdWx0T2Zmc2V0KSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQ7XG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcbiJdfQ==