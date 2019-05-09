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

  function Camera(tilt, pan, zoom, handler, mouseDown) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.tilt = tilt;
    _this.pan = pan;
    _this.zoom = zoom;
    _this.handler = handler;
    _this.mouseDown = mouseDown;
    return _this;
  }

  _createClass(Camera, [{
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates, canvas) {
      this.mouseDown = false;

      this.tilt.mouseUpHandler();

      this.pan.mouseUpHandler();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates, canvas) {
      this.mouseDown = true;

      this.tilt.mouseDownHandler();

      this.pan.mouseDownHandler();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, canvas) {
      this.tilt.mouseMoveHandler(mouseCoordinates);

      this.pan.mouseMoveHandler(mouseCoordinates, this.tilt);

      if (this.mouseDown) {
        this.update(canvas);
      }
    }
  }, {
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(delta, canvas) {
      this.zoom.mouseWheelEventHandler(delta);

      this.update(canvas);
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      this.tilt.shiftKeyHandler(shiftKeyDown);

      this.pan.shiftKeyHandler(shiftKeyDown);
    }
  }, {
    key: 'addKeyEventHandlers',
    value: function addKeyEventHandlers(canvas) {
      var shiftKeyHandler = this.shiftKeyHandler.bind(this);

      keyEvents.addShiftKeyHandler(shiftKeyHandler);
    }
  }, {
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers(canvas) {
      var mouseEvents = MouseEvents.fromNothing(canvas),
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
    key: 'forceUpdate',
    value: function forceUpdate(canvas) {
      this.update(canvas);
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(handler) {
      this.handler = handler;
    }
  }, {
    key: 'update',
    value: function update(canvas) {
      var width = canvas.getWidth(),
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
    key: 'render',
    value: function render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      ///
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
    value: function initialise(canvas) {
      this.addKeyEventHandlers(canvas);
      this.addMouseEventHandlers(canvas);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$initialDi = properties.initialDistance,
          initialDistance = _properties$initialDi === undefined ? defaultInitialDistance : _properties$initialDi,
          _properties$initialOf = properties.initialOffset,
          initialOffset = _properties$initialOf === undefined ? defaultInitialOffset : _properties$initialOf,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlBhbiIsIlRpbHQiLCJab29tIiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJjYWxjdWxhdGVPZmZzZXRNYXRyaXgiLCJjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeCIsImNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4IiwiY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCIsImNhbGN1bGF0ZU5vcm1hbE1hdHJpeCIsImRlZmF1bHRJbml0aWFsRGlzdGFuY2UiLCJkZWZhdWx0SW5pdGlhbE9mZnNldCIsIkNhbWVyYSIsInRpbHQiLCJwYW4iLCJ6b29tIiwiaGFuZGxlciIsIm1vdXNlRG93biIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJjYW52YXMiLCJtb3VzZVVwSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwidXBkYXRlIiwiZGVsdGEiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwic2hpZnRLZXlEb3duIiwic2hpZnRLZXlIYW5kbGVyIiwiYmluZCIsImFkZFNoaWZ0S2V5SGFuZGxlciIsIm1vdXNlRXZlbnRzIiwiZnJvbU5vdGhpbmciLCJtb3VzZVdoZWVsSGFuZGxlciIsIm9uTW91c2VVcCIsIm9uTW91c2VEb3duIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlV2hlZWwiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwib2Zmc2V0IiwiZ2V0T2Zmc2V0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4Iiwib25VcGRhdGUiLCJmb3JjZVVwZGF0ZSIsImFkZEtleUV2ZW50SGFuZGxlcnMiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbERpc3RhbmNlIiwiaW5pdGlhbE9mZnNldCIsImZyb21Jbml0aWFsT2Zmc2V0IiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImNhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxNQUFNRCxRQUFRLHNCQUFSLENBRFo7QUFBQSxJQUVNRSxPQUFPRixRQUFRLHVCQUFSLENBRmI7QUFBQSxJQUdNRyxPQUFPSCxRQUFRLHVCQUFSLENBSGI7QUFBQSxJQUlNSSxZQUFZSixRQUFRLDRCQUFSLENBSmxCO0FBQUEsSUFLTUssY0FBY0wsUUFBUSw4QkFBUixDQUxwQjtBQUFBLElBTU1NLGtCQUFrQk4sUUFBUSxxQkFBUixDQU54Qjs7SUFRUU8scUIsR0FBOEhELGUsQ0FBOUhDLHFCO0lBQXVCQyx1QixHQUF1R0YsZSxDQUF2R0UsdUI7SUFBeUJDLHVCLEdBQThFSCxlLENBQTlFRyx1QjtJQUF5QkMseUIsR0FBcURKLGUsQ0FBckRJLHlCO0lBQTJCQyxxQixHQUEwQkwsZSxDQUExQksscUI7OztBQUU1RyxJQUFNQyx5QkFBeUIsQ0FBL0I7QUFBQSxJQUNNQyx1QkFBdUIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FEN0I7O0lBR01DLE07OztBQUNKLGtCQUFZQyxJQUFaLEVBQWtCQyxHQUFsQixFQUF1QkMsSUFBdkIsRUFBNkJDLE9BQTdCLEVBQXNDQyxTQUF0QyxFQUFpRDtBQUFBOztBQUFBOztBQUcvQyxVQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQVArQztBQVFoRDs7Oztt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QU80QyxNQUFQO0FBQ0Q7Ozs7RUExSGtCaEUsTzs7QUE2SHJCa0UsT0FBT0MsT0FBUCxHQUFpQnBELE1BQWpCIiwiZmlsZSI6ImNhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIFBhbiA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMvcGFuJyksXG4gICAgICBUaWx0ID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy90aWx0JyksXG4gICAgICBab29tID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy96b29tJyksXG4gICAgICBrZXlFdmVudHMgPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL2tleUV2ZW50cycpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzJyksXG4gICAgICBjYW1lcmFVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvY2FtZXJhJyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlT2Zmc2V0TWF0cml4LCBjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeCwgY2FsY3VsYXRlUG9zaXRpb25NYXRyaXgsIGNhbGN1bGF0ZVByb2plY3Rpb25NYXRyaXgsIGNhbGN1bGF0ZU5vcm1hbE1hdHJpeCB9ID0gY2FtZXJhVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbERpc3RhbmNlID0gNSxcbiAgICAgIGRlZmF1bHRJbml0aWFsT2Zmc2V0ID0gWyAwLCAwLCAwIF07XG5cbmNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0aWx0LCBwYW4sIHpvb20sIGhhbmRsZXIsIG1vdXNlRG93bikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMucGFuID0gcGFuO1xuICAgIHRoaXMuem9vbSA9IHpvb207XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIGNhbnZhcykge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgXG4gICAgdGhpcy50aWx0Lm1vdXNlVXBIYW5kbGVyKCk7XG5cbiAgICB0aGlzLnBhbi5tb3VzZVVwSGFuZGxlcigpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBjYW52YXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgXG4gICAgdGhpcy50aWx0Lm1vdXNlRG93bkhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlRG93bkhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgY2FudmFzKSB7XG4gICAgdGhpcy50aWx0Lm1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnBhbi5tb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMudGlsdCk7XG5cbiAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEsIGNhbnZhcykge1xuICAgIHRoaXMuem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy50aWx0LnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuXG4gICAgdGhpcy5wYW4uc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG4gIH1cblxuICBhZGRLZXlFdmVudEhhbmRsZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5SGFuZGxlciA9IHRoaXMuc2hpZnRLZXlIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBrZXlFdmVudHMuYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcik7XG4gIH1cbiAgXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVycyhjYW52YXMpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgbW91c2VVcEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duSGFuZGxlciA9IHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIG1vdXNlRXZlbnRzLm9uTW91c2VVcChtb3VzZVVwSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMub25Nb3VzZURvd24obW91c2VEb3duSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMub25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMub25Nb3VzZVdoZWVsKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKGNhbnZhcykge1xuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICBvblVwZGF0ZShoYW5kbGVyKSB7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuICBcbiAgdXBkYXRlKGNhbnZhcykge1xuICAgIGNvbnN0IHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIG9mZnNldCA9IHRoaXMucGFuLmdldE9mZnNldCgpLFxuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IGNhbGN1bGF0ZU9mZnNldE1hdHJpeChvZmZzZXQpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gY2FsY3VsYXRlUm90YXRpb25NYXRyaXgoYW5nbGVzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IGNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4KGRpc3RhbmNlKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBjYWxjdWxhdGVOb3JtYWxNYXRyaXgocm90YXRpb25NYXRyaXgpO1xuICAgIFxuICAgIGlmICh0aGlzLmhhbmRsZXIpIHsgIC8vL1xuICAgICAgdGhpcy5oYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdCAgY29uc3Qgb25VcGRhdGUgPSB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyksXG5cdFx0XHRcdCAgZm9yY2VVcGRhdGUgPSB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIG9uVXBkYXRlLFxuICAgICAgZm9yY2VVcGRhdGVcbiAgICB9KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICB0aGlzLmFkZEtleUV2ZW50SGFuZGxlcnMoY2FudmFzKTtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVycyhjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UsIGluaXRpYWxPZmZzZXQgPSBkZWZhdWx0SW5pdGlhbE9mZnNldCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldChpbml0aWFsT2Zmc2V0KSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgaGFuZGxlciA9IG51bGwsICAvLy9cbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBjYW1lcmEgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENhbWVyYSwgcHJvcGVydGllcywgdGlsdCwgcGFuLCB6b29tLCBoYW5kbGVyLCBtb3VzZURvd24pO1xuXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbWVyYTtcbiJdfQ==