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
var _cube = /*#__PURE__*/ _interopRequireDefault(require("./element/cube"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var cubeExample = function() {
    var canvas = new _index.Canvas();
    return /*#__PURE__*/ React.createElement(_index.Scene, {
        canvas: canvas
    }, /*#__PURE__*/ React.createElement(_index.Part, null, /*#__PURE__*/ React.createElement(_cube.default, {
        colour: [
            0,
            1,
            0
        ]
    })), /*#__PURE__*/ React.createElement(_index.DesignCamera, {
        persist: true
    }));
};
var _default = cubeExample;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2N1YmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjdWJlRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9ID5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8Q3ViZSBjb2xvdXI9e1sgMCwgMSwgMCBdfSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYSBwZXJzaXN0IC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3ViZUV4YW1wbGU7XG4iXSwibmFtZXMiOlsiY3ViZUV4YW1wbGUiLCJjYW52YXMiLCJDYW52YXMiLCJTY2VuZSIsIlBhcnQiLCJDdWJlIiwiY29sb3VyIiwiRGVzaWduQ2FtZXJhIiwicGVyc2lzdCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQXFCYixTQUEyQjs7O2VBQTNCLFFBQTJCOzs7cUJBbkJ1QixVQUFVO3lEQUUzQyxnQkFBZ0I7Ozs7OztBQUVqQyxJQUFNQSxXQUFXLEdBQUcsV0FBTTtJQUN4QixJQUFNQyxNQUFNLEdBQUcsSUFBSUMsTUFBTSxPQUFBLEVBQUUsQUFBQztJQUU1QixxQkFFRSxvQkFBQ0MsTUFBSyxNQUFBO1FBQUNGLE1BQU0sRUFBRUEsTUFBTTtxQkFDbkIsb0JBQUNHLE1BQUksS0FBQSxzQkFDSCxvQkFBQ0MsS0FBSSxRQUFBO1FBQUNDLE1BQU0sRUFBRTtBQUFFLGFBQUM7QUFBRSxhQUFDO0FBQUUsYUFBQztTQUFFO01BQUksQ0FDeEIsZ0JBQ1Asb0JBQUNDLE1BQVksYUFBQTtRQUFDQyxPQUFPLEVBQVBBLElBQU87TUFBRyxDQUNsQixDQUVSO0NBQ0gsQUFBQztJQUVGLFFBQTJCLEdBQVpSLFdBQVcifQ==