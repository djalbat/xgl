'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    KeyEvents = require('../miscellaneous/keyEvents'),
    MouseEvents = require('../miscellaneous/mouseEvents');

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(keyEvents, mouseEvents, updateHandler, pan, tilt) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.keyEvents = keyEvents;
    _this.mouseEvents = mouseEvents;
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
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      if (shiftKeyDown) {
        this.pan.resetPreviousMouseCoordinates();
      } else {
        this.tilt.resetPreviousMouseCoordinates();

        this.tilt.resetPreviousAngles();
      }
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
      this.tilt.resetPreviousAngles();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
      this.pan.resetPreviousMouseCoordinates();

      this.tilt.resetPreviousMouseCoordinates();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown();

      this.pan.resetPreviousMouseCoordinates();

      this.pan.setMouseCoordinates(mouseCoordinates);

      this.tilt.setMouseCoordinates(mouseCoordinates);

      if (mouseDown) {
        if (shiftKeyDown) {
          this.pan.updateXYOffset(this.tilt);
        } else {
          this.tilt.updateAngles();
        }

        this.update(canvas);
      }
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(canvas) {
      this.update(canvas);
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(updateHandler) {
      this.updateHandler = updateHandler;
    }
  }, {
    key: 'update',
    value: function update(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      this.updateHandler(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }, {
    key: 'render',
    value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      ///
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas) {
      var keyEvents = KeyEvents.fromNothing(canvas),
          mouseEvents = MouseEvents.fromNothing(canvas),
          shiftKeyHandler = this.shiftKeyHandler.bind(this),
          mouseUpHandler = this.mouseUpHandler.bind(this),
          mouseDownHandler = this.mouseDownHandler.bind(this),
          mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);

      keyEvents.addShiftKeyHandler(shiftKeyHandler);

      mouseEvents.addMouseUpHandler(mouseUpHandler);
      mouseEvents.addMouseDownHandler(mouseDownHandler);
      mouseEvents.addMouseMoveHandler(mouseMoveHandler);
      mouseEvents.addMouseWheelHandler(mouseWheelHandler);

      this.keyEvents = keyEvents;

      this.mouseEvents = mouseEvents;
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var onUpdate = this.onUpdate.bind(this),
          forceUpdate = this.forceUpdate.bind(this);

      return {
        onUpdate: onUpdate,
        forceUpdate: forceUpdate
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var keyEvents = null,
          ///
      mouseEvents = null,
          ///
      updateHandler = null,
          ///
      camera = Element.fromProperties.apply(Element, [Class, properties, keyEvents, mouseEvents, updateHandler].concat(remainingArguments));

      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIktleUV2ZW50cyIsIk1vdXNlRXZlbnRzIiwiQ2FtZXJhIiwia2V5RXZlbnRzIiwibW91c2VFdmVudHMiLCJ1cGRhdGVIYW5kbGVyIiwicGFuIiwidGlsdCIsInNoaWZ0S2V5RG93biIsInJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwicmVzZXRQcmV2aW91c0FuZ2xlcyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZURvd24iLCJjYW52YXMiLCJpc1NoaWZ0S2V5RG93biIsInNldE1vdXNlQ29vcmRpbmF0ZXMiLCJ1cGRhdGVYWU9mZnNldCIsInVwZGF0ZUFuZ2xlcyIsInVwZGF0ZSIsIm9mZnNldHNNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4IiwiZnJvbU5vdGhpbmciLCJzaGlmdEtleUhhbmRsZXIiLCJiaW5kIiwibW91c2VVcEhhbmRsZXIiLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlV2hlZWxIYW5kbGVyIiwiYWRkU2hpZnRLZXlIYW5kbGVyIiwiYWRkTW91c2VVcEhhbmRsZXIiLCJhZGRNb3VzZURvd25IYW5kbGVyIiwiYWRkTW91c2VNb3ZlSGFuZGxlciIsImFkZE1vdXNlV2hlZWxIYW5kbGVyIiwib25VcGRhdGUiLCJmb3JjZVVwZGF0ZSIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLDRCQUFSLENBRGxCO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSw4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QUFaLENBQThCTCxjQUE5QjtBQUNBdkIsa0JBQVk2QixtQkFBWixDQUFnQ0wsZ0JBQWhDO0FBQ0F4QixrQkFBWThCLG1CQUFaLENBQWdDTCxnQkFBaEM7QUFDQXpCLGtCQUFZK0Isb0JBQVosQ0FBaUNMLGlCQUFqQzs7QUFFQSxXQUFLM0IsU0FBTCxHQUFpQkEsU0FBakI7O0FBRUEsV0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7O29DQUVlO0FBQ2YsVUFBTWdDLFdBQVcsS0FBS0EsUUFBTCxDQUFjVixJQUFkLENBQW1CLElBQW5CLENBQWpCO0FBQUEsVUFDR1csY0FBYyxLQUFLQSxXQUFMLENBQWlCWCxJQUFqQixDQUFzQixJQUF0QixDQURqQjs7QUFHQyxhQUFRO0FBQ05VLDBCQURNO0FBRU5DO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCQyxLLEVBQU9DLFUsRUFBbUM7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQzlELFVBQU1yQyxZQUFZLElBQWxCO0FBQUEsVUFBd0I7QUFDbEJDLG9CQUFjLElBRHBCO0FBQUEsVUFDMEI7QUFDcEJDLHNCQUFnQixJQUZ0QjtBQUFBLFVBRTRCO0FBQ3RCb0MsZUFBUzNDLFFBQVE0QyxjQUFSLGlCQUF1QkosS0FBdkIsRUFBOEJDLFVBQTlCLEVBQTBDcEMsU0FBMUMsRUFBcURDLFdBQXJELEVBQWtFQyxhQUFsRSxTQUFvRm1DLGtCQUFwRixFQUhmOztBQUtBLGFBQU9DLE1BQVA7QUFDRDs7OztFQWxIa0IzQyxPOztBQXFIckI2QyxPQUFPQyxPQUFQLEdBQWlCMUMsTUFBakIiLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgS2V5RXZlbnRzID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy9rZXlFdmVudHMnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy9tb3VzZUV2ZW50cycpO1xuXG5jbGFzcyBDYW1lcmEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgcGFuLCB0aWx0KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgfVxuXG4gIGdldFBhbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW47XG4gIH1cblxuICBnZXRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbHQ7XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wYW4ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzQW5nbGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c0FuZ2xlcygpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucGFuLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpO1xuXG4gICAgdGhpcy5wYW4ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHRoaXMucGFuLnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnRpbHQuc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgICAgdGhpcy5wYW4udXBkYXRlWFlPZmZzZXQodGhpcy50aWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgICB9XG4gIH1cblxuICBmb3JjZVVwZGF0ZShjYW52YXMpIHtcbiAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICB9XG5cbiAgb25VcGRhdGUodXBkYXRlSGFuZGxlcikge1xuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHVwZGF0ZUhhbmRsZXI7XG4gIH1cblxuICB1cGRhdGUob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMudXBkYXRlSGFuZGxlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3Qga2V5RXZlbnRzID0gS2V5RXZlbnRzLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHNoaWZ0S2V5SGFuZGxlciA9IHRoaXMuc2hpZnRLZXlIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VVcEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duSGFuZGxlciA9IHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIGtleUV2ZW50cy5hZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzID0gbW91c2VFdmVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHQgIGNvbnN0IG9uVXBkYXRlID0gdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpLFxuXHRcdFx0XHQgIGZvcmNlVXBkYXRlID0gdGhpcy5mb3JjZVVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBvblVwZGF0ZSxcbiAgICAgIGZvcmNlVXBkYXRlXG4gICAgfSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qga2V5RXZlbnRzID0gbnVsbCwgLy8vXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBudWxsLCAvLy9cbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgY2FtZXJhID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iXX0=