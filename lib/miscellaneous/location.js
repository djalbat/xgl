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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsIm9mZnNldFV0aWxpdGllcyIsImFkZDMiLCJzdWJ0cmFjdDIiLCJzY2FsZTIiLCJzY2FsZTMiLCJERUxUQV9TQ0FMQVIiLCJPRkZTRVRfU0NBTEFSIiwiY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0IiwiY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0IiwiY2FsY3VsYXRlWkFuZ2xlT2Zmc2V0IiwiTG9jYXRpb24iLCJvZmZzZXRzIiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInRpbHQiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJ4QW5nbGUiLCJnZXRYQW5nbGUiLCJ5QW5nbGUiLCJnZXRZQW5nbGUiLCJzY2FsYXIiLCJyZWxhdGl2ZU9mZnNldHMiLCJ5QW5nbGVPZmZzZXQiLCJ4QW5nbGVPZmZzZXQiLCJkZWx0YSIsInRoaXJkUmVsYXRpdmVPZmZzZXQiLCJ6QW5nbGVPZmZzZXQiLCJpbml0aWFsUG9zaXRpb24iLCJsb2NhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRnhCOztJQUlRRyxJLEdBQW9DRixXLENBQXBDRSxJO0lBQU1DLFMsR0FBOEJILFcsQ0FBOUJHLFM7SUFBV0MsTSxHQUFtQkosVyxDQUFuQkksTTtJQUFRQyxNLEdBQVdMLFcsQ0FBWEssTTtJQUN6QkMsWSxHQUFnQ1IsUyxDQUFoQ1EsWTtJQUFjQyxhLEdBQWtCVCxTLENBQWxCUyxhO0lBQ2RDLHFCLEdBQXdFUCxlLENBQXhFTyxxQjtJQUF1QkMscUIsR0FBaURSLGUsQ0FBakRRLHFCO0lBQXVCQyxxQixHQUEwQlQsZSxDQUExQlMscUI7O0lBRWhEQyxRO0FBQ0osb0JBQVlDLE9BQVosRUFBcUJDLGdCQUFyQixFQUF1Q0Msd0JBQXZDLEVBQWlFO0FBQUE7O0FBQy9ELFNBQUtGLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCOztBQUVBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsT0FBWjtBQUNEOzs7d0NBRW1CQyxnQixFQUFrQjtBQUNwQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OztvREFFK0I7QUFDOUIsV0FBS0Msd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDO0FBQ0Q7OzttQ0FFY0EsZ0IsRUFBa0JFLEksRUFBTTtBQUNyQyxVQUFNQywyQkFBMkJiLFVBQVVVLGdCQUFWLEVBQTRCLEtBQUtDLHdCQUFqQyxDQUFqQztBQUFBLFVBQ01HLFNBQVNGLEtBQUtHLFNBQUwsRUFEZjtBQUFBLFVBRU1DLFNBQVNKLEtBQUtLLFNBQUwsRUFGZjtBQUFBLFVBR01DLFNBQVNkLGFBSGY7QUFBQSxVQUc4QjtBQUN4QmUsd0JBQWtCbEIsT0FBT1ksd0JBQVAsRUFBaUNLLE1BQWpDLENBSnhCO0FBQUEsVUFLTUUsZUFBZWQsc0JBQXNCVSxNQUF0QixFQUE4QkcsZUFBOUIsQ0FMckI7QUFBQSxVQU1NRSxlQUFlaEIsc0JBQXNCUyxNQUF0QixFQUE4QkUsTUFBOUIsRUFBc0NHLGVBQXRDLENBTnJCOztBQVFBLFdBQUtWLE9BQUwsR0FBZVYsS0FBS0EsS0FBSyxLQUFLVSxPQUFWLEVBQW1CVyxZQUFuQixDQUFMLEVBQXVDQyxZQUF2QyxDQUFmO0FBQ0Q7OztrQ0FFYUMsSyxFQUFPVixJLEVBQU07QUFDekIsVUFBTUUsU0FBU0YsS0FBS0csU0FBTCxFQUFmO0FBQUEsVUFDTUMsU0FBU0osS0FBS0ssU0FBTCxFQURmO0FBQUEsVUFFTUMsU0FBU2YsWUFGZjtBQUFBLFVBRTZCO0FBQ3ZCb0IsNEJBQXNCRCxRQUFRSixNQUhwQztBQUFBLFVBSU1NLGVBQWVqQixzQkFBc0JPLE1BQXRCLEVBQThCRSxNQUE5QixFQUFzQ08sbUJBQXRDLENBSnJCOztBQU1BLFdBQUtkLE9BQUwsR0FBZVYsS0FBSyxLQUFLVSxPQUFWLEVBQW1CZSxZQUFuQixDQUFmO0FBQ0Q7Ozt3Q0FFMEJDLGUsRUFBaUI7QUFDMUMsVUFBTWhCLFVBQVVQLE9BQU91QixlQUFQLEVBQXdCLENBQUMsQ0FBekIsQ0FBaEI7QUFBQSxVQUNNZixtQkFBbUIsSUFEekI7QUFBQSxVQUNnQztBQUMxQkMsaUNBQTJCLElBRmpDO0FBQUEsVUFFd0M7QUFDbENlLGlCQUFXLElBQUlsQixRQUFKLENBQWFDLE9BQWIsRUFBc0JDLGdCQUF0QixFQUF3Q0Msd0JBQXhDLENBSGpCOztBQUtBLGFBQU9lLFFBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJwQixRQUFqQiIsImZpbGUiOiJsb2NhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgb2Zmc2V0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL29mZnNldCcpO1xuXG5jb25zdCB7IGFkZDMsIHN1YnRyYWN0Miwgc2NhbGUyLCBzY2FsZTMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBERUxUQV9TQ0FMQVIsIE9GRlNFVF9TQ0FMQVIgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0LCBjYWxjdWxhdGVZQW5nbGVPZmZzZXQsIGNhbGN1bGF0ZVpBbmdsZU9mZnNldCB9ID0gb2Zmc2V0VXRpbGl0aWVzO1xuXG5jbGFzcyBMb2NhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG5cbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICBzZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICB1cGRhdGVYWU9mZnNldChtb3VzZUNvb3JkaW5hdGVzLCB0aWx0KSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB4QW5nbGUgPSB0aWx0LmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IHRpbHQuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgc2NhbGFyID0gT0ZGU0VUX1NDQUxBUiwgLy8vXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKSxcbiAgICAgICAgICB5QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVZQW5nbGVPZmZzZXQoeUFuZ2xlLCByZWxhdGl2ZU9mZnNldHMpLFxuICAgICAgICAgIHhBbmdsZU9mZnNldCA9IGNhbGN1bGF0ZVhBbmdsZU9mZnNldCh4QW5nbGUsIHlBbmdsZSwgcmVsYXRpdmVPZmZzZXRzKTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDMoYWRkMyh0aGlzLm9mZnNldHMsIHlBbmdsZU9mZnNldCksIHhBbmdsZU9mZnNldCk7XG4gIH1cblxuICB1cGRhdGVaT2Zmc2V0KGRlbHRhLCB0aWx0KSB7XG4gICAgY29uc3QgeEFuZ2xlID0gdGlsdC5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSB0aWx0LmdldFlBbmdsZSgpLFxuICAgICAgICAgIHNjYWxhciA9IERFTFRBX1NDQUxBUiwgLy8vXG4gICAgICAgICAgdGhpcmRSZWxhdGl2ZU9mZnNldCA9IGRlbHRhICogc2NhbGFyLFxuICAgICAgICAgIHpBbmdsZU9mZnNldCA9IGNhbGN1bGF0ZVpBbmdsZU9mZnNldCh4QW5nbGUsIHlBbmdsZSwgdGhpcmRSZWxhdGl2ZU9mZnNldCk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMub2Zmc2V0cywgekFuZ2xlT2Zmc2V0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbikge1xuICAgIGNvbnN0IG9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCAtMSksXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24ob2Zmc2V0cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICBcbiAgICByZXR1cm4gbG9jYXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2NhdGlvbjtcbiJdfQ==