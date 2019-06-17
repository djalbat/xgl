'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tilt = require('../../miscellaneous/tilt'),
    Camera = require('../camera'),
    Location = require('../../miscellaneous/location'),
    cameraUtilities = require('../../utilities/camera');

var offsetMatrixFromOffset = cameraUtilities.offsetMatrixFromOffset,
    rotationMatrixFromAngles = cameraUtilities.rotationMatrixFromAngles,
    positionMatrixFromDistance = cameraUtilities.positionMatrixFromDistance,
    projectionMatrixFromWidthAndHeight = cameraUtilities.projectionMatrixFromWidthAndHeight,
    normalMatrixFromRotationMatrix = cameraUtilities.normalMatrixFromRotationMatrix;


var defaultInitialOffset = [0, 0, 0];

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
        this.location.updatePreviousOffset();

        this.location.updatePreviousMouseCoordinates();
      } else {
        // this.tilt.updatePreviousAngles();
        //
        // this.tilt.updatePreviousMouseCoordinates();
      }
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates, mouseDown, canvas) {}
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates, mouseDown, canvas) {}
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown();

      this.tilt.setMouseCoordinates(mouseCoordinates);

      this.location.setMouseCoordinates(mouseCoordinates);

      if (shiftKeyDown) {
        this.location.updateXYOffset(this.tilt);
      } else {
        // this.tilt.updateAngles();
      }

      this.update(canvas);
    }
  }, {
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(delta, canvas) {
      this.location.updateZOffset(this.tilt, delta);

      this.update(canvas);
    }
  }, {
    key: 'update',
    value: function update(canvas) {
      var width = canvas.getWidth(),
          height = canvas.getHeight(),
          angles = this.tilt.getAngles(),
          offset = this.location.getOffset(),
          distance = 5,
          ///
      offsetMatrix = offsetMatrixFromOffset(offset),
          rotationMatrix = rotationMatrixFromAngles(angles),
          positionMatrix = positionMatrixFromDistance(distance),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalMatrix = normalMatrixFromRotationMatrix(rotationMatrix),
          updateHandler = this.getUpdateHandler();

      console.log(offset);

      updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$initialOf = properties.initialOffset,
          initialOffset = _properties$initialOf === undefined ? defaultInitialOffset : _properties$initialOf,
          tilt = Tilt.fromNothing(),
          location = Location.fromInitialOffset(initialOffset),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, tilt, location);


      return gamingCamera;
    }
  }]);

  return GamingCamera;
}(Camera);

