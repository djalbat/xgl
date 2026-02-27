'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get Camera () {
        return _camera.default;
    },
    get Canvas () {
        return _canvas.default;
    },
    get CanvasElement () {
        return _canvas1.default;
    },
    get ColouredCanvasElement () {
        return _coloured.default;
    },
    get DesignCamera () {
        return _design.default;
    },
    get GamingCamera () {
        return _gaming.default;
    },
    get Mask () {
        return _mask.default;
    },
    get Part () {
        return _part.default;
    },
    get React () {
        return _react.default;
    },
    get Scene () {
        return _scene.default;
    },
    get TexturedCanvasElement () {
        return _textured.default;
    },
    get matrixMaths () {
        return _matrix.default;
    },
    get preloadUtilities () {
        return _preload.default;
    },
    get vectorMaths () {
        return _vector.default;
    }
});
const _canvas = /*#__PURE__*/ _interop_require_default(require("./canvas"));
const _react = /*#__PURE__*/ _interop_require_default(require("./react"));
const _mask = /*#__PURE__*/ _interop_require_default(require("./element/mask"));
const _part = /*#__PURE__*/ _interop_require_default(require("./element/part"));
const _scene = /*#__PURE__*/ _interop_require_default(require("./element/scene"));
const _camera = /*#__PURE__*/ _interop_require_default(require("./element/camera"));
const _gaming = /*#__PURE__*/ _interop_require_default(require("./element/camera/gaming"));
const _design = /*#__PURE__*/ _interop_require_default(require("./element/camera/design"));
const _canvas1 = /*#__PURE__*/ _interop_require_default(require("./element/canvas"));
const _preload = /*#__PURE__*/ _interop_require_default(require("./utilities/preload"));
const _coloured = /*#__PURE__*/ _interop_require_default(require("./element/canvas/coloured"));
const _textured = /*#__PURE__*/ _interop_require_default(require("./element/canvas/textured"));
const _vector = /*#__PURE__*/ _interop_require_default(require("./maths/vector"));
const _matrix = /*#__PURE__*/ _interop_require_default(require("./maths/matrix"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0IH0gZnJvbSBcIi4vcmVhY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFzayB9IGZyb20gXCIuL2VsZW1lbnQvbWFza1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXJ0IH0gZnJvbSBcIi4vZWxlbWVudC9wYXJ0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNjZW5lIH0gZnJvbSBcIi4vZWxlbWVudC9zY2VuZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHYW1pbmdDYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYS9nYW1pbmdcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmEvZGVzaWduXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ByZWxvYWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sb3VyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9jYW52YXMvY29sb3VyZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9jYW52YXMvdGV4dHVyZWRcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyB2ZWN0b3JNYXRocyB9IGZyb20gXCIuL21hdGhzL3ZlY3RvclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXRyaXhNYXRocyB9IGZyb20gXCIuL21hdGhzL21hdHJpeFwiO1xuIl0sIm5hbWVzIjpbIkNhbWVyYSIsIkNhbnZhcyIsIkNhbnZhc0VsZW1lbnQiLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJEZXNpZ25DYW1lcmEiLCJHYW1pbmdDYW1lcmEiLCJNYXNrIiwiUGFydCIsIlJlYWN0IiwiU2NlbmUiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJtYXRyaXhNYXRocyIsInByZWxvYWRVdGlsaXRpZXMiLCJ2ZWN0b3JNYXRocyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBT29CQTtlQUFBQSxlQUFNOztRQUxOQztlQUFBQSxlQUFNOztRQVFOQztlQUFBQSxnQkFBYTs7UUFFYkM7ZUFBQUEsaUJBQXFCOztRQUhyQkM7ZUFBQUEsZUFBWTs7UUFEWkM7ZUFBQUEsZUFBWTs7UUFKWkM7ZUFBQUEsYUFBSTs7UUFDSkM7ZUFBQUEsYUFBSTs7UUFGSkM7ZUFBQUEsY0FBSzs7UUFHTEM7ZUFBQUEsY0FBSzs7UUFPTEM7ZUFBQUEsaUJBQXFCOztRQUdyQkM7ZUFBQUEsZUFBVzs7UUFMWEM7ZUFBQUEsZ0JBQWdCOztRQUloQkM7ZUFBQUEsZUFBVzs7OytEQWJHOzhEQUNEOzZEQUNEOzZEQUNBOzhEQUNDOytEQUNDOytEQUNNOytEQUNBO2dFQUNDO2dFQUNHO2lFQUNLO2lFQUNBOytEQUVWOytEQUNBIn0=