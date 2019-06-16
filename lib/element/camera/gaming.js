'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Camera = require('../camera');

var GamingCamera = function (_Camera) {
  _inherits(GamingCamera, _Camera);

  function GamingCamera() {
    _classCallCheck(this, GamingCamera);

    return _possibleConstructorReturn(this, (GamingCamera.__proto__ || Object.getPrototypeOf(GamingCamera)).apply(this, arguments));
  }

  _createClass(GamingCamera, [{
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {}
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates, mouseDown, canvas) {}
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates, mouseDown, canvas) {}
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {}
  }, {
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(delta, canvas) {}
  }, {
    key: 'update',
    value: function update(canvas) {
      ///
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Camera.fromProperties(GamingCamera, properties);
    }
  }]);

  return GamingCamera;
}(Camera);

module.exports = GamingCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwibmFtZXMiOlsiQ2FtZXJhIiwicmVxdWlyZSIsIkdhbWluZ0NhbWVyYSIsInNoaWZ0S2V5RG93biIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZURvd24iLCJjYW52YXMiLCJkZWx0YSIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7O0lBRU1DLFk7Ozs7Ozs7Ozs7O29DQUNZQyxZLEVBQWMsQ0FFN0I7OzttQ0FFY0MsZ0IsRUFBa0JDLFMsRUFBV0MsTSxFQUFRLENBRW5EOzs7cUNBRWdCRixnQixFQUFrQkMsUyxFQUFXQyxNLEVBQVEsQ0FFckQ7OztxQ0FFZ0JGLGdCLEVBQWtCQyxTLEVBQVdDLE0sRUFBUSxDQUVyRDs7O3NDQUVpQkMsSyxFQUFPRCxNLEVBQVEsQ0FFaEM7OzsyQkFFTUEsTSxFQUFRO0FBQ2I7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQUUsYUFBT1IsT0FBT1MsY0FBUCxDQUFzQlAsWUFBdEIsRUFBb0NNLFVBQXBDLENBQVA7QUFBeUQ7Ozs7RUF6QnBFUixNOztBQTRCM0JVLE9BQU9DLE9BQVAsR0FBaUJULFlBQWpCIiwiZmlsZSI6ImdhbWluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyk7XG5cbmNsYXNzIEdhbWluZ0NhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcblxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcblxuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuXG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG5cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhLCBjYW52YXMpIHtcblxuICB9XG5cbiAgdXBkYXRlKGNhbnZhcykge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtaW5nQ2FtZXJhO1xuIl19