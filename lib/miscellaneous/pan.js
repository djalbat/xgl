'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    offsetUtilities = require('../utilities/offset');

var OFFSET_SCALAR = constants.OFFSET_SCALAR,
    zero2 = vectorMaths.zero2,
    add3 = vectorMaths.add3,
    subtract2 = vectorMaths.subtract2,
    scale2 = vectorMaths.scale2,
    calculateXAngleOffset = offsetUtilities.calculateXAngleOffset,
    calculateYAngleOffset = offsetUtilities.calculateYAngleOffset;

var Pan = function () {
  function Pan(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Pan);

    this.offsets = offsets;
    this.previousOffsets = previousOffsets;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(Pan, [{
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
    key: 'updateOffset',
    value: function updateOffset(tilt) {
      var xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR,
          ///
      relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          scaledRelativeMouseCoordinates = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, scaledRelativeMouseCoordinates),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, scaledRelativeMouseCoordinates);

      this.offsets = add3(add3(this.previousOffsets, yAngleOffset), xAngleOffset); ///
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
      pan = new Pan(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates);

      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwidmVjdG9yTWF0aHMiLCJvZmZzZXRVdGlsaXRpZXMiLCJPRkZTRVRfU0NBTEFSIiwiemVybzIiLCJhZGQzIiwic3VidHJhY3QyIiwic2NhbGUyIiwiY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0IiwiY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0IiwiUGFuIiwib2Zmc2V0cyIsInByZXZpb3VzT2Zmc2V0cyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJ0aWx0IiwieEFuZ2xlIiwiZ2V0WEFuZ2xlIiwieUFuZ2xlIiwiZ2V0WUFuZ2xlIiwic2NhbGFyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwic2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwieUFuZ2xlT2Zmc2V0IiwieEFuZ2xlT2Zmc2V0IiwiaW5pdGlhbE9mZnNldHMiLCJwYW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSxxQkFBUixDQUZ4Qjs7QUFJTSxJQUFFRyxhQUFGLEdBQW9CSixTQUFwQixDQUFFSSxhQUFGO0FBQUEsSUFDRUMsS0FERixHQUNxQ0gsV0FEckMsQ0FDRUcsS0FERjtBQUFBLElBQ1NDLElBRFQsR0FDcUNKLFdBRHJDLENBQ1NJLElBRFQ7QUFBQSxJQUNlQyxTQURmLEdBQ3FDTCxXQURyQyxDQUNlSyxTQURmO0FBQUEsSUFDMEJDLE1BRDFCLEdBQ3FDTixXQURyQyxDQUMwQk0sTUFEMUI7QUFBQSxJQUVFQyxxQkFGRixHQUVtRE4sZUFGbkQsQ0FFRU0scUJBRkY7QUFBQSxJQUV5QkMscUJBRnpCLEdBRW1EUCxlQUZuRCxDQUV5Qk8scUJBRnpCOztJQUlBQyxHO0FBQ0osZUFBWUMsT0FBWixFQUFxQkMsZUFBckIsRUFBc0NDLGdCQUF0QyxFQUF3REMsd0JBQXhELEVBQWtGO0FBQUE7O0FBQ2hGLFNBQUtILE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0gsT0FBWjtBQUNEOzs7d0NBRW1CRSxnQixFQUFrQjtBQUNwQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OztvREFFK0I7QUFDOUIsV0FBS0Msd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0QsZUFBTCxHQUF1QixLQUFLRCxPQUE1QjtBQUNEOzs7aUNBRVlJLEksRUFBTTtBQUNqQixVQUFNQyxTQUFTRCxLQUFLRSxTQUFMLEVBQWY7QUFBQSxVQUNNQyxTQUFTSCxLQUFLSSxTQUFMLEVBRGY7QUFBQSxVQUVNQyxTQUFTakIsYUFGZjtBQUFBLFVBRThCO0FBQ3hCa0IsaUNBQTJCZixVQUFVLEtBQUtPLGdCQUFmLEVBQWlDLEtBQUtDLHdCQUF0QyxDQUhqQztBQUFBLFVBSU1RLGlDQUFpQ2YsT0FBT2Msd0JBQVAsRUFBaUNELE1BQWpDLENBSnZDO0FBQUEsVUFLTUcsZUFBZWQsc0JBQXNCUyxNQUF0QixFQUE4QkksOEJBQTlCLENBTHJCO0FBQUEsVUFNTUUsZUFBZWhCLHNCQUFzQlEsTUFBdEIsRUFBOEJFLE1BQTlCLEVBQXNDSSw4QkFBdEMsQ0FOckI7O0FBUUEsV0FBS1gsT0FBTCxHQUFlTixLQUFLQSxLQUFLLEtBQUtPLGVBQVYsRUFBMkJXLFlBQTNCLENBQUwsRUFBK0NDLFlBQS9DLENBQWYsQ0FUaUIsQ0FTNkQ7QUFDL0U7Ozt1Q0FFeUJDLGMsRUFBZ0I7QUFDeEMsVUFBTWQsVUFBVWMsY0FBaEI7QUFBQSxVQUFnQztBQUMxQmIsd0JBQWtCRCxPQUR4QjtBQUFBLFVBQ2tDO0FBQzVCRSx5QkFBbUJULE9BRnpCO0FBQUEsVUFHTVUsMkJBQTJCRCxnQkFIakM7QUFBQSxVQUdvRDtBQUM5Q2EsWUFBTSxJQUFJaEIsR0FBSixDQUFRQyxPQUFSLEVBQWlCQyxlQUFqQixFQUFrQ0MsZ0JBQWxDLEVBQW9EQyx3QkFBcEQsQ0FKWjs7QUFNQSxhQUFPWSxHQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsR0FBakIiLCJmaWxlIjoicGFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBvZmZzZXRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvb2Zmc2V0Jyk7XG5cbmNvbnN0IHsgT0ZGU0VUX1NDQUxBUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyB6ZXJvMiwgYWRkMywgc3VidHJhY3QyLCBzY2FsZTIgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBjYWxjdWxhdGVYQW5nbGVPZmZzZXQsIGNhbGN1bGF0ZVlBbmdsZU9mZnNldCB9ID0gb2Zmc2V0VXRpbGl0aWVzO1xuXG5jbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBwcmV2aW91c09mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldHMgPSBwcmV2aW91c09mZnNldHM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNPZmZzZXRzKCkge1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXRzID0gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgdXBkYXRlT2Zmc2V0KHRpbHQpIHtcbiAgICBjb25zdCB4QW5nbGUgPSB0aWx0LmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IHRpbHQuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgc2NhbGFyID0gT0ZGU0VUX1NDQUxBUiwgLy8vXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhciksXG4gICAgICAgICAgeUFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0KHlBbmdsZSwgc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB4QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVYQW5nbGVPZmZzZXQoeEFuZ2xlLCB5QW5nbGUsIHNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKGFkZDModGhpcy5wcmV2aW91c09mZnNldHMsIHlBbmdsZU9mZnNldCksIHhBbmdsZU9mZnNldCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIHByZXZpb3VzT2Zmc2V0cyA9IG9mZnNldHMsICAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSxcbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzLCBwcmV2aW91c09mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG4gICAgXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbjtcbiJdfQ==