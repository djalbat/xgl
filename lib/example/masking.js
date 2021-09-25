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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL21hc2tpbmcuanMiXSwibmFtZXMiOlsiQ2FudmFzIiwiU2NlbmUiLCJNYXNrIiwiUGFydCIsIkRlc2lnbkNhbWVyYSIsIkN1YmUiLCJtYXNraW5nRXhhbXBsZSIsImNhbnZhcyIsInJlZmVyZW5jZSIsInNjYWxlIiwibWFza1JlZmVyZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFNEMsR0FBVSxDQUFWLE1BQVU7QUFFakQsR0FBZ0IsQ0FBaEIsS0FBZ0I7Ozs7OztBQUVqQyxHQUFLLENBQUMsY0FBYyxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7SUFDNUIsR0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBTG9DLE1BQVU7SUFPaEUsTUFBTSxtQ0FQZ0QsTUFBVTtRQVN2RCxNQUFNLEVBQUUsTUFBTTt5Q0FUK0IsTUFBVTtRQVV0RCxTQUFTLEVBQUMsQ0FBb0I7eUNBUnpCLEtBQWdCO1FBU25CLEtBQUssRUFBRSxDQUFDO1lBQUMsQ0FBQyxHQUFDLENBQUM7WUFBRSxDQUFDLEdBQUMsQ0FBQztZQUFFLENBQUMsR0FBQyxDQUFDO1FBQUMsQ0FBQzsyQ0FYa0IsTUFBVTtRQWF0RCxTQUFTLEVBQUMsQ0FBaUI7eUNBWHRCLEtBQWdCO1FBWW5CLEtBQUssRUFBRSxDQUFDO1lBQUMsQ0FBQyxHQUFDLENBQUM7WUFBRSxDQUFDLEdBQUMsQ0FBQztZQUFFLENBQUMsR0FBQyxDQUFDO1FBQUMsQ0FBQztRQUFFLGFBQWEsRUFBQyxDQUFvQjsyQ0FkbEIsTUFBVSwrQ0FFakQsS0FBZ0I7UUFlbkIsYUFBYSxFQUFDLENBQWlCOzJDQWpCVyxNQUFVO0FBdUJsRSxDQUFDO2VBRWMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBNYXNrLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi9lbGVtZW50L2N1YmVcIjtcblxuY29uc3QgbWFza2luZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxNYXNrIHJlZmVyZW5jZT1cInF1YXJ0ZXItc2l6ZWQtY3ViZVwiPlxuICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzQsIDEvNCwgMS80IF19IC8+XG4gICAgICA8L01hc2s+XG4gICAgICA8TWFzayByZWZlcmVuY2U9XCJoYWxmLXNpemVkLWN1YmVcIj5cbiAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS8yLCAxLzIsIDEvMiBdfSBtYXNrUmVmZXJlbmNlPVwicXVhcnRlci1zaXplZC1jdWJlXCIvPlxuICAgICAgPC9NYXNrPlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxDdWJlIG1hc2tSZWZlcmVuY2U9XCJoYWxmLXNpemVkLWN1YmVcIiAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFza2luZ0V4YW1wbGU7XG4iXX0=