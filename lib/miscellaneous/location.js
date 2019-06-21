'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    offsetUtilities = require('../utilities/offset');

var add3 = vectorMaths.add3,
    subtract2 = vectorMaths.subtract2,
    scale2 = vectorMaths.scale2,
    DELTA_SCALAR = constants.DELTA_SCALAR,
    OFFSET_SCALAR = constants.OFFSET_SCALAR,
    calculateXAngleOffset = offsetUtilities.calculateXAngleOffset,
    calculateYAngleOffset = offsetUtilities.calculateYAngleOffset,
    calculateZAngleOffset = offsetUtilities.calculateZAngleOffset;

var Location = function () {
  function Location(offsets, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Location);

    this.offsets = offsets;

    this.mouseCoordinates = mouseCoordinates;

    this.previousMouseCoordinates = previousMouseCoordinates;
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
    key: 'resetPreviousMouseCoordinates',
    value: function resetPreviousMouseCoordinates() {
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'updateXYOffset',
    value: function updateXYOffset(mouseCoordinates, tilt) {
      var relativeMouseCoordinates = subtract2(mouseCoordinates, this.previousMouseCoordinates),
          xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR,
          ///
      scaledRelativeMouseCoordinates = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, scaledRelativeMouseCoordinates),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, scaledRelativeMouseCoordinates);

      this.offsets = add3(add3(this.offsets, yAngleOffset), xAngleOffset);
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

      this.offsets = add3(this.offsets, zAngleOffset);
    }
  }], [{
    key: 'fromInitialOffsets',
    value: function fromInitialOffsets(initialOffsets) {
      var offsets = initialOffsets,
          ///
      mouseCoordinates = null,
          ///
      previousMouseCoordinates = null,
          ///
      location = new Location(offsets, mouseCoordinates, previousMouseCoordinates);

      return location;
    }
  }]);

  return Location;
}();

module.exports = Location;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsIm9mZnNldFV0aWxpdGllcyIsImFkZDMiLCJzdWJ0cmFjdDIiLCJzY2FsZTIiLCJERUxUQV9TQ0FMQVIiLCJPRkZTRVRfU0NBTEFSIiwiY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0IiwiY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0IiwiY2FsY3VsYXRlWkFuZ2xlT2Zmc2V0IiwiTG9jYXRpb24iLCJvZmZzZXRzIiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInRpbHQiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJ4QW5nbGUiLCJnZXRYQW5nbGUiLCJ5QW5nbGUiLCJnZXRZQW5nbGUiLCJzY2FsYXIiLCJzY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJ5QW5nbGVPZmZzZXQiLCJ4QW5nbGVPZmZzZXQiLCJkZWx0YSIsInRoaXJkUmVsYXRpdmVPZmZzZXQiLCJ6QW5nbGVPZmZzZXQiLCJpbml0aWFsT2Zmc2V0cyIsImxvY2F0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7O0lBSVFHLEksR0FBNEJGLFcsQ0FBNUJFLEk7SUFBTUMsUyxHQUFzQkgsVyxDQUF0QkcsUztJQUFXQyxNLEdBQVdKLFcsQ0FBWEksTTtJQUNqQkMsWSxHQUFnQ1AsUyxDQUFoQ08sWTtJQUFjQyxhLEdBQWtCUixTLENBQWxCUSxhO0lBQ2RDLHFCLEdBQXdFTixlLENBQXhFTSxxQjtJQUF1QkMscUIsR0FBaURQLGUsQ0FBakRPLHFCO0lBQXVCQyxxQixHQUEwQlIsZSxDQUExQlEscUI7O0lBRWhEQyxRO0FBQ0osb0JBQVlDLE9BQVosRUFBcUJDLGdCQUFyQixFQUF1Q0Msd0JBQXZDLEVBQWlFO0FBQUE7O0FBQy9ELFNBQUtGLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCOztBQUVBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsT0FBWjtBQUNEOzs7d0NBRW1CQyxnQixFQUFrQjtBQUNwQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OztvREFFK0I7QUFDOUIsV0FBS0Msd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDO0FBQ0Q7OzttQ0FFY0EsZ0IsRUFBa0JFLEksRUFBTTtBQUNyQyxVQUFNQywyQkFBMkJaLFVBQVVTLGdCQUFWLEVBQTRCLEtBQUtDLHdCQUFqQyxDQUFqQztBQUFBLFVBQ01HLFNBQVNGLEtBQUtHLFNBQUwsRUFEZjtBQUFBLFVBRU1DLFNBQVNKLEtBQUtLLFNBQUwsRUFGZjtBQUFBLFVBR01DLFNBQVNkLGFBSGY7QUFBQSxVQUc4QjtBQUN4QmUsdUNBQWlDakIsT0FBT1csd0JBQVAsRUFBaUNLLE1BQWpDLENBSnZDO0FBQUEsVUFLTUUsZUFBZWQsc0JBQXNCVSxNQUF0QixFQUE4QkcsOEJBQTlCLENBTHJCO0FBQUEsVUFNTUUsZUFBZWhCLHNCQUFzQlMsTUFBdEIsRUFBOEJFLE1BQTlCLEVBQXNDRyw4QkFBdEMsQ0FOckI7O0FBUUEsV0FBS1YsT0FBTCxHQUFlVCxLQUFLQSxLQUFLLEtBQUtTLE9BQVYsRUFBbUJXLFlBQW5CLENBQUwsRUFBdUNDLFlBQXZDLENBQWY7QUFDRDs7O2tDQUVhQyxLLEVBQU9WLEksRUFBTTtBQUN6QixVQUFNRSxTQUFTRixLQUFLRyxTQUFMLEVBQWY7QUFBQSxVQUNNQyxTQUFTSixLQUFLSyxTQUFMLEVBRGY7QUFBQSxVQUVNQyxTQUFTZixZQUZmO0FBQUEsVUFFNkI7QUFDdkJvQiw0QkFBc0JELFFBQVFKLE1BSHBDO0FBQUEsVUFJTU0sZUFBZWpCLHNCQUFzQk8sTUFBdEIsRUFBOEJFLE1BQTlCLEVBQXNDTyxtQkFBdEMsQ0FKckI7O0FBTUEsV0FBS2QsT0FBTCxHQUFlVCxLQUFLLEtBQUtTLE9BQVYsRUFBbUJlLFlBQW5CLENBQWY7QUFDRDs7O3VDQUV5QkMsYyxFQUFnQjtBQUN4QyxVQUFNaEIsVUFBVWdCLGNBQWhCO0FBQUEsVUFBZ0M7QUFDMUJmLHlCQUFtQixJQUR6QjtBQUFBLFVBQ2dDO0FBQzFCQyxpQ0FBMkIsSUFGakM7QUFBQSxVQUV3QztBQUNsQ2UsaUJBQVcsSUFBSWxCLFFBQUosQ0FBYUMsT0FBYixFQUFzQkMsZ0JBQXRCLEVBQXdDQyx3QkFBeEMsQ0FIakI7O0FBS0EsYUFBT2UsUUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnBCLFFBQWpCIiwiZmlsZSI6ImxvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBvZmZzZXRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvb2Zmc2V0Jyk7XG5cbmNvbnN0IHsgYWRkMywgc3VidHJhY3QyLCBzY2FsZTIgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBERUxUQV9TQ0FMQVIsIE9GRlNFVF9TQ0FMQVIgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0LCBjYWxjdWxhdGVZQW5nbGVPZmZzZXQsIGNhbGN1bGF0ZVpBbmdsZU9mZnNldCB9ID0gb2Zmc2V0VXRpbGl0aWVzO1xuXG5jbGFzcyBMb2NhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG5cbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICBzZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICB1cGRhdGVYWU9mZnNldChtb3VzZUNvb3JkaW5hdGVzLCB0aWx0KSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB4QW5nbGUgPSB0aWx0LmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IHRpbHQuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgc2NhbGFyID0gT0ZGU0VUX1NDQUxBUiwgLy8vXG4gICAgICAgICAgc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKSxcbiAgICAgICAgICB5QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVZQW5nbGVPZmZzZXQoeUFuZ2xlLCBzY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHhBbmdsZU9mZnNldCA9IGNhbGN1bGF0ZVhBbmdsZU9mZnNldCh4QW5nbGUsIHlBbmdsZSwgc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDMoYWRkMyh0aGlzLm9mZnNldHMsIHlBbmdsZU9mZnNldCksIHhBbmdsZU9mZnNldCk7XG4gIH1cblxuICB1cGRhdGVaT2Zmc2V0KGRlbHRhLCB0aWx0KSB7XG4gICAgY29uc3QgeEFuZ2xlID0gdGlsdC5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSB0aWx0LmdldFlBbmdsZSgpLFxuICAgICAgICAgIHNjYWxhciA9IERFTFRBX1NDQUxBUiwgLy8vXG4gICAgICAgICAgdGhpcmRSZWxhdGl2ZU9mZnNldCA9IGRlbHRhICogc2NhbGFyLFxuICAgICAgICAgIHpBbmdsZU9mZnNldCA9IGNhbGN1bGF0ZVpBbmdsZU9mZnNldCh4QW5nbGUsIHlBbmdsZSwgdGhpcmRSZWxhdGl2ZU9mZnNldCk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMub2Zmc2V0cywgekFuZ2xlT2Zmc2V0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKG9mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG4gICAgXG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9jYXRpb247XG4iXX0=