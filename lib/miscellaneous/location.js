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

      var yAngleOffset = calculateYAngleOffset(yAngle, scaledRelativeMouseCoordinates),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, scaledRelativeMouseCoordinates);

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
    key: 'fromInitialOffset',
    value: function fromInitialOffset(initialOffset) {
      var offsets = initialOffset,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsIm9mZnNldFV0aWxpdGllcyIsIkRFTFRBX1NDQUxBUiIsIk9GRlNFVF9TQ0FMQVIiLCJ6ZXJvMiIsImFkZDMiLCJzdWJ0cmFjdDIiLCJzY2FsZTIiLCJjYWxjdWxhdGVYQW5nbGVPZmZzZXQiLCJjYWxjdWxhdGVZQW5nbGVPZmZzZXQiLCJjYWxjdWxhdGVaQW5nbGVPZmZzZXQiLCJMb2NhdGlvbiIsIm9mZnNldHMiLCJwcmV2aW91c09mZnNldHMiLCJtb3VzZUNvb3JkaW5hdGVzIiwicHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwic2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwidGlsdCIsInhBbmdsZSIsImdldFhBbmdsZSIsInlBbmdsZSIsImdldFlBbmdsZSIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInlBbmdsZU9mZnNldCIsInhBbmdsZU9mZnNldCIsImRlbHRhIiwidGhpcmRSZWxhdGl2ZU9mZnNldCIsInpBbmdsZU9mZnNldCIsInVwZGF0ZVhZT2Zmc2V0IiwiaW5pdGlhbE9mZnNldCIsImxvY2F0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7O0lBSVFHLFksR0FBZ0NKLFMsQ0FBaENJLFk7SUFBY0MsYSxHQUFrQkwsUyxDQUFsQkssYTtJQUNkQyxLLEdBQW1DSixXLENBQW5DSSxLO0lBQU9DLEksR0FBNEJMLFcsQ0FBNUJLLEk7SUFBTUMsUyxHQUFzQk4sVyxDQUF0Qk0sUztJQUFXQyxNLEdBQVdQLFcsQ0FBWE8sTTtJQUN4QkMscUIsR0FBd0VQLGUsQ0FBeEVPLHFCO0lBQXVCQyxxQixHQUFpRFIsZSxDQUFqRFEscUI7SUFBdUJDLHFCLEdBQTBCVCxlLENBQTFCUyxxQjs7SUFFaERDLFE7QUFDSixvQkFBWUMsT0FBWixFQUFxQkMsZUFBckIsRUFBc0NDLGdCQUF0QyxFQUF3REMsd0JBQXhELEVBQWtGQyw4QkFBbEYsRUFBa0g7QUFBQTs7QUFDaEgsU0FBS0osT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0NBLHdCQUFoQztBQUNBLFNBQUtDLDhCQUFMLEdBQXNDQSw4QkFBdEM7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0osT0FBWjtBQUNEOzs7d0NBRW1CRSxnQixFQUFrQjtBQUNwQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OzswREFFcUM7QUFDcEMsV0FBS0UsOEJBQUwsR0FBc0NaLE9BQXRDO0FBQ0Q7OztvREFFK0I7QUFDOUIsV0FBS1csd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0QsZUFBTCxHQUF1QixLQUFLRCxPQUE1QjtBQUNEOzs7bUNBRWNLLEksRUFBTTtBQUNuQixVQUFNQyxTQUFTRCxLQUFLRSxTQUFMLEVBQWY7QUFBQSxVQUNNQyxTQUFTSCxLQUFLSSxTQUFMLEVBRGY7QUFBQSxVQUVNQyxTQUFTbkIsYUFGZjtBQUFBLFVBRThCO0FBQ3hCb0IsaUNBQTJCakIsVUFBVSxLQUFLUSxnQkFBZixFQUFpQyxLQUFLQyx3QkFBdEMsQ0FIakM7O0FBS0EsV0FBS0MsOEJBQUwsR0FBc0NULE9BQU9nQix3QkFBUCxFQUFpQ0QsTUFBakMsQ0FBdEM7O0FBRUEsVUFBTUUsZUFBZWYsc0JBQXNCVyxNQUF0QixFQUE4QkosOEJBQTlCLENBQXJCO0FBQUEsVUFDTVMsZUFBZWpCLHNCQUFzQlUsTUFBdEIsRUFBOEJFLE1BQTlCLEVBQXNDSiw4QkFBdEMsQ0FEckI7O0FBR0EsV0FBS0osT0FBTCxHQUFlUCxLQUFLQSxLQUFLLEtBQUtRLGVBQVYsRUFBMkJXLFlBQTNCLENBQUwsRUFBK0NDLFlBQS9DLENBQWYsQ0FYbUIsQ0FXMkQ7QUFDL0U7OztrQ0FFYUMsSyxFQUFPVCxJLEVBQU07QUFDekIsVUFBTUMsU0FBU0QsS0FBS0UsU0FBTCxFQUFmO0FBQUEsVUFDTUMsU0FBU0gsS0FBS0ksU0FBTCxFQURmO0FBQUEsVUFFTUMsU0FBU3BCLFlBRmY7QUFBQSxVQUU2QjtBQUN2QnlCLDRCQUFzQkQsUUFBUUosTUFIcEM7QUFBQSxVQUlNTSxlQUFlbEIsc0JBQXNCUSxNQUF0QixFQUE4QkUsTUFBOUIsRUFBc0NPLG1CQUF0QyxDQUpyQjs7QUFNQSxXQUFLZCxlQUFMLEdBQXVCUixLQUFLLEtBQUtRLGVBQVYsRUFBMkJlLFlBQTNCLENBQXZCOztBQUVBLFdBQUtDLGNBQUwsQ0FBb0JaLElBQXBCO0FBQ0Q7OztzQ0FFd0JhLGEsRUFBZTtBQUN0QyxVQUFNbEIsVUFBVWtCLGFBQWhCO0FBQUEsVUFBK0I7QUFDekJqQix3QkFBa0JELE9BRHhCO0FBQUEsVUFDa0M7QUFDNUJFLHlCQUFtQlYsT0FGekI7QUFBQSxVQUdNVywyQkFBMkJELGdCQUhqQztBQUFBLFVBR29EO0FBQzlDRSx1Q0FBaUNaLE9BSnZDO0FBQUEsVUFLTTJCLFdBQVcsSUFBSXBCLFFBQUosQ0FBYUMsT0FBYixFQUFzQkMsZUFBdEIsRUFBdUNDLGdCQUF2QyxFQUF5REMsd0JBQXpELEVBQW1GQyw4QkFBbkYsQ0FMakI7O0FBT0EsYUFBT2UsUUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnRCLFFBQWpCIiwiZmlsZSI6ImxvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBvZmZzZXRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvb2Zmc2V0Jyk7XG5cbmNvbnN0IHsgREVMVEFfU0NBTEFSLCBPRkZTRVRfU0NBTEFSIH0gPSBjb25zdGFudHMsXG4gICAgICB7IHplcm8yLCBhZGQzLCBzdWJ0cmFjdDIsIHNjYWxlMiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IGNhbGN1bGF0ZVhBbmdsZU9mZnNldCwgY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0LCBjYWxjdWxhdGVaQW5nbGVPZmZzZXQgfSA9IG9mZnNldFV0aWxpdGllcztcblxuY2xhc3MgTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBwcmV2aW91c09mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcywgc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0cyA9IHByZXZpb3VzT2Zmc2V0cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMuc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0U2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKCkge1xuICAgIHRoaXMuc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKTtcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCkge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c09mZnNldHMoKSB7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldHMgPSB0aGlzLm9mZnNldHM7XG4gIH1cblxuICB1cGRhdGVYWU9mZnNldCh0aWx0KSB7XG4gICAgY29uc3QgeEFuZ2xlID0gdGlsdC5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSB0aWx0LmdldFlBbmdsZSgpLFxuICAgICAgICAgIHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMuc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKTtcblxuICAgIGNvbnN0IHlBbmdsZU9mZnNldCA9IGNhbGN1bGF0ZVlBbmdsZU9mZnNldCh5QW5nbGUsIHNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgeEFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0KHhBbmdsZSwgeUFuZ2xlLCBzY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyhhZGQzKHRoaXMucHJldmlvdXNPZmZzZXRzLCB5QW5nbGVPZmZzZXQpLCB4QW5nbGVPZmZzZXQpOyAgLy8vXG4gIH1cblxuICB1cGRhdGVaT2Zmc2V0KGRlbHRhLCB0aWx0KSB7XG4gICAgY29uc3QgeEFuZ2xlID0gdGlsdC5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSB0aWx0LmdldFlBbmdsZSgpLFxuICAgICAgICAgIHNjYWxhciA9IERFTFRBX1NDQUxBUiwgLy8vXG4gICAgICAgICAgdGhpcmRSZWxhdGl2ZU9mZnNldCA9IGRlbHRhICogc2NhbGFyLFxuICAgICAgICAgIHpBbmdsZU9mZnNldCA9IGNhbGN1bGF0ZVpBbmdsZU9mZnNldCh4QW5nbGUsIHlBbmdsZSwgdGhpcmRSZWxhdGl2ZU9mZnNldCk7XG5cbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0cyA9IGFkZDModGhpcy5wcmV2aW91c09mZnNldHMsIHpBbmdsZU9mZnNldCk7XG5cbiAgICB0aGlzLnVwZGF0ZVhZT2Zmc2V0KHRpbHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldCwgLy8vXG4gICAgICAgICAgcHJldmlvdXNPZmZzZXRzID0gb2Zmc2V0cywgIC8vL1xuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLFxuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICBzY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLFxuICAgICAgICAgIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKG9mZnNldHMsIHByZXZpb3VzT2Zmc2V0cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzLCBzY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvY2F0aW9uO1xuIl19