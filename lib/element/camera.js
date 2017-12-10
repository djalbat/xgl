'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    tilt = require('./camera/tilt'),
    Pan = require('./camera/pan'),
    Zoom = require('./camera/zoom'),
    keyEvents = require('./camera/keyEvents'),
    MouseEvents = require('./camera/mouseEvents'),
    cameraUtilities = require('../utilities/camera');

var calculateOffsetMatrix = cameraUtilities.calculateOffsetMatrix,
    calculateRotationMatrix = cameraUtilities.calculateRotationMatrix,
    calculatePositionMatrix = cameraUtilities.calculatePositionMatrix,
    calculateProjectionMatrix = cameraUtilities.calculateProjectionMatrix,
    calculateNormalMatrix = cameraUtilities.calculateNormalMatrix;

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(canvas, tilt, pan, zoom, handler, mouseDown) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this, canvas));

    _this.tilt = tilt;
    _this.pan = pan;
    _this.zoom = zoom;
    _this.handler = handler;
    _this.mouseDown = mouseDown;
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
      var canvas = this.getCanvas(),
          mouseEvents = MouseEvents.fromNothing(canvas),
          mouseUpHandler = this.mouseUpHandler.bind(this),
          mouseDownHandler = this.mouseDownHandler.bind(this),
          mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);

      mouseEvents.addMouseUpHandler(mouseUpHandler);
      mouseEvents.addMouseDownHandler(mouseDownHandler);
      mouseEvents.addMouseMoveHandler(mouseMoveHandler);
      mouseEvents.addMouseWheelHandler(mouseWheelHandler);
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
      var canvas = this.getCanvas(),
          width = canvas.getWidth(),
          height = canvas.getHeight(),
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
      return {
        onUpdate: this.onUpdate.bind(this),
        forceUpdate: this.forceUpdate.bind(this)
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
      var initialDistance = properties.initialDistance,
          initialOffset = properties.initialOffset,
          pan = Pan.fromInitialOffset(initialOffset),
          zoom = Zoom.fromInitialDistance(initialDistance),
          handler = null,
          mouseDown = false,
          camera = Element.fromProperties(Camera, properties, tilt, pan, zoom, handler, mouseDown);


      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInRpbHQiLCJQYW4iLCJab29tIiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJjYWxjdWxhdGVPZmZzZXRNYXRyaXgiLCJjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeCIsImNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4IiwiY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCIsImNhbGN1bGF0ZU5vcm1hbE1hdHJpeCIsIkNhbWVyYSIsImNhbnZhcyIsInBhbiIsInpvb20iLCJoYW5kbGVyIiwibW91c2VEb3duIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VVcEhhbmRsZXIiLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsInVwZGF0ZSIsImRlbHRhIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsInNoaWZ0S2V5RG93biIsInNoaWZ0S2V5SGFuZGxlciIsImJpbmQiLCJhZGRTaGlmdEtleUhhbmRsZXIiLCJnZXRDYW52YXMiLCJtb3VzZUV2ZW50cyIsImZyb21Ob3RoaW5nIiwibW91c2VXaGVlbEhhbmRsZXIiLCJhZGRNb3VzZVVwSGFuZGxlciIsImFkZE1vdXNlRG93bkhhbmRsZXIiLCJhZGRNb3VzZU1vdmVIYW5kbGVyIiwiYWRkTW91c2VXaGVlbEhhbmRsZXIiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwib2Zmc2V0IiwiZ2V0T2Zmc2V0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIm9uVXBkYXRlIiwiZm9yY2VVcGRhdGUiLCJhZGRLZXlFdmVudEhhbmRsZXJzIiwiYWRkTW91c2VFdmVudEhhbmRsZXJzIiwicHJvcGVydGllcyIsImluaXRpYWxEaXN0YW5jZSIsImluaXRpYWxPZmZzZXQiLCJmcm9tSW5pdGlhbE9mZnNldCIsImZyb21Jbml0aWFsRGlzdGFuY2UiLCJjYW1lcmEiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxlQUFSLENBRGI7QUFBQSxJQUVNRSxNQUFNRixRQUFRLGNBQVIsQ0FGWjtBQUFBLElBR01HLE9BQU9ILFFBQVEsZUFBUixDQUhiO0FBQUEsSUFJTUksWUFBWUosUUFBUSxvQkFBUixDQUpsQjtBQUFBLElBS01LLGNBQWNMLFFBQVEsc0JBQVIsQ0FMcEI7QUFBQSxJQU1NTSxrQkFBa0JOLFFBQVEscUJBQVIsQ0FOeEI7O0lBUVFPLHFCLEdBQThIRCxlLENBQTlIQyxxQjtJQUF1QkMsdUIsR0FBdUdGLGUsQ0FBdkdFLHVCO0lBQXlCQyx1QixHQUE4RUgsZSxDQUE5RUcsdUI7SUFBeUJDLHlCLEdBQXFESixlLENBQXJESSx5QjtJQUEyQkMscUIsR0FBMEJMLGUsQ0FBMUJLLHFCOztJQUV0R0MsTTs7O0FBQ0osa0JBQVlDLE1BQVosRUFBb0JaLElBQXBCLEVBQTBCYSxHQUExQixFQUErQkMsSUFBL0IsRUFBcUNDLE9BQXJDLEVBQThDQyxTQUE5QyxFQUF5RDtBQUFBOztBQUFBLGdIQUNqREosTUFEaUQ7O0FBR3ZELFVBQUtaLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUthLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBUHVEO0FBUXhEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLaEIsSUFBWjtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPLEtBQUthLEdBQVo7QUFDRDs7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c0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgdGlsdCA9IHJlcXVpcmUoJy4vY2FtZXJhL3RpbHQnKSxcbiAgICAgIFBhbiA9IHJlcXVpcmUoJy4vY2FtZXJhL3BhbicpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4vY2FtZXJhL3pvb20nKSxcbiAgICAgIGtleUV2ZW50cyA9IHJlcXVpcmUoJy4vY2FtZXJhL2tleUV2ZW50cycpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9tb3VzZUV2ZW50cycpLFxuICAgICAgY2FtZXJhVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2NhbWVyYScpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZU9mZnNldE1hdHJpeCwgY2FsY3VsYXRlUm90YXRpb25NYXRyaXgsIGNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4LCBjYWxjdWxhdGVQcm9qZWN0aW9uTWF0cml4LCBjYWxjdWxhdGVOb3JtYWxNYXRyaXggfSA9IGNhbWVyYVV0aWxpdGllcztcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgdGlsdCwgcGFuLCB6b29tLCBoYW5kbGVyLCBtb3VzZURvd24pIHtcbiAgICBzdXBlcihjYW52YXMpO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gIH1cblxuICBnZXRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbHQ7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZ2V0SGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyO1xuICB9XG5cbiAgZ2V0TW91c2VEb3duKCkge1xuICAgIHJldHVybiB0aGlzLm1vdXNlRG93bjtcbiAgfVxuICBcbiAgcmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIFxuICAgIHRoaXMudGlsdC5tb3VzZVVwSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLnRpbHQubW91c2VEb3duSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VEb3duSGFuZGxlcigpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy50aWx0Lm1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnBhbi5tb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMudGlsdCk7XG5cbiAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEpIHtcbiAgICB0aGlzLnpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMudGlsdC5zaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcblxuICAgIHRoaXMucGFuLnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuICB9XG5cbiAgYWRkS2V5RXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBzaGlmdEtleUhhbmRsZXIgPSB0aGlzLnNoaWZ0S2V5SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAga2V5RXZlbnRzLmFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpO1xuICB9XG4gIFxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5nZXRDYW52YXMoKSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgbW91c2VVcEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duSGFuZGxlciA9IHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgb25VcGRhdGUoaGFuZGxlcikge1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cbiAgXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5nZXRDYW52YXMoKSxcbiAgICAgICAgICB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBvZmZzZXQgPSB0aGlzLnBhbi5nZXRPZmZzZXQoKSxcbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRNYXRyaXggPSBjYWxjdWxhdGVPZmZzZXRNYXRyaXgob2Zmc2V0KSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IGNhbGN1bGF0ZVJvdGF0aW9uTWF0cml4KGFuZ2xlcyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBjYWxjdWxhdGVQb3NpdGlvbk1hdHJpeChkaXN0YW5jZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IGNhbGN1bGF0ZVByb2plY3Rpb25NYXRyaXgod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4ID0gY2FsY3VsYXRlTm9ybWFsTWF0cml4KHJvdGF0aW9uTWF0cml4KTtcbiAgICBcbiAgICBpZiAodGhpcy5oYW5kbGVyKSB7ICAvLy9cbiAgICAgIHRoaXMuaGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgICB9XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgb25VcGRhdGU6IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSxcbiAgICAgIGZvcmNlVXBkYXRlOiB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFkZEtleUV2ZW50SGFuZGxlcnMoKTtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVycygpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxEaXN0YW5jZSwgaW5pdGlhbE9mZnNldCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXQoaW5pdGlhbE9mZnNldCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGhhbmRsZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgbW91c2VEb3duID0gZmFsc2UsXG4gICAgICAgICAgY2FtZXJhID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDYW1lcmEsIHByb3BlcnRpZXMsIHRpbHQsIHBhbiwgem9vbSwgaGFuZGxlciwgbW91c2VEb3duKTtcbiAgICBcbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIl19