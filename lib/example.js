"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("./xgl");
var _cube = /*#__PURE__*/ _interop_require_default(require("./example/cube"));
var _tiling = /*#__PURE__*/ _interop_require_default(require("./example/tiling"));
var _simple = /*#__PURE__*/ _interop_require_default(require("./example/simple"));
var _masking = /*#__PURE__*/ _interop_require_default(require("./example/masking"));
var _pyramid = /*#__PURE__*/ _interop_require_default(require("./example/pyramid"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var example = window.location.search.substring(1); ///
switch(example){
    case "cube":
        (0, _cube.default)();
        break;
    case "tiling":
        (0, _tiling.default)();
        break;
    case "simple":
        (0, _simple.default)();
        break;
    case "masking":
        (0, _masking.default)();
        break;
    case "pyramid":
        (0, _pyramid.default)();
        break;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL3hnbFwiO1xuXG5pbXBvcnQgY3ViZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9jdWJlXCI7XG5pbXBvcnQgdGlsaW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3RpbGluZ1wiO1xuaW1wb3J0IHNpbXBsZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9zaW1wbGVcIjtcbmltcG9ydCBtYXNraW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL21hc2tpbmdcIjtcbmltcG9ydCBweXJhbWlkRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3B5cmFtaWRcIjtcblxuY29uc3QgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwiY3ViZVwiOlxuICAgIGN1YmVFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwidGlsaW5nXCI6XG4gICAgdGlsaW5nRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInNpbXBsZVwiOlxuICAgIHNpbXBsZUV4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJtYXNraW5nXCI6XG4gICAgbWFza2luZ0V4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJweXJhbWlkXCI6XG4gICAgcHlyYW1pZEV4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xufVxuIl0sIm5hbWVzIjpbImV4YW1wbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsImN1YmVFeGFtcGxlIiwidGlsaW5nRXhhbXBsZSIsInNpbXBsZUV4YW1wbGUiLCJtYXNraW5nRXhhbXBsZSIsInB5cmFtaWRFeGFtcGxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPOzJEQUVpQjs2REFDRTs2REFDQTs4REFDQzs4REFDQTs7Ozs7O0FBRTNCLElBQU1BLFVBQVVDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUMsSUFBSyxHQUFHO0FBRXpELE9BQVFKO0lBQ04sS0FBSztRQUNISyxJQUFBQSxhQUFXO1FBRVg7SUFFRixLQUFLO1FBQ0hDLElBQUFBLGVBQWE7UUFFYjtJQUVGLEtBQUs7UUFDSEMsSUFBQUEsZUFBYTtRQUViO0lBRUYsS0FBSztRQUNIQyxJQUFBQSxnQkFBYztRQUVkO0lBRUYsS0FBSztRQUNIQyxJQUFBQSxnQkFBYztRQUVkO0FBQ0oifQ==