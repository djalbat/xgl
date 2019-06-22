'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pan = require('../../miscellaneous/pan'),
    Tilt = require('../../miscellaneous/tilt'),
    Zoom = require('../../miscellaneous/zoom'),
    Camera = require('../camera'),
    vectorMaths = require('../../maths/vector'),
    cameraUtilities = require('../../utilities/camera');

var zero3 = vectorMaths.zero3,
    offsetMatrixFromOffsets = cameraUtilities.offsetMatrixFromOffsets,
    rotationMatrixFromAngles = cameraUtilities.rotationMatrixFromAngles,
    positionMatrixFromDistance = cameraUtilities.positionMatrixFromDistance,
    projectionMatrixFromWidthAndHeight = cameraUtilities.projectionMatrixFromWidthAndHeight,
    normalMatrixFromRotationMatrix = cameraUtilities.normalMatrixFromRotationMatrix;


var defaultInitialOffset = zero3(),
    defaultInitialDistance = 5;

var DesignCamera = function (_Camera) {
  _inherits(DesignCamera, _Camera);

  function DesignCamera(keyEvents, mouseEvents, updateHandler, pan, tilt, zoom) {
    _classCallCheck(this, DesignCamera);

    var _this = _possibleConstructorReturn(this, (DesignCamera.__proto__ || Object.getPrototypeOf(DesignCamera)).call(this, keyEvents, mouseEvents, updateHandler));

    _this.pan = pan;

    _this.tilt = tilt;

    _this.zoom = zoom;
    return _this;
  }

  _createClass(DesignCamera, [{
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      if (shiftKeyDown) {
        this.pan.resetPreviousOffsets();

        this.pan.resetPreviousMouseCoordinates();
      } else {
        this.tilt.resetPreviousAngles();

        this.tilt.resetPreviousMouseCoordinates();
      }
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
      this.pan.resetPreviousMouseCoordinates();

      this.tilt.resetPreviousAngles();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown();

      if (shiftKeyDown) {
        this.pan.resetreviousOffsets();

        this.pan.resetPreviousMouseCoordinates();
      }

      this.tilt.resetPreviousMouseCoordinates();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown();

      this.pan.setMouseCoordinates(mouseCoordinates);

      this.tilt.setMouseCoordinates(mouseCoordinates);

      if (mouseDown) {
        if (shiftKeyDown) {
          this.pan.updateOffset(this.tilt);
        } else {
          this.tilt.updateAngles();
        }

        this.update(canvas);
      }
    }
  }, {
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(delta, canvas) {
      this.zoom.updateDistance(delta);

      this.update(canvas);
    }
  }, {
    key: 'update',
    value: function update(canvas) {
      var width = canvas.getWidth(),
          height = canvas.getHeight(),
          angles = this.tilt.getAngles(),
          offsets = this.pan.getOffsets(),
          distance = this.zoom.getDistance(),
          offsetMatrix = offsetMatrixFromOffsets(offsets),
          rotationMatrix = rotationMatrixFromAngles(angles),
          positionMatrix = positionMatrixFromDistance(distance),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalMatrix = normalMatrixFromRotationMatrix(rotationMatrix),
          updateHandler = this.getUpdateHandler();

      updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$initialOf = properties.initialOffset,
          initialOffset = _properties$initialOf === undefined ? defaultInitialOffset : _properties$initialOf,
          _properties$initialDi = properties.initialDistance,
          initialDistance = _properties$initialDi === undefined ? defaultInitialDistance : _properties$initialDi,
          initialOffsets = initialOffset,
          pan = Pan.fromInitialOffsets(initialOffsets),
          tilt = Tilt.fromNothing(),
          zoom = Zoom.fromInitialDistance(initialDistance),
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom);


      return designCamera;
    }
  }]);

  return DesignCamera;
}(Camera);

