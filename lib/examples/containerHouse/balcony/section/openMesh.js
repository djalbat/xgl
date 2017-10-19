'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = require('../../../../maths/vec3'),
    CanvasElement = require('../../../../element/canvas'),
    ColouredCuboid = require('../../../common/coloured/cuboid'),
    ColouredCylinder = require('../../../common/coloured/cylinder');

var add = vec3.add,
    overallHeight = 0.25,
    overallThickness = 0.025,
    widthwiseCount = 10,
    depthwiseCount = 5,
    colour = [0.6, 0.6, 0.6, 10];

var OpenMesh = function (_CanvasElement) {
  _inherits(OpenMesh, _CanvasElement);

  function OpenMesh() {
    _classCallCheck(this, OpenMesh);

    return _possibleConstructorReturn(this, (OpenMesh.__proto__ || Object.getPrototypeOf(OpenMesh)).apply(this, arguments));
  }

  _createClass(OpenMesh, [{
    key: 'childElements',
    value: function childElements(properties) {
      var position = properties.position,
          width = properties.width,
          depth = properties.depth,
          overallWidth = width,
          overallDepth = depth,
          elements = [];


      for (var index = 1; index < widthwiseCount; index++) {
        var step = overallWidth / widthwiseCount,
            _width = overallThickness,
            ///
        height = overallHeight,
            _depth = overallDepth;

        elements.push(React.createElement(ColouredCuboid, { colour: colour, position: add(position, [step * index, -height, 0]), width: _width, height: height, depth: _depth }));
      }

      for (var _index = 1; _index < depthwiseCount; _index++) {
        var _step = overallDepth / depthwiseCount,
            diameter = overallHeight / 2,
            ///
        _width2 = diameter,
            ///
        _height = diameter,
            ///
        _depth2 = overallWidth; ///

        elements.push(React.createElement(ColouredCylinder, { colour: colour, position: add(position, [0, -3 * diameter / 2, _step * _index]), width: _width2, height: _height, depth: _depth2, rotations: [0, 90, 0] }));
      }

      return elements;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(OpenMesh, properties);
    }
  }]);

  return OpenMesh;
}(CanvasElement);

