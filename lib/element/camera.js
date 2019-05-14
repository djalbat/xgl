'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    Pan = require('../miscellaneous/pan'),
    Tilt = require('../miscellaneous/tilt'),
    Zoom = require('../miscellaneous/zoom'),
    KeyEvents = require('../miscellaneous/keyEvents'),
    MouseEvents = require('../miscellaneous/mouseEvents'),
    cameraUtilities = require('../utilities/camera');

var calculateOffsetMatrix = cameraUtilities.calculateOffsetMatrix,
    calculateRotationMatrix = cameraUtilities.calculateRotationMatrix,
    calculatePositionMatrix = cameraUtilities.calculatePositionMatrix,
    calculateProjectionMatrix = cameraUtilities.calculateProjectionMatrix,
    calculateNormalMatrix = cameraUtilities.calculateNormalMatrix;


var defaultInitialDistance = 10,
    defaultInitialOffset = [0, 0, 0];

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(pan, tilt, zoom, keyEvents, mouseEvents, updateHandler) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.pan = pan;
    _this.tilt = tilt;
    _this.zoom = zoom;
    _this.keyEvents = keyEvents;
    _this.mouseEvents = mouseEvents;
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
      var shiftKeyDown = this.keyEvents.isShiftKeyDown();

      this.tilt.mouseMoveHandler(mouseCoordinates, mouseDown);

      this.pan.mouseMoveHandler(mouseCoordinates, mouseDown, shiftKeyDown, this.tilt);

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
          keyEvents = null,
          mouseEvents = null,
          updateHandler = null,
          camera = Element.fromProperties(Camera, properties, pan, tilt, zoom, keyEvents, mouseEvents, updateHandler);


      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlBhbiIsIlRpbHQiLCJab29tIiwiS2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJjYWxjdWxhdGVPZmZzZXRNYXRyaXgiLCJjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeCIsImNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4IiwiY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCIsImNhbGN1bGF0ZU5vcm1hbE1hdHJpeCIsImRlZmF1bHRJbml0aWFsRGlzdGFuY2UiLCJkZWZhdWx0SW5pdGlhbE9mZnNldCIsIkNhbWVyYSIsInBhbiIsInRpbHQiLCJ6b29tIiwia2V5RXZlbnRzIiwibW91c2VFdmVudHMiLCJ1cGRhdGVIYW5kbGVyIiwic2hpZnRLZXlEb3duIiwic2hpZnRLZXlIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlRG93biIsImNhbnZhcyIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsImlzU2hpZnRLZXlEb3duIiwibW91c2VNb3ZlSGFuZGxlciIsInVwZGF0ZSIsImRlbHRhIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJvZmZzZXQiLCJnZXRPZmZzZXQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJvblVwZGF0ZSIsImJpbmQiLCJmb3JjZVVwZGF0ZSIsImZyb21Ob3RoaW5nIiwibW91c2VXaGVlbEhhbmRsZXIiLCJhZGRTaGlmdEtleUhhbmRsZXIiLCJhZGRNb3VzZVVwSGFuZGxlciIsImFkZE1vdXNlRG93bkhhbmRsZXIiLCJhZGRNb3VzZU1vdmVIYW5kbGVyIiwiYWRkTW91c2VXaGVlbEhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbE9mZnNldCIsImluaXRpYWxEaXN0YW5jZSIsImZyb21Jbml0aWFsT2Zmc2V0IiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImNhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxNQUFNRCxRQUFRLHNCQUFSLENBRFo7QUFBQSxJQUVNRSxPQUFPRixRQUFRLHVCQUFSLENBRmI7QUFBQSxJQUdNRyxPQUFPSCxRQUFRLHVCQUFSLENBSGI7QUFBQSxJQUlNSSxZQUFZSixRQUFRLDRCQUFSLENBSmxCO0FBQUEsSUFLTUssY0FBY0wsUUFBUSw4QkFBUixDQUxwQjtBQUFBLElBTU1NLGtCQUFrQk4sUUFBUSxxQkFBUixDQU54Qjs7SUFRUU8scUIsR0FBOEhELGUsQ0FBOUhDLHFCO0lBQXVCQyx1QixHQUF1R0YsZSxDQUF2R0UsdUI7SUFBeUJDLHVCLEdBQThFSCxlLENBQTlFRyx1QjtJQUF5QkMseUIsR0FBcURKLGUsQ0FBckRJLHlCO0lBQTJCQyxxQixHQUEwQkwsZSxDQUExQksscUI7OztBQUU1RyxJQUFNQyx5QkFBeUIsRUFBL0I7QUFBQSxJQUNNQyx1QkFBdUIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FEN0I7O0lBR01DLE07OztBQUNKLGtCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsSUFBdkIsRUFBNkJDLFNBQTdCLEVBQXdDQyxXQUF4QyxFQUFxREMsYUFBckQsRUFBb0U7QUFBQTs7QUFBQTs7QUFHbEUsVUFBS0wsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxVQUFL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QmxELE1BQXZCLEVBQStCNEMsVUFBL0IsRUFBMkMzQyxHQUEzQyxFQUFnREMsSUFBaEQsRUFBc0RDLElBQXRELEVBQTREQyxTQUE1RCxFQUF1RUMsV0FBdkUsRUFBb0ZDLGFBQXBGLENBUmlCOzs7QUFVaEMsYUFBTzJDLE1BQVA7QUFDRDs7OztFQXJIa0JoRSxPOztBQXdIckJrRSxPQUFPQyxPQUFQLEdBQWlCcEQsTUFBakIiLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgUGFuID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy9wYW4nKSxcbiAgICAgIFRpbHQgPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL3pvb20nKSxcbiAgICAgIEtleUV2ZW50cyA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMva2V5RXZlbnRzJyksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMvbW91c2VFdmVudHMnKSxcbiAgICAgIGNhbWVyYVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9jYW1lcmEnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVPZmZzZXRNYXRyaXgsIGNhbGN1bGF0ZVJvdGF0aW9uTWF0cml4LCBjYWxjdWxhdGVQb3NpdGlvbk1hdHJpeCwgY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCwgY2FsY3VsYXRlTm9ybWFsTWF0cml4IH0gPSBjYW1lcmFVdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgPSAxMCxcbiAgICAgIGRlZmF1bHRJbml0aWFsT2Zmc2V0ID0gWyAwLCAwLCAwIF07XG5cbmNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYW4sIHRpbHQsIHpvb20sIGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMucGFuLnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuXG4gICAgdGhpcy50aWx0LnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnRpbHQubW91c2VVcEhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlVXBIYW5kbGVyKCk7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy50aWx0Lm1vdXNlRG93bkhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlRG93bkhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpO1xuXG4gICAgdGhpcy50aWx0Lm1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duKTtcblxuICAgIHRoaXMucGFuLm1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBzaGlmdEtleURvd24sIHRoaXMudGlsdCk7XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUoY2FudmFzKSB7XG4gICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgfVxuXG4gIG9uVXBkYXRlKHVwZGF0ZUhhbmRsZXIpIHtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG4gIFxuICB1cGRhdGUoY2FudmFzKSB7XG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0ID0gdGhpcy5wYW4uZ2V0T2Zmc2V0KCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gY2FsY3VsYXRlT2Zmc2V0TWF0cml4KG9mZnNldCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSBjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeChhbmdsZXMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gY2FsY3VsYXRlUG9zaXRpb25NYXRyaXgoZGlzdGFuY2UpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBjYWxjdWxhdGVQcm9qZWN0aW9uTWF0cml4KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IGNhbGN1bGF0ZU5vcm1hbE1hdHJpeChyb3RhdGlvbk1hdHJpeCk7XG4gICAgXG4gICAgdGhpcy51cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIC8vL1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBvblVwZGF0ZSA9IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSxcblx0XHRcdFx0ICBmb3JjZVVwZGF0ZSA9IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgb25VcGRhdGUsXG4gICAgICBmb3JjZVVwZGF0ZVxuICAgIH0pO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBzaGlmdEtleUhhbmRsZXIgPSB0aGlzLnNoaWZ0S2V5SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlVXBIYW5kbGVyID0gdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBrZXlFdmVudHMuYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcik7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcblxuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxPZmZzZXQgPSBkZWZhdWx0SW5pdGlhbE9mZnNldCwgaW5pdGlhbERpc3RhbmNlID0gZGVmYXVsdEluaXRpYWxEaXN0YW5jZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXQoaW5pdGlhbE9mZnNldCksXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAga2V5RXZlbnRzID0gbnVsbCwgLy8vXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBudWxsLCAvLy9cbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20sIGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbWVyYTtcbiJdfQ==