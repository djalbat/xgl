"use strict";
require("./xgl");
var _cube = _interopRequireDefault(require("./example/cube"));
var _simple = _interopRequireDefault(require("./example/simple"));
var _masking = _interopRequireDefault(require("./example/masking"));
var _pyramid = _interopRequireDefault(require("./example/pyramid"));
var _tiling = _interopRequireDefault(require("./example/tiling"));
var _house = _interopRequireDefault(require("./example/house"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var example = window.location.search.substring(1); ///
switch(example){
    case "simple":
        (0, _simple).default();
        break;
    case "cube":
        (0, _cube).default();
        break;
    case "masking":
        (0, _masking).default();
        break;
    case "pyramid":
        (0, _pyramid).default();
        break;
    case "tiling":
        (0, _tiling).default();
        break;
    case "house":
        (0, _house).default();
        break;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL3hnbFwiO1xuXG5pbXBvcnQgY3ViZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9jdWJlXCI7XG5pbXBvcnQgc2ltcGxlRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3NpbXBsZVwiO1xuaW1wb3J0IG1hc2tpbmdFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvbWFza2luZ1wiO1xuaW1wb3J0IHB5cmFtaWRFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvcHlyYW1pZFwiO1xuaW1wb3J0IHRpbGluZ0V4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS90aWxpbmdcIjtcbmltcG9ydCBob3VzZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9ob3VzZVwiO1xuXG5jb25zdCBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJzaW1wbGVcIjpcbiAgICBzaW1wbGVFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcImN1YmVcIjpcbiAgICBjdWJlRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJtYXNraW5nXCI6XG4gICAgbWFza2luZ0V4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlIFwicHlyYW1pZFwiOlxuICAgIHB5cmFtaWRFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInRpbGluZ1wiOlxuICAgIHRpbGluZ0V4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlIFwiaG91c2VcIjpcbiAgICBob3VzZUV4YW1wbGUoKTtcbiAgICBicmVhaztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOztBQUlZLEdBQWdCLENBQWhCLEtBQWdCO0FBQ2QsR0FBa0IsQ0FBbEIsT0FBa0I7QUFDakIsR0FBbUIsQ0FBbkIsUUFBbUI7QUFDbkIsR0FBbUIsQ0FBbkIsUUFBbUI7QUFDcEIsR0FBa0IsQ0FBbEIsT0FBa0I7QUFDbkIsR0FBaUIsQ0FBakIsTUFBaUI7Ozs7OztBQUUxQyxHQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO09BRWpELE9BQU87VUFDUixNQUFRO1lBVFcsT0FBa0I7O1VBYXJDLElBQU07WUFkVyxLQUFnQjs7VUFrQmpDLE9BQVM7WUFoQlcsUUFBbUI7O1VBb0J2QyxPQUFTO1lBbkJXLFFBQW1COztVQXVCdkMsTUFBUTtZQXRCVyxPQUFrQjs7VUEwQnJDLEtBQU87WUF6QlcsTUFBaUIifQ==