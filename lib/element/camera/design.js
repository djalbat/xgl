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

var zero2 = vectorMaths.zero2,
    zero3 = vectorMaths.zero3,
    offsetMatrixFromOffsets = cameraUtilities.offsetMatrixFromOffsets,
    rotationMatrixFromAngles = cameraUtilities.rotationMatrixFromAngles,
    positionMatrixFromDistance = cameraUtilities.positionMatrixFromDistance,
    projectionMatrixFromWidthAndHeight = cameraUtilities.projectionMatrixFromWidthAndHeight,
    normalMatrixFromRotationMatrix = cameraUtilities.normalMatrixFromRotationMatrix;


var defaultInitialAngles = zero2(),
    defaultInitialOffset = zero3(),
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
        this.pan.resetPreviousOffsets();

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
      var _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === undefined ? defaultInitialAngles : _properties$initialAn,
          _properties$initialOf = properties.initialOffset,
          initialOffset = _properties$initialOf === undefined ? defaultInitialOffset : _properties$initialOf,
          _properties$initialDi = properties.initialDistance,
          initialDistance = _properties$initialDi === undefined ? defaultInitialDistance : _properties$initialDi,
          initialOffsets = initialOffset,
          flipped = false,
          pan = Pan.fromInitialOffsets(initialOffsets),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          zoom = Zoom.fromInitialDistance(initialDistance),
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom);


      return designCamera;
    }
  }]);

  return DesignCamera;
}(Camera);

