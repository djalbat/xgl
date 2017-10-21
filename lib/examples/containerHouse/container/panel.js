'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    ColouredRidge = require('./panel/colouredRidge');

var Panel = function (_CanvasElement) {
  _inherits(Panel, _CanvasElement);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length,
          overallHeight = properties.overallHeight,
          width = 0.25,
          height = overallHeight,
          depth = 0.125,
          rotations = [0, -90, 0],
          step = 1,
          indent = 0.25,
          count = length / step,
          colour = [1, 1, 1, 1],
          elements = [];


      for (var index = 0; index < count - 1; index++) {
        var position = [depth + indent, 0, step * index + step / 2, 0];

        elements.push(React.createElement(ColouredRidge, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations }));
      }

      return elements;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Panel, properties);
    }
  }]);

  return Panel;
}(CanvasElement);

module.exports = Panel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvcGFuZWwuanMiXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJlZFJpZGdlIiwiUGFuZWwiLCJwcm9wZXJ0aWVzIiwibGVuZ3RoIiwib3ZlcmFsbEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJyb3RhdGlvbnMiLCJzdGVwIiwiaW5kZW50IiwiY291bnQiLCJjb2xvdXIiLCJlbGVtZW50cyIsImluZGV4IiwicG9zaXRpb24iLCJwdXNoIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSx5QkFBUixDQUF0QjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSx1QkFBUixDQUR0Qjs7SUFHTUUsSzs7Ozs7Ozs7Ozs7a0NBQ1VDLFUsRUFBWTtBQUFBLFVBQ2hCQyxNQURnQixHQUNVRCxVQURWLENBQ2hCQyxNQURnQjtBQUFBLFVBQ1JDLGFBRFEsR0FDVUYsVUFEVixDQUNSRSxhQURRO0FBQUEsVUFFbEJDLEtBRmtCLEdBRVYsSUFGVTtBQUFBLFVBR2xCQyxNQUhrQixHQUdURixhQUhTO0FBQUEsVUFJbEJHLEtBSmtCLEdBSVYsS0FKVTtBQUFBLFVBS2xCQyxTQUxrQixHQUtOLENBQUUsQ0FBRixFQUFLLENBQUMsRUFBTixFQUFVLENBQVYsQ0FMTTtBQUFBLFVBTWxCQyxJQU5rQixHQU1YLENBTlc7QUFBQSxVQU9sQkMsTUFQa0IsR0FPVCxJQVBTO0FBQUEsVUFRbEJDLEtBUmtCLEdBUVZSLFNBQVNNLElBUkM7QUFBQSxVQVNsQkcsTUFUa0IsR0FTVCxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FUUztBQUFBLFVBVWxCQyxRQVZrQixHQVVQLEVBVk87OztBQVl4QixXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFILFFBQVEsQ0FBcEMsRUFBdUNHLE9BQXZDLEVBQWdEO0FBQzlDLFlBQU1DLFdBQVcsQ0FBQ1IsUUFBTUcsTUFBUCxFQUFlLENBQWYsRUFBa0JELE9BQUtLLEtBQUwsR0FBYUwsT0FBSyxDQUFwQyxFQUF1QyxDQUF2QyxDQUFqQjs7QUFFQUksaUJBQVNHLElBQVQsQ0FFRSxvQkFBQyxhQUFELElBQWUsUUFBUUosTUFBdkIsRUFBK0IsT0FBT1AsS0FBdEMsRUFBNkMsUUFBUUMsTUFBckQsRUFBNkQsT0FBT0MsS0FBcEUsRUFBMkUsVUFBVVEsUUFBckYsRUFBK0YsV0FBV1AsU0FBMUcsR0FGRjtBQUtEOztBQUVELGFBQU9LLFFBQVA7QUFDRDs7O21DQUVxQlgsVSxFQUFZO0FBQUUsYUFBT0osY0FBY21CLGNBQWQsQ0FBNkJoQixLQUE3QixFQUFvQ0MsVUFBcEMsQ0FBUDtBQUF5RDs7OztFQTFCM0VKLGE7O0FBNkJwQm9CLE9BQU9DLE9BQVAsR0FBaUJsQixLQUFqQiIsImZpbGUiOiJwYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBDb2xvdXJlZFJpZGdlID0gcmVxdWlyZSgnLi9wYW5lbC9jb2xvdXJlZFJpZGdlJyk7XG5cbmNsYXNzIFBhbmVsIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHdpZHRoID0gMC4yNSxcbiAgICAgICAgICBoZWlnaHQgPSBvdmVyYWxsSGVpZ2h0LCAvLy9cbiAgICAgICAgICBkZXB0aCA9IDAuMTI1LFxuICAgICAgICAgIHJvdGF0aW9ucyA9IFsgMCwgLTkwLCAwIF0sXG4gICAgICAgICAgc3RlcCA9IDEsXG4gICAgICAgICAgaW5kZW50ID0gMC4yNSxcbiAgICAgICAgICBjb3VudCA9IGxlbmd0aCAvIHN0ZXAsXG4gICAgICAgICAgY29sb3VyID0gWyAxLCAxLCAxLCAxIF0sXG4gICAgICAgICAgZWxlbWVudHMgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudCAtIDE7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gW2RlcHRoK2luZGVudCwgMCwgc3RlcCppbmRleCArIHN0ZXAvMiwgMF07XG5cbiAgICAgIGVsZW1lbnRzLnB1c2goXG5cbiAgICAgICAgPENvbG91cmVkUmlkZ2UgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz4sXG5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYW5lbCwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYW5lbDtcbiJdfQ==