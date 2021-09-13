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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3NpbXBsZS5qcyJdLCJuYW1lcyI6WyJDYW52YXMiLCJTY2VuZSIsIlBhcnQiLCJEZXNpZ25DYW1lcmEiLCJDb2xvdXJlZFNxdWFyZSIsInNpbXBsZUV4YW1wbGUiLCJjYW52YXMiLCJjb2xvdXIiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXNDLEdBQVUsQ0FBVixNQUFVO0FBRWpDLEdBQTBCLENBQTFCLGVBQTBCOzs7Ozs7QUFFckQsR0FBSyxDQUFDLGFBQWEsR0FBRyxRQUN0QixHQUQ0QixDQUFDO0lBQzNCLEdBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUw4QixNQUFVO0lBTzFELE1BQU0sbUNBUDBDLE1BQVU7UUFTakQsTUFBTSxFQUFFLE1BQU07eUNBVHlCLE1BQVUsK0NBRWpDLGVBQTBCO1FBUzdCLE1BQU0sRUFBRSxDQUFDO1lBQUMsQ0FBQztZQUFFLENBQUM7WUFBRSxDQUFDO1FBQUMsQ0FBQzsyQ0FYTyxNQUFVO0FBaUI1RCxDQUFDO2VBRWMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZVwiO1xuXG5jb25zdCBzaW1wbGVFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8UGFydD5cbiAgICAgICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17WyAwLCAwLCAxIF19IC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaW1wbGVFeGFtcGxlO1xuIl19