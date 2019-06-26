'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    zero2 = vectorMaths.zero2,
    add2 = vectorMaths.add2,
    scale2 = vectorMaths.scale2,
    subtract2 = vectorMaths.subtract2,
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
      var secondAngle = second(this.angles),
          xAngle = this.flipped ? -secondAngle : secondAngle;

      return xAngle;
    }
  }, {
    key: 'getYAngle',
    value: function getYAngle() {
      var firstAngle = first(this.angles),
          yAngle = this.flipped ? firstAngle : -firstAngle;

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
      ///
      var xAngle = this.getXAngle(),
          yAngle = this.getYAngle(),
          zAngle = this.getZAngle(),
          angles = [xAngle, yAngle, zAngle];

      return angles;
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
      var scalar = ANGLES_SCALAR,
          ///
      relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          scaledRelativeMouseCoordinates = scale2(relativeMouseCoordinates, scalar);

      this.angles = add2(this.previousAngles, scaledRelativeMouseCoordinates);
    }
  }], [{
    key: 'fromInitialAnglesAndFlipped',
    value: function fromInitialAnglesAndFlipped(initialAngles, flipped) {
      var scalar = flipped ? -DEGREES_TO_RADIANS_SCALAR : +DEGREES_TO_RADIANS_SCALAR,
          angles = scale2(initialAngles, scalar),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsInZlY3Rvck1hdGhzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsInplcm8yIiwiYWRkMiIsInNjYWxlMiIsInN1YnRyYWN0MiIsIkFOR0xFU19TQ0FMQVIiLCJERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSIiwiVGlsdCIsImZsaXBwZWQiLCJhbmdsZXMiLCJwcmV2aW91c0FuZ2xlcyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJzZWNvbmRBbmdsZSIsInhBbmdsZSIsImZpcnN0QW5nbGUiLCJ5QW5nbGUiLCJ6QW5nbGUiLCJnZXRYQW5nbGUiLCJnZXRZQW5nbGUiLCJnZXRaQW5nbGUiLCJzY2FsYXIiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJzY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJpbml0aWFsQW5nbGVzIiwidGlsdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCOztJQUlRRyxLLEdBQWtCRCxjLENBQWxCQyxLO0lBQU9DLE0sR0FBV0YsYyxDQUFYRSxNO0lBQ1BDLEssR0FBbUNKLFcsQ0FBbkNJLEs7SUFBT0MsSSxHQUE0QkwsVyxDQUE1QkssSTtJQUFNQyxNLEdBQXNCTixXLENBQXRCTSxNO0lBQVFDLFMsR0FBY1AsVyxDQUFkTyxTO0lBQ3JCQyxhLEdBQTZDVixTLENBQTdDVSxhO0lBQWVDLHlCLEdBQThCWCxTLENBQTlCVyx5Qjs7SUFFakJDLEk7QUFDSixnQkFBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkJDLGNBQTdCLEVBQTZDQyxnQkFBN0MsRUFBK0RDLHdCQUEvRCxFQUF5RjtBQUFBOztBQUN2RixTQUFLSixPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyx3QkFBTCxHQUFnQ0Esd0JBQWhDO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixVQUFNQyxjQUFjYixPQUFPLEtBQUtTLE1BQVosQ0FBcEI7QUFBQSxVQUNNSyxTQUFTLEtBQUtOLE9BQUwsR0FDQyxDQUFDSyxXQURGLEdBRUdBLFdBSGxCOztBQUtBLGFBQU9DLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsYUFBYWhCLE1BQU0sS0FBS1UsTUFBWCxDQUFuQjtBQUFBLFVBQ01PLFNBQVMsS0FBS1IsT0FBTCxHQUNFTyxVQURGLEdBRUcsQ0FBQ0EsVUFIbkI7O0FBS0EsYUFBT0MsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxTQUFTLENBQWY7O0FBRUEsYUFBT0EsTUFBUDtBQUNEOzs7Z0NBRVc7QUFBRTtBQUNaLFVBQU1ILFNBQVMsS0FBS0ksU0FBTCxFQUFmO0FBQUEsVUFDTUYsU0FBUyxLQUFLRyxTQUFMLEVBRGY7QUFBQSxVQUVNRixTQUFTLEtBQUtHLFNBQUwsRUFGZjtBQUFBLFVBR01YLFNBQVMsQ0FDUEssTUFETyxFQUVQRSxNQUZPLEVBR1BDLE1BSE8sQ0FIZjs7QUFTQSxhQUFPUixNQUFQO0FBQ0Q7Ozt3Q0FFbUJFLGdCLEVBQWtCO0FBQ3BDLFdBQUtBLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDRDs7O29EQUUrQjtBQUM5QixXQUFLQyx3QkFBTCxHQUFnQyxLQUFLRCxnQkFBckM7QUFDRDs7OzBDQUVxQjtBQUNwQixXQUFLRCxjQUFMLEdBQXNCLEtBQUtELE1BQTNCO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQU1ZLFNBQVNoQixhQUFmO0FBQUEsVUFBOEI7QUFDeEJpQixpQ0FBMkJsQixVQUFVLEtBQUtPLGdCQUFmLEVBQWlDLEtBQUtDLHdCQUF0QyxDQURqQztBQUFBLFVBRU1XLGlDQUFpQ3BCLE9BQU9tQix3QkFBUCxFQUFpQ0QsTUFBakMsQ0FGdkM7O0FBSUEsV0FBS1osTUFBTCxHQUFjUCxLQUFLLEtBQUtRLGNBQVYsRUFBMEJhLDhCQUExQixDQUFkO0FBQ0Q7OztnREFFa0NDLGEsRUFBZWhCLE8sRUFBUztBQUN6RCxVQUFNYSxTQUFTYixVQUNDLENBQUNGLHlCQURGLEdBRUcsQ0FBQ0EseUJBRm5CO0FBQUEsVUFHTUcsU0FBU04sT0FBT3FCLGFBQVAsRUFBc0JILE1BQXRCLENBSGY7QUFBQSxVQUlNWCxpQkFBaUJELE1BSnZCO0FBQUEsVUFJZ0M7QUFDMUJFLHlCQUFtQlYsT0FMekI7QUFBQSxVQU1NVywyQkFBMkJELGdCQU5qQztBQUFBLFVBTW9EO0FBQzlDYyxhQUFPLElBQUlsQixJQUFKLENBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCQyxjQUExQixFQUEwQ0MsZ0JBQTFDLEVBQTREQyx3QkFBNUQsQ0FQYjs7QUFTQSxhQUFPYSxJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCcEIsSUFBakIiLCJmaWxlIjoidGlsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgemVybzIsIGFkZDIsIHNjYWxlMiwgc3VidHJhY3QyIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgQU5HTEVTX1NDQUxBUiwgREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoZmxpcHBlZCwgYW5nbGVzLCBwcmV2aW91c0FuZ2xlcywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5mbGlwcGVkID0gZmxpcHBlZDtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVzID0gcHJldmlvdXNBbmdsZXM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZSA9IHNlY29uZCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeEFuZ2xlID0gdGhpcy5mbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgLXNlY29uZEFuZ2xlIDpcbiAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRBbmdsZTtcblxuICAgIHJldHVybiB4QW5nbGU7XG4gIH1cbiAgXG4gIGdldFlBbmdsZSgpIHtcbiAgICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHlBbmdsZSA9IHRoaXMuZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgICBmaXJzdEFuZ2xlIDpcbiAgICAgICAgICAgICAgICAgICAgICAtZmlyc3RBbmdsZTtcblxuICAgIHJldHVybiB5QW5nbGU7XG4gIH1cblxuICBnZXRaQW5nbGUoKSB7XG4gICAgY29uc3QgekFuZ2xlID0gMDtcblxuICAgIHJldHVybiB6QW5nbGU7XG4gIH1cbiAgXG4gIGdldEFuZ2xlcygpIHsgLy8vXG4gICAgY29uc3QgeEFuZ2xlID0gdGhpcy5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSB0aGlzLmdldFlBbmdsZSgpLFxuICAgICAgICAgIHpBbmdsZSA9IHRoaXMuZ2V0WkFuZ2xlKCksXG4gICAgICAgICAgYW5nbGVzID0gW1xuICAgICAgICAgICAgeEFuZ2xlLFxuICAgICAgICAgICAgeUFuZ2xlLFxuICAgICAgICAgICAgekFuZ2xlXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gYW5nbGVzO1xuICB9XG4gIFxuICBzZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzQW5nbGVzKCkge1xuICAgIHRoaXMucHJldmlvdXNBbmdsZXMgPSB0aGlzLmFuZ2xlcztcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcygpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBBTkdMRVNfU0NBTEFSLCAvLy9cbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKTtcblxuICAgIHRoaXMuYW5nbGVzID0gYWRkMih0aGlzLnByZXZpb3VzQW5nbGVzLCBzY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgIC1ERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSIDpcbiAgICAgICAgICAgICAgICAgICAgICArREVHUkVFU19UT19SQURJQU5TX1NDQUxBUixcbiAgICAgICAgICBhbmdsZXMgPSBzY2FsZTIoaW5pdGlhbEFuZ2xlcywgc2NhbGFyKSxcbiAgICAgICAgICBwcmV2aW91c0FuZ2xlcyA9IGFuZ2xlcywgIC8vL1xuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLFxuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoZmxpcHBlZCwgYW5nbGVzLCBwcmV2aW91c0FuZ2xlcywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGlsdDtcbiJdfQ==