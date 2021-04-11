"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _matrix = require("./mixin/matrix");
var _blending = require("./mixin/blending");
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
var Canvas = function() {
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
        throw new Error("Unable to get the WebGL context.");
    }
    return context;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYW52YXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFwcGx5TWF0cml4IH0gZnJvbSBcIi4vbWl4aW4vbWF0cml4XCI7XG5pbXBvcnQgeyBlbmFibGVCbGVuZGluZyB9IGZyb20gXCIuL21peGluL2JsZW5kaW5nXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9ncmFtLCB1c2VQcm9ncmFtIH0gZnJvbSBcIi4vbWl4aW4vcHJvZ3JhbVwiO1xuaW1wb3J0IHsgY2xlYXJDb2xvdXIsIGNsZWFyQ29sb3VyQnVmZmVyIH0gZnJvbSBcIi4vbWl4aW4vY29sb3VyXCI7XG5pbXBvcnQgeyBjcmVhdGVUZXh0dXJlLCBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZyB9IGZyb20gXCIuL21peGluL3RleHR1cmVcIjtcbmltcG9ydCB7IGNsZWFyRGVwdGgsIGNsZWFyRGVwdGhCdWZmZXIsIGVuYWJsZURlcHRoVGVzdGluZyB9IGZyb20gXCIuL21peGluL2RlcHRoXCI7XG5pbXBvcnQgeyBjcmVhdGVTaGFkZXIsIGNyZWF0ZVZlcnRleFNoYWRlciwgY3JlYXRlRnJhZ21lbnRTaGFkZXIgfSBmcm9tIFwiLi9taXhpbi9zaGFkZXJcIjtcbmltcG9ydCB7IGJpbmRCdWZmZXIsIGJpbmRFbGVtZW50QnVmZmVyLCBjcmVhdGVCdWZmZXIsIGNyZWF0ZUVsZW1lbnRCdWZmZXIgfSBmcm9tIFwiLi9taXhpbi9idWZmZXJcIjtcbmltcG9ydCB7IGdldEF0dHJpYnV0ZUxvY2F0aW9uLCBnZXRVbmlmb3JtTG9jYXRpb24sIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSB9IGZyb20gXCIuL21peGluL2xvY2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGFwcGx5TWF0cml4ID0gYXBwbHlNYXRyaXg7XG5cbiAgZW5hYmxlQmxlbmRpbmcgPSBlbmFibGVCbGVuZGluZztcblxuICB1c2VQcm9ncmFtID0gdXNlUHJvZ3JhbTtcbiAgY3JlYXRlUHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW07XG5cbiAgY2xlYXJDb2xvdXIgPSBjbGVhckNvbG91cjtcbiAgY2xlYXJDb2xvdXJCdWZmZXIgPSBjbGVhckNvbG91ckJ1ZmZlcjtcblxuICBjcmVhdGVUZXh0dXJlID0gY3JlYXRlVGV4dHVyZTtcbiAgZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcgPSBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZztcblxuICBjbGVhckRlcHRoID0gY2xlYXJEZXB0aDtcbiAgY2xlYXJEZXB0aEJ1ZmZlciA9IGNsZWFyRGVwdGhCdWZmZXI7XG4gIGVuYWJsZURlcHRoVGVzdGluZyA9IGVuYWJsZURlcHRoVGVzdGluZztcblxuICBjcmVhdGVTaGFkZXIgPSBjcmVhdGVTaGFkZXI7XG4gIGNyZWF0ZVZlcnRleFNoYWRlciA9IGNyZWF0ZVZlcnRleFNoYWRlcjtcbiAgY3JlYXRlRnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVGcmFnbWVudFNoYWRlcjtcblxuICBiaW5kQnVmZmVyID0gYmluZEJ1ZmZlcjtcbiAgY3JlYXRlQnVmZmVyID0gY3JlYXRlQnVmZmVyO1xuICBiaW5kRWxlbWVudEJ1ZmZlciA9IGJpbmRFbGVtZW50QnVmZmVyO1xuICBjcmVhdGVFbGVtZW50QnVmZmVyID0gY3JlYXRlRWxlbWVudEJ1ZmZlcjtcblxuICBnZXRVbmlmb3JtTG9jYXRpb24gPSBnZXRVbmlmb3JtTG9jYXRpb247XG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uID0gZ2V0QXR0cmlidXRlTG9jYXRpb247XG4gIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZTtcblxuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IFwiY2FudmFzXCIpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpZHRoKTsgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoZWlnaHQpOyB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCB4ID0gMCxcbiAgICAgICAgICB5ID0gMDtcblxuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMuY29udGV4dC52aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuXG4gICAgdGhpcy5jbGVhckNvbG91cigpO1xuXG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG5cbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gIH1cblxuICByZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG9mZnNldHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgobm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCkge1xuICAgIGNvbnN0IHsgVFJJQU5HTEVTLCBVTlNJR05FRF9TSE9SVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG1vZGUgPSBUUklBTkdMRVMsXG4gICAgICAgICAgdHlwZSA9IFVOU0lHTkVEX1NIT1JULFxuICAgICAgICAgIGNvdW50ID0gZmluaXNoIC0gc3RhcnQsXG4gICAgICAgICAgb2Zmc2V0ID0gc3RhcnQgKiAyOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gIGNvbnN0IGNvbnRleHQgPSBkb21FbGVtZW50LmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBnZXQgdGhlIFdlYkdMIGNvbnRleHQuYCk7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVnQixPQUFnQjtJQUNiLFNBQWtCO0lBQ1AsUUFBaUI7SUFDWixPQUFnQjtJQUNMLFFBQWlCO0lBQ1YsTUFB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