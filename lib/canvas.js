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
var _depth = /*#__PURE__*/ _interop_require_default(require("./mixins/depth"));
var _shader = /*#__PURE__*/ _interop_require_default(require("./mixins/shader"));
var _buffer = /*#__PURE__*/ _interop_require_default(require("./mixins/buffer"));
var _colour = /*#__PURE__*/ _interop_require_default(require("./mixins/colour"));
var _matrix = /*#__PURE__*/ _interop_require_default(require("./mixins/matrix"));
var _texture = /*#__PURE__*/ _interop_require_default(require("./mixins/texture"));
var _program = /*#__PURE__*/ _interop_require_default(require("./mixins/program"));
var _blending = /*#__PURE__*/ _interop_require_default(require("./mixins/blending"));
var _location = /*#__PURE__*/ _interop_require_default(require("./mixins/location"));
var _errors = require("./errors");
var _constants = require("./constants");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var Canvas = /*#__PURE__*/ function() {
    function Canvas() {
        var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.CANVAS;
        _class_call_check(this, Canvas);
        var domElement = domElementFromSelector(selector), context = contextFromDOMElement(domElement);
        this.domElement = domElement;
        this.context = context;
        this.enableDepthTesting(); ///
    }
    _create_class(Canvas, [
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
            value: function clear(colour) {
                this.clearColour(colour);
                this.clearDepth();
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
                var _this_context = this.context, TRIANGLES = _this_context.TRIANGLES, UNSIGNED_SHORT = _this_context.UNSIGNED_SHORT, mode = TRIANGLES, type = UNSIGNED_SHORT, count = finish - start, offset = start * 2; ///
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
    var domElement = (typeof selector === "undefined" ? "undefined" : _type_of(selector)) === _constants.STRING ? document.querySelectorAll(selector)[0] : selector; ///
    return domElement;
}
function contextFromDOMElement(domElement) {
    var context = domElement.getContext(_constants.WEBGL);
    if (!context) {
        throw new Error(_errors.WEB_GL_CONTEXT_ERROR);
    }
    return context;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYW52YXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkZXB0aE1peGlucyBmcm9tIFwiLi9taXhpbnMvZGVwdGhcIjtcbmltcG9ydCBzaGFkZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3NoYWRlclwiO1xuaW1wb3J0IGJ1ZmZlck1peGlucyBmcm9tIFwiLi9taXhpbnMvYnVmZmVyXCI7XG5pbXBvcnQgY29sb3VyTWl4aW5zIGZyb20gXCIuL21peGlucy9jb2xvdXJcIjtcbmltcG9ydCBtYXRyaXhNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21hdHJpeFwiO1xuaW1wb3J0IHRleHR1cmVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RleHR1cmVcIjtcbmltcG9ydCBwcm9ncmFtTWl4aW5zIGZyb20gXCIuL21peGlucy9wcm9ncmFtXCI7XG5pbXBvcnQgYmxlbmRpbmdNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2JsZW5kaW5nXCI7XG5pbXBvcnQgbG9jYXRpb25NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2xvY2F0aW9uXCI7XG5cbmltcG9ydCB7IFdFQl9HTF9DT05URVhUX0VSUk9SIH0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgeyBXRUJHTCwgV0lEVEgsIEhFSUdIVCwgQ0FOVkFTLCBTVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBDQU5WQVMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShXSURUSCwgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKEhFSUdIVCwgaGVpZ2h0KTsgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgeCA9IDAsXG4gICAgICAgICAgeSA9IDA7XG5cbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBjbGVhcihjb2xvdXIpIHtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKGNvbG91cik7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBvZmZzZXRzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVCxcbiAgICAgICAgICBjb3VudCA9IGZpbmlzaCAtIHN0YXJ0LFxuICAgICAgICAgIG9mZnNldCA9IHN0YXJ0ICogMjsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYmxlbmRpbmdNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBsb2NhdGlvbk1peGlucyk7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09IFNUUklORykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICBjb25zdCBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KFdFQkdMKTtcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoV0VCX0dMX0NPTlRFWFRfRVJST1IpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwibmFtZXMiOlsiQ2FudmFzIiwic2VsZWN0b3IiLCJDQU5WQVMiLCJkb21FbGVtZW50IiwiZG9tRWxlbWVudEZyb21TZWxlY3RvciIsImNvbnRleHQiLCJjb250ZXh0RnJvbURPTUVsZW1lbnQiLCJlbmFibGVEZXB0aFRlc3RpbmciLCJnZXRET01FbGVtZW50IiwiZ2V0Q29udGV4dCIsImdldFdpZHRoIiwid2lkdGgiLCJnZXRIZWlnaHQiLCJoZWlnaHQiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudFdpZHRoIiwiZ2V0Q2xpZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2V0V2lkdGgiLCJzZXRBdHRyaWJ1dGUiLCJXSURUSCIsInNldEhlaWdodCIsIkhFSUdIVCIsInJlc2l6ZSIsIngiLCJ5Iiwidmlld3BvcnQiLCJjbGVhciIsImNvbG91ciIsImNsZWFyQ29sb3VyIiwiY2xlYXJEZXB0aCIsImNsZWFyRGVwdGhCdWZmZXIiLCJjbGVhckNvbG91ckJ1ZmZlciIsInJlbmRlciIsInJlbmRlcmVyIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsIm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiYXBwbHlNYXRyaXgiLCJkcmF3RWxlbWVudHMiLCJzdGFydCIsImZpbmlzaCIsIlRSSUFOR0xFUyIsIlVOU0lHTkVEX1NIT1JUIiwibW9kZSIsInR5cGUiLCJjb3VudCIsIm9mZnNldCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRlcHRoTWl4aW5zIiwic2hhZGVyTWl4aW5zIiwiYnVmZmVyTWl4aW5zIiwiY29sb3VyTWl4aW5zIiwibWF0cml4TWl4aW5zIiwidGV4dHVyZU1peGlucyIsInByb2dyYW1NaXhpbnMiLCJibGVuZGluZ01peGlucyIsImxvY2F0aW9uTWl4aW5zIiwiU1RSSU5HIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiV0VCR0wiLCJFcnJvciIsIldFQl9HTF9DT05URVhUX0VSUk9SIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7NERBYkc7NkRBQ0M7NkRBQ0E7NkRBQ0E7NkRBQ0E7OERBQ0M7OERBQ0E7K0RBQ0M7K0RBQ0E7c0JBRVU7eUJBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFBLEFBQU1BLHVCQUFELEFBQUw7YUFBTUE7WUFDUEMsV0FBQUEsaUVBQVdDLGlC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