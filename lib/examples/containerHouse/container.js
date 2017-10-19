'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    ColouredPlane = require('../common/coloured/plane');

var overallHeight = 9.5,
    overallWidth = 8,
    colour = [1, 1, 1, 1];

var Container = function (_CanvasElement) {
  _inherits(Container, _CanvasElement);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length,
          overallLength = length; ///

      return [top(overallLength), bottom(overallLength), frontWall(overallLength), backWall(overallLength), sideWallA(overallLength), sideWallB(overallLength)];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Container, properties);
    }
  }]);

  return Container;
}(CanvasElement);

'use strict';

module.exports = Container;

var top = function top(overallLength) {
  var width = overallWidth,
      height = overallLength,
      depth = overallHeight,
      position = [0, overallHeight, overallLength],
      rotations = [-90, 0, 0];
  ;

  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

var bottom = function bottom(overallLength) {
  var width = overallWidth,
      height = overallLength,
      depth = 0,
      position = [0, 0, 0],
      rotations = [+90, 0, 0];

  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

var frontWall = function frontWall(overallLength) {
  var width = overallWidth,
      height = overallHeight,
      depth = 0,
      position = [0, 0, overallLength],
      rotations = [0, 0, 0];

  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

var backWall = function backWall(overallLength) {
  var width = overallWidth,
      height = overallHeight,
      depth = 0,
      position = [overallWidth, 0, 0],
      rotations = [0, -180, 0];

  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

var sideWallA = function sideWallA(overallLength) {
  var width = overallLength,
      height = overallHeight,
      depth = 0,
      position = [0, 0, 0],
      rotations = [0, -90, 0];

  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

var sideWallB = function sideWallB(overallLength) {
  var width = overallLength,
      height = overallHeight,
      depth = 0,
      position = [overallWidth, 0, overallLength],
      rotations = [0, +90, 0];

  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIuanMiXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJlZFBsYW5lIiwib3ZlcmFsbEhlaWdodCIsIm92ZXJhbGxXaWR0aCIsImNvbG91ciIsIkNvbnRhaW5lciIsInByb3BlcnRpZXMiLCJsZW5ndGgiLCJvdmVyYWxsTGVuZ3RoIiwidG9wIiwiYm90dG9tIiwiZnJvbnRXYWxsIiwiYmFja1dhbGwiLCJzaWRlV2FsbEEiLCJzaWRlV2FsbEIiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHNCQUFSLENBQXRCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLDBCQUFSLENBRHRCOztBQUdBLElBQU1FLGdCQUFnQixHQUF0QjtBQUFBLElBQ01DLGVBQWUsQ0FEckI7QUFBQSxJQUVNQyxTQUFTLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUZmOztJQUlNQyxTOzs7Ozs7Ozs7OztrQ0FDVUMsVSxFQUFZO0FBQ2xCLFVBQUVDLE1BQUYsR0FBYUQsVUFBYixDQUFFQyxNQUFGO0FBQUEsVUFDQUMsYUFEQSxHQUNnQkQsTUFEaEIsQ0FEa0IsQ0FFTTs7QUFFOUIsYUFBUSxDQUVORSxJQUFJRCxhQUFKLENBRk0sRUFHTkUsT0FBT0YsYUFBUCxDQUhNLEVBSU5HLFVBQVVILGFBQVYsQ0FKTSxFQUtOSSxTQUFTSixhQUFULENBTE0sRUFNTkssVUFBVUwsYUFBVixDQU5NLEVBT05NLFVBQVVOLGFBQVYsQ0FQTSxDQUFSO0FBVUQ7OzttQ0FFcUJGLFUsRUFBWTtBQUFFLGFBQU9QLGNBQWNnQixjQUFkLENBQTZCVixTQUE3QixFQUF3Q0MsVUFBeEMsQ0FBUDtBQUE2RDs7OztFQWpCM0VQLGE7O0FBb0J4Qjs7QUFFQWlCLE9BQU9DLE9BQVAsR0FBaUJaLFNBQWpCOztBQUVBLElBQU1JLE1BQU0sU0FBTkEsR0FBTSxDQUFDRCxhQUFELEVBQW1CO0FBQzdCLE1BQU1VLFFBQVFmLFlBQWQ7QUFBQSxNQUNNZ0IsU0FBU1gsYUFEZjtBQUFBLE1BRU1ZLFFBQVFsQixhQUZkO0FBQUEsTUFHTW1CLFdBQVcsQ0FBRSxDQUFGLEVBQUtuQixhQUFMLEVBQW9CTSxhQUFwQixDQUhqQjtBQUFBLE1BSU1jLFlBQVksQ0FBRSxDQUFDLEVBQUgsRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUpsQjtBQUtGOztBQUVFLFNBRUUsb0JBQUMsYUFBRCxJQUFlLFFBQVFsQixNQUF2QixFQUErQixPQUFPYyxLQUF0QyxFQUE2QyxRQUFRQyxNQUFyRCxFQUE2RCxPQUFPQyxLQUFwRSxFQUEyRSxVQUFVQyxRQUFyRixFQUErRixXQUFXQyxTQUExRyxHQUZGO0FBS0QsQ0FiRDs7QUFlQSxJQUFNWixTQUFTLFNBQVRBLE1BQVMsQ0FBQ0YsYUFBRCxFQUFtQjtBQUNoQyxNQUFNVSxRQUFRZixZQUFkO0FBQUEsTUFDTWdCLFNBQVNYLGFBRGY7QUFBQSxNQUVNWSxRQUFRLENBRmQ7QUFBQSxNQUdNQyxXQUFXLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBSGpCO0FBQUEsTUFJTUMsWUFBWSxDQUFFLENBQUMsRUFBSCxFQUFRLENBQVIsRUFBVyxDQUFYLENBSmxCOztBQU1BLFNBRUUsb0JBQUMsYUFBRCxJQUFlLFFBQVFsQixNQUF2QixFQUErQixPQUFPYyxLQUF0QyxFQUE2QyxRQUFRQyxNQUFyRCxFQUE2RCxPQUFPQyxLQUFwRSxFQUEyRSxVQUFVQyxRQUFyRixFQUErRixXQUFXQyxTQUExRyxHQUZGO0FBS0QsQ0FaRDs7QUFjQSxJQUFNWCxZQUFZLFNBQVpBLFNBQVksQ0FBQ0gsYUFBRCxFQUFtQjtBQUNuQyxNQUFNVSxRQUFRZixZQUFkO0FBQUEsTUFDTWdCLFNBQVNqQixhQURmO0FBQUEsTUFFTWtCLFFBQVEsQ0FGZDtBQUFBLE1BR01DLFdBQVcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRYixhQUFSLENBSGpCO0FBQUEsTUFJTWMsWUFBWSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUpsQjs7QUFNQSxTQUVFLG9CQUFDLGFBQUQsSUFBZSxRQUFRbEIsTUFBdkIsRUFBK0IsT0FBT2MsS0FBdEMsRUFBNkMsUUFBUUMsTUFBckQsRUFBNkQsT0FBT0MsS0FBcEUsRUFBMkUsVUFBVUMsUUFBckYsRUFBK0YsV0FBV0MsU0FBMUcsR0FGRjtBQUtELENBWkQ7O0FBY0EsSUFBTVYsV0FBVyxTQUFYQSxRQUFXLENBQUNKLGFBQUQsRUFBbUI7QUFDbEMsTUFBTVUsUUFBUWYsWUFBZDtBQUFBLE1BQ01nQixTQUFTakIsYUFEZjtBQUFBLE1BRU1rQixRQUFRLENBRmQ7QUFBQSxNQUdNQyxXQUFXLENBQUVsQixZQUFGLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBSGpCO0FBQUEsTUFJTW1CLFlBQVksQ0FBRSxDQUFGLEVBQUssQ0FBQyxHQUFOLEVBQVcsQ0FBWCxDQUpsQjs7QUFNQSxTQUVFLG9CQUFDLGFBQUQsSUFBZSxRQUFRbEIsTUFBdkIsRUFBK0IsT0FBT2MsS0FBdEMsRUFBNkMsUUFBUUMsTUFBckQsRUFBNkQsT0FBT0MsS0FBcEUsRUFBMkUsVUFBVUMsUUFBckYsRUFBK0YsV0FBV0MsU0FBMUcsR0FGRjtBQUtELENBWkQ7O0FBY0EsSUFBTVQsWUFBWSxTQUFaQSxTQUFZLENBQUNMLGFBQUQsRUFBbUI7QUFDbkMsTUFBTVUsUUFBUVYsYUFBZDtBQUFBLE1BQ01XLFNBQVNqQixhQURmO0FBQUEsTUFFTWtCLFFBQVEsQ0FGZDtBQUFBLE1BR01DLFdBQVcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FIakI7QUFBQSxNQUlNQyxZQUFZLENBQUUsQ0FBRixFQUFLLENBQUMsRUFBTixFQUFVLENBQVYsQ0FKbEI7O0FBTUEsU0FFRSxvQkFBQyxhQUFELElBQWUsUUFBUWxCLE1BQXZCLEVBQStCLE9BQU9jLEtBQXRDLEVBQTZDLFFBQVFDLE1BQXJELEVBQTZELE9BQU9DLEtBQXBFLEVBQTJFLFVBQVVDLFFBQXJGLEVBQStGLFdBQVdDLFNBQTFHLEdBRkY7QUFLRCxDQVpEOztBQWNBLElBQU1SLFlBQVksU0FBWkEsU0FBWSxDQUFDTixhQUFELEVBQW1CO0FBQ25DLE1BQU1VLFFBQVFWLGFBQWQ7QUFBQSxNQUNNVyxTQUFTakIsYUFEZjtBQUFBLE1BRU1rQixRQUFRLENBRmQ7QUFBQSxNQUdNQyxXQUFXLENBQUVsQixZQUFGLEVBQWdCLENBQWhCLEVBQW1CSyxhQUFuQixDQUhqQjtBQUFBLE1BSU1jLFlBQVksQ0FBRSxDQUFGLEVBQUssQ0FBQyxFQUFOLEVBQVUsQ0FBVixDQUpsQjs7QUFNQSxTQUVFLG9CQUFDLGFBQUQsSUFBZSxRQUFRbEIsTUFBdkIsRUFBK0IsT0FBT2MsS0FBdEMsRUFBNkMsUUFBUUMsTUFBckQsRUFBNkQsT0FBT0MsS0FBcEUsRUFBMkUsVUFBVUMsUUFBckYsRUFBK0YsV0FBV0MsU0FBMUcsR0FGRjtBQUtELENBWkQiLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIENvbG91cmVkUGxhbmUgPSByZXF1aXJlKCcuLi9jb21tb24vY29sb3VyZWQvcGxhbmUnKTtcblxuY29uc3Qgb3ZlcmFsbEhlaWdodCA9IDkuNSxcbiAgICAgIG92ZXJhbGxXaWR0aCA9IDgsXG4gICAgICBjb2xvdXIgPSBbIDEsIDEsIDEsIDEgXTtcblxuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG92ZXJhbGxMZW5ndGggPSBsZW5ndGg7IC8vL1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIHRvcChvdmVyYWxsTGVuZ3RoKSxcbiAgICAgIGJvdHRvbShvdmVyYWxsTGVuZ3RoKSxcbiAgICAgIGZyb250V2FsbChvdmVyYWxsTGVuZ3RoKSxcbiAgICAgIGJhY2tXYWxsKG92ZXJhbGxMZW5ndGgpLFxuICAgICAgc2lkZVdhbGxBKG92ZXJhbGxMZW5ndGgpLFxuICAgICAgc2lkZVdhbGxCKG92ZXJhbGxMZW5ndGgpLFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb250YWluZXIsIHByb3BlcnRpZXMpOyB9XG59XG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBDb250YWluZXI7XG5cbmNvbnN0IHRvcCA9IChvdmVyYWxsTGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gb3ZlcmFsbFdpZHRoLFxuICAgICAgICBoZWlnaHQgPSBvdmVyYWxsTGVuZ3RoLFxuICAgICAgICBkZXB0aCA9IG92ZXJhbGxIZWlnaHQsXG4gICAgICAgIHBvc2l0aW9uID0gWyAwLCBvdmVyYWxsSGVpZ2h0LCBvdmVyYWxsTGVuZ3RoIF0sXG4gICAgICAgIHJvdGF0aW9ucyA9IFsgLTkwLCAwLCAwIF07XG47XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZFBsYW5lIGNvbG91cj17Y29sb3VyfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+XG5cbiAgKTtcbn07XG5cbmNvbnN0IGJvdHRvbSA9IChvdmVyYWxsTGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gb3ZlcmFsbFdpZHRoLFxuICAgICAgICBoZWlnaHQgPSBvdmVyYWxsTGVuZ3RoLFxuICAgICAgICBkZXB0aCA9IDAsXG4gICAgICAgIHBvc2l0aW9uID0gWyAwLCAwLCAwIF0sXG4gICAgICAgIHJvdGF0aW9ucyA9IFsgKzkwLCAgMCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRQbGFuZSBjb2xvdXI9e2NvbG91cn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17cm90YXRpb25zfSAvPlxuXG4gICk7XG59O1xuXG5jb25zdCBmcm9udFdhbGwgPSAob3ZlcmFsbExlbmd0aCkgPT4ge1xuICBjb25zdCB3aWR0aCA9IG92ZXJhbGxXaWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodCxcbiAgICAgICAgZGVwdGggPSAwLFxuICAgICAgICBwb3NpdGlvbiA9IFsgMCwgMCwgb3ZlcmFsbExlbmd0aCBdLFxuICAgICAgICByb3RhdGlvbnMgPSBbIDAsIDAsIDAgXTtcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkUGxhbmUgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz5cblxuICApO1xufTtcblxuY29uc3QgYmFja1dhbGwgPSAob3ZlcmFsbExlbmd0aCkgPT4ge1xuICBjb25zdCB3aWR0aCA9IG92ZXJhbGxXaWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodCxcbiAgICAgICAgZGVwdGggPSAwLFxuICAgICAgICBwb3NpdGlvbiA9IFsgb3ZlcmFsbFdpZHRoLCAwLCAwIF0sXG4gICAgICAgIHJvdGF0aW9ucyA9IFsgMCwgLTE4MCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRQbGFuZSBjb2xvdXI9e2NvbG91cn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17cm90YXRpb25zfSAvPlxuXG4gICk7XG59O1xuXG5jb25zdCBzaWRlV2FsbEEgPSAob3ZlcmFsbExlbmd0aCkgPT4ge1xuICBjb25zdCB3aWR0aCA9IG92ZXJhbGxMZW5ndGgsXG4gICAgICAgIGhlaWdodCA9IG92ZXJhbGxIZWlnaHQsXG4gICAgICAgIGRlcHRoID0gMCxcbiAgICAgICAgcG9zaXRpb24gPSBbIDAsIDAsIDAgXSxcbiAgICAgICAgcm90YXRpb25zID0gWyAwLCAtOTAsIDAgXTtcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkUGxhbmUgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz5cblxuICApO1xufTtcblxuY29uc3Qgc2lkZVdhbGxCID0gKG92ZXJhbGxMZW5ndGgpID0+IHtcbiAgY29uc3Qgd2lkdGggPSBvdmVyYWxsTGVuZ3RoLFxuICAgICAgICBoZWlnaHQgPSBvdmVyYWxsSGVpZ2h0LFxuICAgICAgICBkZXB0aCA9IDAsXG4gICAgICAgIHBvc2l0aW9uID0gWyBvdmVyYWxsV2lkdGgsIDAsIG92ZXJhbGxMZW5ndGggXSxcbiAgICAgICAgcm90YXRpb25zID0gWyAwLCArOTAsIDAgXTtcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkUGxhbmUgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz5cblxuICApO1xufTtcbiJdfQ==