'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    offsetsUtilities = require('../utilities/offsets');

var relativeOffsetsFromAnglesAndDirections = offsetsUtilities.relativeOffsetsFromAnglesAndDirections,
    DELTA_SCALAR = constants.DELTA_SCALAR,
    INVERT_SCALAR = constants.INVERT_SCALAR,
    OFFSET_SCALAR = constants.OFFSET_SCALAR,
    zero2 = vectorMaths.zero2,
    add3 = vectorMaths.add3,
    scale2 = vectorMaths.scale2,
    reflect2 = vectorMaths.reflect2,
    scale3 = vectorMaths.scale3,
    subtract2 = vectorMaths.subtract2;

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
    value: function updateXYOffset(tilt) {
      var angles = tilt.getAngles(),
          scalar = OFFSET_SCALAR,
          ///
      relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, scalar)),
          directions = [].concat(_toConsumableArray(scaledReflectedRelativeMouseCoordinates), [0, 0]),
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions);

      this.offsets = add3(this.offsets, relativeOffsets);
    }
  }, {
    key: 'updateZOffset',
    value: function updateZOffset(delta, tilt) {
      var angles = tilt.getAngles(),
          scalar = DELTA_SCALAR,
          ///
      scaledDelta = delta * scalar,
          directions = [0, 0, scaledDelta, 0],
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions);

      this.offsets = add3(this.offsets, relativeOffsets);
    }
  }], [{
    key: 'fromInitialOffsets',
    value: function fromInitialOffsets(initialOffsets) {
      var offsets = initialOffsets,
          ///
      mouseCoordinates = zero2(),
          previousMouseCoordinates = mouseCoordinates,
          ///
      location = new Location(offsets, mouseCoordinates, previousMouseCoordinates);

      return location;
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsIm9mZnNldHNVdGlsaXRpZXMiLCJyZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyIsIkRFTFRBX1NDQUxBUiIsIklOVkVSVF9TQ0FMQVIiLCJPRkZTRVRfU0NBTEFSIiwiemVybzIiLCJhZGQzIiwic2NhbGUyIiwicmVmbGVjdDIiLCJzY2FsZTMiLCJzdWJ0cmFjdDIiLCJMb2NhdGlvbiIsIm9mZnNldHMiLCJtb3VzZUNvb3JkaW5hdGVzIiwicHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwidGlsdCIsImFuZ2xlcyIsImdldEFuZ2xlcyIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsImRpcmVjdGlvbnMiLCJyZWxhdGl2ZU9mZnNldHMiLCJkZWx0YSIsInNjYWxlZERlbHRhIiwiaW5pdGlhbE9mZnNldHMiLCJsb2NhdGlvbiIsImluaXRpYWxQb3NpdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxtQkFBbUJGLFFBQVEsc0JBQVIsQ0FGekI7O0FBSU0sSUFBRUcsc0NBQUYsR0FBNkNELGdCQUE3QyxDQUFFQyxzQ0FBRjtBQUFBLElBQ0VDLFlBREYsR0FDaURMLFNBRGpELENBQ0VLLFlBREY7QUFBQSxJQUNnQkMsYUFEaEIsR0FDaUROLFNBRGpELENBQ2dCTSxhQURoQjtBQUFBLElBQytCQyxhQUQvQixHQUNpRFAsU0FEakQsQ0FDK0JPLGFBRC9CO0FBQUEsSUFFRUMsS0FGRixHQUV1RE4sV0FGdkQsQ0FFRU0sS0FGRjtBQUFBLElBRVNDLElBRlQsR0FFdURQLFdBRnZELENBRVNPLElBRlQ7QUFBQSxJQUVlQyxNQUZmLEdBRXVEUixXQUZ2RCxDQUVlUSxNQUZmO0FBQUEsSUFFdUJDLFFBRnZCLEdBRXVEVCxXQUZ2RCxDQUV1QlMsUUFGdkI7QUFBQSxJQUVpQ0MsTUFGakMsR0FFdURWLFdBRnZELENBRWlDVSxNQUZqQztBQUFBLElBRXlDQyxTQUZ6QyxHQUV1RFgsV0FGdkQsQ0FFeUNXLFNBRnpDOztJQUlBQyxRO0FBQ0osb0JBQVlDLE9BQVosRUFBcUJDLGdCQUFyQixFQUF1Q0Msd0JBQXZDLEVBQWlFO0FBQUE7O0FBQy9ELFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyx3QkFBTCxHQUFnQ0Esd0JBQWhDO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtGLE9BQVo7QUFDRDs7O3dDQUVtQkMsZ0IsRUFBa0I7QUFDcEMsV0FBS0EsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEOzs7b0RBRStCO0FBQzlCLFdBQUtDLHdCQUFMLEdBQWdDLEtBQUtELGdCQUFyQztBQUNEOzs7bUNBRWNFLEksRUFBTTtBQUNuQixVQUFNQyxTQUFTRCxLQUFLRSxTQUFMLEVBQWY7QUFBQSxVQUNNQyxTQUFTZCxhQURmO0FBQUEsVUFDOEI7QUFDeEJlLGlDQUEyQlQsVUFBVSxLQUFLRyxnQkFBZixFQUFpQyxLQUFLQyx3QkFBdEMsQ0FGakM7QUFBQSxVQUdNTSwwQ0FBMENaLFNBQVNELE9BQU9ZLHdCQUFQLEVBQWlDRCxNQUFqQyxDQUFULENBSGhEO0FBQUEsVUFJTUcsMENBQWtCRCx1Q0FBbEIsSUFBMkQsQ0FBM0QsRUFBOEQsQ0FBOUQsRUFKTjtBQUFBLFVBS01FLGtCQUFrQnJCLHVDQUF1Q2UsTUFBdkMsRUFBK0NLLFVBQS9DLENBTHhCOztBQU9BLFdBQUtULE9BQUwsR0FBZU4sS0FBSyxLQUFLTSxPQUFWLEVBQW1CVSxlQUFuQixDQUFmO0FBQ0Q7OztrQ0FFYUMsSyxFQUFPUixJLEVBQU07QUFDekIsVUFBTUMsU0FBU0QsS0FBS0UsU0FBTCxFQUFmO0FBQUEsVUFDTUMsU0FBU2hCLFlBRGY7QUFBQSxVQUM2QjtBQUN2QnNCLG9CQUFjRCxRQUFRTCxNQUY1QjtBQUFBLFVBR01HLGFBQWEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRRyxXQUFSLEVBQXFCLENBQXJCLENBSG5CO0FBQUEsVUFJTUYsa0JBQWtCckIsdUNBQXVDZSxNQUF2QyxFQUErQ0ssVUFBL0MsQ0FKeEI7O0FBTUEsV0FBS1QsT0FBTCxHQUFlTixLQUFLLEtBQUtNLE9BQVYsRUFBbUJVLGVBQW5CLENBQWY7QUFDRDs7O3VDQUV5QkcsYyxFQUFnQjtBQUN4QyxVQUFNYixVQUFVYSxjQUFoQjtBQUFBLFVBQWdDO0FBQzFCWix5QkFBbUJSLE9BRHpCO0FBQUEsVUFFTVMsMkJBQTJCRCxnQkFGakM7QUFBQSxVQUVvRDtBQUM5Q2EsaUJBQVcsSUFBSWYsUUFBSixDQUFhQyxPQUFiLEVBQXNCQyxnQkFBdEIsRUFBd0NDLHdCQUF4QyxDQUhqQjs7QUFLQSxhQUFPWSxRQUFQO0FBQ0Q7Ozt3Q0FFMEJDLGUsRUFBaUI7QUFDMUMsVUFBTVQsU0FBU2YsYUFBZjtBQUFBLFVBQThCO0FBQ3hCUyxnQkFBVUgsT0FBT2tCLGVBQVAsRUFBd0JULE1BQXhCLENBRGhCO0FBQUEsVUFFTUwsbUJBQW1CLElBRnpCO0FBQUEsVUFFZ0M7QUFDMUJDLGlDQUEyQixJQUhqQztBQUFBLFVBR3dDO0FBQ2xDWSxpQkFBVyxJQUFJZixRQUFKLENBQWFDLE9BQWIsRUFBc0JDLGdCQUF0QixFQUF3Q0Msd0JBQXhDLENBSmpCOztBQU1BLGFBQU9ZLFFBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJsQixRQUFqQiIsImZpbGUiOiJsb2NhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgb2Zmc2V0c1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9vZmZzZXRzJyk7XG5cbmNvbnN0IHsgcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMgfSA9IG9mZnNldHNVdGlsaXRpZXMsXG4gICAgICB7IERFTFRBX1NDQUxBUiwgSU5WRVJUX1NDQUxBUiwgT0ZGU0VUX1NDQUxBUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyB6ZXJvMiwgYWRkMywgc2NhbGUyLCByZWZsZWN0Miwgc2NhbGUzLCBzdWJ0cmFjdDIgfSA9IHZlY3Rvck1hdGhzO1xuXG5jbGFzcyBMb2NhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHVwZGF0ZVhZT2Zmc2V0KHRpbHQpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICBzY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSByZWZsZWN0MihzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpKSxcbiAgICAgICAgICBkaXJlY3Rpb25zID0gWyAuLi5zY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDAsIDAgXSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICB1cGRhdGVaT2Zmc2V0KGRlbHRhLCB0aWx0KSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBzY2FsYXIgPSBERUxUQV9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHNjYWxlZERlbHRhID0gZGVsdGEgKiBzY2FsYXIsXG4gICAgICAgICAgZGlyZWN0aW9ucyA9IFsgMCwgMCwgc2NhbGVkRGVsdGEsIDAgXSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IGluaXRpYWxPZmZzZXRzLCAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSxcbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24ob2Zmc2V0cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbikge1xuICAgIGNvbnN0IHNjYWxhciA9IElOVkVSVF9TQ0FMQVIsIC8vL1xuICAgICAgICAgIG9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBzY2FsYXIpLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKG9mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG4gICAgXG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9jYXRpb247XG4iXX0=