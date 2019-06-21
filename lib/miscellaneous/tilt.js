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
          scaledRelativeMouseCoordinates = scale2(relativeMouseCoordinates, scalar);

      this.angles = add2(this.previousAngles, scaledRelativeMouseCoordinates);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsInZlY3Rvck1hdGhzIiwiYXJyYXlVdGlsaXRpZXMiLCJBTkdMRVNfU0NBTEFSIiwiZmlyc3QiLCJzZWNvbmQiLCJ6ZXJvMiIsImFkZDIiLCJzY2FsZTIiLCJzdWJ0cmFjdDIiLCJUaWx0IiwiZmxpcHBlZCIsImFuZ2xlcyIsInByZXZpb3VzQW5nbGVzIiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInNlY29uZEFuZ2xlIiwieEFuZ2xlIiwiZmlyc3RBbmdsZSIsInlBbmdsZSIsInpBbmdsZSIsImdldFhBbmdsZSIsImdldFlBbmdsZSIsImdldFpBbmdsZSIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInRpbHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2Qjs7QUFJTSxJQUFFRyxhQUFGLEdBQW9CSixTQUFwQixDQUFFSSxhQUFGO0FBQUEsSUFDRUMsS0FERixHQUNvQkYsY0FEcEIsQ0FDRUUsS0FERjtBQUFBLElBQ1NDLE1BRFQsR0FDb0JILGNBRHBCLENBQ1NHLE1BRFQ7QUFBQSxJQUVFQyxLQUZGLEdBRXFDTCxXQUZyQyxDQUVFSyxLQUZGO0FBQUEsSUFFU0MsSUFGVCxHQUVxQ04sV0FGckMsQ0FFU00sSUFGVDtBQUFBLElBRWVDLE1BRmYsR0FFcUNQLFdBRnJDLENBRWVPLE1BRmY7QUFBQSxJQUV1QkMsU0FGdkIsR0FFcUNSLFdBRnJDLENBRXVCUSxTQUZ2Qjs7SUFJQUMsSTtBQUNKLGdCQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixFQUE2QkMsY0FBN0IsRUFBNkNDLGdCQUE3QyxFQUErREMsd0JBQS9ELEVBQXlGO0FBQUE7O0FBQ3ZGLFNBQUtKLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztnQ0FFVztBQUNWLFVBQU1DLGNBQWNYLE9BQU8sS0FBS08sTUFBWixDQUFwQjtBQUFBLFVBQ01LLFNBQVMsS0FBS04sT0FBTCxHQUNDLENBQUNLLFdBREYsR0FFR0EsV0FIbEI7O0FBS0EsYUFBT0MsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxhQUFhZCxNQUFNLEtBQUtRLE1BQVgsQ0FBbkI7QUFBQSxVQUNNTyxTQUFTLEtBQUtSLE9BQUwsR0FDRU8sVUFERixHQUVHLENBQUNBLFVBSG5COztBQUtBLGFBQU9DLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsU0FBUyxDQUFmOztBQUVBLGFBQU9BLE1BQVA7QUFDRDs7O2dDQUVXO0FBQUU7QUFDWixVQUFNSCxTQUFTLEtBQUtJLFNBQUwsRUFBZjtBQUFBLFVBQ01GLFNBQVMsS0FBS0csU0FBTCxFQURmO0FBQUEsVUFFTUYsU0FBUyxLQUFLRyxTQUFMLEVBRmY7QUFBQSxVQUdNWCxTQUFTLENBQ1BLLE1BRE8sRUFFUEUsTUFGTyxFQUdQQyxNQUhPLENBSGY7O0FBU0EsYUFBT1IsTUFBUDtBQUNEOzs7d0NBRW1CRSxnQixFQUFrQjtBQUNwQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OztvREFFK0I7QUFDOUIsV0FBS0Msd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsV0FBS0QsY0FBTCxHQUFzQixLQUFLRCxNQUEzQjtBQUNEOzs7bUNBRWM7QUFDYixVQUFNWSxTQUFTckIsYUFBZjtBQUFBLFVBQThCO0FBQ3hCc0IsaUNBQTJCaEIsVUFBVSxLQUFLSyxnQkFBZixFQUFpQyxLQUFLQyx3QkFBdEMsQ0FEakM7QUFBQSxVQUVNVyxpQ0FBaUNsQixPQUFPaUIsd0JBQVAsRUFBaUNELE1BQWpDLENBRnZDOztBQUlBLFdBQUtaLE1BQUwsR0FBY0wsS0FBSyxLQUFLTSxjQUFWLEVBQTBCYSw4QkFBMUIsQ0FBZDtBQUNEOzs7Z0NBRWtCZixPLEVBQVM7QUFDMUIsVUFBTUMsU0FBU04sT0FBZjtBQUFBLFVBQ01PLGlCQUFpQkQsTUFEdkI7QUFBQSxVQUNnQztBQUMxQkUseUJBQW1CUixPQUZ6QjtBQUFBLFVBR01TLDJCQUEyQkQsZ0JBSGpDO0FBQUEsVUFHb0Q7QUFDOUNhLGFBQU8sSUFBSWpCLElBQUosQ0FBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEJDLGNBQTFCLEVBQTBDQyxnQkFBMUMsRUFBNERDLHdCQUE1RCxDQUpiOztBQU1BLGFBQU9ZLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJuQixJQUFqQiIsImZpbGUiOiJ0aWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IEFOR0xFU19TQ0FMQVIgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHplcm8yLCBhZGQyLCBzY2FsZTIsIHN1YnRyYWN0MiB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIFRpbHQge1xuICBjb25zdHJ1Y3RvcihmbGlwcGVkLCBhbmdsZXMsIHByZXZpb3VzQW5nbGVzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmZsaXBwZWQgPSBmbGlwcGVkO1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZXMgPSBwcmV2aW91c0FuZ2xlcztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0WEFuZ2xlKCkge1xuICAgIGNvbnN0IHNlY29uZEFuZ2xlID0gc2Vjb25kKHRoaXMuYW5nbGVzKSxcbiAgICAgICAgICB4QW5nbGUgPSB0aGlzLmZsaXBwZWQgP1xuICAgICAgICAgICAgICAgICAgICAtc2Vjb25kQW5nbGUgOlxuICAgICAgICAgICAgICAgICAgICAgIHNlY29uZEFuZ2xlO1xuXG4gICAgcmV0dXJuIHhBbmdsZTtcbiAgfVxuICBcbiAgZ2V0WUFuZ2xlKCkge1xuICAgIGNvbnN0IGZpcnN0QW5nbGUgPSBmaXJzdCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeUFuZ2xlID0gdGhpcy5mbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgIGZpcnN0QW5nbGUgOlxuICAgICAgICAgICAgICAgICAgICAgIC1maXJzdEFuZ2xlO1xuXG4gICAgcmV0dXJuIHlBbmdsZTtcbiAgfVxuXG4gIGdldFpBbmdsZSgpIHtcbiAgICBjb25zdCB6QW5nbGUgPSAwO1xuXG4gICAgcmV0dXJuIHpBbmdsZTtcbiAgfVxuICBcbiAgZ2V0QW5nbGVzKCkgeyAvLy9cbiAgICBjb25zdCB4QW5nbGUgPSB0aGlzLmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IHRoaXMuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgekFuZ2xlID0gdGhpcy5nZXRaQW5nbGUoKSxcbiAgICAgICAgICBhbmdsZXMgPSBbXG4gICAgICAgICAgICB4QW5nbGUsXG4gICAgICAgICAgICB5QW5nbGUsXG4gICAgICAgICAgICB6QW5nbGVcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiBhbmdsZXM7XG4gIH1cbiAgXG4gIHNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNBbmdsZXMoKSB7XG4gICAgdGhpcy5wcmV2aW91c0FuZ2xlcyA9IHRoaXMuYW5nbGVzO1xuICB9XG5cbiAgdXBkYXRlQW5nbGVzKCkge1xuICAgIGNvbnN0IHNjYWxhciA9IEFOR0xFU19TQ0FMQVIsIC8vL1xuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICBzY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpO1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQyKHRoaXMucHJldmlvdXNBbmdsZXMsIHNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZsaXBwZWQoZmxpcHBlZCkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IHplcm8yKCksXG4gICAgICAgICAgcHJldmlvdXNBbmdsZXMgPSBhbmdsZXMsICAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSxcbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGZsaXBwZWQsIGFuZ2xlcywgcHJldmlvdXNBbmdsZXMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbHQ7XG4iXX0=