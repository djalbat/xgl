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


var defaultInitialOffsets = [0, 0, -5];

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
        this.location.resetPreviousMouseCoordinates();
      } else {
        this.tilt.resetPreviousMouseCoordinates();

        this.tilt.resetPreviousAngles();
      }
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
      this.tilt.resetPreviousAngles();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
      this.location.resetPreviousMouseCoordinates();

      this.tilt.resetPreviousMouseCoordinates();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown();

      this.location.resetPreviousMouseCoordinates();

      this.location.setMouseCoordinates(mouseCoordinates);

      this.tilt.setMouseCoordinates(mouseCoordinates);

      if (mouseDown) {
        if (shiftKeyDown) {
          this.location.updateXYOffset(mouseCoordinates, this.tilt);
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
      var _properties$initialOf = properties.initialOffsets,
          initialOffsets = _properties$initialOf === undefined ? defaultInitialOffsets : _properties$initialOf,
          flipped = true,
          tilt = Tilt.fromFlipped(flipped),
          location = Location.fromInitialOffsets(initialOffsets),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, tilt, location);


      return gamingCamera;
    }
  }]);

  return GamingCamera;
}(Camera);

module.exports = GamingCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwibmFtZXMiOlsiVGlsdCIsInJlcXVpcmUiLCJDYW1lcmEiLCJMb2NhdGlvbiIsImNhbWVyYVV0aWxpdGllcyIsIm9mZnNldE1hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25NYXRyaXhGcm9tQW5nbGVzIiwicG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyIsInByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQiLCJub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXgiLCJkZWZhdWx0SW5pdGlhbE9mZnNldHMiLCJHYW1pbmdDYW1lcmEiLCJrZXlFdmVudHMiLCJtb3VzZUV2ZW50cyIsInVwZGF0ZUhhbmRsZXIiLCJ0aWx0IiwibG9jYXRpb24iLCJzaGlmdEtleURvd24iLCJyZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInJlc2V0UHJldmlvdXNBbmdsZXMiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VEb3duIiwiY2FudmFzIiwiaXNTaGlmdEtleURvd24iLCJzZXRNb3VzZUNvb3JkaW5hdGVzIiwidXBkYXRlWFlPZmZzZXQiLCJ1cGRhdGVBbmdsZXMiLCJ1cGRhdGUiLCJkZWx0YSIsInVwZGF0ZVpPZmZzZXQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwib2Zmc2V0cyIsImdldE9mZnNldHMiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsImdldFVwZGF0ZUhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbE9mZnNldHMiLCJmbGlwcGVkIiwiZnJvbUZsaXBwZWQiLCJmcm9tSW5pdGlhbE9mZnNldHMiLCJnYW1pbmdDYW1lcmEiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9y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QkFBTCxFQVR0Qjs7QUFXQTdCLG9CQUFjd0IsWUFBZCxFQUE0QkMsY0FBNUIsRUFBNENDLGNBQTVDLEVBQTREQyxnQkFBNUQsRUFBOEVDLFlBQTlFO0FBQ0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUFBLGtDQUNtQkEsVUFEbkIsQ0FDeEJDLGNBRHdCO0FBQUEsVUFDeEJBLGNBRHdCLHlDQUNQbkMscUJBRE87QUFBQSxVQUUxQm9DLE9BRjBCLEdBRWhCLElBRmdCO0FBQUEsVUFHMUIvQixJQUgwQixHQUduQmYsS0FBSytDLFdBQUwsQ0FBaUJELE9BQWpCLENBSG1CO0FBQUEsVUFJMUI5QixRQUowQixHQUlmYixTQUFTNkMsa0JBQVQsQ0FBNEJILGNBQTVCLENBSmU7QUFBQSxVQUsxQkksWUFMMEIsR0FLWC9DLE9BQU9nRCxjQUFQLENBQXNCdkMsWUFBdEIsRUFBb0NpQyxVQUFwQyxFQUFnRDdCLElBQWhELEVBQXNEQyxRQUF0RCxDQUxXOzs7QUFPaEMsYUFBT2lDLFlBQVA7QUFDRDs7OztFQTlFd0IvQyxNOztBQWlGM0JpRCxPQUFPQyxPQUFQLEdBQWlCekMsWUFBakIiLCJmaWxlIjoiZ2FtaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUaWx0ID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0JyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9jYW1lcmEnKSxcbiAgICAgIExvY2F0aW9uID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy9sb2NhdGlvbicpLFxuICAgICAgY2FtZXJhVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2NhbWVyYScpO1xuXG5jb25zdCB7IG9mZnNldE1hdHJpeEZyb21PZmZzZXRzLCByb3RhdGlvbk1hdHJpeEZyb21BbmdsZXMsIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQsIG5vcm1hbE1hdHJpeEZyb21Sb3RhdGlvbk1hdHJpeCB9ID0gY2FtZXJhVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbE9mZnNldHMgPSBbIDAsIDAsIC01IF07XG5cbmNsYXNzIEdhbWluZ0NhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIsIHRpbHQsIGxvY2F0aW9uKSB7XG4gICAgc3VwZXIoa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuXG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMubG9jYXRpb24ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzQW5nbGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c0FuZ2xlcygpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMubG9jYXRpb24ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICB0aGlzLmxvY2F0aW9uLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICB0aGlzLmxvY2F0aW9uLnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnRpbHQuc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbi51cGRhdGVYWU9mZnNldChtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnRpbHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhLCBjYW52YXMpIHtcbiAgICB0aGlzLmxvY2F0aW9uLnVwZGF0ZVpPZmZzZXQoZGVsdGEsIHRoaXMudGlsdCk7XG5cbiAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICB9XG5cbiAgdXBkYXRlKGNhbnZhcykge1xuICAgIGNvbnN0IHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIG9mZnNldHMgPSB0aGlzLmxvY2F0aW9uLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gb2Zmc2V0TWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSByb3RhdGlvbk1hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXgocm90YXRpb25NYXRyaXgpLFxuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSB0aGlzLmdldFVwZGF0ZUhhbmRsZXIoKTtcblxuICAgIHVwZGF0ZUhhbmRsZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbE9mZnNldHMgPSBkZWZhdWx0SW5pdGlhbE9mZnNldHMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IHRydWUsXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUZsaXBwZWQoZmxpcHBlZCksXG4gICAgICAgICAgbG9jYXRpb24gPSBMb2NhdGlvbi5mcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpLFxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHRpbHQsIGxvY2F0aW9uKTtcblxuICAgIHJldHVybiBnYW1pbmdDYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1pbmdDYW1lcmE7XG4iXX0=