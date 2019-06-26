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
    transform3 = vectorMaths.transform3,
    scale3 = vectorMaths.scale3,
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
      var scalar = this.flipped ? ANGLES_SCALAR : -ANGLES_SCALAR,
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          matrix = [0, scalar, 0, -scalar, 0, 0, 0, 0, 0],
          relativeAngles = transform3([].concat(_toConsumableArray(relativeMouseCoordinates), [0]), matrix); ///

      this.angles = add3(this.previousAngles, relativeAngles);
    }
  }], [{
    key: 'fromInitialAnglesAndFlipped',
    value: function fromInitialAnglesAndFlipped(initialAngles, flipped) {
      var scalar = flipped ? -DEGREES_TO_RADIANS_SCALAR : +DEGREES_TO_RADIANS_SCALAR,
          angles = scale3([].concat(_toConsumableArray(initialAngles), [0]), scalar),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsInZlY3Rvck1hdGhzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsInplcm8yIiwiYWRkMyIsInRyYW5zZm9ybTMiLCJzY2FsZTMiLCJzdWJ0cmFjdDIiLCJBTkdMRVNfU0NBTEFSIiwiREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiIsIlRpbHQiLCJmbGlwcGVkIiwiYW5nbGVzIiwicHJldmlvdXNBbmdsZXMiLCJtb3VzZUNvb3JkaW5hdGVzIiwicHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwiZmlyc3RBbmdsZSIsInhBbmdsZSIsInNlY29uZEFuZ2xlIiwieUFuZ2xlIiwiekFuZ2xlIiwic2NhbGFyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibWF0cml4IiwicmVsYXRpdmVBbmdsZXMiLCJpbml0aWFsQW5nbGVzIiwidGlsdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7O0lBSVFHLEssR0FBa0JELGMsQ0FBbEJDLEs7SUFBT0MsTSxHQUFXRixjLENBQVhFLE07SUFDUEMsSyxHQUErQ0osVyxDQUEvQ0ksSztJQUFPQyxJLEdBQXdDTCxXLENBQXhDSyxJO0lBQU1DLFUsR0FBa0NOLFcsQ0FBbENNLFU7SUFBWUMsTSxHQUFzQlAsVyxDQUF0Qk8sTTtJQUFRQyxTLEdBQWNSLFcsQ0FBZFEsUztJQUNqQ0MsYSxHQUE2Q1gsUyxDQUE3Q1csYTtJQUFlQyx5QixHQUE4QlosUyxDQUE5QlkseUI7O0lBRWpCQyxJO0FBQ0osZ0JBQVlDLE9BQVosRUFBcUJDLE1BQXJCLEVBQTZCQyxjQUE3QixFQUE2Q0MsZ0JBQTdDLEVBQStEQyx3QkFBL0QsRUFBeUY7QUFBQTs7QUFDdkYsU0FBS0osT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0NBLHdCQUFoQztBQUNEOzs7O2dDQUVXO0FBQ1YsVUFBTUMsYUFBYWYsTUFBTSxLQUFLVyxNQUFYLENBQW5CO0FBQUEsVUFDTUssU0FBU0QsVUFEZixDQURVLENBRWtCOztBQUU1QixhQUFPQyxNQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1DLGNBQWNoQixPQUFPLEtBQUtVLE1BQVosQ0FBcEI7QUFBQSxVQUNNTyxTQUFTRCxXQURmLENBRFUsQ0FFa0I7O0FBRTVCLGFBQU9DLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsU0FBUyxDQUFmOztBQUVBLGFBQU9BLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLUixNQUFaO0FBQ0Q7Ozt3Q0FFbUJFLGdCLEVBQWtCO0FBQ3BDLFdBQUtBLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDRDs7O29EQUUrQjtBQUM5QixXQUFLQyx3QkFBTCxHQUFnQyxLQUFLRCxnQkFBckM7QUFDRDs7OzBDQUVxQjtBQUNwQixXQUFLRCxjQUFMLEdBQXNCLEtBQUtELE1BQTNCO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQU1TLFNBQVMsS0FBS1YsT0FBTCxHQUNFSCxhQURGLEdBRUcsQ0FBQ0EsYUFGbkI7QUFBQSxVQUdNYywyQkFBMkJmLFVBQVUsS0FBS08sZ0JBQWYsRUFBaUMsS0FBS0Msd0JBQXRDLENBSGpDO0FBQUEsVUFJTVEsU0FBUyxDQUVELENBRkMsRUFFRUYsTUFGRixFQUVVLENBRlYsRUFHUCxDQUFDQSxNQUhNLEVBR08sQ0FIUCxFQUdVLENBSFYsRUFJRCxDQUpDLEVBSU8sQ0FKUCxFQUlVLENBSlYsQ0FKZjtBQUFBLFVBV01HLGlCQUFpQm5CLHdDQUFnQmlCLHdCQUFoQixJQUEwQyxDQUExQyxJQUErQ0MsTUFBL0MsQ0FYdkIsQ0FEYSxDQVltRTs7QUFFaEYsV0FBS1gsTUFBTCxHQUFjUixLQUFLLEtBQUtTLGNBQVYsRUFBMEJXLGNBQTFCLENBQWQ7QUFDRDs7O2dEQUVrQ0MsYSxFQUFlZCxPLEVBQVM7QUFDekQsVUFBTVUsU0FBU1YsVUFDQyxDQUFDRix5QkFERixHQUVHLENBQUNBLHlCQUZuQjtBQUFBLFVBR01HLFNBQVNOLG9DQUFZbUIsYUFBWixJQUEyQixDQUEzQixJQUFnQ0osTUFBaEMsQ0FIZjtBQUFBLFVBR3dEO0FBQ2xEUix1QkFBaUJELE1BSnZCO0FBQUEsVUFJZ0M7QUFDMUJFLHlCQUFtQlgsT0FMekI7QUFBQSxVQU1NWSwyQkFBMkJELGdCQU5qQztBQUFBLFVBTW9EO0FBQzlDWSxhQUFPLElBQUloQixJQUFKLENBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCQyxjQUExQixFQUEwQ0MsZ0JBQTFDLEVBQTREQyx3QkFBNUQsQ0FQYjs7QUFTQSxhQUFPVyxJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsSUFBakIiLCJmaWxlIjoidGlsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgemVybzIsIGFkZDMsIHRyYW5zZm9ybTMsIHNjYWxlMywgc3VidHJhY3QyIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgQU5HTEVTX1NDQUxBUiwgREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoZmxpcHBlZCwgYW5nbGVzLCBwcmV2aW91c0FuZ2xlcywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5mbGlwcGVkID0gZmxpcHBlZDtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVzID0gcHJldmlvdXNBbmdsZXM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGU7ICAvLy9cblxuICAgIHJldHVybiB4QW5nbGU7XG4gIH1cbiAgXG4gIGdldFlBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZSA9IHNlY29uZCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeUFuZ2xlID0gc2Vjb25kQW5nbGU7IC8vL1xuXG4gICAgcmV0dXJuIHlBbmdsZTtcbiAgfVxuXG4gIGdldFpBbmdsZSgpIHtcbiAgICBjb25zdCB6QW5nbGUgPSAwO1xuXG4gICAgcmV0dXJuIHpBbmdsZTtcbiAgfVxuICBcbiAgZ2V0QW5nbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmFuZ2xlcztcbiAgfVxuICBcbiAgc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCkge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c0FuZ2xlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVzID0gdGhpcy5hbmdsZXM7XG4gIH1cblxuICB1cGRhdGVBbmdsZXMoKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gdGhpcy5mbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgIEFOR0xFU19TQ0FMQVIgOlxuICAgICAgICAgICAgICAgICAgICAgIC1BTkdMRVNfU0NBTEFSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICBtYXRyaXggPSBbXG5cbiAgICAgICAgICAgICAgICAgIDAsIHNjYWxhciwgMCxcbiAgICAgICAgICAgIC1zY2FsYXIsICAgICAgMCwgMCxcbiAgICAgICAgICAgICAgICAgIDAsICAgICAgMCwgMCxcblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZXMgPSB0cmFuc2Zvcm0zKFsgLi4ucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAwIF0sIG1hdHJpeCk7ICAvLy9cblxuICAgIHRoaXMuYW5nbGVzID0gYWRkMyh0aGlzLnByZXZpb3VzQW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBmbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgLURFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIgOlxuICAgICAgICAgICAgICAgICAgICAgICtERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSLFxuICAgICAgICAgIGFuZ2xlcyA9IHNjYWxlMyhbIC4uLmluaXRpYWxBbmdsZXMsIDAgXSwgc2NhbGFyKSwgLy8vXG4gICAgICAgICAgcHJldmlvdXNBbmdsZXMgPSBhbmdsZXMsICAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSxcbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGZsaXBwZWQsIGFuZ2xlcywgcHJldmlvdXNBbmdsZXMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbHQ7XG4iXX0=