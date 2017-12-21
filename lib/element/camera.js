'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    Tilt = require('./camera/tilt'),
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
          tilt = Tilt.fromNothing(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlRpbHQiLCJQYW4iLCJab29tIiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJjYWxjdWxhdGVPZmZzZXRNYXRyaXgiLCJjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeCIsImNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4IiwiY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCIsImNhbGN1bGF0ZU5vcm1hbE1hdHJpeCIsIkNhbWVyYSIsImNhbnZhcyIsInRpbHQiLCJwYW4iLCJ6b29tIiwiaGFuZGxlciIsIm1vdXNlRG93biIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ1cGRhdGUiLCJkZWx0YSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJzaGlmdEtleURvd24iLCJzaGlmdEtleUhhbmRsZXIiLCJiaW5kIiwiYWRkU2hpZnRLZXlIYW5kbGVyIiwiZ2V0Q2FudmFzIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vdXNlV2hlZWxIYW5kbGVyIiwiYWRkTW91c2VVcEhhbmRsZXIiLCJhZGRNb3VzZURvd25IYW5kbGVyIiwiYWRkTW91c2VNb3ZlSGFuZGxlciIsImFkZE1vdXNlV2hlZWxIYW5kbGVyIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsIm9mZnNldCIsImdldE9mZnNldCIsImFuZ2xlcyIsImdldEFuZ2xlcyIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJvblVwZGF0ZSIsImZvcmNlVXBkYXRlIiwiYWRkS2V5RXZlbnRIYW5kbGVycyIsImFkZE1vdXNlRXZlbnRIYW5kbGVycyIsInByb3BlcnRpZXMiLCJpbml0aWFsRGlzdGFuY2UiLCJpbml0aWFsT2Zmc2V0IiwiZnJvbUluaXRpYWxPZmZzZXQiLCJmcm9tSW5pdGlhbERpc3RhbmNlIiwiY2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsZUFBUixDQURiO0FBQUEsSUFFTUUsTUFBTUYsUUFBUSxjQUFSLENBRlo7QUFBQSxJQUdNRyxPQUFPSCxRQUFRLGVBQVIsQ0FIYjtBQUFBLElBSU1JLFlBQVlKLFFBQVEsb0JBQVIsQ0FKbEI7QUFBQSxJQUtNSyxjQUFjTCxRQUFRLHNCQUFSLENBTHBCO0FBQUEsSUFNTU0sa0JBQWtCTixRQUFRLHFCQUFSLENBTnhCOztJQVFRTyxxQixHQUE4SEQsZSxDQUE5SEMscUI7SUFBdUJDLHVCLEdBQXVHRixlLENBQXZHRSx1QjtJQUF5QkMsdUIsR0FBOEVILGUsQ0FBOUVHLHVCO0lBQXlCQyx5QixHQUFxREosZSxDQUFyREkseUI7SUFBMkJDLHFCLEdBQTBCTCxlLENBQTFCSyxxQjs7SUFFdEdDLE07OztBQUNKLGtCQUFZQyxNQUFaLEVBQW9CQyxJQUFwQixFQUEwQkMsR0FBMUIsRUFBK0JDLElBQS9CLEVBQXFDQyxPQUFyQyxFQUE4Q0MsU0FBOUMsRUFBeUQ7QUFBQTs7QUFBQSxnSEFDakRMLE1BRGlEOztBQUd2RCxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQVB1RDtBQVF4RDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0osSUFBWjtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPLEtBQUtDLEdBQVo7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LEdBQWlCckQsTUFBakIiLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoJy4vY2FtZXJhL3RpbHQnKSxcbiAgICAgIFBhbiA9IHJlcXVpcmUoJy4vY2FtZXJhL3BhbicpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4vY2FtZXJhL3pvb20nKSxcbiAgICAgIGtleUV2ZW50cyA9IHJlcXVpcmUoJy4vY2FtZXJhL2tleUV2ZW50cycpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9tb3VzZUV2ZW50cycpLFxuICAgICAgY2FtZXJhVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2NhbWVyYScpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZU9mZnNldE1hdHJpeCwgY2FsY3VsYXRlUm90YXRpb25NYXRyaXgsIGNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4LCBjYWxjdWxhdGVQcm9qZWN0aW9uTWF0cml4LCBjYWxjdWxhdGVOb3JtYWxNYXRyaXggfSA9IGNhbWVyYVV0aWxpdGllcztcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgdGlsdCwgcGFuLCB6b29tLCBoYW5kbGVyLCBtb3VzZURvd24pIHtcbiAgICBzdXBlcihjYW52YXMpO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gIH1cblxuICBnZXRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbHQ7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZ2V0SGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyO1xuICB9XG5cbiAgZ2V0TW91c2VEb3duKCkge1xuICAgIHJldHVybiB0aGlzLm1vdXNlRG93bjtcbiAgfVxuICBcbiAgcmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIFxuICAgIHRoaXMudGlsdC5tb3VzZVVwSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLnRpbHQubW91c2VEb3duSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VEb3duSGFuZGxlcigpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy50aWx0Lm1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnBhbi5tb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMudGlsdCk7XG5cbiAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEpIHtcbiAgICB0aGlzLnpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMudGlsdC5zaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcblxuICAgIHRoaXMucGFuLnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuICB9XG5cbiAgYWRkS2V5RXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBzaGlmdEtleUhhbmRsZXIgPSB0aGlzLnNoaWZ0S2V5SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAga2V5RXZlbnRzLmFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpO1xuICB9XG4gIFxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5nZXRDYW52YXMoKSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgbW91c2VVcEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duSGFuZGxlciA9IHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgb25VcGRhdGUoaGFuZGxlcikge1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cbiAgXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5nZXRDYW52YXMoKSxcbiAgICAgICAgICB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBvZmZzZXQgPSB0aGlzLnBhbi5nZXRPZmZzZXQoKSxcbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRNYXRyaXggPSBjYWxjdWxhdGVPZmZzZXRNYXRyaXgob2Zmc2V0KSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IGNhbGN1bGF0ZVJvdGF0aW9uTWF0cml4KGFuZ2xlcyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBjYWxjdWxhdGVQb3NpdGlvbk1hdHJpeChkaXN0YW5jZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IGNhbGN1bGF0ZVByb2plY3Rpb25NYXRyaXgod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4ID0gY2FsY3VsYXRlTm9ybWFsTWF0cml4KHJvdGF0aW9uTWF0cml4KTtcbiAgICBcbiAgICBpZiAodGhpcy5oYW5kbGVyKSB7ICAvLy9cbiAgICAgIHRoaXMuaGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgICB9XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgb25VcGRhdGU6IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSxcbiAgICAgIGZvcmNlVXBkYXRlOiB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFkZEtleUV2ZW50SGFuZGxlcnMoKTtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVycygpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxEaXN0YW5jZSwgaW5pdGlhbE9mZnNldCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldChpbml0aWFsT2Zmc2V0KSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgaGFuZGxlciA9IG51bGwsICAvLy9cbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBjYW1lcmEgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENhbWVyYSwgcHJvcGVydGllcywgdGlsdCwgcGFuLCB6b29tLCBoYW5kbGVyLCBtb3VzZURvd24pO1xuICAgIFxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iXX0=