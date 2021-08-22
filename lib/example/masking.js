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
    }, /*#__PURE__*/ React.createElement(_index.Mask, {
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
    })), /*#__PURE__*/ React.createElement(_index.Part, null, /*#__PURE__*/ React.createElement(_cube.default, {
        maskReference: "half-sized-cube"
    })), /*#__PURE__*/ React.createElement(_index.DesignCamera, null)));
};
var _default = maskingExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL21hc2tpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBtYXNraW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPE1hc2sgcmVmZXJlbmNlPVwicXVhcnRlci1zaXplZC1jdWJlXCI+XG4gICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvNCwgMS80LCAxLzQgXX0gLz5cbiAgICAgIDwvTWFzaz5cbiAgICAgIDxNYXNrIHJlZmVyZW5jZT1cImhhbGYtc2l6ZWQtY3ViZVwiPlxuICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzIsIDEvMiwgMS8yIF19IG1hc2tSZWZlcmVuY2U9XCJxdWFydGVyLXNpemVkLWN1YmVcIi8+XG4gICAgICA8L01hc2s+XG4gICAgICA8UGFydD5cbiAgICAgICAgPEN1YmUgbWFza1JlZmVyZW5jZT1cImhhbGYtc2l6ZWQtY3ViZVwiIC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXNraW5nRXhhbXBsZTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUU0QyxHQUFVLENBQVYsTUFBVTtBQUVqRCxHQUFnQixDQUFoQixLQUFnQjs7Ozs7O0FBRWpDLEdBQUssQ0FBQyxjQUFjLGNBQVMsQ0FBQztJQUM1QixHQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FMb0MsTUFBVTs2Q0FBVixNQUFVO1FBU3ZELE1BQU0sRUFBRSxNQUFNO3lDQVQrQixNQUFVO1FBVXRELFNBQVMsR0FBQyxrQkFBb0I7eUNBUnpCLEtBQWdCO1FBU25CLEtBQUs7WUFBSSxDQUFDLEdBQUMsQ0FBQztZQUFFLENBQUMsR0FBQyxDQUFDO1lBQUUsQ0FBQyxHQUFDLENBQUM7OzJDQVhvQixNQUFVO1FBYXRELFNBQVMsR0FBQyxlQUFpQjt5Q0FYdEIsS0FBZ0I7UUFZbkIsS0FBSztZQUFJLENBQUMsR0FBQyxDQUFDO1lBQUUsQ0FBQyxHQUFDLENBQUM7WUFBRSxDQUFDLEdBQUMsQ0FBQzs7UUFBSSxhQUFhLEdBQUMsa0JBQW9COzJDQWRsQixNQUFVLCtDQUVqRCxLQUFnQjtRQWVuQixhQUFhLEdBQUMsZUFBaUI7MkNBakJXLE1BQVU7QUF1QmxFLENBQUM7ZUFFYyxjQUFjIn0=