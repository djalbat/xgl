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

      console.log(this.angles);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsInZlY3Rvck1hdGhzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsInplcm8yIiwiYWRkMyIsInRyYW5zZm9ybTMiLCJzY2FsZTMiLCJzdWJ0cmFjdDIiLCJBTkdMRVNfU0NBTEFSIiwiREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiIsIlRpbHQiLCJmbGlwcGVkIiwiYW5nbGVzIiwicHJldmlvdXNBbmdsZXMiLCJtb3VzZUNvb3JkaW5hdGVzIiwicHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwiZmlyc3RBbmdsZSIsInhBbmdsZSIsInNlY29uZEFuZ2xlIiwieUFuZ2xlIiwiekFuZ2xlIiwic2NhbGFyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibWF0cml4IiwicmVsYXRpdmVBbmdsZXMiLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbEFuZ2xlcyIsInRpbHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCOztJQUlRRyxLLEdBQWtCRCxjLENBQWxCQyxLO0lBQU9DLE0sR0FBV0YsYyxDQUFYRSxNO0lBQ1BDLEssR0FBK0NKLFcsQ0FBL0NJLEs7SUFBT0MsSSxHQUF3Q0wsVyxDQUF4Q0ssSTtJQUFNQyxVLEdBQWtDTixXLENBQWxDTSxVO0lBQVlDLE0sR0FBc0JQLFcsQ0FBdEJPLE07SUFBUUMsUyxHQUFjUixXLENBQWRRLFM7SUFDakNDLGEsR0FBNkNYLFMsQ0FBN0NXLGE7SUFBZUMseUIsR0FBOEJaLFMsQ0FBOUJZLHlCOztJQUVqQkMsSTtBQUNKLGdCQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixFQUE2QkMsY0FBN0IsRUFBNkNDLGdCQUE3QyxFQUErREMsd0JBQS9ELEVBQXlGO0FBQUE7O0FBQ3ZGLFNBQUtKLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztnQ0FFVztBQUNWLFVBQU1DLGFBQWFmLE1BQU0sS0FBS1csTUFBWCxDQUFuQjtBQUFBLFVBQ01LLFNBQVNELFVBRGYsQ0FEVSxDQUVrQjs7QUFFNUIsYUFBT0MsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxjQUFjaEIsT0FBTyxLQUFLVSxNQUFaLENBQXBCO0FBQUEsVUFDTU8sU0FBU0QsV0FEZixDQURVLENBRWtCOztBQUU1QixhQUFPQyxNQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1DLFNBQVMsQ0FBZjs7QUFFQSxhQUFPQSxNQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS1IsTUFBWjtBQUNEOzs7d0NBRW1CRSxnQixFQUFrQjtBQUNwQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OztvREFFK0I7QUFDOUIsV0FBS0Msd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsV0FBS0QsY0FBTCxHQUFzQixLQUFLRCxNQUEzQjtBQUNEOzs7bUNBRWM7QUFDYixVQUFNUyxTQUFTLEtBQUtWLE9BQUwsR0FDRUgsYUFERixHQUVHLENBQUNBLGFBRm5CO0FBQUEsVUFHTWMsMkJBQTJCZixVQUFVLEtBQUtPLGdCQUFmLEVBQWlDLEtBQUtDLHdCQUF0QyxDQUhqQztBQUFBLFVBSU1RLFNBQVMsQ0FFRCxDQUZDLEVBRUVGLE1BRkYsRUFFVSxDQUZWLEVBR1AsQ0FBQ0EsTUFITSxFQUdPLENBSFAsRUFHVSxDQUhWLEVBSUQsQ0FKQyxFQUlPLENBSlAsRUFJVSxDQUpWLENBSmY7QUFBQSxVQVdNRyxpQkFBaUJuQix3Q0FBZ0JpQix3QkFBaEIsSUFBMEMsQ0FBMUMsSUFBK0NDLE1BQS9DLENBWHZCLENBRGEsQ0FZbUU7O0FBRWhGLFdBQUtYLE1BQUwsR0FBY1IsS0FBSyxLQUFLUyxjQUFWLEVBQTBCVyxjQUExQixDQUFkOztBQUVBQyxjQUFRQyxHQUFSLENBQVksS0FBS2QsTUFBakI7QUFDRDs7O2dEQUVrQ2UsYSxFQUFlaEIsTyxFQUFTO0FBQ3pELFVBQU1VLFNBQVNWLFVBQ0MsQ0FBQ0YseUJBREYsR0FFRyxDQUFDQSx5QkFGbkI7QUFBQSxVQUdNRyxTQUFTTixvQ0FBWXFCLGFBQVosSUFBMkIsQ0FBM0IsSUFBZ0NOLE1BQWhDLENBSGY7QUFBQSxVQUd3RDtBQUNsRFIsdUJBQWlCRCxNQUp2QjtBQUFBLFVBSWdDO0FBQzFCRSx5QkFBbUJYLE9BTHpCO0FBQUEsVUFNTVksMkJBQTJCRCxnQkFOakM7QUFBQSxVQU1vRDtBQUM5Q2MsYUFBTyxJQUFJbEIsSUFBSixDQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQkMsY0FBMUIsRUFBMENDLGdCQUExQyxFQUE0REMsd0JBQTVELENBUGI7O0FBU0EsYUFBT2EsSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnBCLElBQWpCIiwiZmlsZSI6InRpbHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHplcm8yLCBhZGQzLCB0cmFuc2Zvcm0zLCBzY2FsZTMsIHN1YnRyYWN0MiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IEFOR0xFU19TQ0FMQVIsIERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgVGlsdCB7XG4gIGNvbnN0cnVjdG9yKGZsaXBwZWQsIGFuZ2xlcywgcHJldmlvdXNBbmdsZXMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMuZmxpcHBlZCA9IGZsaXBwZWQ7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXM7XG4gICAgdGhpcy5wcmV2aW91c0FuZ2xlcyA9IHByZXZpb3VzQW5nbGVzO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRYQW5nbGUoKSB7XG4gICAgY29uc3QgZmlyc3RBbmdsZSA9IGZpcnN0KHRoaXMuYW5nbGVzKSxcbiAgICAgICAgICB4QW5nbGUgPSBmaXJzdEFuZ2xlOyAgLy8vXG5cbiAgICByZXR1cm4geEFuZ2xlO1xuICB9XG4gIFxuICBnZXRZQW5nbGUoKSB7XG4gICAgY29uc3Qgc2Vjb25kQW5nbGUgPSBzZWNvbmQodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHlBbmdsZSA9IHNlY29uZEFuZ2xlOyAvLy9cblxuICAgIHJldHVybiB5QW5nbGU7XG4gIH1cblxuICBnZXRaQW5nbGUoKSB7XG4gICAgY29uc3QgekFuZ2xlID0gMDtcblxuICAgIHJldHVybiB6QW5nbGU7XG4gIH1cbiAgXG4gIGdldEFuZ2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbmdsZXM7XG4gIH1cbiAgXG4gIHNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNBbmdsZXMoKSB7XG4gICAgdGhpcy5wcmV2aW91c0FuZ2xlcyA9IHRoaXMuYW5nbGVzO1xuICB9XG5cbiAgdXBkYXRlQW5nbGVzKCkge1xuICAgIGNvbnN0IHNjYWxhciA9IHRoaXMuZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgICBBTkdMRVNfU0NBTEFSIDpcbiAgICAgICAgICAgICAgICAgICAgICAtQU5HTEVTX1NDQUxBUixcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgbWF0cml4ID0gW1xuXG4gICAgICAgICAgICAgICAgICAwLCBzY2FsYXIsIDAsXG4gICAgICAgICAgICAtc2NhbGFyLCAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgICAwLCAgICAgIDAsIDAsXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVzID0gdHJhbnNmb3JtMyhbIC4uLnJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMCBdLCBtYXRyaXgpOyAgLy8vXG5cbiAgICB0aGlzLmFuZ2xlcyA9IGFkZDModGhpcy5wcmV2aW91c0FuZ2xlcywgcmVsYXRpdmVBbmdsZXMpO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5hbmdsZXMpXG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBmbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgLURFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIgOlxuICAgICAgICAgICAgICAgICAgICAgICtERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSLFxuICAgICAgICAgIGFuZ2xlcyA9IHNjYWxlMyhbIC4uLmluaXRpYWxBbmdsZXMsIDAgXSwgc2NhbGFyKSwgLy8vXG4gICAgICAgICAgcHJldmlvdXNBbmdsZXMgPSBhbmdsZXMsICAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSxcbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGZsaXBwZWQsIGFuZ2xlcywgcHJldmlvdXNBbmdsZXMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbHQ7XG4iXX0=