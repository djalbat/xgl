'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    offsetUtilities = require('../utilities/offset');

var add3 = vectorMaths.add3,
    subtract2 = vectorMaths.subtract2,
    scale2 = vectorMaths.scale2,
    scale3 = vectorMaths.scale3,
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
    key: 'fromInitialPosition',
    value: function fromInitialPosition(initialPosition) {
      var offsets = scale3(initialPosition, -1),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsIm9mZnNldFV0aWxpdGllcyIsImFkZDMiLCJzdWJ0cmFjdDIiLCJzY2FsZTIiLCJzY2FsZTMiLCJERUxUQV9TQ0FMQVIiLCJPRkZTRVRfU0NBTEFSIiwiY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0IiwiY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0IiwiY2FsY3VsYXRlWkFuZ2xlT2Zmc2V0IiwiTG9jYXRpb24iLCJvZmZzZXRzIiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInRpbHQiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJ4QW5nbGUiLCJnZXRYQW5nbGUiLCJ5QW5nbGUiLCJnZXRZQW5nbGUiLCJzY2FsYXIiLCJzY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJ5QW5nbGVPZmZzZXQiLCJ4QW5nbGVPZmZzZXQiLCJkZWx0YSIsInRoaXJkUmVsYXRpdmVPZmZzZXQiLCJ6QW5nbGVPZmZzZXQiLCJpbml0aWFsUG9zaXRpb24iLCJsb2NhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRnhCOztJQUlRRyxJLEdBQW9DRixXLENBQXBDRSxJO0lBQU1DLFMsR0FBOEJILFcsQ0FBOUJHLFM7SUFBV0MsTSxHQUFtQkosVyxDQUFuQkksTTtJQUFRQyxNLEdBQVdMLFcsQ0FBWEssTTtJQUN6QkMsWSxHQUFnQ1IsUyxDQUFoQ1EsWTtJQUFjQyxhLEdBQWtCVCxTLENBQWxCUyxhO0lBQ2RDLHFCLEdBQXdFUCxlLENBQXhFTyxxQjtJQUF1QkMscUIsR0FBaURSLGUsQ0FBakRRLHFCO0lBQXVCQyxxQixHQUEwQlQsZSxDQUExQlMscUI7O0lBRWhEQyxRO0FBQ0osb0JBQVlDLE9BQVosRUFBcUJDLGdCQUFyQixFQUF1Q0Msd0JBQXZDLEVBQWlFO0FBQUE7O0FBQy9ELFNBQUtGLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCOztBQUVBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsT0FBWjtBQUNEOzs7d0NBRW1CQyxnQixFQUFrQjtBQUNwQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OztvREFFK0I7QUFDOUIsV0FBS0Msd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDO0FBQ0Q7OzttQ0FFY0EsZ0IsRUFBa0JFLEksRUFBTTtBQUNyQyxVQUFNQywyQkFBMkJiLFVBQVVVLGdCQUFWLEVBQTRCLEtBQUtDLHdCQUFqQyxDQUFqQztBQUFBLFVBQ01HLFNBQVNGLEtBQUtHLFNBQUwsRUFEZjtBQUFBLFVBRU1DLFNBQVNKLEtBQUtLLFNBQUwsRUFGZjtBQUFBLFVBR01DLFNBQVNkLGFBSGY7QUFBQSxVQUc4QjtBQUN4QmUsdUNBQWlDbEIsT0FBT1ksd0JBQVAsRUFBaUNLLE1BQWpDLENBSnZDO0FBQUEsVUFLTUUsZUFBZWQsc0JBQXNCVSxNQUF0QixFQUE4QkcsOEJBQTlCLENBTHJCO0FBQUEsVUFNTUUsZUFBZWhCLHNCQUFzQlMsTUFBdEIsRUFBOEJFLE1BQTlCLEVBQXNDRyw4QkFBdEMsQ0FOckI7O0FBUUEsV0FBS1YsT0FBTCxHQUFlVixLQUFLQSxLQUFLLEtBQUtVLE9BQVYsRUFBbUJXLFlBQW5CLENBQUwsRUFBdUNDLFlBQXZDLENBQWY7QUFDRDs7O2tDQUVhQyxLLEVBQU9WLEksRUFBTTtBQUN6QixVQUFNRSxTQUFTRixLQUFLRyxTQUFMLEVBQWY7QUFBQSxVQUNNQyxTQUFTSixLQUFLSyxTQUFMLEVBRGY7QUFBQSxVQUVNQyxTQUFTZixZQUZmO0FBQUEsVUFFNkI7QUFDdkJvQiw0QkFBc0JELFFBQVFKLE1BSHBDO0FBQUEsVUFJTU0sZUFBZWpCLHNCQUFzQk8sTUFBdEIsRUFBOEJFLE1BQTlCLEVBQXNDTyxtQkFBdEMsQ0FKckI7O0FBTUEsV0FBS2QsT0FBTCxHQUFlVixLQUFLLEtBQUtVLE9BQVYsRUFBbUJlLFlBQW5CLENBQWY7QUFDRDs7O3dDQUUwQkMsZSxFQUFpQjtBQUMxQyxVQUFNaEIsVUFBVVAsT0FBT3VCLGVBQVAsRUFBd0IsQ0FBQyxDQUF6QixDQUFoQjtBQUFBLFVBQ01mLG1CQUFtQixJQUR6QjtBQUFBLFVBQ2dDO0FBQzFCQyxpQ0FBMkIsSUFGakM7QUFBQSxVQUV3QztBQUNsQ2UsaUJBQVcsSUFBSWxCLFFBQUosQ0FBYUMsT0FBYixFQUFzQkMsZ0JBQXRCLEVBQXdDQyx3QkFBeEMsQ0FIakI7O0FBS0EsYUFBT2UsUUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnBCLFFBQWpCIiwiZmlsZSI6ImxvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBvZmZzZXRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvb2Zmc2V0Jyk7XG5cbmNvbnN0IHsgYWRkMywgc3VidHJhY3QyLCBzY2FsZTIsIHNjYWxlMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IERFTFRBX1NDQUxBUiwgT0ZGU0VUX1NDQUxBUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBjYWxjdWxhdGVYQW5nbGVPZmZzZXQsIGNhbGN1bGF0ZVlBbmdsZU9mZnNldCwgY2FsY3VsYXRlWkFuZ2xlT2Zmc2V0IH0gPSBvZmZzZXRVdGlsaXRpZXM7XG5cbmNsYXNzIExvY2F0aW9uIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcblxuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHVwZGF0ZVhZT2Zmc2V0KG1vdXNlQ29vcmRpbmF0ZXMsIHRpbHQpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIobW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHhBbmdsZSA9IHRpbHQuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gdGlsdC5nZXRZQW5nbGUoKSxcbiAgICAgICAgICBzY2FsYXIgPSBPRkZTRVRfU0NBTEFSLCAvLy9cbiAgICAgICAgICBzY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpLFxuICAgICAgICAgIHlBbmdsZU9mZnNldCA9IGNhbGN1bGF0ZVlBbmdsZU9mZnNldCh5QW5nbGUsIHNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgeEFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0KHhBbmdsZSwgeUFuZ2xlLCBzY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyhhZGQzKHRoaXMub2Zmc2V0cywgeUFuZ2xlT2Zmc2V0KSwgeEFuZ2xlT2Zmc2V0KTtcbiAgfVxuXG4gIHVwZGF0ZVpPZmZzZXQoZGVsdGEsIHRpbHQpIHtcbiAgICBjb25zdCB4QW5nbGUgPSB0aWx0LmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IHRpbHQuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgc2NhbGFyID0gREVMVEFfU0NBTEFSLCAvLy9cbiAgICAgICAgICB0aGlyZFJlbGF0aXZlT2Zmc2V0ID0gZGVsdGEgKiBzY2FsYXIsXG4gICAgICAgICAgekFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWkFuZ2xlT2Zmc2V0KHhBbmdsZSwgeUFuZ2xlLCB0aGlyZFJlbGF0aXZlT2Zmc2V0KTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5vZmZzZXRzLCB6QW5nbGVPZmZzZXQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IHNjYWxlMyhpbml0aWFsUG9zaXRpb24sIC0xKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbihvZmZzZXRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvY2F0aW9uO1xuIl19