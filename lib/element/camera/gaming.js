'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pan = require('../../miscellaneous/pan'),
    Tilt = require('../../miscellaneous/tilt'),
    Camera = require('../camera'),
    vectorMaths = require('../../maths/vector'),
    matrixUtilities = require('../../utilities/matrix');

var zero2 = vectorMaths.zero2,
    offsetsMatrixFromOffsets = matrixUtilities.offsetsMatrixFromOffsets,
    rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles,
    positionMatrixFromNothing = matrixUtilities.positionMatrixFromNothing,
    projectionMatrixFromWidthAndHeight = matrixUtilities.projectionMatrixFromWidthAndHeight,
    normalsMatrixFromRotationsMatrix = matrixUtilities.normalsMatrixFromRotationsMatrix;


var defaultInitialAngles = zero2(),
    defaultInitialPosition = [0, 0, 5];

var GamingCamera = function (_Camera) {
  _inherits(GamingCamera, _Camera);

  function GamingCamera() {
    _classCallCheck(this, GamingCamera);

    return _possibleConstructorReturn(this, (GamingCamera.__proto__ || Object.getPrototypeOf(GamingCamera)).apply(this, arguments));
  }

  _createClass(GamingCamera, [{
    key: 'userInputUpdate',
    value: function userInputUpdate(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, render) {
      var pan = this.getPan(),
          tilt = this.getTilt();

      if (false) {
        ///
      } else if (shiftKeyDown) {
        pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
      } else if (mouseWheelDelta !== 0) {
        pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
      } else {
        tilt.updateAngles(relativeMouseCoordinates);
      }

      this.update(width, height, render);
    }
  }, {
    key: 'update',
    value: function update(width, height, render) {
      var pan = this.getPan(),
          tilt = this.getTilt(),
          angles = tilt.getAngles(),
          offsets = pan.getOffsets(),
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromNothing(),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);

      render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === undefined ? defaultInitialAngles : _properties$initialAn,
          _properties$initialPo = properties.initialPosition,
          initialPosition = _properties$initialPo === undefined ? defaultInitialPosition : _properties$initialPo,
          flipped = true,
          pan = Pan.fromInitialPosition(initialPosition),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, pan, tilt);


      return gamingCamera;
    }
  }]);

  return GamingCamera;
}(Camera);

module.exports = GamingCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJDYW1lcmEiLCJ2ZWN0b3JNYXRocyIsIm1hdHJpeFV0aWxpdGllcyIsInplcm8yIiwib2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmciLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgiLCJkZWZhdWx0SW5pdGlhbEFuZ2xlcyIsImRlZmF1bHRJbml0aWFsUG9zaXRpb24iLCJHYW1pbmdDYW1lcmEiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJ3aWR0aCIsImhlaWdodCIsInJlbmRlciIsInBhbiIsImdldFBhbiIsInRpbHQiLCJnZXRUaWx0IiwidXBkYXRlT2Zmc2V0cyIsInVwZGF0ZUFuZ2xlcyIsInVwZGF0ZSIsImFuZ2xlcyIsImdldEFuZ2xlcyIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwib2Zmc2V0c01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbEFuZ2xlcyIsImluaXRpYWxQb3NpdGlvbiIsImZsaXBwZWQiLCJmcm9tSW5pdGlhbFBvc2l0aW9uIiwiZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkIiwiZ2FtaW5nQ2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEseUJBQVIsQ0FBWjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsMEJBQVIs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eEMsTTs7QUFtRDNCMEMsT0FBT0MsT0FBUCxHQUFpQmhDLFlBQWpCIiwiZmlsZSI6ImdhbWluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFuID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy9wYW4nKSxcbiAgICAgIFRpbHQgPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcblxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL21hdHJpeCcpO1xuXG5jb25zdCB7IHplcm8yIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLCByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLCBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nLCBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0LCBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCB9ID0gbWF0cml4VXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbEFuZ2xlcyA9IHplcm8yKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbFBvc2l0aW9uID0gWyAwLCAwLCA1IF07XG5cblxuY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcblxuXG5cblxuXG5cbiAgdXNlcklucHV0VXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIHJlbmRlcikge1xuICAgIGNvbnN0IHBhbiA9IHRoaXMuZ2V0UGFuKCksXG4gICAgICAgICAgdGlsdCA9IHRoaXMuZ2V0VGlsdCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgcGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbERlbHRhICE9PSAwKSB7XG4gICAgICBwYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbHQudXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUod2lkdGgsIGhlaWdodCwgcmVuZGVyKTtcbiAgfVxuXG4gIHVwZGF0ZSh3aWR0aCwgaGVpZ2h0LCByZW5kZXIpIHtcbiAgICBjb25zdCBwYW4gPSB0aGlzLmdldFBhbigpLFxuICAgICAgICAgIHRpbHQgPSB0aGlzLmdldFRpbHQoKSxcbiAgICAgICAgICBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSBwYW4uZ2V0T2Zmc2V0cygpLFxuXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbEFuZ2xlcyA9IGRlZmF1bHRJbml0aWFsQW5nbGVzLCBpbml0aWFsUG9zaXRpb24gPSBkZWZhdWx0SW5pdGlhbFBvc2l0aW9uIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSB0cnVlLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbiksXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpLFxuXG4gICAgICAgICAgZ2FtaW5nQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKEdhbWluZ0NhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0KTtcblxuICAgIHJldHVybiBnYW1pbmdDYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1pbmdDYW1lcmE7XG4iXX0=