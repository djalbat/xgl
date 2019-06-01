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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsiZGVwdGhNaXhpbiIsInJlcXVpcmUiLCJjb2xvdXJNaXhpbiIsInNoYWRlck1peGluIiwiYnVmZmVyTWl4aW4iLCJtYXRyaXhNaXhpbiIsInByb2dyYW1NaXhpbiIsInRleHR1cmVNaXhpbiIsImJsZW5kaW5nTWl4aW4iLCJkZWZhdWx0T2Zmc2V0IiwiQ2FudmFzIiwic2VsZWN0b3IiLCJkb21FbGVtZW50IiwiZG9tRWxlbWVudEZyb21TZWxlY3RvciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiRXJyb3IiLCJlbmFibGVEZXB0aFRlc3RpbmciLCJ3aWR0aCIsImhlaWdodCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwicHJvZ3JhbSIsIm5hbWUiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsInNldEF0dHJpYnV0ZSIsIngiLCJ5Iiwidmlld3BvcnQiLCJ1bmlmb3JtTG9jYXRpb24iLCJpbnRlZ2VyVmFsdWUiLCJ1bmlmb3JtMWkiLCJjbGVhckRlcHRoIiwiY2xlYXJDb2xvdXIiLCJjbGVhckRlcHRoQnVmZmVyIiwiY2xlYXJDb2xvdXJCdWZmZXIiLCJzZXRXaWR0aCIsInNldEhlaWdodCIsInNldFZpZXdwb3J0Iiwic2hhZGVyIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJyb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwibm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiYXBwbHlNYXRyaXgiLCJjb3VudCIsImdldENvdW50IiwiZHJhd0VsZW1lbnRzIiwib2Zmc2V0IiwiVFJJQU5HTEVTIiwiVU5TSUdORURfU0hPUlQiLCJtb2RlIiwidHlwZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGdCQUFSLENBRHBCO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxnQkFBUixDQUZwQjtBQUFBLElBR01HLGNBQWNILFFBQVEsZ0JBQVIsQ0FIcEI7QUFBQSxJQUlNSSxjQUFjSixRQUFRLGdCQUFSLENBSnBCO0FBQUEsSUFLTUssZUFBZUwsUUFBUSxpQkFBUixDQUxyQjtBQUFBLElBTU1NLGVBQWVOLFFBQVEsaUJBQVIsQ0FOckI7QUFBQSxJQU9NTyxnQkFBZ0JQLFFBQVEsa0JBQVIsQ0FQdEI7O0FBU0EsSUFBTVEsZ0JBQWdCLENBQXRCOztJQUVNQyxNO0FBQ0osb0JBQWlDO0FBQUEsUUFBckJDLFFBQXFCLHVFQUFWLFFBQVU7O0FBQUE7O0FBQy9CLFFBQU1DLGFBQWFDLHVCQUF1QkYsUUFBdkIsQ0FBbkI7QUFBQSxRQUNNRyxVQUFVRixXQUFXRyxVQUFYLENBQXNCLE9BQXRCLENBRGhCOztBQUdBLFFBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osWUFBTSxJQUFJRSxLQUFKLHFDQUFOO0FBQ0Q7O0FBRUQsU0FBS0YsT0FBTCxHQUFlQSxPQUFmOztBQUVBLFNBQUtGLFVBQUwsR0FBa0JBLFVBQWxCOztBQUVBLFNBQUtLLGtCQUFMLEdBWitCLENBWUg7QUFDN0I7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtILE9BQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLRixVQUFaO0FBQ0Q7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0EsVUFBTCxDQUFnQk0sS0FBdkI7QUFBK0I7OztnQ0FFaEM7QUFBRSxhQUFPLEtBQUtOLFVBQUwsQ0FBZ0JPLE1BQXZCO0FBQWdDOzs7cUNBRTdCO0FBQUUsYUFBTyxLQUFLUCxVQUFMLENBQWdCUSxXQUF2QjtBQUFxQzs7O3NDQUV0QztBQUFFLGFBQU8sS0FBS1IsVUFBTCxDQUFnQlMsWUFBdkI7QUFBc0M7Ozt1Q0FFdkNDLE8sRUFBU0MsSSxFQUFNO0FBQUUsYUFBTyxLQUFLVCxPQUFMLENBQWFVLGtCQUFiLENBQWdDRixPQUFoQyxFQUF5Q0MsSUFBekMsQ0FBUDtBQUF3RDs7O3lDQUV2RUQsTyxFQUFTQyxJLEVBQU07QUFBRSxhQUFPLEtBQUtULE9BQUwsQ0FBYVcsaUJBQWIsQ0FBK0JILE9BQS9CLEVBQXdDQyxJQUF4QyxDQUFQO0FBQXVEOzs7NkJBRXBGTCxLLEVBQU87QUFBRSxXQUFLTixVQUFMLENBQWdCYyxZQUFoQixDQUE2QixPQUE3QixFQUFzQ1IsS0FBdEM7QUFBK0M7Ozs4QkFFdkRDLE0sRUFBUTtBQUFFLFdBQUtQLFVBQUwsQ0FBZ0JjLFlBQWhCLENBQTZCLFFBQTdCLEVBQXVDUCxNQUF2QztBQUFpRDs7O2dDQUV6RFEsQyxFQUFHQyxDLEVBQUdWLEssRUFBT0MsTSxFQUFRO0FBQUUsV0FBS0wsT0FBTCxDQUFhZSxRQUFiLENBQXNCRixDQUF0QixFQUF5QkMsQ0FBekIsRUFBNEJWLEtBQTVCLEVBQW1DQyxNQUFuQztBQUE2Qzs7O21EQUVqRFcsZSxFQUFpQkMsWSxFQUFjO0FBQUUsV0FBS2pCLE9BQUwsQ0FBYWtCLFNBQWIsQ0FBdUJGLGVBQXZCLEVBQXdDQyxZQUF4QztBQUF3RDs7OzRCQUVoSDtBQUNOLFdBQUtFLFVBQUw7QUFDQSxXQUFLQyxXQUFMO0FBQ0EsV0FBS0MsZ0JBQUw7QUFDQSxXQUFLQyxpQkFBTDtBQUNEOzs7MkJBRU1sQixLLEVBQU9DLE0sRUFBUTtBQUNwQixXQUFLa0IsUUFBTCxDQUFjbkIsS0FBZDtBQUNBLFdBQUtvQixTQUFMLENBQWVuQixNQUFmO0FBQ0EsV0FBS29CLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUJyQixLQUF2QixFQUE4QkMsTUFBOUI7QUFDRDs7OzJCQUVNcUIsTSxFQUFRQyxZLEVBQWNDLGMsRUFBZ0JDLGMsRUFBZ0JDLGdCLEVBQWtCQyxZLEVBQWM7QUFDM0YsVUFBTUMsOEJBQThCTixPQUFPTyw4QkFBUCxFQUFwQztBQUFBLFVBQ01DLGdDQUFnQ1IsT0FBT1MsZ0NBQVAsRUFEdEM7QUFBQSxVQUVNQyxnQ0FBZ0NWLE9BQU9XLGdDQUFQLEVBRnRDO0FBQUEsVUFHTUMsa0NBQWtDWixPQUFPYSxrQ0FBUCxFQUh4QztBQUFBLFVBSU1DLDhCQUE4QmQsT0FBT2UsOEJBQVAsRUFKcEM7O0FBTUEsV0FBS0MsV0FBTCxDQUFpQlYsMkJBQWpCLEVBQThDTCxZQUE5QztBQUNBLFdBQUtlLFdBQUwsQ0FBaUJSLDZCQUFqQixFQUFnRE4sY0FBaEQ7QUFDQSxXQUFLYyxXQUFMLENBQWlCTiw2QkFBakIsRUFBZ0RQLGNBQWhEO0FBQ0EsV0FBS2EsV0FBTCxDQUFpQkosK0JBQWpCLEVBQWtEUixnQkFBbEQ7QUFDQSxXQUFLWSxXQUFMLENBQWlCRiwyQkFBakIsRUFBOENULFlBQTlDOztBQUVBLFVBQU1ZLFFBQVFqQixPQUFPa0IsUUFBUCxFQUFkOztBQUVBLFdBQUtDLFlBQUwsQ0FBa0JGLEtBQWxCO0FBQ0Q7OztpQ0FFWUEsSyxFQUErQjtBQUFBLFVBQXhCRyxNQUF3Qix1RUFBZm5ELGFBQWU7QUFBQSxxQkFDSixLQUFLSyxPQUREO0FBQUEsVUFDbEMrQyxTQURrQyxZQUNsQ0EsU0FEa0M7QUFBQSxVQUN2QkMsY0FEdUIsWUFDdkJBLGNBRHVCO0FBQUEsVUFFcENDLElBRm9DLEdBRTdCRixTQUY2QjtBQUFBLFVBR3BDRyxJQUhvQyxHQUc3QkYsY0FINkI7OztBQUsxQyxXQUFLaEQsT0FBTCxDQUFhNkMsWUFBYixDQUEwQkksSUFBMUIsRUFBZ0NOLEtBQWhDLEVBQXVDTyxJQUF2QyxFQUE2Q0osTUFBN0M7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE1BQVAsQ0FBY3hELE9BQU95RCxTQUFyQixFQUFnQ25FLFVBQWhDO0FBQ0FpRSxPQUFPQyxNQUFQLENBQWN4RCxPQUFPeUQsU0FBckIsRUFBZ0NqRSxXQUFoQztBQUNBK0QsT0FBT0MsTUFBUCxDQUFjeEQsT0FBT3lELFNBQXJCLEVBQWdDaEUsV0FBaEM7QUFDQThELE9BQU9DLE1BQVAsQ0FBY3hELE9BQU95RCxTQUFyQixFQUFnQy9ELFdBQWhDO0FBQ0E2RCxPQUFPQyxNQUFQLENBQWN4RCxPQUFPeUQsU0FBckIsRUFBZ0M5RCxXQUFoQztBQUNBNEQsT0FBT0MsTUFBUCxDQUFjeEQsT0FBT3lELFNBQXJCLEVBQWdDN0QsWUFBaEM7QUFDQTJELE9BQU9DLE1BQVAsQ0FBY3hELE9BQU95RCxTQUFyQixFQUFnQzVELFlBQWhDO0FBQ0EwRCxPQUFPQyxNQUFQLENBQWN4RCxPQUFPeUQsU0FBckIsRUFBZ0MzRCxhQUFoQzs7QUFFQTRELE9BQU9DLE9BQVAsR0FBaUIzRCxNQUFqQjs7QUFFQSxTQUFTRyxzQkFBVCxDQUFnQ0YsUUFBaEMsRUFBMEM7QUFDeEMsTUFBTUMsYUFBYyxPQUFPRCxRQUFQLEtBQW9CLFFBQXJCLEdBQ0UyRCxTQUFTQyxnQkFBVCxDQUEwQjVELFFBQTFCLEVBQW9DLENBQXBDLENBREYsR0FDNEM7QUFDeENBLFVBRnZCLENBRHdDLENBR047O0FBRWxDLFNBQU9DLFVBQVA7QUFDRCIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlcHRoTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2RlcHRoJyksXG4gICAgICBjb2xvdXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY29sb3VyJyksXG4gICAgICBzaGFkZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vc2hhZGVyJyksXG4gICAgICBidWZmZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vYnVmZmVyJyksXG4gICAgICBtYXRyaXhNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbWF0cml4JyksXG4gICAgICBwcm9ncmFtTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3Byb2dyYW0nKSxcbiAgICAgIHRleHR1cmVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vdGV4dHVyZScpLFxuICAgICAgYmxlbmRpbmdNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vYmxlbmRpbmcnKTtcblxuY29uc3QgZGVmYXVsdE9mZnNldCA9IDA7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgY29udGV4dC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmVuYWJsZURlcHRoVGVzdGluZygpOyAgLy8vXG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpOyB9XG5cbiAgc2V0Vmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCkgeyB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7IH1cblxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHsgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7IH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuICAgIHRoaXMuc2V0Vmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoc2hhZGVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0TWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeCk7XG5cbiAgICBjb25zdCBjb3VudCA9IHNoYWRlci5nZXRDb3VudCgpO1xuXG4gICAgdGhpcy5kcmF3RWxlbWVudHMoY291bnQpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKGNvdW50LCBvZmZzZXQgPSBkZWZhdWx0T2Zmc2V0KSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQ7XG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgY29sb3VyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBzaGFkZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbWF0cml4TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBibGVuZGluZ01peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG4iXX0=