'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    ColouredRidge = require('./sideWall/colouredRidge');

var SideWall = function (_CanvasElement) {
  _inherits(SideWall, _CanvasElement);

  function SideWall() {
    _classCallCheck(this, SideWall);

    return _possibleConstructorReturn(this, (SideWall.__proto__ || Object.getPrototypeOf(SideWall)).apply(this, arguments));
  }

  _createClass(SideWall, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length,
          overallWidth = properties.overallWidth,
          overallHeight = properties.overallHeight,
          colour = properties.colour,
          width = 0.25,
          height = overallHeight,
          depth = 0.25,
          rotations = [0, -90, 0],
          step = 1,
          count = length / step,
          elements = [];


      for (var index = 0; index < count; index++) {
        var position = [depth, 0, step * index, 0];

        elements.push(React.createElement(ColouredRidge, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations }));
      }

      return elements;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(SideWall, properties);
    }
  }]);

  return SideWall;
}(CanvasElement);

module.exports = SideWall;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvc2lkZVdhbGwuanMiXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJlZFJpZGdlIiwiU2lkZVdhbGwiLCJwcm9wZXJ0aWVzIiwibGVuZ3RoIiwib3ZlcmFsbFdpZHRoIiwib3ZlcmFsbEhlaWdodCIsImNvbG91ciIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJyb3RhdGlvbnMiLCJzdGVwIiwiY291bnQiLCJlbGVtZW50cyIsImluZGV4IiwicG9zaXRpb24iLCJwdXNoIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSx5QkFBUixDQUF0QjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSwwQkFBUixDQUR0Qjs7SUFHTUUsUTs7Ozs7Ozs7Ozs7a0NBQ1VDLFUsRUFBWTtBQUFBLFVBQ2hCQyxNQURnQixHQUNnQ0QsVUFEaEMsQ0FDaEJDLE1BRGdCO0FBQUEsVUFDUkMsWUFEUSxHQUNnQ0YsVUFEaEMsQ0FDUkUsWUFEUTtBQUFBLFVBQ01DLGFBRE4sR0FDZ0NILFVBRGhDLENBQ01HLGFBRE47QUFBQSxVQUNxQkMsTUFEckIsR0FDZ0NKLFVBRGhDLENBQ3FCSSxNQURyQjtBQUFBLFVBRWxCQyxLQUZrQixHQUVWLElBRlU7QUFBQSxVQUdsQkMsTUFIa0IsR0FHVEgsYUFIUztBQUFBLFVBSWxCSSxLQUprQixHQUlWLElBSlU7QUFBQSxVQUtsQkMsU0FMa0IsR0FLTixDQUFFLENBQUYsRUFBSyxDQUFDLEVBQU4sRUFBVSxDQUFWLENBTE07QUFBQSxVQU1sQkMsSUFOa0IsR0FNWCxDQU5XO0FBQUEsVUFPbEJDLEtBUGtCLEdBT1ZULFNBQVNRLElBUEM7QUFBQSxVQVFsQkUsUUFSa0IsR0FRUCxFQVJPOzs7QUFVeEIsV0FBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRRixLQUE1QixFQUFtQ0UsT0FBbkMsRUFBNEM7QUFDMUMsWUFBTUMsV0FBVyxDQUFDTixLQUFELEVBQVEsQ0FBUixFQUFXRSxPQUFPRyxLQUFsQixFQUF5QixDQUF6QixDQUFqQjs7QUFFQUQsaUJBQVNHLElBQVQsQ0FFRSxvQkFBQyxhQUFELElBQWUsUUFBUVYsTUFBdkIsRUFBK0IsT0FBT0MsS0FBdEMsRUFBNkMsUUFBUUMsTUFBckQsRUFBNkQsT0FBT0MsS0FBcEUsRUFBMkUsVUFBVU0sUUFBckYsRUFBK0YsV0FBV0wsU0FBMUcsR0FGRjtBQUtEOztBQUVELGFBQU9HLFFBQVA7QUFDRDs7O21DQUVxQlgsVSxFQUFZO0FBQUUsYUFBT0osY0FBY21CLGNBQWQsQ0FBNkJoQixRQUE3QixFQUF1Q0MsVUFBdkMsQ0FBUDtBQUE0RDs7OztFQXhCM0VKLGE7O0FBMkJ2Qm9CLE9BQU9DLE9BQVAsR0FBaUJsQixRQUFqQiIsImZpbGUiOiJzaWRlV2FsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBDb2xvdXJlZFJpZGdlID0gcmVxdWlyZSgnLi9zaWRlV2FsbC9jb2xvdXJlZFJpZGdlJyk7XG5cbmNsYXNzIFNpZGVXYWxsIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQsIGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB3aWR0aCA9IDAuMjUsXG4gICAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodCwgLy8vXG4gICAgICAgICAgZGVwdGggPSAwLjI1LFxuICAgICAgICAgIHJvdGF0aW9ucyA9IFsgMCwgLTkwLCAwIF0sXG4gICAgICAgICAgc3RlcCA9IDEsXG4gICAgICAgICAgY291bnQgPSBsZW5ndGggLyBzdGVwLFxuICAgICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gW2RlcHRoLCAwLCBzdGVwICogaW5kZXgsIDBdO1xuXG4gICAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICAgIDxDb2xvdXJlZFJpZGdlIGNvbG91cj17Y29sb3VyfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+LFxuXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2lkZVdhbGwsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZVdhbGw7XG4iXX0=