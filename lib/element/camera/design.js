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
    matrixUtilities = require('../../utilities/matrix');

var zero2 = vectorMaths.zero2,
    zero3 = vectorMaths.zero3,
    offsetMatrixFromOffsets = matrixUtilities.offsetMatrixFromOffsets,
    rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles,
    positionMatrixFromDistance = matrixUtilities.positionMatrixFromDistance,
    projectionMatrixFromWidthAndHeight = matrixUtilities.projectionMatrixFromWidthAndHeight,
    normalsMatrixFromRotationsMatrix = matrixUtilities.normalsMatrixFromRotationsMatrix;


var defaultInitialAngles = zero2(),
    defaultInitialOffset = zero3(),
    defaultInitialDistance = 5;

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
        this.pan.resetPreviousOffsets();

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
        this.pan.resetPreviousOffsets();

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
          positionMatrix = positionMatrixFromDistance(distance),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix),
          updateHandler = this.getUpdateHandler();

      updateHandler(offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === undefined ? defaultInitialAngles : _properties$initialAn,
          _properties$initialOf = properties.initialOffset,
          initialOffset = _properties$initialOf === undefined ? defaultInitialOffset : _properties$initialOf,
          _properties$initialDi = properties.initialDistance,
          initialDistance = _properties$initialDi === undefined ? defaultInitialDistance : _properties$initialDi,
          initialOffsets = initialOffset,
          flipped = false,
          pan = Pan.fromInitialOffsets(initialOffsets),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          zoom = Zoom.fromInitialDistance(initialDistance),
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom);


      return designCamera;
    }
  }]);

  return DesignCamera;
}(Camera);

module.exports = DesignCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwidmVjdG9yTWF0aHMiLCJtYXRyaXhVdGlsaXRpZXMiLCJ6ZXJvMiIsInplcm8zIiwib2Zmc2V0TWF0cml4RnJvbU9mZnNldHMiLCJyb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIiwicG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UiLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgiLCJkZWZhdWx0SW5pdGlhbEFuZ2xlcyIsImRlZmF1bHRJbml0aWFsT2Zmc2V0IiwiZGVmYXVsdEluaXRpYWxEaXN0YW5jZSIsIkRlc2lnbkNhbWVyYSIsImtleUV2ZW50cyIsIm1vdXNlRXZlbnRzIiwidXBkYXRlSGFuZGxlciIsInBhbiIsInRpbHQiLCJ6b29tIiwic2hpZnRLZXlEb3duIiwicmVzZXRQcmV2aW91c09mZnNldHMiLCJyZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInJlc2V0UHJldmlvdXNBbmdsZXMiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VEb3duIiwiY2FudmFzIiwiaXNTaGlmdEtleURvd24iLCJzZXRNb3VzZUNvb3JkaW5hdGVzIiwidXBkYXRlT2Zmc2V0IiwidXBkYXRlQW5nbGVzIiwidXBkYXRlIiwiZGVsdGEiLCJ1cGRhdGVEaXN0YW5jZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJvZmZzZXRzIiwiZ2V0T2Zmc2V0cyIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXRNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxzTWF0cml4IiwiZ2V0VXBkYXRlSGFuZGxlciIsInByb3BlcnRpZXMiLCJpbml0aWFsQW5nbGVzIiwiaW5pdGlhbE9mZnNldCIsImluaXRpYWxEaXN0YW5jZSIsImluaXRpYWxPZmZzZXRzIiwiZmxpcHBlZCIsImZyb21Jbml0aWFsT2Zmc2V0cyIsImZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZCIsImZyb21Jbml0aWFsRGlzdGFuY2UiLCJkZXNpZ25DYW1lcmEiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSx5QkFBUixDQUFaO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSwwQkFBUixDQURiO0FBQUEsSUFFTUUsT0FBT0YsUUFBUSwwQkFBUixDQUZiO0FBQUEsSUFHTUcsU0FBU0gsUUFBUSxXQUFSLENBSGY7QUFBQSxJQUlNSSxjQUFjSixRQUFRLG9CQUFSLENBSnBCO0FBQUEsSUFLTUssa0JBQWtCTCxRQUFRLHdCQUFSLENBTHhCOztJQU9RTSxLLEdBQWlCRixXLENBQWpCRSxLO0lBQU9DLEssR0FBVUgsVyxDQUFWRyxLO0lBQ1BDLHVCLEdBQXlKSCxlLENBQXpKRyx1QjtJQUF5QkMseUIsR0FBZ0lKLGUsQ0FBaElJLHlCO0lBQTJCQywwQixHQUFxR0wsZSxDQUFyR0ssMEI7SUFBNEJDLGtDLEdBQXlFTixlLENBQXpFTSxrQztJQUFvQ0MsZ0MsR0FBcUNQLGUsQ0FBckNPLGdDOzs7QUFFNUgsSUFBTUMsdUJBQXVCUCxPQUE3QjtBQUFBLElBQ01RLHVCQUF1QlAsT0FEN0I7QUFBQSxJQUVNUSx5QkFBeUIsQ0FGL0I7O0lBSU1DLFk7OztBQUNKLHdCQUFZQyxTQUFaLEVBQXVCQyxXQUF2QixFQUFvQ0MsYUFBcEMsRUFBbURDLEdBQW5ELEVBQXdEQyxJQUF4RCxFQUE4REMsSUFBOUQsRUFBb0U7QUFBQTs7QUFBQSw0SEFDNURMLFNBRDRELEVBQ2pEQyxXQURpRCxFQUNwQ0MsYUFEb0M7O0FBR2xFLFVBQUtDLEdBQUwsR0FBV0Es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LEdBR2hCLEtBSGdCO0FBQUEsVUFJMUJ0QyxHQUowQixHQUlwQnJCLElBQUk0RCxrQkFBSixDQUF1QkYsY0FBdkIsQ0FKb0I7QUFBQSxVQUsxQnBDLElBTDBCLEdBS25CcEIsS0FBSzJELDJCQUFMLENBQWlDTixhQUFqQyxFQUFnREksT0FBaEQsQ0FMbUI7QUFBQSxVQU0xQnBDLElBTjBCLEdBTW5CcEIsS0FBSzJELG1CQUFMLENBQXlCTCxlQUF6QixDQU5tQjtBQUFBLFVBTzFCTSxZQVAwQixHQU9YM0QsT0FBTzRELGNBQVAsQ0FBc0IvQyxZQUF0QixFQUFvQ3FDLFVBQXBDLEVBQWdEakMsR0FBaEQsRUFBcURDLElBQXJELEVBQTJEQyxJQUEzRCxDQVBXOzs7QUFTaEMsYUFBT3dDLFlBQVA7QUFDRDs7OztFQTNGd0IzRCxNOztBQThGM0I2RCxPQUFPQyxPQUFQLEdBQWlCakQsWUFBakIiLCJmaWxlIjoiZGVzaWduLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYW4gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3BhbicpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdCcpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvem9vbScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL21hdHJpeCcpO1xuXG5jb25zdCB7IHplcm8yLCB6ZXJvMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IG9mZnNldE1hdHJpeEZyb21PZmZzZXRzLCByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLCBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSwgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXggfSA9IG1hdHJpeFV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxPZmZzZXQgPSB6ZXJvMygpLFxuICAgICAgZGVmYXVsdEluaXRpYWxEaXN0YW5jZSA9IDU7XG5cbmNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIsIHBhbiwgdGlsdCwgem9vbSkge1xuICAgIHN1cGVyKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG5cbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnBhbi5yZXNldFByZXZpb3VzT2Zmc2V0cygpO1xuXG4gICAgICB0aGlzLnBhbi5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c0FuZ2xlcygpO1xuXG4gICAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucGFuLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c0FuZ2xlcygpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnBhbi5yZXNldFByZXZpb3VzT2Zmc2V0cygpO1xuXG4gICAgICB0aGlzLnBhbi5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICAgIH1cblxuICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICB0aGlzLnBhbi5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy50aWx0LnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldCh0aGlzLnRpbHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UoZGVsdGEpO1xuXG4gICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgfVxuXG4gIHVwZGF0ZShjYW52YXMpIHtcbiAgICBjb25zdCB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IG9mZnNldE1hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gdGhpcy5nZXRVcGRhdGVIYW5kbGVyKCk7XG5cbiAgICB1cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbEFuZ2xlcyA9IGRlZmF1bHRJbml0aWFsQW5nbGVzLCBpbml0aWFsT2Zmc2V0ID0gZGVmYXVsdEluaXRpYWxPZmZzZXQsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgaW5pdGlhbE9mZnNldHMgPSBpbml0aWFsT2Zmc2V0LCAvLy9cbiAgICAgICAgICBmbGlwcGVkID0gZmFsc2UsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0cyhpbml0aWFsT2Zmc2V0cyksXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20pO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlc2lnbkNhbWVyYTtcbiJdfQ==