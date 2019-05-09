'use strict';

var jiggle = require('../../index');

var ColouredSquare = require('./element/colouredSquare');

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
      null,
      React.createElement(ColouredSquare, null)
    ),
    React.createElement(Camera, null)
  );
};

module.exports = simpleExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3NpbXBsZS5qcyJdLCJuYW1lcyI6WyJqaWdnbGUiLCJyZXF1aXJlIiwiQ29sb3VyZWRTcXVhcmUiLCJDYW52YXMiLCJTY2VuZSIsIlBhcnQiLCJDYW1lcmEiLCJjYW52YXMiLCJzaW1wbGVFeGFtcGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxhQUFSLENBQWY7O0FBRUEsSUFBTUMsaUJBQWlCRCxRQUFRLDBCQUFSLENBQXZCOztJQUVRRSxNLEdBQWdDSCxNLENBQWhDRyxNO0lBQVFDLEssR0FBd0JKLE0sQ0FBeEJJLEs7SUFBT0MsSSxHQUFpQkwsTSxDQUFqQkssSTtJQUFNQyxNLEdBQVdOLE0sQ0FBWE0sTTs7O0FBRTdCLElBQU1DLFNBQVMsSUFBSUosTUFBSixFQUFmOztBQUVBLElBQU1LLGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxTQUVwQjtBQUFDLFNBQUQ7QUFBQSxNQUFPLFFBQVFELE1BQWY7QUFDRTtBQUFDLFVBQUQ7QUFBQTtBQUNFLDBCQUFDLGNBQUQ7QUFERixLQURGO0FBSUUsd0JBQUMsTUFBRDtBQUpGLEdBRm9CO0FBQUEsQ0FBdEI7O0FBV0FFLE9BQU9DLE9BQVAsR0FBaUJGLGFBQWpCIiwiZmlsZSI6InNpbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgamlnZ2xlID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKTtcblxuY29uc3QgQ29sb3VyZWRTcXVhcmUgPSByZXF1aXJlKCcuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmUnKTtcblxuY29uc3QgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBDYW1lcmEgfSA9IGppZ2dsZTtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBzaW1wbGVFeGFtcGxlID0gKCkgPT5cblxuICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgIDxQYXJ0PlxuICAgICAgPENvbG91cmVkU3F1YXJlIC8+XG4gICAgPC9QYXJ0PlxuICAgIDxDYW1lcmEgLz5cbiAgPC9TY2VuZT5cblxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbXBsZUV4YW1wbGU7XG4iXX0=