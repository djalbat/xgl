"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var constants = require("../constants"),
    vectorMaths = require("../maths/vector"),
    arrayUtilities = require("../utilities/array");

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add3 = vectorMaths.add3,
    transform3 = vectorMaths.transform3,
    ANGLES_SCALAR = constants.ANGLES_SCALAR,
    DEGREES_TO_RADIANS_SCALAR = constants.DEGREES_TO_RADIANS_SCALAR;

var Tilt = /*#__PURE__*/function () {
  function Tilt(angles, flipped) {
    _classCallCheck(this, Tilt);

    this.angles = angles;
    this.flipped = flipped;
  }

  _createClass(Tilt, [{
    key: "getXAngle",
    value: function getXAngle() {
      var firstAngle = first(this.angles),
          xAngle = firstAngle; ///

      return xAngle;
    }
  }, {
    key: "getYAngle",
    value: function getYAngle() {
      var secondAngle = second(this.angles),
          yAngle = secondAngle; ///

      return yAngle;
    }
  }, {
    key: "getZAngle",
    value: function getZAngle() {
      var zAngle = 0;
      return zAngle;
    }
  }, {
    key: "getAngles",
    value: function getAngles() {
      return this.angles;
    }
  }, {
    key: "updateAngles",
    value: function updateAngles(relativeMouseCoordinates) {
      var scalar = this.flipped ? +ANGLES_SCALAR : -ANGLES_SCALAR,
          matrix = [0, scalar, 0, -scalar, 0, 0, 0, 0, 0],
          relativeAngles = transform3([].concat(_toConsumableArray(relativeMouseCoordinates), [0]), matrix); ///

      this.angles = add3(this.angles, relativeAngles);
    }
  }], [{
    key: "fromInitialAnglesAndFlipped",
    value: function fromInitialAnglesAndFlipped(initialAngles, flipped) {
      var scalar = flipped ? +DEGREES_TO_RADIANS_SCALAR : -DEGREES_TO_RADIANS_SCALAR,
          matrix = [0, scalar, 0, -scalar, 0, 0, 0, 0, 0],
          angles = transform3([].concat(_toConsumableArray(initialAngles), [0]), matrix),
          ///
      tilt = new Tilt(angles, flipped);
      return tilt;
    }
  }]);

  return Tilt;
}();

