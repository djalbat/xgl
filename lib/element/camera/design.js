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
    key: 'userInputUpdate',
    value: function userInputUpdate(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, render) {
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

      this.update(width, height, render);
    }
  }, {
    key: 'update',
    value: function update(width, height, render) {
      var pan = this.getPan(),
          tilt = this.getTilt(),
          angles = tilt.getAngles(),
          offsets = pan.getOffsets(),
          distance = this.zoom.getDistance(),
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromDistance(distance),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwidmVjdG9yTWF0aHMiLCJtYXRyaXhVdGlsaXRpZXMiLCJ6ZXJvMiIsInplcm8zIiwib2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlIiwicHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IiwiZGVmYXVsdEluaXRpYWxBbmdsZXMiLCJkZWZhdWx0SW5pdGlhbE9mZnNldHMiLCJkZWZhdWx0SW5pdGlhbERpc3RhbmNlIiwiRGVzaWduQ2FtZXJhIiwicGFuIiwidGlsdCIsInpvb20iLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJ3aWR0aCIsImhlaWdodCIsInJlbmRlciIsImdldFBhbiIsImdldFRpbHQiLCJ1cGRhdGVPZmZzZXRzIiwidXBkYXRlRGlzdGFuY2UiLCJ1cGRhdGVBbmdsZXMiLCJ1cGRhdGUiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJvZmZzZXRzIiwiZ2V0T2Zmc2V0cyIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXRzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInByb3BlcnRpZXMiLCJpbml0aWFsQW5nbGVzIiwiaW5pdGlhbE9mZnNldHMiLCJpbml0aWFsRGlzdGFuY2UiLCJmbGlwcGVkIiwiZnJvbUluaXRpYWxPZmZzZXRzIiwiZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkIiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImRlc2lnbkNhbWVy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Q3NEQSxlQUR0RCx5Q0FDd0UvQixzQkFEeEU7QUFBQSxVQUUxQmdDLE9BRjBCLEdBRWhCLEtBRmdCO0FBQUEsVUFHMUI5QixHQUgwQixHQUdwQmxCLElBQUlpRCxrQkFBSixDQUF1QkgsY0FBdkIsQ0FIb0I7QUFBQSxVQUkxQjNCLElBSjBCLEdBSW5CakIsS0FBS2dELDJCQUFMLENBQWlDTCxhQUFqQyxFQUFnREcsT0FBaEQsQ0FKbUI7QUFBQSxVQUsxQjVCLElBTDBCLEdBS25CakIsS0FBS2dELG1CQUFMLENBQXlCSixlQUF6QixDQUxtQjtBQUFBLFVBTTFCSyxZQU4wQixHQU1YaEQsT0FBT2lELGNBQVAsQ0FBc0JwQyxZQUF0QixFQUFvQzJCLFVBQXBDLEVBQWdEMUIsR0FBaEQsRUFBcURDLElBQXJELEVBQTJEQyxJQUEzRCxDQU5XOzs7QUFRaEMsYUFBT2dDLFlBQVA7QUFDRDs7OztFQWhEd0JoRCxNOztBQW1EM0JrRCxPQUFPQyxPQUFQLEdBQWlCdEMsWUFBakIiLCJmaWxlIjoiZGVzaWduLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYW4gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3BhbicpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdCcpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvem9vbScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL21hdHJpeCcpO1xuXG5jb25zdCB7IHplcm8yLCB6ZXJvMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cywgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQsIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IH0gPSBtYXRyaXhVdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsQW5nbGVzID0gemVybzIoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsT2Zmc2V0cyA9IHplcm8zKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbERpc3RhbmNlID0gNTtcblxuY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IocGFuLCB0aWx0LCB6b29tKSB7XG4gICAgc3VwZXIocGFuLCB0aWx0KTtcblxuICAgIHRoaXMuem9vbSA9IHpvb207XG4gIH1cblxuICB1c2VySW5wdXRVcGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgcmVuZGVyKSB7XG4gICAgY29uc3QgcGFuID0gdGhpcy5nZXRQYW4oKSxcbiAgICAgICAgICB0aWx0ID0gdGhpcy5nZXRUaWx0KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICBwYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCk7XG4gICAgfSBlbHNlIGlmIChtb3VzZVdoZWVsRGVsdGEgIT09IDApIHtcbiAgICAgIHRoaXMuem9vbS51cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKHdpZHRoLCBoZWlnaHQsIHJlbmRlcik7XG4gIH1cblxuICB1cGRhdGUod2lkdGgsIGhlaWdodCwgcmVuZGVyKSB7XG4gICAgY29uc3QgcGFuID0gdGhpcy5nZXRQYW4oKSxcbiAgICAgICAgICB0aWx0ID0gdGhpcy5nZXRUaWx0KCksXG4gICAgICAgICAgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBvZmZzZXRzID0gcGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxBbmdsZXMgPSBkZWZhdWx0SW5pdGlhbEFuZ2xlcywgaW5pdGlhbE9mZnNldHMgPSBkZWZhdWx0SW5pdGlhbE9mZnNldHMsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IGZhbHNlLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgZGVzaWduQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKERlc2lnbkNhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0LCB6b29tKTtcblxuICAgIHJldHVybiBkZXNpZ25DYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZXNpZ25DYW1lcmE7XG4iXX0=