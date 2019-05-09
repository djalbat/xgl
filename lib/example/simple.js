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
      null,
      React.createElement(ColouredTriangle, null)
    ),
    React.createElement(Camera, { canvas: canvas })
  );
};

module.exports = simpleExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3NpbXBsZS5qcyJdLCJuYW1lcyI6WyJqaWdnbGUiLCJyZXF1aXJlIiwiQ29sb3VyZWRUcmlhbmdsZSIsIkNhbnZhcyIsIlNjZW5lIiwiUGFydCIsIkNhbWVyYSIsImNhbnZhcyIsInNpbXBsZUV4YW1wbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGFBQVIsQ0FBZjs7QUFFQSxJQUFNQyxtQkFBbUJELFFBQVEscUNBQVIsQ0FBekI7O0lBRVFFLE0sR0FBZ0NILE0sQ0FBaENHLE07SUFBUUMsSyxHQUF3QkosTSxDQUF4QkksSztJQUFPQyxJLEdBQWlCTCxNLENBQWpCSyxJO0lBQU1DLE0sR0FBV04sTSxDQUFYTSxNOzs7QUFFN0IsSUFBTUMsU0FBUyxJQUFJSixNQUFKLEVBQWY7O0FBRUEsSUFBTUssZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLFNBRXBCO0FBQUMsU0FBRDtBQUFBLE1BQU8sUUFBUUQsTUFBZjtBQUNFO0FBQUMsVUFBRDtBQUFBO0FBQ0UsMEJBQUMsZ0JBQUQ7QUFERixLQURGO0FBSUUsd0JBQUMsTUFBRCxJQUFRLFFBQVFBLE1BQWhCO0FBSkYsR0FGb0I7QUFBQSxDQUF0Qjs7QUFXQUUsT0FBT0MsT0FBUCxHQUFpQkYsYUFBakIiLCJmaWxlIjoic2ltcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBqaWdnbGUgPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpO1xuXG5jb25zdCBDb2xvdXJlZFRyaWFuZ2xlID0gcmVxdWlyZSgnLi4vZWxlbWVudC9jb21tb24vY29sb3VyZWQvdHJpYW5nbGUnKTtcblxuY29uc3QgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBDYW1lcmEgfSA9IGppZ2dsZTtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBzaW1wbGVFeGFtcGxlID0gKCkgPT5cblxuICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgIDxQYXJ0PlxuICAgICAgPENvbG91cmVkVHJpYW5nbGUgLz5cbiAgICA8L1BhcnQ+XG4gICAgPENhbWVyYSBjYW52YXM9e2NhbnZhc30gLz5cbiAgPC9TY2VuZT5cblxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbXBsZUV4YW1wbGU7XG4iXX0=