module.exports = GamingCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwibmFtZXMiOlsiVGlsdCIsInJlcXVpcmUiLCJDYW1lcmEiLCJMb2NhdGlvbiIsImNhbWVyYVV0aWxpdGllcyIsIm9mZnNldE1hdHJpeEZyb21PZmZzZXQiLCJyb3RhdGlvbk1hdHJpeEZyb21BbmdsZXMiLCJwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSIsInByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQiLCJub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXgiLCJkZWZhdWx0SW5pdGlhbE9mZnNldCIsIkdhbWluZ0NhbWVyYSIsImtleUV2ZW50cyIsIm1vdXNlRXZlbnRzIiwidXBkYXRlSGFuZGxlciIsInRpbHQiLCJsb2NhdGlvbiIsInNoaWZ0S2V5RG93biIsInVwZGF0ZVByZXZpb3VzT2Zmc2V0IiwidXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlRG93biIsImNhbnZhcyIsImlzU2hpZnRLZXlEb3duIiwic2V0TW91c2VDb29yZGluYXRlcyIsInVwZGF0ZVhZT2Zmc2V0IiwidXBkYXRlIiwiZGVsdGEiLCJ1cGRhdGVaT2Zmc2V0Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImFuZ2xlcyIsImdldEFuZ2xlcyIsIm9mZnNldCIsImdldE9mZnNldCIsImRpc3RhbmNlIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJnZXRVcGRhdGVIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsInByb3BlcnRpZXMiLCJpbml0aWFsT2Zmc2V0IiwiZnJvbU5vdGhpbmciLCJmcm9tSW5pdGlhbE9mZnNldCIsImdhbWluZ0NhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0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LENBQ3hCQyxhQUR3QjtBQUFBLFVBQ3hCQSxhQUR3Qix5Q0FDUnJDLG9CQURRO0FBQUEsVUFFMUJLLElBRjBCLEdBRW5CZixLQUFLZ0QsV0FBTCxFQUZtQjtBQUFBLFVBRzFCaEMsUUFIMEIsR0FHZmIsU0FBUzhDLGlCQUFULENBQTJCRixhQUEzQixDQUhlO0FBQUEsVUFJMUJHLFlBSjBCLEdBSVhoRCxPQUFPaUQsY0FBUCxDQUFzQnhDLFlBQXRCLEVBQW9DbUMsVUFBcEMsRUFBZ0QvQixJQUFoRCxFQUFzREMsUUFBdEQsQ0FKVzs7O0FBTWhDLGFBQU9rQyxZQUFQO0FBQ0Q7Ozs7RUE1RXdCaEQsTTs7QUErRTNCa0QsT0FBT0MsT0FBUCxHQUFpQjFDLFlBQWpCIiwiZmlsZSI6ImdhbWluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGlsdCA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdCcpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICBMb2NhdGlvbiA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvbG9jYXRpb24nKSxcbiAgICAgIGNhbWVyYVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9jYW1lcmEnKTtcblxuY29uc3QgeyBvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0LCByb3RhdGlvbk1hdHJpeEZyb21BbmdsZXMsIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLCBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0LCBub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXggfSA9IGNhbWVyYVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxPZmZzZXQgPSBbIDAsIDAsIDAgXTtcblxuY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3Ioa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgdGlsdCwgbG9jYXRpb24pIHtcbiAgICBzdXBlcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyKTtcblxuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG5cbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5sb2NhdGlvbi51cGRhdGVQcmV2aW91c09mZnNldCgpO1xuXG4gICAgICB0aGlzLmxvY2F0aW9uLnVwZGF0ZVByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLnRpbHQudXBkYXRlUHJldmlvdXNBbmdsZXMoKTtcbiAgICAgIC8vXG4gICAgICAvLyB0aGlzLnRpbHQudXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcblxuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuXG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKTtcblxuICAgIHRoaXMudGlsdC5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5sb2NhdGlvbi5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5sb2NhdGlvbi51cGRhdGVYWU9mZnNldCh0aGlzLnRpbHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLnRpbHQudXBkYXRlQW5nbGVzKCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhLCBjYW52YXMpIHtcbiAgICB0aGlzLmxvY2F0aW9uLnVwZGF0ZVpPZmZzZXQodGhpcy50aWx0LCBkZWx0YSk7XG5cbiAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICB9XG5cbiAgdXBkYXRlKGNhbnZhcykge1xuICAgIGNvbnN0IHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBvZmZzZXQgPSB0aGlzLmxvY2F0aW9uLmdldE9mZnNldCgpLFxuICAgICAgICAgIGRpc3RhbmNlID0gNSwgIC8vL1xuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IG9mZnNldE1hdHJpeEZyb21PZmZzZXQob2Zmc2V0KSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IHJvdGF0aW9uTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IG5vcm1hbE1hdHJpeEZyb21Sb3RhdGlvbk1hdHJpeChyb3RhdGlvbk1hdHJpeCksXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IHRoaXMuZ2V0VXBkYXRlSGFuZGxlcigpO1xuXG4gICAgY29uc29sZS5sb2cob2Zmc2V0KVxuXG4gICAgdXBkYXRlSGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsT2Zmc2V0ID0gZGVmYXVsdEluaXRpYWxPZmZzZXQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBsb2NhdGlvbiA9IExvY2F0aW9uLmZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpLFxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHRpbHQsIGxvY2F0aW9uKTtcblxuICAgIHJldHVybiBnYW1pbmdDYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1pbmdDYW1lcmE7XG4iXX0=