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
    key: 'updateXYOffset',
    value: function updateXYOffset(tilt) {
      var xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR,
          ///
      relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeOffset = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, relativeOffset),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, relativeOffset);

      this.offset = add3(add3(this.previousOffset, yAngleOffset), xAngleOffset);
    }
  }, {
    key: 'updateZOffset',
    value: function updateZOffset(tilt, delta) {
      var xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          thirdRelativeOffset = delta * DELTA_SCALAR,
          zAngleOffset = calculateZAngleOffset(xAngle, yAngle, thirdRelativeOffset);

      this.previousOffset = add3(this.previousOffset, zAngleOffset);

      this.updateXYOffset(tilt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsIm9mZnNldFV0aWxpdGllcyIsImFkZDMiLCJzdWJ0cmFjdDIiLCJzY2FsZTIiLCJERUxUQV9TQ0FMQVIiLCJPRkZTRVRfU0NBTEFSIiwiSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyIsImNhbGN1bGF0ZVhBbmdsZU9mZnNldCIsImNhbGN1bGF0ZVlBbmdsZU9mZnNldCIsImNhbGN1bGF0ZVpBbmdsZU9mZnNldCIsIkxvY2F0aW9uIiwib2Zmc2V0IiwicHJldmlvdXNPZmZzZXQiLCJtb3VzZUNvb3JkaW5hdGVzIiwicHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwidGlsdCIsInhBbmdsZSIsImdldFhBbmdsZSIsInlBbmdsZSIsImdldFlBbmdsZSIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInJlbGF0aXZlT2Zmc2V0IiwieUFuZ2xlT2Zmc2V0IiwieEFuZ2xlT2Zmc2V0IiwiZGVsdGEiLCJ0aGlyZFJlbGF0aXZlT2Zmc2V0IiwiekFuZ2xlT2Zmc2V0IiwidXBkYXRlWFlPZmZzZXQiLCJpbml0aWFsT2Zmc2V0IiwibG9jYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSxxQkFBUixDQUZ4Qjs7SUFJUUcsSSxHQUE0QkYsVyxDQUE1QkUsSTtJQUFNQyxTLEdBQXNCSCxXLENBQXRCRyxTO0lBQVdDLE0sR0FBV0osVyxDQUFYSSxNO0lBQ2pCQyxZLEdBQTJEUCxTLENBQTNETyxZO0lBQWNDLGEsR0FBNkNSLFMsQ0FBN0NRLGE7SUFBZUMseUIsR0FBOEJULFMsQ0FBOUJTLHlCO0lBQzdCQyxxQixHQUF3RVAsZSxDQUF4RU8scUI7SUFBdUJDLHFCLEdBQWlEUixlLENBQWpEUSxxQjtJQUF1QkMscUIsR0FBMEJULGUsQ0FBMUJTLHFCOztJQUVoREMsUTtBQUNKLG9CQUFZQyxNQUFaLEVBQW9CQyxjQUFwQixFQUFvQ0MsZ0JBQXBDLEVBQXNEQyx3QkFBdEQsRUFBZ0Y7QUFBQTs7QUFDOUUsU0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0NBLHdCQUFoQztBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLSCxNQUFaO0FBQ0Q7Ozt3Q0FFbUJFLGdCLEVBQWtCO0FBQ3BDLFdBQUtBLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDRDs7O3FEQUVnQztBQUMvQixXQUFLQyx3QkFBTCxHQUFnQyxLQUFLRCxnQkFBckM7QUFDRDs7OzJDQUVzQjtBQUNyQixXQUFLRCxjQUFMLEdBQXNCLEtBQUtELE1BQTNCO0FBQ0Q7OzttQ0FFY0ksSSxFQUFNO0FBQ25CLFVBQU1DLFNBQVNELEtBQUtFLFNBQUwsRUFBZjtBQUFBLFVBQ01DLFNBQVNILEtBQUtJLFNBQUwsRUFEZjtBQUFBLFVBRU1DLFNBQVNmLGFBRmY7QUFBQSxVQUU4QjtBQUN4QmdCLGlDQUEyQm5CLFVBQVUsS0FBS1csZ0JBQWYsRUFBaUMsS0FBS0Msd0JBQXRDLENBSGpDO0FBQUEsVUFJTVEsaUJBQWlCbkIsT0FBT2tCLHdCQUFQLEVBQWlDRCxNQUFqQyxDQUp2QjtBQUFBLFVBS01HLGVBQWVmLHNCQUFzQlUsTUFBdEIsRUFBOEJJLGNBQTlCLENBTHJCO0FBQUEsVUFNTUUsZUFBZWpCLHNCQUFzQlMsTUFBdEIsRUFBOEJFLE1BQTlCLEVBQXNDSSxjQUF0QyxDQU5yQjs7QUFRQSxXQUFLWCxNQUFMLEdBQWNWLEtBQUtBLEtBQUssS0FBS1csY0FBVixFQUEwQlcsWUFBMUIsQ0FBTCxFQUE4Q0MsWUFBOUMsQ0FBZDtBQUNEOzs7a0NBRWFULEksRUFBTVUsSyxFQUFPO0FBQ3pCLFVBQU1ULFNBQVNELEtBQUtFLFNBQUwsRUFBZjtBQUFBLFVBQ01DLFNBQVNILEtBQUtJLFNBQUwsRUFEZjtBQUFBLFVBRU1PLHNCQUFzQkQsUUFBUXJCLFlBRnBDO0FBQUEsVUFHTXVCLGVBQWVsQixzQkFBc0JPLE1BQXRCLEVBQThCRSxNQUE5QixFQUFzQ1EsbUJBQXRDLENBSHJCOztBQUtBLFdBQUtkLGNBQUwsR0FBc0JYLEtBQUssS0FBS1csY0FBVixFQUEwQmUsWUFBMUIsQ0FBdEI7O0FBRUEsV0FBS0MsY0FBTCxDQUFvQmIsSUFBcEI7QUFDRDs7O3NDQUV3QmMsYSxFQUFlO0FBQ3RDLFVBQU1sQixTQUFTa0IsYUFBZjtBQUFBLFVBQThCO0FBQ3hCakIsdUJBQWlCRCxNQUR2QjtBQUFBLFVBQ2dDO0FBQzFCRSx5QkFBbUJQLHlCQUZ6QjtBQUFBLFVBRW9EO0FBQzlDUSxpQ0FBMkJELGdCQUhqQztBQUFBLFVBR29EO0FBQzlDaUIsaUJBQVcsSUFBSXBCLFFBQUosQ0FBYUMsTUFBYixFQUFxQkMsY0FBckIsRUFBcUNDLGdCQUFyQyxFQUF1REMsd0JBQXZELENBSmpCOztBQU1BLGFBQU9nQixRQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCdEIsUUFBakIiLCJmaWxlIjoibG9jYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIG9mZnNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9vZmZzZXQnKTtcblxuY29uc3QgeyBhZGQzLCBzdWJ0cmFjdDIsIHNjYWxlMiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IERFTFRBX1NDQUxBUiwgT0ZGU0VUX1NDQUxBUiwgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBjYWxjdWxhdGVYQW5nbGVPZmZzZXQsIGNhbGN1bGF0ZVlBbmdsZU9mZnNldCwgY2FsY3VsYXRlWkFuZ2xlT2Zmc2V0IH0gPSBvZmZzZXRVdGlsaXRpZXM7XG5cbmNsYXNzIExvY2F0aW9uIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0LCBwcmV2aW91c09mZnNldCwgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHByZXZpb3VzT2Zmc2V0O1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHVwZGF0ZVByZXZpb3VzTW91c2VDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHVwZGF0ZVByZXZpb3VzT2Zmc2V0KCkge1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgfVxuXG4gIHVwZGF0ZVhZT2Zmc2V0KHRpbHQpIHtcbiAgICBjb25zdCB4QW5nbGUgPSB0aWx0LmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IHRpbHQuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgc2NhbGFyID0gT0ZGU0VUX1NDQUxBUiwgLy8vXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0ID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKSxcbiAgICAgICAgICB5QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVZQW5nbGVPZmZzZXQoeUFuZ2xlLCByZWxhdGl2ZU9mZnNldCksXG4gICAgICAgICAgeEFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0KHhBbmdsZSwgeUFuZ2xlLCByZWxhdGl2ZU9mZnNldCk7XG5cbiAgICB0aGlzLm9mZnNldCA9IGFkZDMoYWRkMyh0aGlzLnByZXZpb3VzT2Zmc2V0LCB5QW5nbGVPZmZzZXQpLCB4QW5nbGVPZmZzZXQpO1xuICB9XG5cbiAgdXBkYXRlWk9mZnNldCh0aWx0LCBkZWx0YSkge1xuICAgIGNvbnN0IHhBbmdsZSA9IHRpbHQuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gdGlsdC5nZXRZQW5nbGUoKSxcbiAgICAgICAgICB0aGlyZFJlbGF0aXZlT2Zmc2V0ID0gZGVsdGEgKiBERUxUQV9TQ0FMQVIsXG4gICAgICAgICAgekFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWkFuZ2xlT2Zmc2V0KHhBbmdsZSwgeUFuZ2xlLCB0aGlyZFJlbGF0aXZlT2Zmc2V0KTtcblxuICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSBhZGQzKHRoaXMucHJldmlvdXNPZmZzZXQsIHpBbmdsZU9mZnNldCk7XG5cbiAgICB0aGlzLnVwZGF0ZVhZT2Zmc2V0KHRpbHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBpbml0aWFsT2Zmc2V0LCAvLy9cbiAgICAgICAgICBwcmV2aW91c09mZnNldCA9IG9mZnNldCwgIC8vL1xuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLCAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24ob2Zmc2V0LCBwcmV2aW91c09mZnNldCwgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvY2F0aW9uO1xuXG4iXX0=