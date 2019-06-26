'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tilt = require('../../miscellaneous/tilt'),
    Camera = require('../camera'),
    Location = require('../../miscellaneous/location'),
    vectorMaths = require('../../maths/vector'),
    matrixUtilities = require('../../utilities/matrix');

var zero2 = vectorMaths.zero2,
    offsetMatrixFromOffsets = matrixUtilities.offsetMatrixFromOffsets,
    rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles,
    positionMatrixFromNothing = matrixUtilities.positionMatrixFromNothing,
    projectionMatrixFromWidthAndHeight = matrixUtilities.projectionMatrixFromWidthAndHeight,
    normalsMatrixFromRotationsMatrix = matrixUtilities.normalsMatrixFromRotationsMatrix;


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
          positionMatrix = positionMatrixFromNothing(),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix),
          updateHandler = this.getUpdateHandler();

      updateHandler(offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$initialPo = properties.initialPosition,
          initialPosition = _properties$initialPo === undefined ? defaultInitialPosition : _properties$initialPo,
          _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === undefined ? defaultInitialAngles : _properties$initialAn,
          flipped = true,
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          location = Location.fromInitialPosition(initialPosition),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, tilt, location);


      return gamingCamera;
    }
  }]);

  return GamingCamera;
}(Camera);

module.exports = GamingCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwibmFtZXMiOlsiVGlsdCIsInJlcXVpcmUiLCJDYW1lcmEiLCJMb2NhdGlvbiIsInZlY3Rvck1hdGhzIiwibWF0cml4VXRpbGl0aWVzIiwiemVybzIiLCJvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0cyIsInJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMiLCJwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nIiwicHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IiwiZGVmYXVsdEluaXRpYWxBbmdsZXMiLCJkZWZhdWx0SW5pdGlhbFBvc2l0aW9uIiwiR2FtaW5nQ2FtZXJhIiwia2V5RXZlbnRzIiwibW91c2VFdmVudHMiLCJ1cGRhdGVIYW5kbGVyIiwidGlsdCIsImxvY2F0aW9uIiwic2hpZnRLZXlEb3duIiwicmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJyZXNldFByZXZpb3VzQW5nbGVzIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlRG93biIsImNhbnZhcyIsImlzU2hpZnRLZXlEb3duIiwic2V0TW91c2VDb29yZGluYXRlcyIsInVwZGF0ZVhZT2Zmc2V0IiwidXBkYXRlQW5nbGVzIiwidXBkYXRlIiwiZGVsdGEiLCJ1cGRhdGVaT2Zmc2V0Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwib2Zmc2V0TWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsImdldFVwZGF0ZUhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbFBvc2l0aW9uIiwiaW5pdGlhbEFuZ2xlcyIsImZsaXBwZWQiLCJmcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQiLCJmcm9tSW5pdGlhbFBvc2l0aW9uIiwiZ2FtaW5nQ2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsMEJBQVIsQ0FBYjtBQUFBLElBQ01DLFNBQVNELFFBQVEsV0FBUixDQURmO0FBQUEsSUFFTUUsV0FBV0YsUUFBUSw4QkFBUixDQUZqQjtBQUFBLElBR01HLGNBQWNILFFBQVEsb0JBQVIsQ0FIcEI7QUFBQSxJQUlNSSxrQkFBa0JKLFFBQVEsd0JBQVIsQ0FKeEI7O0FBTU0sSUFBRUssS0FBRixHQUFZRixXQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyx1QkFERixHQUMwSkYsZUFEMUosQ0FDRUUsdUJBREY7QUFBQSxJQUMyQkMseUJBRDNCLEdBQzBKSCxlQUQxSixDQUMyQkcseUJBRDNCO0FBQUEsSUFDc0RDLHlCQUR0RCxHQUMwSkosZUFEMUosQ0FDc0RJLHlCQUR0RDtBQUFBLElBQ2lGQyxrQ0FEakYsR0FDMEpMLGVBRDFKLENBQ2lGSyxrQ0FEakY7QUFBQSxJQUNxSEMsZ0NBRHJILEdBQzBKTixlQUQxSixDQUNxSE0sZ0NBRHJIOzs7QUFHTixJQUFNQyx1QkFBdUJOLE9BQTdCO0FBQUEsSUFDTU8seUJBQXlCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRC9COztJQUdNQyxZOzs7QUFDSix3QkFBWUMsU0FBWixFQUF1QkMsV0FBdkIsRUFBb0NDLGFBQXBDLEVBQW1EQyxJQUFuRCxFQUF5REMsUUFBekQsRUFBbUU7QUFBQTs7QUFBQSw0SEFDM0RKLFNBRDJELEVBQ2hEQyxXQURnRCxFQUNuQ0MsYUFEbUM7O0FBR2pFLFVBQUtDLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUxpRTtBQU1sRTs7OztvQ0FFZUMsWSxFQUFjO0FBQzVCLFVBQUlBLFlBQUosRUFBa0I7QUFDaEIsYUFBS0QsUUFBTCxDQUFj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cXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdCcpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICBMb2NhdGlvbiA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvbG9jYXRpb24nKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvbWF0cml4Jyk7XG5cbmNvbnN0IHsgemVybzIgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0cywgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZywgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXggfSA9IG1hdHJpeFV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxQb3NpdGlvbiA9IFsgMCwgMCwgNSBdO1xuXG5jbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyLCB0aWx0LCBsb2NhdGlvbikge1xuICAgIHN1cGVyKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcblxuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLmxvY2F0aW9uLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuXG4gICAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c0FuZ2xlcygpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNBbmdsZXMoKTtcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLmxvY2F0aW9uLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpO1xuXG4gICAgdGhpcy5sb2NhdGlvbi5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuXG4gICAgdGhpcy5sb2NhdGlvbi5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy50aWx0LnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24udXBkYXRlWFlPZmZzZXQobW91c2VDb29yZGluYXRlcywgdGhpcy50aWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5sb2NhdGlvbi51cGRhdGVaT2Zmc2V0KGRlbHRhLCB0aGlzLnRpbHQpO1xuXG4gICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgfVxuXG4gIHVwZGF0ZShjYW52YXMpIHtcbiAgICBjb25zdCB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5sb2NhdGlvbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IG9mZnNldE1hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gdGhpcy5nZXRVcGRhdGVIYW5kbGVyKCk7XG5cbiAgICB1cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbFBvc2l0aW9uID0gZGVmYXVsdEluaXRpYWxQb3NpdGlvbiwgaW5pdGlhbEFuZ2xlcyA9IGRlZmF1bHRJbml0aWFsQW5nbGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSB0cnVlLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSxcbiAgICAgICAgICBsb2NhdGlvbiA9IExvY2F0aW9uLmZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSxcbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCB0aWx0LCBsb2NhdGlvbik7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtaW5nQ2FtZXJhO1xuIl19