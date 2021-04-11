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
var canvas = new _index.Canvas();
var simpleExample = function() {
    /*#__PURE__*/ return React.createElement(_index.Scene, {
        canvas: canvas
    }, /*#__PURE__*/ React.createElement(_index.Part, null, /*#__PURE__*/ React.createElement(_colouredSquare.default, {
        colour: [
            0,
            0,
            1
        ]
    })), /*#__PURE__*/ React.createElement(_index.DesignCamera, null));
};
var _default = simpleExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3NpbXBsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBzaW1wbGVFeGFtcGxlID0gKCkgPT5cblxuICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgIDxQYXJ0PlxuICAgICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17WyAwLCAwLCAxIF19IC8+XG4gICAgPC9QYXJ0PlxuICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgPC9TY2VuZT5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBzaW1wbGVFeGFtcGxlO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRXNDLE1BQVU7SUFFakMsZUFBMEI7Ozs7OztJQUUvQyxNQUFNLE9BSnNDLE1BQVU7SUFNdEQsYUFBYTs2Q0FOK0IsTUFBVTtRQVFuRCxNQUFNLEVBQUUsTUFBTTt5Q0FSMkIsTUFBVSwrQ0FFakMsZUFBMEI7UUFRL0IsTUFBTTtZQUFJLENBQUM7WUFBRSxDQUFDO1lBQUUsQ0FBQzs7MkNBVlcsTUFBVTs7ZUFpQjdDLGFBQWEifQ==