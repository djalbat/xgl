'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    zero2 = vectorMaths.zero2,
    add3 = vectorMaths.add3,
    subtract2 = vectorMaths.subtract2,
    transform3 = vectorMaths.transform3,
    ANGLES_SCALAR = constants.ANGLES_SCALAR,
    DEGREES_TO_RADIANS_SCALAR = constants.DEGREES_TO_RADIANS_SCALAR;

var Tilt = function () {
  function Tilt(flipped, angles, previousAngles, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Tilt);

    this.flipped = flipped;
    this.angles = angles;
    this.previousAngles = previousAngles;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(Tilt, [{
    key: 'getXAngle',
    value: function getXAngle() {
      var firstAngle = first(this.angles),
          xAngle = firstAngle; ///

      return xAngle;
    }
  }, {
    key: 'getYAngle',
    value: function getYAngle() {
      var secondAngle = second(this.angles),
          yAngle = secondAngle; ///

      return yAngle;
    }
  }, {
    key: 'getZAngle',
    value: function getZAngle() {
      var zAngle = 0;

      return zAngle;
    }
  }, {
    key: 'getAngles',
    value: function getAngles() {
      return this.angles;
    }
  }, {
    key: 'setMouseCoordinates',
    value: function setMouseCoordinates(mouseCoordinates) {
      this.mouseCoordinates = mouseCoordinates;
    }
  }, {
    key: 'resetPreviousMouseCoordinates',
    value: function resetPreviousMouseCoordinates() {
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'resetPreviousAngles',
    value: function resetPreviousAngles() {
      this.previousAngles = this.angles;
    }
  }, {
    key: 'updateAngles',
    value: function updateAngles() {
      var scalar = this.flipped ? +ANGLES_SCALAR : -ANGLES_SCALAR,
          matrix = [0, scalar, 0, -scalar, 0, 0, 0, 0, 0],
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeAngles = transform3([].concat(_toConsumableArray(relativeMouseCoordinates), [0]), matrix); ///

      this.angles = add3(this.previousAngles, relativeAngles);
    }
  }], [{
    key: 'fromInitialAnglesAndFlipped',
    value: function fromInitialAnglesAndFlipped(initialAngles, flipped) {
      var scalar = flipped ? +DEGREES_TO_RADIANS_SCALAR : -DEGREES_TO_RADIANS_SCALAR,
          matrix = [0, scalar, 0, -scalar, 0, 0, 0, 0, 0],
          angles = transform3([].concat(_toConsumableArray(initialAngles), [0]), matrix),
          ///
      previousAngles = angles,
          ///
      mouseCoordinates = zero2(),
          previousMouseCoordinates = mouseCoordinates,
          ///
      tilt = new Tilt(flipped, angles, previousAngles, mouseCoordinates, previousMouseCoordinates);

      return tilt;
    }
  }]);

  return Tilt;
}();

module.exports = Tilt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsInZlY3Rvck1hdGhzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsInplcm8yIiwiYWRkMyIsInN1YnRyYWN0MiIsInRyYW5zZm9ybTMiLCJBTkdMRVNfU0NBTEFSIiwiREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiIsIlRpbHQiLCJmbGlwcGVkIiwiYW5nbGVzIiwicHJldmlvdXNBbmdsZXMiLCJtb3VzZUNvb3JkaW5hdGVzIiwicHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwiZmlyc3RBbmdsZSIsInhBbmdsZSIsInNlY29uZEFuZ2xlIiwieUFuZ2xlIiwiekFuZ2xlIiwic2NhbGFyIiwibWF0cml4IiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwicmVsYXRpdmVBbmdsZXMiLCJpbml0aWFsQW5nbGVzIiwidGlsdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7O0lBSVFHLEssR0FBa0JELGMsQ0FBbEJDLEs7SUFBT0MsTSxHQUFXRixjLENBQVhFLE07SUFDUEMsSyxHQUF1Q0osVyxDQUF2Q0ksSztJQUFPQyxJLEdBQWdDTCxXLENBQWhDSyxJO0lBQU1DLFMsR0FBMEJOLFcsQ0FBMUJNLFM7SUFBV0MsVSxHQUFlUCxXLENBQWZPLFU7SUFDeEJDLGEsR0FBNkNWLFMsQ0FBN0NVLGE7SUFBZUMseUIsR0FBOEJYLFMsQ0FBOUJXLHlCOztJQUVqQkMsSTtBQUNKLGdCQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixFQUE2QkMsY0FBN0IsRUFBNkNDLGdCQUE3QyxFQUErREMsd0JBQS9ELEVBQXlGO0FBQUE7O0FBQ3ZGLFNBQUtKLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztnQ0FFVztBQUNWLFVBQU1DLGFBQWFkLE1BQU0sS0FBS1UsTUFBWCxDQUFuQjtBQUFBLFVBQ01LLFNBQVNELFVBRGYsQ0FEVSxDQUVrQjs7QUFFNUIsYUFBT0MsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxjQUFjZixPQUFPLEtBQUtTLE1BQVosQ0FBcEI7QUFBQSxVQUNNTyxTQUFTRCxXQURmLENBRFUsQ0FFa0I7O0FBRTVCLGFBQU9DLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsU0FBUyxDQUFmOztBQUVBLGFBQU9BLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLUixNQUFaO0FBQ0Q7Ozt3Q0FFbUJFLGdCLEVBQWtCO0FBQ3BDLFdBQUtBLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDRDs7O29EQUUrQjtBQUM5QixXQUFLQyx3QkFBTCxHQUFnQyxLQUFLRCxnQkFBckM7QUFDRDs7OzBDQUVxQjtBQUNwQixXQUFLRCxjQUFMLEdBQXNCLEtBQUtELE1BQTNCO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQU1TLFNBQVMsS0FBS1YsT0FBTCxHQUNFLENBQUNILGFBREgsR0FFSSxDQUFDQSxhQUZwQjtBQUFBLFVBR01jLFNBQVMsQ0FFRCxDQUZDLEVBRUVELE1BRkYsRUFFVSxDQUZWLEVBR1AsQ0FBQ0EsTUFITSxFQUdPLENBSFAsRUFHVSxDQUhWLEVBSUQsQ0FKQyxFQUlPLENBSlAsRUFJVSxDQUpWLENBSGY7QUFBQSxVQVVNRSwyQkFBMkJqQixVQUFVLEtBQUtRLGdCQUFmLEVBQWlDLEtBQUtDLHdCQUF0QyxDQVZqQztBQUFBLFVBV01TLGlCQUFpQmpCLHdDQUFnQmdCLHdCQUFoQixJQUEwQyxDQUExQyxJQUErQ0QsTUFBL0MsQ0FYdkIsQ0FEYSxDQVltRTs7QUFFaEYsV0FBS1YsTUFBTCxHQUFjUCxLQUFLLEtBQUtRLGNBQVYsRUFBMEJXLGNBQTFCLENBQWQ7QUFDRDs7O2dEQUVrQ0MsYSxFQUFlZCxPLEVBQVM7QUFDekQsVUFBTVUsU0FBU1YsVUFDRSxDQUFDRix5QkFESCxHQUVJLENBQUNBLHlCQUZwQjtBQUFBLFVBR01hLFNBQVMsQ0FFRCxDQUZDLEVBRUVELE1BRkYsRUFFVSxDQUZWLEVBR1AsQ0FBQ0EsTUFITSxFQUdPLENBSFAsRUFHVSxDQUhWLEVBSUQsQ0FKQyxFQUlPLENBSlAsRUFJVSxDQUpWLENBSGY7QUFBQSxVQVVNVCxTQUFTTCx3Q0FBZ0JrQixhQUFoQixJQUErQixDQUEvQixJQUFvQ0gsTUFBcEMsQ0FWZjtBQUFBLFVBVTREO0FBQ3REVCx1QkFBaUJELE1BWHZCO0FBQUEsVUFXZ0M7QUFDMUJFLHlCQUFtQlYsT0FaekI7QUFBQSxVQWFNVywyQkFBMkJELGdCQWJqQztBQUFBLFVBYW9EO0FBQzlDWSxhQUFPLElBQUloQixJQUFKLENBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCQyxjQUExQixFQUEwQ0MsZ0JBQTFDLEVBQTREQyx3QkFBNUQsQ0FkYjs7QUFnQkEsYUFBT1csSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmxCLElBQWpCIiwiZmlsZSI6InRpbHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHplcm8yLCBhZGQzLCBzdWJ0cmFjdDIsIHRyYW5zZm9ybTMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBBTkdMRVNfU0NBTEFSLCBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFRpbHQge1xuICBjb25zdHJ1Y3RvcihmbGlwcGVkLCBhbmdsZXMsIHByZXZpb3VzQW5nbGVzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmZsaXBwZWQgPSBmbGlwcGVkO1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZXMgPSBwcmV2aW91c0FuZ2xlcztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0WEFuZ2xlKCkge1xuICAgIGNvbnN0IGZpcnN0QW5nbGUgPSBmaXJzdCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeEFuZ2xlID0gZmlyc3RBbmdsZTsgIC8vL1xuXG4gICAgcmV0dXJuIHhBbmdsZTtcbiAgfVxuICBcbiAgZ2V0WUFuZ2xlKCkge1xuICAgIGNvbnN0IHNlY29uZEFuZ2xlID0gc2Vjb25kKHRoaXMuYW5nbGVzKSxcbiAgICAgICAgICB5QW5nbGUgPSBzZWNvbmRBbmdsZTsgLy8vXG5cbiAgICByZXR1cm4geUFuZ2xlO1xuICB9XG5cbiAgZ2V0WkFuZ2xlKCkge1xuICAgIGNvbnN0IHpBbmdsZSA9IDA7XG5cbiAgICByZXR1cm4gekFuZ2xlO1xuICB9XG4gIFxuICBnZXRBbmdsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5nbGVzO1xuICB9XG4gIFxuICBzZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzQW5nbGVzKCkge1xuICAgIHRoaXMucHJldmlvdXNBbmdsZXMgPSB0aGlzLmFuZ2xlcztcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcygpIHtcbiAgICBjb25zdCBzY2FsYXIgPSB0aGlzLmZsaXBwZWQgP1xuICAgICAgICAgICAgICAgICAgICAgK0FOR0xFU19TQ0FMQVIgOlxuICAgICAgICAgICAgICAgICAgICAgICAtQU5HTEVTX1NDQUxBUixcbiAgICAgICAgICBtYXRyaXggPSBbXG5cbiAgICAgICAgICAgICAgICAgIDAsIHNjYWxhciwgMCxcbiAgICAgICAgICAgIC1zY2FsYXIsICAgICAgMCwgMCxcbiAgICAgICAgICAgICAgICAgIDAsICAgICAgMCwgMCxcblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVzID0gdHJhbnNmb3JtMyhbIC4uLnJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMCBdLCBtYXRyaXgpOyAgLy8vXG5cbiAgICB0aGlzLmFuZ2xlcyA9IGFkZDModGhpcy5wcmV2aW91c0FuZ2xlcywgcmVsYXRpdmVBbmdsZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgICArREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiA6XG4gICAgICAgICAgICAgICAgICAgICAgIC1ERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgMCwgc2NhbGFyLCAwLFxuICAgICAgICAgICAgLXNjYWxhciwgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgMCwgICAgICAwLCAwLFxuXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhbmdsZXMgPSB0cmFuc2Zvcm0zKFsgLi4uaW5pdGlhbEFuZ2xlcywgMCBdLCBtYXRyaXgpLCAvLy9cbiAgICAgICAgICBwcmV2aW91c0FuZ2xlcyA9IGFuZ2xlcywgIC8vL1xuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLFxuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoZmxpcHBlZCwgYW5nbGVzLCBwcmV2aW91c0FuZ2xlcywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGlsdDtcbiJdfQ==