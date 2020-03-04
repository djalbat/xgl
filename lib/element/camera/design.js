'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var DesignCamera = /*#__PURE__*/function (_Camera) {
  _inherits(DesignCamera, _Camera);

  function DesignCamera(pan, tilt, zoom) {
    var _this;

    _classCallCheck(this, DesignCamera);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DesignCamera).call(this, pan, tilt));
    _this.zoom = zoom;
    return _this;
  }

  _createClass(DesignCamera, [{
    key: "update",
    value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
      var pan = this.getPan(),
          tilt = this.getTilt();

      if (false) {///
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
    key: "fromProperties",
    value: function fromProperties(properties) {
      var _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === void 0 ? defaultInitialAngles : _properties$initialAn,
          _properties$initialOf = properties.initialOffsets,
          initialOffsets = _properties$initialOf === void 0 ? defaultInitialOffsets : _properties$initialOf,
          _properties$initialDi = properties.initialDistance,
          initialDistance = _properties$initialDi === void 0 ? defaultInitialDistance : _properties$initialDi,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbi5qcyJdLCJuYW1lcyI6WyJQYW4iLCJyZXF1aXJlIiwiVGlsdCIsIlpvb20iLCJDYW1lcmEiLCJ2ZWN0b3JNYXRocyIsIm1hdHJpeFV0aWxpdGllcyIsInplcm8yIiwiemVybzMiLCJvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMiLCJyb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIiwicG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UiLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgiLCJkZWZhdWx0SW5pdGlhbEFuZ2xlcyIsImRlZmF1bHRJbml0aWFsT2Zmc2V0cyIsImRlZmF1bHRJbml0aWFsRGlzdGFuY2UiLCJEZXNpZ25DYW1lcmEiLCJwYW4iLCJ0aWx0Iiwiem9vbSIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsIndpZHRoIiwiaGVpZ2h0IiwiY2FsbGJhY2siLCJnZXRQYW4iLCJnZXRUaWx0IiwidXBkYXRlT2Zmc2V0cyIsInVwZGF0ZURpc3RhbmNlIiwidXBkYXRlQW5nbGVzIiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwib2Zmc2V0cyIsImdldE9mZnNldHMiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwib2Zmc2V0c01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbEFuZ2xlcyIsImluaXRpYWxPZmZzZXRzIiwiaW5pdGlhbERpc3RhbmNlIiwiZmxpcHBlZCIsImZyb21Jbml0aWFsT2Zmc2V0cyIsImZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZCIsImZyb21Jbml0aWFsRGlzdGFuY2UiLCJkZXNpZ25DYW1lcmEiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9y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REcsZUFEdEQ7QUFBQSxVQUNzREEsZUFEdEQsc0NBQ3dFOUIsc0JBRHhFO0FBQUEsVUFFMUIrQixPQUYwQixHQUVoQixLQUZnQjtBQUFBLFVBRzFCN0IsR0FIMEIsR0FHcEJsQixHQUFHLENBQUNnRCxrQkFBSixDQUF1QkgsY0FBdkIsQ0FIb0I7QUFBQSxVQUkxQjFCLElBSjBCLEdBSW5CakIsSUFBSSxDQUFDK0MsMkJBQUwsQ0FBaUNMLGFBQWpDLEVBQWdERyxPQUFoRCxDQUptQjtBQUFBLFVBSzFCM0IsSUFMMEIsR0FLbkJqQixJQUFJLENBQUMrQyxtQkFBTCxDQUF5QkosZUFBekIsQ0FMbUI7QUFBQSxVQU0xQkssWUFOMEIsR0FNWC9DLE1BQU0sQ0FBQ2dELGNBQVAsQ0FBc0JuQyxZQUF0QixFQUFvQzBCLFVBQXBDLEVBQWdEekIsR0FBaEQsRUFBcURDLElBQXJELEVBQTJEQyxJQUEzRCxDQU5XO0FBUWhDLGFBQU8rQixZQUFQO0FBQ0Q7Ozs7RUExQ3dCL0MsTTs7QUE2QzNCaUQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckMsWUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbiA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvcGFuJyksXG4gICAgICBUaWx0ID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0JyksXG4gICAgICBab29tID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy96b29tJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9jYW1lcmEnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvbWF0cml4Jyk7XG5cbmNvbnN0IHsgemVybzIsIHplcm8zIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLCByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLCBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSwgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXggfSA9IG1hdHJpeFV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxPZmZzZXRzID0gemVybzMoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgPSA1O1xuXG5jbGFzcyBEZXNpZ25DYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvcihwYW4sIHRpbHQsIHpvb20pIHtcbiAgICBzdXBlcihwYW4sIHRpbHQpO1xuXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhbiA9IHRoaXMuZ2V0UGFuKCksXG4gICAgICAgICAgdGlsdCA9IHRoaXMuZ2V0VGlsdCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgcGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbERlbHRhICE9PSAwKSB7XG4gICAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSBwYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICBjYWxsYmFjayhvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMsIGluaXRpYWxPZmZzZXRzID0gZGVmYXVsdEluaXRpYWxPZmZzZXRzLCBpbml0aWFsRGlzdGFuY2UgPSBkZWZhdWx0SW5pdGlhbERpc3RhbmNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSBmYWxzZSxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVzaWduQ2FtZXJhO1xuIl19