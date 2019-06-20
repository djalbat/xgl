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
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES,
    calculateXAngleOffset = offsetUtilities.calculateXAngleOffset,
    calculateYAngleOffset = offsetUtilities.calculateYAngleOffset,
    calculateZAngleOffset = offsetUtilities.calculateZAngleOffset;

var Location = function () {
  function Location(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Location);

    this.offsets = offsets;
    this.previousOffsets = previousOffsets;
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
    key: 'updatePreviousMouseCoordinates',
    value: function updatePreviousMouseCoordinates() {
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'updatePreviousOffsets',
    value: function updatePreviousOffsets() {
      this.previousOffsets = this.offsets;
    }
  }, {
    key: 'updateXYOffset',
    value: function updateXYOffset(tilt) {
      var xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR,
          ///
      relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeOffsets = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, relativeOffsets),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, relativeOffsets);

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
      mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          ///
      previousMouseCoordinates = mouseCoordinates,
          ///
      location = new Location(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates);

      return location;
    }
  }]);

  return Location;
}();

module.exports = Location;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsIm9mZnNldFV0aWxpdGllcyIsImFkZDMiLCJzdWJ0cmFjdDIiLCJzY2FsZTIiLCJERUxUQV9TQ0FMQVIiLCJPRkZTRVRfU0NBTEFSIiwiSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyIsImNhbGN1bGF0ZVhBbmdsZU9mZnNldCIsImNhbGN1bGF0ZVlBbmdsZU9mZnNldCIsImNhbGN1bGF0ZVpBbmdsZU9mZnNldCIsIkxvY2F0aW9uIiwib2Zmc2V0cyIsInByZXZpb3VzT2Zmc2V0cyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJ0aWx0IiwieEFuZ2xlIiwiZ2V0WEFuZ2xlIiwieUFuZ2xlIiwiZ2V0WUFuZ2xlIiwic2NhbGFyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwicmVsYXRpdmVPZmZzZXRzIiwieUFuZ2xlT2Zmc2V0IiwieEFuZ2xlT2Zmc2V0IiwiZGVsdGEiLCJ0aGlyZFJlbGF0aXZlT2Zmc2V0IiwiekFuZ2xlT2Zmc2V0IiwidXBkYXRlWFlPZmZzZXQiLCJpbml0aWFsT2Zmc2V0IiwibG9jYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSxxQkFBUixDQUZ4Qjs7SUFJUUcsSSxHQUE0QkYsVyxDQUE1QkUsSTtJQUFNQyxTLEdBQXNCSCxXLENBQXRCRyxTO0lBQVdDLE0sR0FBV0osVyxDQUFYSSxNO0lBQ2pCQyxZLEdBQTJEUCxTLENBQTNETyxZO0lBQWNDLGEsR0FBNkNSLFMsQ0FBN0NRLGE7SUFBZUMseUIsR0FBOEJULFMsQ0FBOUJTLHlCO0lBQzdCQyxxQixHQUF3RVAsZSxDQUF4RU8scUI7SUFBdUJDLHFCLEdBQWlEUixlLENBQWpEUSxxQjtJQUF1QkMscUIsR0FBMEJULGUsQ0FBMUJTLHFCOztJQUVoREMsUTtBQUNKLG9CQUFZQyxPQUFaLEVBQXFCQyxlQUFyQixFQUFzQ0MsZ0JBQXRDLEVBQXdEQyx3QkFBeEQsRUFBa0Y7QUFBQTs7QUFDaEYsU0FBS0gsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0NBLHdCQUFoQztBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLSCxPQUFaO0FBQ0Q7Ozt3Q0FFbUJFLGdCLEVBQWtCO0FBQ3BDLFdBQUtBLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDRDs7O3FEQUVnQztBQUMvQixXQUFLQyx3QkFBTCxHQUFnQyxLQUFLRCxnQkFBckM7QUFDRDs7OzRDQUV1QjtBQUN0QixXQUFLRCxlQUFMLEdBQXVCLEtBQUtELE9BQTVCO0FBQ0Q7OzttQ0FFY0ksSSxFQUFNO0FBQ25CLFVBQU1DLFNBQVNELEtBQUtFLFNBQUwsRUFBZjtBQUFBLFVBQ01DLFNBQVNILEtBQUtJLFNBQUwsRUFEZjtBQUFBLFVBRU1DLFNBQVNmLGFBRmY7QUFBQSxVQUU4QjtBQUN4QmdCLGlDQUEyQm5CLFVBQVUsS0FBS1csZ0JBQWYsRUFBaUMsS0FBS0Msd0JBQXRDLENBSGpDO0FBQUEsVUFJTVEsa0JBQWtCbkIsT0FBT2tCLHdCQUFQLEVBQWlDRCxNQUFqQyxDQUp4QjtBQUFBLFVBS01HLGVBQWVmLHNCQUFzQlUsTUFBdEIsRUFBOEJJLGVBQTlCLENBTHJCO0FBQUEsVUFNTUUsZUFBZWpCLHNCQUFzQlMsTUFBdEIsRUFBOEJFLE1BQTlCLEVBQXNDSSxlQUF0QyxDQU5yQjs7QUFRQSxXQUFLWCxPQUFMLEdBQWVWLEtBQUtBLEtBQUssS0FBS1csZUFBVixFQUEyQlcsWUFBM0IsQ0FBTCxFQUErQ0MsWUFBL0MsQ0FBZixDQVRtQixDQVMyRDtBQUMvRTs7O2tDQUVhQyxLLEVBQU9WLEksRUFBTTtBQUN6QixVQUFNQyxTQUFTRCxLQUFLRSxTQUFMLEVBQWY7QUFBQSxVQUNNQyxTQUFTSCxLQUFLSSxTQUFMLEVBRGY7QUFBQSxVQUVNQyxTQUFTaEIsWUFGZjtBQUFBLFVBRTZCO0FBQ3ZCc0IsNEJBQXNCRCxRQUFRTCxNQUhwQztBQUFBLFVBSU1PLGVBQWVsQixzQkFBc0JPLE1BQXRCLEVBQThCRSxNQUE5QixFQUFzQ1EsbUJBQXRDLENBSnJCOztBQU1BLFdBQUtkLGVBQUwsR0FBdUJYLEtBQUssS0FBS1csZUFBVixFQUEyQmUsWUFBM0IsQ0FBdkI7O0FBRUEsV0FBS0MsY0FBTCxDQUFvQmIsSUFBcEI7QUFDRDs7O3NDQUV3QmMsYSxFQUFlO0FBQ3RDLFVBQU1sQixVQUFVa0IsYUFBaEI7QUFBQSxVQUErQjtBQUN6QmpCLHdCQUFrQkQsT0FEeEI7QUFBQSxVQUNrQztBQUM1QkUseUJBQW1CUCx5QkFGekI7QUFBQSxVQUVvRDtBQUM5Q1EsaUNBQTJCRCxnQkFIakM7QUFBQSxVQUdvRDtBQUM5Q2lCLGlCQUFXLElBQUlwQixRQUFKLENBQWFDLE9BQWIsRUFBc0JDLGVBQXRCLEVBQXVDQyxnQkFBdkMsRUFBeURDLHdCQUF6RCxDQUpqQjs7QUFNQSxhQUFPZ0IsUUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnRCLFFBQWpCIiwiZmlsZSI6ImxvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBvZmZzZXRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvb2Zmc2V0Jyk7XG5cbmNvbnN0IHsgYWRkMywgc3VidHJhY3QyLCBzY2FsZTIgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBERUxUQV9TQ0FMQVIsIE9GRlNFVF9TQ0FMQVIsIElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0LCBjYWxjdWxhdGVZQW5nbGVPZmZzZXQsIGNhbGN1bGF0ZVpBbmdsZU9mZnNldCB9ID0gb2Zmc2V0VXRpbGl0aWVzO1xuXG5jbGFzcyBMb2NhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMsIHByZXZpb3VzT2Zmc2V0cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0cyA9IHByZXZpb3VzT2Zmc2V0cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHVwZGF0ZVByZXZpb3VzTW91c2VDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHVwZGF0ZVByZXZpb3VzT2Zmc2V0cygpIHtcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0cyA9IHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHVwZGF0ZVhZT2Zmc2V0KHRpbHQpIHtcbiAgICBjb25zdCB4QW5nbGUgPSB0aWx0LmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IHRpbHQuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgc2NhbGFyID0gT0ZGU0VUX1NDQUxBUiwgLy8vXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhciksXG4gICAgICAgICAgeUFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0KHlBbmdsZSwgcmVsYXRpdmVPZmZzZXRzKSxcbiAgICAgICAgICB4QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVYQW5nbGVPZmZzZXQoeEFuZ2xlLCB5QW5nbGUsIHJlbGF0aXZlT2Zmc2V0cyk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKGFkZDModGhpcy5wcmV2aW91c09mZnNldHMsIHlBbmdsZU9mZnNldCksIHhBbmdsZU9mZnNldCk7ICAvLy9cbiAgfVxuXG4gIHVwZGF0ZVpPZmZzZXQoZGVsdGEsIHRpbHQpIHtcbiAgICBjb25zdCB4QW5nbGUgPSB0aWx0LmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IHRpbHQuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgc2NhbGFyID0gREVMVEFfU0NBTEFSLCAvLy9cbiAgICAgICAgICB0aGlyZFJlbGF0aXZlT2Zmc2V0ID0gZGVsdGEgKiBzY2FsYXIsXG4gICAgICAgICAgekFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWkFuZ2xlT2Zmc2V0KHhBbmdsZSwgeUFuZ2xlLCB0aGlyZFJlbGF0aXZlT2Zmc2V0KTtcblxuICAgIHRoaXMucHJldmlvdXNPZmZzZXRzID0gYWRkMyh0aGlzLnByZXZpb3VzT2Zmc2V0cywgekFuZ2xlT2Zmc2V0KTtcblxuICAgIHRoaXMudXBkYXRlWFlPZmZzZXQodGlsdCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXQoaW5pdGlhbE9mZnNldCkge1xuICAgIGNvbnN0IG9mZnNldHMgPSBpbml0aWFsT2Zmc2V0LCAvLy9cbiAgICAgICAgICBwcmV2aW91c09mZnNldHMgPSBvZmZzZXRzLCAgLy8vXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbihvZmZzZXRzLCBwcmV2aW91c09mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG4gICAgXG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9jYXRpb247XG4iXX0=