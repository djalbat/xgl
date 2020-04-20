"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var depthMixin = require("./mixin/depth"),
    colourMixin = require("./mixin/colour"),
    shaderMixin = require("./mixin/shader"),
    bufferMixin = require("./mixin/buffer"),
    matrixMixin = require("./mixin/matrix"),
    programMixin = require("./mixin/program"),
    textureMixin = require("./mixin/texture"),
    blendingMixin = require("./mixin/blending"),
    locationMixin = require("./mixin/location");

var Canvas = /*#__PURE__*/function () {
  function Canvas() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "canvas";

    _classCallCheck(this, Canvas);

    var domElement = domElementFromSelector(selector),
        context = contextFromDOMElement(domElement);
    this.domElement = domElement;
    this.context = context;
    this.enableDepthTesting(); ///
  }

  _createClass(Canvas, [{
    key: "getDOMElement",
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.context;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.domElement.width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.domElement.height;
    }
  }, {
    key: "getClientWidth",
    value: function getClientWidth() {
      return this.domElement.clientWidth;
    }
  }, {
    key: "getClientHeight",
    value: function getClientHeight() {
      return this.domElement.clientHeight;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.domElement.setAttribute("width", width);
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.domElement.setAttribute("height", height);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      var x = 0,
          y = 0;
      this.setWidth(width);
      this.setHeight(height);
      this.context.viewport(x, y, width, height);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.clearDepth();
      this.clearColour();
      this.clearDepthBuffer();
      this.clearColourBuffer();
    }
  }, {
    key: "render",
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
    key: "drawElements",
    value: function drawElements(start, finish) {
      var _this$context = this.context,
          TRIANGLES = _this$context.TRIANGLES,
          UNSIGNED_SHORT = _this$context.UNSIGNED_SHORT,
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
  var domElement = typeof selector === "string" ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

function contextFromDOMElement(domElement) {
  var context = domElement.getContext("webgl");

  if (!context) {
    throw new Error("Unable to get the WebGL context.");
  }

  return context;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5qcyJdLCJuYW1lcyI6WyJkZXB0aE1peGluIiwicmVxdWlyZSIsImNvbG91ck1peGluIiwic2hhZGVyTWl4aW4iLCJidWZmZXJNaXhpbiIsIm1hdHJpeE1peGluIiwicHJvZ3JhbU1peGluIiwidGV4dHVyZU1peGluIiwiYmxlbmRpbmdNaXhpbiIsImxvY2F0aW9uTWl4aW4iLCJDYW52YXMiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiY29udGV4dCIsImNvbnRleHRGcm9tRE9NRWxlbWVudCIsImVuYWJsZURlcHRoVGVzdGluZyIsIndpZHRoIiwiaGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJ4IiwieSIsInNldFdpZHRoIiwic2V0SGVpZ2h0Iiwidmlld3BvcnQiLCJjbGVhckRlcHRoIiwiY2xlYXJDb2xvdXIiLCJjbGVhckRlcHRoQnVmZmVyIiwiY2xlYXJDb2xvdXJCdWZmZXIiLCJyZW5kZXJlciIsIm9mZnNldHNNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwib2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJyb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImFwcGx5TWF0cml4Iiwic3RhcnQiLCJmaW5pc2giLCJUUklBTkdMRVMiLCJVTlNJR05FRF9TSE9SVCIsIm1vZGUiLCJ0eXBlIiwiY291bnQiLCJvZmZzZXQiLCJkcmF3RWxlbWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0Q29udGV4dCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTFCO0FBQUEsSUFDTUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsZ0JBQUQsQ0FEM0I7QUFBQSxJQUVNRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxnQkFBRCxDQUYzQjtBQUFBLElBR01HLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGdCQUFELENBSDNCO0FBQUEsSUFJTUksV0FBVyxHQUFHSixPQUFPLENBQUMsZ0JBQUQsQ0FKM0I7QUFBQSxJQUtNSyxZQUFZLEdBQUdMLE9BQU8sQ0FBQyxpQkFBRCxDQUw1QjtBQUFBLElBTU1NLFlBQVksR0FBR04sT0FBTyxDQUFDLGlCQUFELENBTjVCO0FBQUEsSUFPTU8sYUFBYSxHQUFHUCxPQUFPLENBQUMsa0JBQUQsQ0FQN0I7QUFBQSxJQVFNUSxhQUFhLEdBQUdSLE9BQU8sQ0FBQyxrQkFBRCxDQVI3Qjs7SUFVTVMsTTtBQUNKLG9CQUFpQztBQUFBLFFBQXJCQyxRQUFxQix1RUFBVixRQUFVOztBQUFBOztBQUMvQixRQUFNQyxVQUFVLEdBQUdDLHNCQUFzQixDQUFDRixRQUFELENBQXpDO0FBQUEsUUFDTUcsT0FBTyxHQUFHQyxxQkFBcUIsQ0FBQ0gsVUFBRCxDQURyQztBQUdBLFNBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBRUEsU0FBS0UsT0FBTCxHQUFlQSxPQUFmO0FBRUEsU0FBS0Usa0JBQUwsR0FSK0IsQ0FRSDtBQUM3Qjs7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0osVUFBWjtB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TSxDQUFDQyxNQUFQLENBQWNoRCxNQUFNLENBQUNpRCxTQUFyQixFQUFnQ3RELFdBQWhDO0FBQ0FvRCxNQUFNLENBQUNDLE1BQVAsQ0FBY2hELE1BQU0sQ0FBQ2lELFNBQXJCLEVBQWdDckQsWUFBaEM7QUFDQW1ELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEQsTUFBTSxDQUFDaUQsU0FBckIsRUFBZ0NwRCxZQUFoQztBQUNBa0QsTUFBTSxDQUFDQyxNQUFQLENBQWNoRCxNQUFNLENBQUNpRCxTQUFyQixFQUFnQ25ELGFBQWhDO0FBQ0FpRCxNQUFNLENBQUNDLE1BQVAsQ0FBY2hELE1BQU0sQ0FBQ2lELFNBQXJCLEVBQWdDbEQsYUFBaEM7QUFFQW1ELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5ELE1BQWpCOztBQUVBLFNBQVNHLHNCQUFULENBQWdDRixRQUFoQyxFQUEwQztBQUN4QyxNQUFNQyxVQUFVLEdBQUksT0FBT0QsUUFBUCxLQUFvQixRQUFyQixHQUNFbUQsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQnBELFFBQTFCLEVBQW9DLENBQXBDLENBREYsR0FDNEM7QUFDeENBLEVBQUFBLFFBRnZCLENBRHdDLENBR047O0FBRWxDLFNBQU9DLFVBQVA7QUFDRDs7QUFFRCxTQUFTRyxxQkFBVCxDQUErQkgsVUFBL0IsRUFBMkM7QUFDekMsTUFBTUUsT0FBTyxHQUFHRixVQUFVLENBQUNvRCxVQUFYLENBQXNCLE9BQXRCLENBQWhCOztBQUVBLE1BQUksQ0FBQ2xELE9BQUwsRUFBYztBQUNaLFVBQU0sSUFBSW1ELEtBQUosb0NBQU47QUFDRDs7QUFFRCxTQUFPbkQsT0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGRlcHRoTWl4aW4gPSByZXF1aXJlKFwiLi9taXhpbi9kZXB0aFwiKSxcbiAgICAgIGNvbG91ck1peGluID0gcmVxdWlyZShcIi4vbWl4aW4vY29sb3VyXCIpLFxuICAgICAgc2hhZGVyTWl4aW4gPSByZXF1aXJlKFwiLi9taXhpbi9zaGFkZXJcIiksXG4gICAgICBidWZmZXJNaXhpbiA9IHJlcXVpcmUoXCIuL21peGluL2J1ZmZlclwiKSxcbiAgICAgIG1hdHJpeE1peGluID0gcmVxdWlyZShcIi4vbWl4aW4vbWF0cml4XCIpLFxuICAgICAgcHJvZ3JhbU1peGluID0gcmVxdWlyZShcIi4vbWl4aW4vcHJvZ3JhbVwiKSxcbiAgICAgIHRleHR1cmVNaXhpbiA9IHJlcXVpcmUoXCIuL21peGluL3RleHR1cmVcIiksXG4gICAgICBibGVuZGluZ01peGluID0gcmVxdWlyZShcIi4vbWl4aW4vYmxlbmRpbmdcIiksXG4gICAgICBsb2NhdGlvbk1peGluID0gcmVxdWlyZShcIi4vbWl4aW4vbG9jYXRpb25cIik7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gXCJjYW52YXNcIikge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmVuYWJsZURlcHRoVGVzdGluZygpOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGhlaWdodCk7IH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHggPSAwLFxuICAgICAgICAgIHkgPSAwO1xuXG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgdGhpcy5jb250ZXh0LnZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG5cbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG5cbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcblxuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgfVxuXG4gIHJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0c01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQsXG4gICAgICAgICAgY291bnQgPSBmaW5pc2ggLSBzdGFydCxcbiAgICAgICAgICBvZmZzZXQgPSBzdGFydCAqIDI7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgc2hhZGVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBidWZmZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgcHJvZ3JhbU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgdGV4dHVyZU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYmxlbmRpbmdNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGxvY2F0aW9uTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICBjb25zdCBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KFwid2ViZ2xcIik7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZ2V0IHRoZSBXZWJHTCBjb250ZXh0LmApO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXX0=