module.exports = OpenMesh;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3NlY3Rpb24vb3Blbk1lc2guanMiXSwibmFtZXMiOlsidmVjMyIsInJlcXVpcmUiLCJDYW52YXNFbGVtZW50IiwiQ29sb3VyZWRDdWJvaWQiLCJDb2xvdXJlZEN5bGluZGVyIiwiYWRkIiwib3ZlcmFsbEhlaWdodCIsIm92ZXJhbGxUaGlja25lc3MiLCJ3aWR0aHdpc2VDb3VudCIsImRlcHRod2lzZUNvdW50IiwiY29sb3VyIiwiT3Blbk1lc2giLCJwcm9wZXJ0aWVzIiwicG9zaXRpb24iLCJ3aWR0aCIsImRlcHRoIiwib3ZlcmFsbFdpZHRoIiwib3ZlcmFsbERlcHRoIiwiZWxlbWVudHMiLCJpbmRleCIsInN0ZXAiLCJoZWlnaHQiLCJwdXNoIiwiZGlhbWV0ZXIiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSx3QkFBUixDQUFiO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLDRCQUFSLENBRHRCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLGlDQUFSLENBRnZCO0FBQUEsSUFHTUcsbUJBQW1CSCxRQUFRLG1DQUFSLENBSHpCOztBQUtNLElBQUVJLEdBQUYsR0FBVUwsSUFBVixDQUFFSyxHQUFGO0FBQUEsSUFDQUMsYUFEQSxHQUNnQixJQURoQjtBQUFBLElBRUFDLGdCQUZBLEdBRW1CLEtBRm5CO0FBQUEsSUFHQUMsY0FIQSxHQUdpQixFQUhqQjtBQUFBLElBSUFDLGNBSkEsR0FJaUIsQ0FKakI7QUFBQSxJQUtBQyxNQUxBLEdBS1MsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsRUFBakIsQ0FMVDs7SUFPQUMsUTs7Ozs7Ozs7Ozs7a0NBQ1VDLFUsRUFBWTtBQUFBLFVBQ2hCQyxRQURnQixHQUNXRCxVQURYLENBQ2hCQyxRQURnQjtBQUFBLFVBQ05DLEtBRE0sR0FDV0YsVUFEWCxDQUNORSxLQURNO0FBQUEsVUFDQ0MsS0FERCxHQUNXSCxVQURYLENBQ0NHLEtBREQ7QUFBQSxVQUVsQkMsWUFGa0IsR0FFSEYsS0FGRztBQUFBLFVBR2xCRyxZQUhrQixHQUdIRixLQUhHO0FBQUEsVUFJbEJHLFFBSmtCLEdBSVAsRUFKTzs7O0FBTXhCLFdBQUssSUFBSUMsUUFBUSxDQUFqQixFQUFvQkEsUUFBUVgsY0FBNUIsRUFBNENXLE9BQTVDLEVBQXFEO0FBQ25ELFlBQU1DLE9BQU9KLGVBQWVSLGNBQTVCO0FBQUEsWUFDTU0sU0FBUVAsZ0JBRGQ7QUFBQSxZQUNpQztBQUMzQmMsaUJBQVNmLGFBRmY7QUFBQSxZQUdNUyxTQUFRRSxZQUhkOztBQUtBQyxpQkFBU0ksSUFBVCxDQUVFLG9CQUFDLGNBQUQsSUFBZ0IsUUFBUVosTUFBeEIsRUFBZ0MsVUFBVUwsSUFBSVEsUUFBSixFQUFjLENBQUNPLE9BQU9ELEtBQVIsRUFBZSxDQUFDRSxNQUFoQixFQUF3QixDQUF4QixDQUFkLENBQTFDLEVBQXFGLE9BQU9QLE1BQTVGLEVBQW1HLFFBQVFPLE1BQTNHLEVBQW1ILE9BQU9OLE1BQTFILEdBRkY7QUFLRDs7QUFFRCxXQUFLLElBQUlJLFNBQVEsQ0FBakIsRUFBb0JBLFNBQVFWLGNBQTVCLEVBQTRDVSxRQUE1QyxFQUFxRDtBQUNuRCxZQUFNQyxRQUFPSCxlQUFlUixjQUE1QjtBQUFBLFlBQ01jLFdBQVdqQixnQkFBZ0IsQ0FEakM7QUFBQSxZQUNvQztBQUM5QlEsa0JBQVFTLFFBRmQ7QUFBQSxZQUV3QjtBQUNsQkYsa0JBQVNFLFFBSGY7QUFBQSxZQUd5QjtBQUNuQlIsa0JBQVFDLFlBSmQsQ0FEbUQsQ0FLdEI7O0FBRTdCRSxpQkFBU0ksSUFBVCxDQUVFLG9CQUFDLGdCQUFELElBQWtCLFFBQVFaLE1BQTFCLEVBQWtDLFVBQVVMLElBQUlRLFFBQUosRUFBYyxDQUFFLENBQUYsRUFBSyxDQUFDLENBQUQsR0FBS1UsUUFBTCxHQUFnQixDQUFyQixFQUF3QkgsUUFBT0QsTUFBL0IsQ0FBZCxDQUE1QyxFQUFtRyxPQUFPTCxPQUExRyxFQUFpSCxRQUFRTyxPQUF6SCxFQUFpSSxPQUFPTixPQUF4SSxFQUErSSxXQUFXLENBQUUsQ0FBRixFQUFLLEVBQUwsRUFBUyxDQUFULENBQTFKLEdBRkY7QUFLRDs7QUFFRCxhQUFPRyxRQUFQO0FBQ0Q7OzttQ0FFcUJOLFUsRUFBWTtBQUFFLGFBQU9WLGNBQWNzQixjQUFkLENBQTZCYixRQUE3QixFQUF1Q0MsVUFBdkMsQ0FBUDtBQUE0RDs7OztFQXJDM0VWLGE7O0FBd0N2QnVCLE9BQU9DLE9BQVAsR0FBaUJmLFFBQWpCIiwiZmlsZSI6Im9wZW5NZXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vbWF0aHMvdmVjMycpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBDb2xvdXJlZEN1Ym9pZCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9jb2xvdXJlZC9jdWJvaWQnKSxcbiAgICAgIENvbG91cmVkQ3lsaW5kZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vY29sb3VyZWQvY3lsaW5kZXInKTtcblxuY29uc3QgeyBhZGQgfSA9IHZlYzMsXG4gICAgICBvdmVyYWxsSGVpZ2h0ID0gMC4yNSxcbiAgICAgIG92ZXJhbGxUaGlja25lc3MgPSAwLjAyNSxcbiAgICAgIHdpZHRod2lzZUNvdW50ID0gMTAsXG4gICAgICBkZXB0aHdpc2VDb3VudCA9IDUsXG4gICAgICBjb2xvdXIgPSBbIDAuNiwgMC42LCAwLjYsIDEwIF07XG5cbmNsYXNzIE9wZW5NZXNoIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIHdpZHRoLCBkZXB0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBvdmVyYWxsV2lkdGggPSB3aWR0aCwgLy8vXG4gICAgICAgICAgb3ZlcmFsbERlcHRoID0gZGVwdGgsIC8vL1xuICAgICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgd2lkdGh3aXNlQ291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSBvdmVyYWxsV2lkdGggLyB3aWR0aHdpc2VDb3VudCxcbiAgICAgICAgICAgIHdpZHRoID0gb3ZlcmFsbFRoaWNrbmVzcywgIC8vL1xuICAgICAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodCxcbiAgICAgICAgICAgIGRlcHRoID0gb3ZlcmFsbERlcHRoO1xuXG4gICAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICAgIDxDb2xvdXJlZEN1Ym9pZCBjb2xvdXI9e2NvbG91cn0gcG9zaXRpb249e2FkZChwb3NpdGlvbiwgW3N0ZXAgKiBpbmRleCwgLWhlaWdodCwgMF0pfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9Lz5cblxuICAgICAgKVxuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBkZXB0aHdpc2VDb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc3RlcCA9IG92ZXJhbGxEZXB0aCAvIGRlcHRod2lzZUNvdW50LFxuICAgICAgICAgICAgZGlhbWV0ZXIgPSBvdmVyYWxsSGVpZ2h0IC8gMiwgLy8vXG4gICAgICAgICAgICB3aWR0aCA9IGRpYW1ldGVyLCAvLy9cbiAgICAgICAgICAgIGhlaWdodCA9IGRpYW1ldGVyLCAvLy9cbiAgICAgICAgICAgIGRlcHRoID0gb3ZlcmFsbFdpZHRoOyAgLy8vXG5cbiAgICAgIGVsZW1lbnRzLnB1c2goXG5cbiAgICAgICAgPENvbG91cmVkQ3lsaW5kZXIgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXthZGQocG9zaXRpb24sIFsgMCwgLTMgKiBkaWFtZXRlciAvIDIsIHN0ZXAgKiBpbmRleCBdKX0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0vPlxuXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoT3Blbk1lc2gsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3Blbk1lc2g7XG4iXX0=