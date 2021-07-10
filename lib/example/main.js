"use strict";
require("../xgl");
var _cube = _interopRequireDefault(require("./cube"));
var _simple = _interopRequireDefault(require("./simple"));
var _masking = _interopRequireDefault(require("./masking"));
var _pyramid = _interopRequireDefault(require("./pyramid"));
var _tiling = _interopRequireDefault(require("./tiling"));
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
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4uL3hnbFwiO1xuXG5pbXBvcnQgY3ViZUV4YW1wbGUgZnJvbSBcIi4vY3ViZVwiO1xuaW1wb3J0IHNpbXBsZUV4YW1wbGUgZnJvbSBcIi4vc2ltcGxlXCI7XG5pbXBvcnQgbWFza2luZ0V4YW1wbGUgZnJvbSBcIi4vbWFza2luZ1wiO1xuaW1wb3J0IHB5cmFtaWRFeGFtcGxlIGZyb20gXCIuL3B5cmFtaWRcIjtcbmltcG9ydCB0aWxpbmdFeGFtcGxlIGZyb20gXCIuL3RpbGluZ1wiO1xuXG5jb25zdCBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJzaW1wbGVcIjpcbiAgICBzaW1wbGVFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcImN1YmVcIjpcbiAgICBjdWJlRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJtYXNraW5nXCI6XG4gICAgbWFza2luZ0V4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlIFwicHlyYW1pZFwiOlxuICAgIHB5cmFtaWRFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInRpbGluZ1wiOlxuICAgIHRpbGluZ0V4YW1wbGUoKTtcbiAgICBicmVhaztcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7QUFJWSxHQUFRLENBQVIsS0FBUTtBQUNOLEdBQVUsQ0FBVixPQUFVO0FBQ1QsR0FBVyxDQUFYLFFBQVc7QUFDWCxHQUFXLENBQVgsUUFBVztBQUNaLEdBQVUsQ0FBVixPQUFVOzs7Ozs7QUFFcEMsR0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztPQUVqRCxPQUFPO1VBQ1IsTUFBUTtZQVJXLE9BQVU7O1VBWTdCLElBQU07WUFiVyxLQUFROztVQWlCekIsT0FBUztZQWZXLFFBQVc7O1VBbUIvQixPQUFTO1lBbEJXLFFBQVc7O1VBc0IvQixNQUFRO1lBckJXLE9BQVUifQ==