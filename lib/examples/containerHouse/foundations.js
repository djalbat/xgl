'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    ConcreteSlab = require('./foundations/concreteSlab');

var Foundations = function (_CanvasElement) {
  _inherits(Foundations, _CanvasElement);

  function Foundations() {
    _classCallCheck(this, Foundations);

    return _possibleConstructorReturn(this, (Foundations.__proto__ || Object.getPrototypeOf(Foundations)).apply(this, arguments));
  }

  _createClass(Foundations, [{
    key: 'getChildElements',
    value: function getChildElements() {
      return [React.createElement(ConcreteSlab, { position: [-0.5, -1, -0.5], width: 12.5, height: 1, depth: 33 }), React.createElement(ConcreteSlab, { position: [24, -1, -0.5], width: 24.4, height: 1, depth: 33 })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Foundations, properties);
    }
  }]);

  return Foundations;
}(CanvasElement);

module.exports = Foundations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mb3VuZGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsIkNvbmNyZXRlU2xhYiIsIkZvdW5kYXRpb25zIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsc0JBQVIsQ0FBdEI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLDRCQUFSLENBRHJCOztJQUdNRSxXOzs7Ozs7Ozs7Ozt1Q0FDZTtBQUNqQixhQUFRLENBRU4sb0JBQUMsWUFBRCxJQUFjLFVBQVUsQ0FBRSxDQUFDLEdBQUgsRUFBUSxDQUFDLENBQVQsRUFBWSxDQUFDLEdBQWIsQ0FBeEIsRUFBNEMsT0FBTyxJQUFuRCxFQUF5RCxRQUFRLENBQWpFLEVBQW9FLE9BQU8sRUFBM0UsR0FGTSxFQUdOLG9CQUFDLFlBQUQsSUFBYyxVQUFVLENBQUksRUFBSixFQUFRLENBQUMsQ0FBVCxFQUFZLENBQUMsR0FBYixDQUF4QixFQUE0QyxPQUFPLElBQW5ELEVBQXlELFFBQVEsQ0FBakUsRUFBb0UsT0FBTyxFQUEzRSxHQUhNLENBQVI7QUFNRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT0osY0FBY0ssY0FBZCxDQUE2QkYsV0FBN0IsRUFBMENDLFVBQTFDLENBQVA7QUFBK0Q7Ozs7RUFWM0VKLGE7O0FBYTFCTSxPQUFPQyxPQUFQLEdBQWlCSixXQUFqQiIsImZpbGUiOiJmb3VuZGF0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBDb25jcmV0ZVNsYWIgPSByZXF1aXJlKCcuL2ZvdW5kYXRpb25zL2NvbmNyZXRlU2xhYicpO1xuXG5jbGFzcyBGb3VuZGF0aW9ucyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29uY3JldGVTbGFiIHBvc2l0aW9uPXtbIC0wLjUsIC0xLCAtMC41IF19IHdpZHRoPXsxMi41fSBoZWlnaHQ9ezF9IGRlcHRoPXszM30gLz4sXG4gICAgICA8Q29uY3JldGVTbGFiIHBvc2l0aW9uPXtbICAgMjQsIC0xLCAtMC41IF19IHdpZHRoPXsyNC40fSBoZWlnaHQ9ezF9IGRlcHRoPXszM30gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZvdW5kYXRpb25zLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvdW5kYXRpb25zO1xuIl19