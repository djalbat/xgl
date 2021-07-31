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
        canvas: canvas,
        magnification: 1
    }, /*#__PURE__*/ React.createElement(_index.Part, null, /*#__PURE__*/ React.createElement(_cube.default, {
        colour: [
            0,
            1,
            0
        ]
    })), /*#__PURE__*/ React.createElement(_index.DesignCamera, null)));
};
var _default = cubeExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2N1YmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjdWJlRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9IG1hZ25pZmljYXRpb249ezF9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxDdWJlIGNvbG91cj17WyAwLCAxLCAwIF19IC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdWJlRXhhbXBsZTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVzQyxHQUFVLENBQVYsTUFBVTtBQUUzQyxHQUFnQixDQUFoQixLQUFnQjs7Ozs7O0FBRWpDLEdBQUssQ0FBQyxXQUFXLGNBQVMsQ0FBQztJQUN6QixHQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FMOEIsTUFBVTs2Q0FBVixNQUFVO1FBU2pELE1BQU0sRUFBRSxNQUFNO1FBQUUsYUFBYSxFQUFFLENBQUM7eUNBVE8sTUFBVSwrQ0FFM0MsS0FBZ0I7UUFTbkIsTUFBTTtZQUFJLENBQUM7WUFBRSxDQUFDO1lBQUUsQ0FBQzs7MkNBWG1CLE1BQVU7QUFpQjVELENBQUM7ZUFFYyxXQUFXIn0=