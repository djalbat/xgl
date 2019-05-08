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
      var initialDistance = properties.initialDistance,
          initialOffset = properties.initialOffset,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlRpbHQiLCJQYW4iLCJab29tIiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJjYWxjdWxhdGVPZmZzZXRNYXRyaXgiLCJjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeCIsImNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4IiwiY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCIsImNhbGN1bGF0ZU5vcm1hbE1hdHJpeCIsIkNhbWVyYSIsInRpbHQiLCJwYW4iLCJ6b29tIiwiaGFuZGxlciIsIm1vdXNlRG93biIsImNhbnZhcyIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ1cGRhdGUiLCJkZWx0YSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJzaGlmdEtleURvd24iLCJzaGlmdEtleUhhbmRsZXIiLCJiaW5kIiwiYWRkU2hpZnRLZXlIYW5kbGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vdXNlV2hlZWxIYW5kbGVyIiwib25Nb3VzZVVwIiwib25Nb3VzZURvd24iLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VXaGVlbCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJvZmZzZXQiLCJnZXRPZmZzZXQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwib25VcGRhdGUiLCJmb3JjZVVwZGF0ZSIsImFkZEtleUV2ZW50SGFuZGxlcnMiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbERpc3RhbmNlIiwiaW5pdGlhbE9mZnNldCIsImZyb21Jbml0aWFsT2Zmc2V0IiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImNhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxlQUFSLENBRGI7QUFBQSxJQUVNRSxNQUFNRixRQUFRLGNBQVIsQ0FGWjtBQUFBLElBR01HLE9BQU9ILFFBQVEsZUFBUixDQUhiO0FBQUEsSUFJTUksWUFBWUosUUFBUSxvQkFBUixDQUpsQjtBQUFBLElBS01LLGNBQWNMLFFBQVEsc0JBQVIsQ0FMcEI7QUFBQSxJQU1NTSxrQkFBa0JOLFFBQVEscUJBQVIsQ0FOeEI7O0lBUVFPLHFCLEdBQThIRCxlLENBQTlIQyxxQjtJQUF1QkMsdUIsR0FBdUdGLGUsQ0FBdkdFLHVCO0lBQXlCQyx1QixHQUE4RUgsZSxDQUE5RUcsdUI7SUFBeUJDLHlCLEdBQXFESixlLENBQXJESSx5QjtJQUEyQkMscUIsR0FBMEJMLGUsQ0FBMUJLLHFCOztJQUV0R0MsTTs7O0FBQ0osa0JBQVlDLElBQVosRUFBa0JDLEdBQWxCLEVBQXVCQyxJQUF2QixFQUE2QkMsT0FBN0IsRUFBc0NDLFNBQXRDLEVBQWlEQyxNQUFqRCxFQUF5RDtBQUFBOztBQUFBOztBQUd2RCxVQUFLTCxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjs7QUFFQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFUdUQ7QUFVeEQ7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtMLElBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFLQyxHQUFaO0FBQ0Q7Ozs4QkFFUztBQUNS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QU9GLE1BQVA7QUFDRDs7OztFQWxKa0I5RCxPOztBQXFKckJpRSxPQUFPQyxPQUFQLEdBQWlCckQsTUFBakIiLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoJy4vY2FtZXJhL3RpbHQnKSxcbiAgICAgIFBhbiA9IHJlcXVpcmUoJy4vY2FtZXJhL3BhbicpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4vY2FtZXJhL3pvb20nKSxcbiAgICAgIGtleUV2ZW50cyA9IHJlcXVpcmUoJy4vY2FtZXJhL2tleUV2ZW50cycpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9tb3VzZUV2ZW50cycpLFxuICAgICAgY2FtZXJhVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2NhbWVyYScpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZU9mZnNldE1hdHJpeCwgY2FsY3VsYXRlUm90YXRpb25NYXRyaXgsIGNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4LCBjYWxjdWxhdGVQcm9qZWN0aW9uTWF0cml4LCBjYWxjdWxhdGVOb3JtYWxNYXRyaXggfSA9IGNhbWVyYVV0aWxpdGllcztcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRpbHQsIHBhbiwgem9vbSwgaGFuZGxlciwgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIGdldFBhbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW47XG4gIH1cblxuICBnZXRab29tKCkge1xuICAgIHJldHVybiB0aGlzLnpvb207XG4gIH1cblxuICBnZXRIYW5kbGVyKCkge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXI7XG4gIH1cblxuICBnZXRNb3VzZURvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VEb3duO1xuICB9XG4gIFxuICByZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIC8vL1xuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgXG4gICAgdGhpcy50aWx0Lm1vdXNlVXBIYW5kbGVyKCk7XG5cbiAgICB0aGlzLnBhbi5tb3VzZVVwSGFuZGxlcigpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIFxuICAgIHRoaXMudGlsdC5tb3VzZURvd25IYW5kbGVyKCk7XG5cbiAgICB0aGlzLnBhbi5tb3VzZURvd25IYW5kbGVyKCk7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLnRpbHQubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMucGFuLm1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGhpcy50aWx0KTtcblxuICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSkge1xuICAgIHRoaXMuem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy50aWx0LnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuXG4gICAgdGhpcy5wYW4uc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG4gIH1cblxuICBhZGRLZXlFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IHNoaWZ0S2V5SGFuZGxlciA9IHRoaXMuc2hpZnRLZXlIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBrZXlFdmVudHMuYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcik7XG4gIH1cbiAgXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKHRoaXMuY2FudmFzKSxcbiAgICAgICAgICBtb3VzZVVwSGFuZGxlciA9IHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZURvd25IYW5kbGVyID0gdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgbW91c2VFdmVudHMub25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5vbk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5vbk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5vbk1vdXNlV2hlZWwobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgb25VcGRhdGUoaGFuZGxlcikge1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cbiAgXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIG9mZnNldCA9IHRoaXMucGFuLmdldE9mZnNldCgpLFxuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IGNhbGN1bGF0ZU9mZnNldE1hdHJpeChvZmZzZXQpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gY2FsY3VsYXRlUm90YXRpb25NYXRyaXgoYW5nbGVzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IGNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4KGRpc3RhbmNlKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBjYWxjdWxhdGVOb3JtYWxNYXRyaXgocm90YXRpb25NYXRyaXgpO1xuICAgIFxuICAgIGlmICh0aGlzLmhhbmRsZXIpIHsgIC8vL1xuICAgICAgdGhpcy5oYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdCAgY29uc3Qgb25VcGRhdGUgPSB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyksXG5cdFx0XHRcdCAgZm9yY2VVcGRhdGUgPSB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIG9uVXBkYXRlLFxuICAgICAgZm9yY2VVcGRhdGVcbiAgICB9KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFkZEtleUV2ZW50SGFuZGxlcnMoKTtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVycygpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxEaXN0YW5jZSwgaW5pdGlhbE9mZnNldCwgY2FudmFzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBoYW5kbGVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2FtZXJhLCBwcm9wZXJ0aWVzLCB0aWx0LCBwYW4sIHpvb20sIGhhbmRsZXIsIG1vdXNlRG93biwgY2FudmFzKTtcblxuICAgIGNhbWVyYS5pbml0aWFsaXNlKCk7XG4gICAgXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbWVyYTtcbiJdfQ==