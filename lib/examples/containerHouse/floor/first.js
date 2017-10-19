'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    FortyFootContainer = require('../container/fortyFoot'),
    TwentyFootContainer = require('../container/twentyFoot');

var FirstFloor = function (_CanvasElement) {
  _inherits(FirstFloor, _CanvasElement);

  function FirstFloor() {
    _classCallCheck(this, FirstFloor);

    return _possibleConstructorReturn(this, (FirstFloor.__proto__ || Object.getPrototypeOf(FirstFloor)).apply(this, arguments));
  }

  _createClass(FirstFloor, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(FortyFootContainer, { position: [8, 0, 32], rotations: [0, 90, 0] }), React.createElement(FortyFootContainer, { position: [8, 0, 24], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [8, 0, 16], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [8, 0, 8], rotations: [0, 90, 0] })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(FirstFloor, properties);
    }
  }]);

  return FirstFloor;
}(CanvasElement);

module.exports = FirstFloor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mbG9vci9maXJzdC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsIkZvcnR5Rm9vdENvbnRhaW5lciIsIlR3ZW50eUZvb3RDb250YWluZXIiLCJGaXJzdEZsb29yIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEseUJBQVIsQ0FBdEI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSxzQkFBc0JGLFFBQVEseUJBQVIsQ0FGNUI7O0lBSU1HLFU7Ozs7Ozs7Ozs7O29DQUNZO0FBQ2QsYUFBUSxDQUVOLG9CQUFDLGtCQUFELElBQW9CLFVBQVUsQ0FBRyxDQUFILEVBQU0sQ0FBTixFQUFTLEVBQVQsQ0FBOUIsRUFBNkMsV0FBVyxDQUFFLENBQUYsRUFBSyxFQUFMLEVBQVMsQ0FBVCxDQUF4RCxHQUZNLEVBR04sb0JBQUMsa0JBQUQsSUFBb0IsVUFBVSxDQUFHLENBQUgsRUFBTSxDQUFOLEVBQVMsRUFBVCxDQUE5QixFQUE2QyxXQUFXLENBQUUsQ0FBRixFQUFLLEVBQUwsRUFBUyxDQUFULENBQXhELEdBSE0sRUFJTixvQkFBQyxtQkFBRCxJQUFxQixVQUFVLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxFQUFSLENBQS9CLEVBQTZDLFdBQVcsQ0FBRSxDQUFGLEVBQUssRUFBTCxFQUFTLENBQVQsQ0FBeEQsR0FKTSxFQUtOLG9CQUFDLG1CQUFELElBQXFCLFVBQVUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFTLENBQVQsQ0FBL0IsRUFBNkMsV0FBVyxDQUFFLENBQUYsRUFBSyxFQUFMLEVBQVMsQ0FBVCxDQUF4RCxHQUxNLENBQVI7QUFRRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT0wsY0FBY00sY0FBZCxDQUE2QkYsVUFBN0IsRUFBeUNDLFVBQXpDLENBQVA7QUFBOEQ7Ozs7RUFaM0VMLGE7O0FBZXpCTyxPQUFPQyxPQUFQLEdBQWlCSixVQUFqQiIsImZpbGUiOiJmaXJzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBGb3J0eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvZm9ydHlGb290JyksXG4gICAgICBUd2VudHlGb290Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyL3R3ZW50eUZvb3QnKTtcblxuY2xhc3MgRmlyc3RGbG9vciBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Rm9ydHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbICA4LCAwLCAzMiBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG4gICAgICA8Rm9ydHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbICA4LCAwLCAyNCBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG4gICAgICA8VHdlbnR5Rm9vdENvbnRhaW5lciBwb3NpdGlvbj17WyA4LCAwLCAxNiBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG4gICAgICA8VHdlbnR5Rm9vdENvbnRhaW5lciBwb3NpdGlvbj17WyA4LCAwLCAgOCBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZpcnN0Rmxvb3IsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlyc3RGbG9vcjtcbiJdfQ==