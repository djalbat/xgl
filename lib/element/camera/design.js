"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Pan = require("../../miscellaneous/pan"),
    Tilt = require("../../miscellaneous/tilt"),
    Zoom = require("../../miscellaneous/zoom"),
    Camera = require("../camera"),
    vectorMaths = require("../../maths/vector"),
    matrixUtilities = require("../../utilities/matrix");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbi5qcyJdLCJuYW1lcyI6WyJQYW4iLCJyZXF1aXJlIiwiVGlsdCIsIlpvb20iLCJDYW1lcmEiLCJ2ZWN0b3JNYXRocyIsIm1hdHJpeFV0aWxpdGllcyIsInplcm8yIiwiemVybzMiLCJvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMiLCJyb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIiwicG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UiLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgiLCJkZWZhdWx0SW5pdGlhbEFuZ2xlcyIsImRlZmF1bHRJbml0aWFsT2Zmc2V0cyIsImRlZmF1bHRJbml0aWFsRGlzdGFuY2UiLCJEZXNpZ25DYW1lcmEiLCJwYW4iLCJ0aWx0Iiwiem9vbSIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsIndpZHRoIiwiaGVpZ2h0IiwiY2FsbGJhY2siLCJnZXRQYW4iLCJnZXRUaWx0IiwidXBkYXRlT2Zmc2V0cyIsInVwZGF0ZURpc3RhbmNlIiwidXBkYXRlQW5nbGVzIiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwib2Zmc2V0cyIsImdldE9mZnNldHMiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwib2Zmc2V0c01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbEFuZ2xlcyIsImluaXRpYWxPZmZzZXRzIiwiaW5pdGlhbERpc3RhbmNlIiwiZmxpcHBlZCIsImZyb21Jbml0aWFsT2Zmc2V0cyIsImZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZCIsImZyb21Jbml0aWFsRGlzdGFuY2UiLCJkZXNpZ25DYW1lcmEiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9y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REcsZUFEdEQ7QUFBQSxVQUNzREEsZUFEdEQsc0NBQ3dFOUIsc0JBRHhFO0FBQUEsVUFFMUIrQixPQUYwQixHQUVoQixLQUZnQjtBQUFBLFVBRzFCN0IsR0FIMEIsR0FHcEJsQixHQUFHLENBQUNnRCxrQkFBSixDQUF1QkgsY0FBdkIsQ0FIb0I7QUFBQSxVQUkxQjFCLElBSjBCLEdBSW5CakIsSUFBSSxDQUFDK0MsMkJBQUwsQ0FBaUNMLGFBQWpDLEVBQWdERyxPQUFoRCxDQUptQjtBQUFBLFVBSzFCM0IsSUFMMEIsR0FLbkJqQixJQUFJLENBQUMrQyxtQkFBTCxDQUF5QkosZUFBekIsQ0FMbUI7QUFBQSxVQU0xQkssWUFOMEIsR0FNWC9DLE1BQU0sQ0FBQ2dELGNBQVAsQ0FBc0JuQyxZQUF0QixFQUFvQzBCLFVBQXBDLEVBQWdEekIsR0FBaEQsRUFBcURDLElBQXJELEVBQTJEQyxJQUEzRCxDQU5XO0FBUWhDLGFBQU8rQixZQUFQO0FBQ0Q7Ozs7RUExQ3dCL0MsTTs7QUE2QzNCaUQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckMsWUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUGFuID0gcmVxdWlyZShcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCIpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoXCIuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHRcIiksXG4gICAgICBab29tID0gcmVxdWlyZShcIi4uLy4uL21pc2NlbGxhbmVvdXMvem9vbVwiKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoXCIuLi9jYW1lcmFcIiksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoXCIuLi8uLi9tYXRocy92ZWN0b3JcIiksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiKTtcblxuY29uc3QgeyB6ZXJvMiwgemVybzMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLCBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0LCBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCB9ID0gbWF0cml4VXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbEFuZ2xlcyA9IHplcm8yKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbE9mZnNldHMgPSB6ZXJvMygpLFxuICAgICAgZGVmYXVsdEluaXRpYWxEaXN0YW5jZSA9IDU7XG5cbmNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHBhbiwgdGlsdCwgem9vbSkge1xuICAgIHN1cGVyKHBhbiwgdGlsdCk7XG5cbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICB9XG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFuID0gdGhpcy5nZXRQYW4oKSxcbiAgICAgICAgICB0aWx0ID0gdGhpcy5nZXRUaWx0KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICBwYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCk7XG4gICAgfSBlbHNlIGlmIChtb3VzZVdoZWVsRGVsdGEgIT09IDApIHtcbiAgICAgIHRoaXMuem9vbS51cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuZ2xlcyA9IHRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHBhbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIGNhbGxiYWNrKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxBbmdsZXMgPSBkZWZhdWx0SW5pdGlhbEFuZ2xlcywgaW5pdGlhbE9mZnNldHMgPSBkZWZhdWx0SW5pdGlhbE9mZnNldHMsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IGZhbHNlLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgZGVzaWduQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKERlc2lnbkNhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0LCB6b29tKTtcblxuICAgIHJldHVybiBkZXNpZ25DYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZXNpZ25DYW1lcmE7XG4iXX0=