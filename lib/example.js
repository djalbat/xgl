"use strict";
var _cube = _interopRequireDefault(require("./example/cube"));
var _simple = _interopRequireDefault(require("./example/simple"));
var _masking = _interopRequireDefault(require("./example/masking"));
var _pyramid = _interopRequireDefault(require("./example/pyramid"));
var _tiling = _interopRequireDefault(require("./example/tiling"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var example = window.location.search.substring(1); ///
switch(example){
    case "simple":
        _simple.default();
        break;
    case "cube":
        _cube.default();
        break;
    case "masking":
        _masking.default();
        break;
    case "pyramid":
        _pyramid.default();
        break;
    case "tiling":
        _tiling.default();
        break;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgY3ViZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9jdWJlXCI7XG5pbXBvcnQgc2ltcGxlRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3NpbXBsZVwiO1xuaW1wb3J0IG1hc2tpbmdFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvbWFza2luZ1wiO1xuaW1wb3J0IHB5cmFtaWRFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvcHlyYW1pZFwiO1xuaW1wb3J0IHRpbGluZ0V4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS90aWxpbmdcIjtcblxuY29uc3QgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwic2ltcGxlXCI6XG4gICAgc2ltcGxlRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJjdWJlXCI6XG4gICAgY3ViZUV4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlIFwibWFza2luZ1wiOlxuICAgIG1hc2tpbmdFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInB5cmFtaWRcIjpcbiAgICBweXJhbWlkRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJ0aWxpbmdcIjpcbiAgICB0aWxpbmdFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7SUFFWSxLQUFnQjtJQUNkLE9BQWtCO0lBQ2pCLFFBQW1CO0lBQ25CLFFBQW1CO0lBQ3BCLE9BQWtCOzs7Ozs7SUFFdEMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO09BRWpELE9BQU87VUFDUixNQUFRO1FBUlcsT0FBa0I7O1VBWXJDLElBQU07UUFiVyxLQUFnQjs7VUFpQmpDLE9BQVM7UUFmVyxRQUFtQjs7VUFtQnZDLE9BQVM7UUFsQlcsUUFBbUI7O1VBc0J2QyxNQUFRO1FBckJXLE9BQWtCIn0=