'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    Roof = require('./container/roof'),
    BackPanel = require('./container/panel/back'),
    FrontPanel = require('./container/panel/front'),
    SidePanelA = require('./container/panel/sideA'),
    SidePanelB = require('./container/panel/sideB'),
    TopRails = require('./container/topRails'),
    BottomRails = require('./container/bottomRails'),
    CornerPosts = require('./container/cornerPosts'),
    CornerFittings = require('./container/cornerFittings');

var overallWidth = 8,
    overallHeight = 9.5;

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


      return [React.createElement(Roof, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(FrontPanel, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(BackPanel, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(SidePanelA, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(SidePanelB, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(TopRails, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(BottomRails, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(CornerPosts, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(CornerFittings, { length: length, overallWidth: overallWidth, overallHeight: overallHeight })];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIuanMiXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsInJlcXVpcmUiLCJSb29mIiwiQmFja1BhbmVsIiwiRnJvbnRQYW5lbCIsIlNpZGVQYW5lbEEiLCJTaWRlUGFuZWxCIiwiVG9wUmFpbHMiLCJCb3R0b21SYWlscyIsIkNvcm5lclBvc3RzIiwiQ29ybmVyRml0dGluZ3MiLCJvdmVyYWxsV2lkdGgiLCJvdmVyYWxsSGVpZ2h0IiwiQ29udGFpbmVyIiwicHJvcGVydGllcyIsImxlbmd0aCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsc0JBQVIsQ0FBdEI7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLGtCQUFSLENBRGI7QUFBQSxJQUVNRSxZQUFZRixRQUFRLHdCQUFSLENBRmxCO0FBQUEsSUFHTUcsYUFBYUgsUUFBUSx5QkFBUixDQUhuQjtBQUFBLElBSU1JLGFBQWFKLFFBQVEseUJBQVIsQ0FKbkI7QUFBQSxJQUtNSyxhQUFhTCxRQUFRLHlCQUFSLENBTG5CO0FBQUEsSUFNTU0sV0FBV04sUUFBUSxzQkFBUixDQU5qQjtBQUFBLElBT01PLGNBQWNQLFFBQVEseUJBQVIsQ0FQcEI7QUFBQSxJQVFNUSxjQUFjUixRQUFRLHlCQUFSLENBUnBCO0FBQUEsSUFTTVMsaUJBQWlCVCxRQUFRLDRCQUFSLENBVHZCOztBQVdBLElBQU1VLGVBQWUsQ0FBckI7QUFBQSxJQUNNQyxnQkFBZ0IsR0FEdEI7O0lBR01DLFM7Ozs7Ozs7Ozs7O2tDQUNVQyxVLEVBQVk7QUFBQSxVQUNoQkMsTUFEZ0IsR0FDTEQsVUFESyxDQUNoQkMsTUFEZ0I7OztBQUd4QixhQUFRLENBRU4sb0JBQUMsSUFBRCxJQUFNLFFBQVFBLE1BQWQsRUFBc0IsY0FBY0osWUFBcEMsRUFBa0QsZUFBZUMsYUFBakUsR0FGTSxFQUdOLG9CQUFDLFVBQUQsSUFBWSxRQUFRRyxNQUFwQixFQUE0QixjQUFjSixZQUExQyxFQUF3RCxlQUFlQyxhQUF2RSxHQUhNLEVBSU4sb0JBQUMsU0FBRCxJQUFXLFFBQVFHLE1BQW5CLEVBQTJCLGNBQWNKLFlBQXpDLEVBQXVELGVBQWVDLGFBQXRFLEdBSk0sRUFLTixvQkFBQyxVQUFELElBQVksUUFBUUcsTUFBcEIsRUFBNEIsY0FBY0osWUFBMUMsRUFBd0QsZUFBZUMsYUFBdkUsR0FMTSxFQU1OLG9CQUFDLFVBQUQsSUFBWSxRQUFRRyxNQUFwQixFQUE0QixjQUFjSixZQUExQyxFQUF3RCxlQUFlQyxhQUF2RSxHQU5NLEVBT04sb0JBQUMsUUFBRCxJQUFVLFFBQVFHLE1BQWxCLEVBQTBCLGNBQWNKLFlBQXhDLEVBQXNELGVBQWVDLGFBQXJFLEdBUE0sRUFRTixvQkFBQyxXQUFELElBQWEsUUFBUUcsTUFBckIsRUFBNkIsY0FBY0osWUFBM0MsRUFBeUQsZUFBZUMsYUFBeEUsR0FSTSxFQVNOLG9CQUFDLFdBQUQsSUFBYSxRQUFRRyxNQUFyQixFQUE2QixjQUFjSixZQUEzQyxFQUF5RCxlQUFlQyxhQUF4RSxHQVRNLEVBVU4sb0JBQUMsY0FBRCxJQUFnQixRQUFRRyxNQUF4QixFQUFnQyxjQUFjSixZQUE5QyxFQUE0RCxlQUFlQyxhQUEzRSxHQVZNLENBQVI7QUFhRDs7O21DQUVxQkUsVSxFQUFZO0FBQUUsYUFBT2QsY0FBY2dCLGNBQWQsQ0FBNkJILFNBQTdCLEVBQXdDQyxVQUF4QyxDQUFQO0FBQTZEOzs7O0VBbkIzRWQsYTs7QUFzQnhCaUIsT0FBT0MsT0FBUCxHQUFpQkwsU0FBakIiLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIFJvb2YgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9yb29mJyksXG4gICAgICBCYWNrUGFuZWwgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9wYW5lbC9iYWNrJyksXG4gICAgICBGcm9udFBhbmVsID0gcmVxdWlyZSgnLi9jb250YWluZXIvcGFuZWwvZnJvbnQnKSxcbiAgICAgIFNpZGVQYW5lbEEgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9wYW5lbC9zaWRlQScpLFxuICAgICAgU2lkZVBhbmVsQiA9IHJlcXVpcmUoJy4vY29udGFpbmVyL3BhbmVsL3NpZGVCJyksXG4gICAgICBUb3BSYWlscyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL3RvcFJhaWxzJyksXG4gICAgICBCb3R0b21SYWlscyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL2JvdHRvbVJhaWxzJyksXG4gICAgICBDb3JuZXJQb3N0cyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL2Nvcm5lclBvc3RzJyksXG4gICAgICBDb3JuZXJGaXR0aW5ncyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL2Nvcm5lckZpdHRpbmdzJyk7XG5cbmNvbnN0IG92ZXJhbGxXaWR0aCA9IDgsXG4gICAgICBvdmVyYWxsSGVpZ2h0ID0gOS41O1xuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFJvb2YgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxGcm9udFBhbmVsIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz4sXG4gICAgICA8QmFja1BhbmVsIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz4sXG4gICAgICA8U2lkZVBhbmVsQSBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IC8+LFxuICAgICAgPFNpZGVQYW5lbEIgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxUb3BSYWlscyBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IC8+LFxuICAgICAgPEJvdHRvbVJhaWxzIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz4sXG4gICAgICA8Q29ybmVyUG9zdHMgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxDb3JuZXJGaXR0aW5ncyBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb250YWluZXIsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFpbmVyO1xuIl19