'use strict';

var xgl = require('../../index'); ///

var ColouredSquare = require('./element/colouredSquare');

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Part = xgl.Part,
    DesignCamera = xgl.DesignCamera;


var canvas = new Canvas();

var simpleExample = function simpleExample() {
  return React.createElement(
    Scene,
    { canvas: canvas },
    React.createElement(
      Part,
      null,
      React.createElement(ColouredSquare, { colour: [0, 0, 1] })
    ),
    React.createElement(DesignCamera, null)
  );
};

module.exports = simpleExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3NpbXBsZS5qcyJdLCJuYW1lcyI6WyJ4Z2wiLCJyZXF1aXJlIiwiQ29sb3VyZWRTcXVhcmUiLCJDYW52YXMiLCJTY2VuZSIsIlBhcnQiLCJEZXNpZ25DYW1lcmEiLCJjYW52YXMiLCJzaW1wbGVFeGFtcGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSxhQUFSLENBQVosQyxDQUFvQzs7QUFFcEMsSUFBTUMsaUJBQWlCRCxRQUFRLDBCQUFSLENBQXZCOztJQUVRRSxNLEdBQXNDSCxHLENBQXRDRyxNO0lBQVFDLEssR0FBOEJKLEcsQ0FBOUJJLEs7SUFBT0MsSSxHQUF1QkwsRyxDQUF2QkssSTtJQUFNQyxZLEdBQWlCTixHLENBQWpCTSxZOzs7QUFFN0IsSUFBTUMsU0FBUyxJQUFJSixNQUFKLEVBQWY7O0FBRUEsSUFBTUssZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLFNBRXBCO0FBQUMsU0FBRDtBQUFBLE1BQU8sUUFBUUQsTUFBZjtBQUNFO0FBQUMsVUFBRDtBQUFBO0FBQ0UsMEJBQUMsY0FBRCxJQUFnQixRQUFRLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQXhCO0FBREYsS0FERjtBQUlFLHdCQUFDLFlBQUQ7QUFKRixHQUZvQjtBQUFBLENBQXRCOztBQVdBRSxPQUFPQyxPQUFQLEdBQWlCRixhQUFqQiIsImZpbGUiOiJzaW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHhnbCA9IHJlcXVpcmUoJy4uLy4uL2luZGV4Jyk7IC8vL1xuXG5jb25zdCBDb2xvdXJlZFNxdWFyZSA9IHJlcXVpcmUoJy4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZScpO1xuXG5jb25zdCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9ID0geGdsO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IHNpbXBsZUV4YW1wbGUgPSAoKSA9PlxuXG4gIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgPFBhcnQ+XG4gICAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtbIDAsIDAsIDEgXX0gLz5cbiAgICA8L1BhcnQ+XG4gICAgPERlc2lnbkNhbWVyYSAvPlxuICA8L1NjZW5lPlxuXG47XG5cbm1vZHVsZS5leHBvcnRzID0gc2ltcGxlRXhhbXBsZTtcbiJdfQ==