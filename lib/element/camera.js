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
      this.tilt.mouseMoveHandler(mouseCoordinates);

      this.pan.mouseMoveHandler(mouseCoordinates, mouseDown, this.tilt);

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

      mouseEvents.onMouseUp(mouseUpHandler);
      mouseEvents.onMouseDown(mouseDownHandler);
      mouseEvents.onMouseMove(mouseMoveHandler);
      mouseEvents.onMouseWheel(mouseWheelHandler);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlBhbiIsIlRpbHQiLCJab29tIiwiS2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJjYWxjdWxhdGVPZmZzZXRNYXRyaXgiLCJjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeCIsImNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4IiwiY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCIsImNhbGN1bGF0ZU5vcm1hbE1hdHJpeCIsImRlZmF1bHRJbml0aWFsRGlzdGFuY2UiLCJkZWZhdWx0SW5pdGlhbE9mZnNldCIsIkNhbWVyYSIsInBhbiIsInRpbHQiLCJ6b29tIiwia2V5RXZlbnRzIiwibW91c2VFdmVudHMiLCJ1cGRhdGVIYW5kbGVyIiwic2hpZnRLZXlEb3duIiwic2hpZnRLZXlIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlRG93biIsImNhbnZhcyIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ1cGRhdGUiLCJkZWx0YSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwib2Zmc2V0IiwiZ2V0T2Zmc2V0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4Iiwib25VcGRhdGUiLCJiaW5kIiwiZm9yY2VVcGRhdGUiLCJmcm9tTm90aGluZyIsIm1vdXNlV2hlZWxIYW5kbGVyIiwiYWRkU2hpZnRLZXlIYW5kbGVyIiwib25Nb3VzZVVwIiwib25Nb3VzZURvd24iLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VXaGVlbCIsInByb3BlcnRpZXMiLCJpbml0aWFsT2Zmc2V0IiwiaW5pdGlhbERpc3RhbmNlIiwiZnJvbUluaXRpYWxPZmZzZXQiLCJmcm9tSW5pdGlhbERpc3RhbmNlIiwiY2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLE1BQU1ELFFBQVEsc0JBQVIsQ0FEWjtBQUFBLElBRU1FLE9BQU9GLFFBQVEsdUJBQVIsQ0FGYjtBQUFBLElBR01HLE9BQU9ILFFBQVEsdUJBQVIsQ0FIYjtBQUFBLElBSU1JLFlBQVlKLFFBQVEsNEJBQVIsQ0FKbEI7QUFBQSxJQUtNSyxjQUFjTCxRQUFRLDhCQUFSLENBTHBCO0FBQUEsSUFNTU0sa0JBQWtCTixRQUFRLHFCQUFSLENBTnhCOztJQVFRTyxxQixHQUE4SEQsZSxDQUE5SEMscUI7SUFBdUJDLHVCLEdBQXVHRixlLENBQXZHRSx1QjtJQUF5QkMsdUIsR0FBOEVILGUsQ0FBOUVHLHVCO0lBQXlCQyx5QixHQUFxREosZSxDQUFyREkseUI7SUFBMkJDLHFCLEdBQTBCTCxlLENBQTFCSyxxQjs7O0FBRTVHLElBQU1DLHlCQUF5QixFQUEvQjtBQUFBLElBQ01DLHVCQUF1QixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUQ3Qjs7SUFHTUMsTTs7O0FBQ0osa0JBQVlDLEdBQVosRUFBaUJDLElBQWpCLEVBQXVCQyxJQUF2QixFQUE2QkMsU0FBN0IsRUFBd0NDLFdBQXhDLEVBQXFEQyxhQUFyRCxFQUFvRTtBQUFBOztBQUFBOztBQUdsRSxVQUFLTCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQkEsYUFBckI7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TUFBUDtBQUNEOzs7O0VBbkhrQi9ELE87O0FBc0hyQmlFLE9BQU9DLE9BQVAsR0FBaUJuRCxNQUFqQiIsImZpbGUiOiJjYW1lcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBQYW4gPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL3BhbicpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMvdGlsdCcpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMvem9vbScpLFxuICAgICAgS2V5RXZlbnRzID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy9rZXlFdmVudHMnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy9tb3VzZUV2ZW50cycpLFxuICAgICAgY2FtZXJhVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2NhbWVyYScpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZU9mZnNldE1hdHJpeCwgY2FsY3VsYXRlUm90YXRpb25NYXRyaXgsIGNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4LCBjYWxjdWxhdGVQcm9qZWN0aW9uTWF0cml4LCBjYWxjdWxhdGVOb3JtYWxNYXRyaXggfSA9IGNhbWVyYVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxEaXN0YW5jZSA9IDEwLFxuICAgICAgZGVmYXVsdEluaXRpYWxPZmZzZXQgPSBbIDAsIDAsIDAgXTtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhbiwgdGlsdCwgem9vbSwga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMuem9vbSA9IHpvb207XG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHVwZGF0ZUhhbmRsZXI7XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5wYW4uc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG5cbiAgICB0aGlzLnRpbHQuc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMudGlsdC5tb3VzZVVwSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnRpbHQubW91c2VEb3duSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VEb3duSGFuZGxlcigpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMudGlsdC5tb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIHRoaXMudGlsdCk7XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUoY2FudmFzKSB7XG4gICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgfVxuXG4gIG9uVXBkYXRlKHVwZGF0ZUhhbmRsZXIpIHtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG4gIFxuICB1cGRhdGUoY2FudmFzKSB7XG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0ID0gdGhpcy5wYW4uZ2V0T2Zmc2V0KCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gY2FsY3VsYXRlT2Zmc2V0TWF0cml4KG9mZnNldCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSBjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeChhbmdsZXMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gY2FsY3VsYXRlUG9zaXRpb25NYXRyaXgoZGlzdGFuY2UpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBjYWxjdWxhdGVQcm9qZWN0aW9uTWF0cml4KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IGNhbGN1bGF0ZU5vcm1hbE1hdHJpeChyb3RhdGlvbk1hdHJpeCk7XG4gICAgXG4gICAgdGhpcy51cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIC8vL1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBvblVwZGF0ZSA9IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSxcblx0XHRcdFx0ICBmb3JjZVVwZGF0ZSA9IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgb25VcGRhdGUsXG4gICAgICBmb3JjZVVwZGF0ZVxuICAgIH0pO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBzaGlmdEtleUhhbmRsZXIgPSB0aGlzLnNoaWZ0S2V5SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlVXBIYW5kbGVyID0gdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBrZXlFdmVudHMuYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcik7XG5cbiAgICBtb3VzZUV2ZW50cy5vbk1vdXNlVXAobW91c2VVcEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLm9uTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLm9uTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLm9uTW91c2VXaGVlbChtb3VzZVdoZWVsSGFuZGxlcik7XG5cbiAgICB0aGlzLmtleUV2ZW50cyA9IGtleUV2ZW50cztcblxuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsT2Zmc2V0ID0gZGVmYXVsdEluaXRpYWxPZmZzZXQsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGtleUV2ZW50cyA9IG51bGwsIC8vL1xuICAgICAgICAgIG1vdXNlRXZlbnRzID0gbnVsbCwgLy8vXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IG51bGwsICAvLy9cbiAgICAgICAgICBjYW1lcmEgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0LCB6b29tLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iXX0=