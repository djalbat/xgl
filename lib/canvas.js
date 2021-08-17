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
    function Canvas(param) {
        var selector = param === void 0 ? "canvas" : param;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYW52YXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkZXB0aE1peGlucyBmcm9tIFwiLi9taXhpbnMvZGVwdGhcIjtcbmltcG9ydCBzaGFkZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3NoYWRlclwiO1xuaW1wb3J0IGJ1ZmZlck1peGlucyBmcm9tIFwiLi9taXhpbnMvYnVmZmVyXCI7XG5pbXBvcnQgY29sb3VyTWl4aW5zIGZyb20gXCIuL21peGlucy9jb2xvdXJcIjtcbmltcG9ydCBtYXRyaXhNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21hdHJpeFwiO1xuaW1wb3J0IHRleHR1cmVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RleHR1cmVcIjtcbmltcG9ydCBwcm9ncmFtTWl4aW5zIGZyb20gXCIuL21peGlucy9wcm9ncmFtXCI7XG5pbXBvcnQgYmxlbmRpbmdNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2JsZW5kaW5nXCI7XG5pbXBvcnQgbG9jYXRpb25NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2xvY2F0aW9uXCI7XG5cbmltcG9ydCB7IFdFQl9HTF9DT05URVhUX0VSUk9SIH0gZnJvbSBcIi4vZXJyb3JzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gXCJjYW52YXNcIikge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmVuYWJsZURlcHRoVGVzdGluZygpOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGhlaWdodCk7IH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHggPSAwLFxuICAgICAgICAgIHkgPSAwO1xuXG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgdGhpcy5jb250ZXh0LnZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG5cbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG5cbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcblxuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgfVxuXG4gIHJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0c01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQsXG4gICAgICAgICAgY291bnQgPSBmaW5pc2ggLSBzdGFydCxcbiAgICAgICAgICBvZmZzZXQgPSBzdGFydCAqIDI7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBzaGFkZXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBidWZmZXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgcHJvZ3JhbU1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJsZW5kaW5nTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbG9jYXRpb25NaXhpbnMpO1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gIGNvbnN0IGNvbnRleHQgPSBkb21FbGVtZW50LmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoV0VCX0dMX0NPTlRFWFRfRVJST1IpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFWSxHQUFnQixDQUFoQixNQUFnQjtBQUNmLEdBQWlCLENBQWpCLE9BQWlCO0FBQ2pCLEdBQWlCLENBQWpCLE9BQWlCO0FBQ2pCLEdBQWlCLENBQWpCLE9BQWlCO0FBQ2pCLEdBQWlCLENBQWpCLE9BQWlCO0FBQ2hCLEdBQWtCLENBQWxCLFFBQWtCO0FBQ2xCLEdBQWtCLENBQWxCLFFBQWtCO0FBQ2pCLEdBQW1CLENBQW5CLFNBQW1CO0FBQ25CLEdBQW1CLENBQW5CLFNBQW1CO0FBRVQsR0FBVSxDQUFWLE9BQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFMUIsTUFBTTthQUFOLE1BQU0sQ0FDYixLQUFtQjtZQUFuQixRQUFRLEdBQVIsS0FBbUIsZUFBUixNQUFRLElBQW5CLEtBQW1COzhCQURaLE1BQU07UUFFdkIsR0FBSyxDQUFDLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQyxRQUFRLEdBQzVDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQyxVQUFVO2FBRTNDLFVBQVUsR0FBRyxVQUFVO2FBRXZCLE9BQU8sR0FBRyxPQUFPO2FBRWpCLGtCQUFrQixHQUFLLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7aUJBVGQsTUFBTTs7WUFZekIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYSxHQUFHLENBQUM7NEJBQ0gsVUFBVTtZQUN4QixDQUFDOzs7WUFFRCxHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVLEdBQUcsQ0FBQzs0QkFDQSxPQUFPO1lBQ3JCLENBQUM7OztZQUVELEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsR0FBRyxDQUFDOzRCQUFhLFVBQVUsQ0FBQyxLQUFLO1lB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