module.exports = DesignCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwidmVjdG9yTWF0aHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJ6ZXJvMiIsInplcm8zIiwib2Zmc2V0TWF0cml4RnJvbU9mZnNldHMiLCJyb3RhdGlvbk1hdHJpeEZyb21BbmdsZXMiLCJwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSIsInByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQiLCJub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXgiLCJkZWZhdWx0SW5pdGlhbEFuZ2xlcyIsImRlZmF1bHRJbml0aWFsT2Zmc2V0IiwiZGVmYXVsdEluaXRpYWxEaXN0YW5jZSIsIkRlc2lnbkNhbWVyYSIsImtleUV2ZW50cyIsIm1vdXNlRXZlbnRzIiwidXBkYXRlSGFuZGxlciIsInBhbiIsInRpbHQiLCJ6b29tIiwic2hpZnRLZXlEb3duIiwicmVzZXRQcmV2aW91c09mZnNldHMiLCJyZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInJlc2V0UHJldmlvdXNBbmdsZXMiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VEb3duIiwiY2FudmFzIiwiaXNTaGlmdEtleURvd24iLCJzZXRNb3VzZUNvb3JkaW5hdGVzIiwidXBkYXRlT2Zmc2V0IiwidXBkYXRlQW5nbGVzIiwidXBkYXRlIiwiZGVsdGEiLCJ1cGRhdGVEaXN0YW5jZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJvZmZzZXRzIiwiZ2V0T2Zmc2V0cyIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsImdldFVwZGF0ZUhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbEFuZ2xlcyIsImluaXRpYWxPZmZzZXQiLCJpbml0aWFsRGlzdGFuY2UiLCJpbml0aWFsT2Zmc2V0cyIsImZsaXBwZWQiLCJmcm9tSW5pdGlhbE9mZnNldHMiLCJmcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQiLCJmcm9tSW5pdGlhbERpc3RhbmNlIiwiZGVzaWduQ2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEseUJBQVIsQ0FBWjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsMEJBQVIsQ0FEYjtBQUFBLElBRU1FLE9BQU9GLFFBQVEsMEJBQVIsQ0FGYjtBQUFBLElBR01HLFNBQVNILFFBQVEsV0FBUixDQUhmO0FBQUEsSUFJTUksY0FBY0osUUFBUSxvQkFBUixDQUpwQjtBQUFBLElBS01LLGtCQUFrQkwsUUFBUSx3QkFBUixDQUx4Qjs7SUFPUU0sSyxHQUFpQkYsVyxDQUFqQkUsSztJQUFPQyxLLEdBQVVILFcsQ0FBVkcsSztJQUNQQyx1QixHQUFzSkgsZSxDQUF0SkcsdUI7SUFBeUJDLHdCLEdBQTZISixlLENBQTdISSx3QjtJQUEwQkMsMEIsR0FBbUdMLGUsQ0FBbkdLLDBCO0lBQTRCQyxrQyxHQUF1RU4sZSxDQUF2RU0sa0M7SUFBb0NDLDhCLEdBQW1DUCxlLENBQW5DTyw4Qjs7O0FBRTNILElBQU1DLHVCQUF1QlAsT0FBN0I7QUFBQSxJQUNNUSx1QkFBdUJQLE9BRDdCO0FBQUEsSUFFTVEseUJBQXlCLENBRi9COztJQUlNQyxZOzs7QUFDSix3QkFBWUMsU0FBWixFQUF1QkMsV0FBdkIsRUFBb0NDLGFBQXBDLEVBQW1EQyxHQUFuRCxFQUF3REMsSUFBeEQsRUFBOERDLElBQTlELEVBQW9FO0FBQUE7O0FBQUEsNEhBQzVETCxTQUQ0RCxFQUNqREMsV0FEaUQsRUFDcENDLGFBRG9DOztBQUdsRSxVQUFLQyxHQUFMLEdBQVdBLEdBQVg7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S0FIZ0I7QUFBQSxVQUkxQnRDLEdBSjBCLEdBSXBCckIsSUFBSTRELGtCQUFKLENBQXVCRixjQUF2QixDQUpvQjtBQUFBLFVBSzFCcEMsSUFMMEIsR0FLbkJwQixLQUFLMkQsMkJBQUwsQ0FBaUNOLGFBQWpDLEVBQWdESSxPQUFoRCxDQUxtQjtBQUFBLFVBTTFCcEMsSUFOMEIsR0FNbkJwQixLQUFLMkQsbUJBQUwsQ0FBeUJMLGVBQXpCLENBTm1CO0FBQUEsVUFPMUJNLFlBUDBCLEdBT1gzRCxPQUFPNEQsY0FBUCxDQUFzQi9DLFlBQXRCLEVBQW9DcUMsVUFBcEMsRUFBZ0RqQyxHQUFoRCxFQUFxREMsSUFBckQsRUFBMkRDLElBQTNELENBUFc7OztBQVNoQyxhQUFPd0MsWUFBUDtBQUNEOzs7O0VBM0Z3QjNELE07O0FBOEYzQjZELE9BQU9DLE9BQVAsR0FBaUJqRCxZQUFqQiIsImZpbGUiOiJkZXNpZ24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbiA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvcGFuJyksXG4gICAgICBUaWx0ID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0JyksXG4gICAgICBab29tID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy96b29tJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9jYW1lcmEnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBjYW1lcmFVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvY2FtZXJhJyk7XG5cbmNvbnN0IHsgemVybzIsIHplcm8zIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgb2Zmc2V0TWF0cml4RnJvbU9mZnNldHMsIHJvdGF0aW9uTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQsIG5vcm1hbE1hdHJpeEZyb21Sb3RhdGlvbk1hdHJpeCB9ID0gY2FtZXJhVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbEFuZ2xlcyA9IHplcm8yKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbE9mZnNldCA9IHplcm8zKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbERpc3RhbmNlID0gNTtcblxuY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3Ioa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgcGFuLCB0aWx0LCB6b29tKSB7XG4gICAgc3VwZXIoa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcblxuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG5cbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucGFuLnJlc2V0UHJldmlvdXNPZmZzZXRzKCk7XG5cbiAgICAgIHRoaXMucGFuLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzQW5nbGVzKCk7XG5cbiAgICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5wYW4ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzQW5nbGVzKCk7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKTtcblxuICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucGFuLnJlc2V0UHJldmlvdXNPZmZzZXRzKCk7XG5cbiAgICAgIHRoaXMucGFuLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuXG4gICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKTtcblxuICAgIHRoaXMucGFuLnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnRpbHQuc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0KHRoaXMudGlsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbHQudXBkYXRlQW5nbGVzKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEsIGNhbnZhcykge1xuICAgIHRoaXMuem9vbS51cGRhdGVEaXN0YW5jZShkZWx0YSk7XG5cbiAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICB9XG5cbiAgdXBkYXRlKGNhbnZhcykge1xuICAgIGNvbnN0IHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gb2Zmc2V0TWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSByb3RhdGlvbk1hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXgocm90YXRpb25NYXRyaXgpLFxuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSB0aGlzLmdldFVwZGF0ZUhhbmRsZXIoKTtcblxuICAgIHVwZGF0ZUhhbmRsZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbEFuZ2xlcyA9IGRlZmF1bHRJbml0aWFsQW5nbGVzLCBpbml0aWFsT2Zmc2V0ID0gZGVmYXVsdEluaXRpYWxPZmZzZXQsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgaW5pdGlhbE9mZnNldHMgPSBpbml0aWFsT2Zmc2V0LCAvLy9cbiAgICAgICAgICBmbGlwcGVkID0gZmFsc2UsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0cyhpbml0aWFsT2Zmc2V0cyksXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20pO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlc2lnbkNhbWVyYTtcbiJdfQ==