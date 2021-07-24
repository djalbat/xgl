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
var maskingExample = function() {
    var SmallCube = function(properties) {
        /*#__PURE__*/ return React.createElement(_cube.default, {
            scale: [
                1 / 4,
                1 / 4,
                1 / 4
            ]
        });
    }, smallCubeMask = /*#__PURE__*/ React.createElement(_index.Mask, null, /*#__PURE__*/ React.createElement(SmallCube, null)), MediumCube = function(properties) {
        /*#__PURE__*/ return React.createElement(_cube.default, {
            scale: [
                1 / 2,
                1 / 2,
                1 / 2
            ],
            mask: smallCubeMask
        });
    }, mediumCubeMask = /*#__PURE__*/ React.createElement(_index.Mask, null, /*#__PURE__*/ React.createElement(MediumCube, null)), LargeCube = function(properties) {
        /*#__PURE__*/ return React.createElement(_cube.default, {
            mask: mediumCubeMask
        });
    };
    return(/*#__PURE__*/ React.createElement(_index.Scene, {
        canvas: canvas
    }, /*#__PURE__*/ React.createElement(_index.Part, null, /*#__PURE__*/ React.createElement(LargeCube, null)), /*#__PURE__*/ React.createElement(_index.DesignCamera, null)));
};
var _default = maskingExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL21hc2tpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IG1hc2tpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBTbWFsbEN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvNCwgMS80LCAxLzQgXX0gLz5cblxuICAgICAgICAsXG4gICAgICAgIHNtYWxsQ3ViZU1hc2sgPVxuXG4gICAgICAgICAgPE1hc2s+XG4gICAgICAgICAgICA8U21hbGxDdWJlLz5cbiAgICAgICAgICA8L01hc2s+XG5cbiAgICAgICAgLFxuICAgICAgICBNZWRpdW1DdWJlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzIsIDEvMiwgMS8yIF19IG1hc2s9e3NtYWxsQ3ViZU1hc2t9IC8+XG5cbiAgICAgICAgLFxuICAgICAgICBtZWRpdW1DdWJlTWFzayA9XG5cbiAgICAgICAgICA8TWFzaz5cbiAgICAgICAgICAgIDxNZWRpdW1DdWJlLz5cbiAgICAgICAgICA8L01hc2s+XG5cbiAgICAgICAgLFxuICAgICAgICBMYXJnZUN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIG1hc2s9e21lZGl1bUN1YmVNYXNrfSAvPlxuXG4gICAgICAgIDtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8TGFyZ2VDdWJlLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hc2tpbmdFeGFtcGxlO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRTRDLEdBQVUsQ0FBVixNQUFVO0FBRWpELEdBQWdCLENBQWhCLEtBQWdCOzs7Ozs7QUFFakMsR0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBSnNDLE1BQVU7QUFNbEUsR0FBSyxDQUFDLGNBQWMsY0FBUyxDQUFDO0lBQzVCLEdBQUssQ0FBQyxTQUFTLFlBQUksVUFBVTtpREFMZCxLQUFnQjtZQU9qQixLQUFLO2dCQUFJLENBQUMsR0FBQyxDQUFDO2dCQUFFLENBQUMsR0FBQyxDQUFDO2dCQUFFLENBQUMsR0FBQyxDQUFDOzs7T0FHOUIsYUFBYSxxQ0FabUMsTUFBVSwrQ0FlckQsU0FBUyxVQUlkLFVBQVUsWUFBSSxVQUFVO2lEQWpCZixLQUFnQjtZQW1CakIsS0FBSztnQkFBSSxDQUFDLEdBQUMsQ0FBQztnQkFBRSxDQUFDLEdBQUMsQ0FBQztnQkFBRSxDQUFDLEdBQUMsQ0FBQzs7WUFBSSxJQUFJLEVBQUUsYUFBYTs7T0FHckQsY0FBYyxxQ0F4QmtDLE1BQVUsK0NBMkJyRCxVQUFVLFVBSWYsU0FBUyxZQUFJLFVBQVU7aURBN0JkLEtBQWdCO1lBK0JqQixJQUFJLEVBQUUsY0FBYzs7OzZDQWpDb0IsTUFBVTtRQXVDdkQsTUFBTSxFQUFFLE1BQU07eUNBdkMrQixNQUFVLCtDQXlDekQsU0FBUyw0Q0F6Q3NDLE1BQVU7QUErQ2xFLENBQUM7ZUFFYyxjQUFjIn0=