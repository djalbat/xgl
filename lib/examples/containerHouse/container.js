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
      var length = properties.length;


      return [top(length), bottom(length), frontWall(length), backWall(length), sideWallA(length), sideWallB(length)];
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

var top = function top(length) {
  var width = overallWidth,
      height = length,
      depth = overallHeight,
      position = [0, overallHeight, length],
      rotations = [-90, 0, 0];
  ;

  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

var bottom = function bottom(length) {
  var width = overallWidth,
      height = length,
      depth = 0,
      position = [0, 0, 0],
      rotations = [+90, 0, 0];

  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

var frontWall = function frontWall(length) {
  var width = overallWidth,
      height = overallHeight,
      depth = 0,
      position = [0, 0, length],
      rotations = [0, 0, 0];

  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

var backWall = function backWall(length) {
  var width = overallWidth,
      height = overallHeight,
      depth = 0,
      position = [overallWidth, 0, 0],
      rotations = [0, -180, 0];

  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

var sideWallA = function sideWallA(length) {
  var width = length,
      height = overallHeight,
      depth = 0,
      position = [0, 0, 0],
      rotations = [0, -90, 0];

  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

var sideWallB = function sideWallB(length) {
  var width = length,
      height = overallHeight,
      depth = 0,
      position = [overallWidth, 0, length],
      rotations = [0, +90, 0];

  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIuanMiXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJlZFBsYW5lIiwib3ZlcmFsbEhlaWdodCIsIm92ZXJhbGxXaWR0aCIsImNvbG91ciIsIkNvbnRhaW5lciIsInByb3BlcnRpZXMiLCJsZW5ndGgiLCJ0b3AiLCJib3R0b20iLCJmcm9udFdhbGwiLCJiYWNrV2FsbCIsInNpZGVXYWxsQSIsInNpZGVXYWxsQiIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsc0JBQVIsQ0FBdEI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsMEJBQVIsQ0FEdEI7O0FBR0EsSUFBTUUsZ0JBQWdCLEdBQXRCO0FBQUEsSUFDTUMsZUFBZSxDQURyQjtBQUFBLElBRU1DLFNBQVMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBRmY7O0lBSU1DLFM7Ozs7Ozs7Ozs7O2tDQUNVQyxVLEVBQVk7QUFBQSxVQUNoQkMsTUFEZ0IsR0FDTEQsVUFESyxDQUNoQkMsTUFEZ0I7OztBQUd4QixhQUFRLENBRU5DLElBQUlELE1BQUosQ0FGTSxFQUdORSxPQUFPRixNQUFQLENBSE0sRUFJTkcsVUFBVUgsTUFBVixDQUpNLEVBS05JLFNBQVNKLE1BQVQsQ0FMTSxFQU1OSyxVQUFVTCxNQUFWLENBTk0sRUFPTk0sVUFBVU4sTUFBVixDQVBNLENBQVI7QUFVRDs7O21DQUVxQkQsVSxFQUFZO0FBQUUsYUFBT1AsY0FBY2UsY0FBZCxDQUE2QlQsU0FBN0IsRUFBd0NDLFVBQXhDLENBQVA7QUFBNkQ7Ozs7RUFoQjNFUCxhOztBQW1CeEI7O0FBRUFnQixPQUFPQyxPQUFQ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QUFwRSxFQUEyRSxVQUFVQyxRQUFyRixFQUErRixXQUFXQyxTQUExRyxHQUZGO0FBS0QsQ0FaRDs7QUFjQSxJQUFNUixZQUFZLFNBQVpBLFNBQVksQ0FBQ04sTUFBRCxFQUFZO0FBQzVCLE1BQU1VLFFBQVFWLE1BQWQ7QUFBQSxNQUNNVyxTQUFTaEIsYUFEZjtBQUFBLE1BRU1pQixRQUFRLENBRmQ7QUFBQSxNQUdNQyxXQUFXLENBQUVqQixZQUFGLEVBQWdCLENBQWhCLEVBQW1CSSxNQUFuQixDQUhqQjtBQUFBLE1BSU1jLFlBQVksQ0FBRSxDQUFGLEVBQUssQ0FBQyxFQUFOLEVBQVUsQ0FBVixDQUpsQjs7QUFNQSxTQUVFLG9CQUFDLGFBQUQsSUFBZSxRQUFRakIsTUFBdkIsRUFBK0IsT0FBT2EsS0FBdEMsRUFBNkMsUUFBUUMsTUFBckQsRUFBNkQsT0FBT0MsS0FBcEUsRUFBMkUsVUFBVUMsUUFBckYsRUFBK0YsV0FBV0MsU0FBMUcsR0FGRjtBQUtELENBWkQiLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIENvbG91cmVkUGxhbmUgPSByZXF1aXJlKCcuLi9jb21tb24vY29sb3VyZWQvcGxhbmUnKTtcblxuY29uc3Qgb3ZlcmFsbEhlaWdodCA9IDkuNSxcbiAgICAgIG92ZXJhbGxXaWR0aCA9IDgsXG4gICAgICBjb2xvdXIgPSBbIDEsIDEsIDEsIDEgXTtcblxuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIHRvcChsZW5ndGgpLFxuICAgICAgYm90dG9tKGxlbmd0aCksXG4gICAgICBmcm9udFdhbGwobGVuZ3RoKSxcbiAgICAgIGJhY2tXYWxsKGxlbmd0aCksXG4gICAgICBzaWRlV2FsbEEobGVuZ3RoKSxcbiAgICAgIHNpZGVXYWxsQihsZW5ndGgpLFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb250YWluZXIsIHByb3BlcnRpZXMpOyB9XG59XG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBDb250YWluZXI7XG5cbmNvbnN0IHRvcCA9IChsZW5ndGgpID0+IHtcbiAgY29uc3Qgd2lkdGggPSBvdmVyYWxsV2lkdGgsXG4gICAgICAgIGhlaWdodCA9IGxlbmd0aCxcbiAgICAgICAgZGVwdGggPSBvdmVyYWxsSGVpZ2h0LFxuICAgICAgICBwb3NpdGlvbiA9IFsgMCwgb3ZlcmFsbEhlaWdodCwgbGVuZ3RoIF0sXG4gICAgICAgIHJvdGF0aW9ucyA9IFsgLTkwLCAwLCAwIF07XG47XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZFBsYW5lIGNvbG91cj17Y29sb3VyfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+XG5cbiAgKTtcbn07XG5cbmNvbnN0IGJvdHRvbSA9IChsZW5ndGgpID0+IHtcbiAgY29uc3Qgd2lkdGggPSBvdmVyYWxsV2lkdGgsXG4gICAgICAgIGhlaWdodCA9IGxlbmd0aCxcbiAgICAgICAgZGVwdGggPSAwLFxuICAgICAgICBwb3NpdGlvbiA9IFsgMCwgMCwgMCBdLFxuICAgICAgICByb3RhdGlvbnMgPSBbICs5MCwgIDAsIDAgXTtcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkUGxhbmUgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz5cblxuICApO1xufTtcblxuY29uc3QgZnJvbnRXYWxsID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCB3aWR0aCA9IG92ZXJhbGxXaWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodCxcbiAgICAgICAgZGVwdGggPSAwLFxuICAgICAgICBwb3NpdGlvbiA9IFsgMCwgMCwgbGVuZ3RoIF0sXG4gICAgICAgIHJvdGF0aW9ucyA9IFsgMCwgMCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRQbGFuZSBjb2xvdXI9e2NvbG91cn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17cm90YXRpb25zfSAvPlxuXG4gICk7XG59O1xuXG5jb25zdCBiYWNrV2FsbCA9IChsZW5ndGgpID0+IHtcbiAgY29uc3Qgd2lkdGggPSBvdmVyYWxsV2lkdGgsXG4gICAgICAgIGhlaWdodCA9IG92ZXJhbGxIZWlnaHQsXG4gICAgICAgIGRlcHRoID0gMCxcbiAgICAgICAgcG9zaXRpb24gPSBbIG92ZXJhbGxXaWR0aCwgMCwgMCBdLFxuICAgICAgICByb3RhdGlvbnMgPSBbIDAsIC0xODAsIDAgXTtcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkUGxhbmUgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz5cblxuICApO1xufTtcblxuY29uc3Qgc2lkZVdhbGxBID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCB3aWR0aCA9IGxlbmd0aCxcbiAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodCxcbiAgICAgICAgZGVwdGggPSAwLFxuICAgICAgICBwb3NpdGlvbiA9IFsgMCwgMCwgMCBdLFxuICAgICAgICByb3RhdGlvbnMgPSBbIDAsIC05MCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRQbGFuZSBjb2xvdXI9e2NvbG91cn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17cm90YXRpb25zfSAvPlxuXG4gICk7XG59O1xuXG5jb25zdCBzaWRlV2FsbEIgPSAobGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gbGVuZ3RoLFxuICAgICAgICBoZWlnaHQgPSBvdmVyYWxsSGVpZ2h0LFxuICAgICAgICBkZXB0aCA9IDAsXG4gICAgICAgIHBvc2l0aW9uID0gWyBvdmVyYWxsV2lkdGgsIDAsIGxlbmd0aCBdLFxuICAgICAgICByb3RhdGlvbnMgPSBbIDAsICs5MCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRQbGFuZSBjb2xvdXI9e2NvbG91cn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17cm90YXRpb25zfSAvPlxuXG4gICk7XG59O1xuIl19