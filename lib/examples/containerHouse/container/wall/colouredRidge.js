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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvd2FsbC9jb2xvdXJlZFJpZGdlLmpzIl0sIm5hbWVzIjpbIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsInJlcXVpcmUiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiQ29sb3VyZWRSaWRnZSIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCQyxRQUFRLHFDQUFSLENBQTlCOztBQUVBLElBQU1DLDRCQUE0QixDQUVoQyxHQUZnQyxFQUUzQixHQUYyQixFQUV0QixHQUZzQixFQUdoQyxHQUhnQyxFQUczQixHQUgyQixFQUd0QixHQUhzQixFQUloQyxHQUpnQyxFQUkzQixHQUoyQixFQUl0QixHQUpzQixFQUtoQyxHQUxnQyxFQUszQixHQUwyQixFQUt0QixHQUxzQixFQU9oQyxHQVBnQyxFQU8zQixHQVAyQixFQU90QixHQVBzQixFQVFoQyxHQVJnQyxFQVEzQixHQVIyQixFQVF0QixHQVJzQixFQVNoQyxHQVRnQyxFQVMzQixHQVQyQixFQVN0QixHQVRzQixFQVVoQyxHQVZnQyxFQVUzQixHQVYyQixFQVV0QixHQVZzQixFQVloQyxHQVpnQyxFQVkzQixHQVoyQixFQVl0QixHQVpzQixFQWFoQyxHQWJnQyxFQWEzQixHQWIyQixFQWF0QixHQWJzQixFQWNoQyxHQWRnQyxFQWMzQixHQWQyQixFQWN0QixHQWRzQixFQWVoQyxHQWZnQyxFQWUzQixHQWYyQixFQWV0QixHQWZzQixFQWlCaEMsR0FqQmdDLEVBaUIzQixHQWpCMkIsRUFpQnRCLEdBakJzQixFQWtCaEMsR0FsQmdDLEVBa0IzQixHQWxCMkIsRUFrQnRCLEdBbEJzQixFQW1CaEMsR0FuQmdDLEVBbUIzQixHQW5CMkIsRUFtQnRCLEdBbkJzQixFQW9CaEMsR0FwQmdDLEVBb0IzQixHQXBCMkIsRUFvQnRCLEdBcEJzQixFQXNCaEMsR0F0QmdDLEVBc0IzQixHQXRCMkIsRUFzQnRCLEdBdEJzQixFQXVCaEMsR0F2QmdDLEVBdUIzQixHQXZCMkIsRUF1QnRCLEdBdkJzQixFQXdCaEMsR0F4QmdDLEVBd0IzQixHQXhCMkIsRUF3QnRCLEdBeEJzQixFQXlCaEMsR0F6QmdDLEVBeUIzQixHQXpCMkIsRUF5QnRCLEdBekJzQixDQUFsQzs7SUE2Qk1DLGE7Ozs7Ozs7Ozs7O21EQUMyQjtBQUM3QixhQUFPRCx5QkFBUDtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFBRSxhQUFPSixzQkFBc0JLLGNBQXRCLENBQXFDRixhQUFyQyxFQUFvREMsVUFBcEQsQ0FBUDtBQUF5RTs7OztFQUxuRkoscUI7O0FBUTVCTSxPQUFPQyxPQUFQLEdBQWlCSixhQUFqQiIsImZpbGUiOiJjb2xvdXJlZFJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb2xvdXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZCcpO1xuXG5jb25zdCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhID0gW1xuXG4gIDAuMCwgMC4wLCAwLjAsXG4gIDAuNSwgMC4wLCAwLjAsXG4gIDAuNSwgMS4wLCAwLjAsXG4gIDAuMCwgMS4wLCAwLjAsXG5cbiAgMC41LCAwLjAsIDAuMCxcbiAgMS41LCAwLjAsIDEuMCxcbiAgMS41LCAxLjAsIDEuMCxcbiAgMC41LCAxLjAsIDAuMCxcblxuICAxLjUsIDAuMCwgMS4wLFxuICAyLjUsIDAuMCwgMS4wLFxuICAyLjUsIDEuMCwgMS4wLFxuICAxLjUsIDEuMCwgMS4wLFxuXG4gIDIuNSwgMC4wLCAxLjAsXG4gIDMuNSwgMC4wLCAwLjAsXG4gIDMuNSwgMS4wLCAwLjAsXG4gIDIuNSwgMS4wLCAxLjAsXG5cbiAgMy41LCAwLjAsIDAuMCxcbiAgNC4wLCAwLjAsIDAuMCxcbiAgNC4wLCAxLjAsIDAuMCxcbiAgMy41LCAxLjAsIDAuMCxcblxuXTtcblxuY2xhc3MgQ29sb3VyZWRSaWRnZSBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIGdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEoKSB7XG4gICAgcmV0dXJuIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkUmlkZ2UsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRSaWRnZTtcbiJdfQ==