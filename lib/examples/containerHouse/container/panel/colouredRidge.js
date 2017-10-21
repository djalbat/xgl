'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColouredCanvasElement = require('../../../../element/canvas/coloured');

var initialVertexPositionData = [0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.5, 1.0, 0.0, 0.0, 1.0, 0.0, 0.5, 0.0, 0.0, 1.5, 0.0, 1.0, 1.5, 1.0, 1.0, 0.5, 1.0, 0.0, 1.5, 0.0, 1.0, 2.5, 0.0, 1.0, 2.5, 1.0, 1.0, 1.5, 1.0, 1.0, 2.5, 0.0, 1.0, 3.5, 0.0, 0.0, 3.5, 1.0, 0.0, 2.5, 1.0, 1.0, 3.5, 0.0, 0.0, 4.0, 0.0, 0.0, 4.0, 1.0, 0.0, 3.5, 1.0, 0.0];

var ColouredRidge = function (_ColouredCanvasElemen) {
  _inherits(ColouredRidge, _ColouredCanvasElemen);

  function ColouredRidge() {
    _classCallCheck(this, ColouredRidge);

    return _possibleConstructorReturn(this, (ColouredRidge.__proto__ || Object.getPrototypeOf(ColouredRidge)).apply(this, arguments));
  }

  _createClass(ColouredRidge, [{
    key: 'getInitialVertexPositionData',
    value: function getInitialVertexPositionData() {
      return initialVertexPositionData;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColouredCanvasElement.fromProperties(ColouredRidge, properties);
    }
  }]);

  return ColouredRidge;
}(ColouredCanvasElement);

module.exports = ColouredRidge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvcGFuZWwvY29sb3VyZWRSaWRnZS5qcyJdLCJuYW1lcyI6WyJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJyZXF1aXJlIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIkNvbG91cmVkUmlkZ2UiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLHdCQUF3QkMsUUFBUSxxQ0FBUixDQUE5Qjs7QUFFQSxJQUFNQyw0QkFBNEIsQ0FFaEMsR0FGZ0MsRUFFM0IsR0FGMkIsRUFFdEIsR0FGc0IsRUFHaEMsR0FIZ0MsRUFHM0IsR0FIMkIsRUFHdEIsR0FIc0IsRUFJaEMsR0FKZ0MsRUFJM0IsR0FKMkIsRUFJdEIsR0FKc0IsRUFLaEMsR0FMZ0MsRUFLM0IsR0FMMkIsRUFLdEIsR0FMc0IsRUFPaEMsR0FQZ0MsRUFPM0IsR0FQMkIsRUFPdEIsR0FQc0IsRUFRaEMsR0FSZ0MsRUFRM0IsR0FSMkIsRUFRdEIsR0FSc0IsRUFTaEMsR0FUZ0MsRUFTM0IsR0FUMkIsRUFTdEIsR0FUc0IsRUFVaEMsR0FWZ0MsRUFVM0IsR0FWMkIsRUFVdEIsR0FWc0IsRUFZaEMsR0FaZ0MsRUFZM0IsR0FaMkIsRUFZdEIsR0Fac0IsRUFhaEMsR0FiZ0MsRUFhM0IsR0FiMkIsRUFhdEIsR0Fic0IsRUFjaEMsR0FkZ0MsRUFjM0IsR0FkMkIsRUFjdEIsR0Fkc0IsRUFlaEMsR0FmZ0MsRUFlM0IsR0FmMkIsRUFldEIsR0Fmc0IsRUFpQmhDLEdBakJnQyxFQWlCM0IsR0FqQjJCLEVBaUJ0QixHQWpCc0IsRUFrQmhDLEdBbEJnQyxFQWtCM0IsR0FsQjJCLEVBa0J0QixHQWxCc0IsRUFtQmhDLEdBbkJnQyxFQW1CM0IsR0FuQjJCLEVBbUJ0QixHQW5Cc0IsRUFvQmhDLEdBcEJnQyxFQW9CM0IsR0FwQjJCLEVBb0J0QixHQXBCc0IsRUFzQmhDLEdBdEJnQyxFQXNCM0IsR0F0QjJCLEVBc0J0QixHQXRCc0IsRUF1QmhDLEdBdkJnQyxFQXVCM0IsR0F2QjJCLEVBdUJ0QixHQXZCc0IsRUF3QmhDLEdBeEJnQyxFQXdCM0IsR0F4QjJCLEVBd0J0QixHQXhCc0IsRUF5QmhDLEdBekJnQyxFQXlCM0IsR0F6QjJCLEVBeUJ0QixHQXpCc0IsQ0FBbEM7O0lBNkJNQyxhOzs7Ozs7Ozs7OzttREFDMkI7QUFDN0IsYUFBT0QseUJBQVA7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQUUsYUFBT0osc0JBQXNCSyxjQUF0QixDQUFxQ0YsYUFBckMsRUFBb0RDLFVBQXBELENBQVA7QUFBeUU7Ozs7RUFMbkZKLHFCOztBQVE1Qk0sT0FBT0MsT0FBUCxHQUFpQkosYUFBakIiLCJmaWxlIjoiY29sb3VyZWRSaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyZWRDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vZWxlbWVudC9jYW52YXMvY29sb3VyZWQnKTtcblxuY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSA9IFtcblxuICAwLjAsIDAuMCwgMC4wLFxuICAwLjUsIDAuMCwgMC4wLFxuICAwLjUsIDEuMCwgMC4wLFxuICAwLjAsIDEuMCwgMC4wLFxuXG4gIDAuNSwgMC4wLCAwLjAsXG4gIDEuNSwgMC4wLCAxLjAsXG4gIDEuNSwgMS4wLCAxLjAsXG4gIDAuNSwgMS4wLCAwLjAsXG5cbiAgMS41LCAwLjAsIDEuMCxcbiAgMi41LCAwLjAsIDEuMCxcbiAgMi41LCAxLjAsIDEuMCxcbiAgMS41LCAxLjAsIDEuMCxcblxuICAyLjUsIDAuMCwgMS4wLFxuICAzLjUsIDAuMCwgMC4wLFxuICAzLjUsIDEuMCwgMC4wLFxuICAyLjUsIDEuMCwgMS4wLFxuXG4gIDMuNSwgMC4wLCAwLjAsXG4gIDQuMCwgMC4wLCAwLjAsXG4gIDQuMCwgMS4wLCAwLjAsXG4gIDMuNSwgMS4wLCAwLjAsXG5cbl07XG5cbmNsYXNzIENvbG91cmVkUmlkZ2UgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKCkge1xuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFJpZGdlLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkUmlkZ2U7XG4iXX0=