"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../index");
var _cube = _interopRequireDefault(require("./element/cube"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var cubeExample = function() {
    var canvas = new _index.Canvas();
    return(/*#__PURE__*/ React.createElement(_index.Scene, {
        canvas: canvas
    }, /*#__PURE__*/ React.createElement(_index.Part, null, /*#__PURE__*/ React.createElement(_cube.default, {
        colour: [
            0,
            1,
            0
        ]
    })), /*#__PURE__*/ React.createElement(_index.DesignCamera, {
        persist: true
    })));
};
var _default = cubeExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2N1YmUuanMiXSwibmFtZXMiOlsiQ2FudmFzIiwiU2NlbmUiLCJQYXJ0IiwiRGVzaWduQ2FtZXJhIiwiQ3ViZSIsImN1YmVFeGFtcGxlIiwiY2FudmFzIiwiY29sb3VyIiwicGVyc2lzdCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFc0MsR0FBVSxDQUFWLE1BQVU7QUFFM0MsR0FBZ0IsQ0FBaEIsS0FBZ0I7Ozs7OztBQUVqQyxHQUFLLENBQUMsV0FBVyxHQUFHLFFBQ3BCLEdBRDBCLENBQUM7SUFDekIsR0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBTDhCLE1BQVU7SUFPMUQsTUFBTSxtQ0FQMEMsTUFBVTtRQVNqRCxNQUFNLEVBQUUsTUFBTTt5Q0FUeUIsTUFBVSwrQ0FFM0MsS0FBZ0I7UUFTbkIsTUFBTSxFQUFFLENBQUM7WUFBQyxDQUFDO1lBQUUsQ0FBQztZQUFFLENBQUM7UUFBQyxDQUFDOzJDQVhpQixNQUFVO1FBYXhDLE9BQU8sRUFBUCxJQUFPOztBQUkzQixDQUFDO2VBRWMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi9lbGVtZW50L2N1YmVcIjtcblxuY29uc3QgY3ViZUV4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfSA+XG4gICAgICA8UGFydD5cbiAgICAgICAgPEN1YmUgY29sb3VyPXtbIDAsIDEsIDAgXX0gLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEgcGVyc2lzdCAvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1YmVFeGFtcGxlO1xuIl19