module.exports = DesignCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwidmVjdG9yTWF0aHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJ6ZXJvMyIsIm9mZnNldE1hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25NYXRyaXhGcm9tQW5nbGVzIiwicG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UiLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4IiwiZGVmYXVsdEluaXRpYWxPZmZzZXQiLCJkZWZhdWx0SW5pdGlhbERpc3RhbmNlIiwiRGVzaWduQ2FtZXJhIiwia2V5RXZlbnRzIiwibW91c2VFdmVudHMiLCJ1cGRhdGVIYW5kbGVyIiwicGFuIiwidGlsdCIsInpvb20iLCJzaGlmdEtleURvd24iLCJyZXNldFByZXZpb3VzT2Zmc2V0cyIsInJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwicmVzZXRQcmV2aW91c0FuZ2xlcyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZURvd24iLCJjYW52YXMiLCJpc1NoaWZ0S2V5RG93biIsInJlc2V0cmV2aW91c09mZnNldHMiLCJzZXRNb3VzZUNvb3JkaW5hdGVzIiwidXBkYXRlT2Zmc2V0IiwidXBkYXRlQW5nbGVzIiwidXBkYXRlIiwiZGVsdGEiLCJ1cGRhdGVEaXN0YW5jZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJvZmZzZXRzIiwiZ2V0T2Zmc2V0cyIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsImdldFVwZGF0ZUhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbE9mZnNldCIsImluaXRpYWxEaXN0YW5jZSIsImluaXRpYWxPZmZzZXRzIiwiZnJvbUluaXRpYWxPZmZzZXRzIiwiZnJvbU5vdGhpbmciLCJmcm9tSW5pdGlhbERpc3RhbmNlIiwiZGVzaWduQ2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEseUJBQVIsQ0FBWjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsMEJBQVIsQ0FEYjtBQUFBLElBRU1FLE9BQU9GLFFBQVEsMEJBQVIsQ0FGYjtBQUFBLElBR01HLFNBQVNILFFBQVEsV0FBUixDQUhmO0FBQUEsSUFJTUksY0FBY0osUUFBUSxvQkFBUixDQUpwQjtBQUFBLElBS01LLGtCQUFrQkwsUUFBUSx3QkFBUixDQUx4Qjs7QUFPTSxJQUFFTSxLQUFGLEdBQVlGLFdBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLHVCQURGLEdBQ3dKRixlQUR4SixDQUNFRSx1QkFERjtBQUFBLElBQzJCQyx3QkFEM0IsR0FDd0pILGVBRHhKLENBQzJCRyx3QkFEM0I7QUFBQSxJQUNxREMsMEJBRHJELEdBQ3dKSixlQUR4SixDQUNxREksMEJBRHJEO0FBQUEsSUFDaUZDLGtDQURqRixHQUN3SkwsZUFEeEosQ0FDaUZLLGtDQURqRjtBQUFBLElBQ3FIQyw4QkFEckgsR0FDd0pOLGVBRHhKLENBQ3FITSw4QkFEckg7OztBQUdOLElBQU1DLHVCQUF1Qk4sT0FBN0I7QUFBQSxJQUNNTyx5QkFBeUIsQ0FEL0I7O0lBR01DLFk7OztBQUNKLHdCQUFZQyxTQUFaLEVBQXVCQyxXQUF2QixFQUFvQ0MsYUFBcEMsRUFBbURDLEdBQW5ELEVBQXdEQyxJQUF4RCxFQUE4REMsSUFBOUQsRUFBb0U7QUFBQTs7QUFBQSw0SEFDNURMLFNBRDRELEVBQ2pEQyxXQURpRCxFQUNwQ0MsYUFEb0M7O0FBR2xFLFVBQUtDLEdBQUwsR0FBV0EsR0FBWDs7QUFFQSxV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RUFKbUI7QUFBQSxVQUsxQnJDLElBTDBCLEdBS25CbEIsS0FBS3dELG1CQUFMLENBQXlCSixlQUF6QixDQUxtQjtBQUFBLFVBTTFCSyxZQU4wQixHQU1YeEQsT0FBT3lELGNBQVAsQ0FBc0I5QyxZQUF0QixFQUFvQ3NDLFVBQXBDLEVBQWdEbEMsR0FBaEQsRUFBcURDLElBQXJELEVBQTJEQyxJQUEzRCxDQU5XOzs7QUFRaEMsYUFBT3VDLFlBQVA7QUFDRDs7OztFQTFGd0J4RCxNOztBQTZGM0IwRCxPQUFPQyxPQUFQLEdBQWlCaEQsWUFBakIiLCJmaWxlIjoiZGVzaWduLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYW4gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3BhbicpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdCcpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvem9vbScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgY2FtZXJhVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2NhbWVyYScpO1xuXG5jb25zdCB7IHplcm8zIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgb2Zmc2V0TWF0cml4RnJvbU9mZnNldHMsIHJvdGF0aW9uTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQsIG5vcm1hbE1hdHJpeEZyb21Sb3RhdGlvbk1hdHJpeCB9ID0gY2FtZXJhVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbE9mZnNldCA9IHplcm8zKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbERpc3RhbmNlID0gNTtcblxuY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3Ioa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgcGFuLCB0aWx0LCB6b29tKSB7XG4gICAgc3VwZXIoa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcblxuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG5cbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucGFuLnJlc2V0UHJldmlvdXNPZmZzZXRzKCk7XG5cbiAgICAgIHRoaXMucGFuLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzQW5nbGVzKCk7XG5cbiAgICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5wYW4ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzQW5nbGVzKCk7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKTtcblxuICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucGFuLnJlc2V0cmV2aW91c09mZnNldHMoKTtcblxuICAgICAgdGhpcy5wYW4ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpO1xuXG4gICAgdGhpcy5wYW4uc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMudGlsdC5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXQodGhpcy50aWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSwgY2FudmFzKSB7XG4gICAgdGhpcy56b29tLnVwZGF0ZURpc3RhbmNlKGRlbHRhKTtcblxuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICB1cGRhdGUoY2FudmFzKSB7XG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSB0aGlzLnBhbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRNYXRyaXggPSBvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IHJvdGF0aW9uTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IG5vcm1hbE1hdHJpeEZyb21Sb3RhdGlvbk1hdHJpeChyb3RhdGlvbk1hdHJpeCksXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IHRoaXMuZ2V0VXBkYXRlSGFuZGxlcigpO1xuXG4gICAgdXBkYXRlSGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsT2Zmc2V0ID0gZGVmYXVsdEluaXRpYWxPZmZzZXQsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgaW5pdGlhbE9mZnNldHMgPSBpbml0aWFsT2Zmc2V0LCAvLy9cbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20pO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlc2lnbkNhbWVyYTtcbiJdfQ==