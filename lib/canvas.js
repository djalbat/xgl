"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _depth = _interopRequireDefault(require("./mixins/depth"));
var _shader = _interopRequireDefault(require("./mixins/shader"));
var _buffer = _interopRequireDefault(require("./mixins/buffer"));
var _colour = _interopRequireDefault(require("./mixins/colour"));
var _matrix = _interopRequireDefault(require("./mixins/matrix"));
var _texture = _interopRequireDefault(require("./mixins/texture"));
var _program = _interopRequireDefault(require("./mixins/program"));
var _blending = _interopRequireDefault(require("./mixins/blending"));
var _location = _interopRequireDefault(require("./mixins/location"));
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
exports.default = Canvas;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYW52YXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkZXB0aE1peGlucyBmcm9tIFwiLi9taXhpbnMvZGVwdGhcIjtcbmltcG9ydCBzaGFkZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3NoYWRlclwiO1xuaW1wb3J0IGJ1ZmZlck1peGlucyBmcm9tIFwiLi9taXhpbnMvYnVmZmVyXCI7XG5pbXBvcnQgY29sb3VyTWl4aW5zIGZyb20gXCIuL21peGlucy9jb2xvdXJcIjtcbmltcG9ydCBtYXRyaXhNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21hdHJpeFwiO1xuaW1wb3J0IHRleHR1cmVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RleHR1cmVcIjtcbmltcG9ydCBwcm9ncmFtTWl4aW5zIGZyb20gXCIuL21peGlucy9wcm9ncmFtXCI7XG5pbXBvcnQgYmxlbmRpbmdNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2JsZW5kaW5nXCI7XG5pbXBvcnQgbG9jYXRpb25NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2xvY2F0aW9uXCI7XG5cbmltcG9ydCB7IFdFQl9HTF9DT05URVhUX0VSUk9SIH0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgeyBXSURUSCwgSEVJR0hULCBDQU5WQVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBDQU5WQVMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShXSURUSCwgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKEhFSUdIVCwgaGVpZ2h0KTsgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgeCA9IDAsXG4gICAgICAgICAgeSA9IDA7XG5cbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBvZmZzZXRzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVCxcbiAgICAgICAgICBjb3VudCA9IGZpbmlzaCAtIHN0YXJ0LFxuICAgICAgICAgIG9mZnNldCA9IHN0YXJ0ICogMjsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYmxlbmRpbmdNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBsb2NhdGlvbk1peGlucyk7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgY29uc3QgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihXRUJfR0xfQ09OVEVYVF9FUlJPUik7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJDYW52YXMiLCJzZWxlY3RvciIsIkNBTlZBUyIsImRvbUVsZW1lbnQiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiY29udGV4dCIsImNvbnRleHRGcm9tRE9NRWxlbWVudCIsImVuYWJsZURlcHRoVGVzdGluZyIsImdldERPTUVsZW1lbnQiLCJnZXRDb250ZXh0IiwiZ2V0V2lkdGgiLCJ3aWR0aCIsImdldEhlaWdodCIsImhlaWdodCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzZXRXaWR0aCIsInNldEF0dHJpYnV0ZSIsIldJRFRIIiwic2V0SGVpZ2h0IiwiSEVJR0hUIiwicmVzaXplIiwieCIsInkiLCJ2aWV3cG9ydCIsImNsZWFyIiwiY2xlYXJEZXB0aCIsImNsZWFyQ29sb3VyIiwiY2xlYXJEZXB0aEJ1ZmZlciIsImNsZWFyQ29sb3VyQnVmZmVyIiwicmVuZGVyIiwicmVuZGVyZXIiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwibm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJhcHBseU1hdHJpeCIsImRyYXdFbGVtZW50cyIsInN0YXJ0IiwiZmluaXNoIiwiVFJJQU5HTEVTIiwiVU5TSUdORURfU0hPUlQiLCJtb2RlIiwidHlwZSIsImNvdW50Iiwib2Zmc2V0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZGVwdGhNaXhpbnMiLCJzaGFkZXJNaXhpbnMiLCJidWZmZXJNaXhpbnMiLCJjb2xvdXJNaXhpbnMiLCJtYXRyaXhNaXhpbnMiLCJ0ZXh0dXJlTWl4aW5zIiwicHJvZ3JhbU1peGlucyIsImJsZW5kaW5nTWl4aW5zIiwibG9jYXRpb25NaXhpbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJFcnJvciIsIldFQl9HTF9DT05URVhUX0VSUk9SIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVZLEdBQWdCLENBQWhCLE1BQWdCO0FBQ2YsR0FBaUIsQ0FBakIsT0FBaUI7QUFDakIsR0FBaUIsQ0FBakIsT0FBaUI7QUFDakIsR0FBaUIsQ0FBakIsT0FBaUI7QUFDakIsR0FBaUIsQ0FBakIsT0FBaUI7QUFDaEIsR0FBa0IsQ0FBbEIsUUFBa0I7QUFDbEIsR0FBa0IsQ0FBbEIsUUFBa0I7QUFDakIsR0FBbUIsQ0FBbkIsU0FBbUI7QUFDbkIsR0FBbUIsQ0FBbkIsU0FBbUI7QUFFVCxHQUFVLENBQVYsT0FBVTtBQUNULEdBQWEsQ0FBYixVQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlCQSxNQUFNLGlCQUFaLFFBQVE7YUFBRkEsTUFBTTtZQUNiQyxRQUFRLG9FQUFHQyxVQUFNOztRQUMzQixHQUFLLENBQUNDLFVBQVUsR0FBR0Msc0JBQXNCLENBQUNILFFBQVEsR0FD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