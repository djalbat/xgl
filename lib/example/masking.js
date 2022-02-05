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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL21hc2tpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBtYXNraW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cInF1YXJ0ZXItc2l6ZWQtY3ViZVwiPlxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvNCwgMS80LCAxLzQgXX0gLz5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgICA8TWFzayByZWZlcmVuY2U9XCJoYWxmLXNpemVkLWN1YmVcIj5cbiAgICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzIsIDEvMiwgMS8yIF19IG1hc2tSZWZlcmVuY2U9XCJxdWFydGVyLXNpemVkLWN1YmVcIi8+XG4gICAgICAgIDwvTWFzaz5cbiAgICAgICAgPEN1YmUgbWFza1JlZmVyZW5jZT1cImhhbGYtc2l6ZWQtY3ViZVwiIC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXNraW5nRXhhbXBsZTtcbiJdLCJuYW1lcyI6WyJtYXNraW5nRXhhbXBsZSIsImNhbnZhcyIsIkNhbnZhcyIsIlNjZW5lIiwiUGFydCIsIk1hc2siLCJyZWZlcmVuY2UiLCJDdWJlIiwic2NhbGUiLCJtYXNrUmVmZXJlbmNlIiwiRGVzaWduQ2FtZXJhIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUU0QyxHQUFVLENBQVYsTUFBVTtBQUVqRCxHQUFnQixDQUFoQixLQUFnQjs7Ozs7O0FBRWpDLEdBQUssQ0FBQ0EsY0FBYyxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7SUFDNUIsR0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDQyxNQUFNO0lBRXpCLE1BQU0sbUNBRUhDLE1BQUs7UUFBQ0YsTUFBTSxFQUFFQSxNQUFNO3lDQUNsQkcsTUFBSSwrQ0FDRkMsTUFBSTtRQUFDQyxTQUFTLEVBQUMsQ0FBb0I7eUNBQ2pDQyxLQUFJO1FBQUNDLEtBQUssRUFBRSxDQUFDO0FBQUMsYUFBQyxHQUFDLENBQUM7QUFBRSxhQUFDLEdBQUMsQ0FBQztBQUFFLGFBQUMsR0FBQyxDQUFDO1FBQUMsQ0FBQzsyQ0FFL0JILE1BQUk7UUFBQ0MsU0FBUyxFQUFDLENBQWlCO3lDQUM5QkMsS0FBSTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztBQUFDLGFBQUMsR0FBQyxDQUFDO0FBQUUsYUFBQyxHQUFDLENBQUM7QUFBRSxhQUFDLEdBQUMsQ0FBQztRQUFDLENBQUM7UUFBRUMsYUFBYSxFQUFDLENBQW9COzJDQUVuRUYsS0FBSTtRQUFDRSxhQUFhLEVBQUMsQ0FBaUI7MkNBRXRDQyxNQUFZO0FBSW5CLENBQUM7ZUFFY1YsY0FBYyJ9