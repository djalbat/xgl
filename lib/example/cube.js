"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../index");

var _cube = _interopRequireDefault(require("./element/cube"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var canvas = new _index.Canvas();

var cubeExample = function cubeExample() {
  return React.createElement(_index.Scene, {
    canvas: canvas
  }, React.createElement(_index.Part, null, React.createElement(_cube["default"], {
    colour: [0, 1, 0]
  })), React.createElement(_index.DesignCamera, null));
};

var _default = cubeExample;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1YmUuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiQ2FudmFzIiwiY3ViZUV4YW1wbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7QUFGK0Q7QUFJL0QsSUFBTUEsTUFBTSxHQUFHLElBQUlDLGFBQUosRUFBZjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBRWxCLG9CQUFDLFlBQUQ7QUFBTyxJQUFBLE1BQU0sRUFBRUY7QUFBZixLQUNFLG9CQUFDLFdBQUQsUUFDRSxvQkFBQyxnQkFBRDtBQUFNLElBQUEsTUFBTSxFQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSO0FBQWQsSUFERixDQURGLEVBSUUsb0JBQUMsbUJBQUQsT0FKRixDQUZrQjtBQUFBLENBQXBCOztlQVdlRSxXIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IGN1YmVFeGFtcGxlID0gKCkgPT5cblxuICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgIDxQYXJ0PlxuICAgICAgPEN1YmUgY29sb3VyPXtbIDAsIDEsIDAgXX0gLz5cbiAgICA8L1BhcnQ+XG4gICAgPERlc2lnbkNhbWVyYSAvPlxuICA8L1NjZW5lPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IGN1YmVFeGFtcGxlO1xuIl19