'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(updateHandler, pan, tilt) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.updateHandler = updateHandler;

    _this.pan = pan;

    _this.tilt = tilt;
    return _this;
  }

  _createClass(Camera, [{
    key: 'getPan',
    value: function getPan() {
      return this.pan;
    }
  }, {
    key: 'getTilt',
    value: function getTilt() {
      return this.tilt;
    }
  }, {
    key: 'getUpdateHandler',
    value: function getUpdateHandler() {
      return this.updateHandler;
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(updateHandler) {
      this.updateHandler = updateHandler;
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(canvas) {
      this.update(canvas);
    }
  }, {
    key: 'userInputUpdate',
    value: function userInputUpdate(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas) {
      if (false) {
        ///
      } else if (shiftKeyDown) {
        this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, this.tilt);
      } else if (mouseWheelDelta !== 0) {
        this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, this.tilt);
      } else {
        this.tilt.updateAngles(relativeMouseCoordinates);
      }

      this.update(canvas);
    }
  }, {
    key: 'render',
    value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      ///
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas) {
      ///
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var onUpdate = this.onUpdate.bind(this),
          forceUpdate = this.forceUpdate.bind(this),
          userInputUpdate = this.userInputUpdate.bind(this);

      return {
        onUpdate: onUpdate,
        forceUpdate: forceUpdate,
        userInputUpdate: userInputUpdate
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var updateHandler = null,
          ///
      camera = Element.fromProperties.apply(Element, [Class, properties, updateHandler].concat(remainingArguments));

      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkNhbWVyYSIsInVwZGF0ZUhhbmRsZXIiLCJwYW4iLCJ0aWx0IiwiY2FudmFzIiwidXBkYXRlIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VXaGVlbERlbHRhIiwic2hpZnRLZXlEb3duIiwidXBkYXRlT2Zmc2V0cyIsInVwZGF0ZUFuZ2xlcyIsIm9mZnNldHNNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwib25VcGRhdGUiLCJiaW5kIiwiZm9yY2VVcGRhdGUiLCJ1c2VySW5wdXRVcGRhdGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJjYW1lcmEiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCOztJQUVNQyxNOzs7QUFDSixrQkFBWUMsYUFBWixFQUEyQkMsR0FBM0IsRUFBZ0NDLElBQWhDLEVBQXNDO0FBQUE7O0FBQUE7O0FBR3BDLFVBQUtGLGFBQUwsR0FBcUJBLGFBQXJCOztBQUVBLFVBQUtDLEdBQUwsR0FBV0EsR0FBWDs7QUFFQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFQb0M7QUFRckM7Ozs7NkJBRVE7QUFDUCxhQUFPLEtBQUtELEdBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLRixhQUFaO0FBQ0Q7Ozs2QkFFUUEsYSxFQUFlO0FBQ3RCLFdBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0Q7OztnQ0FFV0csTSxFQUFRO0FBQ2xCLFdBQUtDLE1BQUwsQ0FBWUQsTUFBWjtBQUNEOzs7b0NBRWVFLHdCLEVBQTBCQyxlLEVBQWlCQyxZLEVBQWNKLE0sRUFBUTtBQUMvRSxVQUFJLEtBQUosRUFBVztBQUNUO0FBQ0QsT0FGRCxNQUVPLElBQUlJLFlBQUosRUFBa0I7QUFDdkIsYUFBS04sR0FBTCxDQUFTTyxhQUFULENBQXVCSCx3QkFBdkIsRUFBaURDLGVBQWpELEVBQWtFLEtBQUtKLElBQXZFO0FBQ0QsT0FGTSxNQUVBLElBQUlJLG9CQUFvQixDQUF4QixFQUEyQjtBQUNoQyxhQUFLTCxHQUFMLENBQVNPLGFBQVQsQ0FBdUJILHdCQUF2QixFQUFpREMsZUFBakQsRUFBa0UsS0FBS0osSUFBdkU7QUFDRCxPQUZNLE1BRUE7QUFDTCxhQUFLQSxJQUFMLENBQVVPLFlBQVYsQ0FBdUJKLHdCQUF2QjtBQUNEOztBQUVELFdBQUtELE1BQUwsQ0FBWUQsTUFBWjtBQUNEOzs7MkJBRU1BLE0sRUFBUU8sYSxFQUFlQyxhLEVBQWVDLGMsRUFBZ0JDLGUsRUFBaUJDLGdCLEVBQWtCO0FBQzlGO0FBQ0Q7OzsrQkFFVVgsTSxFQUFRO0FBQ2pCO0FBQ0Q7OztvQ0FFZTtBQUNmLFVBQU1ZLFdBQVcsS0FBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWpCO0FBQUEsVUFDR0MsY0FBYyxLQUFLQSxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQURqQjtBQUFBLFVBRU9FLGtCQUFrQixLQUFLQSxlQUFMLENBQXFCRixJQUFyQixDQUEwQixJQUExQixDQUZ6Qjs7QUFJQyxhQUFRO0FBQ05ELDBCQURNO0FBRU5FLGdDQUZNO0FBR05DO0FBSE0sT0FBUjtBQUtEOzs7bUNBRXFCQyxLLEVBQU9DLFUsRUFBbUM7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQzlELFVBQU1yQixnQkFBZ0IsSUFBdEI7QUFBQSxVQUE0QjtBQUN0QnNCLGVBQVN6QixRQUFRMEIsY0FBUixpQkFBdUJKLEtBQXZCLEVBQThCQyxVQUE5QixFQUEwQ3BCLGFBQTFDLFNBQTREcUIsa0JBQTVELEVBRGY7O0FBR0EsYUFBT0MsTUFBUDtBQUNEOzs7O0VBdEVrQnpCLE87O0FBeUVyQjJCLE9BQU9DLE9BQVAsR0FBaUIxQixNQUFqQiIsImZpbGUiOiJjYW1lcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih1cGRhdGVIYW5kbGVyLCBwYW4sIHRpbHQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy51cGRhdGVIYW5kbGVyID0gdXBkYXRlSGFuZGxlcjtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgfVxuXG4gIGdldFBhbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW47XG4gIH1cblxuICBnZXRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbHQ7XG4gIH1cblxuICBnZXRVcGRhdGVIYW5kbGVyKCkge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZUhhbmRsZXI7XG4gIH1cblxuICBvblVwZGF0ZSh1cGRhdGVIYW5kbGVyKSB7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVyID0gdXBkYXRlSGFuZGxlcjtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKGNhbnZhcykge1xuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICB1c2VySW5wdXRVcGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgY2FudmFzKSB7XG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGhpcy50aWx0KTtcbiAgICB9IGVsc2UgaWYgKG1vdXNlV2hlZWxEZWx0YSAhPT0gMCkge1xuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGhpcy50aWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgLy8vXG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIC8vL1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBvblVwZGF0ZSA9IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSxcblx0XHRcdFx0ICBmb3JjZVVwZGF0ZSA9IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKSxcbiAgICAgICAgICB1c2VySW5wdXRVcGRhdGUgPSB0aGlzLnVzZXJJbnB1dFVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBvblVwZGF0ZSxcbiAgICAgIGZvcmNlVXBkYXRlLFxuICAgICAgdXNlcklucHV0VXBkYXRlXG4gICAgfSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdXBkYXRlSGFuZGxlciA9IG51bGwsIC8vL1xuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHVwZGF0ZUhhbmRsZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIl19