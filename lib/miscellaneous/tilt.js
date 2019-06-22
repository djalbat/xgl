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
    DEGREES_TO_RADIANS = constants.DEGREES_TO_RADIANS;

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
      var scalar = flipped ? -DEGREES_TO_RADIANS : +DEGREES_TO_RADIANS,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsInZlY3Rvck1hdGhzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsInplcm8yIiwiYWRkMiIsInNjYWxlMiIsInN1YnRyYWN0MiIsIkFOR0xFU19TQ0FMQVIiLCJERUdSRUVTX1RPX1JBRElBTlMiLCJUaWx0IiwiZmxpcHBlZCIsImFuZ2xlcyIsInByZXZpb3VzQW5nbGVzIiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInNlY29uZEFuZ2xlIiwieEFuZ2xlIiwiZmlyc3RBbmdsZSIsInlBbmdsZSIsInpBbmdsZSIsImdldFhBbmdsZSIsImdldFlBbmdsZSIsImdldFpBbmdsZSIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsImluaXRpYWxBbmdsZXMiLCJ0aWx0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7O0lBSVFHLEssR0FBa0JELGMsQ0FBbEJDLEs7SUFBT0MsTSxHQUFXRixjLENBQVhFLE07SUFDUEMsSyxHQUFtQ0osVyxDQUFuQ0ksSztJQUFPQyxJLEdBQTRCTCxXLENBQTVCSyxJO0lBQU1DLE0sR0FBc0JOLFcsQ0FBdEJNLE07SUFBUUMsUyxHQUFjUCxXLENBQWRPLFM7SUFDckJDLGEsR0FBc0NWLFMsQ0FBdENVLGE7SUFBZUMsa0IsR0FBdUJYLFMsQ0FBdkJXLGtCOztJQUVqQkMsSTtBQUNKLGdCQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixFQUE2QkMsY0FBN0IsRUFBNkNDLGdCQUE3QyxFQUErREMsd0JBQS9ELEVBQXlGO0FBQUE7O0FBQ3ZGLFNBQUtKLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztnQ0FFVztBQUNWLFVBQU1DLGNBQWNiLE9BQU8sS0FBS1MsTUFBWixDQUFwQjtBQUFBLFVBQ01LLFNBQVMsS0FBS04sT0FBTCxHQUNDLENBQUNLLFdBREYsR0FFR0EsV0FIbEI7O0FBS0EsYUFBT0MsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxhQUFhaEIsTUFBTSxLQUFLVSxNQUFYLENBQW5CO0FBQUEsVUFDTU8sU0FBUyxLQUFLUixPQUFMLEdBQ0VPLFVBREYsR0FFRyxDQUFDQSxVQUhuQjs7QUFLQSxhQUFPQyxNQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1DLFNBQVMsQ0FBZjs7QUFFQSxhQUFPQSxNQUFQO0FBQ0Q7OztnQ0FFVztBQUFFO0FBQ1osVUFBTUgsU0FBUyxLQUFLSSxTQUFMLEVBQWY7QUFBQSxVQUNNRixTQUFTLEtBQUtHLFNBQUwsRUFEZjtBQUFBLFVBRU1GLFNBQVMsS0FBS0csU0FBTCxFQUZmO0FBQUEsVUFHTVgsU0FBUyxDQUNQSyxNQURPLEVBRVBFLE1BRk8sRUFHUEMsTUFITyxDQUhmOztBQVNBLGFBQU9SLE1BQVA7QUFDRDs7O3dDQUVtQkUsZ0IsRUFBa0I7QUFDcEMsV0FBS0EsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEOzs7b0RBRStCO0FBQzlCLFdBQUtDLHdCQUFMLEdBQWdDLEtBQUtELGdCQUFyQztBQUNEOzs7MENBRXFCO0FBQ3BCLFdBQUtELGNBQUwsR0FBc0IsS0FBS0QsTUFBM0I7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTVksU0FBU2hCLGFBQWY7QUFBQSxVQUE4QjtBQUN4QmlCLGlDQUEyQmxCLFVBQVUsS0FBS08sZ0JBQWYsRUFBaUMsS0FBS0Msd0JBQXRDLENBRGpDO0FBQUEsVUFFTVcsaUNBQWlDcEIsT0FBT21CLHdCQUFQLEVBQWlDRCxNQUFqQyxDQUZ2Qzs7QUFJQSxXQUFLWixNQUFMLEdBQWNQLEtBQUssS0FBS1EsY0FBVixFQUEwQmEsOEJBQTFCLENBQWQ7QUFDRDs7O2dEQUVrQ0MsYSxFQUFlaEIsTyxFQUFTO0FBQ3pELFVBQU1hLFNBQVNiLFVBQ0MsQ0FBQ0Ysa0JBREYsR0FFRyxDQUFDQSxrQkFGbkI7QUFBQSxVQUdNRyxTQUFTTixPQUFPcUIsYUFBUCxFQUFzQkgsTUFBdEIsQ0FIZjtBQUFBLFVBSU1YLGlCQUFpQkQsTUFKdkI7QUFBQSxVQUlnQztBQUMxQkUseUJBQW1CVixPQUx6QjtBQUFBLFVBTU1XLDJCQUEyQkQsZ0JBTmpDO0FBQUEsVUFNb0Q7QUFDOUNjLGFBQU8sSUFBSWxCLElBQUosQ0FBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEJDLGNBQTFCLEVBQTBDQyxnQkFBMUMsRUFBNERDLHdCQUE1RCxDQVBiOztBQVNBLGFBQU9hLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJwQixJQUFqQiIsImZpbGUiOiJ0aWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB6ZXJvMiwgYWRkMiwgc2NhbGUyLCBzdWJ0cmFjdDIgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBBTkdMRVNfU0NBTEFSLCBERUdSRUVTX1RPX1JBRElBTlMgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgVGlsdCB7XG4gIGNvbnN0cnVjdG9yKGZsaXBwZWQsIGFuZ2xlcywgcHJldmlvdXNBbmdsZXMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMuZmxpcHBlZCA9IGZsaXBwZWQ7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXM7XG4gICAgdGhpcy5wcmV2aW91c0FuZ2xlcyA9IHByZXZpb3VzQW5nbGVzO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRYQW5nbGUoKSB7XG4gICAgY29uc3Qgc2Vjb25kQW5nbGUgPSBzZWNvbmQodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHhBbmdsZSA9IHRoaXMuZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgIC1zZWNvbmRBbmdsZSA6XG4gICAgICAgICAgICAgICAgICAgICAgc2Vjb25kQW5nbGU7XG5cbiAgICByZXR1cm4geEFuZ2xlO1xuICB9XG4gIFxuICBnZXRZQW5nbGUoKSB7XG4gICAgY29uc3QgZmlyc3RBbmdsZSA9IGZpcnN0KHRoaXMuYW5nbGVzKSxcbiAgICAgICAgICB5QW5nbGUgPSB0aGlzLmZsaXBwZWQgP1xuICAgICAgICAgICAgICAgICAgICAgZmlyc3RBbmdsZSA6XG4gICAgICAgICAgICAgICAgICAgICAgLWZpcnN0QW5nbGU7XG5cbiAgICByZXR1cm4geUFuZ2xlO1xuICB9XG5cbiAgZ2V0WkFuZ2xlKCkge1xuICAgIGNvbnN0IHpBbmdsZSA9IDA7XG5cbiAgICByZXR1cm4gekFuZ2xlO1xuICB9XG4gIFxuICBnZXRBbmdsZXMoKSB7IC8vL1xuICAgIGNvbnN0IHhBbmdsZSA9IHRoaXMuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gdGhpcy5nZXRZQW5nbGUoKSxcbiAgICAgICAgICB6QW5nbGUgPSB0aGlzLmdldFpBbmdsZSgpLFxuICAgICAgICAgIGFuZ2xlcyA9IFtcbiAgICAgICAgICAgIHhBbmdsZSxcbiAgICAgICAgICAgIHlBbmdsZSxcbiAgICAgICAgICAgIHpBbmdsZVxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGFuZ2xlcztcbiAgfVxuICBcbiAgc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCkge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c0FuZ2xlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVzID0gdGhpcy5hbmdsZXM7XG4gIH1cblxuICB1cGRhdGVBbmdsZXMoKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gQU5HTEVTX1NDQUxBUiwgLy8vXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhcik7XG5cbiAgICB0aGlzLmFuZ2xlcyA9IGFkZDIodGhpcy5wcmV2aW91c0FuZ2xlcywgc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCkge1xuICAgIGNvbnN0IHNjYWxhciA9IGZsaXBwZWQgP1xuICAgICAgICAgICAgICAgICAgICAtREVHUkVFU19UT19SQURJQU5TIDpcbiAgICAgICAgICAgICAgICAgICAgICArREVHUkVFU19UT19SQURJQU5TLFxuICAgICAgICAgIGFuZ2xlcyA9IHNjYWxlMihpbml0aWFsQW5nbGVzLCBzY2FsYXIpLFxuICAgICAgICAgIHByZXZpb3VzQW5nbGVzID0gYW5nbGVzLCAgLy8vXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IHplcm8yKCksXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcywgIC8vL1xuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChmbGlwcGVkLCBhbmdsZXMsIHByZXZpb3VzQW5nbGVzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUaWx0O1xuIl19