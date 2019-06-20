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

var offsetMatrixFromOffsets = cameraUtilities.offsetMatrixFromOffsets,
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
        this.pan.updatePreviousOffsets();

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
        this.pan.updatePreviousOffsets();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwiY2FtZXJhVXRpbGl0aWVzIiwib2Zmc2V0TWF0cml4RnJvbU9mZnNldHMiLCJyb3RhdGlvbk1hdHJpeEZyb21BbmdsZXMiLCJwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSIsInByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQiLCJub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXgiLCJkZWZhdWx0SW5pdGlhbERpc3RhbmNlIiwiZGVmYXVsdEluaXRpYWxPZmZzZXQiLCJEZXNpZ25DYW1lcmEiLCJrZXlFdmVudHMiLCJtb3VzZUV2ZW50cyIsInVwZGF0ZUhhbmRsZXIiLCJwYW4iLCJ0aWx0Iiwiem9vbSIsInNoaWZ0S2V5RG93biIsInVwZGF0ZVByZXZpb3VzT2Zmc2V0cyIsInVwZGF0ZVByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInVwZGF0ZVByZXZpb3VzQW5nbGVzIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlRG93biIsImNhbnZhcyIsImlzU2hpZnRLZXlEb3duIiwic2V0TW91c2VDb29yZGluYXRlcyIsInVwZGF0ZU9mZnNldCIsInVwZGF0ZUFuZ2xlcyIsInVwZGF0ZSIsImRlbHRhIiwidXBkYXRlRGlzdGFuY2UiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwib2Zmc2V0cyIsImdldE9mZnNldHMiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJnZXRVcGRhdGVIYW5kbGVyIiwicHJvcGVydGllcyIsImluaXRpYWxPZmZzZXQiLCJpbml0aWFsRGlzdGFuY2UiLCJmbGlwcGVkIiwiZnJvbUluaXRpYWxPZmZzZXQiLCJmcm9tRmxpcHBlZCIsImZyb21Jbml0aWFsRGlzdGFuY2UiLCJkZXNpZ25DYW1lcmEiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSx5QkFBUixDQUFaO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSwwQkFBUixDQURiO0FBQUEsSUFFTUUsT0FBT0YsUUFBUSwwQkFBUixDQUZiO0FBQUEsSUFHTUcsU0FBU0gsUUFBUSxXQUFSLENBSGY7QUFBQSxJQUlNSSxrQkFBa0JKLFFBQVEsd0JBQVIsQ0FKeEI7O0lBTVFLLHVCLEdBQXNKRCxlLENBQXRKQyx1QjtJQUF5QkMsd0IsR0FBNkhGLGUsQ0FBN0hFLHdCO0lBQTBCQywwQixHQUFtR0gsZSxDQUFuR0csMEI7SUFBNEJDLGtDLEdBQXVFSixlLENBQXZFSSxrQztJQUFvQ0MsOEIsR0FBbUNMLGUsQ0FBbkNLLDhCOzs7QUFFM0gsSUFBTUMseUJBQXlCLENBQS9CO0FBQUEsSUFDTUMsdUJBQXVCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRDdCOztJQUdNQyxZOzs7QUFDSix3QkFBWUMsU0FBWixFQUF1QkMsV0FBdkIsRUFBb0NDLGFBQXBDLEVBQW1EQyxHQUFuRCxFQUF3REMsSUFBeEQsRUFBOERDLElBQTlELEVBQW9FO0FBQUE7O0FBQUEsNEhBQzVETCxTQUQ0RCxFQUNqREMsV0FEaUQsRUFDcENDLGFBRG9DOztBQUdsRSxVQUFLQyxHQUFMLEdBQVdBLEdBQVg7O0FBRUEsVUFBS0MsSUFBTCxHQUFZQSxJQUFaOztBQUVBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQVBrRTtBQVFuRTs7OztvQ0FFZUMsWSxFQUFjO0FBQzVCLFVBQUlBLFlBQUosRUFBa0I7QUFDaEIsYUFBS0gsR0FBTCxDQUFTSSxxQkFBVDs7QUFFQSxhQUFLSixHQUFMLENBQVNLLDhCQUFUO0FBQ0QsT0FKRCxNQUlP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QTJEQyxJQUEzRCxDQU5XOzs7QUFRaEMsYUFBT3NDLFlBQVA7QUFDRDs7OztFQTFGd0JyRCxNOztBQTZGM0J1RCxPQUFPQyxPQUFQLEdBQWlCL0MsWUFBakIiLCJmaWxlIjoiZGVzaWduLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYW4gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3BhbicpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdCcpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvem9vbScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICBjYW1lcmFVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvY2FtZXJhJyk7XG5cbmNvbnN0IHsgb2Zmc2V0TWF0cml4RnJvbU9mZnNldHMsIHJvdGF0aW9uTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQsIG5vcm1hbE1hdHJpeEZyb21Sb3RhdGlvbk1hdHJpeCB9ID0gY2FtZXJhVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbERpc3RhbmNlID0gNSxcbiAgICAgIGRlZmF1bHRJbml0aWFsT2Zmc2V0ID0gWyAwLCAwLCAwIF07XG5cbmNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIsIHBhbiwgdGlsdCwgem9vbSkge1xuICAgIHN1cGVyKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG5cbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnBhbi51cGRhdGVQcmV2aW91c09mZnNldHMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVQcmV2aW91c0FuZ2xlcygpO1xuXG4gICAgICB0aGlzLnRpbHQudXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnBhbi51cGRhdGVQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHRoaXMudGlsdC51cGRhdGVQcmV2aW91c0FuZ2xlcygpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnBhbi51cGRhdGVQcmV2aW91c09mZnNldHMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuXG4gICAgdGhpcy50aWx0LnVwZGF0ZVByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICB0aGlzLnBhbi5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy50aWx0LnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldCh0aGlzLnRpbHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UoZGVsdGEpO1xuXG4gICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgfVxuXG4gIHVwZGF0ZShjYW52YXMpIHtcbiAgICBjb25zdCB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IG9mZnNldE1hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb25NYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4ID0gbm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4KHJvdGF0aW9uTWF0cml4KSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gdGhpcy5nZXRVcGRhdGVIYW5kbGVyKCk7XG5cbiAgICB1cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxPZmZzZXQgPSBkZWZhdWx0SW5pdGlhbE9mZnNldCwgaW5pdGlhbERpc3RhbmNlID0gZGVmYXVsdEluaXRpYWxEaXN0YW5jZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBmbGlwcGVkID0gZmFsc2UsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21GbGlwcGVkKGZsaXBwZWQpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20pO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlc2lnbkNhbWVyYTtcbiJdfQ==