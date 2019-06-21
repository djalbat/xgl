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


var defaultInitialDistance = 5,
    defaultInitialOffsets = zero3();

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
      var _properties$initialOf = properties.initialOffsets,
          initialOffsets = _properties$initialOf === undefined ? defaultInitialOffsets : _properties$initialOf,
          _properties$initialDi = properties.initialDistance,
          initialDistance = _properties$initialDi === undefined ? defaultInitialDistance : _properties$initialDi,
          flipped = false,
          pan = Pan.fromInitialOffsets(initialOffsets),
          tilt = Tilt.fromFlipped(flipped),
          zoom = Zoom.fromInitialDistance(initialDistance),
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom);


      return designCamera;
    }
  }]);

  return DesignCamera;
}(Camera);

module.exports = DesignCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwidmVjdG9yTWF0aHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJ6ZXJvMyIsIm9mZnNldE1hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25NYXRyaXhGcm9tQW5nbGVzIiwicG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UiLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4IiwiZGVmYXVsdEluaXRpYWxEaXN0YW5jZSIsImRlZmF1bHRJbml0aWFsT2Zmc2V0cyIsIkRlc2lnbkNhbWVyYSIsImtleUV2ZW50cyIsIm1vdXNlRXZlbnRzIiwidXBkYXRlSGFuZGxlciIsInBhbiIsInRpbHQiLCJ6b29tIiwic2hpZnRLZXlEb3duIiwicmVzZXRyZXZpb3VzT2Zmc2V0cyIsInJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwicmVzZXRQcmV2aW91c0FuZ2xlcyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZURvd24iLCJjYW52YXMiLCJpc1NoaWZ0S2V5RG93biIsInNldE1vdXNlQ29vcmRpbmF0ZXMiLCJ1cGRhdGVPZmZzZXQiLCJ1cGRhdGVBbmdsZXMiLCJ1cGRhdGUiLCJkZWx0YSIsInVwZGF0ZURpc3RhbmNlIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImFuZ2xlcyIsImdldEFuZ2xlcyIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwiZ2V0VXBkYXRlSGFuZGxlciIsInByb3BlcnRpZXMiLCJpbml0aWFsT2Zmc2V0cyIsImluaXRpYWxEaXN0YW5jZSIsImZsaXBwZWQiLCJmcm9tSW5pdGlhbE9mZnNldHMiLCJmcm9tRmxpcHBlZCIsImZyb21Jbml0aWFsRGlzdGFuY2UiLCJkZXNpZ25DYW1lcmEiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSx5QkFBUixDQUFaO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSwwQkFBUixDQURiO0FBQUEsSUFFTUUsT0FBT0YsUUFBUSwwQkFBUixDQUZiO0FBQUEsSUFHTUcsU0FBU0gsUUFBUSxXQUFSLENBSGY7QUFBQSxJQUlNSSxjQUFjSixRQUFRLG9CQUFSLENBSnBCO0FBQUEsSUFLTUssa0JBQWtCTCxRQUFRLHdCQUFSLENBTHhCOztBQU9NLElBQUVNLEtBQUYsR0FBWUYsV0FBWixDQUFFRSxLQUFGO0FBQUEsSUFDRUMsdUJBREYsR0FDd0pGLGVBRHhKLENBQ0VFLHVCQURGO0FBQUEsSUFDMkJDLHdCQUQzQixHQUN3SkgsZUFEeEosQ0FDMkJHLHdCQUQzQjtBQUFBLElBQ3FEQywwQkFEckQsR0FDd0pKLGVBRHhKLENBQ3FESSwwQkFEckQ7QUFBQSxJQUNpRkMsa0NBRGpGLEdBQ3dKTCxlQUR4SixDQUNpRkssa0NBRGpGO0FBQUEsSUFDcUhDLDhCQURySCxHQUN3Sk4sZUFEeEosQ0FDcUhNLDhCQURySDs7O0FBR04sSUFBTUMseUJBQXlCLENBQS9CO0FBQUEsSUFDTUMsd0JBQXdCUCxPQUQ5Qjs7SUFHTVEsWTs7O0FBQ0osd0JBQVlDLFNBQVosRUFBdUJDLFdBQXZCLEVBQW9DQyxhQUFwQyxFQUFtREMsR0FBbkQsRUFBd0RDLElBQXhELEVBQThEQyxJQUE5RCxFQUFvRTtBQUFBOztBQUFBLDRIQUM1REwsU0FENEQsRUFDakRDLFdBRGlELEVBQ3BDQyxhQURvQzs7QUFHbEUsVUFBS0MsR0FBTCxHQUFXQSxHQUFYOztBQUVBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxV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LFVBSzFCbEMsSUFMMEIsR0FLbkJsQixLQUFLdUQsbUJBQUwsQ0FBeUJKLGVBQXpCLENBTG1CO0FBQUEsVUFNMUJLLFlBTjBCLEdBTVh2RCxPQUFPd0QsY0FBUCxDQUFzQjdDLFlBQXRCLEVBQW9DcUMsVUFBcEMsRUFBZ0RqQyxHQUFoRCxFQUFxREMsSUFBckQsRUFBMkRDLElBQTNELENBTlc7OztBQVFoQyxhQUFPc0MsWUFBUDtBQUNEOzs7O0VBMUZ3QnZELE07O0FBNkYzQnlELE9BQU9DLE9BQVAsR0FBaUIvQyxZQUFqQiIsImZpbGUiOiJkZXNpZ24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbiA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvcGFuJyksXG4gICAgICBUaWx0ID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0JyksXG4gICAgICBab29tID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy96b29tJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9jYW1lcmEnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBjYW1lcmFVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvY2FtZXJhJyk7XG5cbmNvbnN0IHsgemVybzMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0cywgcm90YXRpb25NYXRyaXhGcm9tQW5nbGVzLCBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSwgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4IH0gPSBjYW1lcmFVdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgPSA1LFxuICAgICAgZGVmYXVsdEluaXRpYWxPZmZzZXRzID0gemVybzMoKTtcblxuY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3Ioa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgcGFuLCB0aWx0LCB6b29tKSB7XG4gICAgc3VwZXIoa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcblxuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG5cbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucGFuLnJlc2V0cmV2aW91c09mZnNldHMoKTtcblxuICAgICAgdGhpcy5wYW4ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNBbmdsZXMoKTtcblxuICAgICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnBhbi5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuXG4gICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNBbmdsZXMoKTtcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpO1xuXG4gICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wYW4ucmVzZXRyZXZpb3VzT2Zmc2V0cygpO1xuXG4gICAgICB0aGlzLnBhbi5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICAgIH1cblxuICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICB0aGlzLnBhbi5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy50aWx0LnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldCh0aGlzLnRpbHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UoZGVsdGEpO1xuXG4gICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgfVxuXG4gIHVwZGF0ZShjYW52YXMpIHtcbiAgICBjb25zdCB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IG9mZnNldE1hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb25NYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4ID0gbm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4KHJvdGF0aW9uTWF0cml4KSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gdGhpcy5nZXRVcGRhdGVIYW5kbGVyKCk7XG5cbiAgICB1cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxPZmZzZXRzID0gZGVmYXVsdEluaXRpYWxPZmZzZXRzLCBpbml0aWFsRGlzdGFuY2UgPSBkZWZhdWx0SW5pdGlhbERpc3RhbmNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSBmYWxzZSxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tRmxpcHBlZChmbGlwcGVkKSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgZGVzaWduQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKERlc2lnbkNhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0LCB6b29tKTtcblxuICAgIHJldHVybiBkZXNpZ25DYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZXNpZ25DYW1lcmE7XG4iXX0=