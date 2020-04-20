"use strict";

var _depth = _interopRequireDefault(require("./mixin/depth"));

var _colour = _interopRequireDefault(require("./mixin/colour"));

var _shader = _interopRequireDefault(require("./mixin/shader"));

var _buffer = _interopRequireDefault(require("./mixin/buffer"));

var _matrix = _interopRequireDefault(require("./mixin/matrix"));

var _program = _interopRequireDefault(require("./mixin/program"));

var _texture = _interopRequireDefault(require("./mixin/texture"));

var _blending = _interopRequireDefault(require("./mixin/blending"));

var _location = _interopRequireDefault(require("./mixin/location"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

Object.assign(Canvas.prototype, _depth["default"]);
Object.assign(Canvas.prototype, _colour["default"]);
Object.assign(Canvas.prototype, _shader["default"]);
Object.assign(Canvas.prototype, _buffer["default"]);
Object.assign(Canvas.prototype, _matrix["default"]);
Object.assign(Canvas.prototype, _program["default"]);
Object.assign(Canvas.prototype, _texture["default"]);
Object.assign(Canvas.prototype, _blending["default"]);
Object.assign(Canvas.prototype, _location["default"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5qcyJdLCJuYW1lcyI6WyJDYW52YXMiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiY29udGV4dCIsImNvbnRleHRGcm9tRE9NRWxlbWVudCIsImVuYWJsZURlcHRoVGVzdGluZyIsIndpZHRoIiwiaGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJ4IiwieSIsInNldFdpZHRoIiwic2V0SGVpZ2h0Iiwidmlld3BvcnQiLCJjbGVhckRlcHRoIiwiY2xlYXJDb2xvdXIiLCJjbGVhckRlcHRoQnVmZmVyIiwiY2xlYXJDb2xvdXJCdWZmZXIiLCJyZW5kZXJlciIsIm9mZnNldHNNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwib2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJyb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImFwcGx5TWF0cml4Iiwic3RhcnQiLCJmaW5pc2giLCJUUklBTkdMRVMiLCJVTlNJR05FRF9TSE9SVCIsIm1vZGUiLCJ0eXBlIiwiY291bnQiLCJvZmZzZXQiLCJkcmF3RWxlbWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkZXB0aE1peGluIiwiY29sb3VyTWl4aW4iLCJzaGFkZXJNaXhpbiIsImJ1ZmZlck1peGluIiwibWF0cml4TWl4aW4iLCJwcm9ncmFtTWl4aW4iLCJ0ZXh0dXJlTWl4aW4iLCJibGVuZGluZ01peGluIiwibG9jYXRpb25NaXhpbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRDb250ZXh0IiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLE07QUFDSixvQkFBaUM7QUFBQSxRQUFyQkMsUUFBcUIsdUVBQVYsUUFBVTs7QUFBQTs7QUFDL0IsUUFBTUMsVUFBVSxHQUFHQyxzQkFBc0IsQ0FBQ0YsUUFBRCxDQUF6QztBQUFBLFFBQ01HLE9BQU8sR0FBR0MscUJBQXFCLENBQUNILFVBQUQsQ0FEckM7QUFHQSxTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUVBLFNBQUtFLE9BQUwsR0FBZUEsT0FBZjtBQUVBLFNBQUtFLGtCQUFMLEdBUitCLENBUUg7QUFDN0I7Ozs7b0NBRWU7QUFDZCxhQUFPLEtBQUtKLFVBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRSxPQUFaO0FBQ0Q7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0YsVUFBTCxDQUFnQkssS0FBdkI7QUFBK0I7OztnQ0FFaEM7QUFBRSxhQUFPLEtBQUtMLFVBQUwsQ0FBZ0JNLE1BQXZCO0FBQWdDOzs7cUNBRTdCO0FBQUUsYUFBTyxLQUFLTixVQUFMLENBQWdCTyxXQUF2QjtBQUFxQzs7O3NDQUV0QztBQUFFLGFBQU8sS0FBS1AsVUFBTCxDQUFnQlEsWUFBdkI7QUFBc0M7Ozs2QkFFakRILEssRUFBTztBQUFFLFdBQUtMLFVBQUwsQ0FBZ0JTLFlBQWhCLENBQTZCLE9BQTdCLEVBQXNDSixLQUF0QztBQUErQzs7OzhCQUV2REMsTSxFQUFRO0FBQUUsV0FBS04sVUFBTCxDQUFnQlMs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Q0YsUUFBaEMsRUFBMEM7QUFDeEMsTUFBTUMsVUFBVSxHQUFJLE9BQU9ELFFBQVAsS0FBb0IsUUFBckIsR0FDRTRELFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEI3RCxRQUExQixFQUFvQyxDQUFwQyxDQURGLEdBQzRDO0FBQ3hDQSxFQUFBQSxRQUZ2QixDQUR3QyxDQUdOOztBQUVsQyxTQUFPQyxVQUFQO0FBQ0Q7O0FBRUQsU0FBU0cscUJBQVQsQ0FBK0JILFVBQS9CLEVBQTJDO0FBQ3pDLE1BQU1FLE9BQU8sR0FBR0YsVUFBVSxDQUFDNkQsVUFBWCxDQUFzQixPQUF0QixDQUFoQjs7QUFFQSxNQUFJLENBQUMzRCxPQUFMLEVBQWM7QUFDWixVQUFNLElBQUk0RCxLQUFKLG9DQUFOO0FBQ0Q7O0FBRUQsU0FBTzVELE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZGVwdGhNaXhpbiBmcm9tIFwiLi9taXhpbi9kZXB0aFwiO1xuaW1wb3J0IGNvbG91ck1peGluIGZyb20gXCIuL21peGluL2NvbG91clwiO1xuaW1wb3J0IHNoYWRlck1peGluIGZyb20gXCIuL21peGluL3NoYWRlclwiO1xuaW1wb3J0IGJ1ZmZlck1peGluIGZyb20gXCIuL21peGluL2J1ZmZlclwiO1xuaW1wb3J0IG1hdHJpeE1peGluIGZyb20gXCIuL21peGluL21hdHJpeFwiO1xuaW1wb3J0IHByb2dyYW1NaXhpbiBmcm9tIFwiLi9taXhpbi9wcm9ncmFtXCI7XG5pbXBvcnQgdGV4dHVyZU1peGluIGZyb20gXCIuL21peGluL3RleHR1cmVcIjtcbmltcG9ydCBibGVuZGluZ01peGluIGZyb20gXCIuL21peGluL2JsZW5kaW5nXCI7XG5pbXBvcnQgbG9jYXRpb25NaXhpbiBmcm9tIFwiLi9taXhpbi9sb2NhdGlvblwiO1xuXG5jbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IFwiY2FudmFzXCIpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpZHRoKTsgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoZWlnaHQpOyB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCB4ID0gMCxcbiAgICAgICAgICB5ID0gMDtcblxuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMuY29udGV4dC52aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuXG4gICAgdGhpcy5jbGVhckNvbG91cigpO1xuXG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG5cbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gIH1cblxuICByZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG9mZnNldHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgobm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCkge1xuICAgIGNvbnN0IHsgVFJJQU5HTEVTLCBVTlNJR05FRF9TSE9SVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG1vZGUgPSBUUklBTkdMRVMsXG4gICAgICAgICAgdHlwZSA9IFVOU0lHTkVEX1NIT1JULFxuICAgICAgICAgIGNvdW50ID0gZmluaXNoIC0gc3RhcnQsXG4gICAgICAgICAgb2Zmc2V0ID0gc3RhcnQgKiAyOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHByb2dyYW1NaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJsZW5kaW5nTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBsb2NhdGlvbk1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgY29uc3QgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGdldCB0aGUgV2ViR0wgY29udGV4dC5gKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIl19