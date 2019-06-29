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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJab29tIiwiQ2FtZXJhIiwidmVjdG9yTWF0aHMiLCJtYXRyaXhVdGlsaXRpZXMiLCJ6ZXJvMiIsInplcm8zIiwib2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlIiwicHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IiwiZGVmYXVsdEluaXRpYWxBbmdsZXMiLCJkZWZhdWx0SW5pdGlhbE9mZnNldHMiLCJkZWZhdWx0SW5pdGlhbERpc3RhbmNlIiwiRGVzaWduQ2FtZXJhIiwia2V5RXZlbnRzIiwibW91c2VFdmVudHMiLCJ1cGRhdGVIYW5kbGVyIiwicGFuIiwidGlsdCIsInpvb20iLCJkZWx0YSIsImNhbnZhcyIsInVwZGF0ZURpc3RhbmNlIiwidXBkYXRlIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImFuZ2xlcyIsImdldEFuZ2xlcyIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIm9mZnNldHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicHJvcGVydGllcyIsImluaXRpYWxBbmdsZXMiLCJpbml0aWFsT2Zmc2V0cyIsImluaXRpYWxEaXN0YW5jZSIsImZsaXBwZWQiLCJmcm9tSW5pdGlhbE9mZnNldHMiLCJmcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQiLCJmcm9tSW5pdGlhbERpc3RhbmNlIiwiZGVzaWduQ2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRz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R0FNWC9DLE9BQU9nRCxjQUFQLENBQXNCbkMsWUFBdEIsRUFBb0MwQixVQUFwQyxFQUFnRHRCLEdBQWhELEVBQXFEQyxJQUFyRCxFQUEyREMsSUFBM0QsQ0FOVzs7O0FBUWhDLHlCQUFPNEIsWUFBUDtBQUNEOzs7O0VBdkN3Qi9DLE07O0FBMEMzQmlELE9BQU9DLE9BQVAsR0FBaUJyQyxZQUFqQiIsImZpbGUiOiJkZXNpZ24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbiA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvcGFuJyksXG4gICAgICBUaWx0ID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0JyksXG4gICAgICBab29tID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy96b29tJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9jYW1lcmEnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvbWF0cml4Jyk7XG5cbmNvbnN0IHsgemVybzIsIHplcm8zIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLCByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLCBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSwgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXggfSA9IG1hdHJpeFV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxPZmZzZXRzID0gemVybzMoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgPSA1O1xuXG5jbGFzcyBEZXNpZ25DYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyLCBwYW4sIHRpbHQsIHpvb20pIHtcbiAgICBzdXBlcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyLCBwYW4sIHRpbHQpO1xuXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhLCBjYW52YXMpIHtcblxuXG4gICAgdGhpcy56b29tLnVwZGF0ZURpc3RhbmNlKGRlbHRhKTtcblxuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICB1cGRhdGUoY2FudmFzKSB7XG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSB0aGlzLnBhbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIHN1cGVyLnVwZGF0ZShvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMsIGluaXRpYWxPZmZzZXRzID0gZGVmYXVsdEluaXRpYWxPZmZzZXRzLCBpbml0aWFsRGlzdGFuY2UgPSBkZWZhdWx0SW5pdGlhbERpc3RhbmNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSBmYWxzZSxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVzaWduQ2FtZXJhO1xuIl19