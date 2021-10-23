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
var cubeExample = function() {
    var canvas = new _index.Canvas();
    return(/*#__PURE__*/ React.createElement(_index.Scene, {
        canvas: canvas
    }, /*#__PURE__*/ React.createElement(_index.Part, null, /*#__PURE__*/ React.createElement(_cube.default, {
        colour: [
            0,
            1,
            0
        ]
    })), /*#__PURE__*/ React.createElement(_index.DesignCamera, {
        persist: true
    })));
};
var _default = cubeExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2N1YmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjdWJlRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9ID5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8Q3ViZSBjb2xvdXI9e1sgMCwgMSwgMCBdfSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYSBwZXJzaXN0IC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3ViZUV4YW1wbGU7XG4iXSwibmFtZXMiOlsiY3ViZUV4YW1wbGUiLCJjYW52YXMiLCJjb2xvdXIiLCJwZXJzaXN0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVzQyxHQUFVLENBQVYsTUFBVTtBQUUzQyxHQUFnQixDQUFoQixLQUFnQjs7Ozs7O0FBRWpDLEdBQUssQ0FBQ0EsV0FBVyxHQUFHLFFBQ3BCLEdBRDBCLENBQUM7SUFDekIsR0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUw4QixNQUFVO0lBTzFELE1BQU0sbUNBUDBDLE1BQVU7UUFTakRBLE1BQU0sRUFBRUEsTUFBTTt5Q0FUeUIsTUFBVSwrQ0FFM0MsS0FBZ0I7UUFTbkJDLE1BQU0sRUFBRSxDQUFDO1lBQUMsQ0FBQztZQUFFLENBQUM7WUFBRSxDQUFDO1FBQUMsQ0FBQzsyQ0FYaUIsTUFBVTtRQWF4Q0MsT0FBTyxFQUFQQSxJQUFPOztBQUkzQixDQUFDO2VBRWNILFdBQVcifQ==