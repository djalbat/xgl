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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIktleUV2ZW50cyIsIk1vdXNlRXZlbnRzIiwiQ2FtZXJhIiwia2V5RXZlbnRzIiwibW91c2VFdmVudHMiLCJ1cGRhdGVIYW5kbGVyIiwicGFuIiwidGlsdCIsInNoaWZ0S2V5RG93biIsInJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwicmVzZXRQcmV2aW91c0FuZ2xlcyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZURvd24iLCJjYW52YXMiLCJpc1NoaWZ0S2V5RG93biIsInNldE1vdXNlQ29vcmRpbmF0ZXMiLCJ1cGRhdGVYWU9mZnNldCIsInVwZGF0ZUFuZ2xlcyIsInVwZGF0ZSIsIm9mZnNldHNNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4IiwiZnJvbU5vdGhpbmciLCJzaGlmdEtleUhhbmRsZXIiLCJiaW5kIiwibW91c2VVcEhhbmRsZXIiLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlV2hlZWxIYW5kbGVyIiwiYWRkU2hpZnRLZXlIYW5kbGVyIiwiYWRkTW91c2VVcEhhbmRsZXIiLCJhZGRNb3VzZURvd25IYW5kbGVyIiwiYWRkTW91c2VNb3ZlSGFuZGxlciIsImFkZE1vdXNlV2hlZWxIYW5kbGVyIiwib25VcGRhdGUiLCJmb3JjZVVwZGF0ZSIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLDRCQUFSLENBRGxCO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSw4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QkFBWixDQUE4QkwsY0FBOUI7QUFDQXZCLGtCQUFZNkIsbUJBQVosQ0FBZ0NMLGdCQUFoQztBQUNBeEIsa0JBQVk4QixtQkFBWixDQUFnQ0wsZ0JBQWhDO0FBQ0F6QixrQkFBWStCLG9CQUFaLENBQWlDTCxpQkFBakM7O0FBRUEsV0FBSzNCLFNBQUwsR0FBaUJBLFNBQWpCOztBQUVBLFdBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7OztvQ0FFZTtBQUNmLFVBQU1nQyxXQUFXLEtBQUtBLFFBQUwsQ0FBY1YsSUFBZCxDQUFtQixJQUFuQixDQUFqQjtBQUFBLFVBQ0dXLGNBQWMsS0FBS0EsV0FBTCxDQUFpQlgsSUFBakIsQ0FBc0IsSUFBdEIsQ0FEakI7O0FBR0MsYUFBUTtBQUNOVSwwQkFETTtBQUVOQztBQUZNLE9BQVI7QUFJRDs7O21DQUVxQkMsSyxFQUFPQyxVLEVBQW1DO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUM5RCxVQUFNckMsWUFBWSxJQUFsQjtBQUFBLFVBQXdCO0FBQ2xCQyxvQkFBYyxJQURwQjtBQUFBLFVBQzBCO0FBQ3BCQyxzQkFBZ0IsSUFGdEI7QUFBQSxVQUU0QjtBQUN0Qm9DLGVBQVMzQyxRQUFRNEMsY0FBUixpQkFBdUJKLEtBQXZCLEVBQThCQyxVQUE5QixFQUEwQ3BDLFNBQTFDLEVBQXFEQyxXQUFyRCxFQUFrRUMsYUFBbEUsU0FBb0ZtQyxrQkFBcEYsRUFIZjs7QUFLQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs7RUFuSGtCM0MsTzs7QUFzSHJCNkMsT0FBT0MsT0FBUCxHQUFpQjFDLE1BQWpCIiwiZmlsZSI6ImNhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIEtleUV2ZW50cyA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMva2V5RXZlbnRzJyksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMvbW91c2VFdmVudHMnKTtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIsIHBhbiwgdGlsdCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmtleUV2ZW50cyA9IGtleUV2ZW50cztcbiAgICB0aGlzLm1vdXNlRXZlbnRzID0gbW91c2VFdmVudHM7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVyID0gdXBkYXRlSGFuZGxlcjtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgfVxuXG4gIGdldFBhbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW47XG4gIH1cblxuICBnZXRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbHQ7XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wYW4ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzQW5nbGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c0FuZ2xlcygpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucGFuLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpO1xuXG4gICAgdGhpcy5wYW4ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHRoaXMucGFuLnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnRpbHQuc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgICAgdGhpcy5wYW4udXBkYXRlWFlPZmZzZXQodGhpcy50aWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgICB9XG4gIH1cblxuICBmb3JjZVVwZGF0ZShjYW52YXMpIHtcbiAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICB9XG5cbiAgb25VcGRhdGUodXBkYXRlSGFuZGxlcikge1xuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHVwZGF0ZUhhbmRsZXI7XG4gIH1cblxuICB1cGRhdGUob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMudXBkYXRlSGFuZGxlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3Qga2V5RXZlbnRzID0gS2V5RXZlbnRzLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHNoaWZ0S2V5SGFuZGxlciA9IHRoaXMuc2hpZnRLZXlIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VVcEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duSGFuZGxlciA9IHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIGtleUV2ZW50cy5hZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzID0gbW91c2VFdmVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHQgIGNvbnN0IG9uVXBkYXRlID0gdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpLFxuXHRcdFx0XHQgIGZvcmNlVXBkYXRlID0gdGhpcy5mb3JjZVVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBvblVwZGF0ZSxcbiAgICAgIGZvcmNlVXBkYXRlXG4gICAgfSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qga2V5RXZlbnRzID0gbnVsbCwgLy8vXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBudWxsLCAvLy9cbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgY2FtZXJhID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iXX0=