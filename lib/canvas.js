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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYW52YXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkZXB0aE1peGlucyBmcm9tIFwiLi9taXhpbnMvZGVwdGhcIjtcbmltcG9ydCBzaGFkZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3NoYWRlclwiO1xuaW1wb3J0IGJ1ZmZlck1peGlucyBmcm9tIFwiLi9taXhpbnMvYnVmZmVyXCI7XG5pbXBvcnQgY29sb3VyTWl4aW5zIGZyb20gXCIuL21peGlucy9jb2xvdXJcIjtcbmltcG9ydCBtYXRyaXhNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21hdHJpeFwiO1xuaW1wb3J0IHRleHR1cmVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RleHR1cmVcIjtcbmltcG9ydCBwcm9ncmFtTWl4aW5zIGZyb20gXCIuL21peGlucy9wcm9ncmFtXCI7XG5pbXBvcnQgYmxlbmRpbmdNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2JsZW5kaW5nXCI7XG5pbXBvcnQgbG9jYXRpb25NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2xvY2F0aW9uXCI7XG5cbmltcG9ydCB7IFdFQl9HTF9DT05URVhUX0VSUk9SIH0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgeyBXSURUSCwgSEVJR0hULCBDQU5WQVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBDQU5WQVMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShXSURUSCwgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKEhFSUdIVCwgaGVpZ2h0KTsgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgeCA9IDAsXG4gICAgICAgICAgeSA9IDA7XG5cbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBvZmZzZXRzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVCxcbiAgICAgICAgICBjb3VudCA9IGZpbmlzaCAtIHN0YXJ0LFxuICAgICAgICAgIG9mZnNldCA9IHN0YXJ0ICogMjsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYmxlbmRpbmdNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBsb2NhdGlvbk1peGlucyk7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgY29uc3QgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihXRUJfR0xfQ09OVEVYVF9FUlJPUik7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJDYW52YXMiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiY29udGV4dCIsImNvbnRleHRGcm9tRE9NRWxlbWVudCIsImVuYWJsZURlcHRoVGVzdGluZyIsImdldERPTUVsZW1lbnQiLCJnZXRDb250ZXh0IiwiZ2V0V2lkdGgiLCJ3aWR0aCIsImdldEhlaWdodCIsImhlaWdodCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzZXRXaWR0aCIsInNldEF0dHJpYnV0ZSIsInNldEhlaWdodCIsInJlc2l6ZSIsIngiLCJ5Iiwidmlld3BvcnQiLCJjbGVhciIsImNsZWFyRGVwdGgiLCJjbGVhckNvbG91ciIsImNsZWFyRGVwdGhCdWZmZXIiLCJjbGVhckNvbG91ckJ1ZmZlciIsInJlbmRlciIsInJlbmRlcmVyIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsIm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiYXBwbHlNYXRyaXgiLCJkcmF3RWxlbWVudHMiLCJzdGFydCIsImZpbmlzaCIsIlRSSUFOR0xFUyIsIlVOU0lHTkVEX1NIT1JUIiwibW9kZSIsInR5cGUiLCJjb3VudCIsIm9mZnNldCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVZLEdBQWdCLENBQWhCLE1BQWdCO0FBQ2YsR0FBaUIsQ0FBakIsT0FBaUI7QUFDakIsR0FBaUIsQ0FBakIsT0FBaUI7QUFDakIsR0FBaUIsQ0FBakIsT0FBaUI7QUFDakIsR0FBaUIsQ0FBakIsT0FBaUI7QUFDaEIsR0FBa0IsQ0FBbEIsUUFBa0I7QUFDbEIsR0FBa0IsQ0FBbEIsUUFBa0I7QUFDakIsR0FBbUIsQ0FBbkIsU0FBbUI7QUFDbkIsR0FBbUIsQ0FBbkIsU0FBbUI7QUFFVCxHQUFVLENBQVYsT0FBVTtBQUNULEdBQWEsQ0FBYixVQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlCQSxNQUFNLGlCQUFaLFFBQVE7YUFBRkEsTUFBTTtZQUNiQyxRQUFRLG9FQUhnQixVQUFhOztRQUkvQyxHQUFLLENBQUNDLFVBQVUsR0FBR0Msc0JBQXNCLENBQUNGLFFBQVEsR0FDNUNHLE9BQU8sR0FBR0MscUJBQXFCLENBQUNILFVBQVU7UUFFaEQsSUFBSSxDQUFDQSxVQUFVLEdBQUdBLFVBQVU7UUFFNUIsSUFBSSxDQUFDRSxPQUFPLEdBQUdBLE9BQU87UUFFdEIsSUFBSSxDQUFDRSxrQkFBa0IsR0FBSyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Ozs7WUFHakNDLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFB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