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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL3hnbFwiO1xuXG5pbXBvcnQgY3ViZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9jdWJlXCI7XG5pbXBvcnQgdGlsaW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3RpbGluZ1wiO1xuaW1wb3J0IHNpbXBsZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9zaW1wbGVcIjtcbmltcG9ydCBtYXNraW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL21hc2tpbmdcIjtcbmltcG9ydCBweXJhbWlkRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3B5cmFtaWRcIjtcblxuY29uc3QgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwiY3ViZVwiOlxuICAgIGN1YmVFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInRpbGluZ1wiOlxuICAgIHRpbGluZ0V4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlIFwic2ltcGxlXCI6XG4gICAgc2ltcGxlRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJtYXNraW5nXCI6XG4gICAgbWFza2luZ0V4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlIFwicHlyYW1pZFwiOlxuICAgIHB5cmFtaWRFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7QUFJWSxHQUFnQixDQUFoQixLQUFnQjtBQUNkLEdBQWtCLENBQWxCLE9BQWtCO0FBQ2xCLEdBQWtCLENBQWxCLE9BQWtCO0FBQ2pCLEdBQW1CLENBQW5CLFFBQW1CO0FBQ25CLEdBQW1CLENBQW5CLFFBQW1COzs7Ozs7QUFFOUMsR0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztPQUVqRCxPQUFPO1VBQ1IsSUFBTTtZQVRXLEtBQWdCOztVQWFqQyxNQUFRO1lBWlcsT0FBa0I7O1VBZ0JyQyxNQUFRO1lBZlcsT0FBa0I7O1VBbUJyQyxPQUFTO1lBbEJXLFFBQW1COztVQXNCdkMsT0FBUztZQXJCVyxRQUFtQiJ9