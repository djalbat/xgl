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
        this.pan.resetreviousOffsets();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwidmVjdG9yTWF0aHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJ6ZXJvMyIsIm9mZnNldE1hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25NYXRyaXhGcm9tQW5nbGVzIiwicG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UiLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4IiwiZGVmYXVsdEluaXRpYWxPZmZzZXQiLCJkZWZhdWx0SW5pdGlhbERpc3RhbmNlIiwiRGVzaWduQ2FtZXJhIiwia2V5RXZlbnRzIiwibW91c2VFdmVudHMiLCJ1cGRhdGVIYW5kbGVyIiwicGFuIiwidGlsdCIsInpvb20iLCJzaGlmdEtleURvd24iLCJyZXNldHJldmlvdXNPZmZzZXRzIiwicmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJyZXNldFByZXZpb3VzQW5nbGVzIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlRG93biIsImNhbnZhcyIsImlzU2hpZnRLZXlEb3duIiwic2V0TW91c2VDb29yZGluYXRlcyIsInVwZGF0ZU9mZnNldCIsInVwZGF0ZUFuZ2xlcyIsInVwZGF0ZSIsImRlbHRhIiwidXBkYXRlRGlzdGFuY2UiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwib2Zmc2V0cyIsImdldE9mZnNldHMiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJnZXRVcGRhdGVIYW5kbGVyIiwicHJvcGVydGllcyIsImluaXRpYWxPZmZzZXQiLCJpbml0aWFsRGlzdGFuY2UiLCJpbml0aWFsT2Zmc2V0cyIsImZyb21Jbml0aWFsT2Zmc2V0cyIsImZyb21Ob3RoaW5nIiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImRlc2lnbkNhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLHlCQUFSLENBQVo7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLDBCQUFSLENBRGI7QUFBQSxJQUVNRSxPQUFPRixRQUFRLDBCQUFSLENBRmI7QUFBQSxJQUdNRyxTQUFTSCxRQUFRLFdBQVIsQ0FIZjtBQUFBLElBSU1JLGNBQWNKLFFBQVEsb0JBQVIsQ0FKcEI7QUFBQSxJQUtNSyxrQkFBa0JMLFFBQVEsd0JBQVIsQ0FMeEI7O0FBT00sSUFBRU0sS0FBRixHQUFZRixXQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyx1QkFERixHQUN3SkYsZUFEeEosQ0FDRUUsdUJBREY7QUFBQSxJQUMyQkMsd0JBRDNCLEdBQ3dKSCxlQUR4SixDQUMyQkcsd0JBRDNCO0FBQUEsSUFDcURDLDBCQURyRCxHQUN3SkosZUFEeEosQ0FDcURJLDBCQURyRDtBQUFBLElBQ2lGQyxrQ0FEakYsR0FDd0pMLGVBRHhKLENBQ2lGSyxrQ0FEakY7QUFBQSxJQUNxSEMsOEJBRHJILEdBQ3dKTixlQUR4SixDQUNxSE0sOEJBRHJIOzs7QUFHTixJQUFNQyx1QkFBdUJOLE9BQTdCO0FBQUEsSUFDTU8seUJBQXlCLENBRC9COztJQUdNQyxZOzs7QUFDSix3QkFBWUMsU0FBWixFQUF1QkMsV0FBdkIsRUFBb0NDLGFBQXBDLEVBQW1EQyxHQUFuRCxFQUF3REMsSUFBeEQsRUFBOERDLElBQTlELEVBQW9FO0FBQUE7O0FBQUEsNEhBQzVETCxTQUQ0RCxFQUNqREMsV0FEaUQsRUFDcENDLGFBRG9DOztBQUdsRSxVQUFLQyxHQUFMLEdBQVdBLEdBQVg7O0FBRUEsVUFBS0MsSUFBTCxHQUFZQSxJQUFaOztBQUVBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQVBrRTtBQVFuRTs7OztvQ0FFZUMsWSxFQUFjO0FBQzVCLFVBQUlBLFlBQUosRUFBa0I7QUFDaEIsYUFBS0gsR0FBTCxDQUFTSSxtQkFBVDs7QUFFQSxhQUFLSixHQUFMLENBQVNLLDZCQUFUO0FBQ0QsT0FKRCxNQUlPO0FBQ0wsYUFBS0osSUFBTCxDQUFVSyxtQkFBVjs7QUFFQSxhQUFLTCxJQUFMLENBQVVJLDZCQUFWO0FBQ0Q7QUFDRjs7O21DQUVjRSxnQixFQUFrQkMsUyxFQUFXQyxNLEVBQVE7QUFDbEQsV0FBS1QsR0FBTCxDQUFTSyw2QkFBVDs7QUFFQSxXQUFLSixJQUFMLENBQVVLLG1CQUFWO0FBQ0Q7OztxQ0FFZ0JDLGdCLEVBQWtCQyxTLEVBQVdDLE0sRUFBUTtBQUNwRCxVQUFNTixlQUFlLEtBQUtOLFNBQUwsQ0FBZWEsY0FBZixFQUFyQjs7QUFFQSxVQUFJUCxZQUFKLEVBQWtCO0FBQ2hCLGFBQUtILEdBQUwsQ0FBU0ksbUJBQVQ7O0FBRUEsYUFBS0osR0FBTCxDQUFTSyw2QkFBVDtBQUNEOztBQUVELFdBQUtKLElBQUwsQ0FBVUksNkJBQVY7QUFDRDs7O3FDQUVnQkUsZ0IsRUFBa0JDLFMsRUFBV0MsTSxFQUFRO0FBQ3BELFVBQU1OLGVBQWUsS0FBS04sU0FBTCxDQUFlYSxjQUFmLEVBQXJCOztBQUVBLFdBQUtWLEdBQUwsQ0FBU1csbUJBQVQsQ0FBNkJKLGdCQUE3Qjs7QUFFQSxXQUFLTixJQUFMLENBQVVVLG1CQUFWLENBQThCSixnQkFBOUI7O0FBRUEsVUFBSUMsU0FBSixFQUFlO0FBQ2IsWUFBSUwsWUFBSixFQUFrQjtBQUNoQixlQUFLSCxHQUFMLENBQVNZLFlBQVQsQ0FBc0IsS0FBS1gsSUFBM0I7QUFDRCxTQUZELE1BRU87QUFDTCxlQUFLQSxJQUFMLENBQVVZLFlBQVY7QUFDRDs7QUFFRCxhQUFLQyxNQUFMLENBQVlMLE1BQVo7QUFDRDtBQUNGOzs7c0NBRWlCTSxLLEVBQU9OLE0sRUFBUTtBQUMvQixXQUFLUCxJQUFMLENBQVVjLGNBQVYsQ0FBeUJELEtBQXpCOztBQUVBLFdBQUtELE1BQUwsQ0FBWUwsTUFBWjtBQUNEOzs7MkJBRU1BLE0sRUFBUTtBQUNiLFVBQU1RLFFBQVFSLE9BQU9TLFFBQVAsRUFBZDtBQUFBLFVBQ01DLFNBQVNWLE9BQU9XLFNBQVAsRUFEZjtBQUFBLFVBRU1DLFNBQVMsS0FBS3BCLElBQUwsQ0FBVXFCLFNBQVYsRUFGZjtBQUFBLFVBR01DLFVBQVUsS0FBS3ZCLEdBQUwsQ0FBU3dCLFVBQVQsRUFIaEI7QUFBQSxVQUlNQyxXQUFXLEtBQUt2QixJQUFMLENBQVV3QixXQUFWLEVBSmpCO0FBQUEsVUFLTUMsZUFBZXRDLHdCQUF3QmtDLE9BQXhCLENBTHJCO0FBQUEsVUFNTUssaUJBQWlCdEMseUJBQXlCK0IsTUFBekIsQ0FOdkI7QUFBQSxVQU9NUSxpQkFBaUJ0QywyQkFBMkJrQyxRQUEzQixDQVB2QjtBQUFBLFVBUU1LLG1CQUFtQnRDLG1DQUFtQ3lCLEtBQW5DLEVBQTBDRSxNQUExQyxDQVJ6QjtBQUFBLFVBU01ZLGVBQWV0QywrQkFBK0JtQyxjQUEvQixDQVRyQjtBQUFBLFVBVU03QixnQkFBZ0IsS0FBS2lDLGdCQUFMLEVBVnRCOztBQVlBakMsb0JBQWM0QixZQUFkLEVBQTRCQyxjQUE1QixFQUE0Q0MsY0FBNUMsRUFBNERDLGdCQUE1RCxFQUE4RUMsWUFBOUU7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQUEsa0NBQzJEQSxVQUQzRCxDQUN4QkMsYUFEd0I7QUFBQSxVQUN4QkEsYUFEd0IseUNBQ1J4QyxvQkFEUTtBQUFBLGtDQUMyRHVDLFVBRDNELENBQ2NFLGVBRGQ7QUFBQSxVQUNjQSxlQURkLHlDQUNnQ3hDLHNCQURoQztBQUFBLFVBRTFCeUMsY0FGMEIsR0FFVEYsYUFGUztBQUFBLFVBRzFCbEMsR0FIMEIsR0FHcEJuQixJQUFJd0Qsa0JBQUosQ0FBdUJELGNBQXZCLENBSG9CO0FBQUEsVUFJMUJuQyxJQUowQixHQUluQmxCLEtBQUt1RCxXQUFMLEVBSm1CO0FBQUEsVUFLMUJwQyxJQUwwQixHQUtuQmxCLEtBQUt1RCxtQkFBTCxDQUF5QkosZUFBekIsQ0FMbUI7QUFBQSxVQU0xQkssWUFOMEIsR0FNWHZELE9BQU93RCxjQUFQLENBQXNCN0MsWUFBdEIsRUFBb0NxQyxVQUFwQyxFQUFnRGpDLEdBQWhELEVBQXFEQyxJQUFyRCxFQUEyREMsSUFBM0QsQ0FOVzs7O0FBUWhDLGFBQU9zQyxZQUFQO0FBQ0Q7Ozs7RUExRndCdkQsTTs7QUE2RjNCeUQsT0FBT0MsT0FBUCxHQUFpQi9DLFlBQWpCIiwiZmlsZSI6ImRlc2lnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFuID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy9wYW4nKSxcbiAgICAgIFRpbHQgPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3pvb20nKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi8uLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGNhbWVyYVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9jYW1lcmEnKTtcblxuY29uc3QgeyB6ZXJvMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IG9mZnNldE1hdHJpeEZyb21PZmZzZXRzLCByb3RhdGlvbk1hdHJpeEZyb21BbmdsZXMsIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLCBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0LCBub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXggfSA9IGNhbWVyYVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxPZmZzZXQgPSB6ZXJvMygpLFxuICAgICAgZGVmYXVsdEluaXRpYWxEaXN0YW5jZSA9IDU7XG5cbmNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIsIHBhbiwgdGlsdCwgem9vbSkge1xuICAgIHN1cGVyKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG5cbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnBhbi5yZXNldHJldmlvdXNPZmZzZXRzKCk7XG5cbiAgICAgIHRoaXMucGFuLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzQW5nbGVzKCk7XG5cbiAgICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5wYW4ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzQW5nbGVzKCk7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKTtcblxuICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucGFuLnJlc2V0cmV2aW91c09mZnNldHMoKTtcblxuICAgICAgdGhpcy5wYW4ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpO1xuXG4gICAgdGhpcy5wYW4uc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMudGlsdC5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXQodGhpcy50aWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSwgY2FudmFzKSB7XG4gICAgdGhpcy56b29tLnVwZGF0ZURpc3RhbmNlKGRlbHRhKTtcblxuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICB1cGRhdGUoY2FudmFzKSB7XG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSB0aGlzLnBhbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRNYXRyaXggPSBvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IHJvdGF0aW9uTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IG5vcm1hbE1hdHJpeEZyb21Sb3RhdGlvbk1hdHJpeChyb3RhdGlvbk1hdHJpeCksXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IHRoaXMuZ2V0VXBkYXRlSGFuZGxlcigpO1xuXG4gICAgdXBkYXRlSGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsT2Zmc2V0ID0gZGVmYXVsdEluaXRpYWxPZmZzZXQsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgaW5pdGlhbE9mZnNldHMgPSBpbml0aWFsT2Zmc2V0LCAvLy9cbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20pO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlc2lnbkNhbWVyYTtcbiJdfQ==