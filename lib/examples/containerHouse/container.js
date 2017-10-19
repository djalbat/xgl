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
    key: 'getChildElements',
    value: function getChildElements() {
      var /*{ length } = properties,
          */overallLength = 40; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIuanMiXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJlZFBsYW5lIiwib3ZlcmFsbEhlaWdodCIsIm92ZXJhbGxXaWR0aCIsImNvbG91ciIsIkNvbnRhaW5lciIsIm92ZXJhbGxMZW5ndGgiLCJ0b3AiLCJib3R0b20iLCJmcm9udFdhbGwiLCJiYWNrV2FsbCIsInNpZGVXYWxsQSIsInNpZGVXYWxsQiIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHNCQUFSLENBQXRCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLDBCQUFSLENBRHRCOztBQUdBLElBQU1FLGdCQUFnQixHQUF0QjtBQUFBLElBQ01DLGVBQWUsQ0FEckI7QUFBQSxJQUVNQyxTQUFTLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUZmOztJQUlNQyxTOzs7Ozs7Ozs7Ozt1Q0FDZTtBQUNqQixVQUFNO1lBQ0VDLGdCQUFnQixFQUR4QixDQURpQixDQUVXOztBQUU1QixhQUFRLENBRU5DLElBQUlELGFBQUosQ0FGTSxFQUdORSxPQUFPRixhQUFQLENBSE0sRUFJTkcsVUFBVUgsYUFBVixDQUpNLEVBS05JLFNBQVNKLGFBQVQsQ0FMTSxFQU1OSyxVQUFVTCxhQUFWLENBTk0sRUFPTk0sVUFBVU4sYUFBVixDQVBNLENBQVI7QUFVRDs7O21DQUVxQk8sVSxFQUFZO0FBQUUsYUFBT2QsY0FBY2UsY0FBZCxDQUE2QlQsU0FBN0IsRUFBd0NRLFVBQXhDLENBQVA7QUFBNkQ7Ozs7RUFqQjNFZCxhOztBQW9CeEI7O0FBRUFnQixPQUFPQyxPQUFQLEdB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LEtBQXBFLEVBQTJFLFVBQVVDLFFBQXJGLEVBQStGLFdBQVdDLFNBQTFHLEdBRkY7QUFLRCxDQVpEOztBQWNBLElBQU1ULFlBQVksU0FBWkEsU0FBWSxDQUFDTixhQUFELEVBQW1CO0FBQ25DLE1BQU1XLFFBQVFYLGFBQWQ7QUFBQSxNQUNNWSxTQUFTaEIsYUFEZjtBQUFBLE1BRU1pQixRQUFRLENBRmQ7QUFBQSxNQUdNQyxXQUFXLENBQUVqQixZQUFGLEVBQWdCLENBQWhCLEVBQW1CRyxhQUFuQixDQUhqQjtBQUFBLE1BSU1lLFlBQVksQ0FBRSxDQUFGLEVBQUssQ0FBQyxFQUFOLEVBQVUsQ0FBVixDQUpsQjs7QUFNQSxTQUVFLG9CQUFDLGFBQUQsSUFBZSxRQUFRakIsTUFBdkIsRUFBK0IsT0FBT2EsS0FBdEMsRUFBNkMsUUFBUUMsTUFBckQsRUFBNkQsT0FBT0MsS0FBcEUsRUFBMkUsVUFBVUMsUUFBckYsRUFBK0YsV0FBV0MsU0FBMUcsR0FGRjtBQUtELENBWkQiLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIENvbG91cmVkUGxhbmUgPSByZXF1aXJlKCcuLi9jb21tb24vY29sb3VyZWQvcGxhbmUnKTtcblxuY29uc3Qgb3ZlcmFsbEhlaWdodCA9IDkuNSxcbiAgICAgIG92ZXJhbGxXaWR0aCA9IDgsXG4gICAgICBjb2xvdXIgPSBbIDEsIDEsIDEsIDEgXTtcblxuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgLyp7IGxlbmd0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICAqL292ZXJhbGxMZW5ndGggPSA0MDsgLy8vXG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgdG9wKG92ZXJhbGxMZW5ndGgpLFxuICAgICAgYm90dG9tKG92ZXJhbGxMZW5ndGgpLFxuICAgICAgZnJvbnRXYWxsKG92ZXJhbGxMZW5ndGgpLFxuICAgICAgYmFja1dhbGwob3ZlcmFsbExlbmd0aCksXG4gICAgICBzaWRlV2FsbEEob3ZlcmFsbExlbmd0aCksXG4gICAgICBzaWRlV2FsbEIob3ZlcmFsbExlbmd0aCksXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbnRhaW5lciwgcHJvcGVydGllcyk7IH1cbn1cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRhaW5lcjtcblxuY29uc3QgdG9wID0gKG92ZXJhbGxMZW5ndGgpID0+IHtcbiAgY29uc3Qgd2lkdGggPSBvdmVyYWxsV2lkdGgsXG4gICAgICAgIGhlaWdodCA9IG92ZXJhbGxMZW5ndGgsXG4gICAgICAgIGRlcHRoID0gb3ZlcmFsbEhlaWdodCxcbiAgICAgICAgcG9zaXRpb24gPSBbIDAsIG92ZXJhbGxIZWlnaHQsIG92ZXJhbGxMZW5ndGggXSxcbiAgICAgICAgcm90YXRpb25zID0gWyAtOTAsIDAsIDAgXTtcbjtcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkUGxhbmUgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz5cblxuICApO1xufTtcblxuY29uc3QgYm90dG9tID0gKG92ZXJhbGxMZW5ndGgpID0+IHtcbiAgY29uc3Qgd2lkdGggPSBvdmVyYWxsV2lkdGgsXG4gICAgICAgIGhlaWdodCA9IG92ZXJhbGxMZW5ndGgsXG4gICAgICAgIGRlcHRoID0gMCxcbiAgICAgICAgcG9zaXRpb24gPSBbIDAsIDAsIDAgXSxcbiAgICAgICAgcm90YXRpb25zID0gWyArOTAsICAwLCAwIF07XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZFBsYW5lIGNvbG91cj17Y29sb3VyfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+XG5cbiAgKTtcbn07XG5cbmNvbnN0IGZyb250V2FsbCA9IChvdmVyYWxsTGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gb3ZlcmFsbFdpZHRoLFxuICAgICAgICBoZWlnaHQgPSBvdmVyYWxsSGVpZ2h0LFxuICAgICAgICBkZXB0aCA9IDAsXG4gICAgICAgIHBvc2l0aW9uID0gWyAwLCAwLCBvdmVyYWxsTGVuZ3RoIF0sXG4gICAgICAgIHJvdGF0aW9ucyA9IFsgMCwgMCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRQbGFuZSBjb2xvdXI9e2NvbG91cn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17cm90YXRpb25zfSAvPlxuXG4gICk7XG59O1xuXG5jb25zdCBiYWNrV2FsbCA9IChvdmVyYWxsTGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gb3ZlcmFsbFdpZHRoLFxuICAgICAgICBoZWlnaHQgPSBvdmVyYWxsSGVpZ2h0LFxuICAgICAgICBkZXB0aCA9IDAsXG4gICAgICAgIHBvc2l0aW9uID0gWyBvdmVyYWxsV2lkdGgsIDAsIDAgXSxcbiAgICAgICAgcm90YXRpb25zID0gWyAwLCAtMTgwLCAwIF07XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZFBsYW5lIGNvbG91cj17Y29sb3VyfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+XG5cbiAgKTtcbn07XG5cbmNvbnN0IHNpZGVXYWxsQSA9IChvdmVyYWxsTGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gb3ZlcmFsbExlbmd0aCxcbiAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodCxcbiAgICAgICAgZGVwdGggPSAwLFxuICAgICAgICBwb3NpdGlvbiA9IFsgMCwgMCwgMCBdLFxuICAgICAgICByb3RhdGlvbnMgPSBbIDAsIC05MCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRQbGFuZSBjb2xvdXI9e2NvbG91cn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17cm90YXRpb25zfSAvPlxuXG4gICk7XG59O1xuXG5jb25zdCBzaWRlV2FsbEIgPSAob3ZlcmFsbExlbmd0aCkgPT4ge1xuICBjb25zdCB3aWR0aCA9IG92ZXJhbGxMZW5ndGgsXG4gICAgICAgIGhlaWdodCA9IG92ZXJhbGxIZWlnaHQsXG4gICAgICAgIGRlcHRoID0gMCxcbiAgICAgICAgcG9zaXRpb24gPSBbIG92ZXJhbGxXaWR0aCwgMCwgb3ZlcmFsbExlbmd0aCBdLFxuICAgICAgICByb3RhdGlvbnMgPSBbIDAsICs5MCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRQbGFuZSBjb2xvdXI9e2NvbG91cn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17cm90YXRpb25zfSAvPlxuXG4gICk7XG59O1xuIl19