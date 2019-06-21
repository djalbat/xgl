'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var ANGLES_SCALAR = constants.ANGLES_SCALAR,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    zero2 = vectorMaths.zero2,
    add2 = vectorMaths.add2,
    scale2 = vectorMaths.scale2,
    subtract2 = vectorMaths.subtract2;

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
          relativeAngles = scale2(relativeMouseCoordinates, scalar);

      this.angles = add2(this.previousAngles, relativeAngles);
    }
  }], [{
    key: 'fromFlipped',
    value: function fromFlipped(flipped) {
      var angles = zero2(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsInZlY3Rvck1hdGhzIiwiYXJyYXlVdGlsaXRpZXMiLCJBTkdMRVNfU0NBTEFSIiwiZmlyc3QiLCJzZWNvbmQiLCJ6ZXJvMiIsImFkZDIiLCJzY2FsZTIiLCJzdWJ0cmFjdDIiLCJUaWx0IiwiZmxpcHBlZCIsImFuZ2xlcyIsInByZXZpb3VzQW5nbGVzIiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInNlY29uZEFuZ2xlIiwieEFuZ2xlIiwiZmlyc3RBbmdsZSIsInlBbmdsZSIsInpBbmdsZSIsImdldFhBbmdsZSIsImdldFlBbmdsZSIsImdldFpBbmdsZSIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInJlbGF0aXZlQW5nbGVzIiwidGlsdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCOztBQUlNLElBQUVHLGFBQUYsR0FBb0JKLFNBQXBCLENBQUVJLGFBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ29CRixjQURwQixDQUNFRSxLQURGO0FBQUEsSUFDU0MsTUFEVCxHQUNvQkgsY0FEcEIsQ0FDU0csTUFEVDtBQUFBLElBRUVDLEtBRkYsR0FFcUNMLFdBRnJDLENBRUVLLEtBRkY7QUFBQSxJQUVTQyxJQUZULEdBRXFDTixXQUZyQyxDQUVTTSxJQUZUO0FBQUEsSUFFZUMsTUFGZixHQUVxQ1AsV0FGckMsQ0FFZU8sTUFGZjtBQUFBLElBRXVCQyxTQUZ2QixHQUVxQ1IsV0FGckMsQ0FFdUJRLFNBRnZCOztJQUlBQyxJO0FBQ0osZ0JBQVlDLE9BQVosRUFBcUJDLE1BQXJCLEVBQTZCQyxjQUE3QixFQUE2Q0MsZ0JBQTdDLEVBQStEQyx3QkFBL0QsRUFBeUY7QUFBQTs7QUFDdkYsU0FBS0osT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0NBLHdCQUFoQztBQUNEOzs7O2dDQUVXO0FBQ1YsVUFBTUMsY0FBY1gsT0FBTyxLQUFLTyxNQUFaLENBQXBCO0FBQUEsVUFDTUssU0FBUyxLQUFLTixPQUFMLEdBQ0MsQ0FBQ0ssV0FERixHQUVHQSxXQUhsQjs7QUFLQSxhQUFPQyxNQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1DLGFBQWFkLE1BQU0sS0FBS1EsTUFBWCxDQUFuQjtBQUFBLFVBQ01PLFNBQVMsS0FBS1IsT0FBTCxHQUNFTyxVQURGLEdBRUcsQ0FBQ0EsVUFIbkI7O0FBS0EsYUFBT0MsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxTQUFTLENBQWY7O0FBRUEsYUFBT0EsTUFBUDtBQUNEOzs7Z0NBRVc7QUFBRTtBQUNaLFVBQU1ILFNBQVMsS0FBS0ksU0FBTCxFQUFmO0FBQUEsVUFDTUYsU0FBUyxLQUFLRyxTQUFMLEVBRGY7QUFBQSxVQUVNRixTQUFTLEtBQUtHLFNBQUwsRUFGZjtBQUFBLFVBR01YLFNBQVMsQ0FDUEssTUFETyxFQUVQRSxNQUZPLEVBR1BDLE1BSE8sQ0FIZjs7QUFTQSxhQUFPUixNQUFQO0FBQ0Q7Ozt3Q0FFbUJFLGdCLEVBQWtCO0FBQ3BDLFdBQUtBLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDRDs7O29EQUUrQjtBQUM5QixXQUFLQyx3QkFBTCxHQUFnQyxLQUFLRCxnQkFBckM7QUFDRDs7OzBDQUVxQjtBQUNwQixXQUFLRCxjQUFMLEdBQXNCLEtBQUtELE1BQTNCO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQU1ZLFNBQVNyQixhQUFmO0FBQUEsVUFBOEI7QUFDeEJzQixpQ0FBMkJoQixVQUFVLEtBQUtLLGdCQUFmLEVBQWlDLEtBQUtDLHdCQUF0QyxDQURqQztBQUFBLFVBRU1XLGlCQUFpQmxCLE9BQU9pQix3QkFBUCxFQUFpQ0QsTUFBakMsQ0FGdkI7O0FBSUEsV0FBS1osTUFBTCxHQUFjTCxLQUFLLEtBQUtNLGNBQVYsRUFBMEJhLGNBQTFCLENBQWQ7QUFDRDs7O2dDQUVrQmYsTyxFQUFTO0FBQzFCLFVBQU1DLFNBQVNOLE9BQWY7QUFBQSxVQUNNTyxpQkFBaUJELE1BRHZCO0FBQUEsVUFDZ0M7QUFDMUJFLHlCQUFtQlIsT0FGekI7QUFBQSxVQUdNUywyQkFBMkJELGdCQUhqQztBQUFBLFVBR29EO0FBQzlDYSxhQUFPLElBQUlqQixJQUFKLENBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCQyxjQUExQixFQUEwQ0MsZ0JBQTFDLEVBQTREQyx3QkFBNUQsQ0FKYjs7QUFNQSxhQUFPWSxJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbkIsSUFBakIiLCJmaWxlIjoidGlsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBBTkdMRVNfU0NBTEFSIH0gPSBjb25zdGFudHMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB6ZXJvMiwgYWRkMiwgc2NhbGUyLCBzdWJ0cmFjdDIgfSA9IHZlY3Rvck1hdGhzO1xuXG5jbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoZmxpcHBlZCwgYW5nbGVzLCBwcmV2aW91c0FuZ2xlcywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5mbGlwcGVkID0gZmxpcHBlZDtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVzID0gcHJldmlvdXNBbmdsZXM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZSA9IHNlY29uZCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeEFuZ2xlID0gdGhpcy5mbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgLXNlY29uZEFuZ2xlIDpcbiAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRBbmdsZTtcblxuICAgIHJldHVybiB4QW5nbGU7XG4gIH1cbiAgXG4gIGdldFlBbmdsZSgpIHtcbiAgICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHlBbmdsZSA9IHRoaXMuZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgICBmaXJzdEFuZ2xlIDpcbiAgICAgICAgICAgICAgICAgICAgICAtZmlyc3RBbmdsZTtcblxuICAgIHJldHVybiB5QW5nbGU7XG4gIH1cblxuICBnZXRaQW5nbGUoKSB7XG4gICAgY29uc3QgekFuZ2xlID0gMDtcblxuICAgIHJldHVybiB6QW5nbGU7XG4gIH1cbiAgXG4gIGdldEFuZ2xlcygpIHsgLy8vXG4gICAgY29uc3QgeEFuZ2xlID0gdGhpcy5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSB0aGlzLmdldFlBbmdsZSgpLFxuICAgICAgICAgIHpBbmdsZSA9IHRoaXMuZ2V0WkFuZ2xlKCksXG4gICAgICAgICAgYW5nbGVzID0gW1xuICAgICAgICAgICAgeEFuZ2xlLFxuICAgICAgICAgICAgeUFuZ2xlLFxuICAgICAgICAgICAgekFuZ2xlXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gYW5nbGVzO1xuICB9XG4gIFxuICBzZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzQW5nbGVzKCkge1xuICAgIHRoaXMucHJldmlvdXNBbmdsZXMgPSB0aGlzLmFuZ2xlcztcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcygpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBBTkdMRVNfU0NBTEFSLCAvLy9cbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZXMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpO1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQyKHRoaXMucHJldmlvdXNBbmdsZXMsIHJlbGF0aXZlQW5nbGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmxpcHBlZChmbGlwcGVkKSB7XG4gICAgY29uc3QgYW5nbGVzID0gemVybzIoKSxcbiAgICAgICAgICBwcmV2aW91c0FuZ2xlcyA9IGFuZ2xlcywgIC8vL1xuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLFxuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoZmxpcHBlZCwgYW5nbGVzLCBwcmV2aW91c0FuZ2xlcywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGlsdDtcbiJdfQ==