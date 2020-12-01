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

var maskingExample = function maskingExample() {
  var SmallCube = function SmallCube(properties) {
    return React.createElement(_cube["default"], {
      scale: [1 / 4, 1 / 4, 1 / 4]
    });
  },
      smallCubeMask = React.createElement(_index.Mask, null, React.createElement(SmallCube, null)),
      MediumCube = function MediumCube(properties) {
    return React.createElement(_cube["default"], {
      scale: [1 / 2, 1 / 2, 1 / 2],
      mask: smallCubeMask
    });
  },
      mediumCubeMask = React.createElement(_index.Mask, null, React.createElement(MediumCube, null)),
      LargeCube = function LargeCube(properties) {
    return React.createElement(_cube["default"], {
      mask: mediumCubeMask
    });
  };

  return React.createElement(_index.Scene, {
    canvas: canvas
  }, React.createElement(_index.Part, null, React.createElement(LargeCube, null)), React.createElement(_index.DesignCamera, null));
};

var _default = maskingExample;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2tpbmcuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiQ2FudmFzIiwibWFza2luZ0V4YW1wbGUiLCJTbWFsbEN1YmUiLCJwcm9wZXJ0aWVzIiwic21hbGxDdWJlTWFzayIsIk1lZGl1bUN1YmUiLCJtZWRpdW1DdWJlTWFzayIsIkxhcmdlQ3ViZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7OztBQUZxRTtBQUlyRSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsYUFBSixFQUFmOztBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxVQUFEO0FBQUEsV0FFVixvQkFBQyxnQkFBRDtBQUFNLE1BQUEsS0FBSyxFQUFFLENBQUUsSUFBRSxDQUFKLEVBQU8sSUFBRSxDQUFULEVBQVksSUFBRSxDQUFkO0FBQWIsTUFGVTtBQUFBLEdBQWxCO0FBQUEsTUFLTUMsYUFBYSxHQUVYLG9CQUFDLFdBQUQsUUFDRSxvQkFBQyxTQUFELE9BREYsQ0FQUjtBQUFBLE1BWU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNGLFVBQUQ7QUFBQSxXQUVYLG9CQUFDLGdCQUFEO0FBQU0sTUFBQSxLQUFLLEVBQUUsQ0FBRSxJQUFFLENBQUosRUFBTyxJQUFFLENBQVQsRUFBWSxJQUFFLENBQWQsQ0FBYjtBQUFnQyxNQUFBLElBQUksRUFBRUM7QUFBdEMsTUFGVztBQUFBLEdBWm5CO0FBQUEsTUFpQk1FLGNBQWMsR0FFWixvQkFBQyxXQUFELFFBQ0Usb0JBQUMsVUFBRCxPQURGLENBbkJSO0FBQUEsTUF3Qk1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNKLFVBQUQ7QUFBQSxXQUVWLG9CQUFDLGdCQUFEO0FBQU0sTUFBQSxJQUFJLEVBQUVHO0FBQVosTUFGVTtBQUFBLEdBeEJsQjs7QUE4QkEsU0FFRSxvQkFBQyxZQUFEO0FBQU8sSUFBQSxNQUFNLEVBQUVQO0FBQWYsS0FDRSxvQkFBQyxXQUFELFFBQ0Usb0JBQUMsU0FBRCxPQURGLENBREYsRUFJRSxvQkFBQyxtQkFBRCxPQUpGLENBRkY7QUFVRCxDQXpDRDs7ZUEyQ2VFLGMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgTWFzaywgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEN1YmUgZnJvbSBcIi4vZWxlbWVudC9jdWJlXCI7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgbWFza2luZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IFNtYWxsQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gICAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS80LCAxLzQsIDEvNCBdfSAvPlxuXG4gICAgICAgICxcbiAgICAgICAgc21hbGxDdWJlTWFzayA9XG5cbiAgICAgICAgICA8TWFzaz5cbiAgICAgICAgICAgIDxTbWFsbEN1YmUgLz5cbiAgICAgICAgICA8L01hc2s+XG5cbiAgICAgICAgLFxuICAgICAgICBNZWRpdW1DdWJlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzIsIDEvMiwgMS8yIF19IG1hc2s9e3NtYWxsQ3ViZU1hc2t9IC8+XG5cbiAgICAgICAgLFxuICAgICAgICBtZWRpdW1DdWJlTWFzayA9XG5cbiAgICAgICAgICA8TWFzaz5cbiAgICAgICAgICAgIDxNZWRpdW1DdWJlIC8+XG4gICAgICAgICAgPC9NYXNrPlxuXG4gICAgICAgICxcbiAgICAgICAgTGFyZ2VDdWJlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgICAgICAgICA8Q3ViZSBtYXNrPXttZWRpdW1DdWJlTWFza30gLz5cblxuICAgICAgICA7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8UGFydD5cbiAgICAgICAgPExhcmdlQ3ViZSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYSAvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hc2tpbmdFeGFtcGxlO1xuIl19