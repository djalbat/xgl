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
var canvas = new _index.Canvas();
var cubeExample = function() {
    /*#__PURE__*/ return React.createElement(_index.Scene, {
        canvas: canvas
    }, /*#__PURE__*/ React.createElement(_index.Part, null, /*#__PURE__*/ React.createElement(_cube.default, {
        colour: [
            0,
            1,
            0
        ]
    })), /*#__PURE__*/ React.createElement(_index.DesignCamera, null));
};
var _default = cubeExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2N1YmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IGN1YmVFeGFtcGxlID0gKCkgPT5cblxuICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgIDxQYXJ0PlxuICAgICAgPEN1YmUgY29sb3VyPXtbIDAsIDEsIDAgXX0gLz5cbiAgICA8L1BhcnQ+XG4gICAgPERlc2lnbkNhbWVyYS8+XG4gIDwvU2NlbmU+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgY3ViZUV4YW1wbGU7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFc0MsR0FBVSxDQUFWLE1BQVU7QUFFM0MsR0FBZ0IsQ0FBaEIsS0FBZ0I7Ozs7OztBQUVqQyxHQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FKZ0MsTUFBVTtBQU01RCxHQUFLLENBQUMsV0FBVzs2Q0FOaUMsTUFBVTtRQVFuRCxNQUFNLEVBQUUsTUFBTTt5Q0FSMkIsTUFBVSwrQ0FFM0MsS0FBZ0I7UUFRckIsTUFBTTtZQUFJLENBQUM7WUFBRSxDQUFDO1lBQUUsQ0FBQzs7MkNBVnFCLE1BQVU7O2VBaUI3QyxXQUFXIn0=