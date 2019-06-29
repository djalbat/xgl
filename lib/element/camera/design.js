'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

      function DesignCamera(keyEvents, mouseEvents, updateHandler, pan, tilt, zoom) {
            _classCallCheck(this, DesignCamera);

            var _this = _possibleConstructorReturn(this, (DesignCamera.__proto__ || Object.getPrototypeOf(DesignCamera)).call(this, keyEvents, mouseEvents, updateHandler, pan, tilt));

            _this.zoom = zoom;
            return _this;
      }

      _createClass(DesignCamera, [{
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
                      offsetsMatrix = offsetsMatrixFromOffsets(offsets),
                      positionMatrix = positionMatrixFromDistance(distance),
                      rotationsMatrix = rotationsMatrixFromAngles(angles),
                      projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
                      normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);

                  _get(DesignCamera.prototype.__proto__ || Object.getPrototypeOf(DesignCamera.prototype), 'update', this).call(this, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwidmVjdG9yTWF0aHMiLCJtYXRyaXhVdGlsaXRpZXMiLCJ6ZXJvMiIsInplcm8zIiwib2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlIiwicHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IiwiZGVmYXVsdEluaXRpYWxBbmdsZXMiLCJkZWZhdWx0SW5pdGlhbE9mZnNldHMiLCJkZWZhdWx0SW5pdGlhbERpc3RhbmNlIiwiRGVzaWduQ2FtZXJhIiwia2V5RXZlbnRzIiwibW91c2VFdmVudHMiLCJ1cGRhdGVIYW5kbGVyIiwicGFuIiwidGlsdCIsInpvb20iLCJkZWx0YSIsImNhbnZhcyIsInVwZGF0ZURpc3RhbmNlIiwidXBkYXRlIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImFuZ2xlcyIsImdldEFuZ2xlcyIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIm9mZnNldHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicHJvcGVydGllcyIsImluaXRpYWxBbmdsZXMiLCJpbml0aWFsT2Zmc2V0cyIsImluaXRpYWxEaXN0YW5jZSIsImZsaXBwZWQiLCJmcm9tSW5pdGlhbE9mZnNldHMiLCJmcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQiLCJmcm9tSW5pdGlhbERpc3RhbmNlIiwiZGVzaWduQ2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRz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QU1YL0MsT0FBT2dELGNBQVAsQ0FBc0JuQyxZQUF0QixFQUFvQzBCLFVBQXBDLEVBQWdEdEIsR0FBaEQsRUFBcURDLElBQXJELEVBQTJEQyxJQUEzRCxDQU5XOzs7QUFRaEMseUJBQU80QixZQUFQO0FBQ0Q7Ozs7RUFyQ3dCL0MsTTs7QUF3QzNCaUQsT0FBT0MsT0FBUCxHQUFpQnJDLFlBQWpCIiwiZmlsZSI6ImRlc2lnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFuID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy9wYW4nKSxcbiAgICAgIFRpbHQgPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3pvb20nKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi8uLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIG1hdHJpeFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9tYXRyaXgnKTtcblxuY29uc3QgeyB6ZXJvMiwgemVybzMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLCBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0LCBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCB9ID0gbWF0cml4VXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbEFuZ2xlcyA9IHplcm8yKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbE9mZnNldHMgPSB6ZXJvMygpLFxuICAgICAgZGVmYXVsdEluaXRpYWxEaXN0YW5jZSA9IDU7XG5cbmNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIsIHBhbiwgdGlsdCwgem9vbSkge1xuICAgIHN1cGVyKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIsIHBhbiwgdGlsdCk7XG5cbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEsIGNhbnZhcykge1xuICAgIHRoaXMuem9vbS51cGRhdGVEaXN0YW5jZShkZWx0YSk7XG5cbiAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICB9XG5cbiAgdXBkYXRlKGNhbnZhcykge1xuICAgIGNvbnN0IHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICBzdXBlci51cGRhdGUob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbEFuZ2xlcyA9IGRlZmF1bHRJbml0aWFsQW5nbGVzLCBpbml0aWFsT2Zmc2V0cyA9IGRlZmF1bHRJbml0aWFsT2Zmc2V0cywgaW5pdGlhbERpc3RhbmNlID0gZGVmYXVsdEluaXRpYWxEaXN0YW5jZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBmbGlwcGVkID0gZmFsc2UsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0cyhpbml0aWFsT2Zmc2V0cyksXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20pO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlc2lnbkNhbWVyYTtcbiJdfQ==