"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _index = require("../index");
var _cube = /*#__PURE__*/ _interop_require_default(require("./element/cube"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var maskingExample = function() {
    var canvas = new _index.Canvas();
    return /*#__PURE__*/ React.createElement(_index.Scene, {
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
    })), /*#__PURE__*/ React.createElement(_index.DesignCamera, null));
};
var _default = maskingExample;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL21hc2tpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBtYXNraW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cInF1YXJ0ZXItc2l6ZWQtY3ViZVwiPlxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvNCwgMS80LCAxLzQgXX0gLz5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgICA8TWFzayByZWZlcmVuY2U9XCJoYWxmLXNpemVkLWN1YmVcIj5cbiAgICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzIsIDEvMiwgMS8yIF19IG1hc2tSZWZlcmVuY2U9XCJxdWFydGVyLXNpemVkLWN1YmVcIi8+XG4gICAgICAgIDwvTWFzaz5cbiAgICAgICAgPEN1YmUgbWFza1JlZmVyZW5jZT1cImhhbGYtc2l6ZWQtY3ViZVwiIC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXNraW5nRXhhbXBsZTtcbiJdLCJuYW1lcyI6WyJtYXNraW5nRXhhbXBsZSIsImNhbnZhcyIsIkNhbnZhcyIsIlNjZW5lIiwiUGFydCIsIk1hc2siLCJyZWZlcmVuY2UiLCJDdWJlIiwic2NhbGUiLCJtYXNrUmVmZXJlbmNlIiwiRGVzaWduQ2FtZXJhIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyQkE7OztlQUFBOzs7cUJBekJ3RDsyREFFdkM7Ozs7OztBQUVqQixJQUFNQSxpQkFBaUI7SUFDckIsSUFBTUMsU0FBUyxJQUFJQyxhQUFNO0lBRXpCLHFCQUVFLG9CQUFDQyxZQUFLO1FBQUNGLFFBQVFBO3FCQUNiLG9CQUFDRyxXQUFJLHNCQUNILG9CQUFDQyxXQUFJO1FBQUNDLFdBQVU7cUJBQ2Qsb0JBQUNDLGFBQUk7UUFBQ0MsT0FBTztZQUFFLElBQUU7WUFBRyxJQUFFO1lBQUcsSUFBRTtTQUFHO3VCQUVoQyxvQkFBQ0gsV0FBSTtRQUFDQyxXQUFVO3FCQUNkLG9CQUFDQyxhQUFJO1FBQUNDLE9BQU87WUFBRSxJQUFFO1lBQUcsSUFBRTtZQUFHLElBQUU7U0FBRztRQUFFQyxlQUFjO3VCQUVoRCxvQkFBQ0YsYUFBSTtRQUFDRSxlQUFjO3VCQUV0QixvQkFBQ0MsbUJBQVk7QUFJbkI7SUFFQSxXQUFlViJ9