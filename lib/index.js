"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Canvas: function() {
        return _canvas.default;
    },
    React: function() {
        return _react.default;
    },
    Mask: function() {
        return _mask.default;
    },
    Part: function() {
        return _part.default;
    },
    Scene: function() {
        return _scene.default;
    },
    Camera: function() {
        return _camera.default;
    },
    GamingCamera: function() {
        return _gaming.default;
    },
    DesignCamera: function() {
        return _design.default;
    },
    CanvasElement: function() {
        return _canvas1.default;
    },
    preloadUtilities: function() {
        return _preload.default;
    },
    ColouredCanvasElement: function() {
        return _coloured.default;
    },
    TexturedCanvasElement: function() {
        return _textured.default;
    },
    vectorMaths: function() {
        return _vector.default;
    },
    matrixMaths: function() {
        return _matrix.default;
    }
});
var _canvas = /*#__PURE__*/ _interopRequireDefault(require("./canvas"));
var _react = /*#__PURE__*/ _interopRequireDefault(require("./react"));
var _mask = /*#__PURE__*/ _interopRequireDefault(require("./element/mask"));
var _part = /*#__PURE__*/ _interopRequireDefault(require("./element/part"));
var _scene = /*#__PURE__*/ _interopRequireDefault(require("./element/scene"));
var _camera = /*#__PURE__*/ _interopRequireDefault(require("./element/camera"));
var _gaming = /*#__PURE__*/ _interopRequireDefault(require("./element/camera/gaming"));
var _design = /*#__PURE__*/ _interopRequireDefault(require("./element/camera/design"));
var _canvas1 = /*#__PURE__*/ _interopRequireDefault(require("./element/canvas"));
var _preload = /*#__PURE__*/ _interopRequireDefault(require("./utilities/preload"));
var _coloured = /*#__PURE__*/ _interopRequireDefault(require("./element/canvas/coloured"));
var _textured = /*#__PURE__*/ _interopRequireDefault(require("./element/canvas/textured"));
var _vector = /*#__PURE__*/ _interopRequireDefault(require("./maths/vector"));
var _matrix = /*#__PURE__*/ _interopRequireDefault(require("./maths/matrix"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0IH0gZnJvbSBcIi4vcmVhY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFzayB9IGZyb20gXCIuL2VsZW1lbnQvbWFza1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXJ0IH0gZnJvbSBcIi4vZWxlbWVudC9wYXJ0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNjZW5lIH0gZnJvbSBcIi4vZWxlbWVudC9zY2VuZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHYW1pbmdDYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYS9nYW1pbmdcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmEvZGVzaWduXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ByZWxvYWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sb3VyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9jYW52YXMvY29sb3VyZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9jYW52YXMvdGV4dHVyZWRcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyB2ZWN0b3JNYXRocyB9IGZyb20gXCIuL21hdGhzL3ZlY3RvclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXRyaXhNYXRocyB9IGZyb20gXCIuL21hdGhzL21hdHJpeFwiO1xuIl0sIm5hbWVzIjpbIkNhbnZhcyIsIlJlYWN0IiwiTWFzayIsIlBhcnQiLCJTY2VuZSIsIkNhbWVyYSIsIkdhbWluZ0NhbWVyYSIsIkRlc2lnbkNhbWVyYSIsIkNhbnZhc0VsZW1lbnQiLCJwcmVsb2FkVXRpbGl0aWVzIiwiQ29sb3VyZWRDYW52YXNFbGVtZW50IiwiVGV4dHVyZWRDYW52YXNFbGVtZW50IiwidmVjdG9yTWF0aHMiLCJtYXRyaXhNYXRocyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUVPQSxNQUFNO2VBQU5BLE9BQU0sUUFBQTs7SUFDTkMsS0FBSztlQUFMQSxNQUFLLFFBQUE7O0lBQ0xDLElBQUk7ZUFBSkEsS0FBSSxRQUFBOztJQUNKQyxJQUFJO2VBQUpBLEtBQUksUUFBQTs7SUFDSkMsS0FBSztlQUFMQSxNQUFLLFFBQUE7O0lBQ0xDLE1BQU07ZUFBTkEsT0FBTSxRQUFBOztJQUNOQyxZQUFZO2VBQVpBLE9BQVksUUFBQTs7SUFDWkMsWUFBWTtlQUFaQSxPQUFZLFFBQUE7O0lBQ1pDLGFBQWE7ZUFBYkEsUUFBYSxRQUFBOztJQUNiQyxnQkFBZ0I7ZUFBaEJBLFFBQWdCLFFBQUE7O0lBQ2hCQyxxQkFBcUI7ZUFBckJBLFNBQXFCLFFBQUE7O0lBQ3JCQyxxQkFBcUI7ZUFBckJBLFNBQXFCLFFBQUE7O0lBRXJCQyxXQUFXO2VBQVhBLE9BQVcsUUFBQTs7SUFDWEMsV0FBVztlQUFYQSxPQUFXLFFBQUE7OzsyREFkRyxVQUFVOzBEQUNYLFNBQVM7eURBQ1YsZ0JBQWdCO3lEQUNoQixnQkFBZ0I7MERBQ2YsaUJBQWlCOzJEQUNoQixrQkFBa0I7MkRBQ1oseUJBQXlCOzJEQUN6Qix5QkFBeUI7NERBQ3hCLGtCQUFrQjs0REFDZixxQkFBcUI7NkRBQ2hCLDJCQUEyQjs2REFDM0IsMkJBQTJCOzJEQUVyQyxnQkFBZ0I7MkRBQ2hCLGdCQUFnQiJ9