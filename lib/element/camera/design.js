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
          pan = Pan.fromInitialOffset(initialOffset),
          tilt = Tilt.fromNothing(),
          zoom = Zoom.fromInitialDistance(initialDistance),
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom);


      return designCamera;
    }
  }]);

  return DesignCamera;
}(Camera);

module.exports = DesignCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwiY2FtZXJhVXRpbGl0aWVzIiwib2Zmc2V0TWF0cml4RnJvbU9mZnNldCIsInJvdGF0aW9uTWF0cml4RnJvbUFuZ2xlcyIsInBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlIiwicHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbE1hdHJpeEZyb21Sb3RhdGlvbk1hdHJpeCIsImRlZmF1bHRJbml0aWFsRGlzdGFuY2UiLCJkZWZhdWx0SW5pdGlhbE9mZnNldCIsIkRlc2lnbkNhbWVyYSIsImtleUV2ZW50cyIsIm1vdXNlRXZlbnRzIiwidXBkYXRlSGFuZGxlciIsInBhbiIsInRpbHQiLCJ6b29tIiwic2hpZnRLZXlEb3duIiwidXBkYXRlUHJldmlvdXNPZmZzZXQiLCJ1cGRhdGVQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJ1cGRhdGVQcmV2aW91c0FuZ2xlcyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZURvd24iLCJjYW52YXMiLCJpc1NoaWZ0S2V5RG93biIsInNldE1vdXNlQ29vcmRpbmF0ZXMiLCJ1cGRhdGVPZmZzZXQiLCJ1cGRhdGVBbmdsZXMiLCJ1cGRhdGUiLCJkZWx0YSIsInVwZGF0ZURpc3RhbmNlIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsIm9mZnNldCIsImdldE9mZnNldCIsImFuZ2xlcyIsImdldEFuZ2xlcyIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsImdldFVwZGF0ZUhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbE9mZnNldCIsImluaXRpYWxEaXN0YW5jZSIsImZyb21Jbml0aWFsT2Zmc2V0IiwiZnJvbU5vdGhpbmciLCJmcm9tSW5pdGlhbERpc3RhbmNlIiwiZGVzaWduQ2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEseUJBQVIsQ0FBWjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsMEJBQVIsQ0FEYjtBQUFBLElBRU1FLE9BQU9GLFFBQVEsMEJBQVIsQ0FGYjtBQUFBLElBR01HLFNBQVNILFFBQVEsV0FBUixDQUhmO0FBQUEsSUFJTUksa0JBQWtCSixRQUFRLHdCQUFSLENBSnhCOztJQU1RSyxzQixHQUFxSkQsZSxDQUFySkMsc0I7SUFBd0JDLHdCLEdBQTZIRixlLENBQTdIRSx3QjtJQUEwQkMsMEIsR0FBbUdILGUsQ0FBbkdHLDBCO0lBQTRCQyxrQyxHQUF1RUosZSxDQUF2RUksa0M7SUFBb0NDLDhCLEdBQW1DTCxlLENBQW5DSyw4Qjs7O0FBRTFILElBQU1DLHlCQUF5QixDQUEvQjtBQUFBLElBQ01DLHVCQUF1QixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUQ3Qjs7SUFHTUMsWTs7O0FBQ0osd0JBQVlDLFNBQVosRUFBdUJDLFdBQXZCLEVBQW9DQyxhQUFwQyxFQUFtREMsR0FBbkQsRUFBd0RDLElBQXhELEVBQThEQyxJQUE5RCxFQUFvRTtBQUFBOztBQUFBLDRIQUM1REwsU0FENEQsRUFDakRDLFdBRGlELEVBQ3BDQyxhQURvQzs7QUFHbEUsVUFBS0MsR0FBTCxHQUFXQSxHQUFYOztBQUVBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFQa0U7QUFRbkU7Ozs7b0NBRWVDLFksRUFBYztBQUM1QixVQUFJQSxZQUFKLEVBQWtCO0FBQ2hCLGFBQUtILEdBQUwsQ0FBU0ksb0JBQVQ7O0FBRUEsYUFBS0osR0FBTCxDQUFTSyw4QkFBVDtBQUNELE9BSkQsTUFJTztBQUNMLGFBQUtKLElB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M0JzRCxPQUFPQyxPQUFQLEdBQWlCOUMsWUFBakIiLCJmaWxlIjoiZGVzaWduLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYW4gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3BhbicpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdCcpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvem9vbScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICBjYW1lcmFVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvY2FtZXJhJyk7XG5cbmNvbnN0IHsgb2Zmc2V0TWF0cml4RnJvbU9mZnNldCwgcm90YXRpb25NYXRyaXhGcm9tQW5nbGVzLCBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSwgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4IH0gPSBjYW1lcmFVdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgPSA1LFxuICAgICAgZGVmYXVsdEluaXRpYWxPZmZzZXQgPSBbIDAsIDAsIDAgXTtcblxuY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3Ioa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgcGFuLCB0aWx0LCB6b29tKSB7XG4gICAgc3VwZXIoa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcblxuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG5cbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucGFuLnVwZGF0ZVByZXZpb3VzT2Zmc2V0KCk7XG5cbiAgICAgIHRoaXMucGFuLnVwZGF0ZVByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbHQudXBkYXRlUHJldmlvdXNBbmdsZXMoKTtcblxuICAgICAgdGhpcy50aWx0LnVwZGF0ZVByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5wYW4udXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICB0aGlzLnRpbHQudXBkYXRlUHJldmlvdXNBbmdsZXMoKTtcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpO1xuXG4gICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wYW4udXBkYXRlUHJldmlvdXNPZmZzZXQoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuXG4gICAgdGhpcy50aWx0LnVwZGF0ZVByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICB0aGlzLnBhbi5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy50aWx0LnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldCh0aGlzLnRpbHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UoZGVsdGEpO1xuXG4gICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgfVxuXG4gIHVwZGF0ZShjYW52YXMpIHtcbiAgICBjb25zdCB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBvZmZzZXQgPSB0aGlzLnBhbi5nZXRPZmZzZXQoKSxcbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRNYXRyaXggPSBvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0KG9mZnNldCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSByb3RhdGlvbk1hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXgocm90YXRpb25NYXRyaXgpLFxuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSB0aGlzLmdldFVwZGF0ZUhhbmRsZXIoKTtcblxuICAgIHVwZGF0ZUhhbmRsZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbE9mZnNldCA9IGRlZmF1bHRJbml0aWFsT2Zmc2V0LCBpbml0aWFsRGlzdGFuY2UgPSBkZWZhdWx0SW5pdGlhbERpc3RhbmNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldChpbml0aWFsT2Zmc2V0KSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20pO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlc2lnbkNhbWVyYTtcbiJdfQ==