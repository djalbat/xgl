'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    ColouredPlane = require('../../common/coloured/plane');

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
          width = length,
          height = overallHeight,
          depth = 0,
          position = [0, 0, 0],
          rotations = [0, -90, 0];


      return [React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations })];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvc2lkZVdhbGwuanMiXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJlZFBsYW5lIiwiU2lkZVdhbGwiLCJwcm9wZXJ0aWVzIiwibGVuZ3RoIiwib3ZlcmFsbFdpZHRoIiwib3ZlcmFsbEhlaWdodCIsImNvbG91ciIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEseUJBQVIsQ0FBdEI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsNkJBQVIsQ0FEdEI7O0lBR01FLFE7Ozs7Ozs7Ozs7O2tDQUNVQyxVLEVBQVk7QUFBQSxVQUNoQkMsTUFEZ0IsR0FDZ0NELFVBRGhDLENBQ2hCQyxNQURnQjtBQUFBLFVBQ1JDLFlBRFEsR0FDZ0NGLFVBRGhDLENBQ1JFLFlBRFE7QUFBQSxVQUNNQyxhQUROLEdBQ2dDSCxVQURoQyxDQUNNRyxhQUROO0FBQUEsVUFDcUJDLE1BRHJCLEdBQ2dDSixVQURoQyxDQUNxQkksTUFEckI7QUFBQSxVQUVsQkMsS0FGa0IsR0FFVkosTUFGVTtBQUFBLFVBR2xCSyxNQUhrQixHQUdUSCxhQUhTO0FBQUEsVUFJbEJJLEtBSmtCLEdBSVYsQ0FKVTtBQUFBLFVBS2xCQyxRQUxrQixHQUtQLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBTE87QUFBQSxVQU1sQkMsU0FOa0IsR0FNTixDQUFFLENBQUYsRUFBSyxDQUFDLEVBQU4sRUFBVSxDQUFWLENBTk07OztBQVF4QixhQUFRLENBRU4sb0JBQUMsYUFBRCxJQUFlLFFBQVFMLE1BQXZCLEVBQStCLE9BQU9DLEtBQXRDLEVBQTZDLFFBQVFDLE1BQXJELEVBQTZELE9BQU9DLEtBQXBFLEVBQTJFLFVBQVVDLFFBQXJGLEVBQStGLFdBQVdDLFNBQTFHLEdBRk0sQ0FBUjtBQUtEOzs7bUNBRXFCVCxVLEVBQVk7QUFBRSxhQUFPSixjQUFjYyxjQUFkLENBQTZCWCxRQUE3QixFQUF1Q0MsVUFBdkMsQ0FBUDtBQUE0RDs7OztFQWhCM0VKLGE7O0FBbUJ2QmUsT0FBT0MsT0FBUCxHQUFpQmIsUUFBakIiLCJmaWxlIjoic2lkZVdhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgQ29sb3VyZWRQbGFuZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9jb2xvdXJlZC9wbGFuZScpO1xuXG5jbGFzcyBTaWRlV2FsbCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCBvdmVyYWxsSGVpZ2h0LCBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgd2lkdGggPSBsZW5ndGgsXG4gICAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodCxcbiAgICAgICAgICBkZXB0aCA9IDAsXG4gICAgICAgICAgcG9zaXRpb24gPSBbIDAsIDAsIDAgXSxcbiAgICAgICAgICByb3RhdGlvbnMgPSBbIDAsIC05MCwgMCBdO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2xvdXJlZFBsYW5lIGNvbG91cj17Y29sb3VyfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhTaWRlV2FsbCwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWRlV2FsbDtcbiJdfQ==