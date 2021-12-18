"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../index");
var _colouredSquare = _interopRequireDefault(require("./element/colouredSquare"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var simpleExample = function() {
    var canvas = new _index.Canvas();
    return(/*#__PURE__*/ React.createElement(_index.Scene, {
        canvas: canvas
    }, /*#__PURE__*/ React.createElement(_index.Part, null, /*#__PURE__*/ React.createElement(_colouredSquare.default, {
        colour: [
            0,
            0,
            1
        ]
    })), /*#__PURE__*/ React.createElement(_index.DesignCamera, null)));
};
var _default = simpleExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3NpbXBsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3Qgc2ltcGxlRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e1sgMCwgMCwgMSBdfSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2ltcGxlRXhhbXBsZTtcbiJdLCJuYW1lcyI6WyJzaW1wbGVFeGFtcGxlIiwiY2FudmFzIiwiY29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVzQyxHQUFVLENBQVYsTUFBVTtBQUVqQyxHQUEwQixDQUExQixlQUEwQjs7Ozs7O0FBRXJELEdBQUssQ0FBQ0EsYUFBYSxHQUFHLFFBQ3RCLEdBRDRCLENBQUM7SUFDM0IsR0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUw4QixNQUFVO0lBTzFELE1BQU0sbUNBUDBDLE1BQVU7UUFTakRBLE1BQU0sRUFBRUEsTUFBTTt5Q0FUeUIsTUFBVSwrQ0FFakMsZUFBMEI7UUFTN0JDLE1BQU0sRUFBRSxDQUFDO0FBQUMsYUFBQztBQUFFLGFBQUM7QUFBRSxhQUFDO1FBQUMsQ0FBQzsyQ0FYTyxNQUFVO0FBaUI1RCxDQUFDO2VBRWNGLGFBQWEifQ==