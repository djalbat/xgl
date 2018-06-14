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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlRpbHQiLCJQYW4iLCJab29tIiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJjYWxjdWxhdGVPZmZzZXRNYXRyaXgiLCJjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeCIsImNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4IiwiY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCIsImNhbGN1bGF0ZU5vcm1hbE1hdHJpeCIsIkNhbWVyYSIsImNhbnZhcyIsInRpbHQiLCJwYW4iLCJ6b29tIiwiaGFuZGxlciIsIm1vdXNlRG93biIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ1cGRhdGUiLCJkZWx0YSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJzaGlmdEtleURvd24iLCJzaGlmdEtleUhhbmRsZXIiLCJiaW5kIiwiYWRkU2hpZnRLZXlIYW5kbGVyIiwiZ2V0Q2FudmFzIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vdXNlV2hlZWxIYW5kbGVyIiwiYWRkTW91c2VVcEhhbmRsZXIiLCJhZGRNb3VzZURvd25IYW5kbGVyIiwiYWRkTW91c2VNb3ZlSGFuZGxlciIsImFkZE1vdXNlV2hlZWxIYW5kbGVyIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsIm9mZnNldCIsImdldE9mZnNldCIsImFuZ2xlcyIsImdldEFuZ2xlcyIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJvblVwZGF0ZSIsImZvcmNlVXBkYXRlIiwiYWRkS2V5RXZlbnRIYW5kbGVycyIsImFkZE1vdXNlRXZlbnRIYW5kbGVycyIsInByb3BlcnRpZXMiLCJpbml0aWFsRGlzdGFuY2UiLCJpbml0aWFsT2Zmc2V0IiwiZnJvbUluaXRpYWxPZmZzZXQiLCJmcm9tSW5pdGlhbERpc3RhbmNlIiwiY2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsZUFBUixDQURiO0FBQUEsSUFFTUUsTUFBTUYsUUFBUSxjQUFSLENBRlo7QUFBQSxJQUdNRyxPQUFPSCxRQUFRLGVBQVIsQ0FIYjtBQUFBLElBSU1JLFlBQVlKLFFBQVEsb0JBQVIsQ0FKbEI7QUFBQSxJQUtNSyxjQUFjTCxRQUFRLHNCQUFSLENBTHBCO0FBQUEsSUFNTU0sa0JBQWtCTixRQUFRLHFCQUFSLENBTnhCOztJQVFRTyxxQixHQUE4SEQsZSxDQUE5SEMscUI7SUFBdUJDLHVCLEdBQXVHRixlLENBQXZHRSx1QjtJQUF5QkMsdUIsR0FBOEVILGUsQ0FBOUVHLHVCO0lBQXlCQyx5QixHQUFxREosZSxDQUFyREkseUI7SUFBMkJDLHFCLEdBQTBCTCxlLENBQTFCSyxxQjs7SUFFdEdDLE07OztBQUNKLGtCQUFZQyxNQUFaLEVBQW9CQyxJQUFwQixFQUEwQkMsR0FBMUIsRUFBK0JDLElBQS9CLEVBQXFDQyxPQUFyQyxFQUE4Q0MsU0FBOUMsRUFBeUQ7QUFBQTs7QUFBQSxnSEFDakRMLE1BRGlEOztBQUd2RCxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQVB1RDtBQVF4RDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0osSUFBWjtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPLEtBQUtDLEdBQVo7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Ozs7RUFoSmtCL0QsTzs7QUFtSnJCaUUsT0FBT0MsT0FBUCxHQUFpQnJELE1BQWpCIiwiZmlsZSI6ImNhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIFRpbHQgPSByZXF1aXJlKCcuL2NhbWVyYS90aWx0JyksXG4gICAgICBQYW4gPSByZXF1aXJlKCcuL2NhbWVyYS9wYW4nKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuL2NhbWVyYS96b29tJyksXG4gICAgICBrZXlFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9rZXlFdmVudHMnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi9jYW1lcmEvbW91c2VFdmVudHMnKSxcbiAgICAgIGNhbWVyYVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9jYW1lcmEnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVPZmZzZXRNYXRyaXgsIGNhbGN1bGF0ZVJvdGF0aW9uTWF0cml4LCBjYWxjdWxhdGVQb3NpdGlvbk1hdHJpeCwgY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCwgY2FsY3VsYXRlTm9ybWFsTWF0cml4IH0gPSBjYW1lcmFVdGlsaXRpZXM7XG5cbmNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIHRpbHQsIHBhbiwgem9vbSwgaGFuZGxlciwgbW91c2VEb3duKSB7XG4gICAgc3VwZXIoY2FudmFzKTtcblxuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbTtcbiAgfVxuXG4gIGdldEhhbmRsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcjtcbiAgfVxuXG4gIGdldE1vdXNlRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZURvd247XG4gIH1cbiAgXG4gIHJlbmRlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgLy8vXG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICBcbiAgICB0aGlzLnRpbHQubW91c2VVcEhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlVXBIYW5kbGVyKCk7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgXG4gICAgdGhpcy50aWx0Lm1vdXNlRG93bkhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlRG93bkhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMudGlsdC5tb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnRpbHQpO1xuXG4gICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhKSB7XG4gICAgdGhpcy56b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLnRpbHQuc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG5cbiAgICB0aGlzLnBhbi5zaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcbiAgfVxuXG4gIGFkZEtleUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVyID0gdGhpcy5zaGlmdEtleUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIGtleUV2ZW50cy5hZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKTtcbiAgfVxuICBcbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZ2V0Q2FudmFzKCksXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIG1vdXNlVXBIYW5kbGVyID0gdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIG9uVXBkYXRlKGhhbmRsZXIpIHtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG4gIFxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZ2V0Q2FudmFzKCksXG4gICAgICAgICAgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0ID0gdGhpcy5wYW4uZ2V0T2Zmc2V0KCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gY2FsY3VsYXRlT2Zmc2V0TWF0cml4KG9mZnNldCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSBjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeChhbmdsZXMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gY2FsY3VsYXRlUG9zaXRpb25NYXRyaXgoZGlzdGFuY2UpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBjYWxjdWxhdGVQcm9qZWN0aW9uTWF0cml4KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IGNhbGN1bGF0ZU5vcm1hbE1hdHJpeChyb3RhdGlvbk1hdHJpeCk7XG4gICAgXG4gICAgaWYgKHRoaXMuaGFuZGxlcikgeyAgLy8vXG4gICAgICB0aGlzLmhhbmRsZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gICAgfVxuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBvblVwZGF0ZSA9IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSxcblx0XHRcdFx0ICBmb3JjZVVwZGF0ZSA9IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgb25VcGRhdGUsXG4gICAgICBmb3JjZVVwZGF0ZVxuICAgIH0pO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYWRkS2V5RXZlbnRIYW5kbGVycygpO1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXJzKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbERpc3RhbmNlLCBpbml0aWFsT2Zmc2V0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBoYW5kbGVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2FtZXJhLCBwcm9wZXJ0aWVzLCB0aWx0LCBwYW4sIHpvb20sIGhhbmRsZXIsIG1vdXNlRG93bik7XG4gICAgXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbWVyYTtcbiJdfQ==