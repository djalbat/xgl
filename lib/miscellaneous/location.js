'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    offsetUtilities = require('../utilities/offset');

var DELTA_SCALAR = constants.DELTA_SCALAR,
    OFFSET_SCALAR = constants.OFFSET_SCALAR,
    zero2 = vectorMaths.zero2,
    add3 = vectorMaths.add3,
    subtract2 = vectorMaths.subtract2,
    scale2 = vectorMaths.scale2,
    calculateXAngleOffset = offsetUtilities.calculateXAngleOffset,
    calculateYAngleOffset = offsetUtilities.calculateYAngleOffset,
    calculateZAngleOffset = offsetUtilities.calculateZAngleOffset;

var Location = function () {
  function Location(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates, scaledRelativeMouseCoordinates) {
    _classCallCheck(this, Location);

    this.offsets = offsets;
    this.previousOffsets = previousOffsets;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
    this.scaledRelativeMouseCoordinates = scaledRelativeMouseCoordinates;
  }

  _createClass(Location, [{
    key: 'getOffsets',
    value: function getOffsets() {
      return this.offsets;
    }
  }, {
    key: 'setMouseCoordinates',
    value: function setMouseCoordinates(mouseCoordinates) {
      this.mouseCoordinates = mouseCoordinates;
    }
  }, {
    key: 'resetScaledRelativeMouseCoordinates',
    value: function resetScaledRelativeMouseCoordinates() {
      this.scaledRelativeMouseCoordinates = zero2();
    }
  }, {
    key: 'resetPreviousMouseCoordinates',
    value: function resetPreviousMouseCoordinates() {
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'resetPreviousOffsets',
    value: function resetPreviousOffsets() {
      this.previousOffsets = this.offsets;
    }
  }, {
    key: 'updateXYOffset',
    value: function updateXYOffset(tilt) {
      var xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR,
          ///
      relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates);

      this.scaledRelativeMouseCoordinates = scale2(relativeMouseCoordinates, scalar);

      var yAngleOffset = calculateYAngleOffset(yAngle, this.scaledRelativeMouseCoordinates),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, this.scaledRelativeMouseCoordinates);

      this.offsets = add3(add3(this.previousOffsets, yAngleOffset), xAngleOffset); ///
    }
  }, {
    key: 'updateZOffset',
    value: function updateZOffset(delta, tilt) {
      var xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = DELTA_SCALAR,
          ///
      thirdRelativeOffset = delta * scalar,
          zAngleOffset = calculateZAngleOffset(xAngle, yAngle, thirdRelativeOffset);

      this.previousOffsets = add3(this.previousOffsets, zAngleOffset);

      this.updateXYOffset(tilt);
    }
  }], [{
    key: 'fromInitialOffsets',
    value: function fromInitialOffsets(initialOffsets) {
      var offsets = initialOffsets,
          ///
      previousOffsets = offsets,
          ///
      mouseCoordinates = zero2(),
          previousMouseCoordinates = mouseCoordinates,
          ///
      scaledRelativeMouseCoordinates = zero2(),
          location = new Location(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates, scaledRelativeMouseCoordinates);

      return location;
    }
  }]);

  return Location;
}();

module.exports = Location;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsIm9mZnNldFV0aWxpdGllcyIsIkRFTFRBX1NDQUxBUiIsIk9GRlNFVF9TQ0FMQVIiLCJ6ZXJvMiIsImFkZDMiLCJzdWJ0cmFjdDIiLCJzY2FsZTIiLCJjYWxjdWxhdGVYQW5nbGVPZmZzZXQiLCJjYWxjdWxhdGVZQW5nbGVPZmZzZXQiLCJjYWxjdWxhdGVaQW5nbGVPZmZzZXQiLCJMb2NhdGlvbiIsIm9mZnNldHMiLCJwcmV2aW91c09mZnNldHMiLCJtb3VzZUNvb3JkaW5hdGVzIiwicHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwic2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwidGlsdCIsInhBbmdsZSIsImdldFhBbmdsZSIsInlBbmdsZSIsImdldFlBbmdsZSIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInlBbmdsZU9mZnNldCIsInhBbmdsZU9mZnNldCIsImRlbHRhIiwidGhpcmRSZWxhdGl2ZU9mZnNldCIsInpBbmdsZU9mZnNldCIsInVwZGF0ZVhZT2Zmc2V0IiwiaW5pdGlhbE9mZnNldHMiLCJsb2NhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRnhCOztJQUlRRyxZLEdBQWdDSixTLENBQWhDSSxZO0lBQWNDLGEsR0FBa0JMLFMsQ0FBbEJLLGE7SUFDZEMsSyxHQUFtQ0osVyxDQUFuQ0ksSztJQUFPQyxJLEdBQTRCTCxXLENBQTVCSyxJO0lBQU1DLFMsR0FBc0JOLFcsQ0FBdEJNLFM7SUFBV0MsTSxHQUFXUCxXLENBQVhPLE07SUFDeEJDLHFCLEdBQXdFUCxlLENBQXhFTyxxQjtJQUF1QkMscUIsR0FBaURSLGUsQ0FBakRRLHFCO0lBQXVCQyxxQixHQUEwQlQsZSxDQUExQlMscUI7O0lBRWhEQyxRO0FBQ0osb0JBQVlDLE9BQVosRUFBcUJDLGVBQXJCLEVBQXNDQyxnQkFBdEMsRUFBd0RDLHdCQUF4RCxFQUFrRkMsOEJBQWxGLEVBQWtIO0FBQUE7O0FBQ2hILFNBQUtKLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDQSxTQUFLQyw4QkFBTCxHQUFzQ0EsOEJBQXRDO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtKLE9BQVo7QUFDRDs7O3dDQUVtQkUsZ0IsRUFBa0I7QUFDcEMsV0FBS0EsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEOzs7MERBRXFDO0FBQ3BDLFdBQUtFLDhCQUFMLEdBQXNDWixPQUF0QztBQUNEOzs7b0RBRStCO0FBQzlCLFdBQUtXLHdCQUFMLEdBQWdDLEtBQUtELGdCQUFyQztBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtELGVBQUwsR0FBdUIsS0FBS0QsT0FBNUI7QUFDRDs7O21DQUVjSyxJLEVBQU07QUFDbkIsVUFBTUMsU0FBU0QsS0FBS0UsU0FBTCxFQUFmO0FBQUEsVUFDTUMsU0FBU0gsS0FBS0ksU0FBTCxFQURmO0FBQUEsVUFFTUMsU0FBU25CLGFBRmY7QUFBQSxVQUU4QjtBQUN4Qm9CLGlDQUEyQmpCLFVBQVUsS0FBS1EsZ0JBQWYsRUFBaUMsS0FBS0Msd0JBQXRDLENBSGpDOztBQUtBLFdBQUtDLDhCQUFMLEdBQXNDVCxPQUFPZ0Isd0JBQVAsRUFBaUNELE1BQWpDLENBQXRDOztBQUVBLFVBQU1FLGVBQWVmLHNCQUFzQlcsTUFBdEIsRUFBOEIsS0FBS0osOEJBQW5DLENBQXJCO0FBQUEsVUFDTVMsZUFBZWpCLHNCQUFzQlUsTUFBdEIsRUFBOEJFLE1BQTlCLEVBQXNDLEtBQUtKLDhCQUEzQyxDQURyQjs7QUFHQSxXQUFLSixPQUFMLEdBQWVQLEtBQUtBLEtBQUssS0FBS1EsZUFBVixFQUEyQlcsWUFBM0IsQ0FBTCxFQUErQ0MsWUFBL0MsQ0FBZixDQVhtQixDQVcyRDtBQUMvRTs7O2tDQUVhQyxLLEVBQU9ULEksRUFBTTtBQUN6QixVQUFNQyxTQUFTRCxLQUFLRSxTQUFMLEVBQWY7QUFBQSxVQUNNQyxTQUFTSCxLQUFLSSxTQUFMLEVBRGY7QUFBQSxVQUVNQyxTQUFTcEIsWUFGZjtBQUFBLFVBRTZCO0FBQ3ZCeUIsNEJBQXNCRCxRQUFRSixNQUhwQztBQUFBLFVBSU1NLGVBQWVsQixzQkFBc0JRLE1BQXRCLEVBQThCRSxNQUE5QixFQUFzQ08sbUJBQXRDLENBSnJCOztBQU1BLFdBQUtkLGVBQUwsR0FBdUJSLEtBQUssS0FBS1EsZUFBVixFQUEyQmUsWUFBM0IsQ0FBdkI7O0FBRUEsV0FBS0MsY0FBTCxDQUFvQlosSUFBcEI7QUFDRDs7O3VDQUV5QmEsYyxFQUFnQjtBQUN4QyxVQUFNbEIsVUFBVWtCLGNBQWhCO0FBQUEsVUFBZ0M7QUFDMUJqQix3QkFBa0JELE9BRHhCO0FBQUEsVUFDa0M7QUFDNUJFLHlCQUFtQlYsT0FGekI7QUFBQSxVQUdNVywyQkFBMkJELGdCQUhqQztBQUFBLFVBR29EO0FBQzlDRSx1Q0FBaUNaLE9BSnZDO0FBQUEsVUFLTTJCLFdBQVcsSUFBSXBCLFFBQUosQ0FBYUMsT0FBYixFQUFzQkMsZUFBdEIsRUFBdUNDLGdCQUF2QyxFQUF5REMsd0JBQXpELEVBQW1GQyw4QkFBbkYsQ0FMakI7O0FBT0EsYUFBT2UsUUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnRCLFFBQWpCIiwiZmlsZSI6ImxvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBvZmZzZXRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvb2Zmc2V0Jyk7XG5cbmNvbnN0IHsgREVMVEFfU0NBTEFSLCBPRkZTRVRfU0NBTEFSIH0gPSBjb25zdGFudHMsXG4gICAgICB7IHplcm8yLCBhZGQzLCBzdWJ0cmFjdDIsIHNjYWxlMiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IGNhbGN1bGF0ZVhBbmdsZU9mZnNldCwgY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0LCBjYWxjdWxhdGVaQW5nbGVPZmZzZXQgfSA9IG9mZnNldFV0aWxpdGllcztcblxuY2xhc3MgTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBwcmV2aW91c09mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcywgc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0cyA9IHByZXZpb3VzT2Zmc2V0cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMuc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0U2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKCkge1xuICAgIHRoaXMuc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKTtcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCkge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c09mZnNldHMoKSB7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldHMgPSB0aGlzLm9mZnNldHM7XG4gIH1cblxuICB1cGRhdGVYWU9mZnNldCh0aWx0KSB7XG4gICAgY29uc3QgeEFuZ2xlID0gdGlsdC5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSB0aWx0LmdldFlBbmdsZSgpLFxuICAgICAgICAgIHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMuc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKTtcblxuICAgIGNvbnN0IHlBbmdsZU9mZnNldCA9IGNhbGN1bGF0ZVlBbmdsZU9mZnNldCh5QW5nbGUsIHRoaXMuc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB4QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVYQW5nbGVPZmZzZXQoeEFuZ2xlLCB5QW5nbGUsIHRoaXMuc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDMoYWRkMyh0aGlzLnByZXZpb3VzT2Zmc2V0cywgeUFuZ2xlT2Zmc2V0KSwgeEFuZ2xlT2Zmc2V0KTsgIC8vL1xuICB9XG5cbiAgdXBkYXRlWk9mZnNldChkZWx0YSwgdGlsdCkge1xuICAgIGNvbnN0IHhBbmdsZSA9IHRpbHQuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gdGlsdC5nZXRZQW5nbGUoKSxcbiAgICAgICAgICBzY2FsYXIgPSBERUxUQV9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHRoaXJkUmVsYXRpdmVPZmZzZXQgPSBkZWx0YSAqIHNjYWxhcixcbiAgICAgICAgICB6QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVaQW5nbGVPZmZzZXQoeEFuZ2xlLCB5QW5nbGUsIHRoaXJkUmVsYXRpdmVPZmZzZXQpO1xuXG4gICAgdGhpcy5wcmV2aW91c09mZnNldHMgPSBhZGQzKHRoaXMucHJldmlvdXNPZmZzZXRzLCB6QW5nbGVPZmZzZXQpO1xuXG4gICAgdGhpcy51cGRhdGVYWU9mZnNldCh0aWx0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIHByZXZpb3VzT2Zmc2V0cyA9IG9mZnNldHMsICAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSxcbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSxcbiAgICAgICAgICBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbihvZmZzZXRzLCBwcmV2aW91c09mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcywgc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICBcbiAgICByZXR1cm4gbG9jYXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2NhdGlvbjtcbiJdfQ==