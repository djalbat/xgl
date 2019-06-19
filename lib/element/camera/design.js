'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pan = require('../../miscellaneous/pan'),
    Tilt = require('../../miscellaneous/tilt'),
    Zoom = require('../../miscellaneous/zoom'),
    Camera = require('../camera'),
    cameraUtilities = require('../../utilities/camera');

var offsetMatrixFromOffset = cameraUtilities.offsetMatrixFromOffset,
    rotationMatrixFromAngles = cameraUtilities.rotationMatrixFromAngles,
    positionMatrixFromDistance = cameraUtilities.positionMatrixFromDistance,
    projectionMatrixFromWidthAndHeight = cameraUtilities.projectionMatrixFromWidthAndHeight,
    normalMatrixFromRotationMatrix = cameraUtilities.normalMatrixFromRotationMatrix;


var defaultInitialDistance = 5,
    defaultInitialOffset = [0, 0, 0];

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
        this.pan.updatePreviousOffset();

        this.pan.updatePreviousMouseCoordinates();
      } else {
        this.tilt.updatePreviousAngles();

        this.tilt.updatePreviousMouseCoordinates();
      }
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
      this.pan.updatePreviousMouseCoordinates();

      this.tilt.updatePreviousAngles();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown();

      if (shiftKeyDown) {
        this.pan.updatePreviousOffset();

        this.pan.updatePreviousMouseCoordinates();
      }

      this.tilt.updatePreviousMouseCoordinates();
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
          offset = this.pan.getOffset(),
          angles = this.tilt.getAngles(),
          distance = this.zoom.getDistance(),
          offsetMatrix = offsetMatrixFromOffset(offset),
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
          flipped = false,
          pan = Pan.fromInitialOffset(initialOffset),
          tilt = Tilt.fromFlipped(flipped),
          zoom = Zoom.fromInitialDistance(initialDistance),
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom);


      return designCamera;
    }
  }]);

  return DesignCamera;
}(Camera);

module.exports = DesignCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwiY2FtZXJhVXRpbGl0aWVzIiwib2Zmc2V0TWF0cml4RnJvbU9mZnNldCIsInJvdGF0aW9uTWF0cml4RnJvbUFuZ2xlcyIsInBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlIiwicHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbE1hdHJpeEZyb21Sb3RhdGlvbk1hdHJpeCIsImRlZmF1bHRJbml0aWFsRGlzdGFuY2UiLCJkZWZhdWx0SW5pdGlhbE9mZnNldCIsIkRlc2lnbkNhbWVyYSIsImtleUV2ZW50cyIsIm1vdXNlRXZlbnRzIiwidXBkYXRlSGFuZGxlciIsInBhbiIsInRpbHQiLCJ6b29tIiwic2hpZnRLZXlEb3duIiwidXBkYXRlUHJldmlvdXNPZmZzZXQiLCJ1cGRhdGVQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJ1cGRhdGVQcmV2aW91c0FuZ2xlcyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZURvd24iLCJjYW52YXMiLCJpc1NoaWZ0S2V5RG93biIsInNldE1vdXNlQ29vcmRpbmF0ZXMiLCJ1cGRhdGVPZmZzZXQiLCJ1cGRhdGVBbmdsZXMiLCJ1cGRhdGUiLCJkZWx0YSIsInVwZGF0ZURpc3RhbmNlIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsIm9mZnNldCIsImdldE9mZnNldCIsImFuZ2xlcyIsImdldEFuZ2xlcyIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsImdldFVwZGF0ZUhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbE9mZnNldCIsImluaXRpYWxEaXN0YW5jZSIsImZsaXBwZWQiLCJmcm9tSW5pdGlhbE9mZnNldCIsImZyb21GbGlwcGVkIiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImRlc2lnbkNhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLHlCQUFSLENBQVo7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLDBCQUFSLENBRGI7QUFBQSxJQUVNRSxPQUFPRixRQUFRLDBCQUFSLENBRmI7QUFBQSxJQUdNRyxTQUFTSCxRQUFRLFdBQVIsQ0FIZjtBQUFBLElBSU1JLGtCQUFrQkosUUFBUSx3QkFBUixDQUp4Qjs7SUFNUUssc0IsR0FBcUpELGUsQ0FBckpDLHNCO0lBQXdCQyx3QixHQUE2SEYsZSxDQUE3SEUsd0I7SUFBMEJDLDBCLEdBQW1HSCxlLENBQW5HRywwQjtJQUE0QkMsa0MsR0FBdUVKLGUsQ0FBdkVJLGtDO0lBQW9DQyw4QixHQUFtQ0wsZSxDQUFuQ0ssOEI7OztBQUUxSCxJQUFNQyx5QkFBeUIsQ0FBL0I7QUFBQSxJQUNNQyx1QkFBdUIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FEN0I7O0lBR01DLFk7OztBQUNKLHdCQUFZQyxTQUFaLEVBQXVCQyxXQUF2QixFQUFvQ0MsYUFBcEMsRUFBbURDLEdBQW5ELEVBQXdEQyxJQUF4RCxFQUE4REMsSUFBOUQsRUFBb0U7QUFBQTs7QUFBQSw0SEFDNURMLFNBRDRELEVBQ2pEQyxXQURpRCxFQUNwQ0MsYUFEb0M7O0FBR2xFLFVBQUtDLEdBQUwsR0FBV0EsR0FBWDs7QUFFQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7O0FBRUEsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBUGtFO0FBUW5FOzs7O29DQUVlQyxZLEVBQWM7QUFDNUIsVUFBSUEsWUFBSixFQUFrQjtBQUNoQixhQUFLSCxHQUFMLENBQVNJLG9CQUFUOztBQUVBLGFBQUtKLEdBQUwsQ0FBU0ssOEJBQVQ7QUFDRCxPQUpELE1BSU87QUFDTCxhQUFLSixJQUFMLENBQVVLLG9CQUFWOztBQUVBLGFBQUtMLElBQUwsQ0FBVUksOEJBQVY7QUFDRDtBQUNGOzs7bUNBRWNFLGdCLEVBQWtCQyxTLEVBQVdDLE0sRUFBUTtBQUNsRCxXQUFLVCxHQUFMLENBQVNLLDhCQUFUOztBQUVBLFdBQUtKLElBQUwsQ0FBVUssb0JBQVY7QUFDRDs7O3FDQUVnQkMsZ0IsRUFBa0JDLFMsRUFBV0MsTSxFQUFRO0FBQ3BELFVBQU1OLGVBQWUsS0FBS04sU0FBTCxDQUFlYSxjQUFmLEVBQXJCOztBQUVBLFVBQUlQLFlBQUosRUFBa0I7QUFDaEIsYUFBS0gsR0FBTCxDQUFTSSxvQkFBVDs7QUFFQSxhQUFLSixHQUFMLENBQVNLLDhCQUFUO0FBQ0Q7O0FBRUQsV0FBS0osSUFBTCxDQUFVSSw4QkFBVjtBQUNEOzs7cUNBRWdCRSxnQixFQUFrQkMsUyxFQUFXQyxNLEVBQVE7QUFDcEQsVUFBTU4sZUFBZSxLQUFLTixTQUFMLENBQWVhLGNBQWYsRUFBckI7O0FBRUEsV0FBS1YsR0FBTCxDQUFTVyxtQkFBVCxDQUE2QkosZ0JBQTdCOztBQUVBLFdBQUtOLElBQUwsQ0FBVVUsbUJBQVYsQ0FBOEJKLGdCQUE5Qjs7QUFFQSxVQUFJQyxTQUFKLEVBQWU7QUFDYixZQUFJTCxZQUFKLEVBQWtCO0FBQ2hCLGVBQUtILEdBQUwsQ0FBU1ksWUFBVCxDQUFzQixLQUFLWCxJQUEzQjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtBLElBQUwsQ0FBVVksWUFBVjtBQUNEOztBQUVELGFBQUtDLE1BQUwsQ0FBWUwsTUFBWjtBQUNEO0FBQ0Y7OztzQ0FFaUJNLEssRUFBT04sTSxFQUFRO0FBQy9CLFdBQUtQLElBQUwsQ0FBVWMsY0FBVixDQUF5QkQsS0FBekI7O0FBRUEsV0FBS0QsTUFBTCxDQUFZTCxNQUFaO0FBQ0Q7OzsyQkFFTUEsTSxFQUFRO0FBQ2IsVUFBTVEsUUFBUVIsT0FBT1MsUUFBUCxFQUFkO0FBQUEsVUFDTUMsU0FBU1YsT0FBT1csU0FBUCxFQURmO0FBQUEsVUFFTUMsU0FBUyxLQUFLckIsR0FBTCxDQUFTc0IsU0FBVCxFQUZmO0FBQUEsVUFHTUMsU0FBUyxLQUFLdEIsSUFBTCxDQUFVdUIsU0FBVixFQUhmO0FBQUEsVUFJTUMsV0FBVyxLQUFLdkIsSUFBTCxDQUFVd0IsV0FBVixFQUpqQjtBQUFBLFVBS01DLGVBQWV0Qyx1QkFBdUJnQyxNQUF2QixDQUxyQjtBQUFBLFVBTU1PLGlCQUFpQnRDLHlCQUF5QmlDLE1BQXpCLENBTnZCO0FBQUEsVUFPTU0saUJBQWlCdEMsMkJBQTJCa0MsUUFBM0IsQ0FQdkI7QUFBQSxVQVFNSyxtQkFBbUJ0QyxtQ0FBbUN5QixLQUFuQyxFQUEwQ0UsTUFBMUMsQ0FSekI7QUFBQSxVQVNNWSxlQUFldEMsK0JBQStCbUMsY0FBL0IsQ0FUckI7QUFBQSxVQVVNN0IsZ0JBQWdCLEtBQUtpQyxnQkFBTCxFQVZ0Qjs7QUFZQWpDLG9CQUFjNEIsWUFBZCxFQUE0QkMsY0FBNUIsRUFBNENDLGNBQTVDLEVBQTREQyxnQkFBNUQsRUFBOEVDLFlBQTlFO0FBQ0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUFBLGtDQUMyREEsVUFEM0QsQ0FDeEJDLGFBRHdCO0FBQUEsVUFDeEJBLGFBRHdCLHlDQUNSdkMsb0JBRFE7QUFBQSxrQ0FDMkRzQyxVQUQzRCxDQUNjRSxlQURkO0FBQUEsVUFDY0EsZUFEZCx5Q0FDZ0N6QyxzQkFEaEM7QUFBQSxVQUUxQjBDLE9BRjBCLEdBRWhCLEtBRmdCO0FBQUEsVUFHMUJwQyxHQUgwQixHQUdwQmpCLElBQUlzRCxpQkFBSixDQUFzQkgsYUFBdEIsQ0FIb0I7QUFBQSxVQUkxQmpDLElBSjBCLEdBSW5CaEIsS0FBS3FELFdBQUwsQ0FBaUJGLE9BQWpCLENBSm1CO0FBQUEsVUFLMUJsQyxJQUwwQixHQUtuQmhCLEtBQUtxRCxtQkFBTCxDQUF5QkosZUFBekIsQ0FMbUI7QUFBQSxVQU0xQkssWUFOMEIsR0FNWHJELE9BQU9zRCxjQUFQLENBQXNCN0MsWUFBdEIsRUFBb0NxQyxVQUFwQyxFQUFnRGpDLEdBQWhELEVBQXFEQyxJQUFyRCxFQUEyREMsSUFBM0QsQ0FOVzs7O0FBUWhDLGFBQU9zQyxZQUFQO0FBQ0Q7Ozs7RUExRndCckQsTTs7QUE2RjNCdUQsT0FBT0MsT0FBUCxHQUFpQi9DLFlBQWpCIiwiZmlsZSI6ImRlc2lnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFuID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy9wYW4nKSxcbiAgICAgIFRpbHQgPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3pvb20nKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgY2FtZXJhVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2NhbWVyYScpO1xuXG5jb25zdCB7IG9mZnNldE1hdHJpeEZyb21PZmZzZXQsIHJvdGF0aW9uTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQsIG5vcm1hbE1hdHJpeEZyb21Sb3RhdGlvbk1hdHJpeCB9ID0gY2FtZXJhVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbERpc3RhbmNlID0gNSxcbiAgICAgIGRlZmF1bHRJbml0aWFsT2Zmc2V0ID0gWyAwLCAwLCAwIF07XG5cbmNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIsIHBhbiwgdGlsdCwgem9vbSkge1xuICAgIHN1cGVyKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG5cbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnBhbi51cGRhdGVQcmV2aW91c09mZnNldCgpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZVByZXZpb3VzQW5nbGVzKCk7XG5cbiAgICAgIHRoaXMudGlsdC51cGRhdGVQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucGFuLnVwZGF0ZVByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuXG4gICAgdGhpcy50aWx0LnVwZGF0ZVByZXZpb3VzQW5nbGVzKCk7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKTtcblxuICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucGFuLnVwZGF0ZVByZXZpb3VzT2Zmc2V0KCk7XG5cbiAgICAgIHRoaXMucGFuLnVwZGF0ZVByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICAgIH1cblxuICAgIHRoaXMudGlsdC51cGRhdGVQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpO1xuXG4gICAgdGhpcy5wYW4uc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMudGlsdC5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXQodGhpcy50aWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSwgY2FudmFzKSB7XG4gICAgdGhpcy56b29tLnVwZGF0ZURpc3RhbmNlKGRlbHRhKTtcblxuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICB1cGRhdGUoY2FudmFzKSB7XG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0ID0gdGhpcy5wYW4uZ2V0T2Zmc2V0KCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gb2Zmc2V0TWF0cml4RnJvbU9mZnNldChvZmZzZXQpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb25NYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4ID0gbm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4KHJvdGF0aW9uTWF0cml4KSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gdGhpcy5nZXRVcGRhdGVIYW5kbGVyKCk7XG5cbiAgICB1cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxPZmZzZXQgPSBkZWZhdWx0SW5pdGlhbE9mZnNldCwgaW5pdGlhbERpc3RhbmNlID0gZGVmYXVsdEluaXRpYWxEaXN0YW5jZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBmbGlwcGVkID0gZmFsc2UsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21GbGlwcGVkKGZsaXBwZWQpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20pO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlc2lnbkNhbWVyYTtcbiJdfQ==