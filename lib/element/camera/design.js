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

var calculateOffsetMatrix = cameraUtilities.calculateOffsetMatrix,
    calculateRotationMatrix = cameraUtilities.calculateRotationMatrix,
    calculatePositionMatrix = cameraUtilities.calculatePositionMatrix,
    calculateProjectionMatrix = cameraUtilities.calculateProjectionMatrix,
    calculateNormalMatrix = cameraUtilities.calculateNormalMatrix;


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
          offsetMatrix = calculateOffsetMatrix(offset),
          rotationMatrix = calculateRotationMatrix(angles),
          positionMatrix = calculatePositionMatrix(distance),
          projectionMatrix = calculateProjectionMatrix(width, height),
          normalMatrix = calculateNormalMatrix(rotationMatrix),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwiY2FtZXJhVXRpbGl0aWVzIiwiY2FsY3VsYXRlT2Zmc2V0TWF0cml4IiwiY2FsY3VsYXRlUm90YXRpb25NYXRyaXgiLCJjYWxjdWxhdGVQb3NpdGlvbk1hdHJpeCIsImNhbGN1bGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjYWxjdWxhdGVOb3JtYWxNYXRyaXgiLCJkZWZhdWx0SW5pdGlhbERpc3RhbmNlIiwiZGVmYXVsdEluaXRpYWxPZmZzZXQiLCJEZXNpZ25DYW1lcmEiLCJrZXlFdmVudHMiLCJtb3VzZUV2ZW50cyIsInVwZGF0ZUhhbmRsZXIiLCJwYW4iLCJ0aWx0Iiwiem9vbSIsInNoaWZ0S2V5RG93biIsInVwZGF0ZVByZXZpb3VzT2Zmc2V0IiwidXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwidXBkYXRlUHJldmlvdXNBbmdsZXMiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VEb3duIiwiY2FudmFzIiwiaXNTaGlmdEtleURvd24iLCJzZXRNb3VzZUNvb3JkaW5hdGVzIiwidXBkYXRlT2Zmc2V0IiwidXBkYXRlQW5nbGVzIiwidXBkYXRlIiwiZGVsdGEiLCJ1cGRhdGVEaXN0YW5jZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJvZmZzZXQiLCJnZXRPZmZzZXQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJnZXRVcGRhdGVIYW5kbGVyIiwicHJvcGVydGllcyIsImluaXRpYWxPZmZzZXQiLCJpbml0aWFsRGlzdGFuY2UiLCJmcm9tSW5pdGlhbE9mZnNldCIsImZyb21Ob3RoaW5nIiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImRlc2lnbkNhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLHlCQUFSLENBQVo7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLDBCQUFSLENBRGI7QUFBQSxJQUVNRSxPQUFPRixRQUFRLDBCQUFSLENBRmI7QUFBQSxJQUdNRyxTQUFTSCxRQUFRLFdBQVIsQ0FIZjtBQUFBLElBSU1JLGtCQUFrQkosUUFBUSx3QkFBUixDQUp4Qjs7SUFNUUsscUIsR0FBOEhELGUsQ0FBOUhDLHFCO0lBQXVCQyx1QixHQUF1R0YsZSxDQUF2R0UsdUI7SUFBeUJDLHVCLEdBQThFSCxlLENBQTlFRyx1QjtJQUF5QkMseUIsR0FBcURKLGUsQ0FBckRJLHlCO0lBQTJCQyxxQixHQUEwQkwsZSxDQUExQksscUI7OztBQUU1RyxJQUFNQyx5QkFBeUIsQ0FBL0I7QUFBQSxJQUNNQyx1QkFBdUIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FEN0I7O0lBR01DLFk7OztBQUNKLHdCQUFZQyxTQUFaLEVBQXVCQyxXQUF2QixFQUFvQ0MsYUFBcEMsRUFBbURDLEdBQW5ELEVBQXdEQyxJQUF4RCxFQUE4REMsSUFBOUQsRUFBb0U7QUFBQTs7QUFBQSw0SEFDNURMLFNBRDRELEVBQ2pEQyxXQURpRCxFQUNwQ0MsYUFEb0M7O0FBR2xFLFVBQUtDLEdBQUwsR0FBV0EsR0FBWDs7QUFFQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7O0FBRUEsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBUGtFO0FBUW5FOzs7O29DQUVlQyxZLEVBQWM7QUFDNUIsVUFBSUEsWUFBSixFQUFrQjtBQUNoQixhQUFLSCxHQUFMLENBQVNJLG9CQUFUOztBQUVBLGFBQUtKLEdBQUwsQ0FBU0ssOEJBQVQ7QUFDRCxPQUpELE1BSU87QUFDTCxhQUFLSixJQUFMLENBQVVLLG9CQUFWOztBQUVBLGFBQUtMLElBQUwsQ0FBVUksOEJBQVY7QUFDRDtBQUNGOzs7bUNBRWNFLGdCLEVBQWtCQyxTLEVBQVdDLE0sRUFBUTtBQUNsRCxXQUFLVCxHQUFMLENBQVNLLDhCQUFUOztBQUVBLFdBQUtKLElBQUwsQ0FBVUssb0JBQVY7QUFDRDs7O3FDQUVnQkMsZ0IsRUFBa0JDLFMsRUFBV0MsTSxFQUFRO0FBQ3BELFVBQU1OLGVBQWUsS0FBS04sU0FBTCxDQUFlYSxjQUFmLEVBQXJCOztBQUVBLFVBQUlQLFlBQUosRUFBa0I7QUFDaEIsYUFBS0gsR0FBTCxDQUFTSSxvQkFBVDs7QUFFQSxhQUFLSixHQUFMLENBQVNLLDhCQUFUO0FBQ0Q7O0FBRUQsV0FBS0osSUFBTCxDQUFVSSw4QkFBVjtBQUNEOzs7cUNBRWdCRSxnQixFQUFrQkMsUyxFQUFXQyxNLEVBQVE7QUFDcEQsVUFBTU4sZUFBZSxLQUFLTixTQUFMLENBQWVhLGNBQWYsRUFBckI7O0FBRUEsV0FBS1YsR0FBTCxDQUFTVyxtQkFBVCxDQUE2QkosZ0JBQTdCOztBQUVBLFdBQUtOLElBQUwsQ0FBVVUsbUJBQVYsQ0FBOEJKLGdCQUE5Qjs7QUFFQSxVQUFJQyxTQUFKLEVBQWU7QUFDYixZQUFJTCxZQUFKLEVBQWtCO0FBQ2hCLGVBQUtILEdBQUwsQ0FBU1ksWUFBVCxDQUFzQixLQUFLWCxJQUEzQjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtBLElBQUwsQ0FBVVksWUFBVjtBQUNEOztBQUVELGFBQUtDLE1BQUwsQ0FBWUwsTUFBWjtBQUNEO0FBQ0Y7OztzQ0FFaUJNLEssRUFBT04sTSxFQUFRO0FBQy9CLFdBQUtQLElBQUwsQ0FBVWMsY0FBVixDQUF5QkQsS0FBekI7O0FBRUEsV0FBS0QsTUFBTCxDQUFZTCxNQUFaO0FBQ0Q7OzsyQkFFTUEsTSxFQUFRO0FBQ2IsVUFBTVEsUUFBUVIsT0FBT1MsUUFBUCxFQUFkO0FBQUEsVUFDTUMsU0FBU1YsT0FBT1csU0FBUCxFQURmO0FBQUEsVUFFTUMsU0FBUyxLQUFLckIsR0FBTCxDQUFTc0IsU0FBVCxFQUZmO0FBQUEsVUFHTUMsU0FBUyxLQUFLdEIsSUFBTCxDQUFVdUIsU0FBVixFQUhmO0FBQUEsVUFJTUMsV0FBVyxLQUFLdkIsSUFBTCxDQUFVd0IsV0FBVixFQUpqQjtBQUFBLFVBS01DLGVBQWV0QyxzQkFBc0JnQyxNQUF0QixDQUxyQjtBQUFBLFVBTU1PLGlCQUFpQnRDLHdCQUF3QmlDLE1BQXhCLENBTnZCO0FBQUEsVUFPTU0saUJBQWlCdEMsd0JBQXdCa0MsUUFBeEIsQ0FQdkI7QUFBQSxVQVFNSyxtQkFBbUJ0QywwQkFBMEJ5QixLQUExQixFQUFpQ0UsTUFBakMsQ0FSekI7QUFBQSxVQVNNWSxlQUFldEMsc0JBQXNCbUMsY0FBdEIsQ0FUckI7QUFBQSxVQVVNN0IsZ0JBQWdCLEtBQUtpQyxnQkFBTCxFQVZ0Qjs7QUFZQWpDLG9CQUFjNEIsWUFBZCxFQUE0QkMsY0FBNUIsRUFBNENDLGNBQTVDLEVBQTREQyxnQkFBNUQsRUFBOEVDLFlBQTlFO0FBQ0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUFBLGtDQUMyREEsVUFEM0QsQ0FDeEJDLGFBRHdCO0FBQUEsVUFDeEJBLGFBRHdCLHlDQUNSdkMsb0JBRFE7QUFBQSxrQ0FDMkRzQyxVQUQzRCxDQUNjRSxlQURkO0FBQUEsVUFDY0EsZUFEZCx5Q0FDZ0N6QyxzQkFEaEM7QUFBQSxVQUUxQk0sR0FGMEIsR0FFcEJqQixJQUFJcUQsaUJBQUosQ0FBc0JGLGFBQXRCLENBRm9CO0FBQUEsVUFHMUJqQyxJQUgwQixHQUduQmhCLEtBQUtvRCxXQUFMLEVBSG1CO0FBQUEsVUFJMUJuQyxJQUowQixHQUluQmhCLEtBQUtvRCxtQkFBTCxDQUF5QkgsZUFBekIsQ0FKbUI7QUFBQSxVQUsxQkksWUFMMEIsR0FLWHBELE9BQU9xRCxjQUFQLENBQXNCNUMsWUFBdEIsRUFBb0NxQyxVQUFwQyxFQUFnRGpDLEdBQWhELEVBQXFEQyxJQUFyRCxFQUEyREMsSUFBM0QsQ0FMVzs7O0FBT2hDLGFBQU9xQyxZQUFQO0FBQ0Q7Ozs7RUF6RndCcEQsTTs7QUE0RjNCc0QsT0FBT0MsT0FBUCxHQUFpQjlDLFlBQWpCIiwiZmlsZSI6ImRlc2lnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFuID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy9wYW4nKSxcbiAgICAgIFRpbHQgPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3pvb20nKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgY2FtZXJhVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2NhbWVyYScpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZU9mZnNldE1hdHJpeCwgY2FsY3VsYXRlUm90YXRpb25NYXRyaXgsIGNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4LCBjYWxjdWxhdGVQcm9qZWN0aW9uTWF0cml4LCBjYWxjdWxhdGVOb3JtYWxNYXRyaXggfSA9IGNhbWVyYVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxEaXN0YW5jZSA9IDUsXG4gICAgICBkZWZhdWx0SW5pdGlhbE9mZnNldCA9IFsgMCwgMCwgMCBdO1xuXG5jbGFzcyBEZXNpZ25DYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyLCBwYW4sIHRpbHQsIHpvb20pIHtcbiAgICBzdXBlcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyKTtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcblxuICAgIHRoaXMuem9vbSA9IHpvb207XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wYW4udXBkYXRlUHJldmlvdXNPZmZzZXQoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVQcmV2aW91c0FuZ2xlcygpO1xuXG4gICAgICB0aGlzLnRpbHQudXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnBhbi51cGRhdGVQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHRoaXMudGlsdC51cGRhdGVQcmV2aW91c0FuZ2xlcygpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnBhbi51cGRhdGVQcmV2aW91c09mZnNldCgpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRpbHQudXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKTtcblxuICAgIHRoaXMucGFuLnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnRpbHQuc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0KHRoaXMudGlsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbHQudXBkYXRlQW5nbGVzKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEsIGNhbnZhcykge1xuICAgIHRoaXMuem9vbS51cGRhdGVEaXN0YW5jZShkZWx0YSk7XG5cbiAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICB9XG5cbiAgdXBkYXRlKGNhbnZhcykge1xuICAgIGNvbnN0IHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIG9mZnNldCA9IHRoaXMucGFuLmdldE9mZnNldCgpLFxuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IGNhbGN1bGF0ZU9mZnNldE1hdHJpeChvZmZzZXQpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gY2FsY3VsYXRlUm90YXRpb25NYXRyaXgoYW5nbGVzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IGNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4KGRpc3RhbmNlKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gY2FsY3VsYXRlUHJvamVjdGlvbk1hdHJpeCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBjYWxjdWxhdGVOb3JtYWxNYXRyaXgocm90YXRpb25NYXRyaXgpLFxuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSB0aGlzLmdldFVwZGF0ZUhhbmRsZXIoKTtcblxuICAgIHVwZGF0ZUhhbmRsZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbE9mZnNldCA9IGRlZmF1bHRJbml0aWFsT2Zmc2V0LCBpbml0aWFsRGlzdGFuY2UgPSBkZWZhdWx0SW5pdGlhbERpc3RhbmNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldChpbml0aWFsT2Zmc2V0KSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20pO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlc2lnbkNhbWVyYTtcbiJdfQ==