'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    offsetUtilities = require('../utilities/offset');

var add3 = vectorMaths.add3,
    subtract2 = vectorMaths.subtract2,
    scale2 = vectorMaths.scale2,
    OFFSET_SCALAR = constants.OFFSET_SCALAR,
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES,
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
    key: 'updateOffset',
    value: function updateOffset(tilt) {
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
      pan = new Pan(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates);

      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwidmVjdG9yTWF0aHMiLCJvZmZzZXRVdGlsaXRpZXMiLCJhZGQzIiwic3VidHJhY3QyIiwic2NhbGUyIiwiT0ZGU0VUX1NDQUxBUiIsIklOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMiLCJjYWxjdWxhdGVYQW5nbGVPZmZzZXQiLCJjYWxjdWxhdGVZQW5nbGVPZmZzZXQiLCJQYW4iLCJvZmZzZXRzIiwicHJldmlvdXNPZmZzZXRzIiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInRpbHQiLCJ4QW5nbGUiLCJnZXRYQW5nbGUiLCJ5QW5nbGUiLCJnZXRZQW5nbGUiLCJzY2FsYXIiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJyZWxhdGl2ZU9mZnNldHMiLCJ5QW5nbGVPZmZzZXQiLCJ4QW5nbGVPZmZzZXQiLCJpbml0aWFsT2Zmc2V0IiwicGFuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7O0lBSVFHLEksR0FBNEJGLFcsQ0FBNUJFLEk7SUFBTUMsUyxHQUFzQkgsVyxDQUF0QkcsUztJQUFXQyxNLEdBQVdKLFcsQ0FBWEksTTtJQUNqQkMsYSxHQUE2Q1AsUyxDQUE3Q08sYTtJQUFlQyx5QixHQUE4QlIsUyxDQUE5QlEseUI7SUFDZkMscUIsR0FBaUROLGUsQ0FBakRNLHFCO0lBQXVCQyxxQixHQUEwQlAsZSxDQUExQk8scUI7O0lBRXpCQyxHO0FBQ0osZUFBWUMsT0FBWixFQUFxQkMsZUFBckIsRUFBc0NDLGdCQUF0QyxFQUF3REMsd0JBQXhELEVBQWtGO0FBQUE7O0FBQ2hGLFNBQUtILE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0gsT0FBWjtBQUNEOzs7d0NBRW1CRSxnQixFQUFrQjtBQUNwQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OztxREFFZ0M7QUFDL0IsV0FBS0Msd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsV0FBS0QsZUFBTCxHQUF1QixLQUFLRCxPQUE1QjtBQUNEOzs7aUNBRVlJLEksRUFBTTtBQUNqQixVQUFNQyxTQUFTRCxLQUFLRSxTQUFMLEVBQWY7QUFBQSxVQUNNQyxTQUFTSCxLQUFLSSxTQUFMLEVBRGY7QUFBQSxVQUVNQyxTQUFTZCxhQUZmO0FBQUEsVUFFOEI7QUFDeEJlLGlDQUEyQmpCLFVBQVUsS0FBS1MsZ0JBQWYsRUFBaUMsS0FBS0Msd0JBQXRDLENBSGpDO0FBQUEsVUFJTVEsa0JBQWtCakIsT0FBT2dCLHdCQUFQLEVBQWlDRCxNQUFqQyxDQUp4QjtBQUFBLFVBS01HLGVBQWVkLHNCQUFzQlMsTUFBdEIsRUFBOEJJLGVBQTlCLENBTHJCO0FBQUEsVUFNTUUsZUFBZWhCLHNCQUFzQlEsTUFBdEIsRUFBOEJFLE1BQTlCLEVBQXNDSSxlQUF0QyxDQU5yQjs7QUFRQSxXQUFLWCxPQUFMLEdBQWVSLEtBQUtBLEtBQUssS0FBS1MsZUFBVixFQUEyQlcsWUFBM0IsQ0FBTCxFQUErQ0MsWUFBL0MsQ0FBZixDQVRpQixDQVM2RDtBQUMvRTs7O3NDQUV3QkMsYSxFQUFlO0FBQ3RDLFVBQU1kLFVBQVVjLGFBQWhCO0FBQUEsVUFBK0I7QUFDekJiLHdCQUFrQkQsT0FEeEI7QUFBQSxVQUNrQztBQUM1QkUseUJBQW1CTix5QkFGekI7QUFBQSxVQUVvRDtBQUM5Q08saUNBQTJCRCxnQkFIakM7QUFBQSxVQUdvRDtBQUM5Q2EsWUFBTSxJQUFJaEIsR0FBSixDQUFRQyxPQUFSLEVBQWlCQyxlQUFqQixFQUFrQ0MsZ0JBQWxDLEVBQW9EQyx3QkFBcEQsQ0FKWjs7QUFNQSxhQUFPWSxHQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsR0FBakIiLCJmaWxlIjoicGFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBvZmZzZXRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvb2Zmc2V0Jyk7XG5cbmNvbnN0IHsgYWRkMywgc3VidHJhY3QyLCBzY2FsZTIgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBPRkZTRVRfU0NBTEFSLCBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIH0gPSBjb25zdGFudHMsXG4gICAgICB7IGNhbGN1bGF0ZVhBbmdsZU9mZnNldCwgY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0IH0gPSBvZmZzZXRVdGlsaXRpZXM7XG5cbmNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMsIHByZXZpb3VzT2Zmc2V0cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0cyA9IHByZXZpb3VzT2Zmc2V0cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHVwZGF0ZVByZXZpb3VzTW91c2VDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHVwZGF0ZVByZXZpb3VzT2Zmc2V0cygpIHtcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0cyA9IHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHVwZGF0ZU9mZnNldCh0aWx0KSB7XG4gICAgY29uc3QgeEFuZ2xlID0gdGlsdC5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSB0aWx0LmdldFlBbmdsZSgpLFxuICAgICAgICAgIHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpLFxuICAgICAgICAgIHlBbmdsZU9mZnNldCA9IGNhbGN1bGF0ZVlBbmdsZU9mZnNldCh5QW5nbGUsIHJlbGF0aXZlT2Zmc2V0cyksXG4gICAgICAgICAgeEFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0KHhBbmdsZSwgeUFuZ2xlLCByZWxhdGl2ZU9mZnNldHMpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyhhZGQzKHRoaXMucHJldmlvdXNPZmZzZXRzLCB5QW5nbGVPZmZzZXQpLCB4QW5nbGVPZmZzZXQpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXQoaW5pdGlhbE9mZnNldCkge1xuICAgIGNvbnN0IG9mZnNldHMgPSBpbml0aWFsT2Zmc2V0LCAvLy9cbiAgICAgICAgICBwcmV2aW91c09mZnNldHMgPSBvZmZzZXRzLCAgLy8vXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMsIHByZXZpb3VzT2Zmc2V0cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICBcbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuO1xuIl19