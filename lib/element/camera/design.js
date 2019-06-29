'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tilt = require('../../miscellaneous/tilt'),
    Zoom = require('../../miscellaneous/zoom'),
    Camera = require('../camera'),
    Location = require('../../miscellaneous/location'),
    vectorMaths = require('../../maths/vector'),
    matrixUtilities = require('../../utilities/matrix');

var zero2 = vectorMaths.zero2,
    zero3 = vectorMaths.zero3,
    offsetsMatrixFromOffsets = matrixUtilities.offsetsMatrixFromOffsets,
    rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles,
    positionMatrixFromDistance = matrixUtilities.positionMatrixFromDistance,
    projectionMatrixFromWidthAndHeight = matrixUtilities.projectionMatrixFromWidthAndHeight,
    normalsMatrixFromRotationsMatrix = matrixUtilities.normalsMatrixFromRotationsMatrix;


var defaultInitialAngles = zero2(),
    defaultInitialOffsets = zero3(),
    defaultInitialDistance = 5;

var DesignCamera = function (_Camera) {
  _inherits(DesignCamera, _Camera);

  function DesignCamera(keyEvents, mouseEvents, updateHandler, zoom, tilt, location) {
    _classCallCheck(this, DesignCamera);

    var _this = _possibleConstructorReturn(this, (DesignCamera.__proto__ || Object.getPrototypeOf(DesignCamera)).call(this, keyEvents, mouseEvents, updateHandler));

    _this.zoom = zoom;

    _this.tilt = tilt;

    _this.location = location;
    return _this;
  }

  _createClass(DesignCamera, [{
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
      this.location.resetPreviousMouseCoordinates();

      this.tilt.resetPreviousAngles();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown();

      if (shiftKeyDown) {
        this.location.resetPreviousMouseCoordinates();
      }

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
      this.zoom.updateDistance(delta);

      this.update(canvas);
    }
  }, {
    key: 'update',
    value: function update(canvas) {
      var width = canvas.getWidth(),
          height = canvas.getHeight(),
          angles = this.tilt.getAngles(),
          offsets = this.location.getOffsets(),
          distance = this.zoom.getDistance(),
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromDistance(distance),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix),
          updateHandler = this.getUpdateHandler();

      updateHandler(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === undefined ? defaultInitialAngles : _properties$initialAn,
          _properties$initialOf = properties.initialOffsets,
          initialOffsets = _properties$initialOf === undefined ? defaultInitialOffsets : _properties$initialOf,
          _properties$initialDi = properties.initialDistance,
          initialDistance = _properties$initialDi === undefined ? defaultInitialDistance : _properties$initialDi,
          flipped = false,
          zoom = Zoom.fromInitialDistance(initialDistance),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          location = Location.fromInitialOffsets(initialOffsets),
          designCamera = Camera.fromProperties(DesignCamera, properties, zoom, tilt, location);


      return designCamera;
    }
  }]);

  return DesignCamera;
}(Camera);

