'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tilt = require('../../miscellaneous/tilt'),
    Camera = require('../camera'),
    Location = require('../../miscellaneous/location'),
    vectorMaths = require('../../maths/vector'),
    cameraUtilities = require('../../utilities/camera');

var zero2 = vectorMaths.zero2,
    offsetMatrixFromOffsets = cameraUtilities.offsetMatrixFromOffsets,
    rotationMatrixFromAngles = cameraUtilities.rotationMatrixFromAngles,
    positionMatrixFromNothing = cameraUtilities.positionMatrixFromNothing,
    projectionMatrixFromWidthAndHeight = cameraUtilities.projectionMatrixFromWidthAndHeight,
    normalMatrixFromRotationMatrix = cameraUtilities.normalMatrixFromRotationMatrix;


var defaultInitialAngles = zero2(),
    defaultInitialPosition = [0, 0, 5];

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
      var _properties$initialPo = properties.initialPosition,
          initialPosition = _properties$initialPo === undefined ? defaultInitialPosition : _properties$initialPo,
          _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === undefined ? defaultInitialAngles : _properties$initialAn,
          tilt = Tilt.fromInitialAngles(initialAngles),
          location = Location.fromInitialPosition(initialPosition),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, tilt, location);


      return gamingCamera;
    }
  }]);

  return GamingCamera;
}(Camera);

module.exports = GamingCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwibmFtZXMiOlsiVGlsdCIsInJlcXVpcmUiLCJDYW1lcmEiLCJMb2NhdGlvbiIsInZlY3Rvck1hdGhzIiwiY2FtZXJhVXRpbGl0aWVzIiwiemVybzIiLCJvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0cyIsInJvdGF0aW9uTWF0cml4RnJvbUFuZ2xlcyIsInBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmciLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4IiwiZGVmYXVsdEluaXRpYWxBbmdsZXMiLCJkZWZhdWx0SW5pdGlhbFBvc2l0aW9uIiwiR2FtaW5nQ2FtZXJhIiwia2V5RXZlbnRzIiwibW91c2VFdmVudHMiLCJ1cGRhdGVIYW5kbGVyIiwidGlsdCIsImxvY2F0aW9uIiwic2hpZnRLZXlEb3duIiwicmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJyZXNldFByZXZpb3VzQW5nbGVzIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlRG93biIsImNhbnZhcyIsImlzU2hpZnRLZXlEb3duIiwic2V0TW91c2VDb29yZGluYXRlcyIsInVwZGF0ZVhZT2Zmc2V0IiwidXBkYXRlQW5nbGVzIiwidXBkYXRlIiwiZGVsdGEiLCJ1cGRhdGVaT2Zmc2V0Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJnZXRVcGRhdGVIYW5kbGVyIiwicHJvcGVydGllcyIsImluaXRpYWxQb3NpdGlvbiIsImluaXRpYWxBbmdsZXMiLCJmcm9tSW5pdGlhbEFuZ2xlcyIsImZyb21Jbml0aWFsUG9zaXRpb24iLCJnYW1pbmdDYW1lcmEiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSwwQkFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxXQUFSLENBRGY7QUFBQSxJQUVNRSxXQUFXRixRQUFRLDhCQUFSLENBRmpCO0FBQUEsSUFHTUcsY0FBY0gsUUFBUSxvQkFBUixDQUhwQjtBQUFBLElBSU1JLGtCQUFrQkosUUFBUSx3QkFBUixDQUp4Qjs7QUFNTSxJQUFFSyxLQUFGLEdBQVlGLFdBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLHVCQURGLEdBQ3VKRixlQUR2SixDQUNFRSx1QkFERjtBQUFBLElBQzJCQyx3QkFEM0IsR0FDdUpILGVBRHZKLENBQzJCRyx3QkFEM0I7QUFBQSxJQUNxREMseUJBRHJELEdBQ3VKSixlQUR2SixDQUNxREkseUJBRHJEO0FBQUEsSUFDZ0ZDLGtDQURoRixHQUN1SkwsZUFEdkosQ0FDZ0ZLLGtDQURoRjtBQUFBLElBQ29IQyw4QkFEcEgsR0FDdUpOLGVBRHZKLENBQ29ITSw4QkFEcEg7OztBQUdOLElBQU1DLHVCQUF1Qk4sT0FBN0I7QUFBQSxJQUNNTyx5QkFBeUIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FEL0I7O0lBR01DLFk7OztBQUNKLHdCQUFZQyxTQUFaLEVBQXVCQyxXQUF2QixFQUFvQ0MsYUFBcEMsRUFBbURDLElBQW5ELEVBQXlEQyxRQUF6RCxFQUFtRTtBQUFBOztBQUFBLDRIQUMzREosU0FEMkQsRUFDaERDLFdBRGdELEVBQ25DQyxhQURtQzs7QUFHakUsVUFBS0MsSUFBTCxHQUFZQSxJQUFaOztBQUVBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBTGlFO0FBTWxFOzs7O29DQUVlQyxZLEVBQWM7QUFDNUIsVUFBSUEsWUFBSixFQUFrQjtBQUNoQixhQUFLRCxRQUFMLENBQWNFLDZCQUFkO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0gsSUFBTCxDQUFVRyw2QkFBVjs7QUFFQSxhQUFLSCxJQUFMLENBQVVJLG1CQUFWO0FBQ0Q7QUFDRjs7O21DQUVjQyxnQixFQUFrQkMsUyxFQUFXQyxNLEVBQVE7QUFDbEQsV0FBS1AsSUFBTCxDQUFVSSxtQkFBVjtBQUNEOzs7cUNBRWdCQyxnQixFQUFrQkMsUyxFQUFXQyxNLEVBQVE7QUFDcEQsV0FBS04sUUFBTCxDQUFjRSw2QkFBZDs7QUFFQSxXQUFLSCxJQUFMLENBQVVHLDZCQUFWO0FBQ0Q7OztxQ0FFZ0JFLGdCLEVBQWtCQyxTLEVBQVdDLE0sRUFBUTtBQUNwRCxVQUFNTCxlQUFlLEtBQUtMLFNBQUwsQ0FBZVcsY0FBZixFQUFyQjs7QUFFQSxXQUFLUCxRQUFMLENBQWNFLDZCQUFkOztBQUVBLFdBQUtGLFFBQUwsQ0FBY1EsbUJBQWQsQ0FBa0NKLGdCQUFsQzs7QUFFQSxXQUFLTCxJQUFMLENBQVVTLG1CQUFWLENBQThCSixnQkFBOUI7O0FBRUEsVUFBSUMsU0FBSixFQUFlO0FBQ2IsWUFBSUosWUFBSixFQUFrQjtBQUNoQixlQUFLRCxRQUFMLENBQWNTLGNBQWQsQ0FBNkJMLGdCQUE3QixFQUErQyxLQUFLTCxJQUFwRDtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtBLElBQUwsQ0FBVVcsWUFBVjtBQUNEOztBQUVELGFBQUtDLE1BQUwsQ0FBWUwsTUFBWjtBQUNEO0FBQ0Y7OztzQ0FFaUJNLEssRUFBT04sTSxFQUFRO0FBQy9CLFdBQUtOLFFBQUwsQ0FBY2EsYUFBZCxDQUE0QkQsS0FBNUIsRUFBbUMsS0FBS2IsSUFBeEM7O0FBRUEsV0FBS1ksTUFBTCxDQUFZTCxNQUFaO0FBQ0Q7OzsyQkFFTUEsTSxFQUFRO0FBQ2IsVUFBTVEsUUFBUVIsT0FBT1MsUUFBUCxFQUFkO0FBQUEsVUFDTUMsU0FBU1YsT0FBT1csU0FBUCxFQURmO0FBQUEsVUFFTUMsVUFBVSxLQUFLbEIsUUFBTCxDQUFjbUIsVUFBZCxFQUZoQjtBQUFBLFVBR01DLFNBQVMsS0FBS3JCLElBQUwsQ0FBVXNCLFNBQVYsRUFIZjtBQUFBLFVBSU1DLGVBQWVsQyx3QkFBd0I4QixPQUF4QixDQUpyQjtBQUFBLFVBS01LLGlCQUFpQmxDLHlCQUF5QitCLE1BQXpCLENBTHZCO0FBQUEsVUFNTUksaUJBQWlCbEMsMkJBTnZCO0FBQUEsVUFPTW1DLG1CQUFtQmxDLG1DQUFtQ3VCLEtBQW5DLEVBQTBDRSxNQUExQyxDQVB6QjtBQUFBLFVBUU1VLGVBQWVsQywrQkFBK0IrQixjQUEvQixDQVJyQjtBQUFBLFVBU016QixnQkFBZ0IsS0FBSzZCLGdCQUFMLEVBVHRCOztBQVdBN0Isb0JBQWN3QixZQUFkLEVBQTRCQyxjQUE1QixFQUE0Q0MsY0FBNUMsRUFBNERDLGdCQUE1RCxFQUE4RUMsWUFBOUU7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQUEsa0NBQzJEQSxVQUQzRCxDQUN4QkMsZUFEd0I7QUFBQSxVQUN4QkEsZUFEd0IseUNBQ05uQyxzQkFETTtBQUFBLGtDQUMyRGtDLFVBRDNELENBQ2tCRSxhQURsQjtBQUFBLFVBQ2tCQSxhQURsQix5Q0FDa0NyQyxvQkFEbEM7QUFBQSxVQUUxQk0sSUFGMEIsR0FFbkJsQixLQUFLa0QsaUJBQUwsQ0FBdUJELGFBQXZCLENBRm1CO0FBQUEsVUFHMUI5QixRQUgwQixHQUdmaEIsU0FBU2dELG1CQUFULENBQTZCSCxlQUE3QixDQUhlO0FBQUEsVUFJMUJJLFlBSjBCLEdBSVhsRCxPQUFPbUQsY0FBUCxDQUFzQnZDLFlBQXRCLEVBQW9DaUMsVUFBcEMsRUFBZ0Q3QixJQUFoRCxFQUFzREMsUUFBdEQsQ0FKVzs7O0FBTWhDLGFBQU9pQyxZQUFQO0FBQ0Q7Ozs7RUE3RXdCbEQsTTs7QUFnRjNCb0QsT0FBT0MsT0FBUCxHQUFpQnpDLFlBQWpCIiwiZmlsZSI6ImdhbWluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGlsdCA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdCcpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICBMb2NhdGlvbiA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvbG9jYXRpb24nKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBjYW1lcmFVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvY2FtZXJhJyk7XG5cbmNvbnN0IHsgemVybzIgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0cywgcm90YXRpb25NYXRyaXhGcm9tQW5nbGVzLCBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nLCBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0LCBub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXggfSA9IGNhbWVyYVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxQb3NpdGlvbiA9IFsgMCwgMCwgNSBdO1xuXG5jbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyLCB0aWx0LCBsb2NhdGlvbikge1xuICAgIHN1cGVyKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcblxuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLmxvY2F0aW9uLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuXG4gICAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c0FuZ2xlcygpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNBbmdsZXMoKTtcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLmxvY2F0aW9uLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpO1xuXG4gICAgdGhpcy5sb2NhdGlvbi5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuXG4gICAgdGhpcy5sb2NhdGlvbi5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy50aWx0LnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24udXBkYXRlWFlPZmZzZXQobW91c2VDb29yZGluYXRlcywgdGhpcy50aWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5sb2NhdGlvbi51cGRhdGVaT2Zmc2V0KGRlbHRhLCB0aGlzLnRpbHQpO1xuXG4gICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgfVxuXG4gIHVwZGF0ZShjYW52YXMpIHtcbiAgICBjb25zdCB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5sb2NhdGlvbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IG9mZnNldE1hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb25NYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4ID0gbm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4KHJvdGF0aW9uTWF0cml4KSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gdGhpcy5nZXRVcGRhdGVIYW5kbGVyKCk7XG5cbiAgICB1cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxQb3NpdGlvbiA9IGRlZmF1bHRJbml0aWFsUG9zaXRpb24sIGluaXRpYWxBbmdsZXMgPSBkZWZhdWx0SW5pdGlhbEFuZ2xlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlcyhpbml0aWFsQW5nbGVzKSxcbiAgICAgICAgICBsb2NhdGlvbiA9IExvY2F0aW9uLmZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSxcbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCB0aWx0LCBsb2NhdGlvbik7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtaW5nQ2FtZXJhO1xuIl19