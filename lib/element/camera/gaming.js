'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tilt = require('../../miscellaneous/tilt'),
    Camera = require('../camera'),
    Location = require('../../miscellaneous/location'),
    cameraUtilities = require('../../utilities/camera');

var offsetMatrixFromOffsets = cameraUtilities.offsetMatrixFromOffsets,
    rotationMatrixFromAngles = cameraUtilities.rotationMatrixFromAngles,
    positionMatrixFromNothing = cameraUtilities.positionMatrixFromNothing,
    projectionMatrixFromWidthAndHeight = cameraUtilities.projectionMatrixFromWidthAndHeight,
    normalMatrixFromRotationMatrix = cameraUtilities.normalMatrixFromRotationMatrix;


var defaultInitialOffset = [0, 0, -5];

var GamingCamera = function (_Camera) {
  _inherits(GamingCamera, _Camera);

  function GamingCamera(keyEvents, mouseEvents, updateHandler, tilt, location) {
    _classCallCheck(this, GamingCamera);

    var _this = _possibleConstructorReturn(this, (GamingCamera.__proto__ || Object.getPrototypeOf(GamingCamera)).call(this, keyEvents, mouseEvents, updateHandler));

    _this.tilt = tilt;

    _this.location = location;
    return _this;
  }

  _createClass(GamingCamera, [{
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      if (shiftKeyDown) {
        this.location.resetPreviousOffsets();

        this.location.resetPreviousMouseCoordinates();
      } else {
        this.tilt.resetPreviousAngles();

        this.tilt.resetPreviousMouseCoordinates();
      }
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
      this.location.resetPreviousMouseCoordinates();

      this.tilt.resetPreviousAngles();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown();

      if (shiftKeyDown) {
        this.location.resetPreviousOffsets();

        this.location.resetPreviousMouseCoordinates();
      }

      this.tilt.resetPreviousMouseCoordinates();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown();

      this.location.setMouseCoordinates(mouseCoordinates);

      this.tilt.setMouseCoordinates(mouseCoordinates);

      if (mouseDown) {
        if (shiftKeyDown) {
          this.location.updateXYOffset(this.tilt);
        } else {
          this.tilt.updateAngles();
        }

        this.update(canvas);
      }
    }
  }, {
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(delta, canvas) {
      this.location.updateZOffset(delta, this.tilt);

      this.update(canvas);
    }
  }, {
    key: 'update',
    value: function update(canvas) {
      var width = canvas.getWidth(),
          height = canvas.getHeight(),
          offsets = this.location.getOffsets(),
          angles = this.tilt.getAngles(),
          offsetMatrix = offsetMatrixFromOffsets(offsets),
          rotationMatrix = rotationMatrixFromAngles(angles),
          positionMatrix = positionMatrixFromNothing(),
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
          flipped = true,
          tilt = Tilt.fromFlipped(flipped),
          location = Location.fromInitialOffset(initialOffset),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, tilt, location);


      return gamingCamera;
    }
  }]);

  return GamingCamera;
}(Camera);

