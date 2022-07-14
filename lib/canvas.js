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
    var domElement = typeof selector === "string" ? document.querySelectorAll(selector)[0] : selector; ///
    return domElement;
}
function contextFromDOMElement(domElement) {
    var context = domElement.getContext("webgl");
    if (!context) {
        throw new Error(_errors.WEB_GL_CONTEXT_ERROR);
    }
    return context;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYW52YXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkZXB0aE1peGlucyBmcm9tIFwiLi9taXhpbnMvZGVwdGhcIjtcbmltcG9ydCBzaGFkZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3NoYWRlclwiO1xuaW1wb3J0IGJ1ZmZlck1peGlucyBmcm9tIFwiLi9taXhpbnMvYnVmZmVyXCI7XG5pbXBvcnQgY29sb3VyTWl4aW5zIGZyb20gXCIuL21peGlucy9jb2xvdXJcIjtcbmltcG9ydCBtYXRyaXhNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21hdHJpeFwiO1xuaW1wb3J0IHRleHR1cmVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RleHR1cmVcIjtcbmltcG9ydCBwcm9ncmFtTWl4aW5zIGZyb20gXCIuL21peGlucy9wcm9ncmFtXCI7XG5pbXBvcnQgYmxlbmRpbmdNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2JsZW5kaW5nXCI7XG5pbXBvcnQgbG9jYXRpb25NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2xvY2F0aW9uXCI7XG5cbmltcG9ydCB7IFdFQl9HTF9DT05URVhUX0VSUk9SIH0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgeyBXSURUSCwgSEVJR0hULCBDQU5WQVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBDQU5WQVMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShXSURUSCwgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKEhFSUdIVCwgaGVpZ2h0KTsgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgeCA9IDAsXG4gICAgICAgICAgeSA9IDA7XG5cbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBvZmZzZXRzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVCxcbiAgICAgICAgICBjb3VudCA9IGZpbmlzaCAtIHN0YXJ0LFxuICAgICAgICAgIG9mZnNldCA9IHN0YXJ0ICogMjsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYmxlbmRpbmdNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBsb2NhdGlvbk1peGlucyk7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgY29uc3QgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihXRUJfR0xfQ09OVEVYVF9FUlJPUik7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJDYW52YXMiLCJzZWxlY3RvciIsIkNBTlZBUyIsImRvbUVsZW1lbnQiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiY29udGV4dCIsImNvbnRleHRGcm9tRE9NRWxlbWVudCIsImVuYWJsZURlcHRoVGVzdGluZyIsImdldERPTUVsZW1lbnQiLCJnZXRDb250ZXh0IiwiZ2V0V2lkdGgiLCJ3aWR0aCIsImdldEhlaWdodCIsImhlaWdodCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzZXRXaWR0aCIsInNldEF0dHJpYnV0ZSIsIldJRFRIIiwic2V0SGVpZ2h0IiwiSEVJR0hUIiwicmVzaXplIiwieCIsInkiLCJ2aWV3cG9ydCIsImNsZWFyIiwiY2xlYXJEZXB0aCIsImNsZWFyQ29sb3VyIiwiY2xlYXJEZXB0aEJ1ZmZlciIsImNsZWFyQ29sb3VyQnVmZmVyIiwicmVuZGVyIiwicmVuZGVyZXIiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwibm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJhcHBseU1hdHJpeCIsImRyYXdFbGVtZW50cyIsInN0YXJ0IiwiZmluaXNoIiwiVFJJQU5HTEVTIiwiVU5TSUdORURfU0hPUlQiLCJtb2RlIiwidHlwZSIsImNvdW50Iiwib2Zmc2V0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZGVwdGhNaXhpbnMiLCJzaGFkZXJNaXhpbnMiLCJidWZmZXJNaXhpbnMiLCJjb2xvdXJNaXhpbnMiLCJtYXRyaXhNaXhpbnMiLCJ0ZXh0dXJlTWl4aW5zIiwicHJvZ3JhbU1peGlucyIsImJsZW5kaW5nTWl4aW5zIiwibG9jYXRpb25NaXhpbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJFcnJvciIsIldFQl9HTF9DT05URVhUX0VSUk9SIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFlUUEsTUFBTTs7OzBEQWJILGdCQUFnQjsyREFDZixpQkFBaUI7MkRBQ2pCLGlCQUFpQjsyREFDakIsaUJBQWlCOzJEQUNqQixpQkFBaUI7NERBQ2hCLGtCQUFrQjs0REFDbEIsa0JBQWtCOzZEQUNqQixtQkFBbUI7NkRBQ25CLG1CQUFtQjtzQkFFVCxVQUFVO3lCQUNULGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBQSxBQUFNQSxNQUFNLGlCQTJFeEIsQUEzRVk7YUFBTUEsTUFBTTtZQUNiQyxRQUFRLEdBQVJBLCtDQUFpQixrQkFBTkMsVUFBTSxPQUFBOztRQUMzQixJQUFNQyxVQUFVLEdBQUdDLHNCQUFzQixDQUFDSCxRQUFRLENBQUMsRUFDN0NJLE9BQU8sR0FBR0MscUJBQXFCLENBQUNILFVBQVUsQ0FBQyxBQUFDO1FBRWxELElBQUksQ0FBQ0EsVUFBVSxHQUFHQSxVQUFVLENBQUM7UUFFN0IsSUFBSSxDQUFDRSxPQUFPLEdBQUdBLE9BQU8sQ0FBQztRQUV2QixJQUFJLENBQUNFLGtCQUFrQixFQUFFLENBQUMsQ0FBRSxHQUFHOzs7O1lBR2pDQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxPQUFPLElBQUksQ0FBQ0wsVUFBVSxDQUFDO2FBQ3hCOzs7WUFFRE0sR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1gsT0FBTyxJQUFJLENBQUNKLE9BQU8sQ0FBQzthQUNyQjs7O1lBRURLLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUFFLE9BQU8sSUFBSSxDQUFDUCxVQUFVLENBQUNRLEtBQUssQ0FBQzthQUFFOzs7WUFFNUNDLEdBQVMsRUFBVEEsV0FBUzttQkFBVEEsU0FBQUEsU0FBUyxHQUFHO2dCQUFFLE9BQU8sSUFBSSxDQUFDVCxVQUFVLENBQUNVLE1BQU0sQ0FBQzthQUFFOzs7WUFFOUNDLEdBQWMsRUFBZEEsZ0JBQWM7bUJBQWRBLFNBQUFBLGNBQWMsR0FBRztnQkFBRSxPQUFPLElBQUksQ0FBQ1gsVUFBVSxDQUFDWSxXQUFXLENBQUM7YUFBRTs7O1lBRXhEQyxHQUFlLEVBQWZBLGlCQUFlO21CQUFmQSxTQUFBQSxlQUFlLEdBQUc7Z0JBQUUsT0FBTyxJQUFJLENBQUNiLFVBQVUsQ0FBQ2MsWUFBWSxDQUFDO2FBQUU7OztZQUUxREMsR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLENBQUNQLEtBQUssRUFBRTtnQkFBRSxJQUFJLENBQUNSLFVBQVUsQ0FBQ2dCLFlBQVksQ0FBQ0MsVUFBSyxNQUFBLEVBQUVULEtBQUssQ0FBQyxDQUFDO2FBQUU7OztZQUUvRFUsR0FBUyxFQUFUQSxXQUFTO21CQUFUQSxTQUFBQSxTQUFTLENBQUNSLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUNWLFVBQVUsQ0FBQ2dCLFlBQVksQ0FBQ0csVUFBTSxPQUFBLEVBQUVULE1BQU0sQ0FBQyxDQUFDO2FBQUU7OztZQUVuRVUsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLENBQUNaLEtBQUssRUFBRUUsTUFBTSxFQUFFO2dCQUNwQixJQUFNVyxDQUFDLEdBQUcsQ0FBQyxFQUNMQyxDQUFDLEdBQUcsQ0FBQyxBQUFDO2dCQUVaLElBQUksQ0FBQ1AsUUFBUSxDQUFDUCxLQUFLLENBQUMsQ0FBQztnQkFFckIsSUFBSSxDQUFDVSxTQUFTLENBQUNSLE1BQU0sQ0FBQyxDQUFDO2dCQUV2QixJQUFJLENBQUNSLE9BQU8sQ0FBQ3FCLFFBQVEsQ0FBQ0YsQ0FBQyxFQUFFQyxDQUFDLEVBQUVkLEtBQUssRUFBRUUsTUFBTSxDQUFDLENBQUM7YUFDNUM7OztZQUVEYyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssR0FBRztnQkFDTixJQUFJLENBQUNDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUNDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUNDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQ0MsaUJBQWlCLEVBQUUsQ0FBQzthQUMxQjs7O1lBRURDLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRUMsZ0JBQWdCLEVBQUU7Z0JBQ2hHLElBQU1DLDRCQUE0QixHQUFHTixRQUFRLENBQUNPLCtCQUErQixFQUFFLEVBQ3pFQyw0QkFBNEIsR0FBR1IsUUFBUSxDQUFDUywrQkFBK0IsRUFBRSxFQUN6RUMsNkJBQTZCLEdBQUdWLFFBQVEsQ0FBQ1csZ0NBQWdDLEVBQUUsRUFDM0VDLDhCQUE4QixHQUFHWixRQUFRLENBQUNhLGlDQUFpQyxFQUFFLEVBQzdFQywrQkFBK0IsR0FBR2QsUUFBUSxDQUFDZSxrQ0FBa0MsRUFBRSxBQUFDO2dCQUV0RixJQUFJLENBQUNDLFdBQVcsQ0FBQ1YsNEJBQTRCLEVBQUVMLGFBQWEsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUNlLFdBQVcsQ0FBQ1IsNEJBQTRCLEVBQUVOLGFBQWEsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUNjLFdBQVcsQ0FBQ04sNkJBQTZCLEVBQUVQLGNBQWMsQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUNhLFdBQVcsQ0FBQ0osOEJBQThCLEVBQUVSLGVBQWUsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUNZLFdBQVcsQ0FBQ0YsK0JBQStCLEVBQUVULGdCQUFnQixDQUFDLENBQUM7YUFDckU7OztZQUVEWSxHQUFZLEVBQVpBLGNBQVk7bUJBQVpBLFNBQUFBLFlBQVksQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEVBQUU7Z0JBQzFCLElBQXNDLFFBQVksR0FBWixJQUFJLENBQUMvQyxPQUFPLEVBQTFDZ0QsU0FBUyxHQUFxQixRQUFZLENBQTFDQSxTQUFTLEVBQUVDLGNBQWMsR0FBSyxRQUFZLENBQS9CQSxjQUFjLEVBQzNCQyxJQUFJLEdBQUdGLFNBQVMsRUFDaEJHLElBQUksR0FBR0YsY0FBYyxFQUNyQkcsS0FBSyxHQUFHTCxNQUFNLEdBQUdELEtBQUssRUFDdEJPLE1BQU0sR0FBR1AsS0FBSyxHQUFHLENBQUMsQUFBQyxFQUFDLEdBQUc7Z0JBRTdCLElBQUksQ0FBQzlDLE9BQU8sQ0FBQzZDLFlBQVksQ0FBQ0ssSUFBSSxFQUFFRSxLQUFLLEVBQUVELElBQUksRUFBRUUsTUFBTSxDQUFDO2FBQ3JEOzs7O0NBQ0YsRUFBQTtBQUVEQyxNQUFNLENBQUNDLE1BQU0sQ0FBQzVELE1BQU0sQ0FBQzZELFNBQVMsRUFBRUMsTUFBVyxRQUFBLENBQUMsQ0FBQztBQUM3Q0gsTUFBTSxDQUFDQyxNQUFNLENBQUM1RCxNQUFNLENBQUM2RCxTQUFTLEVBQUVFLE9BQVksUUFBQSxDQUFDLENBQUM7QUFDOUNKLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDNUQsTUFBTSxDQUFDNkQsU0FBUyxFQUFFRyxPQUFZLFFBQUEsQ0FBQyxDQUFDO0FBQzlDTCxNQUFNLENBQUNDLE1BQU0sQ0FBQzVELE1BQU0sQ0FBQzZELFNBQVMsRUFBRUksT0FBWSxRQUFBLENBQUMsQ0FBQztBQUM5Q04sTUFBTSxDQUFDQyxNQUFNLENBQUM1RCxNQUFNLENBQUM2RCxTQUFTLEVBQUVLLE9BQVksUUFBQSxDQUFDLENBQUM7QUFDOUNQLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDNUQsTUFBTSxDQUFDNkQsU0FBUyxFQUFFTSxRQUFhLFFBQUEsQ0FBQyxDQUFDO0FBQy9DUixNQUFNLENBQUNDLE1BQU0sQ0FBQzVELE1BQU0sQ0FBQzZELFNBQVMsRUFBRU8sUUFBYSxRQUFBLENBQUMsQ0FBQztBQUMvQ1QsTUFBTSxDQUFDQyxNQUFNLENBQUM1RCxNQUFNLENBQUM2RCxTQUFTLEVBQUVRLFNBQWMsUUFBQSxDQUFDLENBQUM7QUFDaERWLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDNUQsTUFBTSxDQUFDNkQsU0FBUyxFQUFFUyxTQUFjLFFBQUEsQ0FBQyxDQUFDO0FBRWhELFNBQVNsRSxzQkFBc0IsQ0FBQ0gsUUFBUSxFQUFFO0lBQ3hDLElBQU1FLFVBQVUsR0FBRyxBQUFDLE9BQU9GLFFBQVEsS0FBSyxRQUFRLEdBQzNCc0UsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQ3ZFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUNwQ0EsUUFBUSxBQUFDLEVBQUUsR0FBRztJQUVyQyxPQUFPRSxVQUFVLENBQUM7Q0FDbkI7QUFFRCxTQUFTRyxxQkFBcUIsQ0FBQ0gsVUFBVSxFQUFFO0lBQ3pDLElBQU1FLE9BQU8sR0FBR0YsVUFBVSxDQUFDTSxVQUFVLENBQUMsT0FBTyxDQUFDLEFBQUM7SUFFL0MsSUFBSSxDQUFDSixPQUFPLEVBQUU7UUFDWixNQUFNLElBQUlvRSxLQUFLLENBQUNDLE9BQW9CLHFCQUFBLENBQUMsQ0FBQztLQUN2QztJQUVELE9BQU9yRSxPQUFPLENBQUM7Q0FDaEIifQ==