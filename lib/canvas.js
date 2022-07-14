"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Canvas;
    }
});
var _depth = /*#__PURE__*/ _interopRequireDefault(require("./mixins/depth"));
var _shader = /*#__PURE__*/ _interopRequireDefault(require("./mixins/shader"));
var _buffer = /*#__PURE__*/ _interopRequireDefault(require("./mixins/buffer"));
var _colour = /*#__PURE__*/ _interopRequireDefault(require("./mixins/colour"));
var _matrix = /*#__PURE__*/ _interopRequireDefault(require("./mixins/matrix"));
var _texture = /*#__PURE__*/ _interopRequireDefault(require("./mixins/texture"));
var _program = /*#__PURE__*/ _interopRequireDefault(require("./mixins/program"));
var _blending = /*#__PURE__*/ _interopRequireDefault(require("./mixins/blending"));
var _location = /*#__PURE__*/ _interopRequireDefault(require("./mixins/location"));
var _errors = require("./errors");
var _constants = require("./constants");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var Canvas = /*#__PURE__*/ function() {
    function Canvas() {
        var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.CANVAS;
        _classCallCheck(this, Canvas);
        var domElement = domElementFromSelector(selector), context = contextFromDOMElement(domElement);
        this.domElement = domElement;
        this.context = context;
        this.enableDepthTesting(); ///
    }
    _createClass(Canvas, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getWidth",
            value: function getWidth() {
                return this.domElement.width;
            }
        },
        {
            key: "getHeight",
            value: function getHeight() {
                return this.domElement.height;
            }
        },
        {
            key: "getClientWidth",
            value: function getClientWidth() {
                return this.domElement.clientWidth;
            }
        },
        {
            key: "getClientHeight",
            value: function getClientHeight() {
                return this.domElement.clientHeight;
            }
        },
        {
            key: "setWidth",
            value: function setWidth(width) {
                this.domElement.setAttribute(_constants.WIDTH, width);
            }
        },
        {
            key: "setHeight",
            value: function setHeight(height) {
                this.domElement.setAttribute(_constants.HEIGHT, height);
            }
        },
        {
            key: "resize",
            value: function resize(width, height) {
                var x = 0, y = 0;
                this.setWidth(width);
                this.setHeight(height);
                this.context.viewport(x, y, width, height);
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.clearDepth();
                this.clearColour();
                this.clearDepthBuffer();
                this.clearColourBuffer();
            }
        },
        {
            key: "render",
            value: function render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
                var offsetsMatrixUniformLocation = renderer.getOffsetsMatrixUniformLocation(), normalsMatrixUniformLocation = renderer.getNormalsMatrixUniformLocation(), positionMatrixUniformLocation = renderer.getPositionMatrixUniformLocation(), rotationsMatrixUniformLocation = renderer.getRotationsMatrixUniformLocation(), projectionMatrixUniformLocation = renderer.getProjectionMatrixUniformLocation();
                this.applyMatrix(offsetsMatrixUniformLocation, offsetsMatrix);
                this.applyMatrix(normalsMatrixUniformLocation, normalsMatrix);
                this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
                this.applyMatrix(rotationsMatrixUniformLocation, rotationsMatrix);
                this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
            }
        },
        {
            key: "drawElements",
            value: function drawElements(start, finish) {
                var _context = this.context, TRIANGLES = _context.TRIANGLES, UNSIGNED_SHORT = _context.UNSIGNED_SHORT, mode = TRIANGLES, type = UNSIGNED_SHORT, count = finish - start, offset = start * 2; ///
                this.context.drawElements(mode, count, type, offset);
            }
        }
    ]);
    return Canvas;
}();
Object.assign(Canvas.prototype, _depth.default);
Object.assign(Canvas.prototype, _shader.default);
Object.assign(Canvas.prototype, _buffer.default);
Object.assign(Canvas.prototype, _colour.default);
Object.assign(Canvas.prototype, _matrix.default);
Object.assign(Canvas.prototype, _texture.default);
Object.assign(Canvas.prototype, _program.default);
Object.assign(Canvas.prototype, _blending.default);
Object.assign(Canvas.prototype, _location.default);
function domElementFromSelector(selector) {
    var domElement = (typeof selector === "undefined" ? "undefined" : _typeof(selector)) === _constants.STRING ? document.querySelectorAll(selector)[0] : selector; ///
    return domElement;
}
function contextFromDOMElement(domElement) {
    var context = domElement.getContext(_constants.WEBGL);
    if (!context) {
        throw new Error(_errors.WEB_GL_CONTEXT_ERROR);
    }
    return context;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYW52YXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkZXB0aE1peGlucyBmcm9tIFwiLi9taXhpbnMvZGVwdGhcIjtcbmltcG9ydCBzaGFkZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3NoYWRlclwiO1xuaW1wb3J0IGJ1ZmZlck1peGlucyBmcm9tIFwiLi9taXhpbnMvYnVmZmVyXCI7XG5pbXBvcnQgY29sb3VyTWl4aW5zIGZyb20gXCIuL21peGlucy9jb2xvdXJcIjtcbmltcG9ydCBtYXRyaXhNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21hdHJpeFwiO1xuaW1wb3J0IHRleHR1cmVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RleHR1cmVcIjtcbmltcG9ydCBwcm9ncmFtTWl4aW5zIGZyb20gXCIuL21peGlucy9wcm9ncmFtXCI7XG5pbXBvcnQgYmxlbmRpbmdNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2JsZW5kaW5nXCI7XG5pbXBvcnQgbG9jYXRpb25NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2xvY2F0aW9uXCI7XG5cbmltcG9ydCB7IFdFQl9HTF9DT05URVhUX0VSUk9SIH0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgeyBXRUJHTCwgV0lEVEgsIEhFSUdIVCwgQ0FOVkFTLCBTVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBDQU5WQVMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShXSURUSCwgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKEhFSUdIVCwgaGVpZ2h0KTsgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgeCA9IDAsXG4gICAgICAgICAgeSA9IDA7XG5cbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBvZmZzZXRzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVCxcbiAgICAgICAgICBjb3VudCA9IGZpbmlzaCAtIHN0YXJ0LFxuICAgICAgICAgIG9mZnNldCA9IHN0YXJ0ICogMjsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYmxlbmRpbmdNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBsb2NhdGlvbk1peGlucyk7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09IFNUUklORykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICBjb25zdCBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KFdFQkdMKTtcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoV0VCX0dMX0NPTlRFWFRfRVJST1IpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwibmFtZXMiOlsiQ2FudmFzIiwic2VsZWN0b3IiLCJDQU5WQVMiLCJkb21FbGVtZW50IiwiZG9tRWxlbWVudEZyb21TZWxlY3RvciIsImNvbnRleHQiLCJjb250ZXh0RnJvbURPTUVsZW1lbnQiLCJlbmFibGVEZXB0aFRlc3RpbmciLCJnZXRET01FbGVtZW50IiwiZ2V0Q29udGV4dCIsImdldFdpZHRoIiwid2lkdGgiLCJnZXRIZWlnaHQiLCJoZWlnaHQiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudFdpZHRoIiwiZ2V0Q2xpZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2V0V2lkdGgiLCJzZXRBdHRyaWJ1dGUiLCJXSURUSCIsInNldEhlaWdodCIsIkhFSUdIVCIsInJlc2l6ZSIsIngiLCJ5Iiwidmlld3BvcnQiLCJjbGVhciIsImNsZWFyRGVwdGgiLCJjbGVhckNvbG91ciIsImNsZWFyRGVwdGhCdWZmZXIiLCJjbGVhckNvbG91ckJ1ZmZlciIsInJlbmRlciIsInJlbmRlcmVyIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsIm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiYXBwbHlNYXRyaXgiLCJkcmF3RWxlbWVudHMiLCJzdGFydCIsImZpbmlzaCIsIlRSSUFOR0xFUyIsIlVOU0lHTkVEX1NIT1JUIiwibW9kZSIsInR5cGUiLCJjb3VudCIsIm9mZnNldCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRlcHRoTWl4aW5zIiwic2hhZGVyTWl4aW5zIiwiYnVmZmVyTWl4aW5zIiwiY29sb3VyTWl4aW5zIiwibWF0cml4TWl4aW5zIiwidGV4dHVyZU1peGlucyIsInByb2dyYW1NaXhpbnMiLCJibGVuZGluZ01peGlucyIsImxvY2F0aW9uTWl4aW5zIiwiU1RSSU5HIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiV0VCR0wiLCJFcnJvciIsIldFQl9HTF9DT05URVhUX0VSUk9SIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFlUUEsTUFBTTs7OzBEQWJILGdCQUFnQjsyREFDZixpQkFBaUI7MkRBQ2pCLGlCQUFpQjsyREFDakIsaUJBQWlCOzJEQUNqQixpQkFBaUI7NERBQ2hCLGtCQUFrQjs0REFDbEIsa0JBQWtCOzZEQUNqQixtQkFBbUI7NkRBQ25CLG1CQUFtQjtzQkFFVCxVQUFVO3lCQUNNLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ELElBQUEsQUFBTUEsTUFBTSxpQkEyRXhCLEFBM0VZO2FBQU1BLE1BQU07WUFDYkMsUUFBUSxHQUFSQSwrQ0FBaUIsa0JBQU5DLFVBQU0sT0FBQTs7UUFDM0IsSUFBTUMsVUFBVSxHQUFHQyxzQkFBc0IsQ0FBQ0gsUUFBUSxDQUFDLEVBQzdDSSxPQUFPLEdBQUdDLHFCQUFxQixDQUFDSCxV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