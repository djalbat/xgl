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
    }, /*#__PURE__*/ React.createElement(_index.Part, null, false && /*#__PURE__*/ React.createElement(_colouredSquare.default, {
        colour: [
            0,
            0,
            1
        ]
    })), /*#__PURE__*/ React.createElement(_index.DesignCamera, null)));
};
var _default = simpleExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3NpbXBsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3Qgc2ltcGxlRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIHsgZmFsc2UgJiYgPENvbG91cmVkU3F1YXJlIGNvbG91cj17WyAwLCAwLCAxIF19IC8+IH1cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpbXBsZUV4YW1wbGU7XG4iXSwibmFtZXMiOlsic2ltcGxlRXhhbXBsZSIsImNhbnZhcyIsImNvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFc0MsR0FBVSxDQUFWLE1BQVU7QUFFakMsR0FBMEIsQ0FBMUIsZUFBMEI7Ozs7OztBQUVyRCxHQUFLLENBQUNBLGFBQWEsR0FBRyxRQUN0QixHQUQ0QixDQUFDO0lBQzNCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FMOEIsTUFBVTtJQU8xRCxNQUFNLG1DQVAwQyxNQUFVO1FBU2pEQSxNQUFNLEVBQUVBLE1BQU07eUNBVHlCLE1BQVUsYUFXbEQsS0FBSyxzQ0FUWSxlQUEwQjtRQVNsQkMsTUFBTSxFQUFFLENBQUM7QUFBQyxhQUFDO0FBQUUsYUFBQztBQUFFLGFBQUM7UUFBQyxDQUFDOzJDQVhKLE1BQVU7QUFpQjVELENBQUM7ZUFFY0YsYUFBYSJ9