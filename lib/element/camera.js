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

  function Camera(pan, tilt, zoom, updateHandler) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.pan = pan;
    _this.tilt = tilt;
    _this.zoom = zoom;

    _this.updateHandler = updateHandler;
    return _this;
  }

  _createClass(Camera, [{
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      this.pan.shiftKeyHandler(shiftKeyDown);

      this.tilt.shiftKeyHandler(shiftKeyDown);
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
      this.tilt.mouseUpHandler();

      this.pan.mouseUpHandler();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
      this.tilt.mouseDownHandler();

      this.pan.mouseDownHandler();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
      this.tilt.mouseMoveHandler(mouseCoordinates);

      this.pan.mouseMoveHandler(mouseCoordinates, this.tilt);

      if (mouseDown) {
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
    value: function onUpdate(updateHandler) {
      this.updateHandler = updateHandler;
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

      this.updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
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
      var _properties$initialOf = properties.initialOffset,
          initialOffset = _properties$initialOf === undefined ? defaultInitialOffset : _properties$initialOf,
          _properties$initialDi = properties.initialDistance,
          initialDistance = _properties$initialDi === undefined ? defaultInitialDistance : _properties$initialDi,
          pan = Pan.fromInitialOffset(initialOffset),
          tilt = Tilt.fromNothing(),
          zoom = Zoom.fromInitialDistance(initialDistance),
          updateHandler = null,
          camera = Element.fromProperties(Camera, properties, pan, tilt, zoom, updateHandler);


      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlBhbiIsIlRpbHQiLCJab29tIiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJjYWxjdWxhdGVPZmZzZXRNYXRyaXgiLCJjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeCIsImNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4IiwiY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCIsImNhbGN1bGF0ZU5vcm1hbE1hdHJpeCIsImRlZmF1bHRJbml0aWFsRGlzdGFuY2UiLCJkZWZhdWx0SW5pdGlhbE9mZnNldCIsIkNhbWVyYSIsInBhbiIsInRpbHQiLCJ6b29tIiwidXBkYXRlSGFuZGxlciIsInNoaWZ0S2V5RG93biIsInNoaWZ0S2V5SGFuZGxlciIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZURvd24iLCJjYW52YXMiLCJtb3VzZVVwSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwidXBkYXRlIiwiZGVsdGEiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiYmluZCIsImFkZFNoaWZ0S2V5SGFuZGxlciIsIm1vdXNlRXZlbnRzIiwiZnJvbU5vdGhpbmciLCJtb3VzZVdoZWVsSGFuZGxlciIsIm9uTW91c2VVcCIsIm9uTW91c2VEb3duIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlV2hlZWwiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwib2Zmc2V0IiwiZ2V0T2Zmc2V0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4Iiwib25VcGRhdGUiLCJmb3JjZVVwZGF0ZSIsImFkZEtleUV2ZW50SGFuZGxlcnMiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbE9mZnNldCIsImluaXRpYWxEaXN0YW5jZSIsImZyb21Jbml0aWFsT2Zmc2V0IiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImNhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxNQUFNRCxRQUFRLHNCQUFSLENBRFo7QUFBQSxJQUVNRSxPQUFPRixRQUFRLHVCQUFSLENBRmI7QUFBQSxJQUdNRyxPQUFPSCxRQUFRLHVCQUFSLENBSGI7QUFBQSxJQUlNSSxZQUFZSixRQUFRLDRCQUFSLENBSmxCO0FBQUEsSUFLTUssY0FBY0wsUUFBUSw4QkFBUixDQUxwQjtBQUFBLElBTU1NLGtCQUFrQk4sUUFBUSxxQkFBUixDQU54Qjs7SUFRUU8scUIsR0FBOEhELGUsQ0FBOUhDLHFCO0lBQXVCQyx1QixHQUF1R0YsZSxDQUF2R0UsdUI7SUFBeUJDLHVCLEdBQThFSCxlLENBQTlFRyx1QjtJQUF5QkMseUIsR0FBcURKLGUsQ0FBckRJLHlCO0lBQTJCQyxxQixHQUEwQkwsZSxDQUExQksscUI7OztBQUU1RyxJQUFNQyx5QkFBeUIsQ0FBL0I7QUFBQSxJQUNNQyx1QkFBdUIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FEN0I7O0lBR01DLE07OztBQUNKLGtCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsSUFBdkIsRUFBNkJDLGFBQTdCLEVBQTRDO0FBQUE7O0FBQUE7O0FBRzFDLFVBQUtILEdBQUwsR0FBV0EsR0FBWDtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxVQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQVAwQztBQVEzQzs7OztvQ0FFZUMsWSxFQUFjO0FBQzVCLFdBQUtKLEdBQUwsQ0FB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LFksRUFBYztBQUMzRjtBQUNEOzs7b0NBRWU7QUFDZixVQUFNQyxXQUFXLEtBQUtBLFFBQUwsQ0FBY3hCLElBQWQsQ0FBbUIsSUFBbkIsQ0FBakI7QUFBQSxVQUNHeUIsY0FBYyxLQUFLQSxXQUFMLENBQWlCekIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FEakI7O0FBR0MsYUFBUTtBQUNOd0IsMEJBRE07QUFFTkM7QUFGTSxPQUFSO0FBSUQ7OzsrQkFFVWhDLE0sRUFBUTtBQUNqQixXQUFLaUMsbUJBQUwsQ0FBeUJqQyxNQUF6Qjs7QUFFQSxXQUFLa0MscUJBQUwsQ0FBMkJsQyxNQUEzQjtBQUNEOzs7bUNBRXFCbUMsVSxFQUFZO0FBQUEsa0NBQzJEQSxVQUQzRCxDQUN4QkMsYUFEd0I7QUFBQSxVQUN4QkEsYUFEd0IseUNBQ1I5QyxvQkFEUTtBQUFBLGtDQUMyRDZDLFVBRDNELENBQ2NFLGVBRGQ7QUFBQSxVQUNjQSxlQURkLHlDQUNnQ2hELHNCQURoQztBQUFBLFVBRTFCRyxHQUYwQixHQUVwQmQsSUFBSTRELGlCQUFKLENBQXNCRixhQUF0QixDQUZvQjtBQUFBLFVBRzFCM0MsSUFIMEIsR0FHbkJkLEtBQUsrQixXQUFMLEVBSG1CO0FBQUEsVUFJMUJoQixJQUowQixHQUluQmQsS0FBSzJELG1CQUFMLENBQXlCRixlQUF6QixDQUptQjtBQUFBLFVBSzFCMUMsYUFMMEIsR0FLVixJQUxVO0FBQUEsVUFNMUI2QyxNQU4wQixHQU1qQmhFLFFBQVFpRSxjQUFSLENBQXVCbEQsTUFBdkIsRUFBK0I0QyxVQUEvQixFQUEyQzNDLEdBQTNDLEVBQWdEQyxJQUFoRCxFQUFzREMsSUFBdEQsRUFBNERDLGFBQTVELENBTmlCOzs7QUFRaEMsYUFBTzZDLE1BQVA7QUFDRDs7OztFQXBIa0JoRSxPOztBQXVIckJrRSxPQUFPQyxPQUFQLEdBQWlCcEQsTUFBakIiLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgUGFuID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy9wYW4nKSxcbiAgICAgIFRpbHQgPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL3pvb20nKSxcbiAgICAgIGtleUV2ZW50cyA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMva2V5RXZlbnRzJyksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMvbW91c2VFdmVudHMnKSxcbiAgICAgIGNhbWVyYVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9jYW1lcmEnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVPZmZzZXRNYXRyaXgsIGNhbGN1bGF0ZVJvdGF0aW9uTWF0cml4LCBjYWxjdWxhdGVQb3NpdGlvbk1hdHJpeCwgY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCwgY2FsY3VsYXRlTm9ybWFsTWF0cml4IH0gPSBjYW1lcmFVdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgPSA1LFxuICAgICAgZGVmYXVsdEluaXRpYWxPZmZzZXQgPSBbIDAsIDAsIDAgXTtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhbiwgdGlsdCwgem9vbSwgdXBkYXRlSGFuZGxlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMuem9vbSA9IHpvb207XG5cbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMucGFuLnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuXG4gICAgdGhpcy50aWx0LnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnRpbHQubW91c2VVcEhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlVXBIYW5kbGVyKCk7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy50aWx0Lm1vdXNlRG93bkhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlRG93bkhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnRpbHQubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMucGFuLm1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGhpcy50aWx0KTtcblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEsIGNhbnZhcykge1xuICAgIHRoaXMuem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICBhZGRLZXlFdmVudEhhbmRsZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5SGFuZGxlciA9IHRoaXMuc2hpZnRLZXlIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBrZXlFdmVudHMuYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcik7XG4gIH1cbiAgXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVycyhjYW52YXMpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgbW91c2VVcEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duSGFuZGxlciA9IHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIG1vdXNlRXZlbnRzLm9uTW91c2VVcChtb3VzZVVwSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMub25Nb3VzZURvd24obW91c2VEb3duSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMub25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMub25Nb3VzZVdoZWVsKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKGNhbnZhcykge1xuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICBvblVwZGF0ZSh1cGRhdGVIYW5kbGVyKSB7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVyID0gdXBkYXRlSGFuZGxlcjtcbiAgfVxuICBcbiAgdXBkYXRlKGNhbnZhcykge1xuICAgIGNvbnN0IHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIG9mZnNldCA9IHRoaXMucGFuLmdldE9mZnNldCgpLFxuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IGNhbGN1bGF0ZU9mZnNldE1hdHJpeChvZmZzZXQpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gY2FsY3VsYXRlUm90YXRpb25NYXRyaXgoYW5nbGVzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IGNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4KGRpc3RhbmNlKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBjYWxjdWxhdGVOb3JtYWxNYXRyaXgocm90YXRpb25NYXRyaXgpO1xuICAgIFxuICAgIHRoaXMudXBkYXRlSGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdCAgY29uc3Qgb25VcGRhdGUgPSB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyksXG5cdFx0XHRcdCAgZm9yY2VVcGRhdGUgPSB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIG9uVXBkYXRlLFxuICAgICAgZm9yY2VVcGRhdGVcbiAgICB9KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICB0aGlzLmFkZEtleUV2ZW50SGFuZGxlcnMoY2FudmFzKTtcblxuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXJzKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbE9mZnNldCA9IGRlZmF1bHRJbml0aWFsT2Zmc2V0LCBpbml0aWFsRGlzdGFuY2UgPSBkZWZhdWx0SW5pdGlhbERpc3RhbmNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldChpbml0aWFsT2Zmc2V0KSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20sIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbWVyYTtcbiJdfQ==