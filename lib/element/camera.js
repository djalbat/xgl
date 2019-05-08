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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlRpbHQiLCJQYW4iLCJab29tIiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJjYWxjdWxhdGVPZmZzZXRNYXRyaXgiLCJjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeCIsImNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4IiwiY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCIsImNhbGN1bGF0ZU5vcm1hbE1hdHJpeCIsImRlZmF1bHRJbml0aWFsRGlzdGFuY2UiLCJkZWZhdWx0SW5pdGlhbE9mZnNldCIsIkNhbWVyYSIsInRpbHQiLCJwYW4iLCJ6b29tIiwiaGFuZGxlciIsIm1vdXNlRG93biIsImNhbnZhcyIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ1cGRhdGUiLCJkZWx0YSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJzaGlmdEtleURvd24iLCJzaGlmdEtleUhhbmRsZXIiLCJiaW5kIiwiYWRkU2hpZnRLZXlIYW5kbGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vdXNlV2hlZWxIYW5kbGVyIiwib25Nb3VzZVVwIiwib25Nb3VzZURvd24iLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VXaGVlbCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJvZmZzZXQiLCJnZXRPZmZzZXQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwib25VcGRhdGUiLCJmb3JjZVVwZGF0ZSIsImFkZEtleUV2ZW50SGFuZGxlcnMiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbERpc3RhbmNlIiwiaW5pdGlhbE9mZnNldCIsImZyb21Jbml0aWFsT2Zmc2V0IiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImNhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxlQUFSLENBRGI7QUFBQSxJQUVNRSxNQUFNRixRQUFRLGNBQVIsQ0FGWjtBQUFBLElBR01HLE9BQU9ILFFBQVEsZUFBUixDQUhiO0FBQUEsSUFJTUksWUFBWUosUUFBUSxvQkFBUixDQUpsQjtBQUFBLElBS01LLGNBQWNMLFFBQVEsc0JBQVIsQ0FMcEI7QUFBQSxJQU1NTSxrQkFBa0JOLFFBQVEscUJBQVIsQ0FOeEI7O0lBUVFPLHFCLEdBQThIRCxlLENBQTlIQyxxQjtJQUF1QkMsdUIsR0FBdUdGLGUsQ0FBdkdFLHVCO0lBQXlCQyx1QixHQUE4RUgsZSxDQUE5RUcsdUI7SUFBeUJDLHlCLEdBQXFESixlLENBQXJESSx5QjtJQUEyQkMscUIsR0FBMEJMLGUsQ0FBMUJLLHFCOzs7QUFFNUcsSUFBTUMseUJBQXlCLENBQS9CO0FBQUEsSUFDTUMsdUJBQXVCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRDdCOztJQUdNQyxNOzs7QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsR0FBbEIsRUFBdUJDLElBQXZCLEVBQTZCQyxPQUE3QixFQUFzQ0MsU0FBdEMsRUFBaURDLE1BQWpELEVBQXlEO0FBQUE7O0FBQUE7O0FBR3ZELFVBQUtMLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtDLFNBQUwsR0FBaUJB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QSxVQU8xQjRDLE1BUDBCLEdBT2pCaEUsUUFBUWlFLGNBQVIsQ0FBdUJsRCxNQUF2QixFQUErQjRDLFVBQS9CLEVBQTJDM0MsSUFBM0MsRUFBaURDLEdBQWpELEVBQXNEQyxJQUF0RCxFQUE0REMsT0FBNUQsRUFBcUVDLFNBQXJFLEVBQWdGQyxNQUFoRixDQVBpQjs7O0FBU2hDMkMsYUFBT0UsVUFBUDs7QUFFQSxhQUFPRixNQUFQO0FBQ0Q7Ozs7RUFsSmtCaEUsTzs7QUFxSnJCbUUsT0FBT0MsT0FBUCxHQUFpQnJELE1BQWpCIiwiZmlsZSI6ImNhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIFRpbHQgPSByZXF1aXJlKCcuL2NhbWVyYS90aWx0JyksXG4gICAgICBQYW4gPSByZXF1aXJlKCcuL2NhbWVyYS9wYW4nKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuL2NhbWVyYS96b29tJyksXG4gICAgICBrZXlFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9rZXlFdmVudHMnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi9jYW1lcmEvbW91c2VFdmVudHMnKSxcbiAgICAgIGNhbWVyYVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9jYW1lcmEnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVPZmZzZXRNYXRyaXgsIGNhbGN1bGF0ZVJvdGF0aW9uTWF0cml4LCBjYWxjdWxhdGVQb3NpdGlvbk1hdHJpeCwgY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCwgY2FsY3VsYXRlTm9ybWFsTWF0cml4IH0gPSBjYW1lcmFVdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgPSA1LFxuICAgICAgZGVmYXVsdEluaXRpYWxPZmZzZXQgPSBbIDAsIDAsIDAgXTtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRpbHQsIHBhbiwgem9vbSwgaGFuZGxlciwgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIGdldFBhbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW47XG4gIH1cblxuICBnZXRab29tKCkge1xuICAgIHJldHVybiB0aGlzLnpvb207XG4gIH1cblxuICBnZXRIYW5kbGVyKCkge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXI7XG4gIH1cblxuICBnZXRNb3VzZURvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VEb3duO1xuICB9XG4gIFxuICByZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIC8vL1xuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgXG4gICAgdGhpcy50aWx0Lm1vdXNlVXBIYW5kbGVyKCk7XG5cbiAgICB0aGlzLnBhbi5tb3VzZVVwSGFuZGxlcigpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIFxuICAgIHRoaXMudGlsdC5tb3VzZURvd25IYW5kbGVyKCk7XG5cbiAgICB0aGlzLnBhbi5tb3VzZURvd25IYW5kbGVyKCk7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLnRpbHQubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMucGFuLm1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGhpcy50aWx0KTtcblxuICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSkge1xuICAgIHRoaXMuem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy50aWx0LnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuXG4gICAgdGhpcy5wYW4uc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG4gIH1cblxuICBhZGRLZXlFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IHNoaWZ0S2V5SGFuZGxlciA9IHRoaXMuc2hpZnRLZXlIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBrZXlFdmVudHMuYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcik7XG4gIH1cbiAgXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKHRoaXMuY2FudmFzKSxcbiAgICAgICAgICBtb3VzZVVwSGFuZGxlciA9IHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZURvd25IYW5kbGVyID0gdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgbW91c2VFdmVudHMub25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5vbk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5vbk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5vbk1vdXNlV2hlZWwobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgb25VcGRhdGUoaGFuZGxlcikge1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cbiAgXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIG9mZnNldCA9IHRoaXMucGFuLmdldE9mZnNldCgpLFxuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IGNhbGN1bGF0ZU9mZnNldE1hdHJpeChvZmZzZXQpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gY2FsY3VsYXRlUm90YXRpb25NYXRyaXgoYW5nbGVzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IGNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4KGRpc3RhbmNlKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBjYWxjdWxhdGVOb3JtYWxNYXRyaXgocm90YXRpb25NYXRyaXgpO1xuICAgIFxuICAgIGlmICh0aGlzLmhhbmRsZXIpIHsgIC8vL1xuICAgICAgdGhpcy5oYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdCAgY29uc3Qgb25VcGRhdGUgPSB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyksXG5cdFx0XHRcdCAgZm9yY2VVcGRhdGUgPSB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIG9uVXBkYXRlLFxuICAgICAgZm9yY2VVcGRhdGVcbiAgICB9KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFkZEtleUV2ZW50SGFuZGxlcnMoKTtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVycygpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UsIGluaXRpYWxPZmZzZXQgPSBkZWZhdWx0SW5pdGlhbE9mZnNldCwgY2FudmFzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBoYW5kbGVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2FtZXJhLCBwcm9wZXJ0aWVzLCB0aWx0LCBwYW4sIHpvb20sIGhhbmRsZXIsIG1vdXNlRG93biwgY2FudmFzKTtcblxuICAgIGNhbWVyYS5pbml0aWFsaXNlKCk7XG4gICAgXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbWVyYTtcbiJdfQ==