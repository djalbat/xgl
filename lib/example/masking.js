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
    return( /*#__PURE__*/ React.createElement(_index.Scene, {
        canvas: canvas
    }, /*#__PURE__*/ React.createElement(_index.Part, null, /*#__PURE__*/ React.createElement(LargeCube, null)), /*#__PURE__*/ React.createElement(_index.DesignCamera, null)));
};
var _default = maskingExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL21hc2tpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IG1hc2tpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBTbWFsbEN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvNCwgMS80LCAxLzQgXX0gLz5cblxuICAgICAgICAsXG4gICAgICAgIHNtYWxsQ3ViZU1hc2sgPVxuXG4gICAgICAgICAgPE1hc2s+XG4gICAgICAgICAgICA8U21hbGxDdWJlIC8+XG4gICAgICAgICAgPC9NYXNrPlxuXG4gICAgICAgICxcbiAgICAgICAgTWVkaXVtQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gICAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS8yLCAxLzIsIDEvMiBdfSBtYXNrPXtzbWFsbEN1YmVNYXNrfSAvPlxuXG4gICAgICAgICxcbiAgICAgICAgbWVkaXVtQ3ViZU1hc2sgPVxuXG4gICAgICAgICAgPE1hc2s+XG4gICAgICAgICAgICA8TWVkaXVtQ3ViZSAvPlxuICAgICAgICAgIDwvTWFzaz5cblxuICAgICAgICAsXG4gICAgICAgIExhcmdlQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gICAgICAgICAgPEN1YmUgbWFzaz17bWVkaXVtQ3ViZU1hc2t9IC8+XG5cbiAgICAgICAgO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxMYXJnZUN1YmUgLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXNraW5nRXhhbXBsZTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUU0QyxNQUFVO0lBRWpELEtBQWdCOzs7Ozs7SUFFM0IsTUFBTSxPQUo0QyxNQUFVO0lBTTVELGNBQWM7UUFDWixTQUFTLFlBQUksVUFBVTtpREFMZCxLQUFnQjtZQU9qQixLQUFLO2dCQUFJLENBQUMsR0FBQyxDQUFDO2dCQUFFLENBQUMsR0FBQyxDQUFDO2dCQUFFLENBQUMsR0FBQyxDQUFDOzs7T0FHOUIsYUFBYSxxQ0FabUMsTUFBVSwrQ0FlckQsU0FBUyxVQUlkLFVBQVUsWUFBSSxVQUFVO2lEQWpCZixLQUFnQjtZQW1CakIsS0FBSztnQkFBSSxDQUFDLEdBQUMsQ0FBQztnQkFBRSxDQUFDLEdBQUMsQ0FBQztnQkFBRSxDQUFDLEdBQUMsQ0FBQzs7WUFBSSxJQUFJLEVBQUUsYUFBYTs7T0FHckQsY0FBYyxxQ0F4QmtDLE1BQVUsK0NBMkJyRCxVQUFVLFVBSWYsU0FBUyxZQUFJLFVBQVU7aURBN0JkLEtBQWdCO1lBK0JqQixJQUFJLEVBQUUsY0FBYzs7OzhDQWpDb0IsTUFBVTtRQXVDdkQsTUFBTSxFQUFFLE1BQU07eUNBdkMrQixNQUFVLCtDQXlDekQsU0FBUyw0Q0F6Q3NDLE1BQVU7O2VBaURuRCxjQUFjIn0=