module.exports = DesignCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiVGlsdCIsInJlcXVpcmUiLCJab29tIiwiQ2FtZXJhIiwiTG9jYXRpb24iLCJ2ZWN0b3JNYXRocyIsIm1hdHJpeFV0aWxpdGllcyIsInplcm8yIiwiemVybzMiLCJvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMiLCJyb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIiwicG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UiLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgiLCJkZWZhdWx0SW5pdGlhbEFuZ2xlcyIsImRlZmF1bHRJbml0aWFsT2Zmc2V0cyIsImRlZmF1bHRJbml0aWFsRGlzdGFuY2UiLCJEZXNpZ25DYW1lcmEiLCJrZXlFdmVudHMiLCJtb3VzZUV2ZW50cyIsInVwZGF0ZUhhbmRsZXIiLCJ6b29tIiwidGlsdCIsImxvY2F0aW9uIiwic2hpZnRLZXlEb3duIiwicmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJyZXNldFByZXZpb3VzQW5nbGVzIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlRG93biIsImNhbnZhcyIsImlzU2hpZnRLZXlEb3duIiwic2V0TW91c2VDb29yZGluYXRlcyIsInVwZGF0ZVhZT2Zmc2V0IiwidXBkYXRlQW5nbGVzIiwidXBkYXRlIiwiZGVsdGEiLCJ1cGRhdGVEaXN0YW5jZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJvZmZzZXRzIiwiZ2V0T2Zmc2V0cyIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXRzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsImdldFVwZGF0ZUhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbEFuZ2xlcyIsImluaXRpYWxPZmZzZXRzIiwiaW5pdGlhbERpc3RhbmNlIiwiZmxpcHBlZCIsImZyb21Jbml0aWFsRGlzdGFuY2UiLCJmcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQiLCJmcm9tSW5pdGlhbE9mZnNldHMiLCJkZXNpZ25DYW1lcmEiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSwwQkFBUixDQUFiO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSwwQkFBUixDQURiO0FBQUEsSUFFTUUsU0FBU0YsUUFBUSxXQUFSLENBRmY7QUFBQSxJQUdNRyxXQUFXSCxRQUFRLDhCQUFSLENBSGpCO0FBQUEsSUFJTUksY0FBY0osUUFBUSxvQkFBUixDQUpwQjtBQUFBLElBS01LLGtCQUFrQkwsUUFBUSx3QkFBUixDQUx4Qjs7SUFPUU0sSyxHQUFpQkYsVyxDQUFqQkUsSztJQUFPQyxLLEdBQVVILFcsQ0FBVkcsSztJQUNQQyx3QixHQUEwSkgsZSxDQUExSkcsd0I7SUFBMEJDLHlCLEdBQWdJSixlLENBQWhJSSx5QjtJQUEyQkMsMEIsR0FBcUdMLGUsQ0FBckdLLDBCO0lBQTRCQyxrQyxHQUF5RU4sZSxDQUF6RU0sa0M7SUFBb0NDLGdDLEdBQXFDUCxlLENBQXJDTyxnQzs7O0FBRTdILElBQU1DLHVCQUF1QlAsT0FBN0I7QUFBQSxJQUNNUSx3QkFBd0JQLE9BRDlCO0FBQUEsSUFFTVEseUJBQXlCLENBRi9COztJQUlNQyxZOzs7QUFDSix3QkFBWUMsU0FBWixFQUF1QkMsV0FBdkIsRUFBb0NDLGFBQXBDLEVBQW1EQyxJQUFuRCxFQUF5REMsSUFBekQsRUFBK0RDLFFBQS9ELEVBQXlFO0FBQUE7O0FBQUEsNEhBQ2pFTCxTQURpRSxFQUN0REMsV0FEc0QsRUFDekNDLGFBRHlDOztBQUd2RSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7O0FBRUEsVUFBS0MsSUFBTCxH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VUFJMUJsQyxJQUowQixHQUluQnRCLEtBQUsyRCwyQkFBTCxDQUFpQ0wsYUFBakMsRUFBZ0RHLE9BQWhELENBSm1CO0FBQUEsVUFLMUJsQyxRQUwwQixHQUtmbkIsU0FBU3dELGtCQUFULENBQTRCTCxjQUE1QixDQUxlO0FBQUEsVUFNMUJNLFlBTjBCLEdBTVgxRCxPQUFPMkQsY0FBUCxDQUFzQjdDLFlBQXRCLEVBQW9Db0MsVUFBcEMsRUFBZ0RoQyxJQUFoRCxFQUFzREMsSUFBdEQsRUFBNERDLFFBQTVELENBTlc7OztBQVFoQyxhQUFPc0MsWUFBUDtBQUNEOzs7O0VBeEZ3QjFELE07O0FBMkYzQjRELE9BQU9DLE9BQVAsR0FBaUIvQyxZQUFqQiIsImZpbGUiOiJkZXNpZ24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRpbHQgPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3pvb20nKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgTG9jYXRpb24gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL21hdHJpeCcpO1xuXG5jb25zdCB7IHplcm8yLCB6ZXJvMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cywgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQsIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IH0gPSBtYXRyaXhVdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsQW5nbGVzID0gemVybzIoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsT2Zmc2V0cyA9IHplcm8zKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbERpc3RhbmNlID0gNTtcblxuY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3Ioa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgem9vbSwgdGlsdCwgbG9jYXRpb24pIHtcbiAgICBzdXBlcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyKTtcblxuICAgIHRoaXMuem9vbSA9IHpvb207XG5cbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuXG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMubG9jYXRpb24ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzQW5nbGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLmxvY2F0aW9uLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c0FuZ2xlcygpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLmxvY2F0aW9uLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuXG4gICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKTtcblxuICAgIHRoaXMubG9jYXRpb24ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHRoaXMubG9jYXRpb24uc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMudGlsdC5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgICB0aGlzLmxvY2F0aW9uLnVwZGF0ZVhZT2Zmc2V0KHRoaXMudGlsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbHQudXBkYXRlQW5nbGVzKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEsIGNhbnZhcykge1xuICAgIHRoaXMuem9vbS51cGRhdGVEaXN0YW5jZShkZWx0YSk7XG5cbiAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICB9XG5cbiAgdXBkYXRlKGNhbnZhcykge1xuICAgIGNvbnN0IHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5sb2NhdGlvbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gdGhpcy5nZXRVcGRhdGVIYW5kbGVyKCk7XG5cbiAgICB1cGRhdGVIYW5kbGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxBbmdsZXMgPSBkZWZhdWx0SW5pdGlhbEFuZ2xlcywgaW5pdGlhbE9mZnNldHMgPSBkZWZhdWx0SW5pdGlhbE9mZnNldHMsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IGZhbHNlLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG4gICAgICAgICAgbG9jYXRpb24gPSBMb2NhdGlvbi5mcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHpvb20sIHRpbHQsIGxvY2F0aW9uKTtcblxuICAgIHJldHVybiBkZXNpZ25DYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZXNpZ25DYW1lcmE7XG4iXX0=