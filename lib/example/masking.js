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
        canvas: canvas,
        magnification: 10
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL21hc2tpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBtYXNraW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9IG1hZ25pZmljYXRpb249ezEwfT5cbiAgICAgIDxNYXNrIHJlZmVyZW5jZT1cInF1YXJ0ZXItc2l6ZWQtY3ViZVwiPlxuICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzQsIDEvNCwgMS80IF19IC8+XG4gICAgICA8L01hc2s+XG4gICAgICA8TWFzayByZWZlcmVuY2U9XCJoYWxmLXNpemVkLWN1YmVcIj5cbiAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS8yLCAxLzIsIDEvMiBdfSBtYXNrUmVmZXJlbmNlPVwicXVhcnRlci1zaXplZC1jdWJlXCIvPlxuICAgICAgPC9NYXNrPlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxDdWJlIG1hc2tSZWZlcmVuY2U9XCJoYWxmLXNpemVkLWN1YmVcIiAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFza2luZ0V4YW1wbGU7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFNEMsR0FBVSxDQUFWLE1BQVU7QUFFakQsR0FBZ0IsQ0FBaEIsS0FBZ0I7Ozs7OztBQUVqQyxHQUFLLENBQUMsY0FBYyxjQUFTLENBQUM7SUFDNUIsR0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBTG9DLE1BQVU7NkNBQVYsTUFBVTtRQVN2RCxNQUFNLEVBQUUsTUFBTTtRQUFFLGFBQWEsRUFBRSxFQUFFO3lDQVRZLE1BQVU7UUFVdEQsU0FBUyxHQUFDLGtCQUFvQjt5Q0FSekIsS0FBZ0I7UUFTbkIsS0FBSztZQUFJLENBQUMsR0FBQyxDQUFDO1lBQUUsQ0FBQyxHQUFDLENBQUM7WUFBRSxDQUFDLEdBQUMsQ0FBQzs7MkNBWG9CLE1BQVU7UUFhdEQsU0FBUyxHQUFDLGVBQWlCO3lDQVh0QixLQUFnQjtRQVluQixLQUFLO1lBQUksQ0FBQyxHQUFDLENBQUM7WUFBRSxDQUFDLEdBQUMsQ0FBQztZQUFFLENBQUMsR0FBQyxDQUFDOztRQUFJLGFBQWEsR0FBQyxrQkFBb0I7MkNBZGxCLE1BQVUsK0NBRWpELEtBQWdCO1FBZW5CLGFBQWEsR0FBQyxlQUFpQjsyQ0FqQlcsTUFBVTtBQXVCbEUsQ0FBQztlQUVjLGNBQWMifQ==