"use strict";

var _index = require("../../index");

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

module.exports = cubeExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1YmUuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiQ2FudmFzIiwiY3ViZUV4YW1wbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7OztBQUZrRTtBQUlsRSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsYUFBSixFQUFmOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FFbkIsb0JBQUMsWUFBRDtBQUFPLElBQUEsTUFBTSxFQUFFRjtBQUFmLEtBQ0Msb0JBQUMsV0FBRCxRQUNDLG9CQUFDLGdCQUFEO0FBQU0sSUFBQSxNQUFNLEVBQUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVI7QUFBZCxJQURELENBREQsRUFJQyxvQkFBQyxtQkFBRCxPQUpELENBRm1CO0FBQUEsQ0FBcEI7O0FBV0FHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkYsV0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEN1YmUgZnJvbSBcIi4vZWxlbWVudC9jdWJlXCI7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgY3ViZUV4YW1wbGUgPSAoKSA9PlxuXG5cdDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG5cdFx0PFBhcnQ+XG5cdFx0XHQ8Q3ViZSBjb2xvdXI9e1sgMCwgMSwgMCBdfSAvPlxuXHRcdDwvUGFydD5cblx0XHQ8RGVzaWduQ2FtZXJhIC8+XG5cdDwvU2NlbmU+XG5cbjtcblxubW9kdWxlLmV4cG9ydHMgPSBjdWJlRXhhbXBsZTtcbiJdfQ==