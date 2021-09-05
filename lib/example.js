"use strict";
require("./xgl");
var _cube = _interopRequireDefault(require("./example/cube"));
var _tiling = _interopRequireDefault(require("./example/tiling"));
var _simple = _interopRequireDefault(require("./example/simple"));
var _masking = _interopRequireDefault(require("./example/masking"));
var _pyramid = _interopRequireDefault(require("./example/pyramid"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var example = window.location.search.substring(1); ///
switch(example){
    case "cube":
        (0, _cube).default();
        break;
    case "tiling":
        (0, _tiling).default();
        break;
    case "simple":
        (0, _simple).default();
        break;
    case "masking":
        (0, _masking).default();
        break;
    case "pyramid":
        (0, _pyramid).default();
        break;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL3hnbFwiO1xuXG5pbXBvcnQgY3ViZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9jdWJlXCI7XG5pbXBvcnQgdGlsaW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3RpbGluZ1wiO1xuaW1wb3J0IHNpbXBsZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9zaW1wbGVcIjtcbmltcG9ydCBtYXNraW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL21hc2tpbmdcIjtcbmltcG9ydCBweXJhbWlkRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3B5cmFtaWRcIjtcblxuY29uc3QgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwiY3ViZVwiOlxuICAgIGN1YmVFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwidGlsaW5nXCI6XG4gICAgdGlsaW5nRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInNpbXBsZVwiOlxuICAgIHNpbXBsZUV4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJtYXNraW5nXCI6XG4gICAgbWFza2luZ0V4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJweXJhbWlkXCI6XG4gICAgcHlyYW1pZEV4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7O0FBSVksR0FBZ0IsQ0FBaEIsS0FBZ0I7QUFDZCxHQUFrQixDQUFsQixPQUFrQjtBQUNsQixHQUFrQixDQUFsQixPQUFrQjtBQUNqQixHQUFtQixDQUFuQixRQUFtQjtBQUNuQixHQUFtQixDQUFuQixRQUFtQjs7Ozs7O0FBRTlDLEdBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7T0FFakQsT0FBTztVQUNSLElBQU07WUFUVyxLQUFnQjs7VUFjakMsTUFBUTtZQWJXLE9BQWtCOztVQWtCckMsTUFBUTtZQWpCVyxPQUFrQjs7VUFzQnJDLE9BQVM7WUFyQlcsUUFBbUI7O1VBMEJ2QyxPQUFTO1lBekJXLFFBQW1CIn0=