module.exports = Tilt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbHQuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsInZlY3Rvck1hdGhzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImFkZDMiLCJ0cmFuc2Zvcm0zIiwiQU5HTEVTX1NDQUxBUiIsIkRFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIiLCJUaWx0IiwiYW5nbGVzIiwiZmxpcHBlZCIsImZpcnN0QW5nbGUiLCJ4QW5nbGUiLCJzZWNvbmRBbmdsZSIsInlBbmdsZSIsInpBbmdsZSIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInNjYWxhciIsIm1hdHJpeCIsInJlbGF0aXZlQW5nbGVzIiwiaW5pdGlhbEFuZ2xlcyIsInRpbHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBekI7QUFBQSxJQUNNQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxpQkFBRCxDQUQzQjtBQUFBLElBRU1FLGNBQWMsR0FBR0YsT0FBTyxDQUFDLG9CQUFELENBRjlCOztJQUlRRyxLLEdBQWtCRCxjLENBQWxCQyxLO0lBQU9DLE0sR0FBV0YsYyxDQUFYRSxNO0lBQ1BDLEksR0FBcUJKLFcsQ0FBckJJLEk7SUFBTUMsVSxHQUFlTCxXLENBQWZLLFU7SUFDTkMsYSxHQUE2Q1IsUyxDQUE3Q1EsYTtJQUFlQyx5QixHQUE4QlQsUyxDQUE5QlMseUI7O0lBRWpCQyxJO0FBQ0osZ0JBQVlDLE1BQVosRUFBb0JDLE9BQXBCLEVBQTZCO0FBQUE7O0FBQzNCLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7O2dDQUVXO0FBQ1YsVUFBTUMsVUFBVSxHQUFHVCxLQUFLLENBQUMsS0FBS08sTUFBTixDQUF4QjtBQUFBLFVBQ01HLE1BQU0sR0FBR0QsVUFEZixDQURVLENBRWtCOztBQUU1QixhQUFPQyxNQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1DLFdBQVcsR0FBR1YsTUFBTSxDQUFDLEtBQUtNLE1BQU4sQ0FBMUI7QUFBQSxVQUNNSyxNQUFNLEdBQUdELFdBRGYsQ0FEVSxDQUVrQjs7QUFFNUIsYUFBT0MsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxNQUFNLEdBQUcsQ0FBZjtBQUVBLGFBQU9BLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLTixNQUFaO0FBQ0Q7OztpQ0FFWU8sd0IsRUFBMEI7QUFDckMsVUFBTUMsTUFBTSxHQUFHLEtBQUtQLE9BQUwsR0FDRSxDQUFDSixhQURILEdBRUksQ0FBQ0EsYUFGcEI7QUFBQSxVQUdNWSxNQUFNLEdBQUcsQ0FFRCxDQUZDLEVBRUVELE1BRkYsRUFFVSxDQUZWLEVBR1AsQ0FBQ0EsTUFITSxFQUdPLENBSFAsRUFHVSxDQUhWLEVBSUQsQ0FKQyxFQUlPLENBSlAsRUFJVSxDQUpWLENBSGY7QUFBQSxVQVVNRSxjQUFjLEdBQUdkLFVBQVUsOEJBQU1XLHdCQUFOLElBQWdDLENBQWhDLElBQXFDRSxNQUFyQyxDQVZqQyxDQURxQyxDQVcyQzs7QUFFaEYsV0FBS1QsTUFBTCxHQUFjTCxJQUFJLENBQUMsS0FBS0ssTUFBTixFQUFjVSxjQUFkLENBQWxCO0FBQ0Q7OztnREFFa0NDLGEsRUFBZVYsTyxFQUFTO0FBQ3pELFVBQU1PLE1BQU0sR0FBR1AsT0FBTyxHQUNMLENBQUNILHlCQURJLEdBRUgsQ0FBQ0EseUJBRnBCO0FBQUEsVUFHTVcsTUFBTSxHQUFHLENBRUQsQ0FGQyxFQUVFRCxNQUZGLEVBRVUsQ0FGVixFQUdQLENBQUNBLE1BSE0sRUFHTyxDQUhQLEVBR1UsQ0FIVixFQUlELENBSkMsRUFJTyxDQUpQLEVBSVUsQ0FKVixDQUhmO0FBQUEsVUFVTVIsTUFBTSxHQUFHSixVQUFVLDhCQUFNZSxhQUFOLElBQXFCLENBQXJCLElBQTBCRixNQUExQixDQVZ6QjtBQUFBLFVBVTREO0FBQ3RERyxNQUFBQSxJQUFJLEdBQUcsSUFBSWIsSUFBSixDQUFTQyxNQUFULEVBQWlCQyxPQUFqQixDQVhiO0FBYUEsYUFBT1csSUFBUDtBQUNEOzs7Ozs7QUFHSEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZixJQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKFwiLi4vbWF0aHMvdmVjdG9yXCIpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL2FycmF5XCIpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhZGQzLCB0cmFuc2Zvcm0zIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgQU5HTEVTX1NDQUxBUiwgREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzLCBmbGlwcGVkKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXM7XG4gICAgdGhpcy5mbGlwcGVkID0gZmxpcHBlZDtcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGU7ICAvLy9cblxuICAgIHJldHVybiB4QW5nbGU7XG4gIH1cbiAgXG4gIGdldFlBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZSA9IHNlY29uZCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeUFuZ2xlID0gc2Vjb25kQW5nbGU7IC8vL1xuXG4gICAgcmV0dXJuIHlBbmdsZTtcbiAgfVxuXG4gIGdldFpBbmdsZSgpIHtcbiAgICBjb25zdCB6QW5nbGUgPSAwO1xuXG4gICAgcmV0dXJuIHpBbmdsZTtcbiAgfVxuICBcbiAgZ2V0QW5nbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmFuZ2xlcztcbiAgfVxuICBcbiAgdXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHNjYWxhciA9IHRoaXMuZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgICArQU5HTEVTX1NDQUxBUiA6XG4gICAgICAgICAgICAgICAgICAgICAgIC1BTkdMRVNfU0NBTEFSLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgMCwgc2NhbGFyLCAwLFxuICAgICAgICAgICAgLXNjYWxhciwgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgMCwgICAgICAwLCAwLFxuXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxhdGl2ZUFuZ2xlcyA9IHRyYW5zZm9ybTMoWyAuLi5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDAgXSwgbWF0cml4KTsgIC8vL1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQzKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBmbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgICtERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgLURFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIsXG4gICAgICAgICAgbWF0cml4ID0gW1xuXG4gICAgICAgICAgICAgICAgICAwLCBzY2FsYXIsIDAsXG4gICAgICAgICAgICAtc2NhbGFyLCAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgICAwLCAgICAgIDAsIDAsXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIGFuZ2xlcyA9IHRyYW5zZm9ybTMoWyAuLi5pbml0aWFsQW5nbGVzLCAwIF0sIG1hdHJpeCksIC8vL1xuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGZsaXBwZWQpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUaWx0O1xuIl19