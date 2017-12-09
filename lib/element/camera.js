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

var offsetMatrixFromOffset = cameraUtilities.offsetMatrixFromOffset,
    rotationMatrixFromAngles = cameraUtilities.rotationMatrixFromAngles,
    positionMatrixFromDistance = cameraUtilities.positionMatrixFromDistance,
    projectionMatrixFromWidthAndHeight = cameraUtilities.projectionMatrixFromWidthAndHeight,
    normalMatrixFromRotationMatrix = cameraUtilities.normalMatrixFromRotationMatrix;

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
          offsetMatrix = offsetMatrixFromOffset(offset),
          rotationMatrix = rotationMatrixFromAngles(angles),
          positionMatrix = positionMatrixFromDistance(distance),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalMatrix = normalMatrixFromRotationMatrix(rotationMatrix);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInRpbHQiLCJQYW4iLCJab29tIiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0Iiwicm90YXRpb25NYXRyaXhGcm9tQW5nbGVzIiwicG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UiLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4IiwiQ2FtZXJhIiwiY2FudmFzIiwicGFuIiwiem9vbSIsImhhbmRsZXIiLCJtb3VzZURvd24iLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVVwSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwidXBkYXRlIiwiZGVsdGEiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwic2hpZnRLZXlEb3duIiwic2hpZnRLZXlIYW5kbGVyIiwiYmluZCIsImFkZFNoaWZ0S2V5SGFuZGxlciIsImdldENhbnZhcyIsIm1vdXNlRXZlbnRzIiwiZnJvbU5vdGhpbmciLCJtb3VzZVdoZWVsSGFuZGxlciIsImFkZE1vdXNlVXBIYW5kbGVyIiwiYWRkTW91c2VEb3duSGFuZGxlciIsImFkZE1vdXNlTW92ZUhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsSGFuZGxlciIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJvZmZzZXQiLCJnZXRPZmZzZXQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwib25VcGRhdGUiLCJmb3JjZVVwZGF0ZSIsImFkZEtleUV2ZW50SGFuZGxlcnMiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbERpc3RhbmNlIiwiaW5pdGlhbE9mZnNldCIsImZyb21Jbml0aWFsT2Zmc2V0IiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImNhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLGVBQVIsQ0FEYjtBQUFBLElBRU1FLE1BQU1GLFFBQVEsY0FBUixDQUZaO0FBQUEsSUFHTUcsT0FBT0gsUUFBUSxlQUFSLENBSGI7QUFBQSxJQUlNSSxZQUFZSixRQUFRLG9CQUFSLENBSmxCO0FBQUEsSUFLTUssY0FBY0wsUUFBUSxzQkFBUixDQUxwQjtBQUFBLElBTU1NLGtCQUFrQk4sUUFBUSxxQkFBUixDQU54Qjs7SUFRUU8sc0IsR0FBcUpELGUsQ0FBckpDLHNCO0lBQXdCQyx3QixHQUE2SEYsZSxDQUE3SEUsd0I7SUFBMEJDLDBCLEdBQW1HSCxlLENBQW5HRywwQjtJQUE0QkMsa0MsR0FBdUVKLGUsQ0FBdkVJLGtDO0lBQW9DQyw4QixHQUFtQ0wsZSxDQUFuQ0ssOEI7O0lBRXBIQyxNOzs7QUFDSixrQkFBWUMsTUFBWixFQUFvQlosSUFBcEIsRUFBMEJhLEdBQTFCLEVBQStCQyxJQUEvQixFQUFxQ0MsT0FBckMsRUFBOENDLFNBQTlDLEVBQXlEO0FBQUE7O0FBQUEsZ0hBQ2pESixNQURpRDs7QUFHdkQsVUFBS1osSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS2EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFQdUQ7QUFReEQ7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtoQixJQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQ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bGUiOiJjYW1lcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICB0aWx0ID0gcmVxdWlyZSgnLi9jYW1lcmEvdGlsdCcpLFxuICAgICAgUGFuID0gcmVxdWlyZSgnLi9jYW1lcmEvcGFuJyksXG4gICAgICBab29tID0gcmVxdWlyZSgnLi9jYW1lcmEvem9vbScpLFxuICAgICAga2V5RXZlbnRzID0gcmVxdWlyZSgnLi9jYW1lcmEva2V5RXZlbnRzJyksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoJy4vY2FtZXJhL21vdXNlRXZlbnRzJyksXG4gICAgICBjYW1lcmFVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvY2FtZXJhJyk7XG5cbmNvbnN0IHsgb2Zmc2V0TWF0cml4RnJvbU9mZnNldCwgcm90YXRpb25NYXRyaXhGcm9tQW5nbGVzLCBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSwgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4IH0gPSBjYW1lcmFVdGlsaXRpZXM7XG5cbmNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIHRpbHQsIHBhbiwgem9vbSwgaGFuZGxlciwgbW91c2VEb3duKSB7XG4gICAgc3VwZXIoY2FudmFzKTtcblxuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbTtcbiAgfVxuXG4gIGdldEhhbmRsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcjtcbiAgfVxuXG4gIGdldE1vdXNlRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZURvd247XG4gIH1cbiAgXG4gIHJlbmRlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgLy8vXG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICBcbiAgICB0aGlzLnRpbHQubW91c2VVcEhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlVXBIYW5kbGVyKCk7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgXG4gICAgdGhpcy50aWx0Lm1vdXNlRG93bkhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlRG93bkhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMudGlsdC5tb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnRpbHQpO1xuXG4gICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhKSB7XG4gICAgdGhpcy56b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLnRpbHQuc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG5cbiAgICB0aGlzLnBhbi5zaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcbiAgfVxuXG4gIGFkZEtleUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVyID0gdGhpcy5zaGlmdEtleUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIGtleUV2ZW50cy5hZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKTtcbiAgfVxuICBcbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZ2V0Q2FudmFzKCksXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIG1vdXNlVXBIYW5kbGVyID0gdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIG9uVXBkYXRlKGhhbmRsZXIpIHtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG4gIFxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZ2V0Q2FudmFzKCksXG4gICAgICAgICAgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0ID0gdGhpcy5wYW4uZ2V0T2Zmc2V0KCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gb2Zmc2V0TWF0cml4RnJvbU9mZnNldChvZmZzZXQpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb25NYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4ID0gbm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4KHJvdGF0aW9uTWF0cml4KTtcbiAgICBcbiAgICBpZiAodGhpcy5oYW5kbGVyKSB7ICAvLy9cbiAgICAgIHRoaXMuaGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgICB9XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgb25VcGRhdGU6IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSxcbiAgICAgIGZvcmNlVXBkYXRlOiB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFkZEtleUV2ZW50SGFuZGxlcnMoKTtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVycygpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxEaXN0YW5jZSwgaW5pdGlhbE9mZnNldCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXQoaW5pdGlhbE9mZnNldCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGhhbmRsZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgbW91c2VEb3duID0gZmFsc2UsXG4gICAgICAgICAgY2FtZXJhID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDYW1lcmEsIHByb3BlcnRpZXMsIHRpbHQsIHBhbiwgem9vbSwgaGFuZGxlciwgbW91c2VEb3duKTtcbiAgICBcbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIl19