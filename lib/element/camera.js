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

  function Camera(keyEvents, mouseEvents, updateHandler) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.keyEvents = keyEvents;

    _this.mouseEvents = mouseEvents;

    _this.updateHandler = updateHandler;
    return _this;
  }

  _createClass(Camera, [{
    key: 'getUpdateHandler',
    value: function getUpdateHandler() {
      return this.updateHandler;
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
    key: 'render',
    value: function render(canvas, offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIktleUV2ZW50cyIsIk1vdXNlRXZlbnRzIiwiQ2FtZXJhIiwia2V5RXZlbnRzIiwibW91c2VFdmVudHMiLCJ1cGRhdGVIYW5kbGVyIiwiY2FudmFzIiwidXBkYXRlIiwib2Zmc2V0TWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImZyb21Ob3RoaW5nIiwic2hpZnRLZXlIYW5kbGVyIiwiYmluZCIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZVdoZWVsSGFuZGxlciIsImFkZFNoaWZ0S2V5SGFuZGxlciIsImFkZE1vdXNlVXBIYW5kbGVyIiwiYWRkTW91c2VEb3duSGFuZGxlciIsImFkZE1vdXNlTW92ZUhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsSGFuZGxlciIsIm9uVXBkYXRlIiwiZm9yY2VVcGRhdGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJjYW1lcmEiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSw0QkFBUixDQURsQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsOEJBQVIsQ0FGcEI7O0lBSU1HLE07OztBQUNKLGtCQUFZQyxTQUFaLEVBQXVCQyxXQUF2QixFQUFvQ0MsYUFBcEMsRUFBbUQ7QUFBQTs7QUFBQTs7QUFHakQsVUFBS0YsU0FBTCxHQUFpQkEsU0FBakI7O0FBRUEsVUFBS0MsV0FBTCxHQUFtQkEsV0FBbkI7O0FBRUEsVUFBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFQaUQ7QUFRbEQ7Ozs7dUNBRWtCO0FBQ2pCLGFBQU8sS0FBS0EsYUFBWjtBQUNEOzs7Z0NBRVdDLE0sRUFBUTtBQUNsQixXQUFLQyxNQUFMLENBQVlELE1BQVo7QUFDRDs7OzZCQUVRRCxhLEVBQWU7QUFDdEIsV0FBS0EsYUFBTCxHQUFxQkEsYUFBckI7QUFDRDs7OzJCQUVNQyxNLEVBQVFFLFksRUFBY0MsYSxFQUFlQyxjLEVBQWdCQyxlLEVBQWlCQyxnQixFQUFrQjtBQUM3RjtBQUNEOzs7K0JBRVVOLE0sRUFBUTtBQUNqQixVQUFNSCxZQUFZSCxVQUFVYSxXQUFWLENBQXNCUCxNQUF0QixDQUFsQjtBQUFBLFVBQ01GLGNBQWNILFlBQVlZLFdBQVosQ0FBd0JQLE1BQXhCLENBRHBCO0FBQUEsVUFFTVEsa0JBQWtCLEtBQUtBLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBRnhCO0FBQUEsVUFHTUMsaUJBQWlCLEtBQUtBLGNBQUwsQ0FBb0JELElBQXBCLENBQXlCLElBQXpCLENBSHZCO0FBQUEsVUFJTUUsbUJBQW1CLEtBQUtBLGdCQUFMLENBQXNCRixJQUF0QixDQUEyQixJQUEzQixDQUp6QjtBQUFBLFVBS01HLG1CQUFtQixLQUFLQSxnQkFBTCxDQUFzQkgsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FMekI7QUFBQSxVQU1NSSxvQkFBb0IsS0FBS0EsaUJBQUwsQ0FBdUJKLElBQXZCLENBQTRCLElBQTVCLENBTjFCOztBQVFBWixnQkFBVWlCLGtCQUFWLENBQTZCTixlQUE3Qjs7QUFFQVYsa0JBQVlpQixpQkFBWixDQUE4QkwsY0FBOUI7QUFDQVosa0JBQVlrQixtQkFBWixDQUFnQ0wsZ0JBQWhDO0FBQ0FiLGtCQUFZbUIsbUJBQVosQ0FBZ0NMLGdCQUFoQztBQUNBZCxrQkFBWW9CLG9CQUFaLENBQWlDTCxpQkFBakM7O0FBRUEsV0FBS2hCLFNBQUwsR0FBaUJBLFNBQWpCOztBQUVBLFdBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7OztvQ0FFZTtBQUNmLFVBQU1xQixXQUFXLEtBQUtBLFFBQUwsQ0FBY1YsSUFBZCxDQUFtQixJQUFuQixDQUFqQjtBQUFBLFVBQ0dXLGNBQWMsS0FBS0EsV0FBTCxDQUFpQlgsSUFBakIsQ0FBc0IsSUFBdEIsQ0FEakI7O0FBR0MsYUFBUTtBQUNOVSwwQkFETTtBQUVOQztBQUZNLE9BQVI7QUFJRDs7O21DQUVxQkMsSyxFQUFPQyxVLEVBQW1DO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUM5RCxVQUFNMUIsWUFBWSxJQUFsQjtBQUFBLFVBQXdCO0FBQ2xCQyxvQkFBYyxJQURwQjtBQUFBLFVBQzBCO0FBQ3BCQyxzQkFBZ0IsSUFGdEI7QUFBQSxVQUU0QjtBQUN0QnlCLGVBQVNoQyxRQUFRaUMsY0FBUixpQkFBdUJKLEtBQXZCLEVBQThCQyxVQUE5QixFQUEwQ3pCLFNBQTFDLEVBQXFEQyxXQUFyRCxFQUFrRUMsYUFBbEUsU0FBb0Z3QixrQkFBcEYsRUFIZjs7QUFLQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs7RUFqRWtCaEMsTzs7QUFvRXJCa0MsT0FBT0MsT0FBUCxHQUFpQi9CLE1BQWpCIiwiZmlsZSI6ImNhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIEtleUV2ZW50cyA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMva2V5RXZlbnRzJyksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMvbW91c2VFdmVudHMnKTtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzID0gbW91c2VFdmVudHM7XG5cbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG5cbiAgZ2V0VXBkYXRlSGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVIYW5kbGVyO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUoY2FudmFzKSB7XG4gICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgfVxuXG4gIG9uVXBkYXRlKHVwZGF0ZUhhbmRsZXIpIHtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0TWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgLy8vXG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBzaGlmdEtleUhhbmRsZXIgPSB0aGlzLnNoaWZ0S2V5SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlVXBIYW5kbGVyID0gdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBrZXlFdmVudHMuYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcik7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcblxuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBvblVwZGF0ZSA9IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSxcblx0XHRcdFx0ICBmb3JjZVVwZGF0ZSA9IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgb25VcGRhdGUsXG4gICAgICBmb3JjZVVwZGF0ZVxuICAgIH0pO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGtleUV2ZW50cyA9IG51bGwsIC8vL1xuICAgICAgICAgIG1vdXNlRXZlbnRzID0gbnVsbCwgLy8vXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IG51bGwsIC8vL1xuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIl19