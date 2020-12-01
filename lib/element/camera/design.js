"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pan = _interopRequireDefault(require("../../miscellaneous/pan"));

var _tilt = _interopRequireDefault(require("../../miscellaneous/tilt"));

var _zoom = _interopRequireDefault(require("../../miscellaneous/zoom"));

var _camera = _interopRequireDefault(require("../camera"));

var _vector = require("../../maths/vector");

var _matrix = require("../../utilities/matrix");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var defaultInitialAngles = (0, _vector.zero2)(),
    defaultInitialOffsets = (0, _vector.zero3)(),
    defaultInitialDistance = 5;

var DesignCamera = /*#__PURE__*/function (_Camera) {
  _inherits(DesignCamera, _Camera);

  var _super = _createSuper(DesignCamera);

  function DesignCamera(pan, tilt, zoom) {
    var _this;

    _classCallCheck(this, DesignCamera);

    _this = _super.call(this, pan, tilt);
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
          offsetsMatrix = (0, _matrix.offsetsMatrixFromOffsets)(offsets),
          positionMatrix = (0, _matrix.positionMatrixFromDistance)(distance),
          rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles),
          projectionMatrix = (0, _matrix.projectionMatrixFromWidthAndHeight)(width, height),
          normalsMatrix = (0, _matrix.normalsMatrixFromRotationsMatrix)(rotationsMatrix);
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
          pan = _pan["default"].fromInitialOffsets(initialOffsets),
          tilt = _tilt["default"].fromInitialAnglesAndFlipped(initialAngles, flipped),
          zoom = _zoom["default"].fromInitialDistance(initialDistance),
          designCamera = _camera["default"].fromProperties(DesignCamera, properties, pan, tilt, zoom);

      return designCamera;
    }
  }]);

  return DesignCamera;
}(_camera["default"]);

exports["default"] = DesignCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbi5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0SW5pdGlhbEFuZ2xlcyIsImRlZmF1bHRJbml0aWFsT2Zmc2V0cyIsImRlZmF1bHRJbml0aWFsRGlzdGFuY2UiLCJEZXNpZ25DYW1lcmEiLCJwYW4iLCJ0aWx0Iiwiem9vbSIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsIndpZHRoIiwiaGVpZ2h0IiwiY2FsbGJhY2siLCJnZXRQYW4iLCJnZXRUaWx0IiwidXBkYXRlT2Zmc2V0cyIsInVwZGF0ZURpc3RhbmNlIiwidXBkYXRlQW5nbGVzIiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwib2Zmc2V0cyIsImdldE9mZnNldHMiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwib2Zmc2V0c01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbEFuZ2xlcyIsImluaXRpYWxPZmZzZXRzIiwiaW5pdGlhbERpc3RhbmNlIiwiZmxpcHBlZCIsIlBhbiIsImZyb21Jbml0aWFsT2Zmc2V0cyIsIlRpbHQiLCJmcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQiLCJab29tIiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImRlc2lnbkNhbWVyYSIsIkNhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTUEsb0JBQW9CLEdBQUcsb0JBQTdCO0FBQUEsSUFDTUMscUJBQXFCLEdBQUcsb0JBRDlCO0FBQUEsSUFFTUMsc0JBQXNCLEdBQUcsQ0FGL0I7O0lBSXFCQyxZOzs7OztBQUNuQix3QkFBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBdUJDLElBQXZCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQzNCLDhCQUFNRixHQUFOLEVBQVdDLElBQVg7QUFFQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFIMkI7QUFJNUI7Ozs7MkJBRU1DLHdCLEVBQTBCQyxlLEVBQWlCQyxZLEVBQWNDLEssRUFBT0MsTSxFQUFRQyxRLEVBQVU7QUFDdkYsVUFBTVIsR0FBRyxHQUFHLEtBQUtTLE1BQUwsRUFBWjtBQUFBLFVBQ01SLElBQUksR0FBRyxLQUFLUyxPQUFMLEVBRGI7O0FBR0EsVUFBSSxLQUFKLEVBQVcsQ0FDVDtBQUNELE9BRkQsTUFFTyxJQUFJTCxZQUFKLEVBQWtCO0FBQ3ZCTCxRQUFBQSxHQUFHLENBQUNXLGFBQUosQ0FBa0JSLHdCQUFsQixFQUE0Q0MsZUFBNUMsRUFBNkRILElBQTdEO0FBQ0QsT0FGTSxNQUVBLElBQUlHLGVBQWUsS0FBSyxDQUF4QixFQUEyQjtBQUNoQyxhQUFLRixJQUFMLENBQVVVLGNBQVYsQ0FBeUJSLGVBQXpCO0FBQ0QsT0FGTSxNQUVBO0FBQ0xILFFBQUFBLElBQUksQ0FBQ1ksWUFBTCxDQUFrQlYsd0JBQWxCO0FBQ0Q7O0FBRUQsVUFBTVcsTUFBTSxHQUFHYixJQUFJLENBQUNjLFNBQUwsRUFBZjtBQUFBLFVBQ01DLE9BQU8sR0FBR2hCLEdBQUcsQ0FBQ2lCLFVBQUosRUFEaEI7QUFBQSxVQUVNQyxRQUFRLEdBQUcsS0FBS2hCLElBQUwsQ0FBVWlCLFdBQVYsRUFGakI7QUFBQSxVQUdNQyxhQUFhLEdBQUcsc0NBQXlCSixPQUF6QixDQUh0QjtBQUFBLFVBSU1LLGNBQWMsR0FBRyx3Q0FBMkJILFFBQTNCLENBSnZCO0FBQUEsVUFLTUksZUFBZSxHQUFHLHVDQUEwQlIsTUFBMUIsQ0FMeEI7QUFBQSxVQU1NUyxnQkFBZ0IsR0FBRyxnREFBbUNqQixLQUFuQyxFQUEwQ0MsTUFBMUMsQ0FOekI7QUFBQSxVQU9NaUIsYUFBYSxHQUFHLDhDQUFpQ0YsZUFBakMsQ0FQdEI7QUFTQWQsTUFBQUEsUUFBUSxDQUFDWSxhQUFELEVBQWdCSSxhQUFoQixFQUErQkgsY0FBL0IsRUFBK0NDLGVBQS9DLEVBQWdFQyxnQkFBaEUsQ0FBUjtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFBQSxrQ0FDbUdBLFVBRG5HLENBQ3hCQyxhQUR3QjtBQUFBLFVBQ3hCQSxhQUR3QixzQ0FDUjlCLG9CQURRO0FBQUEsa0NBQ21HNkIsVUFEbkcsQ0FDY0UsY0FEZDtBQUFBLFVBQ2NBLGNBRGQsc0NBQytCOUIscUJBRC9CO0FBQUEsa0NBQ21HNEIsVUFEbkcsQ0FDc0RHLGVBRHREO0FBQUEsVUFDc0RBLGVBRHRELHNDQUN3RTlCLHNCQUR4RTtBQUFBLFVBRTFCK0IsT0FGMEIsR0FFaEIsS0FGZ0I7QUFBQSxVQUcxQjdCLEdBSDBCLEdBR3BCOEIsZ0JBQUlDLGtCQUFKLENBQXVCSixjQUF2QixDQUhvQjtBQUFBLFVBSTFCMUIsSUFKMEIsR0FJbkIrQixpQkFBS0MsMkJBQUwsQ0FBaUNQLGFBQWpDLEVBQWdERyxPQUFoRCxDQUptQjtBQUFBLFVBSzFCM0IsSUFMMEIsR0FLbkJnQyxpQkFBS0MsbUJBQUwsQ0FBeUJQLGVBQXpCLENBTG1CO0FBQUEsVUFNMUJRLFlBTjBCLEdBTVhDLG1CQUFPQyxjQUFQLENBQXNCdkMsWUFBdEIsRUFBb0MwQixVQUFwQyxFQUFnRHpCLEdBQWhELEVBQXFEQyxJQUFyRCxFQUEyREMsSUFBM0QsQ0FOVzs7QUFRaEMsYUFBT2tDLFlBQVA7QUFDRDs7OztFQTFDdUNDLGtCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgemVybzIsIHplcm8zIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxPZmZzZXRzID0gemVybzMoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgPSA1O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXNpZ25DYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvcihwYW4sIHRpbHQsIHpvb20pIHtcbiAgICBzdXBlcihwYW4sIHRpbHQpO1xuXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhbiA9IHRoaXMuZ2V0UGFuKCksXG4gICAgICAgICAgdGlsdCA9IHRoaXMuZ2V0VGlsdCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgcGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbERlbHRhICE9PSAwKSB7XG4gICAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSBwYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICBjYWxsYmFjayhvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMsIGluaXRpYWxPZmZzZXRzID0gZGVmYXVsdEluaXRpYWxPZmZzZXRzLCBpbml0aWFsRGlzdGFuY2UgPSBkZWZhdWx0SW5pdGlhbERpc3RhbmNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSBmYWxzZSxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG4iXX0=