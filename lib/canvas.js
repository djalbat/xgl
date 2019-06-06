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
    value: function render(shader, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var offsetMatrixUniformLocation = shader.getOffsetMatrixUniformLocation(),
          rotationMatrixUniformLocation = shader.getRotationMatrixUniformLocation(),
          positionMatrixUniformLocation = shader.getPositionMatrixUniformLocation(),
          projectionMatrixUniformLocation = shader.getProjectionMatrixUniformLocation(),
          normalMatrixUniformLocation = shader.getNormalMatrixUniformLocation();

      this.applyMatrix(offsetMatrixUniformLocation, offsetMatrix);
      this.applyMatrix(rotationMatrixUniformLocation, rotationMatrix);
      this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
      this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
      this.applyMatrix(normalMatrixUniformLocation, normalMatrix);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsiZGVwdGhNaXhpbiIsInJlcXVpcmUiLCJjb2xvdXJNaXhpbiIsInNoYWRlck1peGluIiwiYnVmZmVyTWl4aW4iLCJtYXRyaXhNaXhpbiIsInByb2dyYW1NaXhpbiIsInRleHR1cmVNaXhpbiIsImJsZW5kaW5nTWl4aW4iLCJDYW52YXMiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiY29udGV4dCIsImdldENvbnRleHQiLCJFcnJvciIsImVuYWJsZURlcHRoVGVzdGluZyIsIndpZHRoIiwiaGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJwcm9ncmFtIiwibmFtZSIsImdldFVuaWZvcm1Mb2NhdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwic2V0QXR0cmlidXRlIiwieCIsInkiLCJ2aWV3cG9ydCIsInVuaWZvcm1Mb2NhdGlvbiIsImludGVnZXJWYWx1ZSIsInVuaWZvcm0xaSIsImNsZWFyRGVwdGgiLCJjbGVhckNvbG91ciIsImNsZWFyRGVwdGhCdWZmZXIiLCJjbGVhckNvbG91ckJ1ZmZlciIsInNldFdpZHRoIiwic2V0SGVpZ2h0Iiwic2V0Vmlld3BvcnQiLCJzaGFkZXIiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsIm9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJhcHBseU1hdHJpeCIsInN0YXJ0IiwiZmluaXNoIiwiVFJJQU5HTEVTIiwiVU5TSUdORURfU0hPUlQiLCJtb2RlIiwidHlwZSIsImNvdW50Iiwib2Zmc2V0IiwiZHJhd0VsZW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsZ0JBQVIsQ0FEcEI7QUFBQSxJQUVNRSxjQUFjRixRQUFRLGdCQUFSLENBRnBCO0FBQUEsSUFHTUcsY0FBY0gsUUFBUSxnQkFBUixDQUhwQjtBQUFBLElBSU1JLGNBQWNKLFFBQVEsZ0JBQVIsQ0FKcEI7QUFBQSxJQUtNSyxlQUFlTCxRQUFRLGlCQUFSLENBTHJCO0FBQUEsSUFNTU0sZUFBZU4sUUFBUSxpQkFBUixDQU5yQjtBQUFBLElBT01PLGdCQUFnQlAsUUFBUSxrQkFBUixDQVB0Qjs7SUFTTVEsTTtBQUNKLG9CQUFpQztBQUFBLFFBQXJCQyxRQUFxQix1RUFBVixRQUFVOztBQUFBOztBQUMvQixRQUFNQyxhQUFhQyx1QkFBdUJGLFFBQXZCLENBQW5CO0FBQUEsUUFDTUcsVUFBVUYsV0FBV0csVUFBWCxDQUFzQixPQUF0QixDQURoQjs7QUFHQSxRQUFJLENBQUNELE9BQUwsRUFBYztBQUNaLFlBQU0sSUFBSUUsS0FBSixxQ0FBTjtBQUNEOztBQUVELFNBQUtGLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxTQUFLRixVQUFMLEdBQWtCQSxVQUFsQjs7QUFFQSxTQUFLSyxrQkFBTCxHQVorQixDQVlIO0FBQzdCOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLSCxPQUFa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LElBQXZDLEVBQTZDRSxNQUE3QztBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsTUFBUCxDQUFjekQsT0FBTzBELFNBQXJCLEVBQWdDbkUsVUFBaEM7QUFDQWlFLE9BQU9DLE1BQVAsQ0FBY3pELE9BQU8wRCxTQUFyQixFQUFnQ2pFLFdBQWhDO0FBQ0ErRCxPQUFPQyxNQUFQLENBQWN6RCxPQUFPMEQsU0FBckIsRUFBZ0NoRSxXQUFoQztBQUNBOEQsT0FBT0MsTUFBUCxDQUFjekQsT0FBTzBELFNBQXJCLEVBQWdDL0QsV0FBaEM7QUFDQTZELE9BQU9DLE1BQVAsQ0FBY3pELE9BQU8wRCxTQUFyQixFQUFnQzlELFdBQWhDO0FBQ0E0RCxPQUFPQyxNQUFQLENBQWN6RCxPQUFPMEQsU0FBckIsRUFBZ0M3RCxZQUFoQztBQUNBMkQsT0FBT0MsTUFBUCxDQUFjekQsT0FBTzBELFNBQXJCLEVBQWdDNUQsWUFBaEM7QUFDQTBELE9BQU9DLE1BQVAsQ0FBY3pELE9BQU8wRCxTQUFyQixFQUFnQzNELGFBQWhDOztBQUVBNEQsT0FBT0MsT0FBUCxHQUFpQjVELE1BQWpCOztBQUVBLFNBQVNHLHNCQUFULENBQWdDRixRQUFoQyxFQUEwQztBQUN4QyxNQUFNQyxhQUFjLE9BQU9ELFFBQVAsS0FBb0IsUUFBckIsR0FDRTRELFNBQVNDLGdCQUFULENBQTBCN0QsUUFBMUIsRUFBb0MsQ0FBcEMsQ0FERixHQUM0QztBQUN4Q0EsVUFGdkIsQ0FEd0MsQ0FHTjs7QUFFbEMsU0FBT0MsVUFBUDtBQUNEIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVwdGhNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZGVwdGgnKSxcbiAgICAgIGNvbG91ck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9jb2xvdXInKSxcbiAgICAgIHNoYWRlck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9zaGFkZXInKSxcbiAgICAgIGJ1ZmZlck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9idWZmZXInKSxcbiAgICAgIG1hdHJpeE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tYXRyaXgnKSxcbiAgICAgIHByb2dyYW1NaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vcHJvZ3JhbScpLFxuICAgICAgdGV4dHVyZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi90ZXh0dXJlJyksXG4gICAgICBibGVuZGluZ01peGluID0gcmVxdWlyZSgnLi9taXhpbi9ibGVuZGluZycpO1xuXG5jbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9ICdjYW52YXMnKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgICAgICAgIGNvbnRleHQgPSBkb21FbGVtZW50LmdldENvbnRleHQoJ3dlYmdsJyk7XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlIGNvbnRleHQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7IH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTsgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0KTsgfVxuXG4gIHNldFZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHsgdGhpcy5jb250ZXh0LnZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpOyB9XG5cbiAgc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKSB7IHRoaXMuY29udGV4dC51bmlmb3JtMWkodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpOyB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG4gICAgdGhpcy5jbGVhckNvbG91cigpO1xuICAgIHRoaXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgICB0aGlzLnNldFZpZXdwb3J0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKHNoYWRlciwgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIGNvbnN0IG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG9mZnNldE1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgobm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVCxcbiAgICAgICAgICBjb3VudCA9IGZpbmlzaCAtIHN0YXJ0LFxuICAgICAgICAgIG9mZnNldCA9IHN0YXJ0ICogMjsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgY29sb3VyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBzaGFkZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbWF0cml4TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBibGVuZGluZ01peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG4iXX0=