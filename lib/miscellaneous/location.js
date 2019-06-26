'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    offsetUtilities = require('../utilities/offset');

var add3 = vectorMaths.add3,
    scale2 = vectorMaths.scale2,
    scale3 = vectorMaths.scale3,
    subtract2 = vectorMaths.subtract2,
    DELTA_SCALAR = constants.DELTA_SCALAR,
    INVERT_SCALAR = constants.INVERT_SCALAR,
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
      var xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR,
          ///
      relativeMouseCoordinates = subtract2(mouseCoordinates, this.previousMouseCoordinates),
          relativeOffsets = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, relativeOffsets),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, relativeOffsets);

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
      var scalar = INVERT_SCALAR,
          ///
      offsets = scale3(initialPosition, scalar),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsIm9mZnNldFV0aWxpdGllcyIsImFkZDMiLCJzY2FsZTIiLCJzY2FsZTMiLCJzdWJ0cmFjdDIiLCJERUxUQV9TQ0FMQVIiLCJJTlZFUlRfU0NBTEFSIiwiT0ZGU0VUX1NDQUxBUiIsImNhbGN1bGF0ZVhBbmdsZU9mZnNldCIsImNhbGN1bGF0ZVlBbmdsZU9mZnNldCIsImNhbGN1bGF0ZVpBbmdsZU9mZnNldCIsIkxvY2F0aW9uIiwib2Zmc2V0cyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJ0aWx0IiwieEFuZ2xlIiwiZ2V0WEFuZ2xlIiwieUFuZ2xlIiwiZ2V0WUFuZ2xlIiwic2NhbGFyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwicmVsYXRpdmVPZmZzZXRzIiwieUFuZ2xlT2Zmc2V0IiwieEFuZ2xlT2Zmc2V0IiwiZGVsdGEiLCJ0aGlyZFJlbGF0aXZlT2Zmc2V0IiwiekFuZ2xlT2Zmc2V0IiwiaW5pdGlhbFBvc2l0aW9uIiwibG9jYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSxxQkFBUixDQUZ4Qjs7SUFJUUcsSSxHQUFvQ0YsVyxDQUFwQ0UsSTtJQUFNQyxNLEdBQThCSCxXLENBQTlCRyxNO0lBQVFDLE0sR0FBc0JKLFcsQ0FBdEJJLE07SUFBUUMsUyxHQUFjTCxXLENBQWRLLFM7SUFDdEJDLFksR0FBK0NSLFMsQ0FBL0NRLFk7SUFBY0MsYSxHQUFpQ1QsUyxDQUFqQ1MsYTtJQUFlQyxhLEdBQWtCVixTLENBQWxCVSxhO0lBQzdCQyxxQixHQUF3RVIsZSxDQUF4RVEscUI7SUFBdUJDLHFCLEdBQWlEVCxlLENBQWpEUyxxQjtJQUF1QkMscUIsR0FBMEJWLGUsQ0FBMUJVLHFCOztJQUVoREMsUTtBQUNKLG9CQUFZQyxPQUFaLEVBQXFCQyxnQkFBckIsRUFBdUNDLHdCQUF2QyxFQUFpRTtBQUFBOztBQUMvRCxTQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0NBLHdCQUFoQztBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRixPQUFaO0FBQ0Q7Ozt3Q0FFbUJDLGdCLEVBQWtCO0FBQ3BDLFdBQUtBLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDRDs7O29EQUUrQjtBQUM5QixXQUFLQyx3QkFBTCxHQUFnQyxLQUFLRCxnQkFBckM7QUFDRDs7O21DQUVjQSxnQixFQUFrQkUsSSxFQUFNO0FBQ3JDLFVBQU1DLFNBQVNELEtBQUtFLFNBQUwsRUFBZjtBQUFBLFVBQ01DLFNBQVNILEtBQUtJLFNBQUwsRUFEZjtBQUFBLFVBRU1DLFNBQVNiLGFBRmY7QUFBQSxVQUU4QjtBQUN4QmMsaUNBQTJCakIsVUFBVVMsZ0JBQVYsRUFBNEIsS0FBS0Msd0JBQWpDLENBSGpDO0FBQUEsVUFJTVEsa0JBQWtCcEIsT0FBT21CLHdCQUFQLEVBQWlDRCxNQUFqQyxDQUp4QjtBQUFBLFVBS01HLGVBQWVkLHNCQUFzQlMsTUFBdEIsRUFBOEJJLGVBQTlCLENBTHJCO0FBQUEsVUFNTUUsZUFBZWhCLHNCQUFzQlEsTUFBdEIsRUFBOEJFLE1BQTlCLEVBQXNDSSxlQUF0QyxDQU5yQjs7QUFRQSxXQUFLVixPQUFMLEdBQWVYLEtBQUtBLEtBQUssS0FBS1csT0FBVixFQUFtQlcsWUFBbkIsQ0FBTCxFQUF1Q0MsWUFBdkMsQ0FBZjtBQUNEOzs7a0NBRWFDLEssRUFBT1YsSSxFQUFNO0FBQ3pCLFVBQU1DLFNBQVNELEtBQUtFLFNBQUwsRUFBZjtBQUFBLFVBQ01DLFNBQVNILEtBQUtJLFNBQUwsRUFEZjtBQUFBLFVBRU1DLFNBQVNmLFlBRmY7QUFBQSxVQUU2QjtBQUN2QnFCLDRCQUFzQkQsUUFBUUwsTUFIcEM7QUFBQSxVQUlNTyxlQUFlakIsc0JBQXNCTSxNQUF0QixFQUE4QkUsTUFBOUIsRUFBc0NRLG1CQUF0QyxDQUpyQjs7QUFNQSxXQUFLZCxPQUFMLEdBQWVYLEtBQUssS0FBS1csT0FBVixFQUFtQmUsWUFBbkIsQ0FBZjtBQUNEOzs7d0NBRTBCQyxlLEVBQWlCO0FBQzFDLFVBQU1SLFNBQVNkLGFBQWY7QUFBQSxVQUE4QjtBQUN4Qk0sZ0JBQVVULE9BQU95QixlQUFQLEVBQXdCUixNQUF4QixDQURoQjtBQUFBLFVBRU1QLG1CQUFtQixJQUZ6QjtBQUFBLFVBRWdDO0FBQzFCQyxpQ0FBMkIsSUFIakM7QUFBQSxVQUd3QztBQUNsQ2UsaUJBQVcsSUFBSWxCLFFBQUosQ0FBYUMsT0FBYixFQUFzQkMsZ0JBQXRCLEVBQXdDQyx3QkFBeEMsQ0FKakI7O0FBTUEsYUFBT2UsUUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnBCLFFBQWpCIiwiZmlsZSI6ImxvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBvZmZzZXRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvb2Zmc2V0Jyk7XG5cbmNvbnN0IHsgYWRkMywgc2NhbGUyLCBzY2FsZTMsIHN1YnRyYWN0MiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IERFTFRBX1NDQUxBUiwgSU5WRVJUX1NDQUxBUiwgT0ZGU0VUX1NDQUxBUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBjYWxjdWxhdGVYQW5nbGVPZmZzZXQsIGNhbGN1bGF0ZVlBbmdsZU9mZnNldCwgY2FsY3VsYXRlWkFuZ2xlT2Zmc2V0IH0gPSBvZmZzZXRVdGlsaXRpZXM7XG5cbmNsYXNzIExvY2F0aW9uIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCkge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgdXBkYXRlWFlPZmZzZXQobW91c2VDb29yZGluYXRlcywgdGlsdCkge1xuICAgIGNvbnN0IHhBbmdsZSA9IHRpbHQuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gdGlsdC5nZXRZQW5nbGUoKSxcbiAgICAgICAgICBzY2FsYXIgPSBPRkZTRVRfU0NBTEFSLCAvLy9cbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIobW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhciksXG4gICAgICAgICAgeUFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0KHlBbmdsZSwgcmVsYXRpdmVPZmZzZXRzKSxcbiAgICAgICAgICB4QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVYQW5nbGVPZmZzZXQoeEFuZ2xlLCB5QW5nbGUsIHJlbGF0aXZlT2Zmc2V0cyk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKGFkZDModGhpcy5vZmZzZXRzLCB5QW5nbGVPZmZzZXQpLCB4QW5nbGVPZmZzZXQpO1xuICB9XG5cbiAgdXBkYXRlWk9mZnNldChkZWx0YSwgdGlsdCkge1xuICAgIGNvbnN0IHhBbmdsZSA9IHRpbHQuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gdGlsdC5nZXRZQW5nbGUoKSxcbiAgICAgICAgICBzY2FsYXIgPSBERUxUQV9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHRoaXJkUmVsYXRpdmVPZmZzZXQgPSBkZWx0YSAqIHNjYWxhcixcbiAgICAgICAgICB6QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVaQW5nbGVPZmZzZXQoeEFuZ2xlLCB5QW5nbGUsIHRoaXJkUmVsYXRpdmVPZmZzZXQpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHpBbmdsZU9mZnNldCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pIHtcbiAgICBjb25zdCBzY2FsYXIgPSBJTlZFUlRfU0NBTEFSLCAvLy9cbiAgICAgICAgICBvZmZzZXRzID0gc2NhbGUzKGluaXRpYWxQb3NpdGlvbiwgc2NhbGFyKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbihvZmZzZXRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvY2F0aW9uO1xuIl19