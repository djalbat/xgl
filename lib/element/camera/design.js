'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pan = require('../../miscellaneous/pan'),
    Tilt = require('../../miscellaneous/tilt'),
    Zoom = require('../../miscellaneous/zoom'),
    Camera = require('../camera'),
    KeyEvents = require('../../miscellaneous/keyEvents'),
    MouseEvents = require('../../miscellaneous/mouseEvents'),
    cameraUtilities = require('../../utilities/camera');

var calculateOffsetMatrix = cameraUtilities.calculateOffsetMatrix,
    calculateRotationMatrix = cameraUtilities.calculateRotationMatrix,
    calculatePositionMatrix = cameraUtilities.calculatePositionMatrix,
    calculateProjectionMatrix = cameraUtilities.calculateProjectionMatrix,
    calculateNormalMatrix = cameraUtilities.calculateNormalMatrix;


var defaultInitialDistance = 5,
    defaultInitialOffset = [0, 0, 0];

var DesignCamera = function (_Camera) {
  _inherits(DesignCamera, _Camera);

  function DesignCamera(pan, tilt, zoom, keyEvents, mouseEvents, updateHandler) {
    _classCallCheck(this, DesignCamera);

    var _this = _possibleConstructorReturn(this, (DesignCamera.__proto__ || Object.getPrototypeOf(DesignCamera)).call(this));

    _this.pan = pan;
    _this.tilt = tilt;
    _this.zoom = zoom;
    _this.keyEvents = keyEvents;
    _this.mouseEvents = mouseEvents;
    _this.updateHandler = updateHandler;
    return _this;
  }

  _createClass(DesignCamera, [{
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

      this.tilt.mouseMoveHandler(mouseCoordinates, mouseDown, shiftKeyDown);

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
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom, keyEvents, mouseEvents, updateHandler);


      return designCamera;
    }
  }]);

  return DesignCamera;
}(Camera);

