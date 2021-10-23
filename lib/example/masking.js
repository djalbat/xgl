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
var maskingExample = function() {
    var canvas = new _index.Canvas();
    return(/*#__PURE__*/ React.createElement(_index.Scene, {
        canvas: canvas
    }, /*#__PURE__*/ React.createElement(_index.Part, null, /*#__PURE__*/ React.createElement(_index.Mask, {
        reference: "quarter-sized-cube"
    }, /*#__PURE__*/ React.createElement(_cube.default, {
        scale: [
            1 / 4,
            1 / 4,
            1 / 4
        ]
    })), /*#__PURE__*/ React.createElement(_index.Mask, {
        reference: "half-sized-cube"
    }, /*#__PURE__*/ React.createElement(_cube.default, {
        scale: [
            1 / 2,
            1 / 2,
            1 / 2
        ],
        maskReference: "quarter-sized-cube"
    })), /*#__PURE__*/ React.createElement(_cube.default, {
        maskReference: "half-sized-cube"
    })), /*#__PURE__*/ React.createElement(_index.DesignCamera, null)));
};
var _default = maskingExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL21hc2tpbmcuanMiXSwibmFtZXMiOlsiQ2FudmFzIiwiU2NlbmUiLCJNYXNrIiwiUGFydCIsIkRlc2lnbkNhbWVyYSIsIkN1YmUiLCJtYXNraW5nRXhhbXBsZSIsImNhbnZhcyIsInJlZmVyZW5jZSIsInNjYWxlIiwibWFza1JlZmVyZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFNEMsR0FBVSxDQUFWLE1BQVU7QUFFakQsR0FBZ0IsQ0FBaEIsS0FBZ0I7Ozs7OztBQUVqQyxHQUFLLENBQUMsY0FBYyxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7SUFDNUIsR0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBTG9DLE1BQVU7SUFPaEUsTUFBTSxtQ0FQZ0QsTUFBVTtRQVN2RCxNQUFNLEVBQUUsTUFBTTt5Q0FUK0IsTUFBVSwrQ0FBVixNQUFVO1FBV3BELFNBQVMsRUFBQyxDQUFvQjt5Q0FUM0IsS0FBZ0I7UUFVakIsS0FBSyxFQUFFLENBQUM7WUFBQyxDQUFDLEdBQUMsQ0FBQztZQUFFLENBQUMsR0FBQyxDQUFDO1lBQUUsQ0FBQyxHQUFDLENBQUM7UUFBQyxDQUFDOzJDQVpnQixNQUFVO1FBY3BELFNBQVMsRUFBQyxDQUFpQjt5Q0FaeEIsS0FBZ0I7UUFhakIsS0FBSyxFQUFFLENBQUM7WUFBQyxDQUFDLEdBQUMsQ0FBQztZQUFFLENBQUMsR0FBQyxDQUFDO1lBQUUsQ0FBQyxHQUFDLENBQUM7UUFBQyxDQUFDO1FBQUUsYUFBYSxFQUFDLENBQW9COzJDQWIzRCxLQUFnQjtRQWVuQixhQUFhLEVBQUMsQ0FBaUI7MkNBakJXLE1BQVU7QUF1QmxFLENBQUM7ZUFFYyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBtYXNraW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cInF1YXJ0ZXItc2l6ZWQtY3ViZVwiPlxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvNCwgMS80LCAxLzQgXX0gLz5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgICA8TWFzayByZWZlcmVuY2U9XCJoYWxmLXNpemVkLWN1YmVcIj5cbiAgICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzIsIDEvMiwgMS8yIF19IG1hc2tSZWZlcmVuY2U9XCJxdWFydGVyLXNpemVkLWN1YmVcIi8+XG4gICAgICAgIDwvTWFzaz5cbiAgICAgICAgPEN1YmUgbWFza1JlZmVyZW5jZT1cImhhbGYtc2l6ZWQtY3ViZVwiIC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXNraW5nRXhhbXBsZTtcbiJdfQ==