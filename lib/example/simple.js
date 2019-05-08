'use strict';

var jiggle = require('../../index');

var ColouredTriangle = require('../element/common/coloured/triangle');

var Canvas = jiggle.Canvas,
    Scene = jiggle.Scene,
    Part = jiggle.Part,
    Camera = jiggle.Camera;


var canvas = new Canvas();

var simpleExample = function simpleExample() {
  return React.createElement(
    Scene,
    { canvas: canvas },
    React.createElement(
      Part,
      { canvas: canvas },
      React.createElement(ColouredTriangle, null)
    ),
    React.createElement(Camera, { canvas: canvas })
  );
};

module.exports = simpleExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3NpbXBsZS5qcyJdLCJuYW1lcyI6WyJqaWdnbGUiLCJyZXF1aXJlIiwiQ29sb3VyZWRUcmlhbmdsZSIsIkNhbnZhcyIsIlNjZW5lIiwiUGFydCIsIkNhbWVyYSIsImNhbnZhcyIsInNpbXBsZUV4YW1wbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGFBQVIsQ0FBZjs7QUFFQSxJQUFNQyxtQkFBbUJELFFBQVEscUNBQVIsQ0FBekI7O0lBRVFFLE0sR0FBZ0NILE0sQ0FBaENHLE07SUFBUUMsSyxHQUF3QkosTSxDQUF4QkksSztJQUFPQyxJLEdBQWlCTCxNLENBQWpCSyxJO0lBQU1DLE0sR0FBV04sTSxDQUFYTSxNOzs7QUFFN0IsSUFBTUMsU0FBUyxJQUFJSixNQUFKLEVBQWY7O0FBRUEsSUFBTUssZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLFNBRXBCO0FBQUMsU0FBRDtBQUFBLE1BQU8sUUFBUUQsTUFBZjtBQUNFO0FBQUMsVUFBRDtBQUFBLFFBQU0sUUFBUUEsTUFBZDtBQUNFLDBCQUFDLGdCQUFEO0FBREYsS0FERjtBQUlFLHdCQUFDLE1BQUQsSUFBUSxRQUFRQSxNQUFoQjtBQUpGLEdBRm9CO0FBQUEsQ0FBdEI7O0FBV0FFLE9BQU9DLE9BQVAsR0FBaUJGLGFBQWpCIiwiZmlsZSI6InNpbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgamlnZ2xlID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKTtcblxuY29uc3QgQ29sb3VyZWRUcmlhbmdsZSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvY29tbW9uL2NvbG91cmVkL3RyaWFuZ2xlJyk7XG5cbmNvbnN0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgQ2FtZXJhIH0gPSBqaWdnbGU7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3Qgc2ltcGxlRXhhbXBsZSA9ICgpID0+XG5cbiAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICA8UGFydCBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8Q29sb3VyZWRUcmlhbmdsZSAvPlxuICAgIDwvUGFydD5cbiAgICA8Q2FtZXJhIGNhbnZhcz17Y2FudmFzfSAvPlxuICA8L1NjZW5lPlxuXG47XG5cbm1vZHVsZS5leHBvcnRzID0gc2ltcGxlRXhhbXBsZTtcbiJdfQ==