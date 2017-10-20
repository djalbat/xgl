'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    Roof = require('./container/roof'),
    SideWall = require('./container/sideWall'),
    BackWall = require('./container/backWall'),
    FrontWall = require('./container/frontWall'),
    Underside = require('./container/underside');

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


      return [React.createElement(Roof, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(Underside, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(FrontWall, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(BackWall, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(SideWall, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(SideWall, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour, position: [overallWidth, 0, length], rotations: [0, 180, 0] })];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIuanMiXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsInJlcXVpcmUiLCJSb29mIiwiU2lkZVdhbGwiLCJCYWNrV2FsbCIsIkZyb250V2FsbCIsIlVuZGVyc2lkZSIsIm92ZXJhbGxIZWlnaHQiLCJvdmVyYWxsV2lkdGgiLCJjb2xvdXIiLCJDb250YWluZXIiLCJwcm9wZXJ0aWVzIiwibGVuZ3RoIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsa0JBQVIsQ0FEYjtBQUFBLElBRU1FLFdBQVdGLFFBQVEsc0JBQVIsQ0FGakI7QUFBQSxJQUdNRyxXQUFXSCxRQUFRLHNCQUFSLENBSGpCO0FBQUEsSUFJTUksWUFBWUosUUFBUSx1QkFBUixDQUpsQjtBQUFBLElBS01LLFlBQVlMLFFBQVEsdUJBQVIsQ0FMbEI7O0FBT0EsSUFBTU0sZ0JBQWdCLEdBQXRCO0FBQUEsSUFDTUMsZUFBZSxDQURyQjtBQUFBLElBRU1DLFNBQVMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBRmY7O0lBSU1DLFM7Ozs7Ozs7Ozs7O2tDQUNVQyxVLEVBQVk7QUFBQSxVQUNoQkMsTUFEZ0IsR0FDTEQsVUFESyxDQUNoQkMsTUFEZ0I7OztBQUd4QixhQUFRLENBRU4sb0JBQUMsSUFBRCxJQUFNLFFBQVFBLE1BQWQsRUFBc0IsY0FBY0osWUFBcEMsRUFBa0QsZUFBZUQsYUFBakUsRUFBZ0YsUUFBUUUsTUFBeEYsR0FGTSxFQUdOLG9CQUFDLFNBQUQsSUFBVyxRQUFRRyxNQUFuQixFQUEyQixjQUFjSixZQUF6QyxFQUF1RCxlQUFlRCxhQUF0RSxFQUFxRixRQUFRRSxNQUE3RixHQUhNLEVBSU4sb0JBQUMsU0FBRCxJQUFXLFFBQVFHLE1BQW5CLEVBQTJCLGNBQWNKLFlBQXpDLEVBQXVELGVBQWVELGFBQXRFLEVBQXFGLFFBQVFFLE1BQTdGLEdBSk0sRUFLTixvQkFBQyxRQUFELElBQVUsUUFBUUcsTUFBbEIsRUFBMEIsY0FBY0osWUFBeEMsRUFBc0QsZUFBZUQsYUFBckUsRUFBb0YsUUFBUUUsTUFBNUYsR0FMTSxFQU1OLG9CQUFDLFFBQUQsSUFBVSxRQUFRRyxNQUFsQixFQUEwQixjQUFjSixZQUF4QyxFQUFzRCxlQUFlRCxhQUFyRSxFQUFvRixRQUFRRSxNQUE1RixHQU5NLEVBT04sb0JBQUMsUUFBRCxJQUFVLFFBQVFHLE1BQWxCLEVBQTBCLGNBQWNKLFlBQXhDLEVBQXNELGVBQWVELGFBQXJFLEVBQW9GLFFBQVFFLE1BQTVGLEVBQW9HLFVBQVUsQ0FBRUQsWUFBRixFQUFnQixDQUFoQixFQUFtQkksTUFBbkIsQ0FBOUcsRUFBMkksV0FBVyxDQUFFLENBQUYsRUFBSyxHQUFMLEVBQVUsQ0FBVixDQUF0SixHQVBNLENBQVI7QUFVRDs7O21DQUVxQkQsVSxFQUFZO0FBQUUsYUFBT1gsY0FBY2EsY0FBZCxDQUE2QkgsU0FBN0IsRUFBd0NDLFVBQXhDLENBQVA7QUFBNkQ7Ozs7RUFoQjNFWCxhOztBQW1CeEJjLE9BQU9DLE9BQVAsR0FBaUJMLFNBQWpCIiwiZmlsZSI6ImNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBSb29mID0gcmVxdWlyZSgnLi9jb250YWluZXIvcm9vZicpLFxuICAgICAgU2lkZVdhbGwgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9zaWRlV2FsbCcpLFxuICAgICAgQmFja1dhbGwgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9iYWNrV2FsbCcpLFxuICAgICAgRnJvbnRXYWxsID0gcmVxdWlyZSgnLi9jb250YWluZXIvZnJvbnRXYWxsJyksXG4gICAgICBVbmRlcnNpZGUgPSByZXF1aXJlKCcuL2NvbnRhaW5lci91bmRlcnNpZGUnKTtcblxuY29uc3Qgb3ZlcmFsbEhlaWdodCA9IDkuNSxcbiAgICAgIG92ZXJhbGxXaWR0aCA9IDgsXG4gICAgICBjb2xvdXIgPSBbIDEsIDEsIDEsIDEgXTtcblxuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxSb29mIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gY29sb3VyPXtjb2xvdXJ9IC8+LFxuICAgICAgPFVuZGVyc2lkZSBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IGNvbG91cj17Y29sb3VyfSAvPixcbiAgICAgIDxGcm9udFdhbGwgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSBjb2xvdXI9e2NvbG91cn0gLz4sXG4gICAgICA8QmFja1dhbGwgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSBjb2xvdXI9e2NvbG91cn0gLz4sXG4gICAgICA8U2lkZVdhbGwgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSBjb2xvdXI9e2NvbG91cn0gLz4sXG4gICAgICA8U2lkZVdhbGwgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSBjb2xvdXI9e2NvbG91cn0gcG9zaXRpb249e1sgb3ZlcmFsbFdpZHRoLCAwLCBsZW5ndGggXX0gcm90YXRpb25zPXtbIDAsIDE4MCwgMCBdfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29udGFpbmVyLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRhaW5lcjtcbiJdfQ==