module.exports = GamingCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwibmFtZXMiOlsiVGlsdCIsInJlcXVpcmUiLCJDYW1lcmEiLCJMb2NhdGlvbiIsImNhbWVyYVV0aWxpdGllcyIsIm9mZnNldE1hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25NYXRyaXhGcm9tQW5nbGVzIiwicG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyIsInByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQiLCJub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXgiLCJkZWZhdWx0SW5pdGlhbE9mZnNldCIsIkdhbWluZ0NhbWVyYSIsImtleUV2ZW50cyIsIm1vdXNlRXZlbnRzIiwidXBkYXRlSGFuZGxlciIsInRpbHQiLCJsb2NhdGlvbiIsInNoaWZ0S2V5RG93biIsInJlc2V0UHJldmlvdXNPZmZzZXRzIiwicmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJyZXNldFByZXZpb3VzQW5nbGVzIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlRG93biIsImNhbnZhcyIsImlzU2hpZnRLZXlEb3duIiwic2V0TW91c2VDb29yZGluYXRlcyIsInVwZGF0ZVhZT2Zmc2V0IiwidXBkYXRlQW5nbGVzIiwidXBkYXRlIiwiZGVsdGEiLCJ1cGRhdGVaT2Zmc2V0Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJnZXRVcGRhdGVIYW5kbGVyIiwicHJvcGVydGllcyIsImluaXRpYWxPZmZzZXQiLCJmbGlwcGVkIiwiZnJvbUZsaXBwZWQiLCJmcm9tSW5pdGlhbE9mZnNldCIsImdhbWluZ0NhbWVyYSIsImZyb21Qcm9wZXJ0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aUJBQWlCbEMsMkJBTnZCO0FBQUEsVUFPTW1DLG1CQUFtQmxDLG1DQUFtQ3VCLEtBQW5DLEVBQTBDRSxNQUExQyxDQVB6QjtBQUFBLFVBUU1VLGVBQWVsQywrQkFBK0IrQixjQUEvQixDQVJyQjtBQUFBLFVBU00xQixnQkFBZ0IsS0FBSzhCLGdCQUFMLEVBVHRCOztBQVdBOUIsb0JBQWN5QixZQUFkLEVBQTRCQyxjQUE1QixFQUE0Q0MsY0FBNUMsRUFBNERDLGdCQUE1RCxFQUE4RUMsWUFBOUU7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQUEsa0NBQ2dCQSxVQURoQixDQUN4QkMsYUFEd0I7QUFBQSxVQUN4QkEsYUFEd0IseUNBQ1JwQyxvQkFEUTtBQUFBLFVBRTFCcUMsT0FGMEIsR0FFaEIsSUFGZ0I7QUFBQSxVQUcxQmhDLElBSDBCLEdBR25CZixLQUFLZ0QsV0FBTCxDQUFpQkQsT0FBakIsQ0FIbUI7QUFBQSxVQUkxQi9CLFFBSjBCLEdBSWZiLFNBQVM4QyxpQkFBVCxDQUEyQkgsYUFBM0IsQ0FKZTtBQUFBLFVBSzFCSSxZQUwwQixHQUtYaEQsT0FBT2lELGNBQVAsQ0FBc0J4QyxZQUF0QixFQUFvQ2tDLFVBQXBDLEVBQWdEOUIsSUFBaEQsRUFBc0RDLFFBQXRELENBTFc7OztBQU9oQyxhQUFPa0MsWUFBUDtBQUNEOzs7O0VBdEZ3QmhELE07O0FBeUYzQmtELE9BQU9DLE9BQVAsR0FBaUIxQyxZQUFqQiIsImZpbGUiOiJnYW1pbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRpbHQgPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgTG9jYXRpb24gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uJyksXG4gICAgICBjYW1lcmFVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvY2FtZXJhJyk7XG5cbmNvbnN0IHsgb2Zmc2V0TWF0cml4RnJvbU9mZnNldHMsIHJvdGF0aW9uTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZywgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4IH0gPSBjYW1lcmFVdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsT2Zmc2V0ID0gWyAwLCAwLCAtNSBdO1xuXG5jbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyLCB0aWx0LCBsb2NhdGlvbikge1xuICAgIHN1cGVyKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcblxuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLmxvY2F0aW9uLnJlc2V0UHJldmlvdXNPZmZzZXRzKCk7XG5cbiAgICAgIHRoaXMubG9jYXRpb24ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNBbmdsZXMoKTtcblxuICAgICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLmxvY2F0aW9uLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c0FuZ2xlcygpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLmxvY2F0aW9uLnJlc2V0UHJldmlvdXNPZmZzZXRzKCk7XG5cbiAgICAgIHRoaXMubG9jYXRpb24ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpO1xuXG4gICAgdGhpcy5sb2NhdGlvbi5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy50aWx0LnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24udXBkYXRlWFlPZmZzZXQodGhpcy50aWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5sb2NhdGlvbi51cGRhdGVaT2Zmc2V0KGRlbHRhLCB0aGlzLnRpbHQpO1xuXG4gICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgfVxuXG4gIHVwZGF0ZShjYW52YXMpIHtcbiAgICBjb25zdCB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5sb2NhdGlvbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IG9mZnNldE1hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb25NYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4ID0gbm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4KHJvdGF0aW9uTWF0cml4KSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gdGhpcy5nZXRVcGRhdGVIYW5kbGVyKCk7XG5cbiAgICB1cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxPZmZzZXQgPSBkZWZhdWx0SW5pdGlhbE9mZnNldH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSB0cnVlLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21GbGlwcGVkKGZsaXBwZWQpLFxuICAgICAgICAgIGxvY2F0aW9uID0gTG9jYXRpb24uZnJvbUluaXRpYWxPZmZzZXQoaW5pdGlhbE9mZnNldCksXG4gICAgICAgICAgZ2FtaW5nQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKEdhbWluZ0NhbWVyYSwgcHJvcGVydGllcywgdGlsdCwgbG9jYXRpb24pO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWluZ0NhbWVyYTtcbiJdfQ==