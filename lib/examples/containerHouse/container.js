'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    Roof = require('./container/roof'),
    BackWall = require('./container/backWall'),
    Underside = require('./container/underside'),
    FrontWall = require('./container/frontWall'),
    SideWallA = require('./container/sideWallA'),
    SideWallB = require('./container/sideWallB');

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


      return [React.createElement(Roof, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(Underside, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(FrontWall, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(BackWall, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(SideWallA, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(SideWallB, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Container, properties);
    }
  }]);

  return Container;
}(CanvasElement);

module.exports = Container;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIuanMiXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsInJlcXVpcmUiLCJSb29mIiwiQmFja1dhbGwiLCJVbmRlcnNpZGUiLCJGcm9udFdhbGwiLCJTaWRlV2FsbEEiLCJTaWRlV2FsbEIiLCJvdmVyYWxsSGVpZ2h0Iiwib3ZlcmFsbFdpZHRoIiwiY29sb3VyIiwiQ29udGFpbmVyIiwicHJvcGVydGllcyIsImxlbmd0aCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsc0JBQVIsQ0FBdEI7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLGtCQUFSLENBRGI7QUFBQSxJQUVNRSxXQUFXRixRQUFRLHNCQUFSLENBRmpCO0FBQUEsSUFHTUcsWUFBWUgsUUFBUSx1QkFBUixDQUhsQjtBQUFBLElBSU1JLFlBQVlKLFFBQVEsdUJBQVIsQ0FKbEI7QUFBQSxJQUtNSyxZQUFZTCxRQUFRLHVCQUFSLENBTGxCO0FBQUEsSUFNTU0sWUFBWU4sUUFBUSx1QkFBUixDQU5sQjs7QUFRQSxJQUFNTyxnQkFBZ0IsR0FBdEI7QUFBQSxJQUNNQyxlQUFlLENBRHJCO0FBQUEsSUFFTUMsU0FBUyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FGZjs7SUFJTUMsUzs7Ozs7Ozs7Ozs7a0NBQ1VDLFUsRUFBWTtBQUFBLFVBQ2hCQyxNQURnQixHQUNMRCxVQURLLENBQ2hCQyxNQURnQjs7O0FBR3hCLGFBQVEsQ0FFTixvQkFBQyxJQUFELElBQU0sUUFBUUEsTUFBZCxFQUFzQixjQUFjSixZQUFwQyxFQUFrRCxlQUFlRCxhQUFqRSxFQUFnRixRQUFRRSxNQUF4RixHQUZNLEVBR04sb0JBQUMsU0FBRCxJQUFXLFFBQVFHLE1BQW5CLEVBQTJCLGNBQWNKLFlBQXpDLEVBQXVELGVBQWVELGFBQXRFLEVBQXFGLFFBQVFFLE1BQTdGLEdBSE0sRUFJTixvQkFBQyxTQUFELElBQVcsUUFBUUcsTUFBbkIsRUFBMkIsY0FBY0osWUFBekMsRUFBdUQsZUFBZUQsYUFBdEUsRUFBcUYsUUFBUUUsTUFBN0YsR0FKTSxFQUtOLG9CQUFDLFFBQUQsSUFBVSxRQUFRRyxNQUFsQixFQUEwQixjQUFjSixZQUF4QyxFQUFzRCxlQUFlRCxhQUFyRSxFQUFvRixRQUFRRSxNQUE1RixHQUxNLEVBTU4sb0JBQUMsU0FBRCxJQUFXLFFBQVFHLE1BQW5CLEVBQTJCLGNBQWNKLFlBQXpDLEVBQXVELGVBQWVELGFBQXRFLEVBQXFGLFFBQVFFLE1BQTdGLEdBTk0sRUFPTixvQkFBQyxTQUFELElBQVcsUUFBUUcsTUFBbkIsRUFBMkIsY0FBY0osWUFBekMsRUFBdUQsZUFBZUQsYUFBdEUsRUFBcUYsUUFBUUUsTUFBN0YsR0FQTSxDQUFSO0FBVUQ7OzttQ0FFcUJFLFUsRUFBWTtBQUFFLGFBQU9aLGNBQWNjLGNBQWQsQ0FBNkJILFNBQTdCLEVBQXdDQyxVQUF4QyxDQUFQO0FBQTZEOzs7O0VBaEIzRVosYTs7QUFtQnhCZSxPQUFPQyxPQUFQLEdBQWlCTCxTQUFqQiIsImZpbGUiOiJjb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgUm9vZiA9IHJlcXVpcmUoJy4vY29udGFpbmVyL3Jvb2YnKSxcbiAgICAgIEJhY2tXYWxsID0gcmVxdWlyZSgnLi9jb250YWluZXIvYmFja1dhbGwnKSxcbiAgICAgIFVuZGVyc2lkZSA9IHJlcXVpcmUoJy4vY29udGFpbmVyL3VuZGVyc2lkZScpLFxuICAgICAgRnJvbnRXYWxsID0gcmVxdWlyZSgnLi9jb250YWluZXIvZnJvbnRXYWxsJyksXG4gICAgICBTaWRlV2FsbEEgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9zaWRlV2FsbEEnKSxcbiAgICAgIFNpZGVXYWxsQiA9IHJlcXVpcmUoJy4vY29udGFpbmVyL3NpZGVXYWxsQicpO1xuXG5jb25zdCBvdmVyYWxsSGVpZ2h0ID0gOS41LFxuICAgICAgb3ZlcmFsbFdpZHRoID0gOCxcbiAgICAgIGNvbG91ciA9IFsgMSwgMSwgMSwgMSBdO1xuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFJvb2YgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSBjb2xvdXI9e2NvbG91cn0gLz4sXG4gICAgICA8VW5kZXJzaWRlIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gY29sb3VyPXtjb2xvdXJ9IC8+LFxuICAgICAgPEZyb250V2FsbCBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IGNvbG91cj17Y29sb3VyfSAvPixcbiAgICAgIDxCYWNrV2FsbCBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IGNvbG91cj17Y29sb3VyfSAvPixcbiAgICAgIDxTaWRlV2FsbEEgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSBjb2xvdXI9e2NvbG91cn0gLz4sXG4gICAgICA8U2lkZVdhbGxCIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gY29sb3VyPXtjb2xvdXJ9IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb250YWluZXIsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFpbmVyO1xuIl19