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
      this.zoom.mouseWheelEventHandler(delta);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwiY2FtZXJhVXRpbGl0aWVzIiwiY2FsY3VsYXRlT2Zmc2V0TWF0cml4IiwiY2FsY3VsYXRlUm90YXRpb25NYXRyaXgiLCJjYWxjdWxhdGVQb3NpdGlvbk1hdHJpeCIsImNhbGN1bGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjYWxjdWxhdGVOb3JtYWxNYXRyaXgiLCJkZWZhdWx0SW5pdGlhbERpc3RhbmNlIiwiZGVmYXVsdEluaXRpYWxPZmZzZXQiLCJEZXNpZ25DYW1lcmEiLCJrZXlFdmVudHMiLCJtb3VzZUV2ZW50cyIsInVwZGF0ZUhhbmRsZXIiLCJwYW4iLCJ0aWx0Iiwiem9vbSIsInNoaWZ0S2V5RG93biIsInVwZGF0ZVByZXZpb3VzT2Zmc2V0IiwidXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwidXBkYXRlUHJldmlvdXNBbmdsZXMiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VEb3duIiwiY2FudmFzIiwiaXNTaGlmdEtleURvd24iLCJzZXRNb3VzZUNvb3JkaW5hdGVzIiwidXBkYXRlT2Zmc2V0IiwidXBkYXRlQW5nbGVzIiwidXBkYXRlIiwiZGVsdGEiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsIm9mZnNldCIsImdldE9mZnNldCIsImFuZ2xlcyIsImdldEFuZ2xlcyIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsImdldFVwZGF0ZUhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbE9mZnNldCIsImluaXRpYWxEaXN0YW5jZSIsImZyb21Jbml0aWFsT2Zmc2V0IiwiZnJvbU5vdGhpbmciLCJmcm9tSW5pdGlhbERpc3RhbmNlIiwiZGVzaWduQ2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEseUJBQVIsQ0FBWjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsMEJBQVIsQ0FEYjtBQUFBLElBRU1FLE9BQU9GLFFBQVEsMEJBQVIsQ0FGYjtBQUFBLElBR01HLFNBQVNILFFBQVEsV0FBUixDQUhmO0FBQUEsSUFJTUksa0JBQWtCSixRQUFRLHdCQUFSLENBSnhCOztJQU1RSyxxQixHQUE4SEQsZSxDQUE5SEMscUI7SUFBdUJDLHVCLEdBQXVHRixlLENBQXZHRSx1QjtJQUF5QkMsdUIsR0FBOEVILGUsQ0FBOUVHLHVCO0lBQXlCQyx5QixHQUFxREosZSxDQUFyREkseUI7SUFBMkJDLHFCLEdBQTBCTCxlLENBQTFCSyxxQjs7O0FBRTVHLElBQU1DLHlCQUF5QixDQUEvQjtBQUFBLElBQ01DLHVCQUF1QixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUQ3Qjs7SUFHTUMsWTs7O0FBQ0osd0JBQVlDLFNBQVosRUFBdUJDLFdBQXZCLEVBQW9DQyxhQUFwQyxFQUFtREMsR0FBbkQsRUFBd0RDLElBQXhELEVBQThEQyxJQUE5RCxFQUFvRTtBQUFBOztBQUFBLDRIQUM1REwsU0FENEQsRUFDakRDLFdBRGlELEVBQ3BDQyxhQURvQzs7QUFHbEUsVUFBS0MsR0FBTCxHQUFXQSxHQUFYOztBQUVBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFQa0U7QUFRbkU7Ozs7b0NBRWVDLFksRUFBYztBQUM1QixVQUFJQSxZQUFKLEVBQWtCO0FBQ2hCLGFBQUtILEdBQUwsQ0FBU0ksb0JBQVQ7O0FBRUEsYUFBS0osR0FBTCxDQUFTSyw4QkFBVDtBQUNELE9BSkQsTUFJTztBQUNMLGFBQUtKLElBQUwsQ0FBVUssb0JBQVY7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UCxHQUFpQjlDLFlBQWpCIiwiZmlsZSI6ImRlc2lnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFuID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy9wYW4nKSxcbiAgICAgIFRpbHQgPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3pvb20nKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgY2FtZXJhVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2NhbWVyYScpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZU9mZnNldE1hdHJpeCwgY2FsY3VsYXRlUm90YXRpb25NYXRyaXgsIGNhbGN1bGF0ZVBvc2l0aW9uTWF0cml4LCBjYWxjdWxhdGVQcm9qZWN0aW9uTWF0cml4LCBjYWxjdWxhdGVOb3JtYWxNYXRyaXggfSA9IGNhbWVyYVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxEaXN0YW5jZSA9IDUsXG4gICAgICBkZWZhdWx0SW5pdGlhbE9mZnNldCA9IFsgMCwgMCwgMCBdO1xuXG5jbGFzcyBEZXNpZ25DYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyLCBwYW4sIHRpbHQsIHpvb20pIHtcbiAgICBzdXBlcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyKTtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcblxuICAgIHRoaXMuem9vbSA9IHpvb207XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wYW4udXBkYXRlUHJldmlvdXNPZmZzZXQoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVQcmV2aW91c0FuZ2xlcygpO1xuXG4gICAgICB0aGlzLnRpbHQudXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnBhbi51cGRhdGVQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHRoaXMudGlsdC51cGRhdGVQcmV2aW91c0FuZ2xlcygpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnBhbi51cGRhdGVQcmV2aW91c09mZnNldCgpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRpbHQudXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKTtcblxuICAgIHRoaXMucGFuLnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnRpbHQuc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0KHRoaXMudGlsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbHQudXBkYXRlQW5nbGVzKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEsIGNhbnZhcykge1xuICAgIHRoaXMuem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICB1cGRhdGUoY2FudmFzKSB7XG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0ID0gdGhpcy5wYW4uZ2V0T2Zmc2V0KCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gY2FsY3VsYXRlT2Zmc2V0TWF0cml4KG9mZnNldCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSBjYWxjdWxhdGVSb3RhdGlvbk1hdHJpeChhbmdsZXMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gY2FsY3VsYXRlUG9zaXRpb25NYXRyaXgoZGlzdGFuY2UpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBjYWxjdWxhdGVQcm9qZWN0aW9uTWF0cml4KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IGNhbGN1bGF0ZU5vcm1hbE1hdHJpeChyb3RhdGlvbk1hdHJpeCksXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IHRoaXMuZ2V0VXBkYXRlSGFuZGxlcigpO1xuXG4gICAgdXBkYXRlSGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsT2Zmc2V0ID0gZGVmYXVsdEluaXRpYWxPZmZzZXQsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVzaWduQ2FtZXJhO1xuIl19