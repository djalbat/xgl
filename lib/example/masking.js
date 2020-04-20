"use strict";

var _index = require("../../index");

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

module.exports = maskingExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2tpbmcuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiQ2FudmFzIiwibWFza2luZ0V4YW1wbGUiLCJTbWFsbEN1YmUiLCJwcm9wZXJ0aWVzIiwic21hbGxDdWJlTWFzayIsIk1lZGl1bUN1YmUiLCJtZWRpdW1DdWJlTWFzayIsIkxhcmdlQ3ViZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOzs7O0FBRndFO0FBSXhFLElBQU1BLE1BQU0sR0FBRyxJQUFJQyxhQUFKLEVBQWY7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLFVBQUQ7QUFBQSxXQUVWLG9CQUFDLGdCQUFEO0FBQU0sTUFBQSxLQUFLLEVBQUUsQ0FBRSxJQUFFLENBQUosRUFBTyxJQUFFLENBQVQsRUFBWSxJQUFFLENBQWQ7QUFBYixNQUZVO0FBQUEsR0FBbEI7QUFBQSxNQUtNQyxhQUFhLEdBRVgsb0JBQUMsV0FBRCxRQUNFLG9CQUFDLFNBQUQsT0FERixDQVBSO0FBQUEsTUFZTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0YsVUFBRDtBQUFBLFdBRVgsb0JBQUMsZ0JBQUQ7QUFBTSxNQUFBLEtBQUssRUFBRSxDQUFFLElBQUUsQ0FBSixFQUFPLElBQUUsQ0FBVCxFQUFZLElBQUUsQ0FBZCxDQUFiO0FBQWdDLE1BQUEsSUFBSSxFQUFFQztBQUF0QyxNQUZXO0FBQUEsR0FabkI7QUFBQSxNQWlCTUUsY0FBYyxHQUVaLG9CQUFDLFdBQUQsUUFDRSxvQkFBQyxVQUFELE9BREYsQ0FuQlI7QUFBQSxNQXdCTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0osVUFBRDtBQUFBLFdBRVYsb0JBQUMsZ0JBQUQ7QUFBTSxNQUFBLElBQUksRUFBRUc7QUFBWixNQUZVO0FBQUEsR0F4QmxCOztBQThCQSxTQUVFLG9CQUFDLFlBQUQ7QUFBTyxJQUFBLE1BQU0sRUFBRVA7QUFBZixLQUNFLG9CQUFDLFdBQUQsUUFDRSxvQkFBQyxTQUFELE9BREYsQ0FERixFQUlFLG9CQUFDLG1CQUFELE9BSkYsQ0FGRjtBQVVELENBekNEOztBQTJDQVMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUixjQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBNYXNrLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi9lbGVtZW50L2N1YmVcIjtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBtYXNraW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgU21hbGxDdWJlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzQsIDEvNCwgMS80IF19IC8+XG5cbiAgICAgICAgLFxuICAgICAgICBzbWFsbEN1YmVNYXNrID1cblxuICAgICAgICAgIDxNYXNrPlxuICAgICAgICAgICAgPFNtYWxsQ3ViZSAvPlxuICAgICAgICAgIDwvTWFzaz5cblxuICAgICAgICAsXG4gICAgICAgIE1lZGl1bUN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvMiwgMS8yLCAxLzIgXX0gbWFzaz17c21hbGxDdWJlTWFza30gLz5cblxuICAgICAgICAsXG4gICAgICAgIG1lZGl1bUN1YmVNYXNrID1cblxuICAgICAgICAgIDxNYXNrPlxuICAgICAgICAgICAgPE1lZGl1bUN1YmUgLz5cbiAgICAgICAgICA8L01hc2s+XG5cbiAgICAgICAgLFxuICAgICAgICBMYXJnZUN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIG1hc2s9e21lZGl1bUN1YmVNYXNrfSAvPlxuXG4gICAgICAgIDtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8TGFyZ2VDdWJlIC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhIC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYXNraW5nRXhhbXBsZTtcbiJdfQ==