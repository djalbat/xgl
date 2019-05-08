'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    Pan = require('../miscellaneous/pan'),
    Tilt = require('../miscellaneous/tilt'),
    Zoom = require('../miscellaneous/zoom'),
    keyEvents = require('../miscellaneous/keyEvents'),
    MouseEvents = require('../miscellaneous/mouseEvents'),
    cameraUtilities = require('../utilities/camera');

var calculateOffsetMatrix = cameraUtilities.calculateOffsetMatrix,
    calculateRotationMatrix = cameraUtilities.calculateRotationMatrix,
    calculatePositionMatrix = cameraUtilities.calculatePositionMatrix,
    calculateProjectionMatrix = cameraUtilities.calculateProjectionMatrix,
    calculateNormalMatrix = cameraUtilities.calculateNormalMatrix;


var defaultInitialDistance = 5,
    defaultInitialOffset = [0, 0, 0];

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(tilt, pan, zoom, handler, mouseDown, canvas) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.tilt = tilt;
    _this.pan = pan;
    _this.zoom = zoom;
    _this.handler = handler;
    _this.mouseDown = mouseDown;

    _this.canvas = canvas;
    return _this;
  }

  _createClass(Camera, [{
    key: 'getTilt',
    value: function getTilt() {
      return this.tilt;
    }
  }, {
    key: 'getPan',
    value: function getPan() {
      return this.pan;
    }
  }, {
    key: 'getZoom',
    value: function getZoom() {
      return this.zoom;
    }
  }, {
    key: 'getHandler',
    value: function getHandler() {
      return this.handler;
    }
  }, {
    key: 'getMouseDown',
    value: function getMouseDown() {
      return this.mouseDown;
    }
  }, {
    key: 'render',
    value: function render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      ///
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates) {
      this.mouseDown = false;

      this.tilt.mouseUpHandler();

      this.pan.mouseUpHandler();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates) {
      this.mouseDown = true;

      this.tilt.mouseDownHandler();

      this.pan.mouseDownHandler();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates) {
      this.tilt.mouseMoveHandler(mouseCoordinates);

      this.pan.mouseMoveHandler(mouseCoordinates, this.tilt);

      if (this.mouseDown) {
        this.update();
      }
    }
  }, {
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(delta) {
      this.zoom.mouseWheelEventHandler(delta);

      this.update();
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      this.tilt.shiftKeyHandler(shiftKeyDown);

      this.pan.shiftKeyHandler(shiftKeyDown);
    }
  }, {
    key: 'addKeyEventHandlers',
    value: function addKeyEventHandlers() {
      var shiftKeyHandler = this.shiftKeyHandler.bind(this);

      keyEvents.addShiftKeyHandler(shiftKeyHandler);
    }
  }, {
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers() {
      var mouseEvents = MouseEvents.fromNothing(this.canvas),
          mouseUpHandler = this.mouseUpHandler.bind(this),
          mouseDownHandler = this.mouseDownHandler.bind(this),
          mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);

      mouseEvents.onMouseUp(mouseUpHandler);
      mouseEvents.onMouseDown(mouseDownHandler);
      mouseEvents.onMouseMove(mouseMoveHandler);
      mouseEvents.onMouseWheel(mouseWheelHandler);
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(handler) {
      this.handler = handler;
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      var width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          offset = this.pan.getOffset(),
          angles = this.tilt.getAngles(),
          distance = this.zoom.getDistance(),
          offsetMatrix = calculateOffsetMatrix(offset),
          rotationMatrix = calculateRotationMatrix(angles),
          positionMatrix = calculatePositionMatrix(distance),
          projectionMatrix = calculateProjectionMatrix(width, height),
          normalMatrix = calculateNormalMatrix(rotationMatrix);

      if (this.handler) {
        ///
        this.handler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
      }
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
  }, {
    key: 'initialise',
    value: function initialise() {
      this.addKeyEventHandlers();
      this.addMouseEventHandlers();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$initialDi = properties.initialDistance,
          initialDistance = _properties$initialDi === undefined ? defaultInitialDistance : _properties$initialDi,
          _properties$initialOf = properties.initialOffset,
          initialOffset = _properties$initialOf === undefined ? defaultInitialOffset : _properties$initialOf,
          canvas = properties.canvas,
          tilt = Tilt.fromNothing(),
          pan = Pan.fromInitialOffset(initialOffset),
          zoom = Zoom.fromInitialDistance(initialDistance),
          handler = null,
          mouseDown = false,
          camera = Element.fromProperties(Camera, properties, tilt, pan, zoom, handler, mouseDown, canvas);


      camera.initialise();

      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlBhbiIsIlRpbHQiLCJab29tIiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJjYWxjdWxhdGVPZmZzZXRNYXRyaXgiLCJjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeCIsImNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4IiwiY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCIsImNhbGN1bGF0ZU5vcm1hbE1hdHJpeCIsImRlZmF1bHRJbml0aWFsRGlzdGFuY2UiLCJkZWZhdWx0SW5pdGlhbE9mZnNldCIsIkNhbWVyYSIsInRpbHQiLCJwYW4iLCJ6b29tIiwiaGFuZGxlciIsIm1vdXNlRG93biIsImNhbnZhcyIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ1cGRhdGUiLCJkZWx0YSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJzaGlmdEtleURvd24iLCJzaGlmdEtleUhhbmRsZXIiLCJiaW5kIiwiYWRkU2hpZnRLZXlIYW5kbGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vdXNlV2hlZWxIYW5kbGVyIiwib25Nb3VzZVVwIiwib25Nb3VzZURvd24iLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VXaGVlbCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJvZmZzZXQiLCJnZXRPZmZzZXQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwib25VcGRhdGUiLCJmb3JjZVVwZGF0ZSIsImFkZEtleUV2ZW50SGFuZGxlcnMiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbERpc3RhbmNlIiwiaW5pdGlhbE9mZnNldCIsImZyb21Jbml0aWFsT2Zmc2V0IiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImNhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsTUFBTUQsUUFBUSxzQkFBUixDQURaO0FBQUEsSUFFTUUsT0FBT0YsUUFBUSx1QkFBUixDQUZiO0FBQUEsSUFHTUcsT0FBT0gsUUFBUSx1QkFBUixDQUhiO0FBQUEsSUFJTUksWUFBWUosUUFBUSw0QkFBUixDQUpsQjtBQUFBLElBS01LLGNBQWNMLFFBQVEsOEJBQVIsQ0FMcEI7QUFBQSxJQU1NTSxrQkFBa0JOLFFBQVEscUJBQVIsQ0FOeEI7O0lBUVFPLHFCLEdBQThIRCxlLENBQTlIQyxxQjtJQUF1QkMsdUIsR0FBdUdGLGUsQ0FBdkdFLHVCO0lBQXlCQyx1QixHQUE4RUgsZSxDQUE5RUcsdUI7SUFBeUJDLHlCLEdBQXFESixlLENBQXJESSx5QjtJQUEyQkMscUIsR0FBMEJMLGUsQ0FBMUJLLHFCOzs7QUFFNUcsSUFBTUMseUJBQXlCLENBQS9CO0FBQUEsSUFDTUMsdUJBQXVCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRDdCOztJQUdNQyxNOzs7QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsR0FBbEIsRUFBdUJDLElBQXZCLEVBQTZCQyxPQUE3QixFQUFzQ0MsU0FBdEMsRUFBaURDLE1BQWpELEVBQXlEO0FBQUE7O0FBQUE7O0FBR3ZELFVBQUtMLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtDLFNBQUwsR0FB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QUFBQSxVQU8xQjRDLE1BUDBCLEdBT2pCaEUsUUFBUWlFLGNBQVIsQ0FBdUJsRCxNQUF2QixFQUErQjRDLFVBQS9CLEVBQTJDM0MsSUFBM0MsRUFBaURDLEdBQWpELEVBQXNEQyxJQUF0RCxFQUE0REMsT0FBNUQsRUFBcUVDLFNBQXJFLEVBQWdGQyxNQUFoRixDQVBpQjs7O0FBU2hDMkMsYUFBT0UsVUFBUDs7QUFFQSxhQUFPRixNQUFQO0FBQ0Q7Ozs7RUFsSmtCaEUsTzs7QUFxSnJCbUUsT0FBT0MsT0FBUCxHQUFpQnJELE1BQWpCIiwiZmlsZSI6ImNhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIFBhbiA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMvcGFuJyksXG4gICAgICBUaWx0ID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy90aWx0JyksXG4gICAgICBab29tID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy96b29tJyksXG4gICAgICBrZXlFdmVudHMgPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL2tleUV2ZW50cycpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzJyksXG4gICAgICBjYW1lcmFVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvY2FtZXJhJyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlT2Zmc2V0TWF0cml4LCBjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeCwgY2FsY3VsYXRlUG9zaXRpb25NYXRyaXgsIGNhbGN1bGF0ZVByb2plY3Rpb25NYXRyaXgsIGNhbGN1bGF0ZU5vcm1hbE1hdHJpeCB9ID0gY2FtZXJhVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbERpc3RhbmNlID0gNSxcbiAgICAgIGRlZmF1bHRJbml0aWFsT2Zmc2V0ID0gWyAwLCAwLCAwIF07XG5cbmNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0aWx0LCBwYW4sIHpvb20sIGhhbmRsZXIsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBnZXRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbHQ7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZ2V0SGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyO1xuICB9XG5cbiAgZ2V0TW91c2VEb3duKCkge1xuICAgIHJldHVybiB0aGlzLm1vdXNlRG93bjtcbiAgfVxuICBcbiAgcmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIFxuICAgIHRoaXMudGlsdC5tb3VzZVVwSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLnRpbHQubW91c2VEb3duSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VEb3duSGFuZGxlcigpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy50aWx0Lm1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnBhbi5tb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMudGlsdCk7XG5cbiAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEpIHtcbiAgICB0aGlzLnpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMudGlsdC5zaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcblxuICAgIHRoaXMucGFuLnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuICB9XG5cbiAgYWRkS2V5RXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBzaGlmdEtleUhhbmRsZXIgPSB0aGlzLnNoaWZ0S2V5SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAga2V5RXZlbnRzLmFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpO1xuICB9XG4gIFxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyksXG4gICAgICAgICAgbW91c2VVcEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duSGFuZGxlciA9IHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIG1vdXNlRXZlbnRzLm9uTW91c2VVcChtb3VzZVVwSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMub25Nb3VzZURvd24obW91c2VEb3duSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMub25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMub25Nb3VzZVdoZWVsKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIG9uVXBkYXRlKGhhbmRsZXIpIHtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG4gIFxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBvZmZzZXQgPSB0aGlzLnBhbi5nZXRPZmZzZXQoKSxcbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRNYXRyaXggPSBjYWxjdWxhdGVPZmZzZXRNYXRyaXgob2Zmc2V0KSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IGNhbGN1bGF0ZVJvdGF0aW9uTWF0cml4KGFuZ2xlcyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBjYWxjdWxhdGVQb3NpdGlvbk1hdHJpeChkaXN0YW5jZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IGNhbGN1bGF0ZVByb2plY3Rpb25NYXRyaXgod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4ID0gY2FsY3VsYXRlTm9ybWFsTWF0cml4KHJvdGF0aW9uTWF0cml4KTtcbiAgICBcbiAgICBpZiAodGhpcy5oYW5kbGVyKSB7ICAvLy9cbiAgICAgIHRoaXMuaGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgICB9XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHQgIGNvbnN0IG9uVXBkYXRlID0gdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpLFxuXHRcdFx0XHQgIGZvcmNlVXBkYXRlID0gdGhpcy5mb3JjZVVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBvblVwZGF0ZSxcbiAgICAgIGZvcmNlVXBkYXRlXG4gICAgfSk7XG4gIH1cbiAgXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hZGRLZXlFdmVudEhhbmRsZXJzKCk7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcnMoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsRGlzdGFuY2UgPSBkZWZhdWx0SW5pdGlhbERpc3RhbmNlLCBpbml0aWFsT2Zmc2V0ID0gZGVmYXVsdEluaXRpYWxPZmZzZXQsIGNhbnZhcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldChpbml0aWFsT2Zmc2V0KSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgaGFuZGxlciA9IG51bGwsICAvLy9cbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBjYW1lcmEgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENhbWVyYSwgcHJvcGVydGllcywgdGlsdCwgcGFuLCB6b29tLCBoYW5kbGVyLCBtb3VzZURvd24sIGNhbnZhcyk7XG5cbiAgICBjYW1lcmEuaW5pdGlhbGlzZSgpO1xuICAgIFxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iXX0=