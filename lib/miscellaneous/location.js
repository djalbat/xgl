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

var Location = function () {
  function Location(offset, previousOffset, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Location);

    this.offset = offset;
    this.previousOffset = previousOffset;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(Location, [{
    key: 'getOffset',
    value: function getOffset() {
      return this.offset;
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
    key: 'updatePreviousOffset',
    value: function updatePreviousOffset() {
      this.previousOffset = this.offset;
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

      this.offset = add3(add3(this.previousOffset, yAngleOffset), xAngleOffset); ///
    }
  }], [{
    key: 'fromInitialOffset',
    value: function fromInitialOffset(initialOffset) {
      var offset = initialOffset,
          ///
      previousOffset = offset,
          ///
      mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          ///
      previousMouseCoordinates = mouseCoordinates,
          ///
      location = new Location(offset, previousOffset, mouseCoordinates, previousMouseCoordinates);

      return location;
    }
  }]);

  return Location;
}();

module.exports = Location;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsIm9mZnNldFV0aWxpdGllcyIsImFkZDMiLCJzdWJ0cmFjdDIiLCJzY2FsZTIiLCJPRkZTRVRfU0NBTEFSIiwiSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyIsImNhbGN1bGF0ZVhBbmdsZU9mZnNldCIsImNhbGN1bGF0ZVlBbmdsZU9mZnNldCIsIkxvY2F0aW9uIiwib2Zmc2V0IiwicHJldmlvdXNPZmZzZXQiLCJtb3VzZUNvb3JkaW5hdGVzIiwicHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwidGlsdCIsInhBbmdsZSIsImdldFhBbmdsZSIsInlBbmdsZSIsImdldFlBbmdsZSIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInJlbGF0aXZlT2Zmc2V0cyIsInlBbmdsZU9mZnNldCIsInhBbmdsZU9mZnNldCIsImluaXRpYWxPZmZzZXQiLCJsb2NhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRnhCOztJQUlRRyxJLEdBQTRCRixXLENBQTVCRSxJO0lBQU1DLFMsR0FBc0JILFcsQ0FBdEJHLFM7SUFBV0MsTSxHQUFXSixXLENBQVhJLE07SUFDakJDLGEsR0FBNkNQLFMsQ0FBN0NPLGE7SUFBZUMseUIsR0FBOEJSLFMsQ0FBOUJRLHlCO0lBQ2ZDLHFCLEdBQWlETixlLENBQWpETSxxQjtJQUF1QkMscUIsR0FBMEJQLGUsQ0FBMUJPLHFCOztJQUV6QkMsUTtBQUNKLG9CQUFZQyxNQUFaLEVBQW9CQyxjQUFwQixFQUFvQ0MsZ0JBQXBDLEVBQXNEQyx3QkFBdEQsRUFBZ0Y7QUFBQTs7QUFDOUUsU0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0NBLHdCQUFoQztBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLSCxNQUFaO0FBQ0Q7Ozt3Q0FFbUJFLGdCLEVBQWtCO0FBQ3BDLFdBQUtBLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDRDs7O3FEQUVnQztBQUMvQixXQUFLQyx3QkFBTCxHQUFnQyxLQUFLRCxnQkFBckM7QUFDRDs7OzJDQUVzQjtBQUNyQixXQUFLRCxjQUFMLEdBQXNCLEtBQUtELE1BQTNCO0FBQ0Q7OztpQ0FFWUksSSxFQUFNO0FBQ2pCLFVBQU1DLFNBQVNELEtBQUtFLFNBQUwsRUFBZjtBQUFBLFVBQ01DLFNBQVNILEtBQUtJLFNBQUwsRUFEZjtBQUFBLFVBRU1DLFNBQVNkLGFBRmY7QUFBQSxVQUU4QjtBQUN4QmUsaUNBQTJCakIsVUFBVSxLQUFLUyxnQkFBZixFQUFpQyxLQUFLQyx3QkFBdEMsQ0FIakM7QUFBQSxVQUlNUSxrQkFBa0JqQixPQUFPZ0Isd0JBQVAsRUFBaUNELE1BQWpDLENBSnhCO0FBQUEsVUFLTUcsZUFBZWQsc0JBQXNCUyxNQUF0QixFQUE4QkksZUFBOUIsQ0FMckI7QUFBQSxVQU1NRSxlQUFlaEIsc0JBQXNCUSxNQUF0QixFQUE4QkUsTUFBOUIsRUFBc0NJLGVBQXRDLENBTnJCOztBQVFBLFdBQUtYLE1BQUwsR0FBY1IsS0FBS0EsS0FBSyxLQUFLUyxjQUFWLEVBQTBCVyxZQUExQixDQUFMLEVBQThDQyxZQUE5QyxDQUFkLENBVGlCLENBUzJEO0FBQzdFOzs7c0NBRXdCQyxhLEVBQWU7QUFDdEMsVUFBTWQsU0FBU2MsYUFBZjtBQUFBLFVBQThCO0FBQ3hCYix1QkFBaUJELE1BRHZCO0FBQUEsVUFDZ0M7QUFDMUJFLHlCQUFtQk4seUJBRnpCO0FBQUEsVUFFb0Q7QUFDOUNPLGlDQUEyQkQsZ0JBSGpDO0FBQUEsVUFHb0Q7QUFDOUNhLGlCQUFXLElBQUloQixRQUFKLENBQWFDLE1BQWIsRUFBcUJDLGNBQXJCLEVBQXFDQyxnQkFBckMsRUFBdURDLHdCQUF2RCxDQUpqQjs7QUFNQSxhQUFPWSxRQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsUUFBakIiLCJmaWxlIjoibG9jYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIG9mZnNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9vZmZzZXQnKTtcblxuY29uc3QgeyBhZGQzLCBzdWJ0cmFjdDIsIHNjYWxlMiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IE9GRlNFVF9TQ0FMQVIsIElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0LCBjYWxjdWxhdGVZQW5nbGVPZmZzZXQgfSA9IG9mZnNldFV0aWxpdGllcztcblxuY2xhc3MgTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXQsIHByZXZpb3VzT2Zmc2V0LCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gcHJldmlvdXNPZmZzZXQ7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XG4gIH1cblxuICBzZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgdXBkYXRlUHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCkge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgdXBkYXRlUHJldmlvdXNPZmZzZXQoKSB7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgdXBkYXRlT2Zmc2V0KHRpbHQpIHtcbiAgICBjb25zdCB4QW5nbGUgPSB0aWx0LmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IHRpbHQuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgc2NhbGFyID0gT0ZGU0VUX1NDQUxBUiwgLy8vXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhciksXG4gICAgICAgICAgeUFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0KHlBbmdsZSwgcmVsYXRpdmVPZmZzZXRzKSxcbiAgICAgICAgICB4QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVYQW5nbGVPZmZzZXQoeEFuZ2xlLCB5QW5nbGUsIHJlbGF0aXZlT2Zmc2V0cyk7XG5cbiAgICB0aGlzLm9mZnNldCA9IGFkZDMoYWRkMyh0aGlzLnByZXZpb3VzT2Zmc2V0LCB5QW5nbGVPZmZzZXQpLCB4QW5nbGVPZmZzZXQpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXQoaW5pdGlhbE9mZnNldCkge1xuICAgIGNvbnN0IG9mZnNldCA9IGluaXRpYWxPZmZzZXQsIC8vL1xuICAgICAgICAgIHByZXZpb3VzT2Zmc2V0ID0gb2Zmc2V0LCAgLy8vXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbihvZmZzZXQsIHByZXZpb3VzT2Zmc2V0LCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvY2F0aW9uO1xuIl19