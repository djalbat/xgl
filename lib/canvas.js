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
    blendingMixin = require('./mixin/blending'),
    locationMixin = require('./mixin/location');

var Canvas = function () {
  function Canvas() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'canvas';

    _classCallCheck(this, Canvas);

    var domElement = domElementFromSelector(selector),
        context = contextFromDOMElement(domElement);

    this.domElement = domElement;

    this.context = context;

    this.enableDepthTesting(); ///
  }

  _createClass(Canvas, [{
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'getContext',
    value: function getContext() {
      return this.context;
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
    key: 'resize',
    value: function resize(width, height) {
      var x = 0,
          y = 0;

      this.setWidth(width);

      this.setHeight(height);

      this.context.viewport(x, y, width, height);
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
    key: 'render',
    value: function render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var offsetsMatrixUniformLocation = renderer.getOffsetsMatrixUniformLocation(),
          normalsMatrixUniformLocation = renderer.getNormalsMatrixUniformLocation(),
          positionMatrixUniformLocation = renderer.getPositionMatrixUniformLocation(),
          rotationsMatrixUniformLocation = renderer.getRotationsMatrixUniformLocation(),
          projectionMatrixUniformLocation = renderer.getProjectionMatrixUniformLocation();

      this.applyMatrix(offsetsMatrixUniformLocation, offsetsMatrix);
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
Object.assign(Canvas.prototype, locationMixin);

module.exports = Canvas;

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

function contextFromDOMElement(domElement) {
  var context = domElement.getContext('webgl');

  if (!context) {
    throw new Error('Unable to get the WebGL context.');
  }

  return context;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsiZGVwdGhNaXhpbiIsInJlcXVpcmUiLCJjb2xvdXJNaXhpbiIsInNoYWRlck1peGluIiwiYnVmZmVyTWl4aW4iLCJtYXRyaXhNaXhpbiIsInByb2dyYW1NaXhpbiIsInRleHR1cmVNaXhpbiIsImJsZW5kaW5nTWl4aW4iLCJsb2NhdGlvbk1peGluIiwiQ2FudmFzIiwic2VsZWN0b3IiLCJkb21FbGVtZW50IiwiZG9tRWxlbWVudEZyb21TZWxlY3RvciIsImNvbnRleHQiLCJjb250ZXh0RnJvbURPTUVsZW1lbnQiLCJlbmFibGVEZXB0aFRlc3RpbmciLCJ3aWR0aCIsImhlaWdodCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwieCIsInkiLCJzZXRXaWR0aCIsInNldEhlaWdodCIsInZpZXdwb3J0IiwiY2xlYXJEZXB0aCIsImNsZWFyQ29sb3VyIiwiY2xlYXJEZXB0aEJ1ZmZlciIsImNsZWFyQ29sb3VyQnVmZmVyIiwicmVuZGVyZXIiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwibm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJhcHBseU1hdHJpeCIsInN0YXJ0IiwiZmluaXNoIiwiVFJJQU5HTEVTIiwiVU5TSUdORURfU0hPUlQiLCJtb2RlIiwidHlwZSIsImNvdW50Iiwib2Zmc2V0IiwiZHJhd0VsZW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImdldENvbnRleHQiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsZ0JBQVIsQ0FEcEI7QUFBQSxJQUVNRSxjQUFjRixRQUFRLGdCQUFSLENBRnBCO0FBQUEsSUFHTUcsY0FBY0gsUUFBUSxnQkFBUixDQUhwQjtBQUFBLElBSU1JLGNBQWNKLFFBQVEsZ0JBQVIsQ0FKcEI7QUFBQSxJQUtNSyxlQUFlTCxRQUFRLGlCQUFSLENBTHJCO0FBQUEsSUFNTU0sZUFBZU4sUUFBUSxpQkFBUixDQU5yQjtBQUFBLElBT01PLGdCQUFnQlAsUUFBUSxrQkFBUixDQVB0QjtBQUFBLElBUU1RLGdCQUFnQlIsUUFBUSxrQkFBUixDQVJ0Qjs7SUFVTVMsTTtBQUNKLG9CQUFpQztBQUFBLFFBQXJCQyxRQUFxQix1RUFBVixRQUFVOztBQUFBOztBQUMvQixRQUFNQyxhQUFhQyx1QkFBdUJGLFFBQXZCLENBQW5CO0FBQUEsUUFDTUcsVUFBVUMsc0JBQXNCSCxVQUF0QixDQURoQjs7QUFHQSxTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjs7QUFFQSxTQUFLRSxPQUFMLEdBQWVBLE9BQWY7O0FBRUEsU0FBS0Usa0JBQUwsR0FSK0IsQ0FRSDtBQUM3Qjs7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0osVUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtFLE9BQVo7QUFDRDs7OytCQUVVO0FBQUUsYUFBTyxLQUFLRixVQUFMLENBQWdCSyxLQUF2QjtBQUErQjs7O2dDQUVoQztB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QWlELE9BQU9DLE1BQVAsQ0FBY2hELE9BQU9pRCxTQUFyQixFQUFnQ2xELGFBQWhDOztBQUVBbUQsT0FBT0MsT0FBUCxHQUFpQm5ELE1BQWpCOztBQUVBLFNBQVNHLHNCQUFULENBQWdDRixRQUFoQyxFQUEwQztBQUN4QyxNQUFNQyxhQUFjLE9BQU9ELFFBQVAsS0FBb0IsUUFBckIsR0FDRW1ELFNBQVNDLGdCQUFULENBQTBCcEQsUUFBMUIsRUFBb0MsQ0FBcEMsQ0FERixHQUM0QztBQUN4Q0EsVUFGdkIsQ0FEd0MsQ0FHTjs7QUFFbEMsU0FBT0MsVUFBUDtBQUNEOztBQUVELFNBQVNHLHFCQUFULENBQStCSCxVQUEvQixFQUEyQztBQUN6QyxNQUFNRSxVQUFVRixXQUFXb0QsVUFBWCxDQUFzQixPQUF0QixDQUFoQjs7QUFFQSxNQUFJLENBQUNsRCxPQUFMLEVBQWM7QUFDWixVQUFNLElBQUltRCxLQUFKLG9DQUFOO0FBQ0Q7O0FBRUQsU0FBT25ELE9BQVA7QUFDRCIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlcHRoTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2RlcHRoJyksXG4gICAgICBjb2xvdXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY29sb3VyJyksXG4gICAgICBzaGFkZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vc2hhZGVyJyksXG4gICAgICBidWZmZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vYnVmZmVyJyksXG4gICAgICBtYXRyaXhNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbWF0cml4JyksXG4gICAgICBwcm9ncmFtTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3Byb2dyYW0nKSxcbiAgICAgIHRleHR1cmVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vdGV4dHVyZScpLFxuICAgICAgYmxlbmRpbmdNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vYmxlbmRpbmcnKSxcbiAgICAgIGxvY2F0aW9uTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2xvY2F0aW9uJyk7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7IH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHggPSAwLFxuICAgICAgICAgIHkgPSAwO1xuXG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgdGhpcy5jb250ZXh0LnZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG5cbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG5cbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcblxuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgfVxuXG4gIHJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0c01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQsXG4gICAgICAgICAgY291bnQgPSBmaW5pc2ggLSBzdGFydCxcbiAgICAgICAgICBvZmZzZXQgPSBzdGFydCAqIDI7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgc2hhZGVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBidWZmZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgcHJvZ3JhbU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgdGV4dHVyZU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYmxlbmRpbmdNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGxvY2F0aW9uTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgY29uc3QgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBnZXQgdGhlIFdlYkdMIGNvbnRleHQuYCk7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cbiJdfQ==