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

      function DesignCamera(mouseEvents, updateHandler, pan, tilt, zoom) {
            _classCallCheck(this, DesignCamera);

            var _this = _possibleConstructorReturn(this, (DesignCamera.__proto__ || Object.getPrototypeOf(DesignCamera)).call(this, mouseEvents, updateHandler, pan, tilt));

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
                  var pan = this.getPan(),
                      tilt = this.getTilt(),
                      width = canvas.getWidth(),
                      height = canvas.getHeight(),
                      angles = tilt.getAngles(),
                      offsets = pan.getOffsets(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwidmVjdG9yTWF0aHMiLCJtYXRyaXhVdGlsaXRpZXMiLCJ6ZXJvMiIsInplcm8zIiwib2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlIiwicHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IiwiZGVmYXVsdEluaXRpYWxBbmdsZXMiLCJkZWZhdWx0SW5pdGlhbE9mZnNldHMiLCJkZWZhdWx0SW5pdGlhbERpc3RhbmNlIiwiRGVzaWduQ2FtZXJhIiwibW91c2VFdmVudHMiLCJ1cGRhdGVIYW5kbGVyIiwicGFuIiwidGlsdCIsInpvb20iLCJkZWx0YSIsImNhbnZhcyIsInVwZGF0ZURpc3RhbmNlIiwidXBkYXRlIiwiZ2V0UGFuIiwiZ2V0VGlsdCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJvZmZzZXRzIiwiZ2V0T2Zmc2V0cyIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXRzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInByb3BlcnRpZXMiLCJpbml0aWFsQW5nbGVzIiwiaW5pdGlhbE9mZnNldHMiLCJpbml0aWFsRGlzdGFuY2UiLCJmbGlwcGVkIiwiZnJvbUluaXRpYWxPZmZzZXRzIiwiZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkIiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImRlc2lnbkNhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwi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QXpCLENBTG1CO0FBQUEsc0JBTTFCSyxZQU4wQixHQU1YaEQsT0FBT2lELGNBQVAsQ0FBc0JwQyxZQUF0QixFQUFvQzJCLFVBQXBDLEVBQWdEeEIsR0FBaEQsRUFBcURDLElBQXJELEVBQTJEQyxJQUEzRCxDQU5XOzs7QUFRaEMseUJBQU84QixZQUFQO0FBQ0Q7Ozs7RUF6Q3dCaEQsTTs7QUE0QzNCa0QsT0FBT0MsT0FBUCxHQUFpQnRDLFlBQWpCIiwiZmlsZSI6ImRlc2lnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFuID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy9wYW4nKSxcbiAgICAgIFRpbHQgPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3pvb20nKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi8uLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIG1hdHJpeFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9tYXRyaXgnKTtcblxuY29uc3QgeyB6ZXJvMiwgemVybzMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLCBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0LCBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCB9ID0gbWF0cml4VXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbEFuZ2xlcyA9IHplcm8yKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbE9mZnNldHMgPSB6ZXJvMygpLFxuICAgICAgZGVmYXVsdEluaXRpYWxEaXN0YW5jZSA9IDU7XG5cbmNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyLCBwYW4sIHRpbHQsIHpvb20pIHtcbiAgICBzdXBlcihtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgcGFuLCB0aWx0KTtcblxuICAgIHRoaXMuem9vbSA9IHpvb207XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSwgY2FudmFzKSB7XG5cblxuICAgIHRoaXMuem9vbS51cGRhdGVEaXN0YW5jZShkZWx0YSk7XG5cbiAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICB9XG5cbiAgdXBkYXRlKGNhbnZhcykge1xuICAgIGNvbnN0IHBhbiA9IHRoaXMuZ2V0UGFuKCksXG4gICAgICAgICAgdGlsdCA9IHRoaXMuZ2V0VGlsdCgpLFxuICAgICAgICAgIHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIGFuZ2xlcyA9IHRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHBhbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIHN1cGVyLnVwZGF0ZShvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMsIGluaXRpYWxPZmZzZXRzID0gZGVmYXVsdEluaXRpYWxPZmZzZXRzLCBpbml0aWFsRGlzdGFuY2UgPSBkZWZhdWx0SW5pdGlhbERpc3RhbmNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSBmYWxzZSxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVzaWduQ2FtZXJhO1xuIl19