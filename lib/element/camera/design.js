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

  function DesignCamera(pan, tilt, zoom) {
    _classCallCheck(this, DesignCamera);

    var _this = _possibleConstructorReturn(this, (DesignCamera.__proto__ || Object.getPrototypeOf(DesignCamera)).call(this, pan, tilt));

    _this.zoom = zoom;
    return _this;
  }

  _createClass(DesignCamera, [{
    key: 'update',
    value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
      var pan = this.getPan(),
          tilt = this.getTilt();

      if (false) {
        ///
      } else if (shiftKeyDown) {
        pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
      } else if (mouseWheelDelta !== 0) {
        this.zoom.updateDistance(mouseWheelDelta);
      } else {
        tilt.updateAngles(relativeMouseCoordinates);
      }

      var angles = tilt.getAngles(),
          offsets = pan.getOffsets(),
          distance = this.zoom.getDistance(),
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromDistance(distance),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);

      callback(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwidmVjdG9yTWF0aHMiLCJtYXRyaXhVdGlsaXRpZXMiLCJ6ZXJvMiIsInplcm8zIiwib2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlIiwicHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IiwiZGVmYXVsdEluaXRpYWxBbmdsZXMiLCJkZWZhdWx0SW5pdGlhbE9mZnNldHMiLCJkZWZhdWx0SW5pdGlhbERpc3RhbmNlIiwiRGVzaWduQ2FtZXJhIiwicGFuIiwidGlsdCIsInpvb20iLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbGxiYWNrIiwiZ2V0UGFuIiwiZ2V0VGlsdCIsInVwZGF0ZU9mZnNldHMiLCJ1cGRhdGVEaXN0YW5jZSIsInVwZGF0ZUFuZ2xlcyIsImFuZ2xlcyIsImdldEFuZ2xlcyIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIm9mZnNldHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicHJvcGVydGllcyIsImluaXRpYWxBbmdsZXMiLCJpbml0aWFsT2Zmc2V0cyIsImluaXRpYWxEaXN0YW5jZSIsImZsaXBwZWQiLCJmcm9tSW5pdGlhbE9mZnNldHMiLCJmcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQiLCJmcm9tSW5pdGlhbERpc3RhbmNlIiwiZGVzaWduQ2FtZXJhIiwiZnJv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TCxhQUFqQyxFQUFnREcsT0FBaEQsQ0FKbUI7QUFBQSxVQUsxQjNCLElBTDBCLEdBS25CakIsS0FBSytDLG1CQUFMLENBQXlCSixlQUF6QixDQUxtQjtBQUFBLFVBTTFCSyxZQU4wQixHQU1YL0MsT0FBT2dELGNBQVAsQ0FBc0JuQyxZQUF0QixFQUFvQzBCLFVBQXBDLEVBQWdEekIsR0FBaEQsRUFBcURDLElBQXJELEVBQTJEQyxJQUEzRCxDQU5XOzs7QUFRaEMsYUFBTytCLFlBQVA7QUFDRDs7OztFQTFDd0IvQyxNOztBQTZDM0JpRCxPQUFPQyxPQUFQLEdBQWlCckMsWUFBakIiLCJmaWxlIjoiZGVzaWduLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYW4gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3BhbicpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdCcpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvem9vbScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL21hdHJpeCcpO1xuXG5jb25zdCB7IHplcm8yLCB6ZXJvMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cywgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQsIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IH0gPSBtYXRyaXhVdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsQW5nbGVzID0gemVybzIoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsT2Zmc2V0cyA9IHplcm8zKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbERpc3RhbmNlID0gNTtcblxuY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IocGFuLCB0aWx0LCB6b29tKSB7XG4gICAgc3VwZXIocGFuLCB0aWx0KTtcblxuICAgIHRoaXMuem9vbSA9IHpvb207XG4gIH1cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBwYW4gPSB0aGlzLmdldFBhbigpLFxuICAgICAgICAgIHRpbHQgPSB0aGlzLmdldFRpbHQoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KTtcbiAgICB9IGVsc2UgaWYgKG1vdXNlV2hlZWxEZWx0YSAhPT0gMCkge1xuICAgICAgdGhpcy56b29tLnVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbHQudXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBvZmZzZXRzID0gcGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgY2FsbGJhY2sob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbEFuZ2xlcyA9IGRlZmF1bHRJbml0aWFsQW5nbGVzLCBpbml0aWFsT2Zmc2V0cyA9IGRlZmF1bHRJbml0aWFsT2Zmc2V0cywgaW5pdGlhbERpc3RhbmNlID0gZGVmYXVsdEluaXRpYWxEaXN0YW5jZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBmbGlwcGVkID0gZmFsc2UsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0cyhpbml0aWFsT2Zmc2V0cyksXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20pO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlc2lnbkNhbWVyYTtcbiJdfQ==