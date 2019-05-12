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
      React.createElement(ColouredSquare, { colour: [0, 0, 1] })
    ),
    React.createElement(Camera, null)
  );
};

module.exports = simpleExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3NpbXBsZS5qcyJdLCJuYW1lcyI6WyJqaWdnbGUiLCJyZXF1aXJlIiwiQ29sb3VyZWRTcXVhcmUiLCJDYW52YXMiLCJTY2VuZSIsIlBhcnQiLCJDYW1lcmEiLCJjYW52YXMiLCJzaW1wbGVFeGFtcGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxhQUFSLENBQWY7O0FBRUEsSUFBTUMsaUJBQWlCRCxRQUFRLDBCQUFSLENBQXZCOztJQUVRRSxNLEdBQWdDSCxNLENBQWhDRyxNO0lBQVFDLEssR0FBd0JKLE0sQ0FBeEJJLEs7SUFBT0MsSSxHQUFpQkwsTSxDQUFqQkssSTtJQUFNQyxNLEdBQVdOLE0sQ0FBWE0sTTs7O0FBRTdCLElBQU1DLFNBQVMsSUFBSUosTUFBSixFQUFmOztBQUVBLElBQU1LLGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxTQUVwQjtBQUFDLFNBQUQ7QUFBQSxNQUFPLFFBQVFELE1BQWY7QUFDRTtBQUFDLFVBQUQ7QUFBQTtBQUNFLDBCQUFDLGNBQUQsSUFBZ0IsUUFBUSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF4QjtBQURGLEtBREY7QUFJRSx3QkFBQyxNQUFEO0FBSkYsR0FGb0I7QUFBQSxDQUF0Qjs7QUFXQUUsT0FBT0MsT0FBUCxHQUFpQkYsYUFBakIiLCJmaWxlIjoic2ltcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBqaWdnbGUgPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpO1xuXG5jb25zdCBDb2xvdXJlZFNxdWFyZSA9IHJlcXVpcmUoJy4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZScpO1xuXG5jb25zdCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIENhbWVyYSB9ID0gamlnZ2xlO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IHNpbXBsZUV4YW1wbGUgPSAoKSA9PlxuXG4gIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgPFBhcnQ+XG4gICAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtbIDAsIDAsIDEgXX0gLz5cbiAgICA8L1BhcnQ+XG4gICAgPENhbWVyYSAvPlxuICA8L1NjZW5lPlxuXG47XG5cbm1vZHVsZS5leHBvcnRzID0gc2ltcGxlRXhhbXBsZTtcbiJdfQ==