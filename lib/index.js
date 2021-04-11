'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("./xgl");
var _canvas = _interopRequireDefault(require("./canvas"));
var _mask = _interopRequireDefault(require("./element/mask"));
var _part = _interopRequireDefault(require("./element/part"));
var _scene = _interopRequireDefault(require("./element/scene"));
var _camera = _interopRequireDefault(require("./element/camera"));
var _gaming = _interopRequireDefault(require("./element/camera/gaming"));
var _design = _interopRequireDefault(require("./element/camera/design"));
var _canvas1 = _interopRequireDefault(require("./element/canvas"));
var _coloured = _interopRequireDefault(require("./element/canvas/coloured"));
var _textured = _interopRequireDefault(require("./element/canvas/textured"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
Object.defineProperty(exports, "Canvas", {
    enumerable: true,
    get: function() {
        return _canvas.default;
    }
});
Object.defineProperty(exports, "Mask", {
    enumerable: true,
    get: function() {
        return _mask.default;
    }
});
Object.defineProperty(exports, "Part", {
    enumerable: true,
    get: function() {
        return _part.default;
    }
});
Object.defineProperty(exports, "Scene", {
    enumerable: true,
    get: function() {
        return _scene.default;
    }
});
Object.defineProperty(exports, "Camera", {
    enumerable: true,
    get: function() {
        return _camera.default;
    }
});
Object.defineProperty(exports, "GamingCamera", {
    enumerable: true,
    get: function() {
        return _gaming.default;
    }
});
Object.defineProperty(exports, "DesignCamera", {
    enumerable: true,
    get: function() {
        return _design.default;
    }
});
Object.defineProperty(exports, "CanvasElement", {
    enumerable: true,
    get: function() {
        return _canvas1.default;
    }
});
Object.defineProperty(exports, "ColouredCanvasElement", {
    enumerable: true,
    get: function() {
        return _coloured.default;
    }
});
Object.defineProperty(exports, "TexturedCanvasElement", {
    enumerable: true,
    get: function() {
        return _textured.default;
    }
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBcIi4veGdsXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2sgfSBmcm9tIFwiLi9lbGVtZW50L21hc2tcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFydCB9IGZyb20gXCIuL2VsZW1lbnQvcGFydFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY2VuZSB9IGZyb20gXCIuL2VsZW1lbnQvc2NlbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmFcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2FtaW5nQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmEvZ2FtaW5nXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhL2Rlc2lnblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9jYW52YXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sb3VyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9jYW52YXMvY29sb3VyZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9jYW52YXMvdGV4dHVyZWRcIjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FJUSxNQUFNOzs7dUJBQWpCLE9BQU87OztnQ0FDSSxJQUFJOzs7cUJBQWYsT0FBTzs7O2dDQUNJLElBQUk7OztxQkFBZixPQUFPOzs7Z0NBQ0ksS0FBSzs7O3NCQUFoQixPQUFPOzs7Z0NBQ0ksTUFBTTs7O3VCQUFqQixPQUFPOzs7Z0NBQ0ksWUFBWTs7O3VCQUF2QixPQUFPOzs7Z0NBQ0ksWUFBWTs7O3VCQUF2QixPQUFPOzs7Z0NBQ0ksYUFBYTs7O3dCQUF4QixPQUFPOzs7Z0NBQ0kscUJBQXFCOzs7eUJBQWhDLE9BQU87OztnQ0FDSSxxQkFBcUI7Ozt5QkFBaEMsT0FBTyJ9