module.exports = DesignCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwiS2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJjYWxjdWxhdGVPZmZzZXRNYXRyaXgiLCJjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeCIsImNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4IiwiY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCIsImNhbGN1bGF0ZU5vcm1hbE1hdHJpeCIsImRlZmF1bHRJbml0aWFsRGlzdGFuY2UiLCJkZWZhdWx0SW5pdGlhbE9mZnNldCIsIkRlc2lnbkNhbWVyYSIsInBhbiIsInRpbHQiLCJ6b29tIiwia2V5RXZlbnRzIiwibW91c2VFdmVudHMiLCJ1cGRhdGVIYW5kbGVyIiwic2hpZnRLZXlEb3duIiwic2hpZnRLZXlIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlRG93biIsImNhbnZhcyIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsImlzU2hpZnRLZXlEb3duIiwibW91c2VNb3ZlSGFuZGxlciIsInVwZGF0ZSIsImRlbHRhIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJvZmZzZXQiLCJnZXRPZmZzZXQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJmcm9tTm90aGluZyIsImJpbmQiLCJtb3VzZVdoZWVsSGFuZGxlciIsImFkZFNoaWZ0S2V5SGFuZGxlciIsImFkZE1vdXNlVXBIYW5kbGVyIiwiYWRkTW91c2VEb3duSGFuZGxlciIsImFkZE1vdXNlTW92ZUhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsSGFuZGxlciIsInByb3BlcnRpZXMiLCJpbml0aWFsT2Zmc2V0IiwiaW5pdGlhbERpc3RhbmNlIiwiZnJvbUluaXRpYWxPZmZzZXQiLCJmcm9tSW5pdGlhbERpc3RhbmNlIiwiZGVzaWduQ2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEseUJBQVIsQ0FBWjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsMEJBQVIsQ0FEYjtBQUFBLElBRU1FLE9BQU9GLFFBQVEsMEJBQVIsQ0FGYjtBQUFBLElBR01HLFNBQVNILFFBQVEsV0FBUixDQUhmO0FBQUEsSUFJTUksWUFBWUosUUFBUSwrQkFBUixDQUpsQjtBQUFBLElBS01LLGNBQWNMLFFBQVEsaUNBQVIsQ0FMcEI7QUFBQSxJQU1NTSxrQkFBa0JOLFFBQVEsd0JBQVIsQ0FOeEI7O0lBUVFPLHFCLEdBQThIRCxlLENBQTlIQyxxQjtJQUF1QkMsdUIsR0FBdUdGLGUsQ0FBdkdFLHVCO0lBQXlCQyx1QixHQUE4RUgsZSxDQUE5RUcsdUI7SUFBeUJDLHlCLEdBQXFESixlLENBQXJESSx5QjtJQUEyQkMscUIsR0FBMEJMLGUsQ0FBMUJLLHFCOzs7QUFFNUcsSUFBTUMseUJBQXlCLENBQS9CO0FBQUEsSUFDTUMsdUJBQXVCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRDdCOztJQUdNQyxZOzs7QUFDSix3QkFBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBdUJDLElBQXZCLEVBQTZCQyxTQUE3QixFQUF3Q0MsV0FBeEMsRUFBcURDLGFBQXJELEVBQW9FO0FBQUE7O0FBQUE7O0FBR2xFLFVBQUtMLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsVUFBS0MsV0FB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QztBQUNBUixrQkFBWW1DLG1CQUFaLENBQWdDekIsZ0JBQWhDO0FBQ0FWLGtCQUFZb0Msb0JBQVosQ0FBaUNMLGlCQUFqQzs7QUFFQSxXQUFLaEMsU0FBTCxHQUFpQkEsU0FBakI7O0FBRUEsV0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7O21DQUVxQnFDLFUsRUFBWTtBQUFBLGtDQUMyREEsVUFEM0QsQ0FDeEJDLGFBRHdCO0FBQUEsVUFDeEJBLGFBRHdCLHlDQUNSNUMsb0JBRFE7QUFBQSxrQ0FDMkQyQyxVQUQzRCxDQUNjRSxlQURkO0FBQUEsVUFDY0EsZUFEZCx5Q0FDZ0M5QyxzQkFEaEM7QUFBQSxVQUUxQkcsR0FGMEIsR0FFcEJoQixJQUFJNEQsaUJBQUosQ0FBc0JGLGFBQXRCLENBRm9CO0FBQUEsVUFHMUJ6QyxJQUgwQixHQUduQmYsS0FBSytDLFdBQUwsRUFIbUI7QUFBQSxVQUkxQi9CLElBSjBCLEdBSW5CZixLQUFLMEQsbUJBQUwsQ0FBeUJGLGVBQXpCLENBSm1CO0FBQUEsVUFLMUJ4QyxTQUwwQixHQUtkLElBTGM7QUFBQSxVQU0xQkMsV0FOMEIsR0FNWixJQU5ZO0FBQUEsVUFPMUJDLGFBUDBCLEdBT1YsSUFQVTtBQUFBLFVBUTFCeUMsWUFSMEIsR0FRWDFELE9BQU8yRCxjQUFQLENBQXNCaEQsWUFBdEIsRUFBb0MwQyxVQUFwQyxFQUFnRHpDLEdBQWhELEVBQXFEQyxJQUFyRCxFQUEyREMsSUFBM0QsRUFBaUVDLFNBQWpFLEVBQTRFQyxXQUE1RSxFQUF5RkMsYUFBekYsQ0FSVzs7O0FBVWhDLGFBQU95QyxZQUFQO0FBQ0Q7Ozs7RUEvRndCMUQsTTs7QUFrRzNCNEQsT0FBT0MsT0FBUCxHQUFpQmxELFlBQWpCIiwiZmlsZSI6ImRlc2lnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFuID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy9wYW4nKSxcbiAgICAgIFRpbHQgPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3pvb20nKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgS2V5RXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy9rZXlFdmVudHMnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy9tb3VzZUV2ZW50cycpLFxuICAgICAgY2FtZXJhVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2NhbWVyYScpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZU9mZnNldE1hdHJpeCwgY2FsY3VsYXRlUm90YXRpb25NYXRyaXgsIGNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4LCBjYWxjdWxhdGVQcm9qZWN0aW9uTWF0cml4LCBjYWxjdWxhdGVOb3JtYWxNYXRyaXggfSA9IGNhbWVyYVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxEaXN0YW5jZSA9IDUsXG4gICAgICBkZWZhdWx0SW5pdGlhbE9mZnNldCA9IFsgMCwgMCwgMCBdO1xuXG5jbGFzcyBEZXNpZ25DYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvcihwYW4sIHRpbHQsIHpvb20sIGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMucGFuLnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuXG4gICAgdGhpcy50aWx0LnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnRpbHQubW91c2VVcEhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlVXBIYW5kbGVyKCk7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy50aWx0Lm1vdXNlRG93bkhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlRG93bkhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpO1xuXG4gICAgdGhpcy50aWx0Lm1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBzaGlmdEtleURvd24pO1xuXG4gICAgdGhpcy5wYW4ubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIHNoaWZ0S2V5RG93biwgdGhpcy50aWx0KTtcblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEsIGNhbnZhcykge1xuICAgIHRoaXMuem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICB1cGRhdGUoY2FudmFzKSB7XG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0ID0gdGhpcy5wYW4uZ2V0T2Zmc2V0KCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gY2FsY3VsYXRlT2Zmc2V0TWF0cml4KG9mZnNldCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSBjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeChhbmdsZXMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gY2FsY3VsYXRlUG9zaXRpb25NYXRyaXgoZGlzdGFuY2UpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBjYWxjdWxhdGVQcm9qZWN0aW9uTWF0cml4KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IGNhbGN1bGF0ZU5vcm1hbE1hdHJpeChyb3RhdGlvbk1hdHJpeCk7XG4gICAgXG4gICAgdGhpcy51cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBrZXlFdmVudHMgPSBLZXlFdmVudHMuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgc2hpZnRLZXlIYW5kbGVyID0gdGhpcy5zaGlmdEtleUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVVwSGFuZGxlciA9IHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZURvd25IYW5kbGVyID0gdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAga2V5RXZlbnRzLmFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEhhbmRsZXIobW91c2VVcEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcik7XG5cbiAgICB0aGlzLmtleUV2ZW50cyA9IGtleUV2ZW50cztcblxuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsT2Zmc2V0ID0gZGVmYXVsdEluaXRpYWxPZmZzZXQsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGtleUV2ZW50cyA9IG51bGwsIC8vL1xuICAgICAgICAgIG1vdXNlRXZlbnRzID0gbnVsbCwgLy8vXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IG51bGwsICAvLy9cbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20sIGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlc2lnbkNhbWVyYTtcbiJdfQ==