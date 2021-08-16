"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _matrix = require("./mixin/matrix");
var _blending = require("./mixin/blending");
var _errors = require("./errors");
var _program = require("./mixin/program");
var _colour = require("./mixin/colour");
var _texture = require("./mixin/texture");
var _depth = require("./mixin/depth");
var _shader = require("./mixin/shader");
var _buffer = require("./mixin/buffer");
var _location = require("./mixin/location");
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var Canvas = /*#__PURE__*/ function() {
    function Canvas(param) {
        var selector = param === void 0 ? "canvas" : param;
        _classCallCheck(this, Canvas);
        _defineProperty(this, "applyMatrix", _matrix.applyMatrix);
        _defineProperty(this, "enableBlending", _blending.enableBlending);
        _defineProperty(this, "useProgram", _program.useProgram);
        _defineProperty(this, "createProgram", _program.createProgram);
        _defineProperty(this, "clearColour", _colour.clearColour);
        _defineProperty(this, "clearColourBuffer", _colour.clearColourBuffer);
        _defineProperty(this, "createTexture", _texture.createTexture);
        _defineProperty(this, "enableAnisotropicFiltering", _texture.enableAnisotropicFiltering);
        _defineProperty(this, "clearDepth", _depth.clearDepth);
        _defineProperty(this, "clearDepthBuffer", _depth.clearDepthBuffer);
        _defineProperty(this, "enableDepthTesting", _depth.enableDepthTesting);
        _defineProperty(this, "createShader", _shader.createShader);
        _defineProperty(this, "createVertexShader", _shader.createVertexShader);
        _defineProperty(this, "createFragmentShader", _shader.createFragmentShader);
        _defineProperty(this, "bindBuffer", _buffer.bindBuffer);
        _defineProperty(this, "createBuffer", _buffer.createBuffer);
        _defineProperty(this, "bindElementBuffer", _buffer.bindElementBuffer);
        _defineProperty(this, "createElementBuffer", _buffer.createElementBuffer);
        _defineProperty(this, "getUniformLocation", _location.getUniformLocation);
        _defineProperty(this, "getAttributeLocation", _location.getAttributeLocation);
        _defineProperty(this, "setUniformLocationIntegerValue", _location.setUniformLocationIntegerValue);
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
                this.domElement.setAttribute("width", width);
            }
        },
        {
            key: "setHeight",
            value: function setHeight(height) {
                this.domElement.setAttribute("height", height);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYW52YXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFwcGx5TWF0cml4IH0gZnJvbSBcIi4vbWl4aW4vbWF0cml4XCI7XG5pbXBvcnQgeyBlbmFibGVCbGVuZGluZyB9IGZyb20gXCIuL21peGluL2JsZW5kaW5nXCI7XG5pbXBvcnQgeyBXRUJfR0xfQ09OVEVYVF9FUlJPUiB9IGZyb20gXCIuL2Vycm9yc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSwgdXNlUHJvZ3JhbSB9IGZyb20gXCIuL21peGluL3Byb2dyYW1cIjtcbmltcG9ydCB7IGNsZWFyQ29sb3VyLCBjbGVhckNvbG91ckJ1ZmZlciB9IGZyb20gXCIuL21peGluL2NvbG91clwiO1xuaW1wb3J0IHsgY3JlYXRlVGV4dHVyZSwgZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcgfSBmcm9tIFwiLi9taXhpbi90ZXh0dXJlXCI7XG5pbXBvcnQgeyBjbGVhckRlcHRoLCBjbGVhckRlcHRoQnVmZmVyLCBlbmFibGVEZXB0aFRlc3RpbmcgfSBmcm9tIFwiLi9taXhpbi9kZXB0aFwiO1xuaW1wb3J0IHsgY3JlYXRlU2hhZGVyLCBjcmVhdGVWZXJ0ZXhTaGFkZXIsIGNyZWF0ZUZyYWdtZW50U2hhZGVyIH0gZnJvbSBcIi4vbWl4aW4vc2hhZGVyXCI7XG5pbXBvcnQgeyBiaW5kQnVmZmVyLCBiaW5kRWxlbWVudEJ1ZmZlciwgY3JlYXRlQnVmZmVyLCBjcmVhdGVFbGVtZW50QnVmZmVyIH0gZnJvbSBcIi4vbWl4aW4vYnVmZmVyXCI7XG5pbXBvcnQgeyBnZXRBdHRyaWJ1dGVMb2NhdGlvbiwgZ2V0VW5pZm9ybUxvY2F0aW9uLCBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgfSBmcm9tIFwiLi9taXhpbi9sb2NhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBhcHBseU1hdHJpeCA9IGFwcGx5TWF0cml4O1xuXG4gIGVuYWJsZUJsZW5kaW5nID0gZW5hYmxlQmxlbmRpbmc7XG5cbiAgdXNlUHJvZ3JhbSA9IHVzZVByb2dyYW07XG4gIGNyZWF0ZVByb2dyYW0gPSBjcmVhdGVQcm9ncmFtO1xuXG4gIGNsZWFyQ29sb3VyID0gY2xlYXJDb2xvdXI7XG4gIGNsZWFyQ29sb3VyQnVmZmVyID0gY2xlYXJDb2xvdXJCdWZmZXI7XG5cbiAgY3JlYXRlVGV4dHVyZSA9IGNyZWF0ZVRleHR1cmU7XG4gIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nID0gZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmc7XG5cbiAgY2xlYXJEZXB0aCA9IGNsZWFyRGVwdGg7XG4gIGNsZWFyRGVwdGhCdWZmZXIgPSBjbGVhckRlcHRoQnVmZmVyO1xuICBlbmFibGVEZXB0aFRlc3RpbmcgPSBlbmFibGVEZXB0aFRlc3Rpbmc7XG5cbiAgY3JlYXRlU2hhZGVyID0gY3JlYXRlU2hhZGVyO1xuICBjcmVhdGVWZXJ0ZXhTaGFkZXIgPSBjcmVhdGVWZXJ0ZXhTaGFkZXI7XG4gIGNyZWF0ZUZyYWdtZW50U2hhZGVyID0gY3JlYXRlRnJhZ21lbnRTaGFkZXI7XG5cbiAgYmluZEJ1ZmZlciA9IGJpbmRCdWZmZXI7XG4gIGNyZWF0ZUJ1ZmZlciA9IGNyZWF0ZUJ1ZmZlcjtcbiAgYmluZEVsZW1lbnRCdWZmZXIgPSBiaW5kRWxlbWVudEJ1ZmZlcjtcbiAgY3JlYXRlRWxlbWVudEJ1ZmZlciA9IGNyZWF0ZUVsZW1lbnRCdWZmZXI7XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9uID0gZ2V0VW5pZm9ybUxvY2F0aW9uO1xuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbiA9IGdldEF0dHJpYnV0ZUxvY2F0aW9uO1xuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWU7XG5cbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBcImNhbnZhc1wiKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7ICAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LndpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmhlaWdodDsgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgaGVpZ2h0KTsgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgeCA9IDAsXG4gICAgICAgICAgeSA9IDA7XG5cbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcblxuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcblxuICAgIHRoaXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuXG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBvZmZzZXRzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVCxcbiAgICAgICAgICBjb3VudCA9IGZpbmlzaCAtIHN0YXJ0LFxuICAgICAgICAgIG9mZnNldCA9IHN0YXJ0ICogMjsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICBjb25zdCBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KFwid2ViZ2xcIik7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFdFQl9HTF9DT05URVhUX0VSUk9SKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWdCLEdBQWdCLENBQWhCLE9BQWdCO0FB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